"use client";

import React from "react";
import { Zap, Search, Phone, Monitor } from "lucide-react";

export default function WebsitesPage() {
  const steps = [
    { t: "1. STRATEGY SIZING", d: "We map your specific target buyers' journey and structure wireframe screens for maximum conversions." },
    { t: "2. MATTE BRANDING & UI DESIGN", d: "Custom vector UI designs built around high contrast dark themes, neon light sources, and glass elements." },
    { t: "3. TS & NEXTJS DEVELOPMENT", d: "Hand-crafted Next.js 15 app router layouts compiled with zero bloat and standard mobile optimizations." },
    { t: "4. FULL SPEED & SEO AUDITS", d: "Google local search schema configurations, lightning-fast deployment scripts, and GBP spots lockings." }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Monitor className="w-3.5 h-3.5 text-crimson" /> Web Engineering Studio
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none animate-fade-in">
          WEBSITE DEVELOPMENT COMPANY &<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            PROFESSIONAL WEB DESIGN KOLKATA
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Stop losing potential clients to slow, generic templates. At <strong className="text-white">DGEN Z Website Design Company</strong>, we engineer and deploy high-performance custom Next.js websites, e-commerce storefronts, and premium web design assets from Kolkata that project absolute visual authority, rank high on Google local search results, and capture incoming client traffic automatically.
        </p>
      </div>

      {/* Main Core Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Zap className="w-5 h-5 text-crimson" />,
            title: "LIGHTNING PERFORMANCE",
            desc: "Pages that load in under 2 seconds. Better speed means lower customer bounce rates and higher sales transaction approvals."
          },
          {
            icon: <Search className="w-5 h-5 text-neon-green neon-glow-green" />,
            title: "GOOGLE LOCAL SEO READY",
            desc: "Fully integrated structured schema markings and local keywords targeting Kolkata and global regions to place you #1."
          },
          {
            icon: <Phone className="w-5 h-5 text-crimson" />,
            title: "WHATSAPP FUNNEL TRAPS",
            desc: "Smart client communication captures, direct floating order buttons, and automatic pre-filled greetings to secure contact."
          }
        ].map((feat, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/5 bg-black/40 hover:border-crimson/20 transition-all space-y-4 shadow shadow-black"
          >
            <div className="p-2.5 rounded bg-black border border-white/10 w-fit">
              {feat.icon}
            </div>
            <h3 className="text-white font-sans font-extrabold text-sm uppercase tracking-wide">
              {feat.title}
            </h3>
            <p className="text-gray-400 font-sans text-xs leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Development Sprints */}
      <div className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-crimson via-crimson/70 to-neon-green opacity-60" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-crimson font-mono text-xs uppercase tracking-widest block font-bold">THE ROADMAP</span>
            <h2 className="text-2xl md:text-4xl font-sans font-black text-white uppercase leading-none tracking-tight">
              HOW WE ENGINEER DIGITAL WEAPONS
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-sans leading-relaxed">
              Every website project DGEN Z executes undergoes a highly disciplined four-stage development sprint. This ensures your deployment aligns precisely with visual expectations and passes production Core Web Vitals checks.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%2520to%20review%2520our%20website%20development%20process."
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-crimson/25 cursor-pointer"
              >
                Start My Website Design Sizing
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((st, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/5 bg-black/40 hover:border-crimson/20 transition-all">
                <h4 className="text-crimson font-mono text-xs uppercase tracking-widest font-bold mb-1">{st.t}</h4>
                <p className="text-gray-400 text-xs font-sans leading-relaxed">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
