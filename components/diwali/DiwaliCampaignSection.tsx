"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Clock,
  Zap,
  Globe,
  Film,
  Maximize2,
  ExternalLink,
  ShieldCheck,
  Flame,
  Award
} from "lucide-react";
import {
  getCampaignTimeRemaining,
  CampaignTimeRemaining,
  buildWhatsAppLink,
  WA_MESSAGES,
  DIWALI_OFFERS,
} from "./diwali-utils";
import DiwaliPosterArt from "./DiwaliPosterArt";
import DiwaliOfferDetailsModal from "./DiwaliOfferDetailsModal";

export default function DiwaliCampaignSection() {
  const [timeLeft, setTimeLeft] = useState<CampaignTimeRemaining>(getCampaignTimeRemaining());
  const [selectedOffer, setSelectedOffer] = useState<"video" | "website" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isArtworkLightboxOpen, setIsArtworkLightboxOpen] = useState(false);
  const [lightboxPosterType, setLightboxPosterType] = useState<"video" | "website">("video");

  useEffect(() => {
    // Live countdown update every second
    const timer = setInterval(() => {
      setTimeLeft(getCampaignTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openOfferModal = (type: "video" | "website") => {
    setSelectedOffer(type);
    setIsModalOpen(true);
  };

  const openArtworkLightbox = (type: "video" | "website") => {
    setLightboxPosterType(type);
    setIsArtworkLightboxOpen(true);
  };

  return (
    <section
      id="diwali-specials"
      aria-label="DGEN Z Diwali Campaign Specials 2026"
      className="relative w-full pt-16 pb-20 scroll-mt-24 select-none"
    >
      {/* Decorative Golden / Crimson Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-amber-500/10 via-rose-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Campaign Section Header */}
      <div className="flex flex-col items-start space-y-4 max-w-4xl mb-12 sm:mb-16">
        
        {/* Festive Chip & Live Countdown Status */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/35 text-xs font-mono tracking-widest text-[#D4AF65] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>DGEN Z FESTIVE SPECIALS</span>
          </div>

          {timeLeft.isActive ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIMITED RUN: OCT 30 – NOV 8, 2026 (IST)</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-[11px] font-mono text-neutral-400">
              <span>SPECIAL FESTIVE WINDOW</span>
            </div>
          )}
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans leading-[1.05]">
          MAKE THIS DIWALI YOUR BUSINESS&apos;S{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-100 to-[#D90429] bg-clip-text text-transparent">
            BIGGEST DIGITAL MOMENT
          </span>
          .
        </h2>

        {/* Section Narrative */}
        <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-3xl leading-relaxed">
          Engineered for high-growth Indian brands, hospitality venues, and modern direct-to-consumer businesses. Stop settling for low-retention static posts — command customer attention with high-converting AI cinematic videos and a professional digital flagship website.
        </p>

        {/* Dynamic Countdown Timer Widget */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-white">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mr-2 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            FESTIVE WINDOW CLOSES IN:
          </span>

          <div className="flex items-center gap-2 font-mono">
            <div className="bg-[#0A0A0E] border border-amber-400/30 px-3 py-1.5 rounded-lg text-center min-w-[54px] shadow-md">
              <span className="text-lg sm:text-xl font-bold text-amber-300 block leading-tight">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest">DAYS</span>
            </div>

            <span className="text-amber-400 font-bold">:</span>

            <div className="bg-[#0A0A0E] border border-amber-400/30 px-3 py-1.5 rounded-lg text-center min-w-[54px] shadow-md">
              <span className="text-lg sm:text-xl font-bold text-amber-300 block leading-tight">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest">HOURS</span>
            </div>

            <span className="text-amber-400 font-bold">:</span>

            <div className="bg-[#0A0A0E] border border-amber-400/30 px-3 py-1.5 rounded-lg text-center min-w-[54px] shadow-md">
              <span className="text-lg sm:text-xl font-bold text-amber-300 block leading-tight">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest">MINS</span>
            </div>

            <span className="text-amber-400 font-bold">:</span>

            <div className="bg-[#0A0A0E] border border-amber-400/30 px-3 py-1.5 rounded-lg text-center min-w-[54px] shadow-md">
              <span className="text-lg sm:text-xl font-bold text-rose-400 block leading-tight">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest">SECS</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          THE TWO FESTIVE OFFERS (Side-by-side Desktop, Stacked Mobile)
      ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* =======================================================
            OFFER 01: AI CINEMATIC VIDEO ADS
        ======================================================= */}
        <div className="relative rounded-2xl bg-[#08080C] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 hover:border-amber-400/50">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge & Tag */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-mono text-[#D4AF65] tracking-widest uppercase">
                <Film className="w-3.5 h-3.5 text-amber-400" />
                OFFER 01 · CONTENT REVOLUTION
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-white uppercase">
                FAST 24–48H
              </span>
            </div>

            {/* Poster Artwork Showcase Preview */}
            <div className="relative cursor-pointer" onClick={() => openOfferModal("video")}>
              <DiwaliPosterArt
                type="video"
                onExpand={() => openArtworkLightbox("video")}
                className="max-h-[380px]"
              />
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-2 pt-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                TURN PRODUCT PHOTOS INTO <span className="text-[#D90429]">CINEMATIC VIDEO ADS</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Why post plain product photos when you can stop the scroll with hyper-realistic AI cinematic motion? Formatted specifically for Instagram Reels, YouTube Shorts, and high-converting Meta Ads.
              </p>
            </div>

            {/* Packages Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* The Spotlight */}
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">THE SPOTLIGHT</span>
                  <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.2 rounded text-white">10–15s</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-white font-sans">₹2,000</span>
                  <span className="text-[10px] font-mono text-neutral-400">/ video</span>
                </div>
                <ul className="text-[11px] text-neutral-300 space-y-1 pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>3D Camera Pan & Dynamic Light</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Hook audio & 1 Revision</span>
                  </li>
                </ul>
              </div>

              {/* The Brand */}
              <div className="relative p-4 rounded-xl bg-amber-500/10 border-2 border-amber-400/50 space-y-2 shadow-lg">
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded bg-amber-400 text-black text-[9px] font-black uppercase tracking-wider">
                  BEST VALUE
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">THE BRAND</span>
                  <span className="text-[10px] font-mono bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded">15–30s</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-amber-400 font-sans">₹2,399</span>
                  <span className="text-[10px] font-mono text-neutral-400">/ video</span>
                </div>
                <ul className="text-[11px] text-neutral-200 space-y-1 pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="font-medium text-white">Multi-Angle Ultra Cinematic</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>AI Voiceover & 2 Revisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <a
              href={buildWhatsAppLink(WA_MESSAGES.videoOffer)}
              target="_blank"
              rel="no-referrer"
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-[#D90429] to-rose-700 hover:opacity-95 text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 transition-all outline-none"
            >
              <span>Book Video Package on WhatsApp</span>
              <Send className="w-4 h-4" />
            </a>

            <button
              onClick={() => openOfferModal("video")}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors outline-none"
            >
              <span>View Full Deliverables & FAQ</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* =======================================================
            OFFER 02: DIWALI WEBSITE DEVELOPMENT
        ======================================================= */}
        <div className="relative rounded-2xl bg-[#08080C] border border-rose-600/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 hover:border-rose-500/60">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge & Tag */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/15 border border-rose-500/30 text-xs font-mono text-rose-300 tracking-widest uppercase">
                <Zap className="w-3.5 h-3.5 text-[#D90429]" />
                OFFER 02 · DIGITAL FLAGSHIP
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-[#D4AF65] border border-amber-400/30 uppercase">
                SAVE ₹19,000 (63% OFF)
              </span>
            </div>

            {/* Poster Artwork Showcase Preview */}
            <div className="relative cursor-pointer" onClick={() => openOfferModal("website")}>
              <DiwaliPosterArt
                type="website"
                onExpand={() => openArtworkLightbox("website")}
                className="max-h-[380px]"
              />
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-2 pt-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                YOUR BUSINESS DESERVES MORE THAN <span className="text-[#D90429]">JUST AN INSTAGRAM PAGE</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                A custom, ultra-fast, high-converting digital storefront designed to turn casual visitors into paying customers. Complete with 1 year cloud hosting, Google Search indexing, and complimentary creative assets.
              </p>
            </div>

            {/* Pricing Highlight Pill */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono line-through text-neutral-500 uppercase block">ORIGINAL ₹29,999</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white font-sans">₹10,999</span>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold">ALL-INCLUSIVE</span>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                5–7 Days Delivery
              </span>
            </div>

            {/* Core Inclusions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300 pt-1">
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>5 Custom High-End Pages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1 Year Cloud Host & SSL</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Google SEO & Maps Indexing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Click-to-WhatsApp Triggers</span>
              </div>
            </div>

            {/* Festive Free Bonus Banner */}
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center gap-2.5 text-[11px] text-amber-200">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>FREE DIWALI BONUS:</strong> 1 Free AI Cinematic Reel + 2 Custom Instagram Creative Posts included!
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <a
              href={buildWhatsAppLink(WA_MESSAGES.websiteOffer)}
              target="_blank"
              rel="no-referrer"
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D90429] via-rose-600 to-amber-600 hover:opacity-95 text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30 transition-all outline-none"
            >
              <span>Claim Website Offer on WhatsApp</span>
              <Send className="w-4 h-4" />
            </a>

            <button
              onClick={() => openOfferModal("website")}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors outline-none"
            >
              <span>View Full Inclusions & Hosting Scope</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================
          INTERACTIVE OFFER DETAILS MODAL
      ========================================================= */}
      <DiwaliOfferDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType={selectedOffer}
      />

      {/* =========================================================
          LIGHTBOX MODAL FOR FULL-SIZE POSTER ARTWORK VIEW
      ========================================================= */}
      <AnimatePresence>
        {isArtworkLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsArtworkLightboxOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-xl w-full z-10 p-2"
            >
              <button
                onClick={() => setIsArtworkLightboxOpen(false)}
                className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close artwork preview"
              >
                ✕ Close Preview
              </button>
              <DiwaliPosterArt type={lightboxPosterType} className="max-h-[80vh] shadow-2xl" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
