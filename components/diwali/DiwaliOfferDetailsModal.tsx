"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Check,
  Send,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Layers,
  Sparkles
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
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/[0.12] rounded-[14px] shadow-2xl z-10 text-white p-6 sm:p-10 select-text"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-[6px] bg-white/5 border border-white/10 text-[#A3A3A3] hover:text-white transition-colors z-20 outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Offer 01: Video Ads Modal Content */}
          {offerType === "video" ? (
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-3 pr-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                    01 / CONTENT CREATION · DIWALI 2026
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white leading-tight">
                  Turn Product Photos Into <span className="text-[#E31837]">Cinematic Video Ads</span>.
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed">
                  Transform your existing product photography into cinematic promotional videos designed to capture attention on Instagram and other digital platforms.
                </p>
              </div>

              {/* Package Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Package 1: The Spotlight */}
                <div className="p-6 rounded-[10px] bg-[#0A0A0A] border border-white/[0.08] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest uppercase text-[#A3A3A3]">
                        PACKAGE 01
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#A3A3A3]">
                        10–15 SECONDS
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
                        THE SPOTLIGHT
                      </h4>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white font-sans">₹2,000</span>
                        <span className="text-xs font-mono text-[#A3A3A3]">/ video festive rate</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      Perfect for emerging direct-to-consumer brands, bakeries, cafes, and boutiques wanting high-retention video reels quickly.
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-white/[0.08] text-xs text-[#A3A3A3]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span className="text-white">1 High-Impact AI Cinematic Video Reel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>3D Camera Pan & Dynamic Lighting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>Trending commercial audio track</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>Formatted for 9:16 Instagram Reels & Shorts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>1 Complimentary Revision</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.videoSpotlight)}
                    target="_blank"
                    rel="no-referrer"
                    className="w-full py-3 px-4 rounded-[8px] bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book The Spotlight (₹2,000)</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Package 2: The Brand */}
                <div className="p-6 rounded-[10px] bg-[#0A0A0A] border border-[#E31837]/40 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest uppercase text-[#E31837] font-semibold">
                        PACKAGE 02 · RECOMMENDED
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#E31837]/10 text-[#E31837] border border-[#E31837]/20 text-[10px] font-mono font-bold">
                        15–30 SECONDS
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
                        THE BRAND
                      </h4>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white font-sans">₹2,399</span>
                        <span className="text-xs font-mono text-[#A3A3A3]">/ video festive rate</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      Engineered for high-ticket products, restaurants, luxury jewellery, and apparel looking to drive immediate customer orders.
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-white/[0.08] text-xs text-[#A3A3A3]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span className="text-white font-medium">Multi-Angle Cinematic Camera Movements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span className="text-white">Studio Grade AI Voiceover narration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>Dynamic captions & kinetic text overlays</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>Mastered in 4K 60FPS for Meta Ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E31837] shrink-0" />
                        <span>2 Full Revisions included</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.videoBrand)}
                    target="_blank"
                    rel="no-referrer"
                    className="w-full py-3 px-4 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-white font-sans text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book The Brand (₹2,399)</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* What We Need From You */}
              <div className="p-5 rounded-[10px] bg-[#0A0A0A] border border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono text-[#E31837] uppercase tracking-wider font-semibold block">
                  SIMPLE ONBOARDING PROCESS
                </span>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Send us 1 to 3 clear photos of your product, any key selling points or offers you want highlighted, and your brand logo. We handle the 3D depth extraction, motion animation, lighting, sound, and delivery in 24–48 hours.
                </p>
              </div>
            </div>
          ) : (
            /* Offer 02: Website Development Modal Content */
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-3 pr-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                    02 / WEBSITE DEVELOPMENT · DIWALI 2026
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white leading-tight">
                  Your Business Deserves More Than <span className="text-[#E31837]">an Instagram Page</span>.
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed">
                  Build a professional online presence with a business website designed to showcase your services, establish trust, and help potential customers contact you.
                </p>
              </div>

              {/* Pricing & Summary Card */}
              <div className="p-6 rounded-[10px] bg-[#0A0A0A] border border-white/[0.12] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono line-through text-[#A3A3A3] uppercase block">
                    ORIGINAL PRICE ₹29,999
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-bold text-white font-sans">₹10,999</span>
                    <span className="text-xs font-mono text-[#E31837] font-semibold uppercase">
                      SAVE 63% (₹19,000 OFF)
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A3A3A3] block mt-1">
                    Complete all-inclusive package with zero hidden charges.
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#A3A3A3] uppercase block">
                    PROJECT TIMELINE
                  </span>
                  <span className="text-sm font-mono font-bold text-white">5–7 BUSINESS DAYS</span>
                </div>
              </div>

              {/* Complete Inclusions List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3]">
                  WHAT&apos;S INCLUDED IN THE ₹10,999 PACKAGE
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#A3A3A3]">
                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">5 Custom High-End Pages</strong>
                      <span>Home, About, Services/Products, Showcase/Portfolio, and Contact.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">1 Year Cloud Hosting & SSL</strong>
                      <span>Enterprise speed, 99.99% uptime, automated backups and SSL certificate.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Google SEO & Local Maps Indexing</strong>
                      <span>Schema markup and Google Search indexing to get discovered by local buyers.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Click-to-WhatsApp Lead Triggers</strong>
                      <span>Direct lead conversion triggers sending inquiries straight to your phone.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Mobile & Tablet Responsive</strong>
                      <span>Flawless experience across iPhone, Android, tablets, and desktop displays.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[8px] bg-[#0A0A0A] border border-[#E31837]/30 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#E31837] block font-medium">Diwali Bonus Included</strong>
                      <span>1 Free AI Cinematic Video Reel + 2 Custom Instagram Creative Posts.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.websiteOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-4 px-6 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-white font-sans text-sm font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Claim Website Offer on WhatsApp (₹10,999)</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
