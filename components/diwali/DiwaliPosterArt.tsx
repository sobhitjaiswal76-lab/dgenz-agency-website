"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles, Layers, Palette, CheckCircle2 } from "lucide-react";

export const POSTER_WEBSITE_URL = "https://cdn.imagetourls.com/uploads/tyImg/13nlRP2oZ.png";
export const POSTER_CATALOGUE_URL = "https://cdn.imagetourls.com/uploads/tyImg/CAssaPKe.jpg";

interface DiwaliPosterArtProps {
  type: "website" | "catalogue" | "design";
  onExpand?: () => void;
  className?: string;
  isLightbox?: boolean;
}

export default function DiwaliPosterArt({
  type,
  onExpand,
  className = "",
  isLightbox = false,
}: DiwaliPosterArtProps) {
  const [imageError, setImageError] = useState(false);

  // Offer 01: Business Website
  if (type === "website") {
    return (
      <div
        className={`relative ${
          isLightbox
            ? "aspect-[4/5] sm:aspect-[3/4] max-h-[82vh]"
            : "aspect-[16/10] sm:aspect-[16/10]"
        } w-full rounded-[8px] overflow-hidden bg-[#0A0A0A] border border-[#242424] flex flex-col justify-between p-3.5 sm:p-4 select-none group transition-all duration-300 hover:border-[#383838] ${className}`}
      >
        {/* Actual Poster Artwork with Ambient Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
          {!imageError ? (
            <>
              {/* Soft ambient back-glow matching image tones */}
              <Image
                src={POSTER_WEBSITE_URL}
                alt=""
                fill
                className="object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                referrerPolicy="no-referrer"
                aria-hidden="true"
                unoptimized
              />
              {/* Sharp, uncropped central poster display */}
              <Image
                src={POSTER_WEBSITE_URL}
                alt="DGEN Z Offer 01 — Business Website Launch Artwork"
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                priority
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#111111] text-[#A3A3A3] text-xs font-mono">
              [WEBSITE LAUNCH CAMPAIGN ASSET]
            </div>
          )}

          {/* Vignette gradients to preserve text legibility */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-white font-medium">
              01 / WEB FLAGSHIP
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-[#ED1C24]/30 text-[#ED1C24] font-semibold uppercase">
              30% OFF
            </span>
            {onExpand && !isLightbox && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="p-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[#A3A3A3] hover:text-white transition-colors"
                title="Expand Artwork"
                aria-label="Expand artwork"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Specs Strip */}
        <div className="relative z-10 border-t border-white/10 pt-2 mt-auto bg-black/70 backdrop-blur-md -mx-3.5 -mb-3.5 sm:-mx-4 sm:-mb-4 px-3.5 sm:px-4 py-2 flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#A3A3A3]">5 PAGES · SEO · SSL</span>
          <span className="text-white font-semibold">1 REEL + 3 POSTS FREE</span>
        </div>
      </div>
    );
  }

  // Offer 02: Smart Digital Catalogue
  if (type === "catalogue") {
    return (
      <div
        className={`relative ${
          isLightbox
            ? "aspect-[4/5] sm:aspect-[3/4] max-h-[82vh]"
            : "aspect-[16/10] sm:aspect-[16/10]"
        } w-full rounded-[8px] overflow-hidden bg-[#0A0A0A] border border-[#242424] flex flex-col justify-between p-3.5 sm:p-4 select-none group transition-all duration-300 hover:border-[#383838] ${className}`}
      >
        {/* Actual Poster Artwork with Ambient Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
          {!imageError ? (
            <>
              {/* Soft ambient back-glow matching image tones */}
              <Image
                src={POSTER_CATALOGUE_URL}
                alt=""
                fill
                className="object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                referrerPolicy="no-referrer"
                aria-hidden="true"
                unoptimized
              />
              {/* Sharp, uncropped central poster display */}
              <Image
                src={POSTER_CATALOGUE_URL}
                alt="DGEN Z Offer 02 — Smart Digital Catalogue Artwork"
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                priority
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#111111] text-[#A3A3A3] text-xs font-mono">
              [SMART DIGITAL CATALOGUE ASSET]
            </div>
          )}

          {/* Vignette gradients to preserve text legibility */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-white font-medium">
              02 / CATALOGUE SUITE
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-[#C6A15B]/30 text-[#C6A15B] font-semibold uppercase">
              10% OFF
            </span>
            {onExpand && !isLightbox && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="p-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[#A3A3A3] hover:text-white transition-colors"
                title="Expand Artwork"
                aria-label="Expand artwork"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Specs Strip */}
        <div className="relative z-10 border-t border-white/10 pt-2 mt-auto bg-black/70 backdrop-blur-md -mx-3.5 -mb-3.5 sm:-mx-4 sm:-mb-4 px-3.5 sm:px-4 py-2 flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#A3A3A3]">SHAREABLE LINK · WHATSAPP ORDERING</span>
          <span className="text-white font-semibold">1 REEL + 1 POST FREE</span>
        </div>
      </div>
    );
  }

  // Offer 03: Creative Design Deal
  return (
    <div
      className={`relative ${
        isLightbox
          ? "aspect-[4/5] sm:aspect-[3/4] max-h-[82vh]"
          : "aspect-[16/10] sm:aspect-[16/10]"
      } w-full rounded-[8px] overflow-hidden bg-[#0A0A0A] border border-[#242424] flex flex-col justify-between p-3.5 sm:p-4 select-none group transition-all duration-300 hover:border-[#383838] ${className}`}
    >
      {/* Background Graphic composition */}
      <div className="absolute inset-0 z-0 bg-[#070707] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Subtle geometric grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* Muted radial lighting highlight */}
        <div className="absolute w-44 h-44 rounded-full bg-[#ED1C24]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#C6A15B]/10 blur-2xl pointer-events-none" />

        {/* Central Editorial Graphic Badge */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center mb-2.5 text-[#ED1C24] group-hover:scale-105 transition-transform">
            <Palette className="w-6 h-6 text-[#ED1C24]" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3A3A3]">
            EDITORIAL GRAPHIC SUITE
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1 font-sans">
            7 BESPOKE DESIGN SERVICES
          </h4>
          <span className="text-[10px] font-mono text-[#C6A15B] tracking-wider uppercase mt-1">
            7% IMMEDIATE + 5% NEXT ORDER
          </span>
        </div>
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-white font-medium">
            03 / DESIGN LAB
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/20 text-white font-semibold uppercase">
            7% OFF
          </span>
        </div>
      </div>

      {/* Bottom Specs Strip */}
      <div className="relative z-10 border-t border-white/10 pt-2 mt-auto bg-black/70 backdrop-blur-md -mx-3.5 -mb-3.5 sm:-mx-4 sm:-mb-4 px-3.5 sm:px-4 py-2 flex items-center justify-between text-[10px] font-mono">
        <span className="text-[#A3A3A3]">POSTERS · MENUS · CARDS · LOGOS</span>
        <span className="text-white font-semibold">PRINT & DIGITAL READY</span>
      </div>
    </div>
  );
}
