export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

// Real leadership confirmed from official GII materials; remaining roles are placeholders
// until further profiles are supplied.
export const team: TeamMember[] = [
  {
    id: "morris-chris-ongom",
    name: "Dr. Morris Chris Ongom",
    position: "Chief Visionary Officer, GLOFORD Institute of Innovation",
    bio: "Leads GII's mission to drive transformative innovations across Uganda and Africa through financial inclusion, agribusiness, agro-industrialization and ICT4D for wealth creation.",
    photo: "/images/team/morris-chris-ongom.svg",
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
