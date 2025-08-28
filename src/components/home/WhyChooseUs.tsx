"use client";

import { IconBizMan, IconGearMan, IconRankMan, IconRecycle } from "../icons";

export default function WhyChooseUs() {
  const cards = [
    
    
    {
      icon: <IconRankMan width={55} height={55} />,
      title: "เป็นที่ 1 เรื่องเหล็กคุณภาพ",
      desc:
        "เราจำหน่ายเหล็กคุณภาพมาตรฐาน ในราคาที่เหมาะสม มีเหล็กเส้นก่อสร้าง และเหล็กรูปพรรณทุกชนิดขายปลีก-ส่ง",
    },
    {
      icon: <IconBizMan width={55} height={55} />,
      title: "เป็นผู้ค้าเหล็กรายใหญ่ที่มีวัสดุครบวงจร",
      desc:
        "ทีเอ็น โลหะกิจ ครบ จบ ที่เดียว เราเป็นผู้ค้าเหล็กรายใหญ่ของชลบุรี มีเหล็กชนิดต่างๆ ครอบคลุมงานก่อสร้าง",
    },
    {
      icon: <IconGearMan width={55} height={55} />,
      title: "ครอบคลุมงานก่อสร้างงานช่างครบวงจร",
      desc:
        "จำหน่ายอุปกรณ์ประกอบงานเหล็ก เครื่องมืองานเหล็กสำหรับช่าง เลือกใช้ตามความเหมาะสม",
    },
    {
      icon: <IconRecycle width={55} height={55} />,
      title: "มีบริการเปลี่ยนคืนสินค้า",
      desc: "มีบริการส่งถึงหน้างาน รวมถึงบริการเปลี่ยน–คืนสินค้า",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="pb-8 text-center text-2xl sm:text-3xl font-bold text-black">
          ทำไม ทีเอ็น โลหะกิจ ถึงเป็นร้านเหล็กขายดี
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const baseBg =
              idx === 2
                ? "bg-[#131837]"
                : idx === 3
                ? "bg-[#2B3990]"
                : idx % 2 === 0
                ? "bg-[#2B3990]"
                : "bg-[#131837]";
            const lgBg = idx % 2 === 0 ? "lg:bg-[#2B3990]" : "lg:bg-[#131837]";

            return (
              <div
                key={idx}
                className={`p-6 shadow text-white ${baseBg} ${lgBg}`}
              >
                {card.icon}
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold my-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-white/90">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
