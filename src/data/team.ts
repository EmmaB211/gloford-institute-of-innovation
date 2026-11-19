export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

// Leadership profiles currently available for publication.
export const team: TeamMember[] = [
  {
    id: "morris-chris-ongom",
    name: "Dr. Morris Chris Ongom",
    position: "Founder & Chief Visionary Officer",
    bio: "Dr. Ongom anchors GII's strategic direction and the “Thinking Outside The Box” philosophy — architecting the Institute's pivot toward an agro-industrial, green-finance, and AI-driven enterprise engine across Uganda and East Africa.",
    photo: "/images/team/morris-chris-ongom.svg",
  },
  {
    id: "susan-ayer-ongom",
    name: "Mrs. Susan Ayer Ongom",
    position: "Co-Founder & Chief Operations Officer",
    bio: "Mrs. Ongom drives day-to-day operations, field execution, and program delivery — ensuring that GII's agro-industrial, hospitality, and enterprise ventures translate strategy into measurable results across Lira and beyond.",
    photo: "/images/team/susan-ayer-ongom.svg",
  },
  {
    id: "member-2",
    name: "Team Member Name",
    position: "Programs Lead (Placeholder)",
    bio: "Editable placeholder biography. Replace with real profile information once supplied.",
    photo: "/images/team/placeholder-2.svg",
  },
  {
    id: "member-3",
    name: "Team Member Name",
    position: "Agribusiness Lead (Placeholder)",
    bio: "Editable placeholder biography. Replace with real profile information once supplied.",
    photo: "/images/team/placeholder-3.svg",
  },
  {
    id: "member-4",
    name: "Team Member Name",
    position: "ICT & Innovation Lead (Placeholder)",
    bio: "Editable placeholder biography. Replace with real profile information once supplied.",
    photo: "/images/team/placeholder-4.svg",
  },
];
