"use client";

export default function InfoBadges({
  category,
  brand,
  keywords,
}: {
  category: string[];
  brand: string;
  keywords: string;
}) {
  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-wrap gap-x-1 gap-y-1">
        <span className="text-black">หมวดหมู่สินค้า :</span>
        {category.length > 0 ? (
          category.map((c, i) => (
            <span key={`${c}-${i}`} className="underline decoration-dotted text-[#2B3990]">
              {c}{i < category.length - 1 ? "," : ""}
            </span>
          ))
        ) : (
          <span className="text-[#2B3990]">-</span>
        )}
      </div>

      <div className="mt-1 flex flex-wrap gap-1">
        <span className="text-black">ตราสินค้า :</span>
        <span className="underline decoration-dotted text-[#2B3990]">{brand || "-"}</span>
      </div>

      <div className="mt-1 flex gap-1">
        <span className="text-black">คำค้นสินค้า :</span>
        <span className="text-[#2B3990]">{keywords}</span>
      </div>
    </div>
  );
}
