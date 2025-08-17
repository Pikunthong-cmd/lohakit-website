"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PiClipboardText } from "react-icons/pi";
import NavButton from "../NavButton";
import { usePathname } from "next/navigation";
import BaseImage from "../BaseImage";

export default function Header() {
  const [language, setLanguage] = useState("TH");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ปิดสกอลหน้าเมื่อเปิดเมนูมือถือ
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ปิดเมนูเมื่อเปลี่ยนเส้นทาง
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="w-full">
      
      <div className="bg-[#2B3990] text-sm text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <p className="hidden md:block">
            ยินดีต้อนรับสู่ TN LOHAKIT ออนไลน์ แหล่งรวมสินค้าคุณภาพสำหรับทุกความต้องการของคุณ
          </p>

          
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="flex items-center gap-1 hover:underline">
              <PiClipboardText className="text-white" />
              <span>ใบเสนอราคา</span>
            </Link>

            <div className="px-4 border-l border-r border-white/40 py-1">
              <Link href="#" className="hover:underline">
                เข้าสู่ระบบ
              </Link>
            </div>

            <div className="relative inline-block text-left">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#2B3990] text-white px-2 py-1 text-sm focus:outline-none border-none"
                aria-label="เลือกภาษา"
              >
                <option value="TH">TH</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </div>

          
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="เปิดเมนู"
            aria-expanded={open}
          >
            
            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <hr className="border-gray-400 m-0 p-0" />

      {/* แถบหลัก (โลโก้ + เมนูเดสก์ท็อป) */}
      <div className="bg-[#2B3990] text-sm text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="ไปหน้าหลัก">
              <BaseImage
                src={"/images/logo.png"}
                alt="TN Lohakit Logo"
                width={70}
                height={70}
                className="mx-auto"
              />
            </Link>
            <p className="text-lg pl-2">บริษัท ทีเอ็น โลหะกิจ จำกัด</p>
          </div>

          {/* เมนูเดสก์ท็อป */}
          <nav className="hidden md:block">
            <div className="p-2 space-x-2">
              <NavButton href="/">หน้าหลัก</NavButton>
              <NavButton href="/products">สินค้าของเรา</NavButton>
              <NavButton href="/contact">ติดต่อเรา</NavButton>
              <NavButton href="/about-us">เกี่ยวกับเรา</NavButton>
            </div>
          </nav>

          {/* ปุ่ม hamburger สำรองด้านขวา (เดสก์ท็อปซ่อน) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="เปิดเมนู"
            aria-expanded={open}
          >
            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel เมนู สไลด์จากขวา */}
          <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col">
            {/* Header panel */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <div className="flex items-center gap-2">
                <BaseImage src="/images/logo.png" alt="TN Lohakit Logo" width={40} height={40} />
                <span className="font-semibold text-[#2B3990]">TN LOHAKIT</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#2B3990]"
                aria-label="ปิดเมนู"
              >
                {/* close icon */}
                <svg className="h-6 w-6 text-[#2B3990]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <MobileLink href="/" label="หน้าหลัก" onClick={() => setOpen(false)} />
              <MobileLink href="/products" label="สินค้าของเรา" onClick={() => setOpen(false)} />
              <MobileLink href="/contact" label="ติดต่อเรา" onClick={() => setOpen(false)} />
              <MobileLink href="/about-us" label="เกี่ยวกับเรา" onClick={() => setOpen(false)} />

              <div className="my-4 h-px bg-gray-200" />

              <Link
                href="#"
                className="flex items-center justify-between rounded-lg border px-3 py-3 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2 text-gray-800">
                  <PiClipboardText className="text-[#2B3990]" />
                  ใบเสนอราคา
                </span>
                <span className="text-[#2B3990] text-sm">เปิด</span>
              </Link>

              <div className="mt-3 flex items-center justify-between rounded-lg border px-3 py-3">
                <span className="text-gray-800">ภาษา</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border-0 bg-transparent text-[#2B3990] focus:outline-none"
                  aria-label="เลือกภาษา"
                >
                  <option value="TH">TH</option>
                  <option value="EN">EN</option>
                </select>
              </div>

              <Link
                href="#"
                className="mt-3 block w-full rounded-lg bg-[#2B3990] px-3 py-3 text-center font-semibold text-white hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                เข้าสู่ระบบ
              </Link>
            </nav>

            {/* Footer panel */}
            <div className="px-4 py-4 border-t text-xs text-gray-500">
              © {new Date().getFullYear()} TN LOHAKIT. All rights reserved.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-3 py-3 font-medium ${
        active ? "bg-[#F7DA0A] text-[#2B3990]" : "text-gray-800 hover:bg-gray-50"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
