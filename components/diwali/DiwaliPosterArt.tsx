"use client";

import React from "react";
import { Sparkles, Play, Globe, CheckCircle2, ShieldCheck, Zap, Maximize2 } from "lucide-react";

interface DiwaliPosterArtProps {
  type: "video" | "website";
  onExpand?: () => void;
  className?: string;
}

export default function DiwaliPosterArt({ type, onExpand, className = "" }: DiwaliPosterArtProps) {
  if (type === "video") {
    return (
      <div
        className={`relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A0A0E] border border-amber-500/20 shadow-2xl flex flex-col justify-between p-6 sm:p-8 select-none group transition-all duration-300 hover:border-amber-400/50 ${className}`}
      >
        {/* Cinematic Background Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-[#0D0D12] to-[#050507]" />
        
        {/* Subtle Decorative Golden Diya Glow Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Ambient Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Top Header Row of Poster */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-[10px] font-mono tracking-widest text-[#D4AF65] uppercase">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Diwali 2026 Special
            </div>
            <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              DGEN Z · AI PRODUCTION LAB
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#D90429]/20 border border-[#D90429]/40 text-[#D90429] uppercase">
              4K 60FPS
            </span>
            {onExpand && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-neutral-300 hover:text-white hover:border-amber-400/40 transition-colors"
                title="View Full Artwork"
                aria-label="Expand poster artwork"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Central Graphic Composition: Simulated 3D Cinematic Motion Viewport */}
        <div className="relative z-10 my-auto py-4">
          <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl p-4 backdrop-blur-sm">
            {/* Camera Viewfinder Reticle */}
            <div className="absolute top-2 left-2 text-[8px] font-mono text-amber-400/80">REC [●] 00:15:00</div>
            <div className="absolute top-2 right-2 text-[8px] font-mono text-neutral-400">9:16 REELS READY</div>
            
            {/* Dynamic Visual Centerpiece */}
            <div className="relative aspect-[9/12] w-full rounded-lg overflow-hidden bg-gradient-to-b from-[#141419] to-[#09090D] border border-white/5 flex flex-col items-center justify-center text-center p-4">
              {/* Animated Glowing Ring & Diya Symbolism */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full border border-amber-400/40 flex items-center justify-center bg-black/40 shadow-[0_0_25px_rgba(212,175,101,0.25)]">
                  <Play className="w-8 h-8 text-amber-400 ml-1 fill-amber-400/20" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-rose-600/90 text-[8px] font-bold tracking-wider text-white uppercase shadow-md">
                  NEURAL MOTION
                </div>
              </div>

              <span className="text-[11px] font-mono text-amber-300/90 tracking-widest uppercase">
                From 1 Static Photo To
              </span>
              <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase mt-0.5 leading-tight font-sans">
                CINEMATIC <span className="text-[#D90429]">MOTION</span>
              </h4>
              <p className="text-[10px] text-neutral-400 font-sans mt-2 max-w-[200px]">
                3D Camera Sweep · Volumetric Light · Commercial Audio
              </p>

              {/* Soundwave bars graphic */}
              <div className="flex items-center gap-1 mt-4 h-5">
                {[12, 18, 24, 15, 28, 20, 14, 26, 18, 22, 14, 10, 16, 20].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-amber-400/60 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom mini ticker */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-white/10 pt-2">
              <span className="text-amber-400">THE BRAND · ₹2,399</span>
              <span className="text-neutral-400">THE SPOTLIGHT · ₹2,000</span>
            </div>
          </div>
        </div>

        {/* Bottom Poster Footer */}
        <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono text-neutral-500 uppercase block">FESTIVE LAUNCHPAD</span>
            <span className="text-xs font-bold text-white tracking-wider uppercase font-sans">
              DGEN Z <span className="text-[#D90429]">STUDIO</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-mono text-amber-400/80 uppercase block">TURNAROUND</span>
            <span className="text-xs font-mono font-bold text-white">24–48 HOURS</span>
          </div>
        </div>
      </div>
    );
  }

  // Website Development Offer Poster Art
  return (
    <div
      className={`relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A0A0E] border border-rose-600/30 shadow-2xl flex flex-col justify-between p-6 sm:p-8 select-none group transition-all duration-300 hover:border-rose-500/60 ${className}`}
    >
      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/25 via-[#0D0D12] to-[#050507]" />

      {/* Warm Golden Festive Ambient Flare */}
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-44 h-44 bg-rose-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top Header Row of Poster */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600/15 border border-rose-500/30 text-[10px] font-mono tracking-widest text-rose-300 uppercase">
            <Zap className="w-3 h-3 text-[#D90429]" />
            Flagship Festive Offer
          </div>
          <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            SAVE 63% · ORIGINAL ₹29,999
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-400/15 border border-amber-400/30 text-[#D4AF65] uppercase">
            ₹10,999 ONLY
          </span>
          {onExpand && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExpand();
              }}
              className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-neutral-300 hover:text-white hover:border-rose-400/40 transition-colors"
              title="View Full Artwork"
              aria-label="Expand poster artwork"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Central Graphic Composition: High-End Laptop & Mobile Device Frame */}
      <div className="relative z-10 my-auto py-4">
        <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] rounded-xl overflow-hidden border border-white/15 bg-black/70 shadow-2xl p-4 backdrop-blur-sm">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-400 flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
              https://yourbusiness.com
            </div>
          </div>

          {/* Device Screen Preview Body */}
          <div className="mt-3 p-4 rounded-lg bg-gradient-to-b from-neutral-900/90 to-black border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">5 CUSTOM PAGES</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/30">
                100% SEO INDEXED
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase leading-snug font-sans">
              ENTERPRISE <span className="text-[#D90429]">DIGITAL</span> FLAGSHIP
            </h4>

            <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-neutral-300 font-mono">
              <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-[#D90429] shrink-0" />
                <span>1 Yr Cloud Host</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-[#D90429] shrink-0" />
                <span>Free SSL Certificate</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                <span>1 Free AI Reel</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                <span>2 IG Creatives</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-white/10 pt-2">
            <span className="text-rose-400">NEXT.JS 15 PERFORMANCE</span>
            <span className="text-amber-400 font-bold">SAVE ₹19,000</span>
          </div>
        </div>
      </div>

      {/* Bottom Poster Footer */}
      <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-mono text-neutral-500 uppercase block">ORIGINAL ₹29,999</span>
          <span className="text-sm font-black text-white tracking-wider font-sans">
            ₹10,999 <span className="text-xs font-normal text-amber-400">ALL INCLUSIVE</span>
          </span>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-mono text-amber-400/80 uppercase block">GOOGLE SEARCH</span>
          <span className="text-xs font-mono font-bold text-emerald-400">READY IN 5-7 DAYS</span>
        </div>
      </div>
    </div>
  );
}
