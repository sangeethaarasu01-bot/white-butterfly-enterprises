import { CatalogItem } from "@/data/catalog";

export function filterCatalogItems(
  items: CatalogItem[],
  query: string
): CatalogItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.brand?.toLowerCase().includes(q) ?? false) ||
      item.description.toLowerCase().includes(q)
  );
}

export function getItemSubtitle(item: CatalogItem): string {
  if (item.brand) {
    return `${item.brand} · ${item.category}`;
  }
  return item.category;
}
