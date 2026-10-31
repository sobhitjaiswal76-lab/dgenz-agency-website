"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Send,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Instagram,
  CheckCircle2,
  Clock,
  Layers,
  Palette,
  Maximize2
} from "lucide-react";
import {
  buildWhatsAppLink,
  CAMPAIGN_TERMS,
  COMPARISON_ROWS,
  DIWALI_CAMPAIGN_OFFERS,
  DiwaliOfferItem,
  getCampaignTimeRemaining,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WA_MESSAGES
} from "./diwali-utils";
import DiwaliPosterArt from "./DiwaliPosterArt";
import DiwaliOfferDetailsModal from "./DiwaliOfferDetailsModal";

export default function DiwaliCampaignSection() {
  const [selectedOffer, setSelectedOffer] = useState<"website" | "catalogue" | "design" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isArtworkLightboxOpen, setIsArtworkLightboxOpen] = useState(false);
  const [lightboxPosterType, setLightboxPosterType] = useState<"website" | "catalogue" | "design">("website");
  
  // Accordion state for Campaign Terms (null = all collapsed, number = active index)
  const [activeTermIndex, setActiveTermIndex] = useState<number | null>(0);

  const campaignTime = getCampaignTimeRemaining();

  const openOfferModal = (type: "website" | "catalogue" | "design") => {
    setSelectedOffer(type);
    setIsModalOpen(true);
  };

  const openArtworkLightbox = (type: "website" | "catalogue" | "design") => {
    setLightboxPosterType(type);
    setIsArtworkLightboxOpen(true);
  };

  const handleScrollToGrid = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("diwali-offers-grid");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="diwali-specials"
      aria-label="DGEN Z Diwali Business Growth Offers 2026"
      className="w-full py-16 sm:py-24 bg-[#080808] border-y border-[#242424] text-white scroll-mt-20 select-none overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* =========================================================
            SECTION 1: PREMIUM DIWALI HERO
            2-Column Layout (Desktop) / Stacked (Mobile)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-24 border-b border-[#242424]">
          
          {/* Left Column (Content & Action) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow text */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A3A3A3] font-semibold">
                DGEN Z / FESTIVE CAMPAIGN 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black font-sans uppercase tracking-tight text-[#FFFFFF] leading-[1.08] [text-wrap:balance]">
              THIS DIWALI, GIVE YOUR BUSINESS A{" "}
              <span className="text-[#ED1C24]">BIGGER DIGITAL PRESENCE.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed max-w-xl">
              Elevate your business footprint during peak festive momentum. We’ve designed three targeted growth packages combining custom digital architecture, high-converting product catalogues, and editorial brand design to help you turn festive attention into enduring customer revenue.
            </p>

            {/* 3 Compact Service Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["Websites", "Digital Catalogues", "Creative Design"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-[4px] bg-[#121212] border border-[#242424] text-[11px] font-mono text-[#D4D4D4] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#diwali-offers-grid"
                onClick={handleScrollToGrid}
                className="py-3.5 px-6 rounded-[6px] bg-[#ED1C24] hover:bg-[#c9141b] text-[#FFFFFF] font-sans text-sm font-bold uppercase tracking-wider text-center transition-colors duration-150 flex items-center justify-center gap-2 shadow-lg shadow-[#ED1C24]/15 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>EXPLORE DIWALI OFFERS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppLink(WA_MESSAGES.generalOffer)}
                target="_blank"
                rel="no-referrer"
                className="py-3.5 px-6 rounded-[6px] bg-[#121212] hover:bg-[#181818] border border-[#242424] hover:border-white/30 text-[#FFFFFF] font-sans text-sm font-semibold tracking-wide text-center transition-colors duration-150 flex items-center justify-center gap-2 outline-none"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <Send className="w-4 h-4 text-[#A3A3A3]" />
              </a>
            </div>
          </div>

          {/* Right Column: Restrained Festive Visual Composition */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[12px] bg-[#0E0E0E] border border-[#242424] p-6 sm:p-8 overflow-hidden group">
              
              {/* Subtle background ambient reflections (Gold & Red accents, restrained) */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#ED1C24]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Architectural grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Campaign Dates Tag */}
                <div className="flex items-center justify-between border-b border-[#242424] pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] block">
                      OFFICIAL CAMPAIGN WINDOW
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white font-bold tracking-wider">
                      31 OCT – 8 NOV 2026
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-[4px] bg-[#161616] border border-[#C6A15B]/30 text-[10px] font-mono text-[#C6A15B] font-semibold uppercase">
                    IST ACTIVE
                  </span>
                </div>

                {/* Refined Diya & Light Graphic Element */}
                <div className="py-2 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#C6A15B]/40 bg-[#141414] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(198,161,91,0.15)]">
                    {/* Minimalist modern flame icon */}
                    <div className="w-3 h-5 rounded-full bg-gradient-to-t from-[#ED1C24] via-[#C6A15B] to-amber-200 shadow-[0_0_8px_#C6A15B]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white font-sans uppercase tracking-wide">
                      Festive Momentum Studio Sprints
                    </h3>
                    <p className="text-xs text-[#A3A3A3] font-sans leading-relaxed">
                      Limited project intake during Diwali to guarantee white-glove execution, on-time launch, and strategic impact.
                    </p>
                  </div>
                </div>

                {/* 3 Offer Snapshot Badges */}
                <div className="space-y-2 pt-2 border-t border-[#242424]">
                  <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded bg-[#121212] border border-[#242424]">
                    <span className="text-[#A3A3A3]">01 / BUSINESS WEBSITE</span>
                    <span className="text-[#ED1C24] font-bold">30% OFF</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded bg-[#121212] border border-[#242424]">
                    <span className="text-[#A3A3A3]">02 / SMART CATALOGUE</span>
                    <span className="text-[#C6A15B] font-bold">10% OFF</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded bg-[#121212] border border-[#242424]">
                    <span className="text-[#A3A3A3]">03 / CREATIVE DESIGN</span>
                    <span className="text-white font-bold">7% OFF (+5% NEXT)</span>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="text-[10px] font-mono text-[#A3A3A3] text-center pt-1">
                  Enquiries handled directly via WhatsApp with founder Sobhit Jaiswal.
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* =========================================================
            SECTION 2: THREE CONSISTENT OFFER CARDS
            Grid: 3 Columns on Large Desktop, Stacked on Mobile
        ========================================================= */}
        <div id="diwali-offers-grid" className="pt-16 sm:pt-24 scroll-mt-24">
          
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A3A3A3] font-semibold">
                FESTIVE PACKAGES · DIWALI 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-tight">
              Three Curated Packages. <span className="text-[#ED1C24]">Measurable Growth.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed">
              Every package is built to agency standards with clear deliverables, complimentary bonus assets, and transparent terms.
            </p>
          </div>

          {/* 3 Unified Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            
            {/* -----------------------------------------------------
                CARD 01: BUSINESS WEBSITE LAUNCH (30% OFF)
            ----------------------------------------------------- */}
            <div className="bg-[#0C0C0C] border border-[#242424] hover:border-[#383838] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200">
              <div className="space-y-5">
                
                {/* Meta Top: Category & Core Discount */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] font-semibold">
                    OFFER 01 / DIGITAL PRESENCE
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] font-bold">
                    30% OFF
                  </span>
                </div>

                {/* Poster Artwork Header (object-fit: contain) */}
                <div
                  className="cursor-pointer"
                  onClick={() => openArtworkLightbox("website")}
                >
                  <DiwaliPosterArt
                    type="website"
                    onExpand={() => openArtworkLightbox("website")}
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white leading-snug">
                    BUSINESS WEBSITE LAUNCH
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                    A custom, ultra-fast business website designed to establish brand authority, showcase offerings, and convert visitors into paying clients.
                  </p>
                </div>

                {/* Core Inclusions List */}
                <div className="space-y-2.5 pt-3 border-t border-[#242424] text-xs sm:text-[13px]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block">
                    Core Inclusions
                  </span>
                  <div className="space-y-2">
                    {[
                      "5 Standard Pages (Home, About, Services, Portfolio, Contact)",
                      "Fully responsive, mobile-first design",
                      "WhatsApp & contact integration",
                      "On-page SEO optimization",
                      "Google Search indexing setup",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[#D4D4D4]">
                        <Check className="w-3.5 h-3.5 text-[#ED1C24] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prominent Complimentary Deliverables */}
                <div className="p-3.5 rounded-[6px] bg-[#121212] border border-[#C6A15B]/30 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C6A15B] font-bold">
                      Complimentary Extras Included
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                      <span>1 FREE AI Cinematic Promotional Reel</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                      <span>3 FREE Instagram Creative Posts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                      <span>6 Months FREE Website Maintenance</span>
                    </div>
                  </div>
                </div>

                {/* Conditional Extra Discount Strip */}
                <div className="p-3.5 rounded-[6px] bg-[#0E0E0E] border border-[#242424] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      UNLOCK AN EXTRA 10% OFF
                    </span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="no-referrer"
                      className="text-[10px] font-mono text-[#ED1C24] hover:underline inline-flex items-center gap-1"
                    >
                      <Instagram className="w-3 h-3" />
                      <span>{INSTAGRAM_HANDLE}</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                    1. Follow DGEN Z on Instagram + 2. Post a Reel featuring your new website or experience with DGEN Z, tagging our account.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#242424]">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.websiteOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-3.5 px-5 rounded-[6px] bg-[#ED1C24] hover:bg-[#c9141b] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#ED1C24]/15 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
                >
                  <span>CLAIM WEBSITE OFFER</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* -----------------------------------------------------
                CARD 02: SMART DIGITAL CATALOGUE (10% OFF)
            ----------------------------------------------------- */}
            <div className="bg-[#0C0C0C] border border-[#242424] hover:border-[#383838] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200">
              <div className="space-y-5">
                
                {/* Meta Top: Category & Core Discount */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] font-semibold">
                    OFFER 02 / DIGITAL CATALOGUE
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] font-bold">
                    10% OFF
                  </span>
                </div>

                {/* Poster Artwork Header (object-fit: contain) */}
                <div
                  className="cursor-pointer"
                  onClick={() => openArtworkLightbox("catalogue")}
                >
                  <DiwaliPosterArt
                    type="catalogue"
                    onExpand={() => openArtworkLightbox("catalogue")}
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white leading-snug">
                    SMART DIGITAL CATALOGUE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                    An interactive, shareable digital catalogue designed for seamless product showcases and fast mobile customer ordering without cumbersome PDFs.
                  </p>
                </div>

                {/* Core Inclusions List */}
                <div className="space-y-2.5 pt-3 border-t border-[#242424] text-xs sm:text-[13px]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block">
                    Core Inclusions
                  </span>
                  <div className="space-y-2">
                    {[
                      "Shareable link format (zero PDF downloads)",
                      "Complete product details & high-res images",
                      "Structured categorized product sections",
                      "Mobile-friendly browsing experience",
                      "Direct WhatsApp / Call ordering integration",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[#D4D4D4]">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complimentary Extras */}
                <div className="p-3.5 rounded-[6px] bg-[#121212] border border-[#C6A15B]/30 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C6A15B] font-bold">
                      Complimentary Extras Included
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                      <span>1 FREE AI Cinematic Promotional Reel</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                      <span>1 FREE Instagram Creative Post</span>
                    </div>
                  </div>
                </div>

                {/* Additional Discount: Follow & Save 5% */}
                <div className="p-3.5 rounded-[6px] bg-[#0E0E0E] border border-[#242424] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      FOLLOW & SAVE AN EXTRA 5%
                    </span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="no-referrer"
                      className="text-[10px] font-mono text-[#C6A15B] hover:underline inline-flex items-center gap-1"
                    >
                      <Instagram className="w-3 h-3" />
                      <span>{INSTAGRAM_HANDLE}</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                    Follow DGEN Z on Instagram (@dgenz.studio) to immediately unlock an additional 5% off your catalogue build.
                  </p>
                </div>

                {/* Ideal For Pill List */}
                <div className="pt-2 border-t border-[#242424] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block">
                    Ideal For
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Bakeries",
                      "Sweet Shops",
                      "Boutiques",
                      "Jewellery Brands",
                      "Retailers",
                      "Wholesalers",
                      "Gift Hamper Businesses",
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#161616] border border-[#242424] text-[10px] font-mono text-[#A3A3A3]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#242424]">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.catalogueOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-3.5 px-5 rounded-[6px] bg-[#161616] hover:bg-[#202020] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-2 focus:ring-[#C6A15B]/40"
                >
                  <span>CLAIM CATALOGUE OFFER</span>
                  <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                </a>
              </div>
            </div>

            {/* -----------------------------------------------------
                CARD 03: DIWALI DESIGN DEAL (7% OFF)
            ----------------------------------------------------- */}
            <div className="bg-[#0C0C0C] border border-[#242424] hover:border-[#383838] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200">
              <div className="space-y-5">
                
                {/* Meta Top: Category & Core Discount */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] font-semibold">
                    OFFER 03 / CREATIVE DESIGN
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 border border-white/20 text-white font-bold">
                    7% OFF
                  </span>
                </div>

                {/* Poster Artwork Header (object-fit: contain) */}
                <div
                  className="cursor-pointer"
                  onClick={() => openArtworkLightbox("design")}
                >
                  <DiwaliPosterArt
                    type="design"
                    onExpand={() => openArtworkLightbox("design")}
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white leading-snug">
                    DIWALI DESIGN DEAL
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                    Editorial visual assets and commercial print collateral crafted to command attention across both digital and physical touchpoints.
                  </p>
                </div>

                {/* Eligible Design Services (2-col grid desktop / 1-col mobile) */}
                <div className="space-y-2.5 pt-3 border-t border-[#242424] text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block">
                    Eligible Design Services (Choose Any)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Poster Design",
                      "Business Card Design",
                      "Invitation Card Design",
                      "Logo Design",
                      "Banner Design",
                      "Standee Design",
                      "Menu Design",
                    ].map((svc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded bg-[#121212] border border-[#242424] text-[#D4D4D4] text-[11px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] shrink-0" />
                        <span className="truncate">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Benefits Breakdown */}
                <div className="p-3.5 rounded-[6px] bg-[#121212] border border-white/15 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold block">
                    Customer Benefits
                  </span>
                  <div className="space-y-1.5 text-xs text-[#D4D4D4]">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span>7% OFF on every eligible design order placed during the campaign.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>EXTRA 5% OFF on your NEXT eligible design order.</span>
                    </div>
                  </div>
                </div>

                {/* How It Works (1-2-3 Steps) */}
                <div className="p-3.5 rounded-[6px] bg-[#0E0E0E] border border-[#242424] space-y-2 text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block">
                    How It Works
                  </span>
                  <div className="space-y-1.5 text-[11px] text-[#A3A3A3]">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-white font-bold">1.</span>
                      <span>Choose your design service from the list above.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-white font-bold">2.</span>
                      <span>Connect on WhatsApp to share your brief and requirements.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-white font-bold">3.</span>
                      <span>Receive your custom design with festive savings applied.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#242424]">
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.designOffer)}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full py-3.5 px-5 rounded-[6px] bg-[#161616] hover:bg-[#202020] border border-white/20 hover:border-white/40 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
                >
                  <span>CLAIM DESIGN OFFER</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================
            SECTION 3: COMPARISON TABLE
            "FIND THE RIGHT OFFER FOR YOUR BUSINESS"
        ========================================================= */}
        <div className="pt-20 sm:pt-28">
          
          <div className="max-w-2xl mb-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A3A3A3] font-semibold">
                SIDE-BY-SIDE EVALUATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-tight">
              FIND THE RIGHT OFFER FOR YOUR BUSINESS.
            </h2>
            <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
              Compare core discounts, stacked savings potential, complimentary deliverables, and ideal use cases across all three festive tiers.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="rounded-[10px] border border-[#242424] bg-[#0C0C0C] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#242424] bg-[#111111] text-[#A3A3A3] font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-4 px-5 sm:px-6 w-[26%]">Feature / Deliverable</th>
                    <th className="py-4 px-4 sm:px-5 w-[25%] text-white">
                      Offer 01: Business Website
                    </th>
                    <th className="py-4 px-4 sm:px-5 w-[25%] text-white">
                      Offer 02: Digital Catalogue
                    </th>
                    <th className="py-4 px-4 sm:px-5 w-[24%] text-white">
                      Offer 03: Creative Design
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242424] font-sans">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#0E0E0E]"}
                    >
                      <td className="py-4 px-5 sm:px-6 font-mono text-xs text-[#A3A3A3] font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 sm:px-5 text-white font-medium">
                        {row.feature === "Core Discount" ? (
                          <span className="text-[#ED1C24] font-bold text-sm sm:text-base">
                            {row.offer1}
                          </span>
                        ) : (
                          row.offer1
                        )}
                      </td>
                      <td className="py-4 px-4 sm:px-5 text-[#D4D4D4]">
                        {row.feature === "Core Discount" ? (
                          <span className="text-[#C6A15B] font-bold text-sm sm:text-base">
                            {row.offer2}
                          </span>
                        ) : (
                          row.offer2
                        )}
                      </td>
                      <td className="py-4 px-4 sm:px-5 text-[#D4D4D4]">
                        {row.feature === "Core Discount" ? (
                          <span className="text-white font-bold text-sm sm:text-base">
                            {row.offer3}
                          </span>
                        ) : (
                          row.offer3
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Scroll Indicator Notice */}
            <div className="py-2.5 px-4 bg-[#111111] border-t border-[#242424] text-[10px] font-mono text-[#A3A3A3] text-center sm:hidden">
              ← Scroll horizontally to inspect all offer columns →
            </div>
          </div>
        </div>


        {/* =========================================================
            SECTION 4: WHY WORK WITH DGEN Z?
            "MORE THAN JUST DELIVERABLES."
        ========================================================= */}
        <div className="pt-20 sm:pt-28">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A3A3A3] font-semibold">
                AGENCY ADVANTAGE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-tight">
              MORE THAN JUST DELIVERABLES.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-sans leading-relaxed">
              We aren’t a generic template warehouse. DGEN Z combines strategic positioning, high-fashion art direction, and high-performance engineering to build assets that deliver sustainable business value.
            </p>
          </div>

          {/* 3 Core Agency Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Principle 01: Strategy First */}
            <div className="p-6 sm:p-7 rounded-[10px] bg-[#0C0C0C] border border-[#242424] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-[6px] bg-[#141414] border border-[#242424] flex items-center justify-center text-[#ED1C24]">
                <Layers className="w-5 h-5 text-[#ED1C24]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] block">
                01 / FOUNDATION
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                Strategy First
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                Every website, catalogue, or graphic asset we engineer is backed by business positioning and customer psychology—never superficial filler or generic templates.
              </p>
            </div>

            {/* Principle 02: Creative Execution */}
            <div className="p-6 sm:p-7 rounded-[10px] bg-[#0C0C0C] border border-[#242424] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-[6px] bg-[#141414] border border-[#242424] flex items-center justify-center text-[#C6A15B]">
                <Palette className="w-5 h-5 text-[#C6A15B]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] block">
                02 / ART DIRECTION
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                Creative Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                High-retention visual assets, balanced typography, and dark editorial styling that position your brand as an industry leader rather than an undifferentiated commodity.
              </p>
            </div>

            {/* Principle 03: Practical Technology */}
            <div className="p-6 sm:p-7 rounded-[10px] bg-[#0C0C0C] border border-[#242424] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-[6px] bg-[#141414] border border-[#242424] flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] block">
                03 / PERFORMANCE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                Practical Technology
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                Lightweight Next.js speed, verified SEO indexing, and seamless WhatsApp lead routing that remove customer friction and generate tangible sales inquiries.
              </p>
            </div>

          </div>

        </div>


        {/* =========================================================
            SECTION 5: COMMON OFFER TERMS ACCORDION
            "CAMPAIGN TERMS & CONDITIONS" (All 6 Verbatim Clauses)
        ========================================================= */}
        <div className="pt-20 sm:pt-28">
          
          <div className="max-w-2xl mb-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A3A3A3] font-semibold">
                TRANSPARENCY & GOVERNANCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-[#FFFFFF] leading-tight">
              CAMPAIGN TERMS & CONDITIONS
            </h2>
            <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
              Transparent, professional guidelines governing all Diwali 2026 campaign engagements.
            </p>
          </div>

          {/* Interactive Accordion for 6 Clauses */}
          <div className="rounded-[10px] border border-[#242424] bg-[#0C0C0C] divide-y divide-[#242424] overflow-hidden">
            {CAMPAIGN_TERMS.map((term, idx) => {
              const isOpen = activeTermIndex === idx;

              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setActiveTermIndex(isOpen ? null : idx)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      <span className="text-[11px] font-mono text-[#ED1C24] font-semibold">
                        {term.number}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white font-sans">
                        {term.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-[#A3A3A3] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-[#080808]"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed border-t border-[#242424]/60 font-sans pl-11 sm:pl-12">
                          {term.clause}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Review Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs font-mono text-[#A3A3A3]/80">
              Please review all terms with our team on WhatsApp before project kickoff.
            </p>
          </div>
        </div>


        {/* =========================================================
            SECTION 6: FINAL CONVERSION CTA
            "YOUR NEXT BUSINESS MILESTONE STARTS HERE."
        ========================================================= */}
        <div className="pt-20 sm:pt-28">
          <div className="relative rounded-[12px] bg-[#0E0E0E] border border-[#242424] p-8 sm:p-12 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            
            {/* Subtle background ambient reflections */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ED1C24]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 space-y-3 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ED1C24] font-semibold block">
                DIWALI SPECIALS 2026 · LIMITED AVAILABILITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white leading-tight">
                YOUR NEXT BUSINESS MILESTONE STARTS HERE.
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-sans leading-relaxed">
                Whether you need a complete business website, a high-converting digital catalogue, or standout festive creatives, our studio is ready to build with you.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={buildWhatsAppLink(WA_MESSAGES.generalOffer)}
                target="_blank"
                rel="no-referrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-[6px] bg-[#ED1C24] hover:bg-[#c9141b] text-white font-sans text-sm font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#ED1C24]/20 cursor-pointer outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="w-full sm:w-auto py-3.5 px-5 rounded-[6px] border border-[#242424] hover:border-white/30 text-[#A3A3A3] hover:text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer outline-none"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                  className="p-2 rounded-[6px] bg-[#111111] border border-white/[0.12] text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
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

    </section>
  );
}
