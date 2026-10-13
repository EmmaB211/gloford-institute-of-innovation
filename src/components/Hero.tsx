import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sprout, Cpu, Banknote } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300">
            Finance · Agribusiness · Technology
          </span>
          <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Businesses. Transforming Agriculture. Driving Innovation.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            GLOFORD Institute of Innovation works with entrepreneurs, businesses,
            farmers and communities to create opportunities through financing,
            agribusiness, agricultural value chains, ICT and practical skills
            development.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-neutral-charcoal transition hover:bg-accent-400"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderImage
              label="Entrepreneurs & Business"
              icon={Banknote}
              tone="accent"
              className="col-span-2 h-48 rounded-2xl sm:h-56"
            />
            <PlaceholderImage
              label="Agriculture & Farming"
              icon={Sprout}
              tone="primary"
              className="h-40 rounded-2xl sm:h-48"
            />
            <PlaceholderImage
              label="ICT & Innovation"
              icon={Cpu}
              tone="secondary"
              className="h-40 rounded-2xl sm:h-48"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
