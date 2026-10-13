import type { LucideIcon } from "lucide-react";
import { Lightbulb, ShieldCheck, Users, Award, Leaf, Rocket } from "lucide-react";

export interface CoreValue {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Editable organizational values — placeholder descriptions.
export const coreValues: CoreValue[] = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Placeholder description — we embrace creative, practical solutions to real challenges.",
  },
  {
    id: "integrity",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Placeholder description — we act with honesty and accountability in everything we do.",
  },
  {
    id: "inclusion",
    icon: Users,
    title: "Inclusion",
    description:
      "Placeholder description — we work to make opportunity accessible to all.",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description:
      "Placeholder description — we strive for high standards across our programs and services.",
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability",
    description:
      "Placeholder description — we support solutions built for long-term impact.",
  },
  {
    id: "empowerment",
    icon: Rocket,
    title: "Empowerment",
    description:
      "Placeholder description — we equip people and businesses with tools to succeed.",
  },
];
