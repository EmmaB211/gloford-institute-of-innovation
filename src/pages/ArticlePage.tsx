import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import Seo from "../lib/seo";
import PlaceholderImage from "../components/PlaceholderImage";
import CTASection from "../components/CTASection";
import { articles } from "../data/news";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl">Article Not Found</h1>
        <Link to="/resources" className="mt-4 inline-block text-primary-700 hover:underline">
          Back to Resources
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Seo title={article.title} description={article.excerpt} />
      <article className="container-page py-16 sm:py-20">
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resources
        </Link>

        <div className="mx-auto mt-8 max-w-3xl">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl">{article.title}</h1>
          <time dateTime={article.date} className="mt-2 block text-sm text-neutral-gray">
            {formattedDate}
          </time>

          <PlaceholderImage label={article.title} icon={Newspaper} className="mt-8 h-72 w-full rounded-2xl" />

          <p className="mt-8 text-base leading-relaxed text-neutral-gray">{article.content}</p>
        </div>
      </article>

      <CTASection
        title="Ready to Grow Your Business?"
        description="Talk to GLOFORD Institute of Innovation."
        ctaLabel="Get Started"
        ctaPath="/contact"
      />
    </>
  );
}
