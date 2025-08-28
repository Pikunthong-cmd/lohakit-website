"use client";
import { useState } from "react";
import Button from "../Button";
import BaseImage from "../BaseImage";

const items = [
  {
    title:
      "ขายเหล็กกล่องดำ เหล็กกล่องชุบกัลวาไนซ์ ตัวซีชุบกัลวาไนซ์ เหล็กรูปพรรณรีดเย็น",
    content: [
      "เหล็กกล่องชุบกัลวาไนซ์",
      "เหล็กตัวชุบกัลวาไนซ์",
      "เหล็กตัวซีดำ",
      "เหล็กกล่องดำ",
      "เหล็กรางพับ",
      "เหล็กรางน้ำ",
      "ท่อเหล็กดำ API SCH40",
      "แป๊ปกลมดำ",
      "แป๊ปประปา pre zinc",
      "แป๊ปประปาแท้ BS-M"
    ],
  },
  {
    title: "ขายเหล็กเส้นกลม/เหล็กข้ออ้อย สำหรับงานหล่อคอนกรีตและงานช่าง",
    content: [
      "เหล็กข้ออ้อย มอก. SD40",
      "เหล็กเส้นกลม มอก. SR24",
      "เหล็กปลอกคาน",
      "เหล็กปลอกเสา",
      "ลวดผูกเหล็ก",
      "ตะเเกรงเหล็ก ไวร์เมช",
    ],
  },
  {
    title: "ขายเหล็กบีม SS400 / SM520 เเละเหล็กรูปพรรณรีดร้อน",
    content: [
      "เหล็กไอบีม (I-Beams)",
      "เหล็กเอชบีม (H-Beams)",
      "เหล็กไวด์เเฟรงด์ (Wide Flange Beam)",
      "เหล็กรางน้ำ รางยู",
      "เหล็กฉาก",
    ],
  },
  {
    title: "เหล็กงานช่างโรงกลึง ช่างโรงงาน ช่างเหล็กดัด",
    content: [
      "เพลาสี่เหลี่ยมตัน",
      "เพลากลม เหล็กเพลาดำ เพลาหัวแดง s45c, เพลาหัวฟ้า scm440",
      "เหล็กเส้นแบน",
      "เหล็กฉากหนา",
      "เหล็กแผ่นดำ เหล็กแผ่นลาย",
      "ตะแกรงเหล็กฉีก ตาข่ายลวด สำหรับทำรั้ว ทำกรงและงานแปรรูปอื่นๆ",
    ],
  },
  {
    title: "จำหน่ายเครื่องเหล็กและอุปกรณ์งานช่างประตูรั้ว-เหล็กดัด",
    content: [
      "รางแขวนบานประตูเลื่อนแขวน",
      "แปหลังคาสำเร็จรูป",
      "แผ่นเพลทเหล็กปิดหัวเสา แผ่นเพลทเหล็กเจาะรู",
      "เหล็กฉากรู เหล็กฉากทำชั้นพร้อมอุปกรณ์",
      "ล้อประตูเลื่อน-ขาล้อประตูรั้ว รางประตูเลื่อน",
      "บูช บานพับ ข้องอ ฉากยึด ล้อประคอง หูช้างคล้องกุญแจ",
      "กลอนลงดิน กลอนขวาง",
      "พุกเหล็ก น็อต",
      "แผ่นตัดไฟเบอร์ แผ่นเจียรเหล็ก",
      "ลวดเชื่อมเหล็ก KOBE-30",
      "ไม้อัดฟิล์มดำ",
      "สีรองพื้นกันสนิม สีเคลือบเงา-เคลือบด้าน สีงานเหล็ก ทินเนอร์ผสมสี น้ำมันสนผสมสี",
      "อุปกรณ์งานสีแปรงทาสี ลูกกลิ้งทาสี",
    ],
  },
];

export default function Strengths() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-lg py-4 font-extrabold text-black">
            PERFECT PARTNER
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-snug text-[#2B3990]">
            เราเป็นที่หนึ่งเรื่องเหล็ก <br />
            <span>ในจังหวัดชลบุรี</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            เหล็กถูก เหล็กดี เหล็กทีเอ็น เรามีจำหน่าย เหล็กรูปพรรณ เหล็กดำ
            เหล็กกัลวาไนซ์ ฮาร์ดแวร์ บริการทันใจ ราคาไม่แพง จัดจำหน่าย ปลีก-ส่ง
          </p>

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

          <Button>
            เพิ่มเติม
          </Button>
        </div>

        {/* Right Images */}
        <div className="relative w-full h-[500px]">
          <BaseImage
            src="/images/strengths1.png"
            alt="โรงงาน"
            width={600}
            height={400}
            className="absolute top-0 right-0 w-[75%] h-auto  shadow-md z-20"
          />
          <BaseImage
            src="/images/strengths3.png"
            alt="เหล็ก"
            width={600}
            height={400}
            className="absolute top-[120px] right-[80px] w-[80%] h-auto  shadow-md z-30"
          />
          <BaseImage
            src="/images/strengths2.png"
            alt="โกดัง"
            width={600}
            height={400}
            className="absolute top-[300px] right-0 w-[85%] h-auto  shadow-md z-40"
          />
        </div>
      </div>
    </section>
  );
}
