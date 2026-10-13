import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

/** Fades and slides content up into view as it enters the viewport. */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const motionProps = {
    className,
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };

  return as === "section" ? (
    <motion.section {...motionProps}>{children}</motion.section>
  ) : (
    <motion.div {...motionProps}>{children}</motion.div>
  );
}
