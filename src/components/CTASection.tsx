import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/cn";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaPath: string;
  tone?: "primary" | "dark";
}

export default function CTASection({
  title,
  description,
  ctaLabel,
  ctaPath,
  tone = "primary",
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        tone === "primary"
          ? "bg-gradient-to-r from-primary-700 to-secondary-800"
          : "bg-neutral-charcoal",
      )}
    >
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-2xl sm:text-3xl lg:text-4xl text-white">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-white/80">{description}</p>
        )}
        <Link
          to={ctaPath}
          className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-neutral-charcoal transition hover:bg-accent-400 focus-visible:ring-2 focus-visible:ring-white"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
