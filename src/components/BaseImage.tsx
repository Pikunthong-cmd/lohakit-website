"use client";
import Image, { ImageProps, StaticImageData } from "next/image";

const prefix = process.env.NODE_ENV === "production" ? "" : "";

function withPrefix(src: string) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src) || src.startsWith("//")) return src; // ข้าม URL เต็ม
  const normalized = src.startsWith("/") ? src : `/${src}`;
  if (prefix && normalized.startsWith(`${prefix}/`)) return normalized; // กันเติมซ้ำ
  return `${prefix}${normalized}`;
}

// ตัด loader ทิ้งตั้งแต่ชนิด จะได้ไม่มีใครส่งเข้ามา
type SafeImageProps = Omit<ImageProps, "loader"> & {
  src: string | StaticImageData;
};

export default function BaseImage({ src, alt, ...rest }: SafeImageProps) {
  const finalSrc = typeof src === "string" ? withPrefix(src) : src;
  return <Image {...rest} src={finalSrc} alt={alt ?? ""} unoptimized />;
}
