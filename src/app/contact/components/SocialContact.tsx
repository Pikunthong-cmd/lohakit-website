import React from "react";
import { IconFacbook, IconLine, IconWechat } from "@/components/icons";
import BaseImage from "@/components/BaseImage";

const FACEBOOK_URL = "https://www.facebook.com/tnlohakit";
const LINE_URL = "https://line.me/R/ti/p/@tnlohakit";

export default function SocialContact() {
  return (
    <div className="bg-white container mx-auto my-10 px-4 mt-10">
      <h2 className="text-3xl lg:text-3xl font-extrabold  leading-snug text-black mb-10">
        โซเชียลมีเดีย
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center ">
        <div className="flex flex-col items-center">
          <div className="w-full h-auto relative bg-[#F8F9FF] rounded-lg shadow-lg px-6 p-10 items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <BaseImage
                src="/images/facebook-icon.png"
                alt="Facebook"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="font-light text-black">เพจ Facebook</p>
            <h2 className="text-1xl lg:text-2xl font-extrabold leading-snug text-black">
              ทีเอ็น โลหะกิจ
            </h2>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 w-full px-4 py-2 rounded-lg border-[1px] border-[#1876F2] text-[#1876F2] hover:bg-[#1876F2] hover:text-white cursor-pointer font-bold text-1xl flex items-center justify-center gap-2 transition-colors duration-200"
              aria-label="Facebook"
            >
              <IconFacbook className="group-hover:fill-[#fff] w-7 h-7 text-[#1876F2] group-hover:text-white transition-colors duration-200" />
              Facebook
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-auto relative bg-[#F8F9FF] rounded-lg shadow-lg px-6 p-10 items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <BaseImage
                src="/images/qr-wechat.png"
                alt="WeChat QR"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="font-light text-black">Wechat ID: TNLOHAKIT</p>
            <h2 className="text-1xl lg:text-2xl font-extrabold leading-snug text-black">
              Wechat
            </h2>
            <a
              href="/images/qr-wechat.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 w-full px-4 py-2 rounded-lg border-[1px] border-[#03D96A] text-[#03D96A] hover:bg-[#03D96A] hover:text-white cursor-pointer font-bold text-1xl flex items-center justify-center gap-2 transition-colors duration-200"
              aria-label="WeChat"
            >
              <IconWechat className="group-hover:fill-[#fff] w-7 h-7 text-[#03D96A] group-hover:text-white transition-colors duration-200" />
              Wechat
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-auto relative bg-[#F8F9FF] rounded-lg shadow-lg px-6 p-10 items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <BaseImage
                src="/images/qr-line.png"
                alt="LINE QR"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="font-light text-black">Line ID: @tnlohakit</p>
            <h2 className="text-1xl lg:text-2xl font-extrabold leading-snug text-black">
              Line
            </h2>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 w-full px-4 py-2 rounded-lg border-[1px] border-[#06c755] text-[#06c755] hover:bg-[#06c755] hover:text-white cursor-pointer font-bold text-1xl flex items-center justify-center gap-2 transition-colors duration-200"
              aria-label="LINE"
            >
              <IconLine className=" w-7 h-7 text-[#06c755] group-hover:text-white transition-colors duration-200" />
              Line
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col items-center">
          <div className="w-full h-auto relative bg-[#F8F9FF] rounded-lg shadow-lg px-6 p-10 items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <BaseImage
                src="/images/qr-line.png"
                alt="สำรอง"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="font-light text-black">ช่องทางสำรอง</p>
            <h2 className="text-1xl lg:text-2xl font-extrabold leading-snug text-black">
              ติดต่อเรา
            </h2>
            <a
              href="/contact"
              className="group mt-4 w-full px-4 py-2 rounded-lg border-[1px] border-[#2B3990] text-[#2B3990] hover:bg-[#2B3990] hover:text-white cursor-pointer font-bold text-1xl flex items-center justify-center gap-2 transition-colors duration-200"
              aria-label="ติดต่อเรา"
            >
              ติดต่อเรา
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
