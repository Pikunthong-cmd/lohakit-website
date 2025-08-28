"use client";
import React, { useMemo, useState } from "react";
import { bestSellingProducts, type Product } from "@/data/bestSellingProducts";
import HeadSection from "./components/HeadSection";
import FilterBar from "./components/FilterBar";
import Toolbar from "./components/Toolbar";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/home/ProductCard";
import Button from "@/components/Button";
import SearchBar from "./components/SearchBar"; 


const ALL_CATEGORIES: string[] = Array.from(
  new Set(
    bestSellingProducts.flatMap((p) => p.category ?? [])
  )
).sort((a, b) => a.localeCompare(b, "th"));

// export const metadata = {
//   title: "สินค้าของเรา | เหล็กรูปพรรณ",
//   description: "ค้นหาเหล็ก ราคาส่ง พร้อมบริการจัดส่งเหล็ก และออกใบกำกับภาษีได้",
//   keywords: [
//     "ร้านเหล็ก ราคาส่ง",
//     "บริการจัดส่งเหล็ก",
//     "ออกใบกำกับภาษีเหล็ก",
//     "ร้านเหล็กใกล้ฉัน",
//   ],
//   alternates: { canonical: "/products" },
// };

const ALL_BRANDS: string[] = Array.from(
  new Set(
    bestSellingProducts
      .map((p) => p.brand)
      .filter((b): b is string => Boolean(b))
  )
).sort((a, b) => a.localeCompare(b, "th"));


export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [layout, setLayout] = useState<number>(5);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const filtered: Product[] = useMemo(() => {
  const q = query.trim().toLowerCase();

  type Description = string | string[]; 

  function descToText(desc?: Description): string {
    if (!desc) return "";
    return Array.isArray(desc) ? desc.join(" ") : desc;
  }

  return bestSellingProducts.filter((p) => {
    const categories = p.category ?? [];
    const brand = p.brand ?? "";
    const keywords = p.keywords ?? [];

    const descText = descToText(p.description).toLowerCase();

    const matchQuery =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      descText.includes(q) ||
      keywords.some((k) => k.toLowerCase().includes(q));

    const matchCategory =
      activeCategories.length === 0 ||
      activeCategories.some((c) => categories.includes(c));

    const matchBrand = activeBrand === null || brand === activeBrand;

    return matchQuery && matchCategory && matchBrand;
  });
}, [query, activeCategories, activeBrand]);


  const visible = filtered.slice(0, visibleCount);
  const isAllShown = visible.length >= filtered.length;

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ label: "หน้าหลัก", href: "/" }, { label: "สินค้าของเรา" }]} />

      <HeadSection
        query={query}
        setQuery={setQuery}
        onMobileSearchClick={() => setShowMobileSearch(true)}
      />

      <section className="container mx-auto px-4 py-4 sm:py-6">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <FilterBar
            categories={ALL_CATEGORIES}
            brands={ALL_BRANDS}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
            activeBrand={activeBrand}
            setActiveBrand={setActiveBrand}
          />
          <div className="mt-6">
            <Toolbar layout={layout} setLayout={setLayout} total={filtered.length} />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            แคตตาล็อกออนไลน์
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {!isAllShown && (
            <div className="mt-8 flex justify-center">
              <Button onClick={() => setVisibleCount((c) => c + 10)}>
                ดูสินค้าทั้งหมด
              </Button>
            </div>
          )}
        </div>
      </section>

      {showMobileSearch && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4"
          onClick={() => setShowMobileSearch(false)}
        >
          <div
            className="mt-24 w-full max-w-md rounded-xl bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowMobileSearch(false);
              }}
            >
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="ค้นหาสินค้าและบริการ"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button type="submit" className="px-4 py-2 rounded bg-[#2b947a] text-white text-sm">
                  ค้นหา
                </button>
                <button
                  type="button"
                  onClick={() => setShowMobileSearch(false)}
                  className="px-4 py-2 rounded bg-gray-200 text-sm"
                >
                  ปิด
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
