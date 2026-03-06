import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { Speaker } from "@/content/tfj/conference2026";

export const SpeakersGrid = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading subtitle="Meet Our Team">Conference Speakers</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <SectionReveal key={index} delay={index * 60}>
              <Card className="h-full flex flex-col items-center text-center p-4 group hover:scale-[1.02]">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 flex-shrink-0 shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
                  <img
                    src={speaker.photoSrc}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-t4j-purple mb-1 line-clamp-1">
                  {speaker.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{speaker.role}</p>
                {speaker.organization && (
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {speaker.organization}
                  </p>
                )}
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
