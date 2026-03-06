import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { Goal } from "@/content/tfj/conference2026";

export const GoalsGrid = ({ goals }: { goals: Goal[] }) => {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading subtitle="Conference Objectives">What You'll Experience</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <SectionReveal key={index} delay={index * 80}>
              <Card className="h-full">
                <div className="w-10 h-10 rounded-full bg-gradient-sunset text-white flex items-center justify-center font-bold mb-4 shadow-button">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-t4j-purple mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.description}
                </p>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
