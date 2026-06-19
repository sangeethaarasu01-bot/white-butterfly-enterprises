"use client";

import { Product } from "@/data/product";
import { CatalogItem } from "@/data/catalog";
import ProductCard from "../product/ProductCard";

type Props = {
  products: Product[];
};

function toCatalogItem(item: Product): CatalogItem {
  return {
    id: `products-${item.id}`,
    name: item.name,
    category: item.category,
    image: item.image,
    description: item.description,
    listingLink: item.link,
    enquiryLink: `/enquiry/products/${item.id}`,
  };
}

export default function FeaturedProducts({ products }: Props) {
  const featured = products.slice(0, 6).map(toCatalogItem);

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">
          Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
