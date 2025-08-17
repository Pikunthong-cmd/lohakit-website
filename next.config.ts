/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// ใช้ชื่อ repo ของคุณ
const repo = 'lohakit-website'

const nextConfig = {
  output: 'export',               // ใช้ next export -> ออกมาเป็นโฟลเดอร์ out
  images: { unoptimized: true },  // ให้ next/image ใช้ไฟล์ตรงๆ
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,            // ลดปัญหา refresh/404 บน static hosting
}
export default nextConfig
