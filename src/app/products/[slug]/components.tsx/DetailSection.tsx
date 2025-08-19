"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/bestSellingProducts";
import BaseImage from "@/components/BaseImage";

type Variant = NonNullable<Product["variants"]>[number];

const METALSHEET_COLORS: { name: string; hex: string; texture?: boolean }[] = [
  { name: "โอเชี่ยนบลู", hex: "#223A5E" },
  { name: "ดำเงา/ดำด้าน", hex: "#06031A" },
  { name: "เขียวสด", hex: "#31684C" },
  { name: "เขียวใบตอง", hex: "#5DA949" },
  { name: "เขียวบางจาก", hex: "#5F9A8D" },
  { name: "เขียวมุก", hex: "#3F7A4B" },
  { name: "ชมพู", hex: "#AF2B56" },
  { name: "ม่วงไทยพาณิชย์", hex: "#47286C" },
  { name: "น้ำเงิน", hex: "#2433D4" },
  { name: "น้ำตาล", hex: "#32231A" },
  { name: "แดงสด", hex: "#B02D2A" },
  { name: "เทาเข้ม", hex: "#7C7C7C" },
  { name: "เทาด้าน", hex: "#6E758F" },
  { name: "เหลือง", hex: "#F1BB23" },
  { name: "ส้ม", hex: "#D84B2D" },
  { name: "แดงมะขาม", hex: "#7E1327" },
  { name: "ฟ้า", hex: "#4D7BE4" },
  { name: "ครีม", hex: "#DBD7C0" },
  { name: "ขาว", hex: "#E5E5ED" },
  { name: "อลูซิงค์*", hex: "#d9d9d9" },
];

export default function DetailSection({ product }: { product: Product }) {
  const hasVariants = (product.variants?.length ?? 0) > 0;
  const [activeId, setActiveId] = useState<string | null>(
    hasVariants ? product.variants![0].id : null
  );

  const activeVariant: Variant | null = useMemo(() => {
    if (!hasVariants) return null;
    return (
      product.variants!.find((v) => v.id === activeId) ?? product.variants![0]
    );
  }, [hasVariants, product.variants, activeId]);

  return (
    <section className="">
      {/* รายละเอียดสินค้า */}
      <div className="bg-[#F8F9FF] px-5 py-5">
        <h1 className="text-xl sm:text-2xl font-extrabold text-black">
          รายละเอียดสินค้า
        </h1>
        <hr className="mt-5 border-gray-300" />
        <div className="p-4 sm:p-6 text-sm leading-6 text-gray-800">
          <p className="mb-4">{product.description}</p>
        </div>
      </div>

      {/* รายละเอียดเพิ่มเติม (เฉพาะเมื่อมี variants) */}
      {hasVariants && (
        <>
          <div className="bg-[#F8F9FF] px-5 py-5 mt-5">
            <h1 className="text-xl sm:text-2xl font-extrabold text-black">
              รายละเอียดเพิ่มเติม
            </h1>
            <hr className="mt-4 border-gray-200" />

            {/* แถบเลือกโปรไฟล์ลอน */}
            <div className="mt-5 flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x py-5 ">
              {product.variants!.map((v) => {
                const isActive = v.id === activeVariant?.id;
                const thumb = v.thumbnail ?? v.images?.[0]; // ถ้ามี thumbnail ใช้เลย ไม่มีก็ใช้ภาพแรก
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveId(v.id)}
                    className={[
                      "group cursor-pointer border snap-start flex flex-col items-center justify-start p-2 w-35 shrink-0",
                      "transition-colors transition-transform duration-200 transform-gpu hover:scale-105",
                      isActive
                        ? "border-[#2B3990] bg-[#EDF2FF] text-[#2B3990] shadow-sm"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                    aria-pressed={isActive}
                    title={v.name}
                  >
                    {thumb && (
                      <span className="relative w-20 h-20 overflow-hidden rounded-md bg-gray-100">
                        <BaseImage
                          src={thumb}
                          alt={v.name}
                          fill
                          className="object-cover transition-transform duration-200 group-hover:scale-110"
                        />
                      </span>
                    )}
                    <span className="mt-2 text-center text-xs sm:text-sm  w-full">
                      {v.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* บล็อกรายละเอียดของลอนที่เลือก */}
            {activeVariant && (
              <div className="mt-6">
                <h4 className="text-base sm:text-lg font-extrabold text-black">
                  {activeVariant.name}
                </h4>

                {/* รูปหลายรูป */}
                {activeVariant.images?.length ? (
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activeVariant.images?.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative w-full aspect-square overflow-hidden rounded-lg"
                      >
                        <BaseImage
                          src={src}
                          alt={`${activeVariant.name} - รูปที่ ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* คำอธิบายลอน */}
                {Array.isArray(activeVariant.description) ? (
                  <ul className="list-disc pl-6 space-y-1 text-black mt-5">
                    {activeVariant.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{activeVariant.description}</p>
                )}

                {/* หมวดหมู่/แบรนด์/คีย์เวิร์ด (ถ้ามี) */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                  {activeVariant.brand && (
                    <span className="rounded-full bg-gray-100 px-3 py-1">
                      แบรนด์: {activeVariant.brand}
                    </span>
                  )}
                  {activeVariant.category?.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-gray-100 px-3 py-1"
                    >
                      {c}
                    </span>
                  ))}
                  {activeVariant.keywords?.slice(0, 3).map((k) => (
                    <span key={k} className="rounded-full bg-gray-50 px-3 py-1">
                      #{k}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="px-5 py-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                สีเมทัลชีท | Metalsheet color
              </h3>
              <hr className="mt-4 border-gray-200" />

              <ul className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
                {METALSHEET_COLORS.map((c) => (
                  <li key={c.name} className="flex flex-col items-center gap-1">
                    <span
                      className="inline-block h-20 w-20 rounded-full border border-gray-300"
                      style={{
                        background:
                          c.name === "อลูซิงค์*"
                            ? "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 6px, #d1d5db 6px, #d1d5db 12px)"
                            : c.hex,
                      }}
                      aria-label={c.name}
                      title={c.name}
                    />
                    <span className="text-xs text-gray-700 text-center">
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
