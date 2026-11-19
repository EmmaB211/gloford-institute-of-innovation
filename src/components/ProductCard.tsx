import { Link } from "react-router-dom";
import { ArrowUpRight, Wheat } from "lucide-react";
import type { Product } from "../data/products";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedSection from "./AnimatedSection";
import { cn } from "../lib/cn";
import maizeImage from "../assets/maize.jpeg";
import beansImage from "../assets/soybeans.avif";
import sorghumImage from "../assets/sorgum.jpeg";
import vegetablesImage from "../assets/fresh vegitables.jpeg";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const availabilityStyles: Record<Product["availability"], string> = {
  Available: "bg-primary-100 text-primary-800",
  Seasonal: "bg-accent-100 text-accent-800",
  "Coming Soon": "bg-neutral-light text-neutral-gray",
};

const productImages: Partial<Record<Product["id"], { src: string; alt: string }>> = {
  "maize-grain": { src: maizeImage, alt: "Maize crop" },
  beans: { src: beansImage, alt: "Beans and legumes" },
  sorghum: { src: sorghumImage, alt: "Sorghum crop" },
  "fresh-vegetables": { src: vegetablesImage, alt: "Fresh vegetables" },
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const image = productImages[product.id];

  return (
    <AnimatedSection
      delay={index * 0.06}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition hover:shadow-lg"
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover"
        />
      ) : (
        <PlaceholderImage
          label={product.name}
          icon={Wheat}
          tone="accent"
          className="h-40 w-full"
        />
      )}
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
        <Link
          to="/contact"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Enquire about supply <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
