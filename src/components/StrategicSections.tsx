import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Building2, CircleDollarSign, Factory, MapPin, Sprout } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import HappyHavenGallery from "./HappyHavenGallery";
import {
  agroIndustrialization,
  fieldHubs,
  greenInnovationFinance,
  happyHaven,
  investorProfiles,
  investorTicketSizes,
  milestones,
  strategicPortfolios,
} from "../data/strategic";

export default function StrategicSections() {
  return (
    <>
      <section id="agro-industrialization" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Program Pillar 01"
            title={agroIndustrialization.heading}
            description={agroIndustrialization.description}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {agroIndustrialization.metrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.06} className="rounded-2xl border border-neutral-light bg-white p-6 text-center">
                <p className="text-3xl font-bold text-primary-800">{metric.value}</p>
                <p className="mt-2 text-sm text-neutral-gray">{metric.label}</p>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-charcoal">
              <Factory className="h-5 w-5 text-primary-700" aria-hidden="true" />
              Key Strategic Interventions
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {agroIndustrialization.interventions.map((intervention) => (
                <li key={intervention} className="flex gap-3 rounded-xl bg-neutral-offwhite p-4 text-sm leading-relaxed text-neutral-charcoal">
                  <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" />
                  {intervention}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-neutral-gray">Portfolio indicators and descriptions are reproduced from the reference site.</p>
          </div>
        </div>
      </section>

      <section id="green-finance" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Program Pillar 02 · Catalytic Finance"
            title={greenInnovationFinance.heading}
            description={greenInnovationFinance.description}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <AnimatedSection className="rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <CircleDollarSign className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl text-neutral-charcoal">{greenInnovationFinance.calculatorTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-gray">{greenInnovationFinance.calculatorDescription}</p>
                </div>
              </div>
              <h4 className="mt-7 text-sm font-semibold text-neutral-charcoal">Project / Enterprise Categories</h4>
              <ul className="mt-3 space-y-2">
                {greenInnovationFinance.categories.map((category) => (
                  <li key={category} className="rounded-lg bg-neutral-offwhite px-4 py-3 text-sm text-neutral-charcoal">{category}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-neutral-charcoal">
                Capital Requirement Range: ${greenInnovationFinance.capitalRange.min.toLocaleString()} – ${greenInnovationFinance.capitalRange.max.toLocaleString()} USD
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="rounded-2xl bg-primary-950 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Illustrative Facility Projection</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div>
                  <p className="text-2xl font-bold">{greenInnovationFinance.exampleProjection.grantMatch}</p>
                  <p className="mt-1 text-xs text-white/70">Grant Match Potential</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{greenInnovationFinance.exampleProjection.estimatedJobs}</p>
                  <p className="mt-1 text-xs text-white/70">Estimated Direct Jobs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{greenInnovationFinance.exampleProjection.estimatedCarbonOffset}</p>
                  <p className="mt-1 text-xs text-white/70">Estimated CO₂ Offset / Yr</p>
                </div>
              </div>
              <p className="mt-6 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/70">
                {greenInnovationFinance.exampleProjection.note}
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-neutral-charcoal transition hover:bg-accent-400">
                Submit Enterprise Pre-Evaluation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="deal-network" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Program Pillar 05"
            title="Investor Management & Deal-Room Matchmaking"
            description="Connect institutional, DFI and diaspora capital to investment-ready Ugandan ventures."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <AnimatedSection className="rounded-2xl border border-neutral-light bg-white p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-charcoal">
                <BriefcaseBusiness className="h-5 w-5 text-primary-700" aria-hidden="true" />
                Investor Profiles
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-gray">
                {investorProfiles.map((profile) => <li key={profile}>{profile}</li>)}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.06} className="rounded-2xl border border-neutral-light bg-white p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-charcoal">
                <Building2 className="h-5 w-5 text-primary-700" aria-hidden="true" />
                Target Program Areas
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-gray">
                {strategicPortfolios.map((portfolio) => <li key={portfolio.id}>{portfolio.title}</li>)}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="rounded-2xl border border-neutral-light bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-charcoal">Preferred Ticket Size</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-gray">
                {investorTicketSizes.map((ticket) => <li key={ticket}>{ticket}</li>)}
              </ul>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800">
                Request Deal-Room Access & Investor Prospectus <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Field Innovation Network"
            title="Four active hubs. One expanding national grid."
            description="The field network is headquartered in Lira City, with operational innovation centers in Gulu, Soroti and Arua (West Nile), a capital liaison desk in Kampala and a forthcoming expansion hub in Mbale."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fieldHubs.map((hub, index) => (
              <AnimatedSection key={hub.city} delay={index * 0.04} className="rounded-2xl border border-neutral-light bg-white p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">{hub.region}</p>
                    <h3 className="mt-2 text-lg font-semibold text-neutral-charcoal">{hub.city}</h3>
                    <p className="text-sm text-neutral-gray">{hub.name}</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-800">{hub.status}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-gray">{hub.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hub.capabilities.map((capability) => (
                    <span key={capability} className="rounded-full bg-neutral-offwhite px-3 py-1 text-xs text-neutral-charcoal">{capability}</span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-gray">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Live Field Hub Network · Uganda
          </p>
        </div>
      </section>

      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Products & Services · GII Ventures"
            title="Hospitality & Recreation"
            description={happyHaven.description}
          />
          <div className="mt-10 rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">Lira City · Uganda · Flagship Venture</p>
                <h3 className="mt-2 text-2xl font-semibold text-neutral-charcoal">Happy Haven Children's Park</h3>
                <p className="mt-2 max-w-2xl text-sm text-neutral-gray">{happyHaven.summary}</p>
              </div>
              <span className="text-xs text-neutral-gray">Part of the GII venture portfolio</span>
            </div>
            <div className="mt-6">
              <HappyHavenGallery limit={3} />
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {happyHaven.features.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-neutral-offwhite p-4">
                  <h4 className="font-semibold text-neutral-charcoal">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-gray">{feature.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-neutral-light pt-5 text-sm leading-relaxed text-neutral-gray">
              <span className="font-semibold text-neutral-charcoal">Social Enterprise Model: </span>
              {happyHaven.model}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Field Chronicle · Since November 2019"
            title="Projects & Milestones — six years on the ground"
            description="From incorporation in Lira City to a multi-region field network, these milestones trace GLOFORD Institute of Innovation's programs, ventures and capital journey."
          />
          <ol className="mt-10 space-y-4">
            {milestones.map((milestone, index) => (
              <li key={milestone.date}>
                <AnimatedSection delay={index * 0.025}>
                  <div className="grid gap-3 rounded-2xl border border-neutral-light bg-white p-5 sm:grid-cols-[145px_1fr] sm:gap-6 sm:p-6">
                    <div>
                      <p className="font-semibold text-primary-800">{milestone.date}</p>
                      <p className="mt-1 text-xs text-neutral-gray">{milestone.category}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-charcoal">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-gray">{milestone.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm font-medium text-primary-700">Still building — the next milestone is in motion.</p>
        </div>
      </section>
    </>
  );
}
