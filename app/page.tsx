"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  Star,
  Users,
  Code,
  Layout,
  Palette,
  Search,
  MessageSquare,
  Video,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Send,
  ExternalLink,
  Maximize2,
  Camera,
  Film,
  Bot,
  Briefcase,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Play
} from "lucide-react";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import LeadWizard from "../components/LeadWizard";
import PortfolioShowcase from "../components/PortfolioShowcase";
import LightboxModal, { LightboxItem } from "../components/LightboxModal";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeWorkFilter, setActiveWorkFilter] = useState("all");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Lightbox Modal state for featured case studies
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Trigger VEER.1 MindPal Chatbot Modal
  const handleOpenVeer = () => {
    const triggerBtn = document.getElementById("veer-chat-trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  };

  // Client trust list matching brand history
  const brandClients = [
    { name: "Behind The Cake", tag: "LUXURY BAKERY", font: "font-serif italic" },
    { name: "CIC Café", tag: "CAFÉ & DINING", font: "font-sans font-black tracking-tighter" },
    { name: "Pathak Brothers", tag: "HERITAGE SWEETS", font: "font-serif font-bold tracking-wide" },
    { name: "RAAD – The Sky Lounge", tag: "ROOFTOP LOUNGE", font: "font-sans font-extrabold tracking-widest" },
    { name: "Kadi Kitchen", tag: "CLOUD KITCHEN", font: "font-sans font-bold" },
    { name: "Chocolust", tag: "CONFECTIONERY", font: "font-serif italic font-semibold" },
    { name: "Let's Bakez", tag: "ARTISANAL BAKEHOUSE", font: "font-sans font-bold tracking-tight" },
  ];

  // 6 Core Services matching the design reference image
  const services = [
    {
      id: "01",
      title: "Strategy & Consulting",
      category: "GROWTH ARCHITECTURE",
      desc: "Data-backed market positioning, competitive analysis, and strategic growth roadmaps engineered to capture market share.",
      icon: Briefcase,
      image: "https://picsum.photos/seed/dgenz-strategy/800/600",
      capabilities: [
        "Brand Positioning & Identity Strategy",
        "Business Gap Analysis & Market Audits",
        "Digital Growth & Go-To-Market Plans",
        "Revenue Funnel Engineering"
      ]
    },
    {
      id: "02",
      title: "Social Media Management",
      category: "ORGANIC & PAID ATTENTION",
      desc: "High-impact visual grids, data-driven content calendars, and active audience engagement systems that turn followers into revenue.",
      icon: TrendingUp,
      image: "https://picsum.photos/seed/dgenz-social/800/600",
      capabilities: [
        "Instagram & Meta Ecosystem Growth",
        "Conversion-Optimized Content Grids",
        "Daily Story & Reel Funnels",
        "Paid Social Campaign Management"
      ]
    },
    {
      id: "03",
      title: "Content Creation & Photography",
      category: "VISUAL ASSETS",
      desc: "Studio product photography and editorial visual assets directed with luxury aesthetic standards and high conversion intent.",
      icon: Camera,
      image: "https://picsum.photos/seed/dgenz-photo/800/600",
      capabilities: [
        "Studio Product Photoshoots",
        "Commercial Brand Photography",
        "Art Direction & Set Styling",
        "Social-Ready Image Asset Banks"
      ]
    },
    {
      id: "04",
      title: "Video Editing & Reels",
      category: "HIGH RETENTION MOTION",
      desc: "Fast-paced, hook-driven short-form reels and commercial video assets engineered to stop the scroll and maximize watch time.",
      icon: Film,
      image: "https://picsum.photos/seed/dgenz-video/800/600",
      capabilities: [
        "High-Retention Instagram Reels & TikToks",
        "Commercial Brand & Product Videos",
        "Motion Graphics & Dynamic Typography",
        "Sound Design & Color Grading"
      ]
    },
    {
      id: "05",
      title: "AI Cinematic Videos & Automation",
      category: "NEXT-GEN CREATIVE",
      desc: "CGI neural rendering, AI-powered promotional videos, and autonomous customer response workflows that operate around the clock.",
      icon: Cpu,
      image: "https://picsum.photos/seed/dgenz-ai/800/600",
      capabilities: [
        "AI Cinematic Visual Commercials",
        "Autonomous WhatsApp Lead Funnels",
        "VEER.1 AI Sales & Growth Agents",
        "Automated Meta DM & Comment Routing"
      ]
    },
    {
      id: "06",
      title: "Graphic Design & Branding",
      category: "IDENTITY & PACKAGING",
      desc: "Scalable vector identity systems, luxury packaging boxes, corporate presentation decks, and tactile print collateral.",
      icon: Palette,
      image: "https://picsum.photos/seed/dgenz-brand/800/600",
      capabilities: [
        "Vector Logo & Visual Guidelines",
        "Luxury Packaging & Bag Design",
        "Investor Decks & Corporate PPTs",
        "Stationery & Print Materials"
      ]
    }
  ];

  // 6 Featured Editorial Case Studies matching reference image
  const featuredCases: LightboxItem[] = [
    {
      id: "case-01",
      title: "Behind The Cake — Luxury Confectionery",
      category: "Branding & Packaging",
      client: "BEHIND THE CAKE",
      description: "Complete visual rebranding including custom luxury paper shopping bags, business gap analysis, studio product photography, and social profile optimization.",
      imageUrl: "https://picsum.photos/seed/dgenz-cake-pkg/1000/700",
      tags: ["Luxury Packaging", "Product Photography", "Brand Strategy", "Social Media"]
    },
    {
      id: "case-02",
      title: "CIC Café — Matte Black Coffee Identity",
      category: "Branding",
      client: "CIC CAFÉ",
      description: "Artisanal café branding consisting of matte black disposable cups, typography systems, social media grid design, and Google local SEO optimization.",
      imageUrl: "https://picsum.photos/seed/dgenz-coffee-cup/1000/700",
      tags: ["Café Branding", "Packaging", "Social Grid", "Local SEO"]
    },
    {
      id: "case-03",
      title: "Pathak Brothers — Heritage Royal Sweets",
      category: "Branding",
      client: "PATHAK BROTHERS",
      description: "Heritage luxury confectionery packaging boxes with royal emerald green & gold foil textures, scalable vector identity, and festive campaign materials.",
      imageUrl: "https://picsum.photos/seed/dgenz-sweet-box/1000/700",
      tags: ["Heritage Identity", "Gold Foil Packaging", "Festive Campaigns"]
    },
    {
      id: "case-04",
      title: "RAAD – The Sky Lounge Hospitality Platform",
      category: "Websites",
      client: "RAAD SKY LOUNGE",
      description: "Dark-themed luxury rooftop lounge website and digital menu ordering platform with instant table booking triggers and smooth parallax animations.",
      imageUrl: "https://picsum.photos/seed/dgenz-sky-lounge/1000/700",
      tags: ["Next.js Website", "Interactive Menu", "Table Booking", "SEO Engine"]
    },
    {
      id: "case-05",
      title: "Digital Menu & Interactive Dining Hub",
      category: "Websites",
      client: "THE CHOW CART",
      description: "High-speed single page digital menu with direct WhatsApp food ordering triggers, high-contrast typography, and Google local SEO optimization.",
      imageUrl: "https://picsum.photos/seed/dgenz-menu-tab/1000/700",
      tags: ["Next.js 15", "Digital Menu", "WhatsApp Ordering", "Google Maps"]
    },
    {
      id: "case-06",
      title: "Fresh Ideas Printed Bold — Print & Packaging",
      category: "Print",
      client: "CORPORATE COLLATERAL",
      description: "High-contrast promotional posters, matte business cards, and luxury brand guidelines designed for high tactile impact and enterprise presentation.",
      imageUrl: "https://picsum.photos/seed/dgenz-print-posters/1000/700",
      tags: ["Poster Series", "Matte Business Cards", "Stationery", "Print Media"]
    }
  ];

  // Filtered case studies
  const filteredCases = activeWorkFilter === "all"
    ? featuredCases
    : featuredCases.filter(c => {
        const cat = (c.category || "").toLowerCase();
        if (activeWorkFilter === "branding") return cat.includes("brand");
        if (activeWorkFilter === "social") return cat.includes("social") || c.tags?.some(t => t.toLowerCase().includes("social"));
        if (activeWorkFilter === "websites") return cat.includes("website");
        if (activeWorkFilter === "print") return cat.includes("print") || cat.includes("pack");
        return true;
      });

  // 6 Core FAQs
  const faqs = [
    {
      q: "What makes DGEN Z different from a traditional marketing agency?",
      a: "DGEN Z is an AI Marketing Studio. We combine strategic business consulting, high-fashion art direction, custom web engineering, and autonomous AI systems under one roof to deliver measurable, sustainable growth without the usual agency overhead."
    },
    {
      q: "How does DGEN Z integrate AI into marketing and websites?",
      a: "We deploy VEER.1 AI growth consultants, automated WhatsApp and Instagram direct message funnels, predictive campaign analytics, and AI-assisted cinematic video production that reduce manual friction and scale conversions 24/7."
    },
    {
      q: "What is your turnaround time for a custom project?",
      a: "A standard custom web application or brand identity sprint is completed within 3 to 7 business days, including complete SEO schema markup and responsive testing."
    },
    {
      q: "Do you work with local businesses or international brands?",
      a: "Both. While we are headquartered in Kolkata, India, we partner with growing businesses, hospitality venues, creators, and corporate brands worldwide."
    },
    {
      q: "Can DGEN Z handle my business's end-to-end social media?",
      a: "Yes. We manage strategy, visual grid creation, high-retention reels, copywriting, publishing schedules, and community engagement funnels to consistently turn attention into qualified inquiries."
    },
    {
      q: "How can I start a project with founder Sobhit Jaiswal?",
      a: "You can click 'Let's Talk' to fill out our interactive project wizard, WhatsApp us directly at +91 96811 68381, or email creativedgenz32@gmail.com for an instant proposal and quote."
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#040406] text-white selection:bg-[#D90429] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. BRANDS WE'VE WORKED WITH (CLIENT TRUST STRIP) */}
      <section className="w-full py-12 md:py-16 border-y border-white/[0.08] bg-black/40 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="text-center mb-8">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-neutral-400 font-semibold block">
              BRANDS WE&apos;VE WORKED WITH
            </span>
          </div>

          {/* Client Logos Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity">
            {brandClients.map((client, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center cursor-default transition-all duration-300 hover:scale-105"
              >
                <span className={`text-base sm:text-lg md:text-xl text-neutral-300 group-hover:text-white transition-colors ${client.font}`}>
                  {client.name}
                </span>
                <span className="text-[8px] font-mono tracking-widest text-neutral-500 group-hover:text-[#D90429] transition-colors mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section id="services" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-sans uppercase tracking-tight text-white leading-tight">
              EVERYTHING YOUR BUSINESS NEEDS.{" "}
              <span className="text-[#D90429]">UNDER ONE STUDIO.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed pt-1">
              From branding to automation, we help you build, market and grow with the power of AI.
            </p>
          </div>

          {/* Carousel Counter & Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 tracking-widest">
              [ 01 — 06 ]
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveServiceIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1))}
                className="p-2.5 rounded-full border border-white/15 bg-black hover:border-[#D90429] text-white transition-colors cursor-pointer outline-none"
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveServiceIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0))}
                className="p-2.5 rounded-full border border-white/15 bg-black hover:border-[#D90429] text-white transition-colors cursor-pointer outline-none"
                aria-label="Next Service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isHighlight = idx === activeServiceIndex;

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => setActiveServiceIndex(idx)}
                className={`group relative rounded-2xl p-6 md:p-8 border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isHighlight
                    ? "bg-gradient-to-b from-[#141418] to-[#08080a] border-[#D90429]/40 shadow-2xl shadow-[#D90429]/10 ring-1 ring-[#D90429]/20"
                    : "bg-[#09090b]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#0f0f13]"
                }`}
              >
                {/* Top Row: Service Number & Icon */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-neutral-500 font-bold tracking-widest group-hover:text-[#D90429] transition-colors">
                    {svc.id}
                  </span>
                  <div className={`p-3 rounded-xl border transition-colors ${
                    isHighlight
                      ? "bg-[#D90429]/10 border-[#D90429]/30 text-[#D90429]"
                      : "bg-white/[0.04] border-white/10 text-neutral-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3 my-6">
                  <span className="text-[10px] font-mono text-[#D90429] uppercase tracking-[0.25em] font-semibold block">
                    {svc.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans uppercase text-white group-hover:text-[#D90429] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Sub-capabilities Checklist */}
                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  {svc.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D90429]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-auto flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-[#D90429] uppercase tracking-wider transition-colors"
                  >
                    Consult On This <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Subtle Hover Glow Corner */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#D90429]/10 rounded-full blur-xl group-hover:bg-[#D90429]/20 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 4. ABOUT DGEN Z STUDIO SECTION */}
      <section id="about" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Atmospheric Studio Visual with Backlit Typographic Wall */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl shadow-black group">
              
              {/* Image Base */}
              <Image
                src="https://picsum.photos/seed/dgenz-agency-studio/1000/750"
                alt="DGEN Z Studio"
                fill
                unoptimized
                className="object-cover grayscale contrast-125 opacity-75 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Illuminated Wall Typographic Sign */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    KOLKATA HQ
                  </span>
                  <span className="text-xs font-mono font-bold text-[#D90429]">
                    EST. 2026
                  </span>
                </div>

                {/* Illuminated Typographic Statement */}
                <div className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-[#D90429] uppercase tracking-widest font-bold">
                    CORE PHILOSOPHY
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-tight leading-tight">
                    &ldquo;GOOD BRANDS GROW PEOPLE.&rdquo;
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans">
                    Founded by Sobhit Jaiswal to bridge modern AI technology with high-ticket brand engineering.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
                ABOUT DGEN Z
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-tight">
                A NEW GENERATION{" "}
                <span className="text-[#D90429]">AI MARKETING STUDIO.</span>
              </h2>
              <p className="text-base text-neutral-300 font-sans leading-relaxed pt-2">
                We blend strategy, design, content and AI to create real growth for businesses. We&apos;re not just a service provider — we&apos;re your creative growth partner.
              </p>
            </div>

            {/* 4 Key Pillar Metric Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/10 bg-neutral-950/60 space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-sans text-white block">
                  50<span className="text-[#D90429]">+</span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                  Brands Scaled
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  From startups to enterprise
                </span>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-neutral-950/60 space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-sans text-white block">
                  120<span className="text-[#D90429]">+</span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                  Projects Delivered
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  Websites, branding & AI funnels
                </span>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-neutral-950/60 space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-sans text-white block">
                  99<span className="text-[#D90429]">%</span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                  Client Satisfaction
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  Sustainable repeat growth
                </span>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-neutral-950/60 space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-sans text-white block">
                  24<span className="text-[#D90429]">/7</span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                  Autonomous AI
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  VEER.1 Growth Consultant
                </span>
              </div>
            </div>

            {/* Narrative Action CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-bold text-sm tracking-wide shadow-lg shadow-[#D90429]/25 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Know More About Us <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleOpenVeer}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 bg-black/40 hover:bg-black/80 text-white font-sans text-sm font-semibold transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-[#D90429]" /> Chat with VEER.1
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED WORK / REAL RESULTS SHOWCASE */}
      <section id="work" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-tight">
              REAL BRANDS. <span className="text-[#D90429]">REAL RESULTS.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All" },
              { id: "branding", label: "Branding" },
              { id: "social", label: "Social Media" },
              { id: "websites", label: "Websites" },
              { id: "print", label: "Print & Packaging" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveWorkFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer outline-none ${
                  activeWorkFilter === filter.id
                    ? "bg-[#D90429] text-white font-bold shadow-md shadow-[#D90429]/25"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-[#D90429]/40 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300"
            >
              {/* Image Container with Zoom & Lightbox Trigger */}
              <div
                className="relative h-60 w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => {
                  setLightboxIndex(idx);
                  setIsLightboxOpen(true);
                }}
              >
                <Image
                  src={item.imageUrl || `https://picsum.photos/seed/${idx}/800/600`}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Top Category Badge & Zoom Button */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                      setIsLightboxOpen(true);
                    }}
                    className="p-2 rounded-full bg-black/80 hover:bg-[#D90429] text-white transition-colors border border-white/15"
                    title="Fullscreen Lightbox"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtle Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Case Details */}
              <div
                className="p-6 space-y-3 flex-1 flex flex-col justify-between cursor-pointer"
                onClick={() => {
                  setLightboxIndex(idx);
                  setIsLightboxOpen(true);
                }}
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#D90429] uppercase tracking-widest block font-bold">
                    {item.client}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-sans uppercase text-white group-hover:text-[#D90429] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {item.tags?.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[9px] font-mono text-neutral-400 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 6. AI & VEER.1 CONSULTANT SECTION */}
      <section id="ai-lab" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-white/15 bg-gradient-to-br from-[#0c0c10] via-black to-[#08080a] shadow-2xl overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D90429]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: AI Intro */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D90429] animate-ping" />
                AUTONOMOUS GROWTH INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-sans uppercase tracking-tight text-white leading-tight">
                MEET VEER.1 — YOUR AI <span className="text-[#D90429]">GROWTH STRATEGIST.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                Trained on DGEN Z&apos;s proven marketing frameworks, VEER.1 diagnoses your digital presence, audits your brand gaps, and builds custom conversion funnels in seconds.
              </p>

              {/* Sample Quick Prompts */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-semibold">
                  ASK VEER.1 ANYTHING:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "How can DGEN Z help my café scale?",
                    "Audit my Instagram visual grid",
                    "Calculate custom website timeline",
                    "What are the best local SEO tactics for Kolkata?"
                  ].map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={handleOpenVeer}
                      className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#D90429] hover:bg-[#D90429]/10 text-xs font-sans text-neutral-300 hover:text-white transition-all text-left cursor-pointer"
                    >
                      &ldquo;{prompt}&rdquo; →
                    </button>
                  ))}
                </div>
              </div>

              {/* Launch Chatbot CTA Button */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={handleOpenVeer}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-bold text-sm tracking-wide shadow-xl shadow-[#D90429]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Bot className="w-4 h-4" /> Launch VEER.1 Chatbot <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: AI Terminal Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-black/80 border border-white/15 shadow-2xl backdrop-blur-xl space-y-4 font-mono text-xs">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D90429]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    <span className="text-[10px] text-neutral-400 font-bold ml-1">VEER.1 AI KERNEL</span>
                  </div>
                  <span className="text-[9px] text-[#39ff14] bg-[#39ff14]/10 px-2 py-0.5 rounded border border-[#39ff14]/20">
                    ONLINE
                  </span>
                </div>

                {/* AI Dialogue Simulation */}
                <div className="space-y-3 pt-2 text-[11px] leading-relaxed">
                  <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 space-y-1">
                    <span className="text-[9px] text-[#D90429] font-bold block">YOU:</span>
                    <p className="text-neutral-300 font-sans">
                      &ldquo;How does DGEN Z increase customer orders on WhatsApp?&rdquo;
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 space-y-1">
                    <span className="text-[9px] text-emerald-400 font-bold block">VEER.1 STRATEGIST:</span>
                    <p className="text-white font-sans">
                      &ldquo;We engineer zero-latency Next.js digital menus paired with click-to-chat WhatsApp funnel triggers and Google Maps local SEO. Average inquiry-to-order conversion rate is 84%.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={handleOpenVeer}
                    className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#D90429] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Open Live Interaction →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. THE 5-STAGE STRATEGIC METHODOLOGY */}
      <section className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
            HOW WE SCALE BRANDS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-tight">
            OUR 5-STAGE <span className="text-[#D90429]">GROWTH BLUEPRINT.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans">
            A precise, predictable methodology engineered for market disruption.
          </p>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: "01", name: "UNDERSTAND", desc: "Business gap analysis, competitor audit & audience mapping." },
            { num: "02", name: "DESIGN", desc: "High-ticket visual identity, typography & custom web UI." },
            { num: "03", name: "AMPLIFY", desc: "High-retention reels, organic search & Meta ad campaigns." },
            { num: "04", name: "AUTOMATE", desc: "VEER.1 AI agents, WhatsApp funnels & instant lead capture." },
            { num: "05", name: "GROW", desc: "Iterative testing, revenue scaling & long-term brand equity." },
          ].map((stage, sIdx) => (
            <div
              key={sIdx}
              className="p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#D90429]/50 transition-all space-y-4 group"
            >
              <span className="text-2xl font-black font-mono text-[#D90429] block">
                {stage.num}
              </span>
              <h3 className="text-lg font-bold font-sans uppercase text-white group-hover:text-[#D90429] transition-colors">
                {stage.name}
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 8. INTERACTIVE LEAD WIZARD & PROJECT PROPOSAL */}
      <section id="proposal" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
            INSTANT ESTIMATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-tight">
            CONFIGURE YOUR <span className="text-[#D90429]">PROJECT SCOPE.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans">
            Select your requirements to calculate an instant quote and timeline estimation directly from our founder.
          </p>
        </div>

        <LeadWizard />

      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-10 max-w-5xl mx-auto relative select-none">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D90429] font-bold block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-tight">
            EVERYTHING YOU NEED <span className="text-[#D90429]">TO KNOW.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, fIdx) => {
            const isOpen = activeFaq === fIdx;

            return (
              <div
                key={fIdx}
                className="rounded-xl border border-white/10 bg-neutral-950/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer outline-none hover:text-[#D90429] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold font-sans uppercase text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-[#D90429]" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-1 text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </section>

      {/* 10. FINAL CONVERSION CTA & CONTACT */}
      <section id="contact" className="w-full py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto relative select-none">
        
        <div className="relative rounded-3xl p-8 sm:p-14 md:p-20 border border-white/20 bg-gradient-to-b from-[#141418] via-black to-[#09090c] shadow-2xl overflow-hidden text-center space-y-8">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D90429]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#D90429] font-bold block">
              START YOUR PROJECT TODAY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-sans uppercase tracking-tight text-white leading-[0.95]">
              LET&apos;S CREATE SOMETHING{" "}
              <span className="text-[#D90429] drop-shadow-[0_0_35px_rgba(217,4,41,0.5)]">
                INCREDIBLE TOGETHER.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-xl mx-auto leading-relaxed pt-2">
              Have a project in mind? Let&apos;s turn your vision into an iconic, conversion-generating digital asset.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20start%20a%20project%20with%20DGEN%20Z."
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-bold text-base tracking-wide shadow-2xl shadow-[#D90429]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Let&apos;s Talk <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:+919681168381"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-full border border-white/20 bg-black/60 hover:bg-black/90 text-white font-sans font-semibold text-base transition-all backdrop-blur-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#D90429]" /> Call Founder Directly
            </a>
          </div>

          {/* Contact Direct Coordinates */}
          <div className="relative z-10 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">PHONE & WHATSAPP</span>
              <a href="tel:+919681168381" className="text-sm font-sans font-bold text-white hover:text-[#D90429] transition-colors block">
                +91 96811 68381
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">EMAIL DISPATCH</span>
              <a href="mailto:creativedgenz32@gmail.com" className="text-sm font-sans font-bold text-white hover:text-[#D90429] transition-colors block">
                creativedgenz32@gmail.com
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">HEADQUARTERS</span>
              <span className="text-sm font-sans text-neutral-300 block leading-tight">
                5/1 Hari Paul Lane, Kolkata 700006, India
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* LIGHTBOX MODAL FOR FEATURED CASE STUDIES */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={featuredCases}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </main>
  );
}
