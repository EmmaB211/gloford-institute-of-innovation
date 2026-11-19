import { ArrowDownToLine, ArrowRight, BadgeCheck, FileText } from "lucide-react";
import Seo from "../lib/seo";
import SectionHeader from "../components/SectionHeader";
import AnimatedSection from "../components/AnimatedSection";
import LoanApplicationForm from "../components/LoanApplicationForm";
import { Link } from "react-router-dom";
import individualApplicationUrl from "../assets/LOAN APPLICATION FORM 2025 FOR INDIVIDUAL (1).docx?url";
import earlyStageApplicationUrl from "../assets/LOAN APPLICATION FORM OF EARLY.docx?url";
import revolvingFundBriefUrl from "../assets/GLOFORD -GII Revolving Fund Briefer.pdf?url";

const products = [
  {
    id: "microbusiness",
    title: "Microbusiness Credit Support (MBCS)",
    summary:
      "For registered individuals and businesses with active operations, including waste-value-chain ventures and other microbusinesses in Lira City.",
    eligibility: [
      "Applicant/business is registered and qualified, with active business operations.",
      "Provide a local LC.1 introductory letter and applicable business licence or registration certificate.",
      "Provide collateral and three guarantors as listed in the application checklist.",
    ],
    loanBands: [],
  },
  {
    id: "wealth-from-waste",
    title: "Wealth from Waste (WFW) Early-Stage Financing",
    summary:
      "For early-stage ventures turning waste into value through activities such as recycling, composting, briquettes, waste collection and upcycling.",
    eligibility: [
      "The enterprise follows a waste-to-wealth model and operates in Lira, Gulu or Soroti.",
      "The fund brief prioritizes entrepreneurs aged 18–35 and ventures focused on women and youth, including businesses employing at least 70% youth and women.",
      "The brief also describes ventures offering dignified employment to more than 20 young people; ask GII how this criterion applies to an early-stage applicant.",
      "A group liability form endorsed by a group Leader and acts as the primary group guarantor.",
    ],
    loanBands: [
      ["Level 1 · Start-up / early stage", "UGX 500,000–1,000,000"],
      ["Level 2 · Growth / early expansion", "UGX 1,000,001–3,000,000"],
      ["Level 3 · Established early-stage enterprise", "UGX 3,000,000–4,000,000"],
      ["Linkages to other financing options", "UGX 4,000,001 and above"],
    ],
  },
] as const;

const processingFeeBands = [
  ["UGX 500,000–1,000,000", "UGX 50,000"],
  ["UGX 1,100,000–2,000,000", "UGX 80,000"],
  ["UGX 2,100,000–5,000,000", "UGX 120,000"],
  ["UGX 5,100,000–8,000,000", "UGX 170,000"],
  ["UGX 9,000,000–15,000,000", "UGX 230,000"],
  ["Above UGX 15,000,000", "UGX 300,000"],
] as const;

const checklist = [
  "Completed GII application form",
  "Applicant’s National ID copy",
  "Three guarantors’ National ID copies ",
  "LC.1 introductory letter and business licence/registration, where applicable",
  "Collateral document, such as a land sale agreement or vehicle logbook ",
  "Signed recovery protocol and repayment plan",
  "Proof of processing-fee payment ",
  "WFW group leader endorsement and guarantee (early-stage applicants)",
];

