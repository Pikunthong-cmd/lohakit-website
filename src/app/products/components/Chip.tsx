"use client";
import React from "react";

export default function Chip({
  label,
  active,
  onClick,
  className,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-xl cursor-pointer border px-3 py-1.5 text-sm transition ${
        active ? "text-white border-transparent bg-[#2B3990]" : "text-[#2B3990] border-[#2B3990] bg-white hover:border-gray-300"
      } ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
