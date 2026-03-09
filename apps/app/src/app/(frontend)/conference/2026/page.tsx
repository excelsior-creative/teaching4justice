import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/tfj/SectionHeading";
import { PillButton } from "@/components/tfj/PillButton";
import { DayInfoCards } from "@/components/tfj/DayInfoCards";
import { KeynoteFeature } from "@/components/tfj/KeynoteFeature";
import { GoalsGrid } from "@/components/tfj/GoalsGrid";
import { GuidingQuestions } from "@/components/tfj/GuidingQuestions";
import { ScheduleTabs } from "@/components/tfj/ScheduleTabs";
import { SpeakersGrid } from "@/components/tfj/SpeakersGrid";
import { FilmScreeningCallout } from "@/components/tfj/FilmScreeningCallout";
import { RegistrationCard } from "@/components/tfj/RegistrationCard";
import { PartnersBar } from "@/components/tfj/PartnersBar";
import { Section } from "@/components/tfj/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { conference2026Content } from "@/content/tfj/conference2026";

export const metadata: Metadata = {
  title: "Communities of Care 2026",
  description: "Join Teaching for Justice for our 2026 conference focused on building and sustaining communities of care in education. March 13-14, 2026 at CSUF.",
};

export const dynamic = "force-static";

export default function Conference2026() {
  const {
    hero,
    days,
    keynotes,
    goals,
    guidingQuestions,
    schedule,
    speakers,
    filmScreening,
    registration,
    contact,
    partners,
  } = conference2026Content;

  return (
    <div className="flex flex-col">
      <Section className="bg-gradient-conference-hero text-white relative overflow-hidden animate-gradient-shift">
        <Container className="relative z-10 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0}>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-white/20 mb-6 backdrop-blur-sm shadow-button">
                Conference 2026
              </div>
            </SectionReveal>
            <SectionReveal delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight drop-shadow-sm">
                {hero.theme}
              </h1>
            </SectionReveal>
            <SectionReveal delay={200}>
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                {hero.date}
              </p>
            </SectionReveal>
            <SectionReveal delay={300}>
              <p className="text-lg mb-4 opacity-90">{hero.location}</p>
            </SectionReveal>
            <SectionReveal delay={400}>
              <p className="text-lg mb-8 opacity-90">{hero.pricing}</p>
            </SectionReveal>
            <SectionReveal delay={500}>
              <PillButton href={hero.ctaLink} variant="primary" className="text-lg px-12 py-4">
                {hero.ctaText}
              </PillButton>
            </SectionReveal>
          </div>
        </Container>
        <div
          className="absolute inset-0 opacity-5 animate-float-slow"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        />
      </Section>

      <DayInfoCards days={days} />

      <KeynoteFeature keynotes={keynotes} />

      <GoalsGrid goals={goals} />

      <GuidingQuestions questions={guidingQuestions} />

      <ScheduleTabs schedule={schedule} />

      <SpeakersGrid speakers={speakers} />

      <FilmScreeningCallout film={filmScreening} />

      <div id="registration">
        <RegistrationCard info={registration} />
      </div>

      <Section variant="grain" divider="none">
        <Container>
          <SectionHeading subtitle="Get in Touch">Contact Us</SectionHeading>
          <div className="max-w-2xl mx-auto text-center">
            <SectionReveal>
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about the conference? We'd love to hear from you.
              </p>
            </SectionReveal>
            <SectionReveal delay={100}>
              <p className="text-xl font-semibold text-t4j-purple mb-2">
                {contact.name}
              </p>
            </SectionReveal>
            <SectionReveal delay={200}>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg text-t4j-orange link-underline"
              >
                {contact.email}
              </a>
            </SectionReveal>
          </div>
        </Container>
      </Section>

      <PartnersBar partners={partners} />
    </div>
  );
}
