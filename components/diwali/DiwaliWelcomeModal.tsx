"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { getCampaignTimeRemaining } from "./diwali-utils";

export default function DiwaliWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or dismissed the welcome modal in this session
    const seen = sessionStorage.getItem("dgenz_diwali_welcome_seen");
    const campaignTime = getCampaignTimeRemaining();

    // Trigger once per session if not dismissed and campaign is active
    if (!seen && !campaignTime.isExpired) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
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
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card with subtle gold border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#111111] border border-[#D4AF65]/35 rounded-[14px] shadow-2xl z-10 text-white p-7 sm:p-9 overflow-hidden select-none"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            aria-label="Close Diwali announcement"
            className="absolute top-5 right-5 p-2 rounded-[6px] bg-white/5 border border-white/10 text-[#A3A3A3] hover:text-white transition-colors z-20 outline-none"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Eyebrow / Brand label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF65]" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF65] font-medium">
              DGEN Z / FESTIVE COLLECTION 2026
            </span>
          </div>

          {/* Festive Headline */}
          <div className="space-y-3 mb-6">
            <h2
              id="diwali-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF] font-sans leading-tight pr-6"
            >
              Make This <span className="text-[#E31837]">Diwali</span> Count for Your Business.
            </h2>
            <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
              Two exclusive festive offers designed to help businesses create attention-grabbing content and build a stronger digital presence.
            </p>
          </div>

          {/* Mini Inclusions Snapshot */}
          <div className="space-y-2 mb-8 border-y border-white/[0.08] py-4 text-xs font-mono">
            <div className="flex items-center justify-between text-[#FFFFFF]">
              <span className="text-[#A3A3A3]">01 / AI CINEMATIC VIDEO ADS</span>
              <span className="font-semibold">STARTS ₹2,000</span>
            </div>
            <div className="flex items-center justify-between text-[#FFFFFF]">
              <span className="text-[#A3A3A3]">02 / BUSINESS WEBSITE</span>
              <span className="text-[#E31837] font-semibold">₹10,999 (SAVE 63%)</span>
            </div>
          </div>

          {/* Two Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExploreOffers}
              className="flex-1 py-3 px-5 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-white font-sans text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer outline-none"
            >
              <span>Explore Diwali Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDismiss}
              className="py-3 px-5 rounded-[8px] border border-white/[0.15] hover:border-white/30 text-[#A3A3A3] hover:text-white font-sans text-sm font-medium transition-colors cursor-pointer outline-none"
            >
              Explore Website
            </button>
          </div>

          {/* Subtle Availability Footer */}
          <div className="mt-4 text-center">
            <span className="text-[10px] font-mono text-[#A3A3A3]/70 uppercase tracking-widest">
              OFFER PERIOD · 30 OCT – 8 NOV 2026
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
