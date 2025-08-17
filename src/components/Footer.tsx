"use client";
import { FaPhoneAlt } from "react-icons/fa";
import {

} from 'react-icons';
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#2B3499] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4">
            บริษัท ทีเอ็น โลหะกิจ จำกัด
          </h3>
          <p className="text-md font-light leading-relaxed">
            จำหน่ายเหล็กรูปพรรณ เหล็กดำ เหล็กกัลวาไนซ์
            เหล็กเส้นเหล็กเส้น-ข้ออ้อย เพลท ตาข่าย ตะแกรงฉีก ปลีก-ส่ง
            สำหรับงานอุตสาหกรรมและงานก่อสร้าง พร้อมบริการจัดส่งในชลบุรี กรุงเทพ
            และ ต่างจังหวัด
          </p>
          <p className="text-sm mt-4">
            วันจันทร์ - วันเสาร์ เวลา 08:00 น. - 17.00 น.
          </p>

          {/* <div className="md:w-1/3">
            
            <div className="flex gap-3 mt-3">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 p-3 rounded-full hover:scale-105 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 p-3 rounded-full hover:scale-105 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 p-3 rounded-full hover:scale-105 transition"
              > 
                <FaXTwitter />
              </a>
            </div>
          </div> */}
        </div>

        {/* Contact Info */}
        <div className="text-md font-light">
          <h3 className="text-3xl font-bold mb-4">ติดต่อเรา</h3>
          <div className="text-sm space-y-3">
            <p className="flex items-center gap-2">
              <FaPhoneAlt size={20} className="text-[#FBD905]"/>
              <a
                href="tel:0969039555"
                className="underline hover:text-gray-200"
              >
                096-903-9555, 086-820-5230
              </a>
            </p>
            <p className="flex items-center gap-2">
              <IoMdMail size={20} className="text-[#FBD905]"/>

              tnlohakit@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <FaLocationDot size={20} className="text-[#FBD905]"/>
              81 หมู่ที่ 1 ถนน344 บ้านบึง-แกลง ตำบลหนองอิรุณ อำเภอบ้านบึง
              จังหวัดชลบุรี 20220
            </p>
          </div>
        </div>

        {/* Google Map Responsive */}
        <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988899.4526924258!2d99.19427889907142!3d13.189537640563378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102d3aaaa9c9c57%3A0xadca54735d765f01!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4teC5gOC4reC5h-C4meC5guC4peC4q-C4sOC4geC4tOC4iCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1754403265509!5m2!1sth!2sth"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
}
