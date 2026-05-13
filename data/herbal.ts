export type Herbal = {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
};

export const herbals: Herbal[] = [
  {
    id: 1,
    name: "Green Leafs",
    image: "/images/herbal/download.jpeg",
    link: "/herbal",
    description:
      "Green Leafs are natural herbal leaves valued for their freshness, nutritional benefits, and traditional medicinal uses. They are widely used in herbal preparations and wellness products.",
  },
  {
    id: 2,
    name: "Henna",
    image: "/images/herbal/images (1).jpeg",
    link: "/herbal",
    description:
      "Henna is a natural herbal plant commonly used for hair care, skin decoration, and traditional beauty treatments. It is valued for its cooling and nourishing properties.",
  },
  {
    id: 3,
    name: "Rosemary",
    image: "/images/herbal/images (2).jpeg",
    link: "/herbal",
    description:
      "Rosemary is an aromatic herbal plant known for its refreshing fragrance and medicinal benefits. It is widely used in herbal oils, wellness products, and culinary preparations.",
  },
  {
    id: 4,
    name: "Turmeric",
    image: "/images/herbal/images.jpeg",
    link: "/herbal",
    description:
      "Turmeric is a powerful herbal ingredient rich in antioxidants and traditional healing properties. It is widely used in food, skincare, and Ayurvedic wellness products.",
  },
];
