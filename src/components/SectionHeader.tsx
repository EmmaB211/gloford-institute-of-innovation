import { cn } from "../lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider",
            light
              ? "bg-white/10 text-accent-300"
              : "bg-accent-100 text-accent-700",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight",
          light ? "text-white" : "text-neutral-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-white/80" : "text-neutral-gray",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
