import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import {
  FacebookIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,
} from "./SocialIcons";
import { useSiteContent } from "../content/SiteContentContext";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Loans", path: "/services" },
  { label: "Programs", path: "/programs" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const focusLinks = [
  { label: "Agro-industrialization", path: "/#agro-industrialization" },
  { label: "Microbusiness Loans", path: "/services#loan-products" },
  { label: "Wealth from Waste Financing", path: "/services#loan-products" },
  { label: "AI Business Development and IC4D", path: "/ict" },
  { label: "Agribusiness, Trade and Investment", path: "/agribusiness" },
  { label: "Investor Management and Networking", path: "/#deal-network" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { label: "X", icon: XIcon, href: "https://x.com/glofordinnovate" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
  { label: "TikTok", icon: TikTokIcon, href: "#" },
];

export default function Footer() {
  const { settings } = useSiteContent();

  return (
    <footer className="bg-neutral-charcoal text-white/80">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-heading text-lg font-bold text-white">
            <img src={logo} alt="GLOFORD Institute of Innovation logo" className="h-10 w-10" />
            {settings.siteName}
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            GLOFORD Institute of Innovation is the business solutions arm of Global Forum for Development (GLOFORD Uganda), helping enterprises grow through finance, agribusiness, technology and market connections.
          </p>
          <p className="mt-3 text-sm font-semibold text-accent-300">&ldquo;{settings.tagline}&rdquo;</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary-600"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Our Focus
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {focusLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="transition hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{settings.contactPhone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{settings.contactEmail}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>Investor relations: invest@glofordinnovation.org</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{settings.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; 2026 GLOFORD Institute of Innovation. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
