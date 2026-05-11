"use client";

import { useState } from "react";
import SearchBar from "@/components/common/SearchBar";
import CategoryFilter from "@/components/product/CategoryFilter";
import ProductList from "@/components/product/ProductList";
import { products, Product } from "@/data/product";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleEnquiry = (product: Product) => {
    console.log("Enquiry for:", product);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter selected={category} setSelected={setCategory} />

      <ProductList
        products={products}
        search={search}
        category={category}
        onEnquiry={handleEnquiry}
      />
    </section>
  );
}
