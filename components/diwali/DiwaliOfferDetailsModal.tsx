"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  CheckCircle2,
  Clock,
  Send,
  Zap,
  Globe,
  Film,
  Camera,
  Layers,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Percent
} from "lucide-react";
import { buildWhatsAppLink, WA_MESSAGES } from "./diwali-utils";
import DiwaliPosterArt from "./DiwaliPosterArt";

interface DiwaliOfferDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerType: "video" | "website" | null;
}

export default function DiwaliOfferDetailsModal({
  isOpen,
  onClose,
  offerType,
}: DiwaliOfferDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Esc key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !offerType) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0F] border border-amber-500/30 rounded-2xl shadow-2xl z-10 text-white p-6 sm:p-10 select-text"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-amber-400/50 transition-colors z-20 outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content Branches */}
          {offerType === "video" ? (
            /* ===================================================
               OFFER 01: AI CINEMATIC VIDEO ADS
            =================================================== */
            <div className="space-y-8">
              {/* Header Badge & Title */}
              <div className="space-y-3 pr-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-mono text-[#D4AF65] tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Diwali 2026 Special · Offer 01
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-sans text-white leading-tight">
                  TURN PRODUCT PHOTOS INTO <span className="text-[#D90429]">CINEMATIC VIDEO ADS</span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Why settle for static catalog pictures? We transform ordinary product photography into ultra-realistic, scroll-stopping 3D cinematic commercials formatted specifically for Instagram Reels, YouTube Shorts, and high-ROI Meta Ad campaigns.
                </p>
              </div>

              {/* Two Packages Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Package 1: The Spotlight */}
                <div className="p-6 rounded-xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">PACKAGE 01</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">10–15 SECONDS</span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
                        THE SPOTLIGHT
                      </h4>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white font-sans">₹2,000</span>
                        <span className="text-xs font-mono text-neutral-400">per video / festive rate</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Perfect for emerging direct-to-consumer brands, bakeries, cafes, and fashion boutiques wanting to test high-conversion video ads quickly.
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>1 High-Impact AI Cinematic Video Reel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>3D Camera Pan & Dynamic Lighting sweep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Trending festive sound design & sound effects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>1 Round of revision included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                        <span className="font-mono text-neutral-300">Fast 24–48h Delivery</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.videoSpotlight)}
                    target="_blank"
                    rel="no-referrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all outline-none"
                  >
                    <span>Order The Spotlight (₹2,000)</span>
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>

                {/* Package 2: The Brand (Recommended) */}
                <div className="relative p-6 rounded-xl bg-gradient-to-b from-amber-500/10 via-neutral-900/90 to-neutral-950 border-2 border-amber-400/60 shadow-xl flex flex-col justify-between space-y-6">
                  {/* Floating Best Value Badge */}
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] font-black tracking-widest uppercase shadow-lg">
                    RECOMMENDED · BEST CONVERSION
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest uppercase text-amber-400">PACKAGE 02</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/20 text-amber-300">15–30 SECONDS</span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
                        THE BRAND
                      </h4>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-black text-amber-400 font-sans">₹2,399</span>
                        <span className="text-xs font-mono text-neutral-400">per video / festive rate</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Our flagship creative production package with multi-angle camera angles, AI voiceover narration, and hook-optimized text overlays for maximum sales.
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-amber-400/20 text-xs text-neutral-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium text-white">Multi-Angle Ultra-Cinematic camera moves</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>AI Voiceover narration or curated commercial track</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Dynamic kinetic typography & CTA overlay animation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>2 Full Rounds of creative revisions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="font-mono text-amber-300">Priority 24–48h Delivery</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.videoBrand)}
                    target="_blank"
                    rel="no-referrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all outline-none"
                  >
                    <span>Order The Brand (₹2,399)</span>
                    <Send className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>

              {/* What Client Needs to Provide */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-widest text-[#D4AF65] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  What We Need From You To Get Started
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
                  <li className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <strong className="block text-white mb-1">1. Product Photos</strong>
                    High-resolution still photos of your product from front/angles (even phone photos with good lighting).
                  </li>
                  <li className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <strong className="block text-white mb-1">2. Brand Assets</strong>
                    Your logo in transparent PNG/SVG format, brand colors, and handles.
                  </li>
                  <li className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <strong className="block text-white mb-1">3. Core Message</strong>
                    Your festive discount, product USP, or specific offer you want displayed in the video.
                  </li>
                </ul>
              </div>

              {/* Bottom Direct Trigger */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <span className="text-xs font-mono text-neutral-400">
                  Prefer discussing your project requirements first?
                </span>
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.videoOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>Chat With Sobhit Jaiswal on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* ===================================================
               OFFER 02: DIWALI WEBSITE DEVELOPMENT
            =================================================== */
            <div className="space-y-8">
              {/* Header Badge & Title */}
              <div className="space-y-3 pr-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/15 border border-rose-500/30 text-xs font-mono text-rose-300 tracking-widest uppercase">
                  <Zap className="w-3.5 h-3.5 text-[#D90429]" />
                  Diwali 2026 Special · Offer 02 · Save 63%
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-sans text-white leading-tight">
                  YOUR BUSINESS DESERVES MORE THAN <span className="text-[#D90429]">JUST AN INSTAGRAM PAGE</span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Instagram profiles don&apos;t rank on Google, don&apos;t own their search traffic, and lose customers to algorithm changes. Give your business a permanent, lightning-fast digital flagship designed to convert searchers into long-term clients.
                </p>
              </div>

              {/* Pricing Hero Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono line-through text-neutral-500">ORIGINAL ₹29,999</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D90429] text-white uppercase">
                      63% OFF · DIWALI ONLY
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-sans">₹10,999</span>
                    <span className="text-xs font-mono text-amber-400">All-Inclusive Festive Package</span>
                  </div>
                </div>

                <a
                  href={buildWhatsAppLink(WA_MESSAGES.websiteOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D90429] to-rose-700 hover:from-rose-500 hover:to-[#D90429] text-white font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-rose-900/30 transition-all outline-none shrink-0"
                >
                  <span>Claim Website Offer (₹10,999)</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>

              {/* Scope & Inclusions List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Up to 5 Custom High-End Pages</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Home, Services, Portfolio, About Us, and Contact page engineered with modern typography, dark/light aesthetics, and zero template feel.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>1 Year Cloud Hosting & SSL Included</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Zero hidden hosting charges for 12 full months. Global CDN delivery and automatic SSL encryption for maximum reliability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Google SEO & Local Maps Indexing</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Full Google Search Console setup, XML sitemap generation, structured Schema.org markup, and Google Business Profile alignment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Click-to-WhatsApp & Direct Lead Triggers</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Optimized conversion buttons that route interested visitors directly into your WhatsApp and business phone numbers.
                  </p>
                </div>
              </div>

              {/* Exclusive Festive Bonus Callout */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-rose-600/10 to-amber-500/15 border border-amber-400/40 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF65] uppercase">
                    COMPLIMENTARY DIWALI BONUS INCLUDED
                  </span>
                </div>
                <h5 className="text-base font-bold text-white uppercase font-sans">
                  1 Free AI Cinematic Reel + 2 Custom Instagram Creative Posts
                </h5>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  You don&apos;t just get a website — you get the creative assets to announce your new launch on social media with studio-quality presentation!
                </p>
              </div>

              {/* Turnaround & Terms */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 border-t border-white/10 pt-4 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Turnaround Time: <strong>5 to 7 Business Days</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Direct consultation with <strong>Sobhit Jaiswal</strong></span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
