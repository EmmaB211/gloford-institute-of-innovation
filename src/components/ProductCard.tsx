import { Wheat } from "lucide-react";
import type { Product } from "../data/products";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedSection from "./AnimatedSection";
import { cn } from "../lib/cn";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const availabilityStyles: Record<Product["availability"], string> = {
  Available: "bg-primary-100 text-primary-800",
  Seasonal: "bg-accent-100 text-accent-800",
  "Coming Soon": "bg-neutral-light text-neutral-gray",
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <AnimatedSection
      delay={index * 0.06}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition hover:shadow-lg"
    >
      <PlaceholderImage
        label={product.name}
        icon={Wheat}
        tone="accent"
        className="h-40 w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <span
          className={cn(
            "mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold",
            availabilityStyles[product.availability],
          )}
        >
          {product.availability}
        </span>
        <h3 className="text-lg text-neutral-charcoal">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-gray">
          {product.description}
        </p>
        <button
          type="button"
          className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Enquire
        </button>
      </div>
    </AnimatedSection>
  );
}
