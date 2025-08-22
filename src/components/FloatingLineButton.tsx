"use client";
import { FaLine } from "react-icons/fa";
import { IconLineChat } from "./icons";

export default function FloatingLineButton() {
  return (
    <a
      href="https://line.me/R/ti/p/@tnlohakit"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-[#06C755] text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="แชทผ่าน LINE"
    >
      <IconLineChat/>
    </a>
  );
}
