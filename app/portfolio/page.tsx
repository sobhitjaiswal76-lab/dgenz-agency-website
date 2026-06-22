"use client";

import React from "react";
import PortfolioShowcase from "../../components/PortfolioShowcase";
import { Sparkles } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="space-y-12 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Sparkles className="w-3.5 h-3.5 text-crimson" /> Curated Creative Vaults
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none animate-fade-in">
          VISUAL AUTHORITY<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            BLUEPRINT SHOWCASE
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Explore our masonry archive of graphic designs, automated website hubs, brand redesign guidelines, and corporate ppt presentation materials. Every item here is a real-world solution built for customer acquisition.
        </p>
      </div>

      <PortfolioShowcase />

    </div>
  );
}
