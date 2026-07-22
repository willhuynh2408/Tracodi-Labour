import crypto from "node:crypto";
import fs from "node:fs";
import pg from "pg";
import { defaultHomePage, defaultRecruitmentTabs } from "../lib/cms/default-content.js";

const locales = ["vi", "en", "ja"];

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

function rowId() {
  return crypto.randomUUID();
}

async function one(client, query, params = []) {
  const result = await client.query(query, params);
  return result.rows[0];
}

async function resetHomeRecruitment(client) {
  const recruitment = defaultHomePage.recruitment;
  let home = await one(client, "select id from home_page order by id limit 1");

  if (!home) {
    home = await one(
      client,
      `
        insert into home_page (
          recruitment_eyebrow_all_vi, recruitment_eyebrow_all_en, recruitment_eyebrow_all_ja,
          recruitment_title_all_vi, recruitment_title_all_en, recruitment_title_all_ja,
          recruitment_cta_label_all_vi, recruitment_cta_label_all_en, recruitment_cta_label_all_ja,
          recruitment_cta_href, _status, created_at, updated_at
        )
        values ($1, $1, $1, $2, $2, $2, $3, $3, $3, $4, 'published'::enum_home_page_status, now(), now())
        returning id
      `,
      [recruitment.eyebrow, recruitment.title, recruitment.ctaLabel, recruitment.ctaHref]
    );
  } else {
    await client.query(
      `
        update home_page
        set recruitment_eyebrow_all_vi = $1,
            recruitment_eyebrow_all_en = $1,
            recruitment_eyebrow_all_ja = $1,
            recruitment_title_all_vi = $2,
            recruitment_title_all_en = $2,
            recruitment_title_all_ja = $2,
            recruitment_cta_label_all_vi = $3,
            recruitment_cta_label_all_en = $3,
            recruitment_cta_label_all_ja = $3,
            recruitment_cta_href = $4,
            _status = 'published'::enum_home_page_status,
            updated_at = now()
        where id = $5
      `,
      [recruitment.eyebrow, recruitment.title, recruitment.ctaLabel, recruitment.ctaHref, home.id]
    );
  }

  for (const locale of locales) {
    const existing = await one(
      client,
      "select id from home_page_locales where _parent_id = $1 and _locale = $2::_locales limit 1",
      [home.id, locale]
    );

    if (existing) {
      await client.query(
        `
          update home_page_locales
          set recruitment_eyebrow = $1,
              recruitment_title = $2,
              recruitment_cta_label = $3
          where _parent_id = $4 and _locale = $5::_locales
        `,
        [recruitment.eyebrow, recruitment.title, recruitment.ctaLabel, home.id, locale]
      );
      continue;
    }

    await client.query(
      `
        insert into home_page_locales (
          _parent_id, _locale, recruitment_eyebrow, recruitment_title, recruitment_cta_label
        )
        values ($1, $2::_locales, $3, $4, $5)
      `,
      [home.id, locale, recruitment.eyebrow, recruitment.title, recruitment.ctaLabel]
    );
  }
}

async function clearRecruitmentCollections(client) {
  await client.query("delete from _job_orders_v");
  await client.query("delete from _recruitment_tabs_v");
  await client.query("delete from job_orders");
  await client.query("delete from recruitment_tabs");
}

async function ensureRecruitmentTabDisplayNameColumns(client) {
  await client.query("alter table recruitment_tabs add column if not exists display_name varchar");
  await client.query("alter table _recruitment_tabs_v add column if not exists version_display_name varchar");
}

async function insertTabLocale(client, tabId, tab) {
  for (const locale of locales) {
    await client.query(
      `
        insert into recruitment_tabs_locales (_parent_id, _locale, label)
        values ($1, $2::_locales, $3)
      `,
      [tabId, locale, tab.label]
    );
  }
}

