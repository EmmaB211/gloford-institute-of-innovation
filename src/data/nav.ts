export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Loans", path: "/services" },
  { label: "Programs", path: "/programs" },
  { label: "Agribusiness", path: "/agribusiness" },
  { label: "Business Technology", path: "/ict" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];
