"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Check } from "lucide-react";
import { getCampaignTimeRemaining } from "./diwali-utils";

export default function DiwaliWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or dismissed the welcome modal in this session
    const seen = sessionStorage.getItem("dgenz_diwali_growth_modal_seen");
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
    sessionStorage.setItem("dgenz_diwali_growth_modal_seen", "true");
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
          className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#C6A15B]/35 rounded-[12px] shadow-2xl z-10 text-white p-7 sm:p-8 overflow-hidden select-none"
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            aria-label="Close Diwali announcement"
            className="absolute top-5 right-5 p-2 rounded-[6px] bg-white/5 border border-white/10 text-[#A3A3A3] hover:text-white transition-colors z-20 outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Eyebrow / Brand label */}
          <div className="relative z-10 flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
              DGEN Z / FESTIVE CAMPAIGN 2026
            </span>
          </div>

          {/* Festive Headline */}
          <div className="relative z-10 space-y-2.5 mb-6">
            <h2
              id="diwali-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF] font-sans leading-tight pr-6"
            >
              This Diwali, Give Your Business A{" "}
              <span className="text-[#ED1C24]">Bigger Digital Presence.</span>
            </h2>
            <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
              Three targeted festive packages engineered to establish authority, drive customer orders, and scale your brand visibility.
            </p>
          </div>

          {/* Mini Inclusions Snapshot */}
          <div className="relative z-10 space-y-2.5 mb-6 border-y border-[#242424] py-4 text-xs font-mono">
            <div className="flex items-center justify-between text-[#FFFFFF]">
              <span className="text-[#A3A3A3]">01 / BUSINESS WEBSITE LAUNCH</span>
              <span className="text-[#ED1C24] font-semibold">30% OFF</span>
            </div>
            <div className="flex items-center justify-between text-[#FFFFFF]">
              <span className="text-[#A3A3A3]">02 / SMART DIGITAL CATALOGUE</span>
              <span className="text-[#C6A15B] font-semibold">10% OFF</span>
            </div>
            <div className="flex items-center justify-between text-[#FFFFFF]">
              <span className="text-[#A3A3A3]">03 / DIWALI DESIGN DEAL</span>
              <span className="text-white font-semibold">7% OFF (+5% NEXT)</span>
            </div>
          </div>

          {/* Two Primary Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExploreOffers}
              className="flex-1 py-3 px-5 rounded-[8px] bg-[#ED1C24] hover:bg-[#c9141b] text-white font-sans text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer outline-none"
            >
              <span>Explore Diwali Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDismiss}
              className="py-3 px-5 rounded-[8px] border border-[#242424] hover:border-white/30 text-[#A3A3A3] hover:text-white font-sans text-sm font-medium transition-colors cursor-pointer outline-none"
            >
              Explore Website
            </button>
          </div>

          {/* Availability Footer */}
          <div className="relative z-10 mt-4 text-center">
            <span className="text-[10px] font-mono text-[#A3A3A3]/70 uppercase tracking-widest">
              OFFER PERIOD · 31 OCT – 8 NOV 2026 (IST)
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
