"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Core navigation links
  const links = [
    { name: "WORK", href: "/#selected-work" },
    { name: "SERVICES", href: "/services" },
    { name: "AI LAB", href: "/#scene-07" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 select-none ${
          scrolled
            ? "bg-[#030303]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80"
            : "bg-transparent py-6 border-b border-white/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 group outline-none">
            <Logo size="md" showSubtitle={true} glow={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors relative outline-none py-1 ${
                    isActive
                      ? "text-[#D90429] font-bold"
                      : "text-white/80 hover:text-white hover:text-[#D90429]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D90429]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#proposal"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm border border-white/20 hover:border-[#D90429] bg-black/40 hover:bg-[#D90429] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[#D90429]/30 outline-none"
            >
              START A PROJECT <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-sm bg-black/60 border border-white/10 text-white hover:text-[#D90429] transition-all outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-24 pb-12 px-6 bg-[#030303]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] border-b border-white/10 pb-3">
                NAVIGATION GATEWAY
              </span>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-lg font-mono font-bold tracking-widest uppercase text-white hover:text-[#D90429] border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/#proposal"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-[#D90429] hover:bg-[#D90429]/90 text-white font-mono font-bold uppercase text-xs tracking-widest shadow-lg shadow-[#D90429]/20"
              >
                START A PROJECT <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-center pt-2">
                <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.25em]">
                  DGEN Z — DIGITAL WITHOUT LIMITS
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
