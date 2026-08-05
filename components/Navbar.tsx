"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const isLight = theme === "light";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 select-none ${
          scrolled
            ? isLight
              ? "bg-[#FAFAFB]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-lg shadow-black/5 text-neutral-900"
              : "bg-[#030303]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80 text-white"
            : "bg-transparent py-6 border-b border-white/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 group outline-none">
            <Logo size="md" showSubtitle={true} glow={!isLight} />
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
                      : isLight
                      ? "text-neutral-700 hover:text-[#D90429]"
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

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-sm border transition-all duration-300 outline-none text-xs font-mono font-bold uppercase tracking-wider ${
                isLight
                  ? "bg-white border-black/15 text-neutral-900 hover:border-[#D90429] shadow-sm"
                  : "bg-black/50 border-white/20 text-neutral-200 hover:border-[#D90429] shadow-md"
              }`}
              title={isLight ? "Switch to Ultra-Premium Dark Theme" : "Switch to Architectural White Theme"}
              aria-label="Toggle dark/light theme"
            >
              <AnimatePresence mode="wait">
                {isLight ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5 text-neutral-900 font-bold"
                  >
                    <Moon className="w-3.5 h-3.5 text-[#D90429]" />
                    <span className="text-[10px]">DARK</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5 text-amber-400 font-bold"
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span className="text-[10px] text-white">LIGHT</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/#proposal"
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm border transition-all duration-300 text-xs font-mono font-bold uppercase tracking-widest outline-none ${
                isLight
                  ? "border-black/20 bg-neutral-900 text-white hover:bg-[#D90429] hover:border-[#D90429] shadow-md"
                  : "border-white/20 hover:border-[#D90429] bg-black/40 hover:bg-[#D90429] text-white shadow-md hover:shadow-[#D90429]/30"
              }`}
            >
              START A PROJECT <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Actions (Theme toggle + Menu button) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-sm border transition-all outline-none ${
                isLight ? "bg-white border-black/15 text-neutral-900" : "bg-black/60 border-white/10 text-white"
              }`}
              title="Toggle Theme"
              aria-label="Toggle dark/light theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-[#D90429]" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-sm border transition-all outline-none ${
                isLight ? "bg-white border-black/15 text-neutral-900" : "bg-black/60 border-white/10 text-white hover:text-[#D90429]"
              }`}
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
            className={`fixed inset-0 z-40 pt-24 pb-12 px-6 backdrop-blur-2xl md:hidden flex flex-col justify-between ${
              isLight ? "bg-[#FAFAFB]/98 text-neutral-900" : "bg-[#030303]/98 text-white"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-3 border-neutral-500/20">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em]">
                  NAVIGATION GATEWAY
                </span>
                
                {/* Drawer Theme Switch */}
                <button
                  onClick={toggleTheme}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isLight ? "bg-white border-black/20 text-neutral-900" : "bg-black/80 border-white/20 text-white"
                  }`}
                >
                  {isLight ? (
                    <>
                      <Moon className="w-3 h-3 text-[#D90429]" /> DARK MODE
                    </>
                  ) : (
                    <>
                      <Sun className="w-3 h-3 text-amber-400" /> LIGHT MODE
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 text-lg font-mono font-bold tracking-widest uppercase border-b flex items-center justify-between transition-colors ${
                      isLight
                        ? "text-neutral-900 hover:text-[#D90429] border-black/10"
                        : "text-white hover:text-[#D90429] border-white/5"
                    }`}
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
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.25em]">
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
