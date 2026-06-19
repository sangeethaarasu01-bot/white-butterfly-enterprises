"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allCatalogItems } from "@/data/catalog";
import { filterCatalogItems, getItemSubtitle } from "@/utils/searchProducts";

export default function HeaderSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(
    () => filterCatalogItems(allCatalogItems, query).slice(0, 8),
    [query]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    router.push(`/products?search=${encodeURIComponent(query.trim())}`);
  };

  const handleSelect = (link: string) => {
    setQuery("");
    setOpen(false);
    router.push(link);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-4">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => query.trim() && setOpen(true)}
            placeholder="Search products, brands..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search products"
            aria-expanded={open && suggestions.length > 0}
            aria-autocomplete="list"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </div>
      </form>

      {open && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden max-h-96 overflow-y-auto">
          {suggestions.length > 0 ? (
            <ul role="listbox">
              {suggestions.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(product.enquiryLink)}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 text-left transition-colors"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {getItemSubtitle(product)}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
              <li className="border-t border-gray-100">
                <Link
                  href={`/products?search=${encodeURIComponent(query.trim())}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-blue-600 hover:bg-gray-50 text-center"
                >
                  View all results for &quot;{query.trim()}&quot;
                </Link>
              </li>
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">
              No products found for &quot;{query.trim()}&quot;
            </p>
          )}
        </div>
      )}
    </div>
  );
}
