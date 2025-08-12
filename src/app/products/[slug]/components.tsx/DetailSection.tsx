"use client";
import type { Product } from "@/data/bestSellingProducts";

export default function DetailSection({ product }: { product: Product }) {
  return (
    <section className="bg-[#F8F9FF]">
      <div className="bg-[#F8F9FF] px-5 py-5 ">
        {/* <h3 className="text-base font-bold text-gray-900">รายละเอียดสินค้า</h3> */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-black">รายละเอียดสินค้า</h2>
        <hr className="mt-5 border-gray-300"></hr>
      </div>
      <div className="p-4 sm:p-6 text-sm leading-6 text-gray-800">
        <p className="mb-4">
          {product.description ??
            "รายละเอียดสินค้ายังไม่ถูกระบุ ระบบสามารถแสดงข้อความอธิบายสินค้า รูปแบบการผลิต มาตรฐาน หรือการใช้งานได้ที่นี่"}
        </p>
        {/* <ul className="list-disc pl-5 space-y-1">
          <li>เหล็กกัลวาไนซ์ เหมาะกับงานโครงสร้างทั่วไป</li>
          <li>เหล็กตัวซี/ชีท สำหรับหลังคา โครงสร้างเบา</li>
          <li>รองรับการใช้งานหลายประเภท ทั้งงานภายในและภายนอก</li>
        </ul> */}
      </div>
    </section>
  );
}
