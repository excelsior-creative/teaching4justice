import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  shimmer?: boolean;
}

export const PillButton = ({
  children,
  variant = "primary",
  href,
  className,
  shimmer = true,
  ...props
}: PillButtonProps) => {
  const variantStyles = {
    primary:
      "bg-gradient-sunset text-white shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 relative overflow-hidden",
    secondary:
      "bg-t4j-yellow text-foreground shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 relative overflow-hidden",
    outline:
      "border-2 border-t4j-purple text-t4j-purple hover:bg-t4j-purple hover:text-white hover:shadow-button hover:scale-105 active:scale-95 transition-all duration-200",
  };

  const buttonContent = (
    <button
      className={cn(
        "rounded-full px-8 py-3 font-bold transition-all duration-200 inline-flex items-center justify-center",
        variantStyles[variant],
        shimmer && (variant === "primary" || variant === "secondary") && "group",
        className
      )}
      {...props}
    >
      {(variant === "primary" || variant === "secondary") && shimmer && (
        <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};
