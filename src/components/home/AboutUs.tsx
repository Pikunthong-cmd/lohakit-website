"use client";
import Image from "next/image";
import { IconCurrect } from "../icons";
import Button from "../Button";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="px-6 order-1 md:order-2">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-3">
              WHO WE ARE
            </h4>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-theme mb-4 leading-tight">
              บริษัท ทีเอ็น โลหะกิจ จำกัด
            </h1>

            <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-500">
              เราเป็นผู้จำหน่ายเหล็กรายใหญ่ในจังหวัดชลบุรี มีเหล็กชนิดต่างๆ
              ครอบคลุมงานก่อสร้าง
              ครอบคลุมงานช่างเหล็กดัด-ทำประตูรั้ว-ทำโครงหลังคากันสาด
              ครอบคลุมการใช้งานช่างกลึง
              ช่างกลโรงงานนำไปแปรรูปเชื่อมประกอบงานโครงสร้างเหล็ก
              เราเป็นที่หนึ่งเรื่องเหล็กคุณภาพ เหล็กมาตราฐาน มีบริการเปลี่ยน คืน
              สินค้า ​จำหน่ายเหล็กก่อสร้าง พร้อมอุปกรณ์ทำงานเกี่ยวกับเหล็ก
              ครบวงจร
              <span className="text-base sm:text-lg text-blue-theme font-semibold">
                {" "}
                “ครบ จบ ที่เดียว”
              </span>
            </p>

            <p className="text-sm sm:text-base leading-relaxed mb-6 text-black">
              พร้อมบริการจัดส่งด่วนในพื้นที่
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 text-gray-500">
              {[
                "บ้านบึง",
                "พานทอง",
                "พนัสนิคม",
                "ศรีราชา",
                "บ่อวิน",
                "อมตะ",
                "หนองใหญ่",
                "บางละมุง",
                "บ่อทอง",
                "เกาะจันทร์",
                "อำเภอเมืองชลบุรี",
                "จังหวัดใกล้เคียง",
              ].map((place) => (
                <div key={place} className="flex items-center gap-3">
                  <IconCurrect width={23} height={23} />
                  <p className="text-sm sm:text-base">{place}</p>
                </div>
              ))}
            </div>

            <Button className="mt-6 sm:mt-8">เกี่ยวกับเรา</Button>
          </div>

          <div className="order-2 md:order-1">
  <BaseImage
    src="/images/aboutUs-home.png"
    alt="About Us"
    width={800}
    height={450}
    className="w-full h-auto object-cover shadow-md"
    priority
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
  />
</div>

        </div>
      </div>
    </section>
  );
}
