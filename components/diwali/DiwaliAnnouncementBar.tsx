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
  return sessionStorage.getItem("dgenz_diwali_growth_bar_dismissed") === "true";
}

function getServerSnapshot(): boolean {
  return true; // hide during SSR to avoid hydration mismatch
}

export default function DiwaliAnnouncementBar() {
  const isDismissed = useSyncExternalStore(subscribe, getDismissedSnapshot, getServerSnapshot);
  const campaignTime = getCampaignTimeRemaining();

  const handleDismiss = () => {
    sessionStorage.setItem("dgenz_diwali_growth_bar_dismissed", "true");
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
    <div
      role="banner"
      aria-label="Diwali Business Growth Offers 2026 Announcement"
      className="relative z-50 bg-[#080808] border-b border-[#242424] text-white px-3 sm:px-4 py-2 text-xs select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Eyebrow Tag & Campaign Highlight */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#111111] border border-[#242424] text-[10px] font-mono text-[#A3A3A3] tracking-widest uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
            DIWALI 2026
          </span>

          <p className="truncate text-[11px] sm:text-xs text-[#A3A3A3]">
            <span className="text-white font-medium">Business Growth Offers:</span>{" "}
            Website Launch (<span className="text-[#ED1C24] font-semibold">30% OFF</span>) · Smart Catalogues (<span className="text-[#C6A15B] font-semibold">10% OFF</span>) · Creative Design (<span className="text-white font-semibold">7% OFF</span>).
          </p>
        </div>

        {/* Right: CTA & Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#diwali-specials"
            onClick={handleScrollToCampaign}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#ED1C24] hover:bg-[#c9141b] text-white font-sans text-xs font-semibold tracking-wide transition-colors outline-none cursor-pointer"
          >
            <span>VIEW OFFERS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss festive announcement bar"
            className="p-1 rounded text-[#A3A3A3] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
