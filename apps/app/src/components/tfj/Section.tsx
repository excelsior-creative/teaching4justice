import React from "react";
import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
  variant = "default",
  divider = "none",
  dividerVariant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "muted" | "dot-grid" | "mesh";
  divider?: "none" | "top" | "bottom" | "both";
  dividerVariant?: "default" | "dark";
}) => {
  const variantStyles = {
    default: "bg-background",
    gradient: "bg-gradient-sunset-subtle",
    muted: "bg-muted/30",
    "dot-grid": "bg-dot-pattern bg-background",
    mesh: "bg-gradient-sunset-subtle grain-overlay bg-background",
  };

  const dividerTop = null;

  const dividerBottom = divider === "bottom" || divider === "both" ? (
    <div className={dividerVariant === "dark" ? "divider-gradient-dark" : "divider-gradient"} />
  ) : null;

  return (
    <section className={cn("relative py-16 md:py-24", variantStyles[variant], className)}>
      {dividerTop}
      {children}
      {dividerBottom}
    </section>
  );
};
