export const strategicPortfolios = [
  {
    id: "agro-industrialization",
    number: "01",
    title: "Agro-industrialization",
    description:
      "Value-chain optimization, clean agro-processing plants, and rural factory ecosystems across Uganda and East Africa.",
  },
  {
    id: "green-financing",
    number: "02",
    title: "Micro and Green Financing",
    description:
      "The flagship Wealth From Waste program and GLOFORD Green Innovation Finance (GIF) — micro-equity matching, micro-financing for SMEs and farmers, and revolving loan pools for eco-enterprises.",
  },
  {
    id: "ai-ic4d",
    number: "03",
    title: "AI Business Development and Management - IC4D",
    description:
      "Deploying generative AI tools, predictive crop yield models, digital record-keeping, and scalable enterprise management for youth ventures.",
  },
  {
    id: "trade-investment",
    number: "04",
    title: "Agribusiness, Trade and Investment",
    description:
      "Export readiness certifications, supply contract aggregation, cross-border logistics facilitation, and market linkage hubs.",
  },
  {
    id: "investor-networking",
    number: "05",
    title: "Investor Management and Networking",
    description:
      "Annual deal-rooms, diaspora syndicate networks, impact investor matchmaking, and institutional investor relations governance.",
  },
] as const;

export const agroIndustrialization = {
  heading: "Transforming raw agricultural commodities into high-value manufactured products",
  description:
    "GLOFORD Institute of Innovation bridges the transition from smallholder production to commercial agro-processing. We facilitate equipment leasing, sanitary certification, and modern processing infrastructure designed to help businesses capture more value.",
  metrics: [
    { value: "3,000+", label: "Smallholders Engaged" },
    { value: "48 Active", label: "Processing Units" },
    { value: "-42%", label: "Post-Harvest Waste Cut" },
  ],
  interventions: [
    "Solar-powered post-harvest processing hubs in Lango & West Nile",
    "Cassava, sesame, and soybean value-addition mini-refineries",
    "Eco-packaging & cold chain storage technology networks",
    "Farmer cooperative mechanization financing schemes",
  ],
} as const;

export const greenInnovationFinance = {
  heading: "Wealth From Waste · GLOFORD Green Innovation Fund (GIF)",
  description:
    "Fueling wastepreneurship, circular soil remediation, clean solar energy, and women-led eco-enterprises across Lira, Gulu, Soroti, and West Nile.",
  calculatorTitle: "Green Innovation Fund (GIF) Impact & Eligibility Calculator",
  calculatorDescription: "Simulate grant qualification & catalytic co-financing for East African green SMEs.",
  categories: [
    "Wastepreneurship & Clean Energy (Briquetting, Biogas)",
    "Solar Irrigation & Agro-industrial Value Addition",
    "Circular Bio-fertilizer & Regenerative Soil Tech",
    "Eco-cold Storage & Post-Harvest Preservation",
  ],
  capitalRange: { min: 5000, default: 25000, max: 150000 },
  exampleProjection: {
    grantMatch: "$8,750",
    estimatedJobs: "~24 Youth & Women",
    estimatedCarbonOffset: "210 Metric Tons",
    note: "Illustrative reference-site projection based on GLOFORD Institute's 2024–2026 Northern Uganda Green Innovation Fund portfolio criteria. Pre-screening requires registration under Uganda URSB. This is not a grant offer or eligibility decision.",
  },
} as const;

export const investorProfiles = [
  "Impact Venture Capital / Angel Fund",
  "Development Finance Institution (DFI)",
  "Ugandan Diaspora Syndicate / Remittance",
  "Family Office / Philanthropic Foundation",
] as const;

export const investorTicketSizes = [
  "$10,000 – $50,000 (Early Seed)",
  "$50,000 – $250,000 (Growth Round)",
  "$250,000 – $1,000,000+ (Facility Scale)",
] as const;

export const fieldHubs = [
  {
    city: "Lira City",
    name: "Flagship Headquarters",
    region: "Lango · Northern Uganda",
    status: "Operational",
    description:
      "GII's flagship innovation campus and command center in Lira City — anchoring agro-industrialization across the Lango sub-region and coordinating the national field network.",
    capabilities: ["Innovation Campus", "IC4D Command Center", "Agro-processing Hub"],
  },
  {
    city: "Gulu City",
    name: "Northern Innovation Center",
    region: "Northern Uganda",
    status: "Operational",
    description: "An operational innovation center serving businesses and enterprise networks in the Northern Region.",
    capabilities: ["Innovation Center", "Business Network"],
  },
  {
    city: "Soroti City",
    name: "Eastern Green Base",
    region: "Eastern Uganda",
    status: "Operational",
    description: "An operational field base supporting green enterprise and agribusiness in Eastern Uganda.",
    capabilities: ["Green Enterprise", "Agribusiness"],
  },
] as const;

