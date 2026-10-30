"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Globe, Maximize2, ArrowUpRight, Film, Check } from "lucide-react";

export const VIDEO_POSTER_URL = "https://cdn.imagetourls.com/uploads/tyImg/CAssaPKe.jpg";

interface DiwaliPosterArtProps {
  type: "video" | "website";
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

  if (type === "video") {
    return (
      <div
        className={`relative ${
          isLightbox
            ? "aspect-[4/5] sm:aspect-[3/4] max-h-[82vh]"
            : "aspect-[16/10] sm:aspect-[16/11]"
        } w-full rounded-[10px] overflow-hidden bg-[#0A0A0A] border border-white/10 flex flex-col justify-between p-4 sm:p-5 select-none group transition-all duration-300 hover:border-white/25 ${className}`}
      >
        {/* Actual User Poster Artwork Image with Ambient Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#070707]">
          {!imageError ? (
            <>
              {/* Soft ambient back-glow matching image tones */}
              <Image
                src={VIDEO_POSTER_URL}
                alt=""
                fill
                className="object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
                referrerPolicy="no-referrer"
                aria-hidden="true"
                unoptimized
              />
              {/* Sharp, uncropped central poster display */}
              <Image
                src={VIDEO_POSTER_URL}
                alt="DGEN Z Festive Offer 01 - Cinematic Video Ads Official Promotional Artwork"
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#111111] text-[#A3A3A3] text-xs font-mono">
              [CINEMATIC VIDEO POSTER]
            </div>
          )}

          {/* Editorial gradient vignettes to ensure UI metadata readability */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Subtle architectural grid lines for brand cohesion */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none z-[1]" />

        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[5px] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31837] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white font-medium">
              01 / CINEMATIC AI MOTION
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[#A3A3A3] uppercase">
              4K · 9:16 REELS
            </span>
            {onExpand && !isLightbox && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="p-1.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[#A3A3A3] hover:text-white hover:border-white/30 transition-colors"
                title="Expand Poster Artwork"
                aria-label="Expand poster artwork"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Hover / Expand Hint Badge */}
        {!isLightbox && (
          <div className="relative z-10 my-auto pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-wider uppercase text-white flex items-center gap-1.5 shadow-xl">
              <Play className="w-3 h-3 text-[#E31837] fill-[#E31837]" />
              <span>Click to Expand Artwork</span>
            </div>
          </div>
        )}

        {/* Bottom Specs Row */}
        <div className="relative z-10 border-t border-white/10 pt-2.5 mt-auto bg-black/60 backdrop-blur-md -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 px-4 sm:px-5 py-2.5 flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#A3A3A3]">
            THE SPOTLIGHT <span className="text-white font-semibold">₹2,000</span>
          </span>
          <span className="text-[#A3A3A3]">
            THE BRAND <span className="text-[#E31837] font-semibold">₹2,399</span>
          </span>
        </div>
      </div>
    );
  }

  // Website Development Poster Art
  return (
    <div
      className={`relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-[10px] overflow-hidden bg-[#0A0A0A] border border-white/10 flex flex-col justify-between p-5 sm:p-6 select-none group transition-all duration-300 hover:border-white/25 ${className}`}
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3]">
            02 / DIGITAL ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A3A3A3] uppercase">
            SAVE 63% · ₹10,999
          </span>
          {onExpand && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onExpand();
              }}
              className="p-1 rounded bg-white/5 border border-white/10 text-[#A3A3A3] hover:text-white hover:border-white/20 transition-colors"
              title="Expand Poster Artwork"
              aria-label="Expand poster artwork"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Center Artwork Canvas: Minimalist Digital Studio Frame */}
      <div className="relative z-10 my-auto py-2">
        <div className="relative mx-auto max-w-[340px] rounded-[8px] bg-[#111111] border border-white/10 p-4 sm:p-5 shadow-2xl">
          {/* Browser Address Bar UI */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[9px] font-mono text-[#A3A3A3]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[#A3A3A3] truncate">dgenz.studio/your-brand</span>
            <span className="text-[#E31837]">SSL SECURE</span>
          </div>

          <div className="pt-3 pb-2 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#E31837]/60 transition-colors">
              <Globe className="w-5 h-5 text-[#E31837]" />
            </div>
            <p className="text-[10px] font-mono text-[#A3A3A3] tracking-[0.25em] uppercase">
              BEYOND AN INSTAGRAM PAGE
            </p>
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-tight font-sans">
              BUSINESS <span className="text-[#E31837]">FLAGSHIP</span>
            </h4>
            <p className="text-[11px] text-[#A3A3A3] font-sans max-w-[240px] mx-auto">
              5 custom pages, 1 year cloud hosting, Google SEO & direct WhatsApp triggers
            </p>
          </div>

          {/* Understated bonus tag */}
          <div className="mt-2 py-1 px-2.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-center text-[#A3A3A3]">
            INCLUDES 1 FREE AI REEL + 2 SOCIAL POSTS
          </div>
        </div>
      </div>

      {/* Bottom Specs Row */}
      <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono">
        <span className="text-[#A3A3A3]">
          REGULAR <span className="line-through text-white/40">₹29,999</span>
        </span>
        <span className="text-[#A3A3A3]">
          FESTIVE RATE <span className="text-[#E31837] font-semibold">₹10,999</span>
        </span>
      </div>
    </div>
  );
}
