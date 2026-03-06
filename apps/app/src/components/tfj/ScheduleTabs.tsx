"use client";

import React, { useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import type { Schedule } from "@/content/tfj/conference2026";

export const ScheduleTabs = ({ schedule }: { schedule: Schedule[] }) => {
  const [activeDay, setActiveDay] = useState(schedule[0].day);

  const activeSchedule = schedule.find((s) => s.day === activeDay);

  return (
    <Section>
      <Container>
        <SectionHeading subtitle="Conference Agenda">Full Schedule</SectionHeading>

        <div className="flex gap-4 mb-8 justify-center">
          {schedule.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeDay === day.day
                  ? "bg-gradient-sunset text-white scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {activeSchedule && (
          <div className="max-w-4xl mx-auto space-y-4">
            {activeSchedule.sessions.map((session, index) => (
              <Card key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <p className="font-bold text-t4j-purple text-sm">
                    {session.time}
                  </p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {session.title}
                  </h3>
                  {session.presenters.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">With:</span> {session.presenters.join(", ")}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-t4j-blue text-foreground font-medium">
                      {session.format}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-t4j-rose text-foreground font-medium">
                      {session.location}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};
