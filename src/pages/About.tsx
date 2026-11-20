import { Users, Target, Eye, Compass, Quote, AlertTriangle } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import PlaceholderImage from "../components/PlaceholderImage";
import CTASection from "../components/CTASection";
import HappyHavenGallery from "../components/HappyHavenGallery";
import ceoPhoto from "../assets/CEO Dr, Moris Chris Ongom.jpeg";
import { coreValues } from "../data/values";
import { team } from "../data/team";
import { fieldHubs, operationalMetrics } from "../data/strategic";
import { useSiteContent } from "../content/SiteContentContext";

const problems = [
  "Limited access to suitable working and growth capital",
  "Low-value processing and avoidable post-harvest losses",
  "Difficulty meeting buyer, quality and export requirements",
  "Manual operations and limited business data",
  "Gaps in management, planning and execution capacity",
  "Fragmented supply chains and inconsistent market access",
];

export default function About() {
  const content = useSiteContent();

  return (
    <>
      <Seo
        title="About Us"
        description="Learn how GLOFORD Institute of Innovation combines finance, enterprise advisory, agribusiness and technology to support commercial growth."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="text-page-title mx-auto max-w-3xl text-white">About GLOFORD Institute of Innovation</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            “Thinking Outside The Box” — catalyzing Northern Uganda and beyond through agro-industrialization, green finance and digital innovation.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
              Who We Are
            </span>
            <h2 className="text-3xl">GLOFORD Institute of Innovation (GII)</h2>
            <p className="mt-4 leading-relaxed text-neutral-gray">
              {content.about.introduction}
            </p>
            <p className="mt-4 leading-relaxed text-neutral-gray">
              Headquartered in Lira City, GII operates across Gulu, Soroti and West Nile (Arua), with representation in Kampala and an expansion hub planned for Mbale. Our regional presence supports sourcing, aggregation and commercial connections between producers, processors, buyers and investors.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <PlaceholderImage label="Our Team at Work" icon={Users} className="h-80 w-full rounded-2xl" />
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Business"
            title="Turning commercial potential into performance"
            description="We combine finance, advisory, technology and market connections to help enterprises solve practical operating challenges and scale sustainably."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-light bg-white p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-700">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Business challenges we help address
            </h3>
            <p className="mt-2 text-sm text-neutral-gray">
              We work with businesses to identify and address constraints such as:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {problems.map((problem) => (
                <li key={problem} className="rounded-lg bg-neutral-offwhite px-4 py-2 text-sm text-neutral-charcoal">
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <AnimatedSection className="rounded-2xl border border-neutral-light p-8">
            <Eye className="h-8 w-8 text-primary-700" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
              {content.about.vision}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded-2xl border border-neutral-light p-8">
            <Target className="h-8 w-8 text-secondary-700" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Our Business Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
              {content.about.mission}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <AnimatedSection>
            <img
              src={ceoPhoto}
              alt="Dr. Morris Chris Ongom, Founder and Chief Visionary Officer"
              loading="lazy"
              decoding="async"
              className="h-56 w-56 rounded-2xl object-cover object-center shadow-md"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Quote className="h-8 w-8 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-neutral-charcoal">
              “Sustainable growth starts with businesses that can operate efficiently, access the right capital and sell into dependable markets. Our focus is on connecting those elements so Ugandan enterprises can build competitive products and scale with confidence.”
            </p>
            <p className="mt-5 font-semibold text-neutral-charcoal">Dr. Morris Chris Ongom</p>
            <p className="text-sm text-neutral-gray">Chief Visionary Officer, GLOFORD Institute of Innovation</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Our Values" description="The principles that guide our work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection
                  key={value.id}
                  delay={i * 0.06}
                  className="rounded-2xl border border-neutral-light bg-white p-6"
                >
                  <Icon className="h-7 w-7 text-accent-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-gray">{value.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="How We Work"
            title="One partner across the business growth journey"
            description="We connect financing, operational advisory, technology, processing and market access—so businesses can move from a growth plan to practical execution."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex justify-center">
              <Compass className="h-12 w-12 text-primary-700" aria-hidden="true" />
            </div>
            <div className="rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-neutral-charcoal">Ideation Methodology</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
                Rooted in GII's signature 9-dot puzzle emblem: solving complex development challenges by breaking institutional conventions, applying artificial intelligence and uniting cross-sector investors.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {operationalMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-neutral-light bg-white p-5 text-center">
                <p className="text-2xl font-bold text-primary-800">{metric.value}</p>
                <p className="mt-2 text-xs text-neutral-gray">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-neutral-gray">
            Reported figures reproduced from the reference site; not independently verified.
          </p>
          <div className="mt-8 rounded-2xl border border-neutral-light bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-800">Operational Foothold</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-gray">
              Headquartered in Lira City, GII operates field hubs across northern, eastern and West Nile Uganda, with representation in Kampala and a planned expansion to Mbale.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {fieldHubs.map((hub) => (
                <li key={hub.city} className="rounded-full bg-neutral-offwhite px-3 py-1.5 text-xs text-neutral-charcoal">
                  {hub.city} · {hub.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Happy Haven Children's Park */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <AnimatedSection>
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
              Hospitality & Recreation Venture
            </span>
            <h2 className="text-3xl">Happy Haven Children's Park</h2>
            <p className="mt-4 leading-relaxed text-neutral-gray">
              Happy Haven Children's Park is part of GII's diversified venture portfolio in Lira City, providing a family recreation destination while creating local operating and service-business opportunities.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-800">Happy Haven Park Gallery</h3>
            <HappyHavenGallery />
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Leadership" description="Meet the leadership guiding GII's business strategy, operations and enterprise development work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.filter((member) => !member.position.includes("Placeholder")).map((member, i) => (
              <AnimatedSection
                key={member.id}
                delay={i * 0.06}
                className="overflow-hidden rounded-2xl border border-neutral-light bg-white text-center shadow-sm"
              >
                {member.id === "morris-chris-ongom" ? (
                  <img
                    src={ceoPhoto}
                    alt="Dr. Morris Chris Ongom"
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover object-center"
                  />
                ) : (
                  <PlaceholderImage label={member.name} icon={Users} tone="secondary" className="h-52 w-full" />
                )}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-neutral-charcoal">{member.name}</h3>
                  <p className="text-xs font-medium text-primary-700">{member.position}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-gray">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Grow Your Business?"
        description="Talk to GLOFORD Institute of Innovation."
        ctaLabel="Get Started"
        ctaPath="/contact"
      />
    </>
  );
}
