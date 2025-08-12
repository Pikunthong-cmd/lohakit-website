"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import type { Product } from "@/data/bestSellingProducts";

const Icon = {
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.9h-2.3V22c4.78-.78 8.42-4.93 8.42-9.94z" />
    </svg>
  ),
  Twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.46 6c-.77.34-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.72 1.05 4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3.15 4.9a4.25 4.25 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18c-.47.13-.98.2-1.5.07a4.27 4.27 0 0 0 3.98 2.95A8.55 8.55 0 0 1 2 19.55a12.06 12.06 0 0 0 6.53 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.36-.01-.54.84-.6 1.57-1.35 2.15-2.2z" />
    </svg>
  ),
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42V23h-3.95V8.5z"/>
    </svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l10-6.99V6H2zm0 12h20V8l-10 7L2 8v10z"/>
    </svg>
  ),
  Printer: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17 7H7V3h10v4zm1 7H6v7h12v-7zM19 8H5a3 3 0 0 0-3 3v6h4v-4h12v4h4v-6a3 3 0 0 0-3-3z"/>
    </svg>
  ),
};

function ShareBtn({
  bg,
  icon,
  onClick,
}: {
  bg: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-3 px-3 py-1 rounded shadow-sm text-white font-semibold tracking-wide hover:opacity-95"
      style={{ backgroundColor: bg }}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center">{icon}</span>
      <span>แชร์</span>
    </button>
  );
}

export default function ProductHero({ product }: { product: Product }) {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // ให้ทำงานฝั่ง client เท่านั้น
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const url = encodeURIComponent(currentUrl || "");
  const title = encodeURIComponent(product.name);

  const share = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    line: `https://social-plugins.line.me/lineit/share?url=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    email: `mailto:?subject=${title}&body=${url}`,
  };

  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");
  const doPrint = () => window.print();

  return (
    <div>
      {/* CTA */}
      <div className=" flex flex-col sm:flex-row gap-3 mt-5">
        <button
          className={`border-[#FBD905] border-2 text-black text-sm md:text-base px-10 py-3 transition-colors duration-200 font-medium cursor-pointer
        hover:bg-[#FBD905] hover:text-white 
        active:bg-[#FBD905] active:text-white`}
        >
          ขอรายละเอียด
        </button>
        <Button>ขอใบเสนอราคา</Button>
      </div>

      {/* Share */}
      <div className="mt-5 flex flex-wrap items-center gap-3 ">
        {/* คำว่า “แชร์:” เอาออกตามภาพตัวอย่าง; ถ้าต้องการใส่ เพิ่ม <span className="text-sm text-gray-600 mr-1">แชร์:</span> */}
        <ShareBtn
          bg="#3b5998"
          icon={<Icon.Facebook className="h-5 w-5 text-white " />}
          label="แชร์"
          onClick={() => open(share.facebook)}
        />
        <ShareBtn
          bg="#00C300"
          // ใช้ตัวหนังสือ LINE ในวงรีเหมือนโลโก้คร่าวๆ (ถ้ามีไฟล์ /icons/line.svg ก็เอามาแทนได้)
          icon={
            <span className="h-5 w-8 rounded-full bg-white text-[#00C300] text-[10px] font-extrabold leading-5 text-center">
              LINE
            </span>
          }
          label="แชร์"
          onClick={() => open(share.line)}
        />
        <ShareBtn
          bg="#1DA1F2"
          icon={<Icon.Twitter className="h-5 w-5 text-white" />}
          label="แชร์"
          onClick={() => open(share.twitter)}
        />
        <ShareBtn
          bg="#0077B5"
          icon={<Icon.Linkedin className="h-5 w-5 text-white" />}
          label="แชร์"
          onClick={() => open(share.linkedin)}
        />
        <button
          onClick={() => open(share.email)}
          className="flex items-center gap-3 px-3 py-1 rounded shadow-sm text-white font-semibold tracking-wide hover:opacity-95"
          style={{ backgroundColor: "#555555" }}
        >
          <Icon.Mail className="h-_ w-5 text-white" />
          <span>อีเมล</span>
        </button>
        <button
          onClick={doPrint}
          className="flex items-center gap-3 px-3 py-1 rounded shadow-sm text-white font-semibold tracking-wide hover:opacity-95"
          style={{ backgroundColor: "#000000" }}
        >
          <Icon.Printer className="h-5 w-5 text-white" />
          <span>พิมพ์</span>
        </button>
      </div>
    </div>
  );
}
