import React from "react";
import { Container } from "@/components/Container";
import type { Partner } from "@/content/tfj/conference2026";

export const PartnersBar = ({ partners }: { partners: Partner[] }) => {
  return (
    <div className="bg-muted/30 py-12 border-t border-border">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-6 tracking-wide uppercase">
            In Partnership With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-lg md:text-xl font-bold text-t4j-purple font-heading"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
