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

// Business-focused editorial guides.
export const articles: Article[] = [
  {
    id: "article-1",
    slug: "unlocking-business-potential",
    title: "Unlocking Business Potential Through Access to Financing",
    excerpt:
      "A practical overview of how to prepare a business financing request and connect capital to a clear growth plan.",
    content:
      "Start with a defined use for the funds: working capital, equipment, inventory, processing capacity or expansion. Build a realistic budget and cash-flow forecast, organize business registration and financial records, and explain how the investment will support revenue and repayment. Financing options and eligibility vary; discuss your specific business needs with a qualified finance provider.",
    category: "Business",
    date: "2026-01-15",
    image: "/images/news/business-financing.svg",
  },
  {
    id: "article-2",
    slug: "from-farm-to-market",
    title: "From Farm to Market: Strengthening Agricultural Value Chains",
    excerpt:
      "How consistent quality, aggregation, processing and buyer requirements shape stronger agricultural supply chains.",
    content:
      "Market-ready agricultural supply depends on more than production. Businesses can plan around buyer specifications, aggregate consistent volumes, manage post-harvest handling and evaluate whether processing or improved packaging adds commercial value. Clear communication about quality, quantity, timing and delivery helps buyers and suppliers build dependable trading relationships.",
    category: "Agriculture",
    date: "2026-02-02",
    image: "/images/news/farm-to-market.svg",
  },
  {
    id: "article-3",
    slug: "building-digital-skills",
    title: "Building Digital Skills for the Next Generation",
    excerpt:
      "A business-focused look at digital capabilities that can improve day-to-day operations and customer service.",
    content:
      "Digital tools are most useful when they address a specific operating need. Businesses can begin by improving record-keeping, inventory visibility, customer communication or financial reporting. Select tools that match existing workflows, train staff and review whether the change saves time, reduces errors or improves service before expanding its use.",
    category: "ICT",
    date: "2026-02-20",
    image: "/images/news/digital-skills.svg",
  },
  {
    id: "article-4",
    slug: "innovation-and-opportunity",
    title: "Innovation and Opportunity: Building an Ecosystem",
    excerpt:
      "A simple framework for testing new products, processes and technology before committing to a full rollout.",
    content:
      "A sound innovation process starts with a clearly defined customer or operating problem. Develop a small test, identify the resources and risks involved, and agree on what success would look like before implementation. Use feedback and business evidence to refine the solution, then scale only when it demonstrates practical value.",
    category: "Innovation",
    date: "2026-03-05",
    image: "/images/news/innovation.svg",
  },
];
