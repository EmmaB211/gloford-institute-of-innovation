export interface Product {
  id: string;
  name: string;
  category:
    | "Grains"
    | "Legumes"
    | "Cereals"
    | "Fresh Produce"
    | "Processed Products"
    | "Other";
  description: string;
  availability: "Available" | "Seasonal" | "Coming Soon";
  image: string;
}

// Placeholder product data — replace with verified product information when available.
export const products: Product[] = [
  {
    id: "maize-grain",
    name: "Maize",
    category: "Grains",
    description: "Placeholder listing for maize sourced through partner farmers.",
    availability: "Seasonal",
    image: "/images/products/maize.svg",
  },
  {
    id: "beans",
    name: "Beans",
    category: "Legumes",
    description: "Placeholder listing for beans sourced through partner farmers.",
    availability: "Seasonal",
    image: "/images/products/beans.svg",
  },
  {
    id: "sorghum",
    name: "Sorghum",
    category: "Cereals",
    description: "Placeholder listing for sorghum from supported agricultural enterprises.",
    availability: "Coming Soon",
    image: "/images/products/sorghum.svg",
  },
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    category: "Fresh Produce",
    description: "Placeholder listing for fresh vegetables from partner farms.",
    availability: "Available",
    image: "/images/products/vegetables.svg",
  },
  {
    id: "processed-flour",
    name: "Processed Flour Products",
    category: "Processed Products",
    description: "Placeholder listing for value-added flour products.",
    availability: "Coming Soon",
    image: "/images/products/flour.svg",
  },
  {
    id: "other-produce",
    name: "Other Agricultural Products",
    category: "Other",
    description: "Placeholder category reserved for additional agricultural products.",
    availability: "Coming Soon",
    image: "/images/products/other.svg",
  },
];

export const productCategories = [
  "All",
  "Grains",
  "Legumes",
  "Cereals",
  "Fresh Produce",
  "Processed Products",
  "Other",
] as const;
