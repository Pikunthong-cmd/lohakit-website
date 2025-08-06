import React from "react";
import Image from "next/image";

const images = [
  "/images/gallery1.png",
  "/images/gallery1.png",
  "/images/gallery1.png",
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-10">แกลอรี่ผลงาน</h2>
        <div className="flex justify-center gap-6">
          <div className="transform rotate-[-6deg] shadow-lg z-10">
            <Image
              src={images[0]}
              alt="Gallery 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="transform rotate-[0deg] -mt-4 shadow-lg z-20">
            <Image
              src={images[1]}
              alt="Gallery 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="transform rotate-[6deg] -mt-8 shadow-lg z-10">
            <Image
              src={images[2]}
              alt="Gallery 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
