"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ArrowRight, Video, Globe, CheckCircle2 } from "lucide-react";
import { getCampaignTimeRemaining } from "./diwali-utils";

export default function DiwaliWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or dismissed the welcome modal in this session
    const seen = sessionStorage.getItem("dgenz_diwali_welcome_seen");
    const campaignTime = getCampaignTimeRemaining();

    // Only display if campaign is not expired and user hasn't seen it yet
    if (!seen && !campaignTime.isExpired) {
      // Small delay of 800ms for graceful entrance after initial page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("dgenz_diwali_welcome_seen", "true");
  };

  const handleExploreOffers = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDismiss();
    setTimeout(() => {
      const target = document.getElementById("diwali-specials");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="diwali-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#09090D] border border-amber-500/35 rounded-2xl shadow-2xl z-10 text-white p-6 sm:p-8 overflow-hidden select-none"
        >
          {/* Subtle Festive Ambient Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            aria-label="Close Diwali announcement"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-amber-400/50 transition-colors z-20 outline-none"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Brand Header & Animated Diya Flame */}
          <div className="flex items-center gap-3 mb-5">
            {/* Animated Diya Lamp Icon */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-500/10">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current text-[#D4AF65]">
                {/* Diya Bowl */}
                <path
                  d="M4 14c0 4.418 3.582 8 8 8s8-3.582 8-8H4z"
                  fill="url(#diwali-gold-gradient)"
                  stroke="#D4AF65"
                  strokeWidth="1.2"
                />
                {/* Diya Flame */}
                <path
                  d="M12 2c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 7 13.5 4.5 12 2z"
                  fill="#FFAE00"
                  className="animate-pulse origin-bottom"
                />
                <defs>
                  <linearGradient id="diwali-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF65" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C0392B" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block">
                DGEN Z FESTIVE CAMPAIGN 2026
              </span>
              <span className="text-xs font-bold text-white font-sans tracking-wide">
                LIMITED-TIME FESTIVE SPECIALS
              </span>
            </div>
          </div>

          {/* Headline & Supporting Copy */}
          <div className="space-y-2 mb-6">
            <h2
              id="diwali-modal-title"
              className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-sans leading-snug"
            >
              THIS DIWALI, GIVE YOUR BUSINESS A{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-[#D90429] bg-clip-text text-transparent">
                BIGGER DIGITAL PRESENCE
              </span>
              .
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              Discover exclusive festive offers on cinematic promotional videos and professional business websites.
            </p>
          </div>

          {/* Two Offer Preview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {/* Offer 1 Card */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  OFFER 01
                </span>
                <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-white">
                  FROM ₹2,000
                </span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase font-sans">
                AI Cinematic Video Ads
              </h4>
              <p className="text-[11px] text-neutral-400 leading-tight">
                Turn plain product photos into 4K scroll-stopping cinematic reels in 24–48h.
              </p>
            </div>

            {/* Offer 2 Card */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-rose-500/20 space-y-1.5 hover:border-rose-500/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-rose-400 uppercase font-semibold flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  OFFER 02
                </span>
                <span className="text-[10px] font-mono bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                  ₹10,999 ONLY
                </span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase font-sans">
                Diwali Website Development
              </h4>
              <p className="text-[11px] text-neutral-400 leading-tight">
                5 Pages + 1 Yr Cloud Host + SEO Indexing + Free AI Reel (Save 63%).
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleExploreOffers}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-[#D90429] to-rose-700 hover:opacity-90 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 transition-all outline-none"
            >
              <span>Explore Diwali Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-colors outline-none"
            >
              Explore Website
            </button>
          </div>

          {/* Bottom subtle note */}
          <p className="text-[10px] font-mono text-neutral-500 text-center mt-4">
            Campaign active Oct 30 – Nov 8, 2026 · Limited client slots available
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
