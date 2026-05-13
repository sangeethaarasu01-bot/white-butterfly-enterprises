// data/products.ts

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  link: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    category: "Millets & Rice",
    name: "Little Millet",
    image: "/images/millets_rice/little-millet.jpeg",
    link: "/millets",
    description:
      "Little Millet is a nutritious and healthy grain rich in fiber, protein, and essential minerals. It is widely used for preparing traditional and healthy meals.",
  },
  {
    id: 2,
    category: "Pulses",
    name: "Arhar Dal",
    image: "/images/pulses/arhar-dal.jpeg",
    link: "/pulses",
    description:
      "Arhar Dal is a premium quality pulse commonly used in Indian households for making delicious and healthy dishes. It is rich in protein and easy to digest.",
  },
  {
    id: 3,
    category: "Dry Food",
    name: "Almonds",
    image: "/images/dry_food/Almonds.jpeg",
    link: "/dry_food",
    description:
      "Almonds are rich in nutrients, healthy fats, and protein, making them an ideal snack choice. They support overall wellness and provide natural energy daily.",
  },
  {
    id: 4,
    category: "Dry Food",
    name: "Dried Banana",
    image: "/images/dry_food/dried-banana.jpg",
    link: "/dry_food",
    description:
      "Dried Banana is naturally processed to preserve its sweetness and nutrients. It is a healthy snack option loved by both children and adults for daily use.",
  },
  {
    id: 5,
    category: "Spices",
    name: "Cardamom",
    image: "/images/spices/cardamom.jpeg",
    link: "/spicies",
    description:
      "Cardamom is a highly aromatic spice widely used in Indian cooking, sweets, and tea preparations. It adds rich flavor and freshness to every recipe naturally.",
  },
  {
    id: 6,
    category: "Spices",
    name: "Pepper",
    image: "/images/spices/Pepper.png",
    link: "/spicies",
    description:
      "Pepper is a flavorful spice known for its strong aroma and taste. It is commonly used in cooking, herbal preparations, and traditional food recipes daily.",
  },
  {
    id: 7,
    category: "Dry Food",
    name: "Cashew",
    image: "/images/millets_rice/Barley.png",
    link: "/dry_food",
    description:
      "Cashew nuts are premium quality dry fruits with a rich creamy taste and crunchy texture. They are widely used in snacks, sweets, and cooking preparations.",
  },
  {
    id: 8,
    category: "Spices",
    name: "Black Pepper",
    image: "/images/millets_rice/Barley.png",
    link: "/spicies",
    description:
      "Black Pepper is one of the most popular spices used worldwide for cooking and seasoning. It delivers strong flavor, aroma, and traditional health benefits.",
  },
];
