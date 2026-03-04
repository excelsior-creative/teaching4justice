import React from "react";
import { Providers } from "@/components/Providers";

/**
 * Frontend layout.
 * The homepage is a coming-soon full-screen page so we intentionally
 * omit the Navbar/Footer wrappers here. Inner pages can add them back
 * as needed via their own layouts.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col" data-theme="frontend">
      <Providers>
        <main className="flex-grow">{children}</main>
      </Providers>
    </div>
  );
}
