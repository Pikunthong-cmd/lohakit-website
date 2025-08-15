// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import Breadcrumb from "@/components/Breadcrumb";

import ProductGallery from "./components.tsx/ProductGallery";
import ProductHero from "./components.tsx/ProductHero";
import InfoBadges from "./components.tsx/InfoBadges";
import DetailSection from "./components.tsx/DetailSection";
import FeatureIcons from "./components.tsx/FeatureIcons";
import RecommendSection from "./components.tsx/RecommendSection";
import ServiceHighlights from "@/app/about-us/components/ServiceHighlights";

export const dynamicParams = false;

export function generateStaticParams() {
  return bestSellingProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = bestSellingProducts.find((p) => p.slug === slug);
  if (!product) return { title: "สินค้า | TN LOHAKIT" };

  const title = `${product.name} | TN LOHAKIT`;
  const description = product.description?.slice(0, 155);
  const url = `https://www.example.com/products/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: product.image }] },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const product = bestSellingProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto max-w-7xl px-4 py-2">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "สินค้าของเรา", href: "/products" },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Header */}
      <section className="border-b bg-[#f7f8fc]">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-black">แคตตาล็อกออนไลน์</h2>
        </div>
      </section>

      {/* Hero */}
      <section className="container mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <ProductGallery image={product.image} name={product.name} />
          </div>
          <div className="lg:col-span-6 mt-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-black">{product.name}</h1>
            <InfoBadges
              category={product.category ?? []}
              brand={product.brand ?? "-"}
              keywords={(product.keywords ?? []).join(", ")}
            />
            <ProductHero product={product} />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto max-w-7xl px-4 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12">
            <DetailSection product={product} />
          </div>
          {/* <div className="lg:col-span-4">
            <FeatureIcons />
          </div> */}
          <div className="lg:col-span-12">
            <ServiceHighlights />
          </div>
        </div>
      </section>

      <RecommendSection />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [product.image],
            description: product.description,
            brand: { "@type": "Brand", name: product.brand ?? "TN LOHAKIT" },
            sku: product.id,
            category: product.category,
            keywords: product.keywords,
          }),
        }}
      />
    </main>
  );
}
