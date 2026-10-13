import { Phone, Mail, MapPin, Clock, MapPinned, Landmark, Building2, Users2, Rocket } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import PlaceholderImage from "../components/PlaceholderImage";
import CTASection from "../components/CTASection";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+256-392175980 / +256-774016223" },
  { icon: Mail, label: "Email", value: "info@glofordinnovation.org" },
  {
    icon: MapPin,
    label: "Physical Address",
    value:
      "The Leadership House, Plot 106 Police Road Junior Quarters Ward, Lira City West Division, P.O Box 331062",
  },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday, 8:00 AM – 5:00 PM (Placeholder)" },
];

const partnerTypes = [
  { icon: Landmark, label: "Financial Institutions" },
  { icon: Building2, label: "Businesses & NGOs" },
  { icon: Users2, label: "Farmers' & Community Organizations" },
  { icon: Rocket, label: "Technology Companies & Investors" },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with GLOFORD Institute of Innovation. Reach our team for business financing, agribusiness, ICT training and partnership inquiries."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            We would love to hear from you. Reach out with your questions or inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader align="left" title="Get In Touch" />
            <div className="mt-8 space-y-5">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-charcoal">{label}</p>
                    <p className="text-sm text-neutral-gray">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <PlaceholderImage label="Our Location" icon={MapPinned} tone="secondary" className="mt-8 h-56 w-full rounded-2xl" />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="rounded-2xl border border-neutral-light bg-white p-7 shadow-sm">
            <h3 className="mb-5 text-lg">Send a Message</h3>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Partnerships"
            title="Let's Build Opportunities Together"
            description="We invite financial institutions, businesses, NGOs, government institutions, development organizations, technology companies, farmers' organizations, training institutions, investors and community organizations to partner with us."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map(({ icon: Icon, label }, i) => (
              <AnimatedSection
                key={label}
                delay={i * 0.06}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-light bg-white p-6 text-center"
              >
                <Icon className="h-8 w-8 text-primary-700" aria-hidden="true" />
                <p className="text-sm font-medium text-neutral-charcoal">{label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Partnering With Us?"
        ctaLabel="Partner With Us"
        ctaPath="#field-name"
      />
    </>
  );
}
