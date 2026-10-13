import { Link } from "react-router-dom";
import { Newspaper, ArrowRight } from "lucide-react";
import type { Article } from "../data/news";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedSection from "./AnimatedSection";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <AnimatedSection
      delay={index * 0.06}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition hover:shadow-lg"
    >
      <PlaceholderImage label={article.title} icon={Newspaper} className="h-44 w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-neutral-gray">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-700">
            {article.category}
          </span>
          <time dateTime={article.date}>{formattedDate}</time>
        </div>
        <h3 className="text-lg text-neutral-charcoal">{article.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-gray">
          {article.excerpt}
        </p>
        <Link
          to={`/resources/${article.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
