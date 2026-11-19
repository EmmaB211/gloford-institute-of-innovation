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

// Crop categories shown for sourcing and sales enquiries; confirm availability directly.
export const products: Product[] = [
  {
    id: "maize-grain",
    name: "Maize",
    category: "Grains",
    description: "Discuss maize grades, available volumes, delivery locations and seasonal sourcing requirements with our team.",
    availability: "Seasonal",
    image: "/images/products/maize.svg",
  },
  {
    id: "beans",
    name: "Beans",
    category: "Legumes",
    description: "Enquire about bean varieties, quality specifications, aggregation and delivery requirements.",
    availability: "Seasonal",
    image: "/images/products/beans.svg",
  },
  {
    id: "sorghum",
    name: "Sorghum",
    category: "Cereals",
    description: "Discuss sorghum sourcing, volumes and processing or buyer specifications.",
    availability: "Coming Soon",
    image: "/images/products/sorghum.svg",
  },
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    category: "Fresh Produce",
    description: "Contact us to discuss fresh produce requirements, sourcing windows and supply logistics.",
    availability: "Available",
    image: "/images/products/vegetables.svg",
  },
  {
    id: "processed-flour",
    name: "Processed Flour Products",
    category: "Processed Products",
    description: "Discuss processing, packaging and market requirements for flour and other value-added products.",
    availability: "Coming Soon",
    image: "/images/products/flour.svg",
  },
  {
    id: "other-produce",
    name: "Other Agricultural Products",
    category: "Other",
    description: "Contact us with your crop or product, target volumes and sourcing or sales requirements.",
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
