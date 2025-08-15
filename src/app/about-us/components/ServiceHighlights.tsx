import { IconCashOnDelivery, IconCustomSize, IconFreeDelivery, IconRecycleSign, IconTax } from "@/components/icons";
import React from "react";

const services = [
  { icon: <IconCashOnDelivery width={34} height={34} />, desc: "มีบริการเก็บเงินปลายทาง&โอนเข้าบัญชี" },
  { icon: <IconTax width={34} height={34} />, desc: "ออกใบกำกับภาษีได้" },
  { icon: <IconRecycleSign width={34} height={34} />, desc: "สินค้ามีปัญหาสั่งผิดหรือ สั่งเกิน เปลี่ยนได้คืนได้" },
  { icon: <IconFreeDelivery width={34} height={34} />, desc: "จัดส่งฟรี ตรงเวลา" },
  { icon: <IconCustomSize width={34} height={34} />, desc: "รับสั่งจองเหล็กสเปค พิเศษ-ไซส์พิเศษ" },
];

export default function ServiceHighlights() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <h2 className="text-3xl font-bold mb-10 text-black">เกี่ยวกับเรา</h2>
      <h3 className="text-2xl font-extrabold mb-6 leading-snug text-[#2B3990]">
        บริษัท ทีเอ็น โลหะกิจ จำกัด ร้านขายเหล็กบ้านบึง ชลบุรี
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed font-light">
        ต้องการใช้เหล็กอะไรติดต่อได้ที่นี่ มาที่เดียวได้เหล็กดี ซื้อง่าย-ส่งไว มีเหล็กครบจบในที่เดียว
        ตอบโจทย์ช่างรับเหมาก่อสร้าง ช่างเหล็กดัดประตูกันสาด ช่างกลโรงงาน-ช่างโรงกลึง
        ต้องการใช้เหล็กตัวไหนเราจัดให้ครบๆ สต็อกแน่น สั่งแล้วได้ของ มาแล้วไม่เสียเที่ยว
        สั่งมากจัดส่ง ฟรี ส่งให้ถึงหน้าไซต์งาน จัดส่งเหล็กฟรีถึงหน้าโรงงาน บ้านบึง พานทอง พนัสนิคม
        ศรีราชา บ่อวิน อมตะ
      </p>

      {/* มือถือ: 2 คอลัมน์ / sm: 2 / md: 5 เหมือนเดิม */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10 mb-10 mt-10">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="
              bg-white rounded shadow-2xl p-3 sm:p-4
              flex items-start gap-3
              sm:flex-col sm:items-center sm:text-center sm:gap-3
            "
          >
            {/* ไอคอน: มือถืออยู่ซ้าย, จอใหญ่กลับไปอยู่บน */}
            <div
              className="
                inline-flex items-center justify-center
                w-12 h-12 sm:w-14 sm:h-14
                rounded-full bg-[#EDF0F2] text-blue-600
                shrink-0
              "
              aria-hidden="true"
            >
              {s.icon}
            </div>

            {/* ข้อความ: มือถืออยู่ขวา, จอใหญ่ใต้ไอคอน */}
            <p className="text-xs sm:text-sm text-black font-light leading-snug sm:leading-relaxed text-start sm:pt-4">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
