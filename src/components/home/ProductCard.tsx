import { Product } from "@/data/bestSellingProducts";
import Link from "next/link";
import Button from "../Button";

// helper เติม prefix เฉพาะตอนโปรดักชัน
const p = (path: string) => {
  const base = process.env.NODE_ENV === "production" ? "" : "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // ข้าม URL เต็ม
  if (/^https?:\/\//i.test(path) || path.startsWith("//")) return path;
  return `${base}${normalized}`;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="p-3 shadow hover:shadow-lg transition ">
        {/* ใช้ aspect ratio ให้ responsive และไม่พึ่ง h-30 */}
        <div
          className="relative w-full aspect-[1/1] mb-4  overflow-hidden bg-gray-200 bg-center bg-cover"
          style={{ backgroundImage: `url('${p(product.image)}')` }}
          aria-label={product.name}
          role="img"
        />
        <h3 className="text-lg text-start font-semibold text-black line-clamp-1">{product.name}</h3>
        <hr className="my-2" />
        <p className="text-sm text-gray-600 text-start line-clamp-3">
          {product.description || "ไม่มีรายละเอียดเพิ่มเติม"}
        </p>
        <Button className="mt-5 w-full">สั่งซื้อสินค้า</Button>
      </div>
    </Link>
  );
}
