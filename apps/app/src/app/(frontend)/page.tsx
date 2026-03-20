import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/tfj/SectionHeading";
import { PillButton } from "@/components/tfj/PillButton";
import { QuoteBanner } from "@/components/tfj/QuoteBanner";
import { ValuesGrid } from "@/components/tfj/ValuesGrid";
import { TimelineVertical } from "@/components/tfj/TimelineVertical";
import { ApproachCards } from "@/components/tfj/ApproachCards";
import { Testimonials } from "@/components/tfj/Testimonials";
import { GalleryGrid } from "@/components/tfj/GalleryGrid";
import { Section } from "@/components/tfj/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { homeContent } from "@/content/tfj/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Teaching for Justice – empowering educators to build a more equitable world through AAPI-centered K-12 education.",
};

export const dynamic = "force-static";

export default function Home() {
  const { hero, story, values, timeline, approach, testimonials, gallery, quoteBanner } =
    homeContent;

  return (
    <div className="flex flex-col">
      {/* Hero Section - fills remaining viewport after nav (64px mobile, 80px desktop) */}
      <Section className="relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://replicate.delivery/xezq/DJomyCmGyYpJOBk8ke3cvdfCBWPQfC2tx3n5nWqsRepZ8eUyC/tmp47e45qb4.jpeg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 flex-1 flex items-center justify-center py-10 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0}>
              <h1 className="relative mb-6">
                <span className="sr-only">Teaching for Justice</span>
                <Image
                  src="/TFJ-home-hero-pink.png"
                  alt=""
                  width={800}
                  height={200}
                  priority
                  className="w-full max-w-2xl mx-auto h-auto"
                />
              </h1>
            </SectionReveal>
            <SectionReveal delay={100}>
              <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                {hero.tagline}
              </p>
            </SectionReveal>
            <SectionReveal delay={200}>
              <PillButton href={hero.ctaLink} variant="primary" className="text-lg px-10 py-4">
                {hero.ctaText}
              </PillButton>
            </SectionReveal>
          </div>
        </Container>
        <div
          className="absolute inset-0 opacity-10 animate-float-slow pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(242,125,32,0.4) 2px, transparent 2px), radial-gradient(circle, rgba(232,50,120,0.4) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeading subtitle="Our Story">About Us</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-6">
              {story.paragraphs.map((paragraph, index) => (
                <SectionReveal key={index} delay={index * 50}>
                  <p className="text-lg text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </SectionReveal>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full">
              <SectionReveal delay={150}>
                <Image
                  src={story.imageUrl}
                  alt={story.imageAlt}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </SectionReveal>
            </div>
          </div>
        </Container>
      </Section>

      <QuoteBanner
        quote={quoteBanner.quote}
        author={quoteBanner.author}
      />

      <ValuesGrid values={values} />

      <TimelineVertical entries={timeline} />

      <ApproachCards cards={approach} />

      <Testimonials testimonials={testimonials} />

      <GalleryGrid items={gallery} />

      <Section variant="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal delay={0}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-heading">
                Ready to Join Our Community?
              </h2>
            </SectionReveal>
            <SectionReveal delay={100}>
              <p className="text-lg text-black/90 mb-10">
                Be part of our 2026 conference and connect with educators committed to
                justice-oriented teaching.
              </p>
            </SectionReveal>
            <SectionReveal delay={200}>
              <PillButton href="/conference/2026" variant="primary" className="text-lg px-12 py-4">
                Register for Conference 2026
              </PillButton>
            </SectionReveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
