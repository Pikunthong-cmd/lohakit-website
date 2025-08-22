"use client";
import { FiPhoneCall } from "react-icons/fi";

export default function CallUs() {
  return (
    <section className="w-full bg-[#EEF0FF]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-3 text-center sm:text-left">

          {/* ข้อความนำ */}
          <p className="text-sm sm:text-base font-semibold text-black">
            ติดต่อเช็คราคาเหล็กวันนี้ โทร :
          </p>

          <div className="flex items-center gap-4">
            {/* หมายเลข 1 */}
            <a
              href="tel:0969039955"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-2 text-black hover:bg-white transition"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2B3990] text-white">
                <FiPhoneCall className="text-base" />
              </span>
              <span className="font-medium">096-903-9955</span>
            </a>

            {/* เส้นแบ่ง (เฉพาะจอกว้าง) */}
            <span className="hidden md:block h-6 w-px bg-black/20" aria-hidden="true" />

            {/* หมายเลข 2 */}
            <a
              href="tel:0868205230"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-2 text-black hover:bg-white transition"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2B3990] text-white">
                <FiPhoneCall className="text-base" />
              </span>
              <span className="font-medium">086-820-5230</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
