"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import BaseImage from "../BaseImage";

const galleryImages = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
  "/images/gallery10.webp",
  "/images/gallery11.webp",
  "/images/gallery12.webp",
  "/images/gallery13.webp",
  "/images/gallery14.webp",
  "/images/gallery15.webp",
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageSize, setPageSize] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(galleryImages.length / pageSize));
  }, [pageSize]);

  // คำนวณจำนวนไอเท็มต่อหน้าจากความกว้างจริงของแทร็ก
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const recompute = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length <= 1) {
        setPageSize(1);
        return;
      }
      // ระยะเลื่อนต่อการ์ด = ระยะห่างซ้ายของใบถัดไป - ใบแรก
      const step = (children[1].offsetLeft - children[0].offsetLeft) || children[0].clientWidth;
      const size = Math.max(1, Math.floor(el.clientWidth / step));
      setPageSize(size);
    };

    recompute();

    // ตอบสนอง resize
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    window.addEventListener("resize", recompute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, []);

  // อัปเดต activePage ตามสิ่งที่เห็นมากสุดใน viewport ของแทร็ก
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = children.indexOf(visible.target as HTMLElement);
        setActivePage(Math.floor(idx / pageSize));
      },
      { root: el, threshold: [0.6] }
    );

    children.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [pageSize]);

  const goToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.min(galleryImages.length - 1, i * pageSize);
    const child = el.children[idx] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="py-16 text-center text-black bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">แกลเลอรี่</h2>

      {/* แทร็กเลื่อน: ใช้ scroll-snap ให้หยุดตรงการ์ดพอดี */}
      <div
        ref={trackRef}
        className="flex gap-4 justify-start overflow-x-auto px-4 snap-x snap-mandatory scroll-smooth"
        aria-label="แกลเลอรี่แบบเลื่อน"
      >
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="snap-start min-w-[220px] md:min-w-[250px] overflow-hidden bg-gray-100"
          >
            <BaseImage
              src={src}
              alt={`Gallery ${index + 1}`}
              width={300}
              height={200}
              className=" object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* ตัวชี้ตำแหน่ง: คลิกเพื่อเลื่อนไปยังเพจนั้น ๆ */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="ตัวชี้ตำแหน่งแกลเลอรี่">
        {Array.from({ length: pageCount }).map((_, i) => {
          const active = i === activePage;
          return (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-1 rounded-full transition-all ${active ? "w-10 bg-[#3E49F3]" : "w-6 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`ไปหน้าที่ ${i + 1}`}
              aria-current={active ? "true" : "false"}
            />
          );
        })}
      </div>
    </section>
  );
}
