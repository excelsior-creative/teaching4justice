import React from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { Card } from "./Card";
import { SectionReveal } from "@/components/SectionReveal";
import type { TimelineEntry } from "@/content/tfj/home";

export const TimelineVertical = ({ entries }: { entries: TimelineEntry[] }) => {
  return (
    <Section>
      <Container>
        <SectionHeading subtitle="Our Journey">Our Story So Far</SectionHeading>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-t4j-orange via-t4j-pink to-t4j-purple shadow-sm" />

            {entries.map((entry, index) => (
              <SectionReveal key={index} delay={index * 150}>
                <div
                  className={`relative pl-12 md:pl-0 md:pr-0 mb-12 md:flex md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-t4j-orange border-4 border-white -ml-4 md:-ml-4 shadow-card z-10 animate-pulse-soft" />

                  <div className="md:w-5/12 mb-4 md:mb-0">
                    <Card>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-sunset mb-2 shadow-button">
                        {entry.year}
                      </span>
                      <h3 className="text-xl font-bold text-t4j-purple mb-2 font-heading">
                        {entry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {entry.description}
                      </p>
                    </Card>
                  </div>

                  <div className="md:w-1/12 hidden md:block" />

                  <div className="md:w-5/12 hidden md:block" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
