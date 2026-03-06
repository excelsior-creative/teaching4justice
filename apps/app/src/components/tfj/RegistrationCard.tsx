import React from "react";
import { Container } from "@/components/Container";
import { PillButton } from "./PillButton";
import { Section } from "./Section";
import { SectionReveal } from "@/components/SectionReveal";
import type { RegistrationInfo } from "@/content/tfj/conference2026";

export const RegistrationCard = ({ info }: { info: RegistrationInfo }) => {
  return (
    <Section>
      <Container>
        <SectionReveal>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-t4j-purple to-t4j-orange rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-t4j-purple/20 to-t4j-orange/20 animate-float-slow" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-center drop-shadow-sm">
                {info.title}
              </h2>
              <p className="text-lg opacity-90 mb-8 text-center">
                {info.description}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-button">
                <p className="text-xl font-bold mb-2">{info.slidingScale}</p>
                <p className="text-3xl font-bold">{info.priceRange}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-button">
                <h3 className="text-lg font-bold mb-4">Your Registration Includes:</h3>
                <ul className="space-y-2">
                  {info.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <PillButton href={info.link} variant="secondary" className="text-foreground">
                  {info.linkText}
                </PillButton>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
};
