import { useMemo, useState } from "react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import ProgramCard from "../components/ProgramCard";
import CTASection from "../components/CTASection";
import { programs, focusAreas } from "../data/programs";
import { cn } from "../lib/cn";
import { useSiteContent } from "../content/SiteContentContext";

export default function Programs() {
  const content = useSiteContent();
  const editablePrograms = programs.map((program) => {
    const override = content.programs.find((item) => item.id === program.id);
    return {
      ...program,
      title: override?.title ?? program.title,
      description: override?.description ?? program.description,
    };
  });
  const [activeFilter, setActiveFilter] = useState<(typeof focusAreas)[number]>("All");

  const filteredPrograms = useMemo(
    () =>
      activeFilter === "All"
        ? editablePrograms
        : editablePrograms.filter((program) => program.focusArea === activeFilter),
    [activeFilter, editablePrograms],
  );

  return (
    <>
      <Seo
        title="Programs"
        description="Explore GLOFORD Institute of Innovation's programs across business development, financial inclusion, agribusiness, agricultural value chains, ICT and innovation."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">Enterprise Solutions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Explore practical support for business finance, production, processing, trade and digital operations.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Find the right solution" description="Browse enterprise services by business focus area." />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setActiveFilter(area)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeFilter === area
                    ? "bg-primary-700 text-white"
                    : "bg-neutral-light text-neutral-charcoal hover:bg-primary-50",
                )}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking to strengthen your team's digital capabilities?"
        description="Explore practical ICT training and technology support for business operations."
        ctaLabel="Explore Business ICT"
        ctaPath="/ict#training"
      />
    </>
  );
}
