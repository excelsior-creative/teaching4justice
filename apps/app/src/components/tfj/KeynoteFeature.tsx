import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import type { Keynote } from "@/content/tfj/conference2026";

export const KeynoteFeature = ({ keynotes }: { keynotes: Keynote[] }) => {
  return (
    <Section>
      <Container>
        <SectionHeading subtitle="Featured Speakers">Keynote Presentations</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynotes.map((keynote, index) => (
            <Card key={index} className="h-full flex flex-col">
              <div className="mb-4 flex-shrink-0">
                <img
                  src={keynote.photoSrc}
                  alt={keynote.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-t4j-purple mb-2 font-heading">
                  {keynote.name}
                </h3>
                <p className="text-t4j-orange font-semibold mb-4">
                  {keynote.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {keynote.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
