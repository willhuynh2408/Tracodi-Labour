import { notFound } from "next/navigation";
import { generateSiteMetadata, renderHomePage, supportedLocales } from "../home-page";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getLocale(params) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;
  return supportedLocales.includes(locale) && locale !== "vi" ? locale : null;
}

export async function generateMetadata({ params }) {
  const locale = await getLocale(params);
  if (!locale) return {};

  return generateSiteMetadata(locale);
}

export default async function LocalizedHomePage({ params }) {
  const locale = await getLocale(params);
  if (!locale) notFound();

  return renderHomePage(locale);
}
