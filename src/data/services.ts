import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Sprout,
  Wheat,
  Cpu,
  GraduationCap,
  Building2,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
}

// Editable service data — replace/extend via CMS in the future.
export const services: Service[] = [
  {
    id: "business-loans",
    icon: Banknote,
    title: "Business Loans & Access to Finance",
    description:
      "Through partnerships with financial and pro-poor development institutions, we connect SMEs and farmers to credit, microloans and other financial products to invest in and expand their businesses.",
    ctaLabel: "Learn About Financing",
    ctaPath: "/services#financing",
  },
  {
    id: "micro-business",
    icon: Building2,
    title: "SME Support Programs",
    description:
      "Tailored business development services for SMEs, including mentorship, business planning and capacity building to enhance competitiveness and growth potential.",
    ctaLabel: "Grow Your Business",
    ctaPath: "/services#micro-business",
  },
  {
    id: "agribusiness",
    icon: Sprout,
    title: "Agribusiness Development",
    description:
      "End-to-end support for farmers — from seed selection to market access — including training, inputs and resources to maximize yields and profits.",
    ctaLabel: "Explore Agribusiness",
    ctaPath: "/agribusiness",
  },
  {
    id: "agricultural-produce",
    icon: Wheat,
    title: "Market Linkages",
    description:
      "Connecting farmers with local and international markets to secure better prices, boosting income and economic stability.",
    ctaLabel: "Explore Produce",
    ctaPath: "/agribusiness#produce",
  },
  {
    id: "ict-innovation",
    icon: Cpu,
    title: "Appropriate Technology & ICT4D",
    description:
      "Introducing appropriate technologies and ICT4D solutions — from precision farming tools to e-learning, telemedicine and e-governance platforms — that improve service delivery for underserved communities.",
    ctaLabel: "Explore ICT",
    ctaPath: "/ict",
  },
  {
    id: "ict-bootcamps",
    icon: GraduationCap,
    title: "Digital Literacy & Innovation Hubs",
    description:
      "Digital literacy programs and innovation hubs that equip entrepreneurs and businesses with the resources, mentorship and networking opportunities needed to develop and scale tech-based solutions.",
    ctaLabel: "Join a Training",
    ctaPath: "/ict#training",
  },
];