async function insertAviationCards(client, tabId, cards = []) {
  for (const [cardIndex, card] of cards.entries()) {
    const cardId = rowId();
    await client.query(
      `
        insert into recruitment_tabs_aviation_cards (
          _order, _parent_id, id, wide,
          title_all_vi, title_all_en, title_all_ja
        )
        values ($1, $2, $3, $4, $5, $5, $5)
      `,
      [cardIndex, tabId, cardId, Boolean(card.wide), card.title]
    );

    for (const locale of locales) {
      await client.query(
        `
          insert into recruitment_tabs_aviation_cards_locales (_parent_id, _locale, title)
          values ($1, $2::_locales, $3)
        `,
        [cardId, locale, card.title]
      );
    }

    for (const [itemIndex, item] of (card.items || []).entries()) {
      const itemId = rowId();
      await client.query(
        `
          insert into recruitment_tabs_aviation_cards_items (
            _order, _parent_id, id, text_all_vi, text_all_en, text_all_ja
          )
          values ($1, $2, $3, $4, $4, $4)
        `,
        [itemIndex, cardId, itemId, item.text]
      );

      for (const locale of locales) {
        await client.query(
          `
            insert into recruitment_tabs_aviation_cards_items_locales (_parent_id, _locale, text)
            values ($1, $2::_locales, $3)
          `,
          [itemId, locale, item.text]
        );
      }
    }
  }
}

async function insertJobs(client, tabId, tab) {
  for (const [index, job] of (tab.jobs || []).entries()) {
    const inserted = await one(
      client,
      `
        insert into job_orders (
          tab_id, image_id, image_url, image_alt, quantity, interview_date,
          title_all_vi, title_all_en, title_all_ja,
          field_all_vi, field_all_en, field_all_ja,
          image_alt_all_vi, image_alt_all_en, image_alt_all_ja,
          market_all_vi, market_all_en, market_all_ja,
          salary_all_vi, salary_all_en, salary_all_ja,
          location_all_vi, location_all_en, location_all_ja,
          interview_date_label_all_vi, interview_date_label_all_en, interview_date_label_all_ja,
          sort_order, _status, created_at, updated_at
        )
        values (
          $1, null, $2, $3, $4, null,
          $5, $5, $5,
          $6, $6, $6,
          $3, $3, $3,
          $7, $7, $7,
          $8, $8, $8,
          $9, $9, $9,
          $10, $10, $10,
          $11, 'published'::enum_job_orders_status, now(), now()
        )
        returning id
      `,
      [
        tabId,
        job.imageUrl,
        `${job.title} ${job.field}`,
        job.quantity,
        job.title,
        job.field,
        tab.label,
        job.salary,
        job.location,
        job.interviewDateLabel,
        index
      ]
    );

    for (const locale of locales) {
      await client.query(
        `
          insert into job_orders_locales (
            _parent_id, _locale, title, field, market, salary, location, interview_date_label
          )
          values ($1, $2::_locales, $3, $4, $5, $6, $7, $8)
        `,
        [inserted.id, locale, job.title, job.field, tab.label, job.salary, job.location, job.interviewDateLabel]
      );
    }
  }
}

async function insertRecruitmentCollections(client) {
  for (const tab of defaultRecruitmentTabs) {
    const inserted = await one(
      client,
      `
        insert into recruitment_tabs (kind, sort_order, _status, created_at, updated_at)
        values ($1::enum_recruitment_tabs_kind, $2, 'published'::enum_recruitment_tabs_status, now(), now())
        returning id
      `,
      [tab.kind, tab.sortOrder ?? 0]
    );

    await client.query(
      `
        update recruitment_tabs
        set display_name = $1,
            label_all_vi = $1,
            label_all_en = $1,
            label_all_ja = $1
        where id = $2
      `,
      [tab.label, inserted.id]
    );

    await insertTabLocale(client, inserted.id, tab);
    await insertAviationCards(client, inserted.id, tab.aviationCards);
    await insertJobs(client, inserted.id, tab);
  }
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
    await resetHomeRecruitment(client);
    await ensureRecruitmentTabDisplayNameColumns(client);
    await clearRecruitmentCollections(client);
    await insertRecruitmentCollections(client);
    await client.query("commit");

    console.log("Recruitment content reset complete.");
    console.log(`Recruitment tabs reset: ${defaultRecruitmentTabs.length}`);
    console.log(`Job orders reset: ${defaultRecruitmentTabs.reduce((count, tab) => count + (tab.jobs?.length || 0), 0)}`);
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
