"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Zap,
  CheckCircle2,
  Bookmark,
  ChevronDown,
  Phone,
  Compass,
  Send,
  Calendar,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  Clock,
  UserCheck,
  Star,
  Users
} from "lucide-react";
import LeadWizard from "../components/LeadWizard";
import PortfolioShowcase from "../components/PortfolioShowcase";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Active FAQ data mapping pricing, timeline, digital capabilities
  const faqs = [
    {
      q: "What makes DGEN Z different from standard web design agencies?",
      a: "DGEN Z does not produce generic templates. We build modern digital assets backed by custom visual authority, conversion grids, and direct WhatsApp / SEO funnels. The owner Sobhit Jaiswal aligns every detail directly to increase client acquisitions and brand value, creating a lead-generating machine for your business."
    },
    {
      q: "How fast is the turnaround delivery for custom websites and branding packages?",
      a: "Our normal delivery pipeline is exceptionally fast. Standard high-conversion business websites and branding packages are engineered, tested, and deployed in 3 to 7 business days, without sacrificing visual depth or PageSpeed metrics."
    },
    {
      q: "What is your website development pricing structure?",
      a: "We provide scalable investments. Our Starter plans begin around $300 - $600 for high converting landing pages, going up to highly customized premium custom enterprise architectures with real-time AI capabilities. Every package has zero hidden fees and comes with 1-on-1 direct support."
    },
    {
      q: "Do you integrate AI chatbots and automated systems?",
      a: "Yes. DGEN Z specializes in building custom business automations, automated Instagram replying triggers, Facebook growth structures, and server-side Gemini AI models that solve customer inquiries 24/7."
    },
    {
      q: "Will my business website rank well on Google search in Kolkata or global?",
      a: "Absolutely. Every website we compile includes fully-integrated Google Schema markings, clean HTML meta blocks, fast mobile-first page rendering times, and complete setup of your Google Business Profile (GBP) to secure high local rankings."
    }
  ];

  const services = [
    {
      title: "Graphic & Brand Design",
      items: ["Poster & Banner Design", "Visual Logo Concepts", "Flyer & Standee Creations", "Premium Packaging Layouts", "Menu Cards & Digital Assets"]
    },
    {
      title: "Digital Performance Forge",
      items: ["Website Development", "Instagram Automation Triggers", "Google Business Profile Rankings", "AI Chatbot Engineering", "Social Growth Consultations"]
    },
    {
      title: "Document Services",
      items: ["Professional PPT & PDF Design", "Professional Pitch Decks", "Google Forms & Document Formatting", "Interactive Sales Slides", "Pitch Books"]
    }
  ];

  return (
    <>
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="min-h-[85vh] flex flex-col justify-center py-12 relative overflow-hidden select-none">
        <div className="space-y-6 max-w-4xl text-left relative z-10">
          
          {/* Accent micro banner */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono uppercase tracking-widest leading-none">
            <Sparkles className="w-3.5 h-3.5 text-neon-green" /> High Performance Digital Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.05] uppercase">
            {"WE DON'T JUST DESIGN."}<br />
            <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
              WE BUILD DIGITAL POWER.
            </span>
          </h1>

          <p className="text-gray-400 font-sans text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
            Helping Local & International Businesses Grow Through Premium Design, Custom Websites, Result-Driven Marketing & Smart AI Automations.
          </p>

          {/* Real CTA triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#ai-blueprint"
              className="inline-flex items-center gap-2 px-8 py-4 bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-crimson/25 hover:-translate-y-0.5 active:translate-y-0 transition-all outline-none"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#masonry-gallery"
              className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-sans font-medium text-xs uppercase tracking-widest rounded-sm transition-all outline-none"
            >
              View Our Work
            </a>
            <a
              href="https://wa.me/919681168381"
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon-green hover:text-neon-green/90 uppercase tracking-widest hover:underline outline-none px-2 neon-glow-green"
            >
              <Phone className="w-3.5 h-3.5" /> Fast Whatsapp Connect
            </a>
          </div>

          {/* Quality Stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            <div>
              <div className="text-3xl font-sans font-black text-white">15+</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-crimson">24/7</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Auto Lead Enquiries</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-neon-green neon-glow-green">100%</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Business Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-gray-400">Ultra</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Fast Delivery Forge</div>
            </div>
          </div>
        </div>
      </section>


      {/* ----------------- 2. SERVICES SECTION ----------------- */}
      <section className="space-y-12 select-none" id="services">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            01 / CRITICAL BLUEPRINTS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black p-0 uppercase leading-none tracking-tight text-white">
            HIGH TICKET SOLUTIONS
          </h2>
          <p className="max-w-xl text-gray-400 font-sans text-xs md:text-sm">
            Everything designed is an intellectual blueprint meant to increase leads, WhatsApp engagement, and elevate company prestige.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/30 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg"
            >
              {/* Corner ambient visual outline decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 rounded-full blur-2xl pointer-events-none group-hover:bg-crimson/15 transition-all" />

              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                  <h3 className="text-white font-sans font-black text-base uppercase tracking-wider">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                      <span className="font-sans leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#ai-blueprint"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 text-white font-sans text-xs uppercase tracking-widest font-bold transition-all bg-zinc-950/40"
                >
                  Configure Package <Zap className="w-3.5 h-3.5 text-crimson" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ----------------- 3. WEBSITE DEVELOPMENT BENEFITS ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass backdrop-blur-md relative overflow-hidden select-none" id="websites">
        {/* Subtle linear overlay */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-crimson/40 to-neon-green/30" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-neon-green font-mono text-xs uppercase tracking-widest font-bold neon-glow-green">
              02 / WEBSITES THAT WORK 24×7
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
              LEAD CAPTURING PERFORMANCE FORGES
            </h2>
            <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
              An unoptimized website is lost cash flow. Every digital gateway DGEN Z engineers is coded desktop-first with elegant speed indexes, local Google local optimization slots, and direct click-to-WhatsApp enquiries setup to secure trust instantly.
            </p>

            <div className="pt-2">
              <a
                href="#ai-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-neon-green/20 outline-none"
              >
                Assemble My Website Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { t: "Generate Active Leads", d: "Built with specific forms that funnel prospects instantly." },
              { t: "Build Unshakable Trust", d: "Luxury presentation graphics raise perceived authority 10x." },
              { t: "Appear Highly Professional", d: "Ditch generic templates for hand-crafted fluid layouts." },
              { t: "Kolkata Local Visibility", d: "Integrated GBP mappings show you inside target search zones." },
              { t: "WhatsApp Conversion Trackers", d: "Direct floating click-to-chat triggers secure inquiries fast." },
              { t: "Continuous Growth Scales", d: "A digital assets anchor ready to scale paid marketing fuels." }
            ].map((b, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/5 bg-black/40 space-y-1.5">
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> {b.t}
                </h4>
                <p className="text-gray-500 text-[11px] font-sans leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ----------------- 4. NEURAL CO-PILOT SUBMISSION IN-SITE ----------------- */}
      <section className="space-y-8 select-none">
        <div className="text-center space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            03 / INSTANT PROPOSAL LAB
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-none">
            ENGINEER YOUR CUSTOM ROADMAP
          </h2>
          <p className="max-w-lg mx-auto text-gray-400 font-sans text-xs md:text-sm">
            Unlock the ultimate client-generating experience. Formulate your brand scope and watch our server-side co-pilot build visual solutions.
          </p>
        </div>

        <LeadWizard />
      </section>


      {/* ----------------- 5. MASONRY PORTFOLIO GALLERY ----------------- */}
      <section className="space-y-10 select-none">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            04 / EXPERIMENTAL VAULTS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white tracking-tight leading-none">
            CURATED CREATIVE ARCHIVES
          </h2>
          <p className="max-w-xl text-gray-400 font-sans text-xs md:text-sm">
            Showcasing real design deliverables designed with cinematic visual grids, matte black aesthetics, and high performance conversion targets.
          </p>
        </div>

        <PortfolioShowcase />
      </section>


      {/* ----------------- 6. ABOUT FOUNDER SOBHIT JAISWAL ----------------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center select-none" id="about">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-black/20 glass space-y-6 relative overflow-hidden">
          {/* Subtle design block background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-block text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            05 / THE MAN BEHIND DGEN Z
          </div>
          <h3 className="text-3xl md:text-4xl font-sans font-black text-white uppercase leading-tight tracking-tight">
            MEET FOUNDER SOBHIT JAISWAL
          </h3>
          <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            {"\"I didn't launch DGEN Z to be another passive design studio. I engineered it because local businesses in India and global startups are tired of buying boring, low-performing graphics that bring zero inquiries.\""}
          </p>
          <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            {"Operating from our visual headquarters in Kolkata, we specialize in elevating your company's aesthetic prestige first. Because we believe excellent design commands higher premium pricing and instant sales conversions from your first visitor."}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <div>
              <div className="text-white font-sans font-black text-sm uppercase leading-none">Sobhit Jaiswal</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Director & Chief Brand Architect</div>
            </div>
            <span className="text-zinc-800 text-lg">|</span>
            <div>
              <div className="text-neon-green font-sans font-black text-xs uppercase leading-none neon-glow-green">Direct Connection</div>
              <a href="tel:+919681168381" className="text-[11px] font-mono text-gray-300 tracking-wide hover:underline block mt-1">+91 96811 68381</a>
            </div>
          </div>
        </div>

        {/* Local Case Study Section block */}
        <div className="space-y-6">
          <div className="inline-block text-neon-green font-mono text-xs uppercase tracking-widest font-bold neon-glow-green">
            06 / REAL WORLD REVENUE FIXES
          </div>
          <h3 className="text-2xl font-sans font-black text-white uppercase leading-none tracking-tight">
            CASE STUDY: KOLKATA RESTAURANT WIN
          </h3>

          <div className="divide-y divide-white/5 space-y-4">
            <div className="pt-2">
              <span className="text-[10px] font-mono text-crimson uppercase block tracking-wider font-bold">The Bottleneck Challenge</span>
              <p className="text-gray-400 text-xs font-sans mt-1">
                A popular local cafe in South Kolkata had standard zero-prestige social posts and a basic generic PDF menu. Over 80% of warm traffic visiting their profile bounced.
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono text-neon-green uppercase block tracking-wider font-bold neon-glow-green">The DGEN Z Fix</span>
              <p className="text-gray-400 text-xs font-sans mt-1">
                We rebuilt a stunning glassmorphic custom single-page menu hub, configured their local Google Business profile SEO coordinates, and launched automated DM templates for ordering.
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono text-white uppercase block tracking-wider font-bold">Metrics Result</span>
              <p className="text-white text-xs font-sans font-bold flex items-center gap-2 mt-1 uppercase">
                <TrendingUp className="w-4.5 h-4.5 text-neon-green" /> +160% Monthly Inquiries & Google Maps discovery surged 3x within 15 days.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ----------------- 7. INTERACTIVE PROCESS TIMELINE ----------------- */}
      <section className="space-y-12 select-none" id="process">
        <div className="text-center space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            07 / OPERATIONAL BLUEPRINT
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white">
            THE FORCE DEVELOPMENT MATRIX
          </h2>
          <p className="max-w-lg mx-auto text-gray-400 font-sans text-xs md:text-sm">
            Six disciplined phases to transition your business value into bulletproof visual revenue pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { step: "01", t: "Consultation", d: "1-on-1 strategic brief to unlock bottlenecks with Sobhit." },
            { step: "02", t: "Strategy", d: "We engineer competitive market gaps and layout schemas." },
            { step: "03", t: "Sleek Design", d: "We forge fully custom luxury vector UI assets and icons." },
            { step: "04", t: "Code Forge", d: "We construct lightweight responsive Nextjs performance layers." },
            { step: "05", t: "Deployment", d: "Complete SEO mapping, GBP verified launches, live tests." },
            { step: "06", t: "Live Support", d: "Continuous direct client care and copy calibrations." }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-black/20 glass hover:border-crimson/30 transition-all space-y-3 shadow shadow-black">
              <span className="font-mono text-2xl font-black text-crimson/30 block leading-none">{item.step}</span>
              <h4 className="text-white text-xs font-sans font-bold uppercase tracking-wider">{item.t}</h4>
              <p className="text-gray-500 text-[11px] font-sans leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ----------------- 8. CLIENT TESTIMONIAL SLIDER ----------------- */}
      <section className="space-y-12 select-none">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            08 / ENDORSED VALUE
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white">
            VERIFIED BRAND ENDORSEMENTS
          </h2>
          <p className="max-w-xl text-gray-400 font-sans text-xs md:text-sm">
            Hear from local founders who upgraded their digital setups to command premium market coordinates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "Karan Johar",
              c: "CEO, Vektor Logistics",
              review: "Sobhit's visual quality is spectacular. He rebuilt our entire company deck in PowerPoint and a custom nextjs showcase. We was able to secure our enterprise client contract the very next week!",
              rating: 5
            },
            {
              n: "Priyanka Sen",
              c: "Founder, Soma Organics",
              review: "Our previous website felt outdated and slow. DGEN Z engineered a stunning high-performance portal that ranks first on Google maps local searches. Plus, the automated WhatsApp chat is amazing!",
              rating: 5
            },
            {
              n: "Anirban Roy",
              c: "Director, Roy Jewellers",
              review: "Excellent communication, fast delivery and unbelievable visual polish. The matte black concept looks extremely expensive, making us look premium compared to standard jeweller competitors.",
              rating: 5
            }
          ].map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/5 bg-black/20 glass hover:border-crimson/30 flex flex-col justify-between space-y-6 shadow shadow-black relative group">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-crimson text-crimson" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-sans italic leading-relaxed">{"\""}{t.review}{"\""}</p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-crimson border border-white/5 font-mono text-xs font-bold uppercase">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-sans font-bold text-xs uppercase">{t.n}</h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">{t.c}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ----------------- 9. WHATSAPP CHANNEL BLOCK ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden select-none">
        {/* Glow behind column */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-green/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-mono uppercase tracking-widest leading-none">
            <Compass className="w-3.5 h-3.5" /> High Ticket Business Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight leading-tight">
            JOIN THE DGEN Z WHATSAPP HUB
          </h2>
          <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed max-w-lg mx-auto text-balance">
            Never miss marketing blueprints, modern visual design theories, direct seasonal packaging deals, and high-conversion strategy insights released directly by administrator **Sobhit Jaiswal**.
          </p>

          <div className="pt-2">
            <a
              href="https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-neon-green/20 transition-all active:scale-95 outline-none"
            >
              Secure Entrance To Channel <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </section>


      {/* ----------------- 10. FAQ SECTION ACCORDION ----------------- */}
      <section className="space-y-10 select-none" id="faq">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            09 / SECTOR INTELLIGENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white leading-none">
            FREQUENTLY ENQUIRED SCHEMAS
          </h2>
          <p className="max-w-xl text-gray-400 font-sans text-xs md:text-sm">
            Answers to crucial questions regarding design deliveries, development stacks, and continuous direct client support channels.
          </p>
        </div>

        <div className="max-w-3xl space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-black/20 glass overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-zinc-900/40 outline-none"
                >
                  <span className="text-white font-sans font-extrabold text-sm uppercase tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-crimson" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 font-sans text-xs md:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* ----------------- 11. LEAD GENERATION CONTACT SECTION ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/10 glass relative overflow-hidden select-none" id="contact">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Columns */}
          <div className="space-y-6">
            <div className="inline-block text-crimson font-mono text-xs uppercase tracking-widest font-bold">
              10 / SECURE CONVERSIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
              {"LET'S FUEL YOUR DIGITAL AUTHORITY"}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
              To trigger immediate website, branding, or marketing proposals, lock your spot by writing directly to our founder. Every consultation is completely free of risk, is conducted personally by **Sobhit Jaiswal**, and aims to increase strategic pipelines.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-black/40 text-crimson border border-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">Instant WhatsApp Phone</div>
                  <a href="tel:+919681168381" className="text-white font-sans font-black text-sm block mt-1 hover:underline">+91 96811 68381</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-black/40 text-neon-green border border-white/5">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">Electronic Inbox Address</div>
                  <a href="mailto:creativedgenz32@gmail.com" className="text-white font-sans font-black text-sm block mt-1 hover:underline">creativedgenz32@gmail.com</a>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-mono text-gray-600 uppercase">
              * OFFICE HUB: 5/1 Hari Paul Lane, Kolkata – 700006, India.
            </p>
          </div>

          {/* Quick contact trigger link */}
          <div className="p-6 md:p-8 rounded-xl border border-white/5 bg-black/20 glass flex flex-col justify-center text-center space-y-6 shadow-inner shadow-black/80">
            <h4 className="text-white font-sans font-black uppercase text-xl tracking-tight leading-tight">
              LAUNCH PROPOSAL ENGINE
            </h4>
            <p className="text-gray-400 font-sans text-xs leading-relaxed max-w-md mx-auto">
              Ready to submit detailed budget levels and required solutions? Our interactive co-pilot widget computes customized proposals instantly.
            </p>

            <div className="pt-2">
              <a
                href="#ai-blueprint"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-extrabold text-xs uppercase tracking-wider shadow shadow-crimson/20 transition-all scale-102 hover:-translate-y-0.5"
              >
                Go To Neural Wizard <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
