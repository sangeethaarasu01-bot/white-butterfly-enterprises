"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/common/SearchBar";
import CategoryFilter from "@/components/product/CategoryFilter";
import ProductList from "@/components/product/ProductList";
import { allCatalogItems } from "@/data/catalog";

export default function ProductsPageContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [category, setCategory] = useState("All");

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter selected={category} setSelected={setCategory} />

      <ProductList
        products={allCatalogItems}
        search={search}
        category={category}
      />
    </section>
  );
}
