// app/sitemap.ts
import { MetadataRoute } from "next";
import { bestSellingProducts } from "@/data/bestSellingProducts";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://pikunthong-cmd.github.io/lohakit-website";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`,         changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/products`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`,  changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/about-us`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = bestSellingProducts.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...productRoutes];
}
