"use client";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import ProductCard from "@/components/home/ProductCard";

export default function RecommendSection() {
  const rec = bestSellingProducts.slice(0, 5);

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-black mb-5">สินค้าแนะนำ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {rec.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
