import React from "react";
import { Container } from "@/components/Container";
import { PillButton } from "./PillButton";
import { Section } from "./Section";
import type { FilmScreening } from "@/content/tfj/conference2026";

export const FilmScreeningCallout = ({ film }: { film: FilmScreening }) => {
  return (
    <Section variant="gradient">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl p-8 md:p-12 shadow-soft-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-grow">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-bold text-white bg-t4j-purple mb-4">
                Special Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-t4j-purple mb-4 font-heading">
                {film.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {film.day} at {film.time}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                {film.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <PillButton variant="primary">
                Learn More
              </PillButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
