"use client";

type BannerProps = {
  imageUrl: string;
};

export default function Banner({ imageUrl }: BannerProps) {
  return (
    <div className="w-full">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
