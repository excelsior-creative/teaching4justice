"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Conference 2026", path: "/conference/2026" },
];

export const SiteNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-subtle shadow-nav">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center h-16 md:h-20 hover:opacity-80 transition-opacity"
            aria-label="Teaching for Justice"
          >
            <Image
              src="/tfj-logo-orange-500x374.png"
              alt="Teaching for Justice"
              width={500}
              height={374}
              className="h-full w-auto pt-2.5 pb-2.5"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-medium text-foreground hover:text-t4j-orange transition-colors link-underline"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/conference/2026#registration"
              className="px-6 py-2.5 rounded-full font-bold text-white bg-gradient-sunset shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden group"
            >
              <span className="relative z-10">Register</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-t4j-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-subtle overflow-hidden"
            >
              <div className="py-4 bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <m.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-foreground hover:text-t4j-orange transition-colors link-underline block py-2"
                      >
                        {item.name}
                      </Link>
                    </m.div>
                  ))}
                  <m.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Link
                      href="/conference/2026#registration"
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-3 rounded-full font-bold text-white bg-gradient-sunset shadow-button text-center block transition-all duration-200"
                    >
                      Register
                    </Link>
                  </m.div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
