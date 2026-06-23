"use client";

import React from "react";
import { PhoneCall, Calendar, MessageSquare, ArrowRight } from "lucide-react";

export default function CustomQuoteCTA() {
  return (
    <div className="relative p-8 md:p-14 rounded-2xl border border-white/[0.08] bg-black/40 glass overflow-hidden text-center max-w-4xl mx-auto space-y-8 my-12" id="custom-quote-cta">
      {/* Visual neon grid background back accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-crimson/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          Custom Consultation Matrix
        </span>
        <h2 className="text-2xl md:text-4xl font-sans font-black text-white uppercase leading-tight tracking-tight">
          Every Business Has <br className="hidden sm:block" />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            Different Requirements
          </span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto">
          We create customized solutions based on your goals, industry, and growth stage. Partner with Sobhit Jaiswal to build a direct roadmap designed for high ROI and brand dominance.
        </p>
      </div>

      {/* Button Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <a
          href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%2520to%20get%20a%20Custom%20Quote%20for%20my%20business."
          target="_blank"
          rel="no-referrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-crimson/25 cursor-pointer"
          id="cta-get-quote"
        >
          Get Custom Quote <ArrowRight className="w-4 h-4 text-white" />
        </a>

        <a
          href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20book%20a%20Free%20Consultation."
          target="_blank"
          rel="no-referrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          id="cta-book-consultation"
        >
          Book Free Consultation <Calendar className="w-4 h-4 text-crimson" />
        </a>

        <a
          href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20chat%20on%20WhatsApp."
          target="_blank"
          rel="no-referrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          id="cta-whatsapp-now"
        >
          WhatsApp Now <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
