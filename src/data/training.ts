export interface TrainingCategory {
  id: string;
  title: string;
  description: string;
}

// Practical digital training categories for business teams and professionals.
export const trainingCategories: TrainingCategory[] = [
  { id: "web-development", title: "Web Development", description: "Build and maintain websites and digital services for business use." },
  { id: "digital-skills", title: "Digital Workplace Skills", description: "Use common digital tools to communicate, organize work and manage information." },
  { id: "computer-applications", title: "Business Applications", description: "Apply office and productivity software to everyday business tasks." },
  { id: "digital-entrepreneurship", title: "Digital Business", description: "Use online platforms and tools to reach customers and operate a business." },
  { id: "cybersecurity", title: "Cybersecurity", description: "Understand basic practices for protecting business accounts, devices and data." },
  { id: "networking", title: "Networks & Connectivity", description: "Understand the foundations of reliable business connectivity and networks." },
  { id: "graphic-design", title: "Graphic Design", description: "Create clear visual communication and marketing assets for products and services." },
  { id: "ict-innovation", title: "Technology Innovation", description: "Explore practical technology ideas that address business and customer needs." },
];
