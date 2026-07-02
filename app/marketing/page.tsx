"use client";

import React from "react";
import { TrendingUp, CheckCircle2, Phone } from "lucide-react";
import CustomQuoteCTA from "@/components/CustomQuoteCTA";

export default function MarketingPage() {
  const plans = [
    {
      name: "Local Search Dominance",
      sub: "Map Listing & GBP Optimizations",
      price: "Custom Pricing",
      features: [
        "Google Business Profile (GBP) Creation & Setup",
        "Competitor zone citations and local backlinks",
        "Review harvesting automated links",
        "Weekly geo-tagged photo deployments",
        "Google Maps keywords rankings reports"
      ]
    },
    {
      name: "Instagram Growth Package",
      sub: "Organic Branding & Design Funnels",
      price: "Tailored Packages",
      features: [
        "Curated visual matte black grid setups (9 posts)",
        "Daily automated story conversion graphics",
        "Custom high ticket caption copywriting",
        "Hashtags schema targeted for Kolkata area",
        "Direct chat automated responses setup"
      ]
    },
    {
      name: "The Complete Acquisition Engine",
      sub: "Full Visual Strategy & Performance",
      price: "Request a Quote",
      features: [
        "All GBP rankings + Instagram growth solutions",
        "Monthly custom promo/banner design deliverables",
        "Google Forms & landing inquiries integrations",
        "Direct founder support by Sobhit Jaiswal",
        "Bi-weekly strategic analytics reviews"
      ]
    }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <TrendingUp className="w-3.5 h-3.5 text-crimson animate-pulse" /> Growth Marketing Agency
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none animate-fade-in">
          DIGITAL MARKETING AGENCY KOLKATA &<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            LOCAL LEAD ACQUISITION SYSTEMS
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Stop bleeding advertising cash on slow, low-converting campaigns. At <strong className="text-white">DGEN Z Digital Marketing Agency</strong>, founded by chief strategist <strong className="text-white">Sobhit Jaiswal</strong>, we construct premium, visual-authoritative marketing campaigns, high-impact Instagram content designs, and elite Google Business Profile optimizations to rank you #1 on local maps and scale client acquisitions automatically.
        </p>
      </div>

      {/* Grid Services plans block */}
      <div className="space-y-6">
        <div className="text-left">
          <span className="text-crimson font-mono text-xs uppercase tracking-widest block font-bold">THE PLANS</span>
          <h3 className="text-2xl font-sans font-black text-white uppercase tracking-wide mt-1">
            GROWTH PACKAGES FOR LOCAL LEADERS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/35 transition-all flex flex-col justify-between space-y-8 relative group"
            >
              {/* Highlight background shine */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 rounded-full blur-2xl pointer-events-none group-hover:bg-crimson/15 transition-all" />

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-sans font-black text-lg uppercase tracking-tight leading-tight">{plan.name}</h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5 block">{plan.sub}</span>
                </div>

                <div className="text-2xl font-mono font-black text-crimson">{plan.price}</div>

                <div className="border-t border-white/5 pt-4 space-y-2.5">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-normal">
                      <CheckCircle2 className="w-4.5 h-4.5 text-neon-green flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%2520to%20discuss%20the%2520growth%2520marketing%2520plan%3A%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-black/40 hover:bg-crimson hover:text-white text-gray-450 text-xs font-sans font-bold uppercase tracking-wider transition-all border border-white/10 hover:border-crimson cursor-pointer"
                >
                  Enquire Now <Phone className="w-3.5 h-3.5 text-crimson group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CustomQuoteCTA />

    </div>
  );
}
