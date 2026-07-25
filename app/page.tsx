"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  Bot,
  Zap,
  CheckCircle2,
  ChevronDown,
  Phone,
  Sparkles,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  Star,
  Users,
  Compass,
  Code,
  Layout,
  Palette,
  Search,
  MessageSquare,
  Video,
  ChevronRight,
  Send,
  ExternalLink,
  Maximize2
} from "lucide-react";
import LeadWizard from "../components/LeadWizard";
import PortfolioShowcase from "../components/PortfolioShowcase";
import BackgroundVideo from "../components/BackgroundVideo";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeScene, setActiveScene] = useState(1);
  const [activeCapability, setActiveCapability] = useState(0);

  // Track active scene based on scroll depth (1 to 13)
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const scrollRatio = window.scrollY / totalHeight;
      const sceneIndex = Math.min(13, Math.max(1, Math.floor(scrollRatio * 13) + 1));
      setActiveScene(sceneIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger VEER.1 MindPal Chatbot Modal
  const handleOpenVeer = () => {
    const triggerBtn = document.getElementById("veer-chat-trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  };

  // Scene Names for Spatial HUD
  const sceneTitles = [
    "THE DGEN Z UNIVERSE",
    "THE DIGITAL VOID",
    "THE DGEN Z SYSTEM",
    "WEBSITE DEVELOPMENT WORLD",
    "MARKETING WORLD",
    "BRAND WORLD",
    "THE AI PORTAL",
    "MEET VEER.1",
    "CLIENT WORK UNIVERSE",
    "CREATIVE EXPERIMENTS",
    "THE PROCESS TUNNEL",
    "FOUNDER NARRATIVE",
    "FINAL WORLD"
  ];

  // Capabilities Data
  const capabilities = [
    {
      id: "01",
      title: "DIGITAL EXPERIENCES",
      tagline: "High-performance web architecture & conversion systems",
      items: ["Website Design", "Custom Next.js Development", "Landing Pages", "E-Commerce Platforms", "Conversion Systems"],
      visualDesc: "Architecting high-speed, desktop-first Next.js web applications with instant load times and technical SEO foundations.",
      badge: "ENGINEERING"
    },
    {
      id: "02",
      title: "BRAND SYSTEMS",
      tagline: "Vector identity, luxury packaging & strategic design",
      items: ["Brand Identity", "Vector Logo Concepts", "Packaging Box Design", "Campaign Design", "Presentation Decks"],
      visualDesc: "Crafting matte-black visual identities and brand guidelines that elevate perceived market value and command enterprise pricing.",
      badge: "CREATIVE"
    },
    {
      id: "03",
      title: "GROWTH MARKETING",
      tagline: "Direct-response campaigns & organic search dominance",
      items: ["Social Media Strategy", "Local Marketing", "Content Strategy", "Lead Generation Funnels", "WhatsApp Automations"],
      visualDesc: "Deploying targeted digital marketing systems that convert cold attention into qualified inquiry pipelines.",
      badge: "MARKETING"
    },
    {
      id: "04",
      title: "SEARCH & DISCOVERY",
      tagline: "Google Business Profile & technical search dominance",
      items: ["Technical SEO", "Google Business Profile Ranking", "Local Visibility Maps", "Search Strategy", "Schema Injection"],
      visualDesc: "Ranking businesses #1 on Google Maps in Kolkata with geotagged media, review engines, and local citation networks.",
      badge: "SEO"
    },
    {
      id: "05",
      title: "AI & AUTOMATION",
      tagline: "Intelligent sales agents & workflow automation",
      items: ["AI Sales Agents", "AI Chatbot Systems", "Workflow Automation", "Lead Qualification", "VEER.1 Growth Consultant"],
      visualDesc: "Building custom 24/7 AI response agents and Instagram/WhatsApp triggers that capture and qualify leads automatically.",
      badge: "AI LAB"
    },
    {
      id: "06",
      title: "CONTENT & PRODUCTION",
      tagline: "High-contrast visual assets & campaign media",
      items: ["Photography Direction", "Video Reels", "Campaign Creatives", "Ad Assets", "Visual Design Systems"],
      visualDesc: "Producing art-directed visual assets and social content designed specifically for high audience retention.",
      badge: "MEDIA"
    }
  ];

  // Real Client Case Studies
  const selectedProjects = [
    {
      num: "01",
      client: "THE CHOW CART",
      industry: "Culinary & Dining",
      services: "Brand Identity • Digital Experience • Menu Design",
      challenge: "A popular culinary brand was struggling with inconsistent visual branding and an unoptimized digital menu causing high visitor bounce rates.",
      thinking: "DGEN Z designed an ultra-fast, single-page digital menu platform with clear typography, high-contrast visual hierarchy, and instant WhatsApp ordering triggers.",
      system: "Next.js single-page framework, direct WhatsApp click-to-chat ordering funnel, and local Google Maps schema.",
      execution: "Scalable vector branding, custom matte packaging templates, and an ultra-lightweight web experience in 5 business days.",
      outcome: "Eliminated drop-off rates, streamlined online food order inquiries, and boosted local search visibility in South Kolkata."
    },
    {
      num: "02",
      client: "SOMA ORGANICS",
      industry: "Luxury Wellness & Skincare",
      services: "E-Commerce Platform • Brand Identity • Packaging",
      challenge: "Slow WordPress site with unoptimized product pages failing to convey luxury product value.",
      thinking: "Elevate perceived brand value through dark glassmorphic UI, custom vector typography, and lightning-fast Next.js checkout routes.",
      system: "Custom e-commerce product catalog with interactive hot-stamp foil packaging renders and structured product schema.",
      execution: "Created luxury packaging box layouts, vector logo guides, and a fast React frontend.",
      outcome: "Established elite market positioning, elevated average order value, and improved Google search ranking."
    },
    {
      num: "03",
      client: "ROY JEWELLERS",
      industry: "Fine Jewelry & Retail",
      services: "Luxury Brand Identity • Local SEO & Maps • Digital Catalog",
      challenge: "Limited local Google Maps presence and non-existent digital catalog for high-ticket jewelry buyers.",
      thinking: "Build a dominant Google Business Profile local SEO setup alongside a sleek digital collection showcase.",
      system: "Geotagged image submission network, review acquisition engine, and high-speed catalog web app.",
      execution: "Optimized local citations, engineered custom digital showroom layout, and established direct WhatsApp consultation pathways.",
      outcome: "Achieved top Google Maps local rankings in target Kolkata search areas and increased direct store appointments."
    },
    {
      num: "04",
      client: "VEKTOR LOGISTICS",
      industry: "Enterprise Supply Chain",
      services: "Corporate Presentation • Next.js Showcase • Lead Funnel",
      challenge: "Outdated company pitch decks and corporate website that failed to close enterprise logistics contracts.",
      thinking: "Redesign the corporate deck with editorial precision and build an enterprise Next.js landing page with interactive quote calculators.",
      system: "Next.js App Router, custom proposal builder widget, and high-contrast presentation deck formatting.",
      execution: "Designed 25+ high-ticket PowerPoint slides, PDF books, and a responsive web portal.",
      outcome: "Helped client secure a major enterprise contract within one week of launch."
    }
  ];

  // 20 Optimized FAQs for SEO & Search Intent
  const faqs = [
    {
      q: "What services does DGEN Z offer?",
      a: "DGEN Z offers premium digital services including custom website development, digital marketing, graphic design, social media marketing, Google Business Profile (GBP) optimization, local SEO, corporate branding, and smart AI automation workflows."
    },
    {
      q: "Does DGEN Z build custom business websites?",
      a: "Yes, DGEN Z specializes in custom, high-speed business websites, landing pages, and e-commerce storefronts built on modern tech stacks like Next.js and React with perfect Core Web Vitals performance."
    },
    {
      q: "Does DGEN Z provide social media marketing services in Kolkata?",
      a: "Yes, DGEN Z provides elite social media marketing and brand identity design services, building visual grid frameworks, custom captions, and daily content strategies targeting audiences in Kolkata and globally."
    },
    {
      q: "Who is the founder of DGEN Z Marketing Agency?",
      a: "DGEN Z was founded by Sobhit Jaiswal, a senior digital marketing consultant, professional website developer, and brand architect based in Kolkata, India."
    },
    {
      q: "Where is DGEN Z Digital Agency located?",
      a: "DGEN Z is headquartered at 5/1 Hari Paul Lane, Kolkata, West Bengal 700006, India, providing local SEO and digital marketing services to businesses nationwide and internationally."
    },
    {
      q: "How does DGEN Z help with Google Business Profile optimization?",
      a: "We optimize Google Business Profile (GBP) listings to rank #1 on Google Maps in Kolkata. Our local SEO services include reviews setup, geo-tagged media submissions, map citations, and local authority building."
    },
    {
      q: "Does DGEN Z build high-performance e-commerce websites?",
      a: "Aesthetic and secure. We engineer fast, responsive e-commerce storefronts with seamless user experiences, conversion-optimized checkout grids, and integrated payment pathways."
    },
    {
      q: "What is AI website development, and does DGEN Z provide it?",
      a: "AI website development involves building websites embedded with smart AI capabilities such as VEER.1 AI sales consultants, server-side Gemini models, and automated customer qualification funnels. DGEN Z leads this domain."
    },
    {
      q: "How can DGEN Z help grow my local business in Kolkata?",
      a: "Through targeted local SEO services, Google Maps optimization, premium branding, high-conversion web development, and local social media campaigns, we drive high-intent phone calls and store visits to your business."
    },
    {
      q: "What is your website development process?",
      a: "Our website development process follows seven strategic sprints: Discover, Research, Strategize, Design, Build, Launch, and Grow, complete with schema integrations and speed audits."
    },
    {
      q: "Does DGEN Z design custom company logos and branding kits?",
      a: "Yes, DGEN Z is a professional graphic design company. We design scalable vector logos, brand identity guides, packaging box templates, and custom presentation slides."
    },
    {
      q: "What technologies does DGEN Z Website Design Company use?",
      a: "We develop fast and secure platforms using Next.js, React, Tailwind CSS, TypeScript, and Canvas/Three.js for interactive elements to ensure maximum Core Web Vitals scores."
    },
    {
      q: "How does DGEN Z integrate marketing automations?",
      a: "We construct smart automated systems including automated Instagram comment responses, Facebook direct message triggers, WhatsApp lead funnels, and custom AI chat assistants."
    },
    {
      q: "Why is professional graphic design important for business growth?",
      a: "Professional graphic design raises the perceived value of your business, commands premium pricing, builds customer trust, and converts traffic into buyers far more effectively than generic templates."
    },
    {
      q: "How long does it take DGEN Z to develop a custom website?",
      a: "A standard custom-designed, high-performance landing page or business website is developed, fully optimized for SEO, and deployed in 3 to 7 business days."
    },
    {
      q: "Is DGEN Z's digital marketing suitable for international clients?",
      a: "Yes, while we are a leading digital marketing agency in Kolkata, West Bengal, we build high-ticket campaigns and code digital assets for international startups and global companies."
    },
    {
      q: "How can I contact Sobhit Jaiswal at DGEN Z?",
      a: "You can contact our founder Sobhit Jaiswal directly via instant WhatsApp or phone call at +91 96811 68381, or by sending an email to creativedgenz32@gmail.com."
    },
    {
      q: "Do you provide professional PPT and presentation pitch deck design?",
      a: "Yes, DGEN Z designs high-ticket corporate PowerPoint slides, professional PDF presentations, Google Forms formatting, and investor pitch books that raise capital and close enterprise deals."
    },
    {
      q: "What SEO services does DGEN Z offer for higher Google rankings?",
      a: "We offer complete technical and on-page SEO services, including rich schema markup injection, logical HTML heading hierarchies, mobile-first responsiveness, and canonical URL setups."
    },
    {
      q: "Can DGEN Z help automate customer lead generation on WhatsApp?",
      a: "Yes, we build direct click-to-chat WhatsApp communication setups, pre-filled lead capture fields, and automatic greeting funnels to convert cold traffic into hot sales calls immediately."
    }
  ];

  return (
    <div className="relative space-y-36 sm:space-y-48 py-4 selection:bg-[#D90429] selection:text-white">

      {/* ==================================================
          SPATIAL HUD OVERLAY (PERSISTENT SCENE COUNTER)
         ================================================== */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#A7A7A7] uppercase select-none">
        <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
        <span className="text-white font-bold">{String(activeScene).padStart(2, "0")} / 13</span>
        <span className="text-neutral-600">—</span>
        <span>{sceneTitles[activeScene - 1]}</span>
      </div>

      {/* Vertical Scroll Depth Meter on Right */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1 pointer-events-none select-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 transition-all duration-300 rounded-full ${
              activeScene === i + 1 ? "h-6 bg-[#D90429] shadow-[0_0_8px_#D90429]" : "h-1.5 bg-white/10"
            }`}
          />
        ))}
      </div>


      {/* ==================================================
          SCENE 01 — CINEMATIC 3D CGI HERO INTRODUCTION
         ================================================== */}
      <HeroSection />


      {/* ==================================================
          SCENE 02 — THE DIGITAL VOID
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center py-16 relative select-none" id="scene-02">
        <div className="max-w-4xl space-y-12">
          
          <div className="inline-block text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 02 / THE DIGITAL VOID
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#909090] uppercase leading-none font-sans">
              YOUR BUSINESS<br />
              DOESN&#39;T NEED<br />
              <span className="text-[#F7F7F7]">MORE NOISE.</span>
            </h2>

            <p className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#D90429] uppercase leading-none font-sans">
              IT NEEDS A<br />
              DIGITAL SYSTEM.
            </p>
          </div>

          {/* Floating Spatial UI Objects at different depths */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {[
              { title: "WEBSITE UI", code: "NEXT.JS 15", color: "border-red-500/20" },
              { title: "INSTAGRAM POSTS", code: "HIGH RETENTION", color: "border-white/10" },
              { title: "GOOGLE SEARCH", code: "GBP RANK #1", color: "border-green-500/20" },
              { title: "MOBILE SCREENS", code: "RESPONSIVE", color: "border-white/10" },
              { title: "AD CAMPAIGNS", code: "DIRECT RESPONSE", color: "border-red-500/20" },
              { title: "AI INTERFACES", code: "VEER.1 CORE", color: "border-green-500/20" },
              { title: "ANALYTICS", code: "CONVERSION METRICS", color: "border-white/10" },
              { title: "PACKAGING", code: "LUXURY VECTOR", color: "border-red-500/20" }
            ].map((obj, i) => (
              <div
                key={i}
                className={`p-4 rounded-sm bg-[#080808] border ${obj.color} space-y-1 hover:border-[#D90429] transition-all`}
              >
                <span className="text-[9px] font-mono text-neutral-500 uppercase block">{obj.code}</span>
                <span className="text-xs font-mono font-bold text-[#F7F7F7] uppercase block">{obj.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================================================
          SCENE 03 — THE DGEN Z SYSTEM
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="scene-03">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 03 / THE DGEN Z SYSTEM
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            WE DON&#39;T BUILD DISCONNECTED SERVICES.<br />
            <span className="text-[#D90429]">WE BUILD CONNECTED GROWTH SYSTEMS.</span>
          </h2>
        </div>

        {/* Connected Ecosystem Installation Grid */}
        <div className="p-8 md:p-12 rounded-sm border border-white/10 bg-[#080808] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            
            <div className="inline-block p-6 rounded-sm bg-[#D90429] text-white font-black text-lg md:text-xl uppercase tracking-widest shadow-xl shadow-[#D90429]/20">
              YOUR BUSINESS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "BRAND SYSTEM", role: "Perceived Value & Status" },
                { name: "WEB ARCHITECTURE", role: "High-Speed Conversion" },
                { name: "GOOGLE MAPS SEO", role: "Local Search Dominance" },
                { name: "GROWTH MARKETING", role: "Customer Acquisition" },
                { name: "AI AUTOMATIONS", role: "24/7 Lead Qualification" },
                { name: "CONTENT MEDIA", role: "Audience Retention" }
              ].map((node, i) => (
                <div key={i} className="p-5 rounded-sm bg-[#030303] border border-white/10 hover:border-[#D90429] transition-all space-y-1">
                  <span className="text-xs font-mono font-bold text-[#F7F7F7] uppercase block">
                    {node.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#909090] uppercase block">
                    {node.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          SCENE 04 — WEBSITE DEVELOPMENT WORLD
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="scene-04">
        
        {/* Background Video Layer */}
        <div className="absolute right-0 w-full md:w-1/2 h-[400px] -z-10 overflow-hidden opacity-20 pointer-events-none">
          <BackgroundVideo
            src="/videos/web-world.webm"
            poster="https://picsum.photos/seed/web-world/1280/720"
            className="w-full h-full"
          />
        </div>

        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 04 / WEBSITE DEVELOPMENT WORLD
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            WEBSITES PEOPLE<br />
            <span className="text-[#D90429]">REMEMBER.</span>
          </h2>
          <p className="text-sm font-mono text-[#909090] uppercase tracking-wider">
            Fast. Responsive. Search-ready. Built to convert.
          </p>
        </div>

        {/* Service Matrix List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Website Design", desc: "Custom UI layout systems tailored for high-ticket service brands." },
            { title: "Next.js Development", desc: "Server-side React architecture with 100/100 Core Web Vitals performance." },
            { title: "Landing Pages", desc: "Direct-response campaign pages optimized for maximum lead conversions." },
            { title: "Business Portals", desc: "Scalable enterprise web applications with custom API integrations." },
            { title: "Mobile Experiences", desc: "Touch-optimized responsive interfaces designed for smartphone buyers." },
            { title: "SEO Foundations", desc: "Rich schema injection, semantic HTML, and lightning-fast indexing." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-sm bg-[#080808] border border-white/5 space-y-2 hover:border-[#D90429]/40 transition-all">
              <span className="text-[10px] font-mono text-[#D90429] font-bold block">0{i + 1} / WEB SPEC</span>
              <h3 className="text-base font-mono font-bold text-[#F7F7F7] uppercase">{item.title}</h3>
              <p className="text-xs text-[#909090] font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 05 — MARKETING WORLD
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="scene-05">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 05 / MARKETING WORLD
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            ATTENTION IS EASY.<br />
            RELEVANCE IS HARD.<br />
            <span className="text-[#D90429]">WE CREATE BOTH.</span>
          </h2>
        </div>

        {/* Infinite Media Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { tag: "REELS & SHORTS", label: "High Audience Retention" },
            { tag: "AD CAMPAIGNS", label: "Targeted Customer Acquisition" },
            { tag: "LOCAL MARKETING", label: "Google Business Ranking #1" },
            { tag: "BRAND CONTENT", label: "Editorial Grid Strategy" },
            { tag: "CONVERSION POSTERS", label: "High Contrast Design" },
            { tag: "FUNNEL CREATIVES", label: "Direct Response Strategy" },
            { tag: "WHATSAPP FUNNELS", label: "Click-To-Chat Automations" },
            { tag: "ORGANIC SEARCH", label: "Local Authority Building" }
          ].map((m, i) => (
            <div key={i} className="p-5 rounded-sm bg-[#080808] border border-white/10 hover:border-[#D90429] transition-all space-y-2">
              <span className="text-[9px] font-mono text-[#D90429] uppercase font-bold block">{m.tag}</span>
              <p className="text-xs font-mono font-bold text-[#F7F7F7] uppercase">{m.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 06 — BRAND WORLD
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="scene-06">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 06 / BRAND WORLD
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            BRANDS AREN&#39;T DECORATED.<br />
            <span className="text-[#D90429]">THEY&#39;RE ENGINEERED.</span>
          </h2>
        </div>

        {/* Brand System Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "VECTOR IDENTITY",
              desc: "Scalable corporate logos, brand marks, and geometric typography guidelines engineered in Illustrator."
            },
            {
              title: "LUXURY PACKAGING",
              desc: "Custom box templates, hot-stamp foil vector guides, and tactile material specifications for physical products."
            },
            {
              title: "PRESENTATION DECKS",
              desc: "High-ticket corporate PowerPoint slides, PDF books, and investor pitch decks designed to close deals."
            }
          ].map((b, i) => (
            <div key={i} className="p-8 rounded-sm bg-[#080808] border border-white/10 space-y-4 hover:border-[#D90429] transition-all">
              <span className="text-xs font-mono text-[#D90429] font-bold">0{i + 1} / BRAND CORE</span>
              <h3 className="text-xl font-mono font-bold text-[#F7F7F7] uppercase">{b.title}</h3>
              <p className="text-xs text-[#909090] font-sans leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 07 — THE AI PORTAL
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center p-8 md:p-12 rounded-sm border border-white/10 bg-[#080808] relative overflow-hidden select-none space-y-12" id="scene-07">
        
        {/* Subtle AI Ambient Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D90429]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 07 / DGEN Z AI LAB
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight font-sans">
            BUSINESS MEETS<br />
            <span className="text-[#D90429]">INTELLIGENCE.</span>
          </h2>
        </div>

        {/* Orbiting Capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {[
            "AI CHATBOTS",
            "AI SALES AGENTS",
            "LEAD QUALIFICATION",
            "WORKFLOW AUTOMATION",
            "CUSTOMER SUPPORT",
            "AI CONTENT SYSTEMS",
            "SMART BUSINESS TOOLS",
            "24/7 AUTOMATED INBOX"
          ].map((cap, i) => (
            <div key={i} className="p-4 rounded-sm bg-[#030303] border border-white/5 space-y-1 hover:border-[#D90429]/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] inline-block mb-1" />
              <h3 className="text-xs font-mono font-bold text-[#F7F7F7] uppercase tracking-wider">{cap}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 08 — MEET VEER.1
         ================================================== */}
      <section className="min-h-[75vh] flex flex-col justify-center select-none" id="scene-08">
        <div className="p-8 md:p-12 rounded-sm border border-[#D90429]/40 bg-[#080808] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D90429]/10 border border-[#D90429]/30 text-[#D90429] text-[10px] font-mono uppercase tracking-widest font-bold">
              <Bot className="w-3.5 h-3.5" /> FEATURED AI GROWTH CONSULTANT
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#F7F7F7] uppercase font-sans tracking-tight">
              MEET VEER.1
            </h2>
            <p className="text-xs md:text-sm text-[#909090] font-sans leading-relaxed">
              VEER.1 is DGEN Z&#39;s AI Business Growth Consultant. Designed to help website visitors understand our services, explore potential growth opportunities, calculate scope lines, and connect with founder Sobhit Jaiswal instantly.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["BUSINESS ANALYSIS", "DIGITAL STRATEGY", "LEAD QUALIFICATION", "24/7 CONVERSATION"].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-[#030303] border border-white/10 text-[10px] font-mono text-neutral-300 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleOpenVeer}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D90429] hover:bg-[#D90429]/90 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg shadow-[#D90429]/25 transition-all outline-none cursor-pointer"
            >
              TALK TO VEER.1 <Bot className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* ==================================================
          SCENE 09 — CLIENT WORK UNIVERSE (SELECTED REALITY)
         ================================================== */}
      <section className="min-h-[90vh] flex flex-col justify-center space-y-16 select-none" id="selected-work">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 09 / SELECTED REALITY
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            SELECTED REALITY
          </h2>
          <p className="text-sm font-mono text-[#909090] uppercase tracking-wider">
            Real clients. Real business problems. Purpose-built digital solutions.
          </p>
        </div>

        {/* Real Client Case Studies */}
        <div className="space-y-12">
          {selectedProjects.map((proj) => (
            <div
              key={proj.num}
              className="p-8 md:p-12 rounded-sm border border-white/10 bg-[#080808] space-y-8 relative overflow-hidden hover:border-[#D90429]/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono text-[#D90429] font-bold tracking-widest block uppercase">
                    PROJECT {proj.num}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-[#F7F7F7] uppercase tracking-tight font-sans mt-1">
                    {proj.client}
                  </h3>
                </div>

                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-neutral-400 block uppercase">
                    {proj.industry}
                  </span>
                  <span className="text-xs font-mono text-[#909090] block mt-1 uppercase">
                    {proj.services}
                  </span>
                </div>
              </div>

              {/* Case Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-sm bg-[#030303] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#D90429] uppercase tracking-widest block font-bold">
                    CHALLENGE
                  </span>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {proj.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#030303] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                    THINKING
                  </span>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {proj.thinking}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#030303] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                    SYSTEM
                  </span>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {proj.system}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#030303] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                    EXECUTION
                  </span>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {proj.execution}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#030303] border border-[#39ff14]/30 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#39ff14] uppercase tracking-widest block font-bold">
                    OUTCOME
                  </span>
                  <p className="text-xs text-[#F7F7F7] font-sans leading-relaxed font-medium">
                    {proj.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={`https://wa.me/919681168381?text=Hello%20DGEN%20Z%2C%20I%20want%20to%20discuss%20a%20similar%20project%20like%20${encodeURIComponent(proj.client)}`}
                  target="_blank"
                  rel="no-referrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D90429] hover:text-[#D90429]/80 uppercase tracking-widest hover:underline"
                >
                  DISCUSS SIMILAR PROJECT <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 10 — CREATIVE EXPERIMENTS (DGEN Z LAB)
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-10 select-none" id="lab">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 10 / DGEN Z LAB
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            CREATIVE EXPERIMENTS
          </h2>
          <p className="text-sm font-mono text-[#909090] uppercase tracking-wider">
            Where strategic design meets emerging technology.
          </p>
        </div>

        <PortfolioShowcase />
      </section>


      {/* ==================================================
          SCENE 11 — THE PROCESS TUNNEL
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="process">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 11 / THE PROCESS TUNNEL
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            FROM IDEA TO IMPACT.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {[
            { step: "01", t: "DISCOVER", d: "Understand business goals & constraints." },
            { step: "02", t: "THINK", d: "Analyze market & customer intent." },
            { step: "03", t: "STRATEGIZE", d: "Formulate digital roadmap & architecture." },
            { step: "04", t: "DESIGN", d: "Craft high-contrast visual assets." },
            { step: "05", t: "BUILD", d: "Develop responsive, high-speed code." },
            { step: "06", t: "LAUNCH", d: "Deploy, audit Core Web Vitals & index." },
            { step: "07", t: "GROW", d: "Measure, optimize & scale performance." }
          ].map((s, i) => (
            <div key={i} className="p-5 rounded-sm border border-white/5 bg-[#080808] space-y-3 hover:border-[#D90429]/40 transition-all">
              <span className="font-mono text-2xl font-bold text-[#D90429] block">{s.step}</span>
              <h3 className="text-xs font-mono font-bold text-[#F7F7F7] uppercase tracking-wider">{s.t}</h3>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================
          SCENE 12 — FOUNDER / HUMAN ELEMENT
         ================================================== */}
      <section className="min-h-[75vh] flex flex-col justify-center p-8 md:p-12 rounded-sm border border-white/10 bg-[#080808] relative overflow-hidden select-none" id="founder">
        <div className="max-w-3xl space-y-6">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 12 / HUMAN ELEMENT
          </div>

          <h2 className="text-3xl md:text-6xl font-black uppercase text-[#F7F7F7] tracking-tight leading-tight font-sans">
            BEHIND THE SYSTEM.
          </h2>

          <div className="space-y-4 text-sm text-[#909090] font-sans leading-relaxed">
            <p className="text-[#F7F7F7] font-medium text-base">
              DGEN Z was built around one simple idea: Businesses shouldn&#39;t need disconnected providers for design, technology, marketing and AI.
            </p>
            <p>
              We&#39;re building one ecosystem where all of them work together. Based at our headquarters in Kolkata, West Bengal, we engineer digital systems that elevate perceived brand status and capture qualified business inquiries.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-sm font-sans font-bold text-[#F7F7F7] uppercase block">Sobhit Jaiswal</span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Founder & Chief Brand Architect — DGEN Z</span>
            </div>

            <a
              href="tel:+919681168381"
              className="text-xs font-mono text-[#39ff14] hover:underline uppercase font-bold"
            >
              +91 96811 68381
            </a>
          </div>
        </div>
      </section>


      {/* ==================================================
          SCENE 13 — FINAL WORLD & PROPOSAL CONVERSION
         ================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center space-y-12 select-none" id="proposal">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SCENE 13 / FINAL CONVERSION
          </div>
          <h2 className="text-4xl sm:text-7xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            YOUR NEXT DIGITAL CHAPTER<br />
            <span className="text-[#D90429]">STARTS HERE.</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#909090] uppercase tracking-wider">
            Configure your project scope or speak directly with founder Sobhit Jaiswal.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20start%20a%20project%20with%20DGEN%20Z."
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D90429] hover:bg-[#D90429]/90 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg shadow-[#D90429]/25 transition-all outline-none"
            >
              START A PROJECT →
            </a>

            <button
              onClick={handleOpenVeer}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#080808] border border-white/20 hover:border-white/40 text-[#F7F7F7] font-sans font-medium text-xs uppercase tracking-widest rounded-sm transition-all outline-none cursor-pointer"
            >
              TALK TO VEER.1 <Bot className="w-4 h-4 text-[#D90429]" />
            </button>
          </div>
        </div>

        {/* Lead Proposal Wizard */}
        <LeadWizard />
      </section>


      {/* ==================================================
          20 OPTIMIZED SECTOR INTELLIGENCE FAQS
         ================================================== */}
      <section className="space-y-10 select-none pt-12" id="faq">
        <div className="space-y-3">
          <div className="text-[#D90429] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            SECTOR INTELLIGENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#F7F7F7] tracking-tight leading-none font-sans">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-sm border border-white/10 bg-[#080808] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 outline-none cursor-pointer"
                >
                  <span className="text-[#F7F7F7] font-sans font-bold text-xs md:text-sm uppercase tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#909090] shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#D90429]" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 font-sans text-xs md:text-sm text-[#909090] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
