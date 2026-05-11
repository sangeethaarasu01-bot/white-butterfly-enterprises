import { Product } from "@/data/product";
import ProductCard from "./ProductCard";
type Props = {
  products: Product[];
  search: string;
  category: string;
  onEnquiry: (product: Product) => void;
};
export default function ProductList({
  products,
  search,
  category,
  onEnquiry,
}: Props) {
  const filtered = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
