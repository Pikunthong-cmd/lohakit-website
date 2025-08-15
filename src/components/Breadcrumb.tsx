"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string; // default: /
}

export default function Breadcrumb({ items, separator = "›" }: BreadcrumbProps) {
  const [expanded, setExpanded] = useState(false);

  // ป้องกัน edge case
  const safeItems = Array.isArray(items) ? items : [];

  // มือถือ: แสดง [first, ..., last] ถ้าเส้นทางยาวและยังไม่กดขยาย
  const mobileItems = useMemo(() => {
    if (expanded || safeItems.length <= 3) return safeItems;
    if (safeItems.length >= 2) {
      return [safeItems[0], { label: "…" }, safeItems[safeItems.length - 1]];
    }
    return safeItems;
  }, [expanded, safeItems]);

  return (
    <nav
      className="container mx-auto px-4 py-4 sm:py-6"
      aria-label="Breadcrumb"
    >
      {/* Mobile (≤sm): แสดงแบบย่อ + ปุ่มขยาย */}
      <ol className="sm:hidden flex items-center gap-2 text-sm text-gray-600 overflow-x-auto">
        {mobileItems.map((item, idx) => {
          const isLast = idx === mobileItems.length - 1;
          const isEllipsis = item.label === "…";
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-2 shrink-0">
              {isEllipsis ? (
                <>
                  <span className="mx-1 text-gray-400">{separator}</span>
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="px-2 py-1 rounded-md border text-gray-700 bg-white hover:bg-gray-50"
                    aria-label="Show full breadcrumb path"
                  >
                    …
                  </button>
                  {!isLast && <span className="mx-1 text-gray-400">{separator}</span>}
                </>
              ) : item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:underline whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  {!isLast && <span className="mx-1 text-gray-400">{separator}</span>}
                </>
              ) : (
                <>
                  <span className="whitespace-nowrap text-gray-800">{item.label}</span>
                  {!isLast && <span className="mx-1 text-gray-400">{separator}</span>}
                </>
              )}
            </li>
          );
        })}
      </ol>

      {/* Desktop (≥sm): แสดงครบ */}
      <ol className="hidden sm:flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {safeItems.map((item, idx) => {
          const isLast = idx === safeItems.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-blue-600 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800">{item.label}</span>
              )}
              {!isLast && <span className="text-gray-400">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