export const milestones = [
  {
    date: "Nov 2019",
    category: "Genesis",
    title: "GII Founded & Incorporated",
    description:
      "GLOFORD Institute of Innovation is incorporated on 13 November 2019 as the business and enterprise arm of GLOFORD Uganda — headquartered in Lira City with a mandate to industrialize agriculture, deploy green capital, and build regional digital resilience.",
  },
  {
    date: "2019 – 2020",
    category: "Flagship Program",
    title: "Wealth From Waste · GLOFORD Green Innovation Finance",
    description:
      "Launch of the Wealth From Waste program under the GLOFORD Green Innovation Finance (GIF) banner — converting agricultural and organic waste into value and seeding waste-to-wealth micro-enterprises across Lango.",
  },
  {
    date: "2020 – 2021",
    category: "Capital Access",
    title: "Micro-Financing for SMEs & Farmers",
    description:
      "Revolving micro-funds, clean-energy credit lines, and financial-literacy mentorship reach early cohorts of smallholder farmers and youth-led SMEs — supporting ventures underserved by mainstream commercial banks.",
  },
  {
    date: "2021 – 2022",
    category: "Footprint",
    title: "Field Hub Network Expansion",
    description:
      "Operational innovation centers open in Gulu City and Soroti City, with a West Nile (Arua) field unit activated — connecting Lira headquarters into a multi-region delivery network.",
  },
  {
    date: "2022 – 2023",
    category: "Digital",
    title: "AI Business Development · IC4D Rollout",
    description:
      "Youth tech incubators, AI agronomy copilots with local-dialect voice interfaces, and cloud ERP for rural SMEs are deployed — training 4,800+ young developers and data workers through the IC4D framework.",
  },
  {
    date: "2023 – 2024",
    category: "Markets",
    title: "Agribusiness Trade & Investment Corridors",
    description:
      "AfCFTA compliance, contract-farming aggregation, and a commodity digital exchange link Lira and Gulu producers to Mombasa export corridors — securing 142 forward offtake contracts for verified cooperatives.",
  },
  {
    date: "2024",
    category: "Hospitality Venture",
    title: "Happy Haven Children's Park · Lira City",
    description:
      "GII's hospitality and recreation venture opens in Lira City — creating local jobs and diversifying the Institute's venture portfolio.",
  },
  {
    date: "2025",
    category: "Milestone",
    title: "$1M+ Impact Capital · 3,000+ Farmers",
    description:
      "Cumulative capital raised surpasses USD 1M and the enrolled smallholder network crosses 3,000 farmers; investor deal-rooms and diaspora co-investment syndicates are formalized and governed.",
  },
  {
    date: "2026",
    category: "Next Horizon",
    title: "Mbale Expansion · National Grid",
    description:
      "A forthcoming expansion hub in Mbale City extends the national grid, while the Kampala liaison desk deepens capital-market and investor links.",
  },
] as const;

export const happyHaven = {
  description:
    "Beyond agro-industry and finance, GLOFORD Institute of Innovation operates hospitality and recreation ventures — diversifying revenue and creating local employment. The flagship case study is Happy Haven Children's Park in Lira City.",
  summary: "A safe, joyful, green recreation space for Lira's families — where play, learning and community come together.",
  features: [
    {
      title: "Family Recreation",
      description: "Slides, climbing frames, trampolines and open lawns designed for joyful, active family days out.",
    },
    {
      title: "Eco-Green Spaces",
      description: "Acacia-shaded gardens and climate-smart landscaping woven into Lira's urban fabric.",
    },
    {
      title: "Events & Celebrations",
      description: "Birthday parties, school trips and community gatherings hosted in safe, managed venues.",
    },
    {
      title: "Community Wellbeing",
      description: "A social enterprise generating youth jobs and reinvesting surplus into GII's green mission.",
    },
  ],
  model:
    "Hospitality surpluses are recycled into GII's agro-industrialization and green financing programs — making recreation an engine for inclusive development.",
} as const;

export const operationalMetrics = [
  { value: "2019", label: "Incorporated 13 Nov" },
  { value: "3,000+", label: "Farmers & Youths" },
  { value: "$1M+", label: "Impact Capital Raised" },
  { value: "98%", label: "Program Success Rate" },
] as const;
