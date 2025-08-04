"use client";
import Image from "next/image";
import { IconCurrect } from "../icons";
import Button from "../Button";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/images/about-home.png"
              alt="About Us"
              width={800}
              height={400}
              className="w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="px-6">
            <h4 className="text-xl md:text-xl font-bold text-black mb-4">
              WHO WE ARE
            </h4>
            <h1 className="text-5xl md:text-5xl font-extrabold text-blue-theme  mb-4">
              บริษัท ทีเอ็น โลหะกิจ จำกัด
            </h1>
            <p className="text-md leading-relaxed mb-6 text-gray-500">
              เราเป็นผู้จำหน่ายเหล็กรายใหญ่ในจังหวัดชลบุรี มีเหล็กชนิดต่างๆ
              ครอบคลุมงานก่อสร้าง
              ครอบคลุมงานช่างเหล็กดัด-ทำประตูรั้ว-ทำโครงหลังคากันสาด
              ครอบคลุมการใช้งานช่างกลึง
              ช่างกลโรงงานนำไปแปรรูปเชื่อมประกอบงานโครงสร้างเหล็ก เราเป็นที่หนึ่ง
              เรื่องเหล็กคุณภาพ เหล็กมาตราฐาน มีบริการเปลี่ยน คืน สินค้า
              ​จำหน่ายเหล็กก่อสร้าง พร้อมอุปกรณ์ทำงานเกี่ยวกับเหล็ก ครบวงจร
              <span className="text-lg text-blue-theme font-semibold">
                {" "}
                &quot; ครบ จบ ที่เดียว &quot;
              </span>
            </p>

            <p className="text-md leading-relaxed mb-6 text-black">
              พร้อมบริการจัดส่งด่วนในพื้นที่
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500">
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>บ้านบึง</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>พานทอง</p>
              </div>
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>พนัสนิคม</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>ศรีราชา</p>
              </div>
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>บ่อวิน</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>อมตะ</p>
              </div>
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>หนองใหญ่</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>บางละมุง</p>
              </div>
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>บ่อทอง</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>เกาะจันทร์</p>
              </div>
              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>อำเภอเมืองชลบุรี</p>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrect width={23} height={23} />
                <p>จังหวัดใกล้เคียง</p>
              </div>
            </div>
            <Button className="mt-5">เกี่ยวกับเรา</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
