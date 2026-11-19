export interface Program {
  id: string;
  title: string;
  description: string;
  focusArea:
    | "Business Development"
    | "Business Finance"
    | "Agribusiness"
    | "Agricultural Value Chains"
    | "ICT & Digital Skills"
    | "Innovation"
    | "Enterprise Development";
  status: "Ongoing" | "Upcoming" | "Planned";
  image: string;
}

// Program data sourced from official GII materials.
export const programs: Program[] = [
  {
    id: "agro-industrialization",
    title: "Agro-industrialization",
    description:
      "Value-chain optimization, clean agro-processing plants and rural factory ecosystems across Uganda and East Africa.",
    focusArea: "Agribusiness",
    status: "Ongoing",
    image: "/images/programs/commercial-farming.svg",
  },
  {
    id: "micro-green-financing",
    title: "Micro and Green Financing",
    description:
      "Wealth From Waste and GLOFORD Green Innovation Finance (GIF) — micro-equity matching, SME and farmer micro-financing, and revolving loan pools for eco-enterprises.",
    focusArea: "Business Finance",
    status: "Ongoing",
    image: "/images/programs/wealth-from-waste.svg",
  },
  {
    id: "ai-ic4d",
    title: "AI Business Development & IC4D",
    description:
      "Generative AI tools, predictive crop yield models, digital record-keeping and scalable enterprise management through the IC4D framework.",
    focusArea: "ICT & Digital Skills",
    status: "Ongoing",
    image: "/images/programs/nuelink.svg",
  },
  {
    id: "trade-investment",
    title: "Agribusiness, Trade & Investment",
    description:
      "Export readiness certifications, supply contract aggregation, cross-border logistics and market linkage hubs.",
    focusArea: "Agricultural Value Chains",
    status: "Ongoing",
    image: "/images/programs/agrivision.svg",
  },
  {
    id: "investor-networking",
    title: "Investor Management & Networking",
    description:
      "Annual deal-rooms, diaspora syndicate networks, impact investor matchmaking and institutional investor relations governance.",
    focusArea: "Innovation",
    status: "Ongoing",
    image: "/images/programs/pro-poor-financial-inclusion.svg",
  },
  {
    id: "young-african-works",
    title: "Young African Works",
    description:
      "Practical training and enterprise development that build the skills businesses need to grow and operate effectively.",
    focusArea: "Enterprise Development",
    status: "Ongoing",
    image: "/images/programs/young-african-works.svg",
  },
  {
    id: "work-readiness-program",
    title: "Work Readiness Program",
    description:
      "Workplace skills and career preparation aligned with private-sector roles and employer requirements.",
    focusArea: "Business Development",
    status: "Ongoing",
    image: "/images/programs/work-readiness.svg",
  },
];

export const focusAreas = [
  "All",
  "Business Development",
  "Business Finance",
  "Agribusiness",
  "Agricultural Value Chains",
  "ICT & Digital Skills",
  "Innovation",
  "Enterprise Development",
] as const;
