import React from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import type { GuidingQuestion } from "@/content/tfj/conference2026";

export const GuidingQuestions = ({ questions }: { questions: GuidingQuestion[] }) => {
  return (
    <Section variant="gradient">
      <Container>
        <SectionHeading subtitle="Reflect Together">Guiding Questions</SectionHeading>
        <div className="max-w-4xl mx-auto space-y-6">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-2xl p-6 shadow-soft-lg backdrop-blur-sm"
            >
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                {q.question}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
