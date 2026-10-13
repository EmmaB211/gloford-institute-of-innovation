import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top on route change, except when navigating to an in-page hash anchor. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
