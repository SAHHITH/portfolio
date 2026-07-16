"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export const FooterWrapper = () => {
  const pathname = usePathname();
  
  // Do not render Footer on individual project pages
  if (pathname?.startsWith("/projects/") && pathname !== "/projects/") {
    return null;
  }
  
  return <Footer />;
};
