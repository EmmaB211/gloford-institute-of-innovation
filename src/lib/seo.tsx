import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

const SITE_NAME = "GLOFORD Institute of Innovation";

// Lightweight SEO helper — sets document title and meta description without extra dependencies.
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
  }, [title, description]);

  return null;
}
