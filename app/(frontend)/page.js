import { generateSiteMetadata, renderHomePage } from "./home-page";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return generateSiteMetadata("vi");
}

export default async function HomePage() {
  return renderHomePage("vi");
}
