import { CatalogItem } from "@/data/catalog";
import { getItemSubtitle } from "@/utils/searchProducts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: CatalogItem;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className=" p-4 bg-white shadow-sm ">
      <Link href={product.listingLink}>
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
        <p className="text-xs text-gray-500 text-center mt-1">
          {getItemSubtitle(product)}
        </p>
      </Link>
      <div className="flex justify-center">
        <Link
          href={product.enquiryLink}
          className="mt-3 bg-blue-600 text-white px-3 py-1 rounded"
        >
          Enquiry
        </Link>
      </div>
    </div>
  );
}
