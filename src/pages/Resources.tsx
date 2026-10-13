import { useMemo, useState } from "react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import ArticleCard from "../components/ArticleCard";
import FAQAccordion from "../components/FAQAccordion";
import { articles } from "../data/news";
import { faqs } from "../data/faqs";
import { cn } from "../lib/cn";

const categories = [
  "All",
  "Business",
  "Agriculture",
  "Innovation",
  "ICT",
  "Training",
  "Events",
  "Community",
] as const;

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((a) => a.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Seo
        title="Resources & News"
        description="News, insights and updates from GLOFORD Institute of Innovation across business, agriculture, ICT and innovation."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">News & Insights</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Stories and updates from across our work in finance, agriculture and technology.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeCategory === category
                    ? "bg-primary-700 text-white"
                    : "bg-neutral-light text-neutral-charcoal hover:bg-primary-50",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
