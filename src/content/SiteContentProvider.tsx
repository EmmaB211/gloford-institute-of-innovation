import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { defaultSiteContent, mergeSiteContent } from "./siteContent";
import type { SiteContent } from "./siteContent";
import { supabase } from "../lib/supabase";
import { SiteContentContext } from "./SiteContentContext";

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(defaultSiteContent);

  useEffect(() => {
    if (!supabase) return;

    let active = true;
    void supabase
      .from("site_content")
      .select("content")
      .eq("id", "main")
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          console.error("Could not load CMS content:", error.message);
          return;
        }
        if (active && data?.content) {
          setContent(mergeSiteContent(data.content as Partial<SiteContent>));
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => content, [content]);
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}
