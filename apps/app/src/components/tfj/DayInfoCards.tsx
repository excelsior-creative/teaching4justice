import React from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { DayInfo } from "@/content/tfj/conference2026";

export const DayInfoCards = ({ days }: { days: DayInfo[] }) => {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading subtitle="Conference Schedule">Event Details</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {days.map((day, index) => (
            <SectionReveal key={index} delay={index * 100}>
              <Card className="h-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-t4j-orange to-t4j-pink" />
                <div className="pl-4">
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-sunset mb-4 shadow-button">
                    {day.day}
                  </div>
                  <p className="text-lg font-semibold text-t4j-purple mb-2">
                    {day.date}
                  </p>
                  <p className="text-muted-foreground mb-3">{day.time}</p>
                  <p className="text-base font-medium">{day.focus}</p>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
