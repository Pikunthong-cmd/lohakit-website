// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import Breadcrumb from "@/components/Breadcrumb";
import RecommendSection from "./components.tsx/RecommendSection";
import ServiceHighlights from "@/app/about-us/components/ServiceHighlights";
import DetailSection from "./components.tsx/DetailSection";
import ProductHero from "./components.tsx/ProductHero";
import InfoBadges from "./components.tsx/InfoBadges";
import ProductGallery from "./components.tsx/ProductGallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return bestSellingProducts.map((p) => ({ slug: p.slug }));
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tnlohakit.com/";

const withAbsolute = (path: string) =>
  /^https?:\/\//i.test(path)
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

// ✅ SEO รายหน้าสินค้า
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = bestSellingProducts.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} | TN Lohakit`;

  // ✅ แก้ตรงนี้
  const rawDescription = Array.isArray(product.description)
    ? product.description.join(" ")
    : product.description;

  const description =
    rawDescription?.slice(0, 160) || "รายละเอียดสินค้า TN Lohakit";

  const canonical = `/products/${product.slug}`;
  const ogImage = withAbsolute(product.image || "/images/og-cover.jpg");

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}


// ✅ Page Component ต้อง await params เช่นกัน
export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = bestSellingProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  const productUrl = `/products/${product.slug}`;
  const productImageAbs = withAbsolute(product.image);

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [productImageAbs],
    description: product.description,
    brand: { "@type": "Brand", name: product.brand ?? "TN LOHAKIT" },
    sku: product.id?.toString(),
    category: product.category,
    keywords: product.keywords,
    url: withAbsolute(productUrl),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าหลัก",
        item: withAbsolute("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "สินค้าของเรา",
        item: withAbsolute("/products"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: withAbsolute(productUrl),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
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

      <section className="border-b bg-[#f7f8fc]">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-black">
            แคตตาล็อกออนไลน์
          </h2>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <ProductGallery image={product.image} name={product.name} />
          </div>
          <div className="lg:col-span-6 mt-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-black">
              {product.name}
            </h1>
            <InfoBadges
              category={product.category ?? []}
              brand={product.brand ?? "-"}
              keywords={(product.keywords ?? []).join(", ")}
            />
            <ProductHero product={product} />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12">
            <DetailSection product={product} />
          </div>
          <div className="lg:col-span-12">
            <ServiceHighlights />
          </div>
        </div>
      </section>

      <RecommendSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
    </main>
  );
}
