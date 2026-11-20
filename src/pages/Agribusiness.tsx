import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, ArrowDown, CheckCircle2, Loader2, PackagePlus, Sprout, Warehouse, Factory, Store, TrendingUp } from "lucide-react";
import FormField from "../components/FormField";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import { products, productCategories } from "../data/products";
import { faqs } from "../data/faqs";
import { cn } from "../lib/cn";
import { sendFormSubmission } from "../lib/sendFormSubmission";

const valueChain = [
  { icon: Sprout, label: "Production" },
  { icon: Warehouse, label: "Aggregation" },
  { icon: Factory, label: "Value Addition" },
  { icon: Store, label: "Market Access" },
  { icon: TrendingUp, label: "Income & Growth" },
];

const agribusinessAreas = [
  "Commercial production planning",
  "Working capital and equipment finance",
  "Produce aggregation and sourcing",
  "Processing and value addition",
  "Buyer and market connections",
  "Supply-chain and logistics support",
];

const agribusinessFaqs = faqs.filter((f) => f.id === "faq-agribusiness" || f.id === "faq-farmers");

export default function Agribusiness() {
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]>("All");
  const [grainType, setGrainType] = useState("Maize");
  const [grainAmount, setGrainAmount] = useState("");
  const [grainLocation, setGrainLocation] = useState("");
  const [grainStatus, setGrainStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [grainError, setGrainError] = useState("");
  const [grainSubmissionError, setGrainSubmissionError] = useState("");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const submitGrainAmount = async (event: FormEvent) => {
    event.preventDefault();
    const amount = Number(grainAmount);

    if (!grainAmount || !Number.isFinite(amount) || amount <= 0) {
      setGrainError("Enter a valid grain amount greater than 0 kg.");
      return;
    }

    setGrainError("");
    setGrainSubmissionError("");
    setGrainStatus("submitting");
    try {
      await sendFormSubmission("grain", {
        grainType,
        amountKilograms: grainAmount,
        location: grainLocation,
      });
      setGrainStatus("success");
    } catch (error) {
      setGrainSubmissionError(error instanceof Error ? error.message : "We could not submit your grain amount. Please try again later.");
      setGrainStatus("error");
    }
  };

  return (
    <>
      <Seo
        title="Agribusiness"
        description="GLOFORD Institute of Innovation supports agricultural enterprises across production, aggregation, value addition and market access."
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-20 text-white">
        <div className="container-page text-center">
          <h1 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">From Farm to Market, Creating Value Along the Way.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Commercial agribusiness support—from production planning and aggregation to processing, supply and market access.
          </p>
        </div>
      </section>

      {/* Value chain */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title="Build a More Competitive Agribusiness"
            description="Coordinate every step of your supply chain to improve consistency, reduce losses and deliver products buyers need."
          />
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {valueChain.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.label} delay={i * 0.08} className="flex flex-col items-center gap-2 sm:flex-row">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary-200 bg-primary-50 px-6 py-5">
                    <Icon className="h-7 w-7 text-primary-700" aria-hidden="true" />
                    <span className="text-sm font-semibold text-primary-800">{step.label}</span>
                  </div>
                  {i < valueChain.length - 1 && (
                    <ArrowDown className="h-5 w-5 text-primary-400 sm:rotate-[-90deg]" aria-hidden="true" />
                  )}
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agribusinessAreas.map((area, i) => (
              <AnimatedSection
                key={area}
                delay={i * 0.05}
                className="rounded-xl border border-neutral-light bg-white px-5 py-4 text-sm font-medium text-neutral-charcoal"
              >
                {area}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Produce catalog */}
      <section id="produce" className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            title="Source and Sell Agricultural Produce"
            description="Browse the product categories we work across, then contact our team to discuss current volumes, specifications and buyer or supplier requirements."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeCategory === category
                    ? "bg-primary-700 text-white"
                    : "bg-white text-neutral-charcoal hover:bg-primary-50",
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Grain submission */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8">
            {grainStatus === "success" ? (
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary-700" aria-hidden="true" />
                <h2 className="mt-4 text-2xl text-neutral-charcoal">Grain Amount Submitted</h2>
                <p className="mt-2 text-sm text-neutral-gray">
                  {Number(grainAmount).toLocaleString()} kg of {grainType}{grainLocation ? ` in ${grainLocation}` : ""} has been emailed to our agribusiness team.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setGrainAmount("");
                    setGrainLocation("");
                    setGrainStatus("idle");
                  }}
                  className="mt-5 text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  Submit another amount
                </button>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <PackagePlus className="mx-auto h-9 w-9 text-primary-700" aria-hidden="true" />
                  <h2 className="mt-3 text-2xl text-neutral-charcoal">Submit Your Grain Quantity</h2>
                  <p className="mt-2 text-sm text-neutral-gray">
                    Share your crop and available volume. The details will be emailed to our agribusiness team.
                  </p>
                </div>
                <form onSubmit={submitGrainAmount} noValidate className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      as="select"
                      label="Grain Type"
                      name="grainType"
                      required
                      value={grainType}
                      onChange={(event) => setGrainType(event.target.value)}
                    >
                      <option value="Maize">Maize</option>
                      <option value="Rice">Rice</option>
                      <option value="Beans">Beans</option>
                      <option value="Soybeans">Soybeans</option>
                      <option value="Sesame">Sesame</option>
                      <option value="Millet">Millet</option>
                      <option value="Sorghum">Sorghum</option>
                      <option value="Other">Other</option>
                    </FormField>
                    <FormField
                      label="Amount in Kilograms"
                      name="grainAmount"
                      type="number"
                      min="1"
                      step="1"
                      required
                      placeholder="e.g. 500"
                      value={grainAmount}
                      onChange={(event) => {
                        setGrainAmount(event.target.value);
                        setGrainError("");
                        setGrainSubmissionError("");
                        setGrainStatus("idle");
                      }}
                      error={grainError}
                    />
                  </div>
                  <FormField
                    label="Location"
                    name="grainLocation"
                    placeholder="District or market location"
                    value={grainLocation}
                    onChange={(event) => {
                      setGrainLocation(event.target.value);
                      setGrainSubmissionError("");
                      setGrainStatus("idle");
                    }}
                  />
                  {grainStatus === "error" && (
                    <p className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {grainSubmissionError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={grainStatus === "submitting"}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
                  >
                    {grainStatus === "submitting" ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
                    ) : (
                      <><PackagePlus className="h-4 w-4" /> Submit Grain Amount</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion faqs={agribusinessFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have an Agricultural Enterprise?"
        description="Explore opportunities with GII."
        ctaLabel="Explore Our Agribusiness Work"
        ctaPath="/contact"
      />
    </>
  );
}
