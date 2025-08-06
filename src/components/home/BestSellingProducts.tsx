"use client"; // ถ้าใช้ Next.js 13+ และใช้ client component

import { useState } from "react";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import ProductCard from "./ProductCard";
import Button from "../Button";

const ITEMS_PER_PAGE = 10;

export default function BestSellingProducts() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const isAllShown = visibleCount >= bestSellingProducts.length;

  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-black">สินค้าขายดี</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {bestSellingProducts.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {!isAllShown && (
          <div className="mt-8">
            <Button onClick={handleLoadMore} >
              ดูสินค้าทั้งหมด
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
