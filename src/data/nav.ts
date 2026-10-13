export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "What We Do", path: "/services" },
  { label: "Programs", path: "/programs" },
  { label: "Agribusiness", path: "/agribusiness" },
  { label: "ICT & Innovation", path: "/ict" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];
