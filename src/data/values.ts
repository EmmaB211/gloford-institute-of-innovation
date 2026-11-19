import type { LucideIcon } from "lucide-react";
import { Lightbulb, ShieldCheck, Users, Award, Leaf, Rocket } from "lucide-react";

export interface CoreValue {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Operating principles that guide GII's business solutions.
export const coreValues: CoreValue[] = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Apply practical ideas and technology to solve operational and market challenges.",
  },
  {
    id: "integrity",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Communicate clearly, handle information responsibly and follow through on commitments.",
  },
  {
    id: "inclusion",
    icon: Users,
    title: "Inclusion",
    description:
      "Build business relationships that value the contribution of farmers, suppliers, employees and customers.",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description:
      "Set clear expectations and focus on reliable execution and measurable business progress.",
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability",
    description:
      "Support commercially viable approaches that can perform over the long term.",
  },
  {
    id: "empowerment",
    icon: Rocket,
    title: "Enterprise Growth",
    description:
      "Strengthen the capabilities, capital access and connections businesses need to grow.",
  },
];
