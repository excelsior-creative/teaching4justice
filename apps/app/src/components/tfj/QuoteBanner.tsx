import React from "react";
import { Container } from "@/components/Container";
import { SectionReveal } from "@/components/SectionReveal";

export const QuoteBanner = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  return (
    <section className="py-20 bg-gradient-sunset text-white relative overflow-hidden animate-gradient-shift">
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionReveal>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading leading-relaxed mb-8 drop-shadow-sm">
              "{quote}"
            </blockquote>
          </SectionReveal>
          <SectionReveal delay={100}>
            <cite className="text-lg md:text-xl font-medium not-italic opacity-90 inline-block border-t-2 border-white/30 pt-4">
              — {author}
            </cite>
          </SectionReveal>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        />
      </Container>
    </section>
  );
};
