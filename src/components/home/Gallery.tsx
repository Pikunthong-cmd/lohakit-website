"use client";
import Image from "next/image";

const galleryImages = [
  "/images/gallery1.png",
  "/images/gallery1.png",
  "/images/gallery1.png",
  "/images/gallery1.png",
  "/images/gallery1.png",
];

export default function Gallery() {
  return (
    <section className="py-16 text-center text-black bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">แกลเลอรี่</h2>

      <div className="flex gap-4 justify-center overflow-x-auto px-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="min-w-[220px] md:min-w-[250px]">
            <BaseImage
              src={src}
              alt={`Gallery ${index + 1}`}
              width={300}
              height={200}
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Indicator (static placeholder) */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="w-10 h-1 bg-[#3E49F3] rounded-full" />
        <div className="w-6 h-1 bg-gray-300 rounded-full" />
        <div className="w-6 h-1 bg-gray-300 rounded-full" />
        <div className="w-6 h-1 bg-gray-300 rounded-full" />
      </div>
    </section>
  );
}
