"use client";

import React from "react";

interface LogoProps {
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

export default function Logo({
  showSubtitle = true,
  size = "md",
  className = "",
  glow = true,
}: LogoProps) {
  // Sizing definitions
  const fontSizes = {
    sm: "text-base",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-5xl md:text-7xl",
  };

  const subtitleSizes = {
    sm: "text-[7px] tracking-[0.28em] mt-0.5",
    md: "text-[8px] md:text-[9px] tracking-[0.32em] mt-0.5",
    lg: "text-[11px] tracking-[0.35em] mt-1",
    xl: "text-xs md:text-sm tracking-[0.4em] mt-2",
  };

  const tmSizes = {
    sm: "text-[8px] -top-1",
    md: "text-[10px] -top-1.5",
    lg: "text-xs -top-2",
    xl: "text-sm -top-3",
  };

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Brand typographic container */}
      <div className="inline-flex items-baseline leading-none">
        <span 
          className={`font-black uppercase tracking-tight inline-block text-white ${fontSizes[size]}`}
          style={{ letterSpacing: "-0.04em" }}
        >
          DGEN
        </span>
        <span 
          className={`font-black uppercase inline-block text-[#D90429] relative ml-0.5 ${fontSizes[size]}`}
          style={{ letterSpacing: "-0.04em" }}
        >
          Z
          {/* TM Superscript */}
          <span className={`absolute -right-3 font-mono font-bold text-[#D90429] ${tmSizes[size]}`}>
            ™
          </span>
          {/* Subtle logo glow spot in dark mode */}
          {glow && (
            <span className="absolute inset-0 bg-[#D90429]/20 blur-md rounded-full -z-10 pointer-events-none" />
          )}
        </span>
      </div>

      {/* Sublabel: AI MARKETING STUDIO */}
      {showSubtitle && (
        <span 
          className={`font-mono font-semibold uppercase text-neutral-400 block ${subtitleSizes[size]}`}
        >
          AI MARKETING STUDIO
        </span>
      )}
    </div>
  );
}