export default function Services() {
  return (
    <>
      <Seo
        title="Loans"
        description="Review GLOFORD's Microbusiness Credit Support and Wealth from Waste early-stage financing, including published eligibility criteria, terms, required documents and how to apply."
      />

      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20 text-white">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">GLOFORD Financing</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl text-white sm:text-5xl">Business Loans</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Compare the available financing pathways, check the published requirements and start an application.
            All applications are assessed; applying does not guarantee approval.
          </p>
          <a
            href="#loan-products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-neutral-charcoal transition hover:bg-accent-400"
          >
            View loan products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="loan-products" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Loan Products"
            title="Choose the financing pathway that fits your business"
            description="GII's supplied documents describe two different pathways. Review the eligibility and terms for each before starting an application."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.08} className="rounded-2xl border border-neutral-light bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-semibold text-neutral-charcoal">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-gray">{product.summary}</p>
                <h4 className="mt-6 text-sm font-semibold text-neutral-charcoal">Who may qualify</h4>
                <ul className="mt-3 space-y-2">
                  {product.eligibility.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-gray">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {product.id === "wealth-from-waste" && (
                  <>
                    <h4 className="mt-6 text-sm font-semibold text-neutral-charcoal">Financing levels shown in the application form</h4>
                    <div className="mt-3 overflow-hidden rounded-xl border border-neutral-light">
                      {product.loanBands.map(([label, amount]) => (
                        <div key={label} className="grid grid-cols-[1fr_auto] gap-3 border-b border-neutral-light px-4 py-3 text-sm last:border-b-0">
                          <span className="text-neutral-gray">{label}</span>
                          <span className="font-medium text-neutral-charcoal">{amount}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <h4 className="mt-6 text-sm font-semibold text-neutral-charcoal">Loan processing fees (apply to all loan products)</h4>
                <div className="mt-3 overflow-hidden rounded-xl border border-neutral-light">
                  {processingFeeBands.map(([label, amount]) => (
                    <div key={label} className="grid grid-cols-[1fr_auto] gap-3 border-b border-neutral-light px-4 py-3 text-sm last:border-b-0">
                      <span className="text-neutral-gray">{label}</span>
                      <span className="font-medium text-neutral-charcoal">{amount}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/services#apply"
                  onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  Start an application <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-offwhite py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Terms and Criteria"
            title="What to know before you apply"
            description="These summaries are taken from the application forms and fund brief supplied with the website. Your signed offer and loan agreement determine final terms."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <AnimatedSection className="rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-neutral-charcoal">Rates and repayment periods</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-gray">
                <li><strong className="text-neutral-charcoal">MBCS microbusinesses in Lira City:</strong> 2.5% per month (described in the form as 10% over four months).</li>
                <li><strong className="text-neutral-charcoal">Wealth from Waste:</strong> 10% flat rate, charged once over the loan period.</li>
                <li><strong className="text-neutral-charcoal">MBCS loan period:</strong> 4 months, repaid in monthly instalments.</li>
                <li><strong className="text-neutral-charcoal">Other loan products:</strong> 12 months total, including a 3-month grace period, followed by monthly instalments.</li>
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-neutral-charcoal">Processing fees and overdue recovery</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-gray">
                The processing fee is based on the loan amount and applies to all loan products. See the fee schedule under each product.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
                A 20% debt-recovery charge on the outstanding loan balance applies to all loan products when the debt is referred for collection.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-6 rounded-2xl border border-neutral-light bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-neutral-charcoal">Application checklist</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-gray">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-neutral-gray">
              MBCS collateral must be handed to GII before disbursement, according to the supplied form. WFW applications are subject to appraisal, due diligence and committee approval; the group leader is identified as the primary guarantor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Start an Application"
              title="Tell GII about your financing request"
              description="Use this form to prepare an email enquiry. You will need to send the email yourself and complete the official application form for assessment."
            />
            <div className="mt-6 rounded-2xl border border-neutral-light bg-neutral-offwhite p-6">
              <h3 className="font-semibold text-neutral-charcoal">Official application documents</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={individualApplicationUrl} download className="inline-flex items-center gap-2 text-primary-700 hover:underline">
                    <ArrowDownToLine className="h-4 w-4" aria-hidden="true" /> MBCS individual application form
                  </a>
                </li>
                <li>
                  <a href={earlyStageApplicationUrl} download className="inline-flex items-center gap-2 text-primary-700 hover:underline">
                    <ArrowDownToLine className="h-4 w-4" aria-hidden="true" /> WFW early-stage application form
                  </a>
                </li>
                <li>
                  <a href={revolvingFundBriefUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-700 hover:underline">
                    <FileText className="h-4 w-4" aria-hidden="true" /> Read the WFW revolving-fund brief
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <AnimatedSection className="rounded-2xl border border-neutral-light bg-white p-6 shadow-sm sm:p-8">
            <div id="apply">
              <h3 className="mb-5 text-lg font-semibold text-neutral-charcoal">Loan enquiry form</h3>
              <LoanApplicationForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
