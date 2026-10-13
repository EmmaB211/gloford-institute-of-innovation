import { useMemo, useState } from "react";
import { ArrowDown, Sprout, Warehouse, Factory, Store, TrendingUp } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import { products, productCategories } from "../data/products";
import { faqs } from "../data/faqs";
import { cn } from "../lib/cn";

const valueChain = [
  { icon: Sprout, label: "Production" },
  { icon: Warehouse, label: "Aggregation" },
  { icon: Factory, label: "Value Addition" },
  { icon: Store, label: "Market Access" },
  { icon: TrendingUp, label: "Income & Growth" },
];

const agribusinessAreas = [
  "Farmer support",
  "Agribusiness financing",
  "Produce sourcing",
  "Value addition",
  "Market access",
  "Agricultural entrepreneurship",
];

const agribusinessFaqs = faqs.filter((f) => f.id === "faq-agribusiness" || f.id === "faq-farmers");

export default function Agribusiness() {
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]>("All");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Seo
        title="Agribusiness"
        description="GLOFORD Institute of Innovation supports agricultural enterprises across production, aggregation, value addition and market access."
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">From Farm to Market, Creating Value Along the Way.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Supporting farmers and agricultural enterprises across the value chain.
          </p>
        </div>
      </section>

      {/* Value chain */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="The Agricultural Value Chain" />
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {valueChain.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.label} delay={i * 0.08} className="flex flex-col items-center gap-2 sm:flex-row">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary-200 bg-primary-50 px-6 py-5">
                    <Icon className="h-7 w-7 text-primary-700" aria-hidden="true" />
                    <span className="text-sm font-semibold text-primary-800">{step.label}</span>
                  </div>
                  {i < valueChain.length - 1 && (
                    <ArrowDown className="h-5 w-5 text-primary-400 sm:rotate-[-90deg]" aria-hidden="true" />
                  )}
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agribusinessAreas.map((area, i) => (
              <AnimatedSection
                key={area}
                delay={i * 0.05}
                className="rounded-xl border border-neutral-light bg-white px-5 py-4 text-sm font-medium text-neutral-charcoal"
              >
                {area}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Produce catalog */}
      <section id="produce" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title="Agricultural Produce"
            description="Placeholder product listings — replace with verified product data through the central products data file."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeCategory === category
                    ? "bg-primary-700 text-white"
                    : "bg-white text-neutral-charcoal hover:bg-primary-50",
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion faqs={agribusinessFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have an Agricultural Enterprise?"
        description="Explore opportunities with GII."
        ctaLabel="Explore Our Agribusiness Work"
        ctaPath="/contact"
      />
    </>
  );
}
