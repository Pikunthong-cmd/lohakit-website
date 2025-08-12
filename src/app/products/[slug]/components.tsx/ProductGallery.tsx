"use client";
import Image from "next/image";

export default function ProductGallery({ image, name }: { image: string; name: string }) {
  return (
    <div className="overflow-hidden border-gray-200 bg-white">
      <div className="relative w-full aspect-[1/1] sm:aspect-[1/1]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    </div>
  );
}
