export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "Business"
    | "Agriculture"
    | "Innovation"
    | "ICT"
    | "Training"
    | "Events"
    | "Community";
  date: string;
  image: string;
}

// Placeholder news/insight articles — replace with real content once available.
export const articles: Article[] = [
  {
    id: "article-1",
    slug: "unlocking-business-potential",
    title: "Unlocking Business Potential Through Access to Financing",
    excerpt:
      "Placeholder excerpt exploring how access to appropriate financing can help businesses grow sustainably.",
    content:
      "Placeholder article content. Replace with real editorial content once available. This section can discuss trends in business financing, entrepreneurship, and enterprise growth.",
    category: "Business",
    date: "2026-01-15",
    image: "/images/news/business-financing.svg",
  },
  {
    id: "article-2",
    slug: "from-farm-to-market",
    title: "From Farm to Market: Strengthening Agricultural Value Chains",
    excerpt:
      "Placeholder excerpt discussing the importance of connecting farmers to markets and value addition opportunities.",
    content:
      "Placeholder article content. Replace with real editorial content once available. This section can explore agribusiness value chains and market access strategies.",
    category: "Agriculture",
    date: "2026-02-02",
    image: "/images/news/farm-to-market.svg",
  },
  {
    id: "article-3",
    slug: "building-digital-skills",
    title: "Building Digital Skills for the Next Generation",
    excerpt:
      "Placeholder excerpt on how practical ICT training equips young people with relevant digital skills.",
    content:
      "Placeholder article content. Replace with real editorial content once available. This section can highlight ICT boot camps and digital skills development.",
    category: "ICT",
    date: "2026-02-20",
    image: "/images/news/digital-skills.svg",
  },
  {
    id: "article-4",
    slug: "innovation-and-opportunity",
    title: "Innovation and Opportunity: Building an Ecosystem",
    excerpt:
      "Placeholder excerpt discussing how innovation initiatives can create sustainable opportunity.",
    content:
      "Placeholder article content. Replace with real editorial content once available. This section can discuss innovation strategy and technology adoption.",
    category: "Innovation",
    date: "2026-03-05",
    image: "/images/news/innovation.svg",
  },
];
