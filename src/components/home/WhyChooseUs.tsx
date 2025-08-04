"use client";

import { IconBizMan, IconGearMan, IconRankMan, IconRecycle } from "../icons";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white ">
      <div className="container mx-auto  justify-between py-12">
        <h2 className=" pb-12 text-3xl font-bold mb-6 text-black text-center">
          ทำไม ทีเอ็น โลหะกิจ ถึงเป็นร้านเหล็กขายดี
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="p-6 shadow bg-[#2B3990]">
            <IconBizMan width={55} height={55} />
            <h3 className="text-xl font-semibold my-3">
              เป็นผู้ค้าเหล็กรายใหญ่ที่มีวัสดุครบวงจร
            </h3>
            <p>
              ทีเอ็น โลหะกิจ ครบ จบ ที่เดียว เราเป็นผู้ค้าเหล็กรายใหญ่ของชลบุรี
              มีเหล็กชนิดต่างๆ ครอบคลุมงานก่อสร้าง
            </p>
          </div>
          <div className="p-6 shadow bg-[#131837]">
            <IconGearMan width={55} height={55} />
            <h3 className="text-xl font-semibold my-3">
              ครอบคลุมงานก่อสร้างงาน ช่างครบวงจร
            </h3>
            <p>
              จำหน่าย อุปกรณ์ประกอบการทำงานเหล็ก เครื่องมืองานเหล็กรองรับสำหรับช่างเหล็ก เลือกใช้ตามความเหมาะสม
            </p>
          </div>
          <div className="p-6 shadow bg-[#2B3990]">
            <IconRankMan width={55} height={55} />
            <h3 className="text-xl font-semibold my-3">
              เป็นที่ 1 เรื่องเหล็กคุณภาพ
            </h3>
            <p>
              เราจำหน่ายเหล็กคุณภาพมาตรฐาน ในราคาที่เหมาะสม เรามีเหล็กเส้นก่อสร้าง เหล็กรูปพรรณทุกชนิดขายปลีก-ส่ง 
            </p>
          </div>
          <div className="p-6 shadow bg-[#131837]">
            <IconRecycle width={55} height={55} />
            <h3 className="text-xl font-semibold my-3">
              มีบริการเปลี่ยนคืนสินค้า
            </h3>
            <p>
              มีบริการส่งถึงหน้างาน รวมถึงมีบริการเปลี่ยน คืน สินค้า
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
