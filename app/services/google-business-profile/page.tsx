"use client";

import React from "react";
import { Sparkles, MapPin, CheckCircle2, Phone, ArrowUpRight } from "lucide-react";
import CustomQuoteCTA from "@/components/CustomQuoteCTA";

export default function GoogleBusinessProfilePage() {
  const offerings = [
    {
      title: "GBP Authority Setup & Lock",
      time: "4 Days",
      price: "Custom Pricing",
      desc: "Complete optimization of maps tags, categories structuring, review collection flows automation, and verification locking."
    },
    {
      title: "Kolkata Local Citation Blueprint",
      time: "6 Days",
      price: "Tailored Packages",
      desc: "Deploying 120+ targeted local business listings, geotagged photos uploads, and neighborhood anchor keywords mapping."
    },
    {
      title: "Weekly Rankings Review Pack",
      time: "Monthly",
      price: "Request a Quote",
      desc: "Automated review harvest monitoring, targeted product showcase updates, and Maps keyword placement tracking reports."
    }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <MapPin className="w-3.5 h-3.5 text-crimson animate-pulse" /> Local Maps Dominance
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none">
          GOOGLE BUSINESS PROFILE<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            MAPS SEARCH #1 LOCK
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          If your customers cannot locate you instantly on Google Maps, you do not exist. We restructure your business rankings, construct auto-geotag schemas, and lock down premium local areas in Kolkata and beyond.
        </p>
      </div>

      {/* Grid Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/35 transition-all flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">
                  TACTICAL STEP 0{i + 1}
                </span>
                <span className="text-neon-green font-mono text-xs font-bold bg-neutral-900/40 px-2.5 py-1 rounded border border-neon-green/20 neon-glow-green">
                  {item.price}
                </span>
              </div>
              <h3 className="text-white font-sans font-black text-lg uppercase tracking-wide group-hover:text-crimson transition-all">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Setup Cycle: <strong className="text-gray-300 font-sans font-bold">{item.time}</strong>
              </span>
              <a
                href={`https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%2520to%21order%20the%2520GBP%2520Optimisation%2520service%3A%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-1 text-xs text-crimson hover:text-white transition-colors uppercase font-mono font-bold"
              >
                Enquire <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <CustomQuoteCTA />

    </div>
  );
}
