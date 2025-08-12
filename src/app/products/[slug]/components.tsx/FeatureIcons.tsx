"use client";

const items = [
  { title: "ส่งด่วน", desc: "บริการขนส่งถึงไซต์งาน", icon: "🚚" },
  { title: "ออกบิล/ใบกำกับ", desc: "ออกใบกำกับภาษีได้", icon: "🧾" },
  { title: "มีสต็อก", desc: "สินค้าพร้อมส่ง", icon: "📦" },
  { title: "ช่างมืออาชีพ", desc: "บริการหน้างาน", icon: "🛠️" },
];

export default function FeatureIcons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm"
        >
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a5a4a]/10 text-lg">
            <span>{it.icon}</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">{it.title}</div>
          <div className="text-xs text-gray-600">{it.desc}</div>
        </div>
      ))}
    </div>
  );
}
