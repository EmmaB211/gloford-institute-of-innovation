export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

// Business scale indicators currently displayed on the homepage.
export const impactStats: ImpactStat[] = [
  { id: "farmers", label: "Farmers in the Business Network", value: 3000, suffix: "+" },
  { id: "capital", label: "Capital Mobilized", value: 1, suffix: "M+" },
  { id: "survival", label: "Venture Survival Rate", value: 91, suffix: "%" },
];

export interface ImpactStory {
  id: string;
  category: string;
  challenge: string;
  intervention: string;
  change: string;
}

// Placeholder impact narratives — replace with real beneficiary stories once available.
export const impactStories: ImpactStory[] = [
  {
    id: "impact-business",
    category: "Business",
    challenge: "A small business struggled to access resources needed to grow.",
    intervention: "The entrepreneur received financing and business development support.",
    change: "The business expanded its operations and created new opportunities.",
  },
  {
    id: "impact-agriculture",
    category: "Agriculture",
    challenge: "A farmer produced quality crops but struggled to reach reliable markets.",
    intervention: "The farmer was connected to market access and value addition support.",
    change: "The farmer grew a more resilient, market-oriented enterprise.",
  },
  {
    id: "impact-ict",
    category: "ICT & Youth",
    challenge: "A young person wanted to participate in the digital economy but lacked practical skills.",
    intervention: "The individual joined an ICT training and skills development program.",
    change: "The learner gained practical digital skills to pursue new opportunities.",
  },
];
