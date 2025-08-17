// app/sitemap.ts
import { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://pikunthong-cmd.github.io/lohakit-website";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`,          changeFrequency: "weekly",  priority: 1 },
    { url: `${siteUrl}/products`,  changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteUrl}/contact`,   changeFrequency: "yearly",  priority: 0.5 },
    { url: `${siteUrl}/about-us`,  changeFrequency: "yearly",  priority: 0.5 },
  ];

  const { bestSellingProducts } = await import("@/data/bestSellingProducts");

  const productRoutes: MetadataRoute.Sitemap = bestSellingProducts.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    changeFrequency: "weekly" as const, // 👈 บังคับให้เป็น literal type
    priority: 0.8,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...productRoutes];
}
