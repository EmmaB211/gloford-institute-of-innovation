import { Link } from "react-router-dom";
import { ArrowRight, Wallet, Cpu, Briefcase, Sprout } from "lucide-react";
import Seo from "../lib/seo";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ImpactStats from "../components/ImpactStats";
import ServiceCard from "../components/ServiceCard";
import ProgramCard from "../components/ProgramCard";
import ArticleCard from "../components/ArticleCard";
import CTASection from "../components/CTASection";
import StrategicSections from "../components/StrategicSections";
import { services } from "../data/services";
import { programs } from "../data/programs";
import { articles } from "../data/news";
import { useSiteContent } from "../content/SiteContentContext";
import { strategicPortfolios } from "../data/strategic";

const businessOutcomes = [
  {
    title: "Access to Growth Capital",
    description: "Explore financing pathways suited to your business stage, investment plan and operating model.",
  },
  {
    title: "Higher-Value Products",
    description: "Strengthen production, processing, storage and packaging to retain more value in local supply chains.",
  },
  {
    title: "Reliable Market Access",
    description: "Build buyer relationships, improve supply readiness and connect to regional trade opportunities.",
  },
];

export default function Home() {
  const content = useSiteContent();
  const editableServices = services.map((service) => {
    const override = content.services.find((item) => item.id === service.id);
    return {
      ...service,
      title: override?.title ?? service.title,
      description: override?.description ?? service.description,
    };
  });
  const editablePrograms = programs.map((program) => {
    const override = content.programs.find((item) => item.id === program.id);
    return {
      ...program,
      title: override?.title ?? program.title,
      description: override?.description ?? program.description,
    };
  });

  return (
    <>
      <Seo
        title={content.settings.seoTitle}
        description={content.settings.seoDescription}
      />
      <Hero />

      {/* Trust / Quick Impact */}
      <section className="bg-neutral-charcoal py-14">
        <div className="container-page">
          <ImpactStats stats={content.impactStats} />
          <p className="mt-4 text-center text-xs text-white/60">
            Impact figures are reproduced from the reference site and have not been independently verified.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title={content.home.pillarsTitle}
            description={content.home.pillarsDescription}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {strategicPortfolios.map((portfolio, i) => {
              const icons = [Sprout, Wallet, Cpu, Briefcase, Briefcase];
              const Icon = icons[i] ?? Briefcase;
              return (
                <AnimatedSection
                  key={portfolio.id}
                  delay={i * 0.1}
                  className="rounded-2xl border border-neutral-light p-6 text-center"
                >
                  <Icon className="mx-auto h-8 w-8 text-primary-700" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-neutral-charcoal">{portfolio.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-gray">{portfolio.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title={content.home.programsTitle}
            description={content.home.programsDescription}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {editableServices.slice(0, 5).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StrategicSections />

      <CTASection
        title="Looking for business financing?"
        description="Review GLOFORD's loan products, eligibility requirements and application checklist."
        ctaLabel="Explore Loan Options"
        ctaPath="/services#loan-products"
      />

      {/* Business outcomes */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Built for Business"
            title="Solutions for the next stage of growth"
            description="Whether you are improving operations, preparing to scale or looking for new markets, our team helps you identify practical next steps."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {businessOutcomes.map((outcome, i) => (
              <AnimatedSection
                key={outcome.title}
                delay={i * 0.1}
                className="rounded-2xl border border-neutral-light bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-neutral-charcoal">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-gray">{outcome.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Business Solutions" description="Explore services and programs that support commercial growth." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {editablePrograms.slice(0, 3).map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-700 hover:text-white"
            >
              View All Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News teaser */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="News & Insights" description="Stories and updates from across our work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Grow Your Business?"
        description="Talk to GLOFORD Institute of Innovation."
        ctaLabel="Get Started"
        ctaPath="/contact"
        tone="dark"
      />
    </>
  );
}
