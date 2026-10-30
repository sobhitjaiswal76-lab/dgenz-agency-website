"use client";

import React, { useSyncExternalStore } from "react";
import { ArrowRight, X } from "lucide-react";
import { getCampaignTimeRemaining } from "./diwali-utils";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getDismissedSnapshot(): boolean {
  if (typeof window === "undefined") return true;
  return sessionStorage.getItem("dgenz_diwali_bar_dismissed") === "true";
}

function getServerSnapshot(): boolean {
  return true; // hide during SSR to avoid mismatch
}

export default function DiwaliAnnouncementBar() {
  const isDismissed = useSyncExternalStore(subscribe, getDismissedSnapshot, getServerSnapshot);
  const campaignTime = getCampaignTimeRemaining();

  const handleDismiss = () => {
    sessionStorage.setItem("dgenz_diwali_bar_dismissed", "true");
    window.dispatchEvent(new Event("storage"));
  };

  const handleScrollToCampaign = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("diwali-specials");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed || campaignTime.isExpired) return null;

  return (
    <div className="relative z-50 bg-[#080808] border-b border-white/[0.12] text-white px-4 py-2 text-xs select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Eyebrow Tag & Campaign Highlight */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#111111] border border-white/[0.12] text-[10px] font-mono text-[#A3A3A3] tracking-widest uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
            FESTIVE COLLECTION 2026
          </span>

          <p className="truncate text-[11px] sm:text-xs text-[#A3A3A3]">
            <span className="text-white font-medium">Diwali Offers:</span>{" "}
            AI Cinematic Video Ads from <span className="text-white font-semibold">₹2,000</span> & Business Websites at{" "}
            <span className="text-[#E31837] font-semibold">₹10,999 (Save 63%)</span>.
          </p>
        </div>

        {/* Right: CTA & Dismiss */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#diwali-specials"
            onClick={handleScrollToCampaign}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#E31837] hover:bg-[#c4122d] text-white font-sans text-xs font-semibold tracking-wide transition-colors outline-none"
          >
            <span>Explore Offers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss festive announcement bar"
            className="p-1 rounded text-[#A3A3A3] hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
