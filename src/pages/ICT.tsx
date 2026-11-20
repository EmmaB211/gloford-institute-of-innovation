import { Cpu, Code2, ShieldCheck, Network, Palette, Sparkles, Laptop } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import TrainingRegistrationForm from "../components/TrainingRegistrationForm";
import CTASection from "../components/CTASection";
import { trainingCategories } from "../data/training";
import ictBootcampImage from "../assets/Collaborative ICT Bootcamp Training.png";

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
        title="Business Technology & ICT"
        description="Practical technology adoption, digital operations and workforce training for SMEs and agribusinesses."
      />

      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="text-page-title mx-auto max-w-3xl text-white">Technology That Improves Business Performance</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Practical digital tools and capabilities to help teams manage operations, reach customers and make better-informed decisions.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Cpu, title: "Business Systems", desc: "Assess and adopt digital systems for records, inventory, customer management and reporting." },
            { icon: Sparkles, title: "AI & Data Tools", desc: "Explore practical AI and analytics applications for planning, forecasting and everyday workflows." },
            { icon: Code2, title: "Digital Product Development", desc: "Scope and develop digital products around real operating needs and customer requirements." },
            { icon: Laptop, title: "Digital Transformation", desc: "Plan practical improvements to processes, tools and team capabilities as your business grows." },
            { icon: Network, title: "Connectivity & Integration", desc: "Improve how teams, business systems and value-chain partners share information." },
            { icon: ShieldCheck, title: "Digital Readiness", desc: "Build the skills and basic security practices your team needs to work confidently online." },
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
            eyebrow="Workforce Development"
            title="Build job-ready digital capability"
            description="Explore practical training categories for teams and professionals building the digital skills required in modern business."
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
            <img
              src={ictBootcampImage}
              alt="GLOFORD learners and instructor taking part in an ICT Boot Camp"
              className="h-full min-h-[280px] w-full rounded-xl object-cover"
              loading="lazy"
            />
            <div>
              <h3 className="mb-5 text-lg">Register for Training</h3>
              <TrainingRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan the right technology investment for your business"
        description="Talk with our team about digital tools, systems and training for your operations."
        ctaLabel="Discuss Business Technology"
        ctaPath="/ict#training"
      />
    </>
  );
}
