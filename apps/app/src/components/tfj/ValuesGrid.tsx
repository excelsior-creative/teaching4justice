import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { Value } from "@/content/tfj/home";

export const ValuesGrid = ({ values }: { values: Value[] }) => {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading subtitle="Our Core Values">What We Stand For</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <SectionReveal key={index} delay={index * 80}>
              <Card hover={true} className="h-full">
                <h3 className="text-xl font-bold text-t4j-purple mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
