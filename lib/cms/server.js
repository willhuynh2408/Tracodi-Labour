import "server-only";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { defaultSiteData } from "@/lib/cms/default-content";

let payloadPromise;

async function getPayloadClient() {
  if (process.env.NEXT_PHASE === "phase-production-build" && process.env.CMS_FETCH_DURING_BUILD !== "true") {
    throw new Error("CMS fetching is disabled during production builds");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!payloadPromise) {
    payloadPromise = getPayload({ config: configPromise });
  }

  return payloadPromise;
}

function arrayWithFallback(value, fallback = []) {
  if (Array.isArray(value)) return value;
  return Array.isArray(fallback) ? fallback : [];
}

function filledText(value, fallback) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function translatedText(value, locale, fallback) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return filledText(value[locale], filledText(value.vi, fallback));
  }

  return filledText(value, fallback);
}

function mediaUrl(item) {
  if (!item) return "";
  if (typeof item.image === "object" && item.image?.url) return item.image.url;
  if (item.imageUrl) return item.imageUrl;
  if (typeof item === "object" && item.url) return item.url;
  return "";
}

function normalizeImage(item) {
  return {
    ...item,
    imageUrl: mediaUrl(item),
    imageAlt: item?.imageAlt || item?.alt || item?.image?.alt || ""
  };
}

function normalizeHomePage(homePage, locale = "vi") {
  const source = homePage || defaultSiteData.homePage;
  const fallback = defaultSiteData.homePage;

  return {
    ...fallback,
    ...source,
    hero: {
      ...fallback.hero,
      ...source.hero,
      eyebrow: filledText(source.hero?.eyebrow, fallback.hero.eyebrow),
      title: filledText(source.hero?.title, fallback.hero.title),
      backgroundImageUrl: filledText(source.hero?.backgroundImageUrl, fallback.hero.backgroundImageUrl),
      leadLines: arrayWithFallback(source.hero?.leadLines, fallback.hero.leadLines),
      actions: arrayWithFallback(source.hero?.actions, fallback.hero.actions)
    },
    overview: {
      ...fallback.overview,
      ...source.overview,
      eyebrow: filledText(source.overview?.eyebrow, fallback.overview.eyebrow),
      title: filledText(source.overview?.title, fallback.overview.title),
      intro: filledText(source.overview?.intro, fallback.overview.intro),
      body: arrayWithFallback(source.overview?.body, fallback.overview.body),
      images: arrayWithFallback(source.overview?.images, fallback.overview.images).map(normalizeImage),
      metrics: arrayWithFallback(source.overview?.metrics, fallback.overview.metrics),
      processImageAlt: filledText(source.overview?.processImageAlt, fallback.overview.processImageAlt),
      processImageUrl: filledText(source.overview?.processImageUrl, fallback.overview.processImageUrl),
      videoPosterUrl: filledText(source.overview?.videoPosterUrl, fallback.overview.videoPosterUrl),
      videoUrl: filledText(source.overview?.videoUrl, fallback.overview.videoUrl)
    },
    markets: {
      ...fallback.markets,
      ...source.markets,
      eyebrow: filledText(source.markets?.eyebrow, fallback.markets.eyebrow),
      title: filledText(source.markets?.title, fallback.markets.title),
      cards: arrayWithFallback(source.markets?.cards, fallback.markets.cards).map(normalizeImage),
      ctaHref: filledText(source.markets?.ctaHref, fallback.markets.ctaHref),
      ctaLabel: filledText(source.markets?.ctaLabel, fallback.markets.ctaLabel),
      ctaText: filledText(source.markets?.ctaText, fallback.markets.ctaText),
      ctaTitle: filledText(source.markets?.ctaTitle, fallback.markets.ctaTitle)
    },
    recruitment: {
      ...fallback.recruitment,
      ...source.recruitment,
      ctaHref: filledText(source.recruitment?.ctaHref, fallback.recruitment.ctaHref),
      ctaLabel: translatedText(source.recruitment?.ctaLabelAll, locale, filledText(source.recruitment?.ctaLabel, fallback.recruitment.ctaLabel)),
      eyebrow: translatedText(source.recruitment?.eyebrowAll, locale, filledText(source.recruitment?.eyebrow, fallback.recruitment.eyebrow)),
      title: translatedText(source.recruitment?.titleAll, locale, filledText(source.recruitment?.title, fallback.recruitment.title))
    },
    academy: {
      ...fallback.academy,
      ...source.academy,
      eyebrow: filledText(source.academy?.eyebrow, fallback.academy.eyebrow),
      title: filledText(source.academy?.title, fallback.academy.title),
      lead: filledText(source.academy?.lead, fallback.academy.lead),
      checklist: arrayWithFallback(source.academy?.checklist, fallback.academy.checklist),
      visuals: arrayWithFallback(source.academy?.visuals, fallback.academy.visuals).map(normalizeImage),
      modulesTitle: filledText(source.academy?.modulesTitle, fallback.academy.modulesTitle),
      modules: arrayWithFallback(source.academy?.modules, fallback.academy.modules)
    },
    contactCta: {
      ...fallback.contactCta,
      ...source.contactCta,
      eyebrow: filledText(source.contactCta?.eyebrow, fallback.contactCta.eyebrow),
      titleLines: arrayWithFallback(source.contactCta?.titleLines, fallback.contactCta.titleLines)
    }
  };
}

