import React from "react";
import Image from "next/image";

const images = [
  "/images/strengths2.png",
  "/images/strengths1.png",
  "/images/strengths3.png",
];

export default function Gallery() {
  return (
    <section className="py-1">
      <div className="grid grid-cols-3 w-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
