export interface TrainingCategory {
  id: string;
  title: string;
  description: string;
}

// Structured as editable program categories — not confirmed unless supplied.
export const trainingCategories: TrainingCategory[] = [
  { id: "web-development", title: "Web Development", description: "Placeholder — practical web development skills." },
  { id: "digital-skills", title: "Digital Skills", description: "Placeholder — foundational digital literacy training." },
  { id: "computer-applications", title: "Computer Applications", description: "Placeholder — practical computer application skills." },
  { id: "digital-entrepreneurship", title: "Digital Entrepreneurship", description: "Placeholder — using digital tools to build a business." },
  { id: "cybersecurity", title: "Cybersecurity", description: "Placeholder — introductory cybersecurity awareness." },
  { id: "networking", title: "Networking", description: "Placeholder — computer networking fundamentals." },
  { id: "graphic-design", title: "Graphic Design", description: "Placeholder — practical design and visual communication skills." },
  { id: "ict-innovation", title: "ICT Innovation", description: "Placeholder — exploring emerging technology and innovation." },
];
