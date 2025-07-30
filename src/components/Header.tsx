"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-[#2B3990] text-sm text-white px-4 py-2 flex justify-between items-center">
        <p>ยินดีต้อนรับสู่ TN LOHAKIT ออนไลน์ แหล่งรวมสินค้าคุณภาพสำหรับทุกความต้องการของคุณ</p>
        <div className="space-x-4 flex items-center">
          <Link href="#">เข้าสู่ระบบ</Link>
          <Link href="#">ตะกร้าสินค้า (0)</Link>
          <Link href="#">TH | EN</Link>
        </div>
      </div>

      

      {/* Logo & Contact */}
      <div className="bg-[#2B3990] text-white px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo-thgroup.png" // เปลี่ยน path เป็นโลโก้ของคุณ
            alt="TH Group"
            width={60}
            height={60}
          />
          <div>
            <h1 className="text-xl font-bold">TH GROUP โลหะกิจ</h1>
            <p className="text-sm">ศูนย์รวมเหล็กคุณภาพ ราคาส่ง</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-300">096-903-9955, 094-889-5664</p>
          <div className="flex justify-center gap-2 mt-2">
            <Link href="https://line.me/ti/p/xxxxxxx" target="_blank">
              <Image src="/line-qr.png" alt="LINE QR" width={40} height={40} />
            </Link>
            <Link href="#" className="bg-white text-[#002f87] px-4 py-1 rounded font-bold text-sm">
              สั่งซื้อได้ที่ LINE
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3">
        <ul className="flex justify-center gap-8 font-medium text-[#002f87]">
          <li><Link href="/">หน้าแรก</Link></li>
          <li><Link href="/products">สินค้า</Link></li>
          <li><Link href="/about">เกี่ยวกับเรา</Link></li>
          <li><Link href="/news">ข่าวสาร</Link></li>
          <li><Link href="/contact">ติดต่อเรา</Link></li>
        </ul>
      </nav>
    </header>
  );
}
