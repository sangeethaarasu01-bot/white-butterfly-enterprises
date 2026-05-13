import { Product } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props) {
  return (
    <div className=" p-4 bg-white shadow-sm ">
      <Link href={product.link}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover rounded-lg "
        />
        <h3 className="font-semibold text-center mt-2 hover:text-blue-600 ">
          {product.name}
        </h3>
      </Link>
      <div className="flex justify-center">
        <Link
          href={`/enquiry/products/${product.id}`}
          className="mt-3 bg-blue-600 text-white px-3 py-1 rounded"
        >
          Enquiry
        </Link>
      </div>
    </div>
  );
}
