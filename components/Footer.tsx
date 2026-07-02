"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Compass, Award, ArrowUpRight, Lock } from "lucide-react";
import LeadAdmin from "./LeadAdmin";
import Logo from "./Logo";

export default function Footer() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="w-full bg-black border-t border-white/[0.08] relative overflow-hidden select-none">
      
      {/* Absolute nebula background blur for depth of field */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-crimson/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/4 w-[250px] h-[250px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Main Info Column */}
          <div className="space-y-5 col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center group outline-none">
              <Logo size="md" showSubtitle={true} glow={true} />
            </Link>
            <p className="text-gray-400 font-sans text-xs leading-relaxed text-balance">
              Futuristic, luxury tech branding and visual engineering studio. We build conversion-ready, premium digital assets that operate 24x7 to scale local and international businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dgen_z7"
                target="_blank"
                rel="no-referrer"
                className="w-8 h-8 rounded-full bg-black border border-white/10 text-gray-400 hover:text-white flex items-center justify-center hover:border-crimson hover:bg-crimson/10 transition-all outline-none"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
                target="_blank"
                rel="no-referrer"
                className="w-8 h-8 rounded-full bg-black border border-white/10 text-gray-400 hover:text-white flex items-center justify-center hover:border-neon-green hover:bg-neon-green/10 transition-all outline-none"
                title="WhatsApp Channel"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pathways Section */}
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-gray-450 tracking-widest uppercase mb-1">
              Core Pathways
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans">
              <Link href="/services" className="hover:text-crimson transition-colors uppercase outline-none">
                Services Portfolio
              </Link>
              <Link href="/websites" className="hover:text-crimson transition-colors uppercase outline-none">
                Website Development
              </Link>
              <Link href="/marketing" className="hover:text-crimson transition-colors uppercase outline-none">
                Social Media Growth
              </Link>
              <Link href="/portfolio" className="hover:text-crimson transition-colors uppercase outline-none">
                Masonry Showcase
              </Link>
              <Link href="/about" className="hover:text-crimson transition-colors uppercase outline-none">
                About Founder
              </Link>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-gray-455 tracking-widest uppercase mb-1">
              Connect Channels
            </h5>
            <div className="flex flex-col gap-3 text-xs text-gray-400 font-sans">
              <a
                href="tel:+919681168381"
                className="flex items-center gap-2 hover:text-white transition-colors outline-none"
              >
                <Phone className="w-4 h-4 text-crimson" /> +91 96811 68381
              </a>
              <a
                href="mailto:creativedgenz32@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors outline-none"
              >
                <Mail className="w-4 h-4 text-crimson" /> creativedgenz32@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-xs">
                <MapPin className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  5/1 Hari Paul Lane,<br />
                  Kolkata – 700006,<br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Map/Location Anchor */}
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-gray-460 tracking-widest uppercase mb-1">
              Active Coordinates
            </h5>
            <div className="p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md font-sans space-y-3 shadow-inner shadow-black/60">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-neon-green neon-glow-green" /> Official GBP Spot
              </div>
              <p className="text-[10px] text-gray-500 leading-normal">
                Google verified workspace with maps coverage and direct founder appointments.
              </p>
              <a
                href="https://share.google/0lgoCkGX0x0Tub6FQ"
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-crimson hover:text-crimson/80 uppercase tracking-widest outline-none"
              >
                View Map Spot <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>© 2026 DGEN Z STUDIO. ALL RIGHTS ENGINEERED.</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="hover:text-crimson flex items-center gap-1 uppercase transition-all outline-none cursor-pointer"
              title="Unlock leads panel"
            >
              • <Lock className="w-2.5 h-2.5 inline" /> Core Terminal
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>FOUNDER: <span className="text-white hover:text-crimson cursor-pointer" onClick={() => setIsAdminOpen(true)}>SOBHIT JAISWAL</span></span>
            <span className="text-gray-600">|</span>
            <span>DEVELOPMENT CHASSIS v2.5</span>
          </div>
        </div>
      </div>

      {/* Leads Console Portal rendered locally */}
      <LeadAdmin isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </footer>
  );
}
