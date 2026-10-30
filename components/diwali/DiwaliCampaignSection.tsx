"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Send, X } from "lucide-react";
import { buildWhatsAppLink, WA_MESSAGES } from "./diwali-utils";
import DiwaliPosterArt from "./DiwaliPosterArt";
import DiwaliOfferDetailsModal from "./DiwaliOfferDetailsModal";

export default function DiwaliCampaignSection() {
  const [selectedOffer, setSelectedOffer] = useState<"video" | "website" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isArtworkLightboxOpen, setIsArtworkLightboxOpen] = useState(false);
  const [lightboxPosterType, setLightboxPosterType] = useState<"video" | "website">("video");

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
      aria-label="DGEN Z Festive Collection 2026"
      className="w-full py-20 sm:py-28 bg-[#080808] border-y border-white/[0.08] scroll-mt-24 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="flex flex-col items-start space-y-4 max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow text */}
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A3A3A3] font-medium">
            DGEN Z / FESTIVE COLLECTION 2026
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-[1.1]">
            Make This <span className="text-[#E31837]">Diwali</span> Count for Your Business.
          </h2>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed pt-1">
            Two exclusive festive offers designed to help businesses create attention-grabbing content and build a stronger digital presence.
          </p>

          {/* Understated Availability Label */}
          <div className="pt-2">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] border border-white/[0.12] px-3 py-1.5 rounded-[6px] bg-[#111111]">
              OFFER PERIOD · 30 OCT – 8 NOV 2026
            </span>
          </div>
        </div>

        {/* =========================================================
            TWO PREMIUM OFFER CARDS (Side-by-side Desktop, Stacked Mobile)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* =======================================================
              OFFER 01: CONTENT CREATION
          ======================================================= */}
          <div className="bg-[#111111] border border-white/[0.12] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:border-white/20">
            <div className="space-y-5">
              
              {/* Category */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                  01 / CONTENT CREATION
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-white/5 text-[#A3A3A3] border border-white/[0.08]">
                  24–48H DELIVERY
                </span>
              </div>

              {/* Poster Artwork Container */}
              <div
                className="relative cursor-pointer"
                onClick={() => openArtworkLightbox("video")}
              >
                <DiwaliPosterArt
                  type="video"
                  onExpand={() => openArtworkLightbox("video")}
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-2 pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-snug">
                  Turn Product Photos Into Cinematic Video Ads.
                </h3>
                <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
                  Transform your existing product photography into cinematic promotional videos designed to capture attention on Instagram and other digital platforms.
                </p>
              </div>

              {/* Package Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Spotlight Package */}
                <div className="p-4 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3]">
                      THE SPOTLIGHT
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1AA]">2 REELS</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">₹2,000</div>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                    2 AI cinematic reels (10–18s) + 2 Instagram posts
                  </p>
                </div>

                {/* Brand Package */}
                <div className="p-4 rounded-[8px] bg-[#0A0A0A] border border-[#E31837]/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E31837] font-semibold">
                      THE BRAND
                    </span>
                    <span className="text-[9px] font-mono uppercase text-[#E31837] bg-[#E31837]/10 px-1.5 py-0.5 rounded font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">₹2,399</div>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                    3 AI reels (10–20s) + 3 posts + captions + collab
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("video-packages");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    openOfferModal("video");
                  }
                }}
                className="flex-1 py-3 px-5 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-[#FFFFFF] font-sans text-sm font-semibold text-center transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>View Video Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppLink(WA_MESSAGES.videoOffer)}
                target="_blank"
                rel="no-referrer"
                className="py-3 px-4 rounded-[8px] border border-white/[0.12] hover:border-white/30 text-[#A3A3A3] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-center transition-colors duration-150 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <span>Inquire on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* =======================================================
              OFFER 02: WEBSITE DEVELOPMENT
          ======================================================= */}
          <div className="bg-[#111111] border border-white/[0.12] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:border-white/20">
            <div className="space-y-5">
              
              {/* Category */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                  02 / WEBSITE DEVELOPMENT
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-white/5 text-[#E31837] border border-white/[0.08] font-semibold">
                  SAVE 63% (₹19,000 OFF)
                </span>
              </div>

              {/* Poster Artwork Container */}
              <div
                className="relative cursor-pointer"
                onClick={() => openArtworkLightbox("website")}
              >
                <DiwaliPosterArt
                  type="website"
                  onExpand={() => openArtworkLightbox("website")}
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-2 pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-snug">
                  Your Business Deserves More Than an Instagram Page.
                </h3>
                <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
                  Build a professional online presence with a business website designed to showcase your services, establish trust, and help potential customers contact you.
                </p>
              </div>

              {/* Pricing & Key Highlights */}
              <div className="p-4 rounded-[8px] bg-[#0A0A0A] border border-white/[0.08] space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-mono line-through text-[#A3A3A3] block">
                      REGULAR ₹29,999
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#FFFFFF]">₹10,999</span>
                      <span className="text-[10px] font-mono text-[#A3A3A3] uppercase">
                        All-Inclusive Festive Rate
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#A3A3A3] bg-white/5 px-2 py-1 rounded-[4px] border border-white/[0.08]">
                    5–7 Days Delivery
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#A3A3A3] pt-1 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
                    <span>5 Custom Pages</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
                    <span>1 Year Cloud Hosting & SSL</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
                    <span>Google SEO & Maps Setup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E31837] shrink-0" />
                    <span>WhatsApp Direct Leads</span>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-[#A3A3A3] border-t border-white/[0.06] flex items-center gap-2">
                  <span className="text-[#E31837] font-semibold text-[10px] font-mono uppercase">
                    BONUS:
                  </span>
                  <span>Includes 1 Free AI Video Reel + 2 Custom Social Graphics</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openOfferModal("website")}
                className="flex-1 py-3 px-5 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-[#FFFFFF] font-sans text-sm font-semibold text-center transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>Explore Website Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppLink(WA_MESSAGES.websiteOffer)}
                target="_blank"
                rel="no-referrer"
                className="py-3 px-4 rounded-[8px] border border-white/[0.12] hover:border-white/30 text-[#A3A3A3] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-center transition-colors duration-150 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <span>Inquire on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* =========================================================
            DEDICATED VIDEO PACKAGE CARDS SECTION
        ========================================================= */}
        <div id="video-packages" className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-white/[0.08] scroll-mt-24">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A3A3A3] font-semibold">
                  VIDEO FESTIVE PACKAGES · DIWALI 2026
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-tight">
                Two Video Packages. <span className="text-[#E31837]">Cinematic Quality.</span>
              </h3>
              <p className="text-sm text-[#A1A1AA] font-sans leading-relaxed">
                Choose the package that fits your campaign goals. All packages are produced with high-retention AI motion and delivered ready for Instagram Reels and Meta Ads.
              </p>
            </div>
          </div>

          {/* TWO VIDEO PACKAGE CARDS (Side-by-side Desktop, Stacked Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* =======================================================
                PACKAGE 01 — THE SPOTLIGHT
            ======================================================= */}
            <div className="bg-[#0A0A0A] border border-white/[0.12] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/25 transition-all duration-200">
              <div className="space-y-5">
                
                {/* Meta Top Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                    PACKAGE 01
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-[4px]">
                    Video Festive Rate
                  </span>
                </div>

                {/* Title & Price */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FFFFFF] font-sans">
                    THE SPOTLIGHT
                  </h4>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] font-sans">₹2,000</span>
                    <span className="text-xs font-mono text-[#A1A1AA]">/ Video Festive Rate</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] font-sans leading-relaxed">
                  Perfect for emerging brands and businesses looking to showcase their products through cinematic promotional content.
                </p>

                {/* Inclusions */}
                <div className="space-y-3.5 pt-4 border-t border-white/[0.08] text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">2 AI cinematic product/promotional reels (10–18 seconds each)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">2 Instagram posts</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#A1A1AA]/60">
                    <X className="w-4 h-4 text-[#A1A1AA]/50 shrink-0 mt-0.5" />
                    <span>Captions and hashtag research NOT included</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#A1A1AA]/60">
                    <X className="w-4 h-4 text-[#A1A1AA]/50 shrink-0 mt-0.5" />
                    <span>Instagram Collab Reel NOT included</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.videoSpotlight)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-4 px-6 rounded-[8px] bg-white/10 hover:bg-white/20 text-[#FFFFFF] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                >
                  <span>BOOK THE SPOTLIGHT (₹2,000)</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* =======================================================
                PACKAGE 02 — THE BRAND
            ======================================================= */}
            <div className="bg-[#0A0A0A] border border-[#E31837]/40 rounded-[12px] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#E31837]/70 transition-all duration-200 relative">
              <div className="space-y-5">
                
                {/* Meta Top Row: Package number & Recommended Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                    PACKAGE 02
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#E31837] bg-[#E31837]/10 border border-[#E31837]/30 px-2.5 py-1 rounded-[4px] font-bold">
                    RECOMMENDED PACKAGE
                  </span>
                </div>

                {/* Title & Price */}
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FFFFFF] font-sans">
                      THE BRAND
                    </h4>
                    <span className="text-[10px] font-mono uppercase text-[#A1A1AA] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-[4px]">
                      Video Festive Rate
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] font-sans">₹2,399</span>
                    <span className="text-xs font-mono text-[#A1A1AA]">/ Video Festive Rate</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] font-sans leading-relaxed">
                  For brands that need more content to showcase their products and promote their business.
                </p>

                {/* Inclusions */}
                <div className="space-y-3.5 pt-4 border-t border-white/[0.08] text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF] font-medium">3 AI cinematic product/promotional reels (10–20 seconds each)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">3 Instagram creative posts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">Captions and relevant hashtags for all 6 content pieces</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">1 Instagram Reel collaboration</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.videoBrand)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-4 px-6 rounded-[8px] bg-[#E31837] hover:bg-[#c4122d] text-[#FFFFFF] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E31837]/20 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                >
                  <span>BOOK THE BRAND (₹2,399)</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
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
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-2xl w-full z-10"
              >
                <div className="flex justify-end pb-3">
                  <button
                    onClick={() => setIsArtworkLightboxOpen(false)}
                    className="p-2 rounded-[6px] bg-[#111111] border border-white/[0.12] text-[#A3A3A3] hover:text-white transition-colors"
                    aria-label="Close artwork preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <DiwaliPosterArt type={lightboxPosterType} isLightbox className="shadow-2xl" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
