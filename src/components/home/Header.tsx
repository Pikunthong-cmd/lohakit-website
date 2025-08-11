"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PiClipboardText } from "react-icons/pi";
import NavButton from "../NavButton";

export default function Header() {
  const [language, setLanguage] = useState("TH");

  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-[#2B3990] text-sm text-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <p>
            ยินดีต้อนรับสู่ TN LOHAKIT ออนไลน์
            แหล่งรวมสินค้าคุณภาพสำหรับทุกความต้องการของคุณ
          </p>
          <div className="space-x-4 flex items-center">
            <Link
              href="#"
              className="flex items-center space-x-1 hover:underline"
            >
              <PiClipboardText className="text-white" />
              <span>ใบเสนอราคา</span>
            </Link>

            <div className="px-4 border-l border-r border-gray-400 py-1">
              <Link href="#" className="hover:underline">
                เข้าสู่ระบบ
              </Link>
            </div>

            <div className="relative inline-block text-left">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#2B3990] text-white px-2 py-1 text-sm focus:outline-none border-none"
              >
                <option value="TH">TH</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400" />

      <div className="bg-[#2B3990] text-sm text-white">
        <div className="container mx-auto  flex justify-between items-center">
          <div className="space-x-2 flex items-center">
            <Image
              src={"/images/logo.png"}
              alt=""
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="text-lg pl-2">บริษัท ทีเอ็น โลหะกิจ จำกัด</p>
          </div>
          <nav>
            <div className="p-4 space-x-2 ">
              <NavButton href="/">หน้าหลัก</NavButton>
              <NavButton href="/products">สินค้าของเรา</NavButton>
              <NavButton href="/contact">ติดต่อเรา</NavButton>
              <NavButton href="/about-us">เกี่ยวกับเรา</NavButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
