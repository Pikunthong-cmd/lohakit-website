"use client";
import { notFound } from "next/navigation";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "./components.tsx/ProductGallery";
import ProductHero from "./components.tsx/ProductHero";
import InfoBadges from "./components.tsx/InfoBadges";
import DetailSection from "./components.tsx/DetailSection";
import FeatureIcons from "./components.tsx/FeatureIcons";
import RecommendSection from "./components.tsx/RecommendSection";
import React from "react";
import ServiceHighlights from "@/app/about-us/components/ServiceHighlights";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);

  const product = bestSellingProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="">
        <div className="container mx-auto max-w-7xl px-4">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "สินค้าของเรา", href: "/products" },
              { label: product.name },
            ]}
          />
        </div>
      </div>
      
      <section className="container mx-auto max-w-7xl px-4 bg-[#f7f8fc]">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-black">แคตตาล็อกออนไลน์</h2>
          </div>
        </div>
      </section>
      
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
              keywords={product.keywords?.join(", ") ?? ""}
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
            <ServiceHighlights/>
          </div>
        </div>
      </section>

      <RecommendSection />
    </main>
  );
}
