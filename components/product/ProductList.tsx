import { CatalogItem } from "@/data/catalog";
import { filterCatalogItems } from "@/utils/searchProducts";
import ProductCard from "./ProductCard";

type Props = {
  products: CatalogItem[];
  search: string;
  category: string;
};

export default function ProductList({ products, search, category }: Props) {
  const searchMatches = search.trim()
    ? filterCatalogItems(products, search)
    : products;

  const filtered = searchMatches.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    return matchCategory;
  });

  if (filtered.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No products found. Try a different search or category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
