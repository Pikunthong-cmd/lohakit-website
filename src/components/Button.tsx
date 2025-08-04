"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#2B3990] text-sm md:text-base px-10 py-3 transition-colors duration-200 font-medium cursor-pointer
        hover:bg-[#F7DA0A] hover:text-black 
        active:bg-[#F7DA0A] active:text-black 
        ${className}`}
    >
      {children}
    </button>
  );
}
