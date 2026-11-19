export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Editable FAQ content — answers avoid inventing specific eligibility or financial terms.
export const faqs: FAQ[] = [
  {
    id: "faq-loan-apply",
    question: "How can I apply for a business loan?",
    answer:
      "You can submit a business financing application through our online form. Our team will review your submission and reach out to discuss the next steps.",
  },
  {
    id: "faq-support-access",
    question: "Who can access GII's business support services?",
    answer:
      "We work with entrepreneurs, SMEs and growing enterprises. Contact us to discuss your business goals, financing needs or operational priorities.",
  },
  {
    id: "faq-agribusiness",
    question: "Does GII support agribusinesses?",
    answer:
      "Yes. We work with agricultural enterprises and entrepreneurs across the value chain, from production to market access and value addition.",
  },
  {
    id: "faq-bootcamp",
    question: "How can I participate in an ICT boot camp?",
    answer:
      "You can register your interest through our training registration form. We will share details about upcoming sessions as they are confirmed.",
  },
  {
    id: "faq-farmers",
    question: "Does GII work with farmers?",
    answer:
      "Yes. We support farmers through agribusiness financing, market access initiatives and value addition support.",
  },
  {
    id: "faq-partner",
    question: "How can I partner with GLOFORD Institute of Innovation?",
    answer:
      "We work with lenders, investors, buyers, producer organizations, technology providers and logistics businesses. Contact us to discuss a commercial collaboration.",
  },
];
