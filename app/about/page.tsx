"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Compass, Users, MapPin, Phone, Mail, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <Award className="w-3.5 h-3.5 text-crimson" /> Corporate Dossier
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none animate-fade-in">
          THE VISION BEHIND<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            DGEN Z DIGITAL MARKETING AGENCY
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          We are a full-service digital marketing agency and website development company. We engineer custom web applications, graphic designs, local SEO systems, and Google Business Profile management campaigns that grow your business.
        </p>
      </div>

      {/* Main Grid: Description and Sobhit's Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-black/20 glass space-y-6">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            01 / FOUNDER DIRECTIVE
          </div>
          <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight leading-tight">
            MEET DIRECTOR SOBHIT JAISWAL
          </h2>
          <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed">
            {"\"We believe looking average in a crowded market is a financial crime. In Kolkata and throughout India, over 90% of local service companies, cafes, and creative startups suffer from low click conversions simply because their visual assets look generic.\""}
          </p>
          <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed">
            {"\"DGEN Z was forged to solve this conversion crisis. By merging high premium matte-black and deep crimson typography frames, optimized responsive page codes, and Google Maps local schema slots, we build absolute visual dominance for our partners.\""}
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-neon-green font-mono text-xs uppercase tracking-widest font-bold neon-glow-green">
            02 / CRITICAL OPERATIONAL MATRICES
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase leading-none tracking-tight">
            WHY CLIENTS TRUST DGEN Z
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <ShieldCheck className="w-4 h-4 text-crimson" />,
                title: "Business Focused Fixes",
                desc: "We prioritize local leads, conversions, and inquiries above generic creative fluff."
              },
              {
                icon: <HeartHandshake className="w-4 h-4 text-neon-green" />,
                title: "1-on-1 Founder Support",
                desc: "Direct communication line with Sobhit Jaiswal without agency delays."
              },
              {
                icon: <Compass className="w-4 h-4 text-crimson" />,
                title: "Fast Turnaround Speeds",
                desc: "Standard high quality landing pages and designs compiled in 3-5 days."
              },
              {
                icon: <Users className="w-4 h-4 text-neon-green" />,
                title: "Absolute Honesty",
                desc: "We don't sell unrequested services or tech larping. We prioritize pure client revenue."
              }
            ].map((mat, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/5 bg-black/40 hover:border-crimson/30 transition-all space-y-1.5 hover:border-white/10">
                <div className="flex items-center gap-2">
                  {mat.icon}
                  <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider">{mat.title}</h4>
                </div>
                <p className="text-gray-500 text-[11px] font-sans leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
