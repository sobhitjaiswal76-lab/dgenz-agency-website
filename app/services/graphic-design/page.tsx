"use client";

import React from "react";
import { Sparkles, Palette, CheckCircle2, Phone, ArrowUpRight } from "lucide-react";

export default function GraphicDesignPage() {
  const offerings = [
    {
      title: "Sleek Vector Logo Design",
      time: "3 Days",
      price: "Starting $90",
      desc: "Pixel-perfect scalable vector typography and brand iconography tailored to establish immediate visual trust."
    },
    {
      title: "Corporate Identity Guidelines",
      time: "5 Days",
      price: "Starting $250",
      desc: "Complete branding blueprints including select font pairings, matte-black hex ranges, and system assets."
    },
    {
      title: "Marketing Poster Layouts",
      time: "2 Days",
      price: "Starting $40",
      desc: "High contrast social flyers, media banners, and roll-up standees optimized for offline or digital campaigns."
    },
    {
      title: "Premium Packaging & Labels",
      time: "4 Days",
      price: "Starting $150",
      desc: "Luxury structured container packaging, matte varnish label layouts, and artisanal product hot foil stampings."
    }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Palette className="w-3.5 h-3.5 text-crimson animate-pulse" /> Graphic & Brand Forge
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none">
          PREMIUM GRAPHIC DESIGNS<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            ELITE BRAND AUTHORITY
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Visual perception is the ultimate sales filter. DGEN Z constructs custom brand icons, editorial collateral, and luxury physical packaging assets that command market premium and secure incoming leads automatically.
        </p>
      </div>

      {/* Grid Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offerings.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/35 transition-all flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">
                  DELIVERABLE 0{i + 1}
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
                Turnaround: <strong className="text-gray-300 font-sans font-bold">{item.time}</strong>
              </span>
              <a
                href={`https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%2520to%20order%20the%2520Graphic%2520Design%2520service%3A%20${encodeURIComponent(item.title)}`}
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
      <div className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase leading-none tracking-tight mb-4">
          WANT TO RE-ENGINEER YOUR VISUAL IDENTITY?
        </h2>
        <p className="text-gray-400 text-xs md:text-sm font-sans leading-relaxed max-w-2xl mx-auto mb-6">
          Get a fully custom identity layout package with custom typography, brand palette, and editable vector files delivered directly to your core repository.
        </p>
        <a
          href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20discuss%20a%20full%20brand%20identity%20re-design."
          target="_blank"
          rel="no-referrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-crimson/25 cursor-pointer"
        >
          Book Brand Consultation <Phone className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
