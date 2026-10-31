"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Check,
  Send,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  Clock,
  Instagram
} from "lucide-react";
import {
  buildWhatsAppLink,
  DIWALI_CAMPAIGN_OFFERS,
  DiwaliOfferItem,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL
} from "./diwali-utils";
import DiwaliPosterArt from "./DiwaliPosterArt";

interface DiwaliOfferDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerType: "website" | "catalogue" | "design" | null;
}

export default function DiwaliOfferDetailsModal({
  isOpen,
  onClose,
  offerType,
}: DiwaliOfferDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Esc key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !offerType) return null;

  const offer: DiwaliOfferItem | undefined = DIWALI_CAMPAIGN_OFFERS.find(
    (o) => o.id === offerType
  );

  if (!offer) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C0C0C] border border-[#242424] rounded-[12px] shadow-2xl z-10 text-white p-6 sm:p-8 select-text"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-[6px] bg-white/5 border border-white/10 text-[#A3A3A3] hover:text-white transition-colors z-20 outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A3A3A3] font-semibold">
                  OFFER {offer.categoryNumber} / {offer.categoryLabel}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] font-bold">
                  {offer.coreDiscount}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-white leading-tight">
                {offer.title}
              </h3>
              <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
                {offer.overview}
              </p>
            </div>

            {/* Poster Art Preview */}
            <div className="rounded-[8px] overflow-hidden border border-[#242424]">
              <DiwaliPosterArt type={offer.id} />
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-2 border-t border-[#242424]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                Package Deliverables & Scope
              </h4>
              <div className="space-y-2">
                {offer.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D4]">
                    <Check className="w-4 h-4 text-[#ED1C24] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complimentary Extras */}
            <div className="p-4 rounded-[8px] bg-[#141414] border border-[#C6A15B]/30 space-y-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] font-bold">
                  Complimentary Extras Included Free
                </span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-white">
                {offer.complimentaryExtras.map((extra, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                    <span>{extra}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditional Discount Details */}
            <div className="p-4 rounded-[8px] bg-[#0E0E0E] border border-[#242424] space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono uppercase tracking-wider text-white font-semibold">
                  {offer.conditionalDiscount.title}
                </span>
                <a
                  href={offer.conditionalDiscount.verifyUrl}
                  target="_blank"
                  rel="no-referrer"
                  className="text-[10px] font-mono text-[#ED1C24] hover:underline inline-flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </div>
              <p className="text-[#A3A3A3]">{offer.conditionalDiscount.description}</p>
              <ul className="list-disc list-inside space-y-1 text-[#D4D4D4]">
                {offer.conditionalDiscount.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Ideal For if exists */}
            {offer.idealFor && (
              <div className="space-y-2 pt-2 border-t border-[#242424]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                  Ideal For These Business Types
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {offer.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#161616] border border-[#242424] text-[11px] text-[#A3A3A3] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Eligible Services if exists */}
            {offer.eligibleServices && (
              <div className="space-y-2 pt-2 border-t border-[#242424]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                  Eligible Design Formats
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#D4D4D4]">
                  {offer.eligibleServices.map((svc, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#141414] border border-[#242424]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#242424] flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppLink(offer.whatsappMessage)}
                target="_blank"
                rel="no-referrer"
                className="flex-1 py-3.5 px-6 rounded-[8px] bg-[#ED1C24] hover:bg-[#c9141b] text-white font-sans text-sm font-semibold text-center transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ED1C24]/15"
              >
                <span>{offer.ctaLabel}</span>
                <Send className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="py-3.5 px-5 rounded-[8px] border border-[#242424] hover:border-white/20 text-[#A3A3A3] hover:text-white font-sans text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
