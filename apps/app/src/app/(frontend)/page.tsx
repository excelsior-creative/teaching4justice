import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teaching for Justice – About to Be Amazing",
  description:
    "We are currently making some improvements to our website. Stay tuned!",
};

export const dynamic = "force-static";

export default function Home() {
  const notifyEmail = "info@teaching4justice.org";

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-around gap-5 px-4 py-12 text-center"
      style={{ backgroundColor: "#5B2AE8" }}
    >
      {/* Background image with subtle overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://teaching4justice.org/wp-content/uploads/2026/02/TFJ-comingsoon-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="w-full max-w-[320px] sm:max-w-[400px]">
          <Image
            src="https://teaching4justice.org/wp-content/uploads/2026/02/TFJ-Logo-orange-500x374-1.png"
            alt="Teaching for Justice"
            width={500}
            height={374}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-white font-medium"
          style={{
            fontFamily: "var(--font-pacifico), cursive",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.1,
          }}
        >
          Launching soon!
        </h1>

        {/* Subtext */}
        <p
          className="text-white max-w-md leading-relaxed"
          style={{ fontSize: "1.25rem" }}
        >
          We are currently making some improvements to our website!
        </p>

        {/* CTA Button */}
        <a
          href={`mailto:${notifyEmail}`}
          className="inline-block font-bold text-white transition-all hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#F27D20",
            borderRadius: "50rem",
            padding: "0.875rem 4rem",
            fontSize: "1rem",
            letterSpacing: "0.05em",
            textDecoration: "none",
            border: "2px solid transparent",
          }}
        >
          NOTIFY ME
        </a>
      </div>
    </main>
  );
}
