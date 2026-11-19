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
    id: "agro-industrialization",
    icon: Sprout,
    title: "Agro-industrialization",
    description:
      "Value-chain optimization, clean agro-processing plants, and rural factory ecosystems across Uganda and East Africa.",
    ctaLabel: "Explore Agro Hubs",
    ctaPath: "/agribusiness",
  },
  {
    id: "green-financing",
    icon: Banknote,
    title: "Micro and Green Financing",
    description:
      "The flagship Wealth From Waste program and GLOFORD Green Innovation Finance (GIF) — micro-equity matching, micro-financing for SMEs and farmers, and revolving loan pools for eco-enterprises.",
    ctaLabel: "Explore Green Financing",
    ctaPath: "/services#loan-products",
  },
  {
    id: "ai-ic4d",
    icon: Cpu,
    title: "AI Business Development and Management - IC4D",
    description:
      "Deploying generative AI tools, predictive crop yield models, digital record-keeping, and scalable enterprise management for youth ventures.",
    ctaLabel: "Explore IC4D",
    ctaPath: "/ict",
  },
  {
    id: "agribusiness-trade",
    icon: Wheat,
    title: "Agribusiness, Trade and Investment",
    description:
      "Export readiness certifications, supply contract aggregation, cross-border logistics facilitation, and market linkage hubs.",
    ctaLabel: "Explore Trade",
    ctaPath: "/agribusiness#produce",
  },
  {
    id: "investor-management",
    icon: Building2,
    title: "Investor Management and Networking",
    description:
      "Annual deal-rooms, diaspora syndicate networks, impact investor matchmaking, and institutional investor relations governance.",
    ctaLabel: "Access the Deal-Room",
    ctaPath: "/contact",
  },
  {
    id: "ict-bootcamps",
    icon: GraduationCap,
    title: "Digital Literacy & Innovation Hubs",
    description:
      "Build practical digital capabilities for entrepreneurs and teams adopting technology in business operations and service delivery.",
    ctaLabel: "Join a Training",
    ctaPath: "/ict#training",
  },
];
