import crypto from "node:crypto";
import fs from "node:fs";
import pg from "pg";
import {
  defaultHomePage,
  defaultNavigation,
  defaultRecruitmentTabs,
  defaultSiteSettings
} from "../lib/cms/default-content.js";

function loadEnvFile() {
  if (!fs.existsSync(".env")) return;

  for (const line of fs.readFileSync(".env", "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function arrayRowId() {
  return crypto.randomUUID();
}

function keyFrom(values) {
  return values.map((value) => value ?? "").join("\u001f");
}

async function one(client, query, params = []) {
  const result = await client.query(query, params);
  return result.rows[0];
}

async function getOrCreateGlobal(client, table, statusType, columns) {
  const existing = await one(client, `select id from ${table} order by id limit 1`);
  const names = Object.keys(columns);
  const values = Object.values(columns);

  if (!existing) {
    if (!names.length) {
      const result = await client.query(
        `
          insert into ${table} (_status, created_at, updated_at)
          values ('published'::${statusType}, now(), now())
          returning id
        `
      );
      return result.rows[0].id;
    }

    const placeholders = names.map((_, index) => `$${index + 1}`);
    const result = await client.query(
      `
        insert into ${table} (${names.join(", ")}, _status, created_at, updated_at)
        values (${placeholders.join(", ")}, 'published'::${statusType}, now(), now())
        returning id
      `,
      values
    );
    return result.rows[0].id;
  }

  if (!names.length) {
    await client.query(
      `
        update ${table}
        set _status = 'published'::${statusType},
            updated_at = now()
        where id = $1
      `,
      [existing.id]
    );
    return existing.id;
  }

  const assignments = names.map((name, index) => `${name} = coalesce(nullif(${name}, ''), $${index + 1})`);
  await client.query(
    `
      update ${table}
      set ${assignments.join(", ")},
          _status = 'published'::${statusType},
          updated_at = now()
      where id = $${values.length + 1}
    `,
    [...values, existing.id]
  );
  return existing.id;
}

async function ensureHomePageRecruitmentColumns(client) {
  const columns = ["eyebrow", "title", "cta_label", "cta_href"];

  for (const column of columns) {
    await client.query(`alter table home_page add column if not exists recruitment_${column} varchar`);
    await client.query(`alter table _home_page_v add column if not exists version_recruitment_${column} varchar`);
  }
}

async function getOrCreateTab(client, tab) {
  const existing = await one(client, "select id from recruitment_tabs where label = $1 limit 1", [tab.label]);

  if (existing) {
    await client.query(
      `
        update recruitment_tabs
        set kind = $1::enum_recruitment_tabs_kind,
            sort_order = $2,
            _status = 'published'::enum_recruitment_tabs_status,
            updated_at = now()
        where id = $3
      `,
      [tab.kind, tab.sortOrder ?? 0, existing.id]
    );
    return existing.id;
  }

  const result = await client.query(
    `
      insert into recruitment_tabs (label, kind, sort_order, _status, created_at, updated_at)
      values ($1, $2::enum_recruitment_tabs_kind, $3, 'published'::enum_recruitment_tabs_status, now(), now())
      returning id
    `,
    [tab.label, tab.kind, tab.sortOrder ?? 0]
  );
  return result.rows[0].id;
}

async function nextOrder(client, table, parentColumn, parentId) {
  const row = await one(
    client,
    `select coalesce(max(_order), -1)::int + 1 as next_order from ${table} where ${parentColumn} = $1`,
    [parentId]
  );
  return row.next_order;
}

async function syncChildRows(client, { table, parentColumn = "_parent_id", parentId, rows, columns, enumCasts = {}, keyColumns }) {
  if (!rows?.length) return 0;

  const existingRows = await client.query(
    `select ${keyColumns.join(", ")} from ${table} where ${parentColumn} = $1`,
    [parentId]
  );
  const existingCounts = new Map();
  for (const row of existingRows.rows) {
    const key = keyFrom(keyColumns.map((column) => row[column]));
    existingCounts.set(key, (existingCounts.get(key) || 0) + 1);
  }

  const targetCounts = new Map();
  for (const row of rows) {
    const key = keyFrom(keyColumns.map((column) => row[column]));
    if (!targetCounts.has(key)) targetCounts.set(key, []);
    targetCounts.get(key).push(row);
  }

  let order = await nextOrder(client, table, parentColumn, parentId);
  let inserted = 0;

  for (const [key, targetRows] of targetCounts.entries()) {
    const missing = targetRows.length - (existingCounts.get(key) || 0);
    for (const row of targetRows.slice(0, Math.max(0, missing))) {
      const insertColumns = ["_order", parentColumn, "id", ...columns];
      const values = [order++, parentId, arrayRowId(), ...columns.map((column) => row[column])];
      const placeholders = insertColumns.map((column, index) => {
        const placeholder = `$${index + 1}`;
        return enumCasts[column] ? `${placeholder}::${enumCasts[column]}` : placeholder;
      });

      await client.query(
        `insert into ${table} (${insertColumns.join(", ")}) values (${placeholders.join(", ")})`,
        values
      );
      inserted += 1;
    }
  }

  return inserted;
}

async function syncHomePage(client) {
  const home = defaultHomePage;
  const id = await getOrCreateGlobal(client, "home_page", "enum_home_page_status", {
    hero_eyebrow: home.hero.eyebrow,
    hero_title: home.hero.title,
    hero_background_image_url: home.hero.backgroundImageUrl,
    overview_eyebrow: home.overview.eyebrow,
    overview_title: home.overview.title,
    overview_intro: home.overview.intro,
    overview_video_url: home.overview.videoUrl,
    overview_video_poster_url: home.overview.videoPosterUrl,
    overview_process_image_url: home.overview.processImageUrl,
    overview_process_image_alt: home.overview.processImageAlt,
    markets_eyebrow: home.markets.eyebrow,
    markets_title: home.markets.title,
    markets_cta_title: home.markets.ctaTitle,
    markets_cta_text: home.markets.ctaText,
    markets_cta_label: home.markets.ctaLabel,
    markets_cta_href: home.markets.ctaHref,
    recruitment_eyebrow: home.recruitment.eyebrow,
    recruitment_title: home.recruitment.title,
    recruitment_cta_label: home.recruitment.ctaLabel,
    recruitment_cta_href: home.recruitment.ctaHref,
    academy_eyebrow: home.academy.eyebrow,
    academy_title: home.academy.title,
    academy_lead: home.academy.lead,
    academy_modules_title: home.academy.modulesTitle,
    contact_cta_eyebrow: home.contactCta.eyebrow
  });

  let inserted = 0;
  inserted += await syncChildRows(client, {
    table: "home_page_hero_lead_lines",
    parentId: id,
    rows: home.hero.leadLines,
    columns: ["text"],
    keyColumns: ["text"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_hero_actions",
    parentId: id,
    rows: home.hero.actions,
    columns: ["label", "href", "style"],
    enumCasts: { style: "enum_home_page_hero_actions_style" },
    keyColumns: ["label", "href"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_overview_body",
    parentId: id,
    rows: home.overview.body,
    columns: ["text"],
    keyColumns: ["text"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_overview_images",
    parentId: id,
    rows: home.overview.images.map((item) => ({
      image_id: null,
      image_url: item.imageUrl,
      image_alt: item.imageAlt
    })),
    columns: ["image_id", "image_url", "image_alt"],
    keyColumns: ["image_url", "image_alt"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_overview_metrics",
    parentId: id,
    rows: home.overview.metrics,
    columns: ["value", "label", "stars"],
    keyColumns: ["value", "label"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_markets_cards",
    parentId: id,
    rows: home.markets.cards.map((item) => ({
      region: item.region,
      image_id: null,
      image_url: item.imageUrl,
      image_alt: item.imageAlt,
      description: item.description
    })),
    columns: ["region", "image_id", "image_url", "image_alt", "description"],
    keyColumns: ["region"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_academy_checklist",
    parentId: id,
    rows: home.academy.checklist,
    columns: ["text"],
    keyColumns: ["text"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_academy_visuals",
    parentId: id,
    rows: home.academy.visuals.map((item) => ({
      image_id: null,
      image_url: item.imageUrl,
      image_alt: item.imageAlt
    })),
    columns: ["image_id", "image_url", "image_alt"],
    keyColumns: ["image_url", "image_alt"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_academy_modules",
    parentId: id,
    rows: home.academy.modules,
    columns: ["title", "description"],
    keyColumns: ["title"]
  });
  inserted += await syncChildRows(client, {
    table: "home_page_contact_cta_title_lines",
    parentId: id,
    rows: home.contactCta.titleLines,
    columns: ["text"],
    keyColumns: ["text"]
  });

  return { id, inserted };
}

async function syncSiteSettings(client) {
  const settings = defaultSiteSettings;
  const id = await getOrCreateGlobal(client, "site_settings", "enum_site_settings_status", {
    company_name: settings.companyName,
    address: settings.address,
    email: settings.email,
    tax_code: settings.taxCode,
    logo_url: settings.logoUrl,
    facebook_url: settings.facebookUrl,
    tiktok_url: settings.tiktokUrl,
    facebook_embed_url: settings.facebookEmbedUrl,
    footer_note: settings.footerNote,
    floating_contact_label: settings.floatingContact.label,
    floating_contact_cta: settings.floatingContact.cta,
    floating_contact_phone: settings.floatingContact.phone,
    floating_contact_url: settings.floatingContact.url,
    seo_title: settings.seo.title,
    seo_description: settings.seo.description
  });

  let inserted = 0;
  inserted += await syncChildRows(client, {
    table: "site_settings_phones",
    parentId: id,
    rows: settings.phones,
    columns: ["label", "number"],
    keyColumns: ["number"]
  });
  inserted += await syncChildRows(client, {
    table: "site_settings_certifications",
    parentId: id,
    rows: settings.certifications.map((item) => ({
      title: item.title,
      image_id: null,
      image_url: item.imageUrl,
      image_alt: item.imageAlt,
      url: item.url
    })),
    columns: ["title", "image_id", "image_url", "image_alt", "url"],
    keyColumns: ["title"]
  });
  inserted += await syncChildRows(client, {
    table: "site_settings_seo_keywords",
    parentId: id,
    rows: settings.seo.keywords,
    columns: ["keyword"],
    keyColumns: ["keyword"]
  });

  return { id, inserted };
}

async function syncNavigation(client) {
  const id = await getOrCreateGlobal(client, "navigation", "enum_navigation_status", {});
  let inserted = 0;
  inserted += await syncChildRows(client, {
    table: "navigation_links",
    parentId: id,
    rows: defaultNavigation.links,
    columns: ["href", "label"],
    keyColumns: ["href", "label"]
  });
  inserted += await syncChildRows(client, {
    table: "navigation_languages",
    parentId: id,
    rows: defaultNavigation.languages.map((item) => ({
      label: item.label,
      href: item.href,
      flag_url: item.flagUrl
    })),
    columns: ["label", "href", "flag_url"],
    keyColumns: ["label", "href"]
  });

  for (const language of defaultNavigation.languages) {
    await client.query(
      `
        update navigation_languages
        set href = $1
        where _parent_id = $2
          and label = $3
          and (href is null or href = '' or href = '#top')
      `,
      [language.href, id, language.label]
    );
  }

  await client.query(
    `
      delete from navigation_languages a
      using navigation_languages b
      where a._parent_id = b._parent_id
        and a.label = b.label
        and a.href = b.href
        and a.id > b.id
    `
  );

  return { id, inserted };
}

async function syncAviationCards(client, tabId, cards = []) {
  let inserted = 0;
  for (const card of cards) {
    let cardRow = await one(
      client,
      "select id from recruitment_tabs_aviation_cards where _parent_id = $1 and title = $2 limit 1",
      [tabId, card.title]
    );

    if (!cardRow) {
      const order = await nextOrder(client, "recruitment_tabs_aviation_cards", "_parent_id", tabId);
      cardRow = {
        id: arrayRowId()
      };
      await client.query(
        `
          insert into recruitment_tabs_aviation_cards (_order, _parent_id, id, title, wide)
          values ($1, $2, $3, $4, $5)
        `,
        [order, tabId, cardRow.id, card.title, Boolean(card.wide)]
      );
      inserted += 1;
    }

    inserted += await syncChildRows(client, {
      table: "recruitment_tabs_aviation_cards_items",
      parentColumn: "_parent_id",
      parentId: cardRow.id,
      rows: card.items || [],
      columns: ["text"],
      keyColumns: ["text"]
    });
  }
  return inserted;
}

async function syncJobs(client, tabId, tab) {
  const jobs = tab.jobs || [];
  if (!jobs.length) return 0;

  const rows = jobs.map((job) => ({
    tab_id: tabId,
    title: job.title,
    field: job.field,
    image_id: null,
    image_url: job.imageUrl,
    image_alt: `${job.title} ${job.field}`,
    market: tab.label,
    quantity: job.quantity,
    salary: job.salary,
    location: job.location,
    interview_date: null,
    interview_date_label: job.interviewDateLabel,
    sort_order: 0
  }));

  const existing = await client.query(
    `
      select title, field, image_url, quantity, salary, location, interview_date_label, count(*)::int as count
      from job_orders
      where tab_id = $1
      group by title, field, image_url, quantity, salary, location, interview_date_label
    `,
    [tabId]
  );
  const existingCounts = new Map();
  for (const row of existing.rows) {
    const key = keyFrom([
      row.title,
      row.field,
      row.image_url,
      row.quantity,
      row.salary,
      row.location,
      row.interview_date_label
    ]);
    existingCounts.set(key, row.count);
  }

  const targetCounts = new Map();
  for (const row of rows) {
    const key = keyFrom([
      row.title,
      row.field,
      row.image_url,
      row.quantity,
      row.salary,
      row.location,
      row.interview_date_label
    ]);
    if (!targetCounts.has(key)) targetCounts.set(key, []);
    targetCounts.get(key).push(row);
  }

  const maxOrderRow = await one(client, "select coalesce(max(sort_order), -1)::int + 1 as next_order from job_orders where tab_id = $1", [tabId]);
  let sortOrder = maxOrderRow.next_order;
  let inserted = 0;

  for (const [key, targetRows] of targetCounts.entries()) {
    const missing = targetRows.length - (existingCounts.get(key) || 0);
    for (const row of targetRows.slice(0, Math.max(0, missing))) {
      await client.query(
        `
          insert into job_orders (
            tab_id, title, field, image_id, image_url, image_alt, market,
            quantity, salary, location, interview_date, interview_date_label,
            sort_order, _status, created_at, updated_at
          )
          values (
            $1, $2, $3, $4, $5, $6, $7,
            $8, $9, $10, $11, $12,
            $13, 'published'::enum_job_orders_status, now(), now()
          )
        `,
        [
          row.tab_id,
          row.title,
          row.field,
          row.image_id,
          row.image_url,
          row.image_alt,
          row.market,
          row.quantity,
          row.salary,
          row.location,
          row.interview_date,
          row.interview_date_label,
          sortOrder++
        ]
      );
      inserted += 1;
    }
  }

  return inserted;
}

async function syncRecruitment(client) {
  let inserted = 0;
  for (const tab of defaultRecruitmentTabs) {
    const tabId = await getOrCreateTab(client, tab);
    inserted += await syncAviationCards(client, tabId, tab.aviationCards);
    inserted += await syncJobs(client, tabId, tab);
  }
  return { inserted };
}

async function main() {
  loadEnvFile();
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  try {
    await client.query("begin");
    await ensureHomePageRecruitmentColumns(client);
    const home = await syncHomePage(client);
    const settings = await syncSiteSettings(client);
    const navigation = await syncNavigation(client);
    const recruitment = await syncRecruitment(client);
    await client.query("commit");

    console.log("CMS sync complete.");
    console.log(`Home page array rows inserted: ${home.inserted}`);
    console.log(`Site settings array rows inserted: ${settings.inserted}`);
    console.log(`Navigation rows inserted: ${navigation.inserted}`);
    console.log(`Recruitment rows inserted: ${recruitment.inserted}`);
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
