import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { Testimonial } from "@/content/tfj/home";

export const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <Section variant="gradient">
      <Container>
        <SectionHeading subtitle="Voices from Our Community">
          What Educators Say
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={index} delay={index * 100}>
              <Card variant="gradient-border">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-t4j-orange opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-t4j-purple">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  )}
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
