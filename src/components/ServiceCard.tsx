import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../data/services";
import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <AnimatedSection
      delay={index * 0.08}
      className="group flex h-full flex-col rounded-2xl border border-neutral-light bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg text-neutral-charcoal">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-gray">
        {service.description}
      </p>
      <Link
        to={service.ctaPath}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
      >
        {service.ctaLabel}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </AnimatedSection>
  );
}
