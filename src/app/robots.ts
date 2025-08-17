// app/robots.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://pikunthong-cmd.github.io/lohakit-website";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
