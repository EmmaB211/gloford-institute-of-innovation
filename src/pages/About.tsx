import { Users, Target, Eye, Compass, Quote, AlertTriangle } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import PlaceholderImage from "../components/PlaceholderImage";
import CTASection from "../components/CTASection";
import { coreValues } from "../data/values";
import { team } from "../data/team";

const problems = [
  "Chronic poverty",
  "Limited access and application of appropriate technology for development",
  "Poor business development services for SMEs",
  "Digital and technology illiteracy",
  "Limited entrepreneurial acumen",
  "Financial divides among youth and women SMEs",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about GLOFORD Institute of Innovation — our story, vision, mission, values and approach to connecting finance, agriculture and technology."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">About GLOFORD Institute of Innovation</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            An institution at the intersection of finance, agriculture, entrepreneurship and technology.
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
              GLOFORD Institute of Innovation (GII) is committed to driving
              transformative innovations across Africa by focusing on financial
              inclusion, agribusiness, agro-industrialization and ICT4D for
              wealth creation. GII serves as the social enterprise and business
              arm of GLOFORD Uganda, embodying a commitment to sustainable
              development through jobs and wealth creation.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-gray">
              Guided by this vision, GII implements strategic projects like
              Commercial Farming for Rural Development and partners with
              initiatives such as Young African Works and the Work Readiness
              Program, supported by the Private Sector Foundation. We also
              pride in the Wealth from Waste partnership with Woord En Daad and
              Wilde Ganzen — aiming to promote inclusive growth, green economy,
              uplift livelihoods, enhance social equity and boost economic
              resilience, especially in Northern Uganda and beyond.
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
            eyebrow="Our Story"
            title="Turning Ideas Into Opportunities"
            description="At GLOFORD Institute of Innovation, we strive to build sustainable business with SMEs, youth and women. We also empower communities through innovative solutions and transformative programs — fostering financial inclusion, harnessing ICT for creativity, advancing communication and marketing strategies, and promoting business development."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-light bg-white p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-700">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Problems GII Is Confronting
            </h3>
            <p className="mt-2 text-sm text-neutral-gray">
              GII was established to give solutions to problems being faced in the real world, including:
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
              To drive transformative innovations across Uganda and Africa
              through financial inclusion, agribusiness, agro-industrialization,
              and leveraging technology through ICT4D solutions for wealth
              creation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded-2xl border border-neutral-light p-8">
            <Target className="h-8 w-8 text-secondary-700" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
              To catalyze economic prosperity in Uganda and Africa by
              empowering individuals and communities through sustainable
              agriculture practices, technology-driven solutions, and inclusive
              entrepreneurship initiatives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <AnimatedSection>
            <PlaceholderImage label="Dr. Morris Chris Ongom" icon={Users} tone="secondary" className="h-56 w-56 rounded-2xl" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Quote className="h-8 w-8 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-neutral-charcoal">
              “We are committed to driving economic prosperity in Africa through
              transformative innovations. By focusing on sustainable agriculture,
              technology, green economy, financial inclusion, and inclusive
              entrepreneurship, we empower youth, women, and vulnerable
              communities. Our initiatives — Agrivision Northern Uganda, NUeLINK,
              Wealth From Waste program and Pro-Poor Financial Inclusion — are
              creating real opportunities and tackling poverty. Join us in
              building a brighter, more inclusive future for all.”
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
            eyebrow="Our Approach"
            title="Connecting Finance, Agriculture and Technology"
            description="GII connects financing, business growth, agribusiness, agricultural value addition and technology into one continuous pathway toward sustainable opportunity."
          />
          <div className="mt-10 flex justify-center">
            <Compass className="h-12 w-12 text-primary-700" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Happy Haven Children's Park */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
              Community Impact
            </span>
            <h2 className="text-3xl">Happy Haven Children's Park</h2>
            <p className="mt-4 leading-relaxed text-neutral-gray">
              Through a public-private partnership, GII is running a children's
              park in Lira City to provide child-friendly and safe services to
              the community, while also integrating child and youth focused
              innovations.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="grid grid-cols-2 gap-4">
            <PlaceholderImage label="Happy Haven Children's Park" icon={Users} tone="accent" className="col-span-2 h-48 rounded-2xl" />
            <PlaceholderImage label="Park Facilities" icon={Users} tone="primary" className="h-32 rounded-2xl" />
            <PlaceholderImage label="Community Grounds" icon={Users} tone="secondary" className="h-32 rounded-2xl" />
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Our Team" description="Confirmed leadership shown below; remaining roles are placeholders until further profiles are supplied." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimatedSection
                key={member.id}
                delay={i * 0.06}
                className="overflow-hidden rounded-2xl border border-neutral-light bg-white text-center shadow-sm"
              >
                <PlaceholderImage label={member.name} icon={Users} tone="secondary" className="h-52 w-full" />
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
