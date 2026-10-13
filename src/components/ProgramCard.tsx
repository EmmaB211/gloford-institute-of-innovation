import { Sprout } from "lucide-react";
import type { Program } from "../data/programs";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedSection from "./AnimatedSection";
import { cn } from "../lib/cn";

interface ProgramCardProps {
  program: Program;
  index?: number;
}

const statusStyles: Record<Program["status"], string> = {
  Ongoing: "bg-primary-100 text-primary-800",
  Upcoming: "bg-accent-100 text-accent-800",
  Planned: "bg-secondary-100 text-secondary-800",
};

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  return (
    <AnimatedSection
      delay={index * 0.06}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition hover:shadow-lg"
    >
      <PlaceholderImage label={program.title} icon={Sprout} className="h-44 w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-neutral-light px-3 py-1 text-xs font-medium text-neutral-gray">
            {program.focusArea}
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              statusStyles[program.status],
            )}
          >
            {program.status}
          </span>
        </div>
        <h3 className="text-lg text-neutral-charcoal">{program.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-gray">
          {program.description}
        </p>
        <button
          type="button"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Learn More
        </button>
      </div>
    </AnimatedSection>
  );
}
