import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

export default function ContactDetails() {
  return (
    <div className="bg-[#F8F9FF] py-10 my-20 container mx-auto px-4 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Contact Info */}
          <div className="w-full h-auto flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 min-w-12 min-h-12 flex items-center justify-center rounded-xl bg-[#D0DAF5]">
                <FaPhoneAlt className="text-[#2B3990] text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  ช่องทางการติดต่อ
                </h3>
                <p className="font-light text-black">
                  โทรศัพท์:{" "}
                  <a href="tel:0969039955" className=" hover:underline">
                    096-903-9955
                  </a>{" "}
                  ,{" "}
                  <a href="tel:0868205230" className=" hover:underline">
                    086-820-5230
                  </a>
                  <br />
                  Line ID:{" "}
                  <a
                    href="https://line.me/R/ti/p/@tnlohakit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    @tnlohakit
                  </a>
                  <br />
                  อีเมลล์:{" "}
                  <a
                    href="mailto:tnlohakit@gmail.com"
                    className=" hover:underline"
                  >
                    tnlohakit@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 my-5">
              <div className="w-12 h-12 min-w-12 min-h-12 flex items-center justify-center rounded-xl bg-[#D0DAF5]">
                <FaLocationDot className="text-[#2B3990] text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  เว็บไซต์ที่เกี่ยวข้อง
                </h3>
                <p className="font-light text-black space-y-1">
                  <a
                    href="https://www.tnlohakit.co.th"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    www.tnlohakit.co.th
                  </a>
                  <a
                    href="https://www.tnlohakit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    www.tnlohakit.com
                  </a>
                  <a
                    href="https://tnlohakit.yellowpages.co.th"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    tnlohakit.yellowpages.co.th
                  </a>
                  <a
                    href="https://www.xn--12cavc3f1a4ge4c1do5b6fc7l1b9d.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    www.ร้านเหล็กชลบุรี.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 min-w-12 min-h-12 flex items-center justify-center rounded-xl bg-[#D0DAF5]">
                <IoIosTime className="text-[#2B3990] text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-3">เวลาทำการ</h3>
                <p className="font-light text-black">
                  วันจันทร์ - วันเสาร์ เวลา 08:00 น. - 17.00 น.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Map Image */}
          <div className="relative w-full">
            <BaseImage
              src="/images/map.png"
              alt="โรงงาน"
              width={100}
              height={400}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
