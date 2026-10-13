import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";
import LoanApplicationForm from "../components/LoanApplicationForm";
import CTASection from "../components/CTASection";
import { services } from "../data/services";

const financingOptions = [
  "Business Loans",
  "Micro Business Financing",
  "Agribusiness Financing",
  "Enterprise Growth Support",
];

export default function Services() {
  return (
    <>
      <Seo
        title="What We Do"
        description="Explore GLOFORD Institute of Innovation's services — business financing, micro-business development, agribusiness, agricultural produce, ICT and digital innovation, and ICT boot camps."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">What We Do</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Practical solutions designed to unlock opportunity and create sustainable growth.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <section id="financing" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              align="left"
              eyebrow="Financial Services"
              title="Your Business Has Potential. Let's Help You Unlock It."
              description="GII supports entrepreneurs and businesses by providing access to appropriate financing and business development opportunities."
            />
            <div id="micro-business" className="mt-8 grid grid-cols-2 gap-3">
              {financingOptions.map((option) => (
                <div
                  key={option}
                  className="rounded-xl border border-neutral-light bg-white px-4 py-3 text-sm font-medium text-neutral-charcoal"
                >
                  {option}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-neutral-gray">
              Note: GII does not guarantee loan approval. All applications are subject to review.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded-2xl border border-neutral-light bg-white p-7 shadow-sm">
            <h3 className="mb-5 text-lg">Loan Application</h3>
            <LoanApplicationForm />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Have an Agricultural Enterprise?"
        description="Explore opportunities with GII."
        ctaLabel="Explore Agribusiness"
        ctaPath="/agribusiness"
      />
    </>
  );
}
