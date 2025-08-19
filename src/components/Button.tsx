"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center
        bg-[#2B3990] text-white text-sm md:text-base px-10 py-3 font-medium
        transition-colors duration-200 cursor-pointer
        hover:bg-[#F7DA0A] hover:text-black
        active:bg-[#F7DA0A] active:text-black
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7DA0A]
        ${className}`}
    >
      {children}
    </button>
  );
}
