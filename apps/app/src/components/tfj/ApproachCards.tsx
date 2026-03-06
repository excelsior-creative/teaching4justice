import React from "react";
import {
  RefreshCw,
  BookOpen,
  Lightbulb,
  Users,
  Heart,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { ApproachCard } from "@/content/tfj/home";

const iconMap: Record<string, LucideIcon> = {
  "Restorative Circles": RefreshCw,
  "Culturally Responsive Teaching": BookOpen,
  "Critical Pedagogy": Lightbulb,
  "Community-Based Learning": Users,
  "Social-Emotional Learning": Heart,
  "Anti-Bias Education": Shield,
};

export const ApproachCards = ({ cards }: { cards: ApproachCard[] }) => {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading subtitle="How We Work">Our Approach</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.title] || Sparkles;
            return (
              <SectionReveal key={index} delay={index * 100}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 shadow-button">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-t4j-purple mb-3 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
