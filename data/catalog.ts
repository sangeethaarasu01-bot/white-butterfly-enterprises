import { products } from "@/data/product";
import { aachi } from "@/data/aachi";
import { sakthi } from "@/data/sakthi";
import { tata } from "@/data/tata";
import { millets } from "@/data/millets";
import { rices } from "@/data/rice";
import { pulses } from "@/data/pulses";
import { dryfood } from "@/data/dry_food";
import { spices } from "@/data/spicies";
import { masala } from "@/data/masala";
import { herbals } from "@/data/herbal";
import { coconut } from "@/data/coconut";

export type CatalogItem = {
  id: string;
  name: string;
  category: string;
  brand?: string;
  image: string;
  description: string;
  listingLink: string;
  enquiryLink: string;
};

type BaseItem = {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
};

function mapItems(
  items: BaseItem[],
  opts: { category: string; brand?: string; sourceSlug: string }
): CatalogItem[] {
  return items.map((item) => ({
    id: `${opts.sourceSlug}-${item.id}`,
    name: item.name,
    category: opts.category,
    brand: opts.brand,
    image: item.image,
    description: item.description,
    listingLink: item.link,
    enquiryLink: `/enquiry/${opts.sourceSlug}/${item.id}`,
  }));
}

const brandAndCategoryItems: CatalogItem[] = [
  ...mapItems(aachi, {
    category: "Aachi Powders",
    brand: "Aachi",
    sourceSlug: "aachi",
  }),
  ...mapItems(sakthi, {
    category: "Sakthi Powders",
    brand: "Sakthi",
    sourceSlug: "sakthi",
  }),
  ...mapItems(tata, {
    category: "Tata Powders",
    brand: "Tata",
    sourceSlug: "tata",
  }),
  ...mapItems(millets, { category: "Millets", sourceSlug: "millets" }),
  ...mapItems(rices, { category: "Rice", sourceSlug: "rice" }),
  ...mapItems(pulses, { category: "Pulses", sourceSlug: "pulses" }),
  ...mapItems(dryfood, { category: "Dry Food", sourceSlug: "dry_food" }),
  ...mapItems(spices, { category: "Spices", sourceSlug: "spicies" }),
  ...mapItems(masala, { category: "Masala Powders", sourceSlug: "masala" }),
  ...mapItems(herbals, { category: "Herbal", sourceSlug: "herbal" }),
  ...mapItems(coconut, { category: "Coconut Coir", sourceSlug: "coconut" }),
];

const featuredItems: CatalogItem[] = products.map((item) => ({
  id: `products-${item.id}`,
  name: item.name,
  category: item.category,
  image: item.image,
  description: item.description,
  listingLink: item.link,
  enquiryLink: `/enquiry/products/${item.id}`,
}));

export const allCatalogItems: CatalogItem[] = [
  ...brandAndCategoryItems,
  ...featuredItems,
];

export const catalogCategories = [
  "All",
  "Millets",
  "Rice",
  "Pulses",
  "Dry Food",
  "Spices",
  "Masala Powders",
  "Aachi Powders",
  "Sakthi Powders",
  "Tata Powders",
  "Herbal",
  "Coconut Coir",
];
