"use client";
import BaseImage from "@/components/BaseImage";
import { useState } from "react";

const items = [
  {
    title:
      "เหล็กกล่องดำ เหล็กกล่องชุบกัลวาไนซ์ ตัวซีชุบกัลวาไนซ์ เหล็กรูปพรรณรีดเย็น",
    content: [],
  },
  {
    title: "เหล็กเส้นกลม/เหล็กข้ออ้อย สำหรับงานหล่อคอนกรีตและงานช่าง",
    content: [
      "เหล็กข้ออ้อย มอก. SD40",
      "เหล็กเส้นกลม มอก. SR24",
      "เหล็กปลอกคาน",
      "เหล็กสปองกลม",
      "ลวดผูกเหล็ก",
      "ตะแกรงเหล็ก ไวร์เมช",
    ],
  },
  {
    title: "เหล็กบีม SS400 / SM520 และเหล็กรูปพรรณรีดร้อน",
    content: [],
  },
  {
    title: "เหล็กงานช่างโรงกลึง ช่างโรงงาน ช่างเหล็กดัด",
    content: [],
  },
  {
    title: "จำหน่ายเครื่องเหล็กและอุปกรณ์งานช่างบานประตูรั้ว-เหล็กดัด",
    content: [],
  },
];
export default function ProductServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-3xl font-extrabold  leading-snug text-black mb-20">
            สินค้าและบริการ 
          </h2>

          {/* Accordion */}
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-4 py-3 bg-[#F2F3FF] font-light text-sm text-black hover:bg-[#dfe1ff] flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  <svg
                    className="w-4 h-4 text-gray-500 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-[#f9faff] text-gray-700 text-sm">
                    {item.content.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>รายละเอียดเพิ่มเติม...</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <Button>เพิ่มเติม</Button> */}
        </div>

        {/* Right Images */}
        <div className="relative w-full h-[500px]">
          <BaseImage
            src="/images/strengths1.png"
            alt="โรงงาน"
            width={100}
            height={400}
            className="w-full h-full object-cover  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
