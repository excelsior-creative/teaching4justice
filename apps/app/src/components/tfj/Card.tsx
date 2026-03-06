import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
  hover = true,
  variant = "default",
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "gradient-border";
  as?: React.ElementType;
}) => {
  if (variant === "gradient-border") {
    return (
      <Component
        className={cn(
          "gradient-border-wrapper",
          "group",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "gradient-border-inner p-6",
            "bg-white",
            hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          )}
        >
          {children}
        </div>
      </Component>
    );
  }

  return (
    <Component
      className={cn(
        "rounded-2xl bg-white p-6",
        "shadow-card",
        "border border-subtle",
        hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
