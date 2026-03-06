import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Instagram, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Conference 2026", path: "/conference/2026" },
];

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-subtle relative">
      <div className="divider-gradient-reverse absolute top-0 left-0 right-0" />
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <Link
                href="/"
                className="mb-4 inline-block h-16 w-auto hover:opacity-80 transition-opacity"
                aria-label="Teaching for Justice"
              >
                <Image
                  src="/tfj-logo-orange-500x374.png"
                  alt="Teaching for Justice"
                  width={500}
                  height={374}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm">
                Empowering educators to build a more equitable world through AAPI-centered
                K-12 education.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                Navigate
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm text-muted-foreground hover:text-t4j-orange transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:tfj@edutoempower.org"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-t4j-orange transition-colors link-underline"
                >
                  <Mail className="w-4 h-4" />
                  tfj@edutoempower.org
                </a>
                <a
                  href="https://instagram.com/teaching_4_justice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-t4j-orange transition-colors link-underline"
                >
                  <Instagram className="w-4 h-4" />
                  @teaching_4_justice
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Teaching for Justice. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Site by Excelsior Creative
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
