"use client";
import Chip from "./Chip";

export type FilterBarProps = {
  categories: string[];
  brands: string[];
  activeCategories: string[];
  setActiveCategories: (vals: string[]) => void;
  activeBrand: string | null;
  setActiveBrand: (v: string | null) => void;
};

export default function FilterBar({
  categories,
  brands,
  activeCategories,
  setActiveCategories,
  activeBrand,
  setActiveBrand,
}: FilterBarProps) {
  const toggleCategory = (c: string) => {
    if (activeCategories.includes(c)) setActiveCategories(activeCategories.filter((x) => x !== c));
    else setActiveCategories([...activeCategories, c]);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 text-sm font-medium text-gray-700">รายการสินค้า:</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} label={c} active={activeCategories.includes(c)} onClick={() => toggleCategory(c)} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium text-gray-700">ตราสินค้า:</div>
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="ทั้งหมด" active={activeBrand === null} onClick={() => setActiveBrand(null)} />
          {brands.map((b) => (
            <Chip key={b} label={b} active={activeBrand === b} onClick={() => setActiveBrand(b)} />
          ))}
        </div>
      </div>
    </div>
  );
}
