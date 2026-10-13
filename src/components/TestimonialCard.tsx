import { Quote, User } from "lucide-react";
import type { Testimonial } from "../data/testimonials";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedSection from "./AnimatedSection";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <AnimatedSection
      delay={index * 0.08}
      className="flex h-full flex-col rounded-2xl border border-neutral-light bg-white p-7 shadow-sm"
    >
      <Quote className="h-8 w-8 text-accent-500" aria-hidden="true" />
      <p className="mt-4 flex-1 text-sm italic leading-relaxed text-neutral-gray">
        “{testimonial.quote}”
      </p>
      <p className="mt-4 text-xs leading-relaxed text-neutral-gray">
        {testimonial.story}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <PlaceholderImage
          label={testimonial.name}
          icon={User}
          tone="secondary"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-charcoal">
            {testimonial.name}
          </p>
          <p className="text-xs text-neutral-gray">
            {testimonial.occupation} · {testimonial.location}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
