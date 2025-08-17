import Image, { ImageProps } from "next/image";

const prefix = process.env.NODE_ENV === "production" ? "/lohakit-website" : "";

export default function BaseImage(props: ImageProps) {
  return (
    <Image
      {...props}
      unoptimized
      loader={({ src }) => `${prefix}${src}`}
    />
  );
}