function normalizeSiteSettings(settings) {
  const source = settings || defaultSiteData.siteSettings;
  const fallback = defaultSiteData.siteSettings;

  return {
    ...fallback,
    ...source,
    address: filledText(source.address, fallback.address),
    companyName: filledText(source.companyName, fallback.companyName),
    certifications: arrayWithFallback(source.certifications, fallback.certifications).map(normalizeImage),
    email: filledText(source.email, fallback.email),
    facebookEmbedUrl: filledText(source.facebookEmbedUrl, fallback.facebookEmbedUrl),
    facebookUrl: filledText(source.facebookUrl, fallback.facebookUrl),
    floatingContact: {
      ...fallback.floatingContact,
      ...source.floatingContact
    },
    footerNote: filledText(source.footerNote, fallback.footerNote),
    logoUrl: filledText(source.logoUrl, fallback.logoUrl),
    phones: arrayWithFallback(source.phones, fallback.phones),
    seo: {
      ...fallback.seo,
      ...source.seo,
      description: filledText(source.seo?.description, fallback.seo.description),
      keywords: arrayWithFallback(source.seo?.keywords, fallback.seo.keywords),
      title: filledText(source.seo?.title, fallback.seo.title)
    },
    taxCode: filledText(source.taxCode, fallback.taxCode),
    tiktokUrl: filledText(source.tiktokUrl, fallback.tiktokUrl)
  };
}

function normalizeNavigation(navigation) {
  const links = Array.isArray(navigation?.links) && navigation.links.length
    ? navigation.links
    : defaultSiteData.navigation.links;
  const languages = Array.isArray(navigation?.languages) && navigation.languages.length
    ? navigation.languages
    : defaultSiteData.navigation.languages;

  return {
    ...defaultSiteData.navigation,
    ...(navigation || {}),
    links,
    languages
  };
}

function normalizeJob(job, locale = "vi") {
  const image = normalizeImage(job);
  const title = translatedText(job.titleAll, locale, job.title);
  const field = translatedText(job.fieldAll, locale, job.field);
  const market = translatedText(job.marketAll, locale, job.market);
  const salary = translatedText(job.salaryAll, locale, job.salary);
  const location = translatedText(job.locationAll, locale, job.location);
  const interviewDateLabel = translatedText(job.interviewDateLabelAll, locale, job.interviewDateLabel);

  return {
    ...job,
    field,
    image: image.imageUrl,
    imageAlt: translatedText(job.imageAltAll, locale, image.imageAlt),
    interviewDateLabel,
    location,
    market,
    salary,
    title,
    details: [
      { label: "Số lượng:", value: job.quantity, icon: "quantity" },
      { label: "Lương:", value: salary, icon: "salary" },
      { label: "Địa chỉ:", value: location, icon: "location" },
      { label: "Phỏng vấn:", value: interviewDateLabel || formatDate(job.interviewDate), icon: "interview" }
    ].filter((detail) => detail.value)
  };
}

