import configPromise from "../payload.config";
import { getPayload } from "payload";
import {
  defaultHomePage,
  defaultNavigation,
  defaultRecruitmentTabs,
  defaultSiteSettings
} from "../lib/cms/default-content.js";

async function upsertGlobal(payload: any, slug: string, data: any) {
  await payload.updateGlobal({
    slug,
    data: {
      ...data,
      _status: "published"
    },
    depth: 0,
    overrideAccess: true
  });
}

async function createRecruitmentContent(payload: any) {
  const existing = await payload.find({
    collection: "recruitment-tabs",
    limit: 1,
    overrideAccess: true
  });

  if (existing.totalDocs > 0) {
    console.log("Recruitment content already exists; skipping tab/job seed.");
    return;
  }

  for (const tab of defaultRecruitmentTabs) {
    const createdTab = await payload.create({
      collection: "recruitment-tabs",
      data: {
        aviationCards: tab.aviationCards,
        kind: tab.kind,
        label: tab.label,
        sortOrder: tab.sortOrder,
        _status: "published"
      },
      overrideAccess: true
    });

    for (const [index, job] of (tab.jobs || []).entries()) {
      await payload.create({
        collection: "job-orders",
        data: {
          ...job,
          imageAlt: `${job.title} ${job.field}`,
          market: tab.label,
          sortOrder: index,
          tab: createdTab.id,
          _status: "published"
        },
        overrideAccess: true
      });
    }
  }
}

async function seed() {
  const payload = await getPayload({ config: configPromise });

  await upsertGlobal(payload, "site-settings", defaultSiteSettings);
  await upsertGlobal(payload, "navigation", defaultNavigation);
  await upsertGlobal(payload, "home-page", defaultHomePage);
  await createRecruitmentContent(payload);

  console.log("CMS seed complete.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
