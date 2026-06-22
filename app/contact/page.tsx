"use client";

import React from "react";
import { Sparkles, Phone, Mail, MapPin, Compass, ArrowUpRight, Terminal } from "lucide-react";
import LeadWizard from "../../components/LeadWizard";

export default function ContactPage() {
  return (
    <div className="space-y-16 py-8 select-none">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Sparkles className="w-3.5 h-3.5 text-crimson" /> Direct Communications Portal
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none animate-fade-in">
          START YOUR DIGITAL<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            POWER BLUEPRINT
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Schedule your free 1-on-1 brand positioning audit with founder Sobhit Jaiswal. Use the server-side proposal wizard below to compute exact scope estimates instantly.
        </p>
      </div>

      {/* Grid: Coordinates & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Contact Coordinates left panel */}
        <div className="space-y-6 col-span-1">
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-black/20 glass space-y-6">
            <span className="text-crimson font-mono text-xs uppercase tracking-widest block font-bold">DIRECTORY CORNER</span>
            <h3 className="text-xl font-sans font-black text-white uppercase tracking-tight">DGEN Z HQ INFORMATION</h3>

            <div className="space-y-4 text-xs font-sans text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block mb-1">Physical Address</span>
                  5/1 Hari Paul Lane,<br />
                  Kolkata – 700006,<br />
                  India
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                <Phone className="w-4.5 h-4.5 text-neon-green flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block mb-1">Direct Calling WhatsApp</span>
                  <a href="tel:+919681168381" className="hover:text-white transition-colors block mt-0.5">+91 96811 68381</a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                <Mail className="w-4.5 h-4.5 text-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block mb-1">Support Email inbox</span>
                  <a href="mailto:creativedgenz32@gmail.com" className="hover:text-white transition-colors block mt-0.5">creativedgenz32@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4">
              <a
                href="https://share.google/0lgoCkGX0x0Tub6FQ"
                target="_blank"
                rel="no-referrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-black/40 rounded border border-white/10 hover:border-crimson/30 text-gray-400 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
              >
                Launch Google Map Spot <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Co-Pilot Forms right panel */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          <div className="p-4 bg-black/10 glass rounded-sm border border-white/5 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-crimson" />
            <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
              PROPOSAL WIZARD: OPERATIONAL & READY TO SYNTHESIZE BLUEPRINTS
            </p>
          </div>
          <LeadWizard />
        </div>

      </div>

    </div>
  );
}
