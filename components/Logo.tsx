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
  // Determine sizing classes
  const fontSizes = {
    sm: "text-sm",
    md: "text-lg md:text-xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-4xl md:text-6xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] tracking-[0.2em] -mt-0.5",
    md: "text-[7.5px] md:text-[8px] tracking-[0.3em] -mt-0.5",
    lg: "text-[10px] tracking-[0.35em] mt-0.5",
    xl: "text-xs md:text-sm tracking-[0.4em] mt-2",
  };

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Brand typographic container with slanted italic lines */}
      <div className="inline-flex items-center gap-0.5 leading-none">
        <span 
          className={`font-black uppercase italic tracking-tight skew-x-[-10deg] inline-block bg-gradient-to-b from-slate-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)] ${fontSizes[size]}`}
          style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.1)" }}
        >
          DGEN
        </span>
        <span 
          className={`font-black uppercase italic skew-x-[-10deg] inline-block bg-gradient-to-b from-[#ff3355] via-crimson to-[#660018] bg-clip-text text-transparent drop-shadow-[0_2px_5px_rgba(220,20,60,0.65)] relative ${fontSizes[size]}`}
          style={{ WebkitTextStroke: "0.5px rgba(220,20,60,0.2)" }}
        >
          Z
          {/* Subtle logo glow spot */}
          {glow && (
            <span className="absolute inset-0 bg-crimson/15 blur-[8px] rounded-full -z-10 animate-pulse" />
          )}
        </span>
      </div>

      {/* Sublabel: DIGITAL MARKETING STUDIO */}
      {showSubtitle && (
        <span 
          className={`font-sans font-extrabold uppercase text-zinc-400 block tracking-widest ${subtitleSizes[size]}`}
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
        >
          DIGITAL MARKETING STUDIO
        </span>
      )}
    </div>
  );
}
