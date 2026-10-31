"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Globe, Maximize2, ArrowUpRight, Film, Check } from "lucide-react";

export const VIDEO_POSTER_URL = "https://cdn.imagetourls.com/uploads/tyImg/CAssaPKe.jpg";
export const WEBSITE_POSTER_URL = "https://cdn.imagetourls.com/uploads/tyImg/13nlRP2oZ.png";

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

  // Website Development Poster Art with user provided artwork
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
              src={WEBSITE_POSTER_URL}
              alt=""
              fill
              className="object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
              referrerPolicy="no-referrer"
              aria-hidden="true"
              unoptimized
            />
            {/* Sharp, uncropped central poster display */}
            <Image
              src={WEBSITE_POSTER_URL}
              alt="DGEN Z Festive Offer 02 - Business Website Development Official Promotional Artwork"
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
            [WEBSITE DEVELOPMENT POSTER]
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
            02 / DIGITAL ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[#A3A3A3] uppercase">
            SAVE 63% · ₹10,999
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
          REGULAR <span className="line-through text-white/40">₹29,999</span>
        </span>
        <span className="text-[#A3A3A3]">
          FESTIVE RATE <span className="text-[#E31837] font-semibold">₹10,999</span>
        </span>
      </div>
    </div>
  );
}
