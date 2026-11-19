import { createContext, useContext } from "react";
import { defaultSiteContent } from "./siteContent";
import type { SiteContent } from "./siteContent";

export const SiteContentContext = createContext<SiteContent>(defaultSiteContent);

export function useSiteContent() {
  return useContext(SiteContentContext);
}