function normalizeDefaultTabs() {
  return defaultSiteData.recruitmentTabs.map((tab) => ({
    ...tab,
    type: tab.kind,
    cards: tab.aviationCards || [],
    jobs: tab.jobs?.map(normalizeJob) || []
  }));
}

function normalizeRecruitmentTabs(tabs, jobs, locale = "vi") {
  if (!tabs?.length) {
    return normalizeDefaultTabs();
  }

  return tabs.map((tab) => {
    const tabJobs = jobs.filter((job) => {
      const relation = job.tab;
      const id = relation && typeof relation === "object" ? relation.id : relation;
      return id === tab.id;
    });

    return {
      ...tab,
      label: translatedText(tab.labelAll, locale, tab.label),
      type: tab.kind,
      cards: Array.isArray(tab.aviationCards)
        ? tab.aviationCards.map((card) => ({
          ...card,
          title: translatedText(card.titleAll, locale, card.title),
          items: Array.isArray(card.items)
            ? card.items.map((item) => ({
              ...item,
              text: translatedText(item.textAll, locale, item.text)
            }))
            : []
        }))
        : [],
      jobs: tabJobs.map((job) => normalizeJob(job, locale))
    };
  });
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export async function getSiteData(locale = "vi") {
  try {
    const payload = await getPayloadClient();
    const localeOptions = {
      fallbackLocale: "vi",
      locale
    };

    const [homePage, siteSettings, navigation, tabsResult, jobsResult] = await Promise.all([
      payload.findGlobal({ slug: "home-page", depth: 2, draft: false, ...localeOptions }),
      payload.findGlobal({ slug: "site-settings", depth: 2, draft: false, ...localeOptions }),
      payload.findGlobal({ slug: "navigation", depth: 1, draft: false, ...localeOptions }),
      payload.find({
        collection: "recruitment-tabs",
        depth: 1,
        draft: false,
        ...localeOptions,
        limit: 50,
        sort: "sortOrder",
        where: {
          _status: {
            equals: "published"
          }
        }
      }),
      payload.find({
        collection: "job-orders",
        depth: 2,
        draft: false,
        ...localeOptions,
        limit: 100,
        sort: "sortOrder",
        where: {
          _status: {
            equals: "published"
          }
        }
      })
    ]);

    return {
      homePage: normalizeHomePage(homePage, locale),
      navigation: normalizeNavigation(navigation),
      recruitmentTabs: normalizeRecruitmentTabs(tabsResult.docs, jobsResult.docs, locale),
      siteSettings: normalizeSiteSettings(siteSettings)
    };
  } catch (error) {
    console.error("Failed to load Payload CMS content; using default site data.", error);

    return {
      homePage: normalizeHomePage(defaultSiteData.homePage, locale),
      navigation: normalizeNavigation(defaultSiteData.navigation),
      recruitmentTabs: normalizeRecruitmentTabs(defaultSiteData.recruitmentTabs, [], locale),
      siteSettings: normalizeSiteSettings(defaultSiteData.siteSettings)
    };
  }
}

export async function createLead(data) {
  const payload = await getPayloadClient();

  return payload.create({
    collection: "leads",
    data,
    overrideAccess: true
  });
}

export function getFormSectors(recruitmentTabs = defaultSiteData.recruitmentTabs) {
  const labels = recruitmentTabs.map((tab) => tab.label).filter(Boolean);
  return labels.length ? labels : ["Thị trường Châu Á", "Thị trường Châu Âu", "Tuyển sinh Hàng Không"];
}
