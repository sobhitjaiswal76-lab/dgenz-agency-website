"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Sparkles, ArrowRight, X, Clock } from "lucide-react";
import { getCampaignTimeRemaining, CampaignTimeRemaining } from "./diwali-utils";

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
  const [timeLeft, setTimeLeft] = useState<CampaignTimeRemaining>(getCampaignTimeRemaining);
  const isDismissed = useSyncExternalStore(subscribe, getDismissedSnapshot, getServerSnapshot);

  useEffect(() => {
    // Tick countdown every minute
    const interval = setInterval(() => {
      setTimeLeft(getCampaignTimeRemaining());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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

  if (isDismissed || timeLeft.isExpired) return null;

  return (
    <div className="relative z-50 bg-[#0B0B0F] border-b border-amber-500/30 text-white px-4 py-2 text-xs select-none">
      {/* Background Gold Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-rose-600/10 to-amber-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 relative z-10">
        {/* Left: Badge & Core Message */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-[10px] font-mono text-[#D4AF65] tracking-wider uppercase shrink-0">
            <Sparkles className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
            DIWALI SPECIALS
          </span>

          <p className="truncate text-[11px] sm:text-xs text-neutral-200">
            <strong className="text-white font-semibold">Festive Campaign:</strong>{" "}
            AI Cinematic Video Ads from <span className="text-amber-300 font-bold">₹2,000</span> & Custom Business Websites at <span className="text-amber-300 font-bold">₹10,999</span>.
          </p>
        </div>

        {/* Right: Countdown & CTA & Close */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {timeLeft.isActive && (
            <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
              <Clock className="w-3 h-3" />
              <span>{timeLeft.days}d {timeLeft.hours}h left</span>
            </div>
          )}

          <a
            href="#diwali-specials"
            onClick={handleScrollToCampaign}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-gradient-to-r from-amber-500 to-[#D90429] hover:opacity-90 text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-opacity outline-none"
          >
            <span>Explore Offers</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss Diwali announcement bar"
            className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
