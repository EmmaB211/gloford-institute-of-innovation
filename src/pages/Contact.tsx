import { Phone, Mail, MapPin, Clock, ExternalLink, Landmark, Building2, Users2, Rocket } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

const googleMapsUrl = "https://maps.app.goo.gl/h9oJRAYUnfLbjEH8A";
const googleMapsEmbedUrl =
  "https://maps.google.com/maps?q=GLOFORD%20Institute%20of%20Innovation%2C%20Lira%2C%20Uganda&z=17&output=embed";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+256-392175980 / +256-774016223" },
  { icon: Mail, label: "Email", value: "info@glofordinnovation.org" },
  {
    icon: MapPin,
    label: "Physical Address",
    value:
      "The Leadership House, Plot 106 Police Road Junior Quarters Ward, Lira City West Division, P.O Box 331062",
  },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday, 8:00 AM – 5:00 PM" },
];

const partnerTypes = [
  { icon: Landmark, label: "Financial Institutions" },
  { icon: Building2, label: "SMEs & Institutional Buyers" },
  { icon: Users2, label: "Producer Cooperatives & Suppliers" },
  { icon: Rocket, label: "Technology Providers & Investors" },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Talk to GLOFORD Institute of Innovation about business financing, agribusiness growth, market access, technology and investment opportunities."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Tell us what your business is working toward. Our team can help identify the right next conversation.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader align="left" title="Talk to a Business Solutions Adviser" />
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
            <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm">
              <iframe
                title="GLOFORD Institute of Innovation location on Google Maps"
                src={googleMapsEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
              >
                Get directions on Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
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
            eyebrow="Commercial Partnerships"
            title="Build stronger business connections"
            description="We work with finance providers, investors, buyers, producer organizations and technology and logistics companies to strengthen businesses and value chains."
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
        title="Ready to discuss a business opportunity?"
        ctaLabel="Start a Conversation"
        ctaPath="#field-name"
      />
    </>
  );
}
