import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { useSiteContent } from "../content/SiteContentContext";

export default function Hero() {
  const { hero } = useSiteContent();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % hero.slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [hero.slides.length]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + hero.slides.length) % hero.slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % hero.slides.length);
  };

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
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to={hero.primaryButtonPath}
              className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-neutral-charcoal transition hover:bg-accent-400"
            >
              {hero.primaryButtonLabel}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to={hero.secondaryButtonPath}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              {hero.secondaryButtonLabel}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-950 shadow-2xl"
            aria-roledescription="carousel"
            aria-label="GLOFORD areas of work"
          >
            {hero.slides.map((slide, index) => (
              <motion.img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                aria-hidden={index !== activeSlide}
                initial={false}
                animate={{ opacity: index === activeSlide ? 1 : 0, scale: index === activeSlide ? 1 : 1.04 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/75 via-transparent to-transparent" />
            <p className="absolute bottom-16 left-5 text-lg font-semibold text-white sm:bottom-20 sm:left-7 sm:text-xl">
              {hero.slides[activeSlide]?.label}
            </p>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 sm:left-7">
              {hero.slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-current={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-3 right-4 flex gap-2 sm:bottom-5 sm:right-6">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={showPreviousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-charcoal transition hover:bg-white"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={showNextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-charcoal transition hover:bg-white"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
