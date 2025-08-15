"use client";
import SearchBar from "./SearchBar";

export default function HeadSection({
  query,
  setQuery,
  onMobileSearchClick,
}: {
  query: string;
  setQuery: (v: string) => void;
  onMobileSearchClick?: () => void;
}) {
  return (
    <section className="container mx-auto px-4 py-4 sm:py-6">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="order-2 sm:order-2 flex gap-2">
          <div className="hidden sm:block w-1/2 ml-auto">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="ค้นหาสินค้าและบริการ"
            />
          </div>

          <div className="block sm:hidden ml-auto">
            <button
              type="button"
              className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center"
              aria-label="เปิดค้นหา"
              onClick={onMobileSearchClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="order-1 sm:order-1 text-start">
          <h2 className="text-3xl lg:text-3xl font-extrabold leading-snug text-black mb-0">
            สินค้าของเรา
          </h2>
        </div>
      </div>
    </section>
  );
}
