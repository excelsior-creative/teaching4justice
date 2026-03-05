import React from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import Image from "next/image";
import type { GalleryItem } from "@/content/tfj/home";

export const GalleryGrid = ({ items }: { items: GalleryItem[] }) => {
  return (
    <Section>
      <Container>
        <SectionHeading subtitle="In Pictures">Our Community</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <SectionReveal key={index} delay={index * 80}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-card group cursor-pointer">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-t4j-purple/80 to-t4j-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <p className="text-white font-medium text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
