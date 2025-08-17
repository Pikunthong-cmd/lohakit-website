"use client";
import Image, { ImageProps } from "next/image";

const prefix = process.env.NODE_ENV === "production" ? "/lohakit-website" : "";

function withPrefix(src: string) {
  if (!src) return src;
  // ถ้าเป็น URL เต็ม เช่น http:// หรือ https:// → ไม่ต้องเติม prefix
  if (/^https?:\/\//i.test(src) || src.startsWith("//")) return src;
  // ให้แน่ใจว่ามี / ข้างหน้า
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${prefix}${normalized}`;
}

export default function BaseImage(props: ImageProps) {
  const { src, alt, ...rest } = props;
  const finalSrc = typeof src === "string" ? withPrefix(src) : src;

  return (
    <Image
      {...rest}
      src={finalSrc as any}
      alt={alt ?? ""}
      unoptimized
    />
  );
}
