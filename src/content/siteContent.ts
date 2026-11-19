import financialImage from "../assets/financial.avif";
import soybeansImage from "../assets/soybeans.avif";
import technologyImage from "../assets/technology.avif";
import { impactStats } from "../data/impact";
import { programs } from "../data/programs";
import { services } from "../data/services";

export interface SiteContent {
  settings: {
    siteName: string;
    tagline: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
    seoTitle: string;
    seoDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButtonLabel: string;
    primaryButtonPath: string;
    secondaryButtonLabel: string;
    secondaryButtonPath: string;
    slides: { src: string; alt: string; label: string }[];
  };
  home: {
    pillarsTitle: string;
    pillarsDescription: string;
    storyTitle: string;
    storyDescription: string;
    programsTitle: string;
    programsDescription: string;
  };
  about: {
    introduction: string;
    vision: string;
    mission: string;
  };
  impactStats: { id: string; label: string; value: number; suffix: string }[];
  services: { id: string; title: string; description: string }[];
  programs: { id: string; title: string; description: string }[];
}

export const defaultSiteContent: SiteContent = {
  settings: {
    siteName: "GLOFORD Institute of Innovation",
    tagline: "Thinking Outside The Box",
    contactEmail: "info@glofordinnovation.org",
    contactPhone: "+256-392175980 / +256-774016223",
    address: "The Leadership House, Plot 106 Police Road, Lira City West Division, P.O Box 331062",
    seoTitle: "GLOFORD Institute of Innovation | 3D Impact & Agri-Tech Platform",
    seoDescription:
      "GLOFORD Institute of Innovation bridges subsistence farming and high-growth industrial enterprise through green micro-financing, intelligent IC4D platforms, agro-industrialization and investor deal-rooms across Uganda and East Africa.",
  },
  hero: {
    eyebrow: "Thinking Outside The Box · Est. Nov 2019 · Lira, Uganda",
    title: "Catalyzing African Agro-Industry & AI Innovation.",
    description:
      "GLOFORD Institute of Innovation bridges smallholder production and high-growth industrial enterprise. We deploy green micro-financing, intelligent IC4D platforms and syndicated investor deal-rooms across Uganda and East Africa.",
    primaryButtonLabel: "Explore Loan Options",
    primaryButtonPath: "/services",
    secondaryButtonLabel: "Talk to Us",
    secondaryButtonPath: "/contact",
    slides: [
      { src: financialImage, alt: "Financial support for business and agriculture", label: "Finance for enterprise" },
      { src: soybeansImage, alt: "Soybean crop ready for agricultural value addition", label: "Agribusiness & value addition" },
      { src: technologyImage, alt: "Technology supporting innovation and development", label: "Technology & innovation" },
    ],
  },
  home: {
    pillarsTitle: "Five Pillar Architecture of GII",
    pillarsDescription:
      "Strategic interventions engineered by GLOFORD Institute to de-risk agro-enterprises, mobilize private capital, and build regional technological resilience.",
    storyTitle: "Turning Ideas Into Opportunities",
    storyDescription:
      "GLOFORD Institute of Innovation works with SMEs, agribusinesses and investors to turn commercial potential into stronger operations, investment-ready ventures and regional market opportunities.",
    programsTitle: "Core Strategic Portfolios",
    programsDescription:
      "Explore GLOFORD Institute's five integrated pillars for agro-industrialization, green finance, AI-enabled enterprise growth, trade and investment.",
  },
  about: {
    introduction:
      "Established in 2019, GLOFORD Institute of Innovation is the enterprise and business solutions arm of Global Forum for Development (GLOFORD Uganda). We work with SMEs, agribusinesses and investors to strengthen operations, mobilize capital and grow commercially viable ventures.",
    vision:
      "A competitive, industrialized African economy where local businesses build value, create quality jobs and compete in regional and international markets.",
    mission:
      "To help businesses grow through practical advisory, fit-for-purpose finance, technology adoption, value addition and structured market and investment connections.",
  },
  impactStats,
  services: services.map(({ id, title, description }) => ({ id, title, description })),
  programs: programs.map(({ id, title, description }) => ({ id, title, description })),
};

export function mergeSiteContent(saved: Partial<SiteContent>): SiteContent {
  return {
    ...defaultSiteContent,
    ...saved,
    settings: { ...defaultSiteContent.settings, ...saved.settings },
    hero: { ...defaultSiteContent.hero, ...saved.hero },
    home: { ...defaultSiteContent.home, ...saved.home },
    about: { ...defaultSiteContent.about, ...saved.about },
    impactStats: saved.impactStats ?? defaultSiteContent.impactStats,
    services: saved.services ?? defaultSiteContent.services,
    programs: saved.programs ?? defaultSiteContent.programs,
  };
}
