import React from "react";
import { Providers } from "@/components/Providers";
import { SiteNav } from "@/components/tfj/SiteNav";
import { SiteFooter } from "@/components/tfj/SiteFooter";

/**
 * Frontend layout.
 * Wraps all frontend pages with TFJ SiteNav and SiteFooter.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col" data-theme="frontend">
      <Providers>
        <SiteNav />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </Providers>
    </div>
  );
}
