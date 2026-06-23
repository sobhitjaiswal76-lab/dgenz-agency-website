"use client";

import React from "react";
import { CheckCircle2, Award, Zap, HeartHandshake, Sparkles, Phone, FileText } from "lucide-react";
import CustomQuoteCTA from "@/components/CustomQuoteCTA";

export default function ServicesPage() {
  const categories = [
    {
      title: "Premium Graphic & Logo Design",
      desc: "Delivering visual authority that positions your brand as an elite market player. Target keywords: Logo Design Services, packaging designs Kolkata.",
      color: "from-crimson to-black",
      items: [
        { name: "Sleek Vector Logo Design", price: "Custom Pricing", turn: "3 Days" },
        { name: "Visual Identity & Branding Guides", price: "Tailored Packages", turn: "5 Days" },
        { name: "High Conversion Poster/Banner Layouts", price: "Request a Quote", turn: "2 Days" },
        { name: "Creative Box & Jar Packaging Designs", price: "Contact for Pricing", turn: "4 Days" },
        { name: "Professional Standee & Flyer Creations", price: "Request a Quote", turn: "2 Days" }
      ]
    },
    {
      title: "Futuristic Web & Automation Development",
      desc: "Coding fully customized Next.js engines optimized for fast load speeds and auto-capturing client leads. Target: Website Designer Kolkata.",
      color: "from-neon-green/40 to-black",
      items: [
        { name: "Lead Generation Business Websites", price: "Custom Pricing", turn: "5 Days" },
        { name: "Full E-Commerce Parallax Storefronts", price: "Tailored Packages", turn: "9 Days" },
        { name: "Google Business Profile Rankings System", price: "Request a Quote", turn: "4 Days" },
        { name: "Server AI Chatbots & DM Automations", price: "Custom Pricing", turn: "6 Days" },
        { name: "Custom Portfolio / SaaS Frameworks", price: "Contact for Pricing", turn: "8 Days" }
      ]
    },
    {
      title: "Business Documentation & Pitch Decks",
      desc: "Structuring high ticket PowerPoint layouts and documentation blueprints aimed at raising seed capitals or locking down contracts.",
      color: "from-crimson/40 to-black",
      items: [
        { name: "Series A / Seed Capital Pitch Decks", price: "Custom Pricing", turn: "6 Days" },
        { name: "Professional Corporate PowerPoint Templates", price: "Tailored Packages", turn: "4 Days" },
        { name: "Google Docs Layout Formatting & PDFs", price: "Request a Quote", turn: "3 Days" },
        { name: "Interactive Sales Slides & Summaries", price: "Contact for Pricing", turn: "3 Days" }
      ]
    }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Sparkles className="w-3.5 h-3.5 text-crimson" /> Core Services Directory
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none">
          ELITE SOLUTIONS<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            CATALOG MATRIX
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Browse our complete menu of premium visual packages. Every deliverable is hand-crafted with matte black aesthetic outlines, pixel precision, and conversion triggers tailored for local business growth.
        </p>
      </div>

      {/* Services Breakdowns */}
      <div className="space-y-12">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden"
          >
            {/* Ambient Glimmer overlay */}
            <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${cat.color}`} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
              <div className="space-y-3">
                <span className="text-crimson font-mono text-xs uppercase tracking-widest block font-bold">PILLAR 0{idx + 1}</span>
                <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <div className="pt-4 hidden lg:block">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-black/40 border border-white/10 hover:border-crimson/30 text-white font-sans text-xs uppercase tracking-wider transition-all"
                  >
                    Quick Brief <HeartHandshake className="w-3.5 h-3.5 text-crimson" />
                  </a>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-2 space-y-3.5">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/5 bg-black/40 hover:border-crimson/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-crimson/5 group-hover:bg-crimson/10 text-crimson transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wide group-hover:text-crimson transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                          Estimated Turnaround: <strong className="text-gray-400">{item.turn}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                      <span className="text-neon-green font-mono text-xs font-bold bg-neutral-900/40 px-2.5 py-1 rounded border border-neon-green/20 neon-glow-green">
                        {item.price}
                      </span>
                      <a
                        href={`https://wa.me/919681168381?text=Hello%20DGEN%20Z%2C%20I%20want%20to%20know%20more%20about%20your%20solution%3A%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="no-referrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-black/40 border border-white/10 hover:border-crimson/30 text-gray-400 hover:text-white text-[10px] font-mono uppercase tracking-wider transition-colors"
                      >
                        Enquire <Phone className="w-3 h-3 text-crimson" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomQuoteCTA />

    </div>
  );
}
