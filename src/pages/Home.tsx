import { Link } from "react-router-dom";
import { ArrowRight, Wallet, Cpu, Briefcase } from "lucide-react";
import Seo from "../lib/seo";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ImpactStats from "../components/ImpactStats";
import ServiceCard from "../components/ServiceCard";
import ProgramCard from "../components/ProgramCard";
import ArticleCard from "../components/ArticleCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";
import { impactStats, impactStories } from "../data/impact";
import { services } from "../data/services";
import { programs } from "../data/programs";
import { articles } from "../data/news";
import { testimonials } from "../data/testimonials";

const journeySteps = [
  "Finance",
  "Business Growth",
  "Agribusiness",
  "Agricultural Value Addition",
  "Technology",
  "Skills Development",
  "Opportunity",
];

export default function Home() {
  return (
    <>
      <Seo
        title="GLOFORD Institute of Innovation | Finance, Agribusiness & ICT"
        description="GLOFORD Institute of Innovation empowers businesses, entrepreneurs, farmers and communities through financing, agribusiness, agricultural value chains, ICT and practical skills development."
      />
      <Hero />

      {/* Trust / Quick Impact */}
      <section className="bg-neutral-charcoal py-14">
        <div className="container-page">
          <ImpactStats stats={impactStats} />
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="The Challenge"
            title="Problems GII Is Confronting"
            description="GII was established to give solutions to problems being faced in the real world — including chronic poverty, limited access to appropriate technology, poor business development services for SMEs, digital illiteracy, limited entrepreneurial acumen, and financial divides among youth and women SMEs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Wallet, text: "Financial divides limiting youth and women-led SMEs from accessing capital." },
              { icon: Cpu, text: "Limited access and application of appropriate technology for development." },
              { icon: Briefcase, text: "Poor business development services and limited entrepreneurial acumen among SMEs." },
            ].map(({ icon: Icon, text }, i) => (
              <AnimatedSection
                key={text}
                delay={i * 0.1}
                className="rounded-2xl border border-neutral-light p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-primary-700" aria-hidden="true" />
                <p className="mt-4 text-sm text-neutral-gray">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Story"
            title="Turning Ideas Into Opportunities"
            description="GLOFORD Institute of Innovation exists to help bridge these gaps — connecting finance, business growth, agribusiness, agricultural value addition, technology and skills development into one continuous path to opportunity."
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {journeySteps.map((step, i) => (
              <AnimatedSection key={step} delay={i * 0.05} className="flex items-center gap-3">
                <span className="rounded-full border border-primary-200 bg-white px-5 py-2.5 text-sm font-semibold text-primary-800 shadow-sm">
                  {step}
                </span>
                {i < journeySteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title="What We Do"
            description="Practical solutions designed to unlock opportunity and create sustainable growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your Business Has Potential. Let's Help You Unlock It."
        description="GII supports entrepreneurs and businesses by providing access to appropriate financing and business development opportunities."
        ctaLabel="Apply for Financing"
        ctaPath="/services#financing"
      />

      {/* Impact Stories */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Impact"
            title="Impact That Goes Beyond Numbers"
            description="Placeholder narratives illustrating the kind of change our work aims to create."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {impactStories.map((story, i) => (
              <AnimatedSection
                key={story.id}
                delay={i * 0.1}
                className="rounded-2xl border border-neutral-light bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {story.category}
                </span>
                <div className="mt-4 space-y-3 text-sm">
                  <p><span className="font-semibold text-neutral-charcoal">Before: </span><span className="text-neutral-gray">{story.challenge}</span></p>
                  <p><span className="font-semibold text-neutral-charcoal">Support: </span><span className="text-neutral-gray">{story.intervention}</span></p>
                  <p><span className="font-semibold text-neutral-charcoal">After: </span><span className="text-neutral-gray">{story.change}</span></p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Our Programs" description="Explore the initiatives driving our mission forward." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((program, i) => (
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
