export interface Program {
  id: string;
  title: string;
  description: string;
  focusArea:
    | "Business Development"
    | "Financial Inclusion"
    | "Agribusiness"
    | "Agricultural Value Chains"
    | "ICT & Digital Skills"
    | "Innovation"
    | "Entrepreneurship";
  status: "Ongoing" | "Upcoming" | "Planned";
  image: string;
}

// Program data sourced from official GII materials.
export const programs: Program[] = [
  {
    id: "commercial-farming-rural-development",
    title: "Commercial Farming for Rural Development",
    description:
      "A strategic GII project promoting commercial, market-oriented farming to support rural development.",
    focusArea: "Agribusiness",
    status: "Ongoing",
    image: "/images/programs/commercial-farming.svg",
  },
  {
    id: "agrivision-northern-uganda",
    title: "Agrivision Northern Uganda",
    description:
      "An initiative advancing sustainable agriculture and agribusiness opportunity across Northern Uganda.",
    focusArea: "Agricultural Value Chains",
    status: "Ongoing",
    image: "/images/programs/agrivision.svg",
  },
  {
    id: "nuelink",
    title: "NUeLINK",
    description:
      "An initiative connecting communities in Northern Uganda to economic and technology-driven opportunities.",
    focusArea: "Innovation",
    status: "Ongoing",
    image: "/images/programs/nuelink.svg",
  },
  {
    id: "wealth-from-waste",
    title: "Wealth From Waste",
    description:
      "A partnership with Woord En Daad and Wilde Ganzen promoting green economy solutions that turn waste into wealth.",
    focusArea: "Innovation",
    status: "Ongoing",
    image: "/images/programs/wealth-from-waste.svg",
  },
  {
    id: "pro-poor-financial-inclusion",
    title: "Pro-Poor Financial Inclusion",
    description:
      "An initiative expanding access to financial services for underserved individuals and communities.",
    focusArea: "Financial Inclusion",
    status: "Ongoing",
    image: "/images/programs/pro-poor-financial-inclusion.svg",
  },
  {
    id: "young-african-works",
    title: "Young African Works",
    description:
      "A partner initiative supporting youth employment and entrepreneurship opportunities.",
    focusArea: "Entrepreneurship",
    status: "Ongoing",
    image: "/images/programs/young-african-works.svg",
  },
  {
    id: "work-readiness-program",
    title: "Work Readiness Program",
    description:
      "A program supported by the Private Sector Foundation, preparing individuals with the skills needed for employment.",
    focusArea: "Business Development",
    status: "Ongoing",
    image: "/images/programs/work-readiness.svg",
  },
];

export const focusAreas = [
  "All",
  "Business Development",
  "Financial Inclusion",
  "Agribusiness",
  "Agricultural Value Chains",
  "ICT & Digital Skills",
  "Innovation",
  "Entrepreneurship",
] as const;
