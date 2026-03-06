import React from "react";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  children,
  className,
  subtitle,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}) => {
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const accentPositionStyles = {
    left: "accent-line-left left-0",
    center: "accent-line-top top-0",
    right: "accent-line-right right-0",
  };

  return (
    <div className={cn("mb-12 relative", alignStyles[align], className)}>
      {subtitle && (
        <p className="text-lg font-semibold text-t4j-orange mb-3 tracking-wide inline-block relative">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-t4j-purple",
          "font-heading",
          "drop-shadow-sm"
        )}
      >
        {children}
      </h2>
    </div>
  );
};
