"use client";
export default function Toolbar({
  layout,
  setLayout,
  total,
}: {
  layout: number;
  setLayout: (n: number) => void;
  total: number;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-gray-600">
        พบสินค้า <span className="font-semibold text-gray-900">{total}</span> รายการ
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">มุมมอง:</span>
        {[2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setLayout(n)}
            className={`rounded-lg border px-2 py-1 text-sm transition ${
              layout === n ? "text-white border-transparent bg-[#2b947a]" : "text-gray-700 border-gray-200 bg-white"
            }`}
            aria-label={`แสดง ${n} คอลัมน์`}
          >
            {n}x
          </button>
        ))}
      </div>
    </div>
  );
}
