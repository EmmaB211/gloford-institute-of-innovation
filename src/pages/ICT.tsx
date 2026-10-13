import { Cpu, Code2, ShieldCheck, Network, Palette, Sparkles, Laptop } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import PlaceholderImage from "../components/PlaceholderImage";
import TrainingRegistrationForm from "../components/TrainingRegistrationForm";
import CTASection from "../components/CTASection";
import { trainingCategories } from "../data/training";

const categoryIcons: Record<string, typeof Code2> = {
  "web-development": Code2,
  "digital-skills": Laptop,
  "computer-applications": Cpu,
  "digital-entrepreneurship": Sparkles,
  cybersecurity: ShieldCheck,
  networking: Network,
  "graphic-design": Palette,
  "ict-innovation": Sparkles,
};

export default function ICT() {
  return (
    <>
      <Seo
        title="ICT & Innovation"
        description="GLOFORD Institute of Innovation delivers ICT solutions, digital innovation initiatives and practical ICT boot camps and training programs."
      />

      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">Technology That Creates Opportunity</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            ICT solutions, digital innovation and practical skills training designed to create opportunity.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Cpu, title: "ICT Solutions", desc: "Placeholder — technology-focused solutions supporting organizations and communities." },
            { icon: Sparkles, title: "Digital Innovation", desc: "Placeholder — initiatives exploring new digital tools and approaches." },
            { icon: Code2, title: "ICT Documentation", desc: "Placeholder — structured documentation supporting technology projects." },
            { icon: Laptop, title: "Digital Transformation", desc: "Placeholder — helping organizations adopt digital ways of working." },
            { icon: Network, title: "Technology Projects", desc: "Placeholder — applied technology projects across our focus areas." },
            { icon: ShieldCheck, title: "Innovation Initiatives", desc: "Placeholder — supporting innovation across business and agriculture." },
          ].map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 0.06}
              className="rounded-2xl border border-neutral-light p-6"
            >
              <item.icon className="h-8 w-8 text-secondary-700" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-gray">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Boot camps */}
      <section id="training" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="ICT Boot Camps"
            title="Learn. Build. Innovate."
            description="GII provides practical ICT training and boot camps designed to equip participants with relevant digital skills. Categories below are editable and not confirmed unless stated otherwise."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainingCategories.map((category, i) => {
              const Icon = categoryIcons[category.id] ?? Sparkles;
              return (
                <AnimatedSection
                  key={category.id}
                  delay={i * 0.05}
                  className="rounded-2xl border border-neutral-light bg-white p-5 text-center"
                >
                  <Icon className="mx-auto h-7 w-7 text-primary-700" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-neutral-charcoal">{category.title}</h3>
                  <p className="mt-1 text-xs text-neutral-gray">{category.description}</p>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 rounded-2xl border border-neutral-light bg-white p-8 shadow-sm lg:grid-cols-2">
            <PlaceholderImage label="ICT Boot Camp" icon={Laptop} tone="secondary" className="h-full min-h-[280px] w-full rounded-xl" />
            <div>
              <h3 className="mb-5 text-lg">Register for Training</h3>
              <TrainingRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Digital Skills?"
        description="Join our ICT training and boot camp programs."
        ctaLabel="View Training Programs"
        ctaPath="/ict#training"
      />
    </>
  );
}
