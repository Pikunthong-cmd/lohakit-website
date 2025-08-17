"use client";
import BaseImage from "../BaseImage";

type BannerProps = {
  imageUrl: string;
  mobileImageUrl?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export default function Banner({
  imageUrl,
  mobileImageUrl,
  alt = "Banner",
  priority,
  className = "",
}: BannerProps) {
  return (
    <div className={`w-full ${className}`}>
      {mobileImageUrl ? (
        
        <>
          
          <div className="relative block sm:hidden w-full aspect-[18/9]">
            <BaseImage
              src={mobileImageUrl}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={priority}
            />
          </div>
          
          <div className="relative hidden sm:block w-full aspect-[35/9]">
            <BaseImage
              src={imageUrl}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={priority}
            />
          </div>
        </>
      ) : (
        
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9]">
          <BaseImage
            src={imageUrl}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      )}
    </div>
  );
}
