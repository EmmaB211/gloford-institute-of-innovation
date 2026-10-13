import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/nav";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { cn } from "../lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(16);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-neutral-light bg-white/95 py-2 shadow-sm backdrop-blur"
          : "border-transparent bg-white py-4",
      )}
    >
      <nav className="container-page flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-primary-800">
          <img src={logo} alt="GLOFORD Institute of Innovation logo" className="h-10 w-10" />
          <span className="hidden sm:inline">GLOFORD Institute<span className="text-accent-600"> of Innovation</span></span>
          <span className="sm:hidden">GII</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-800"
                    : "text-neutral-charcoal/80 hover:bg-neutral-light hover:text-primary-800",
                )
              }
              end={link.path === "/"}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-neutral-charcoal transition hover:bg-accent-400 lg:inline-block"
          >
            Talk to Us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-charcoal lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 text-sm font-medium",
                      isActive
                        ? "bg-primary-50 text-primary-800"
                        : "text-neutral-charcoal/80 hover:bg-neutral-light",
                    )
                  }
                  end={link.path === "/"}
                >
                  {link.label}
                </RouterNavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-neutral-charcoal"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
