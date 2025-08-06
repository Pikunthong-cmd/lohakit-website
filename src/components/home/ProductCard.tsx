import { Product } from "@/data/bestSellingProducts";
import Link from "next/link";
import Button from "../Button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="p-4 shadow hover:shadow-lg transition">
        <div
          className="h-30 bg-gray-200 mb-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <h3 className="text-lg text-start font-semibold text-black">{product.name}</h3>
        <hr className="my-2" />
        <p className="text-sm text-gray-600 text-start line-clamp-3">
          {product.description || "ไม่มีรายละเอียดเพิ่มเติม"}
        </p>
        <Button className="mt-5 w-full">สั่งซื้อสินค้า</Button>
      </div>
    </Link>
  );
}
