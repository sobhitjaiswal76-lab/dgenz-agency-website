"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, ArrowRight, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation matching reference image & requirements
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/marketing" },
  ];

  const isLight = theme === "light";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 select-none ${
          scrolled
            ? isLight
              ? "bg-[#F8F9FA]/90 backdrop-blur-xl border-b border-black/10 py-3.5 shadow-sm text-neutral-900"
              : "bg-[#040406]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl text-white"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Brand Logo (Left) */}
          <Link href="/" className="inline-flex items-center group outline-none">
            <Logo size="md" showSubtitle={true} glow={!isLight} />
          </Link>

          {/* Desktop Nav Links (Center/Right) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-sans tracking-wide transition-colors relative outline-none py-1 font-medium ${
                    isActive
                      ? "text-[#D90429] font-semibold"
                      : isLight
                      ? "text-neutral-700 hover:text-[#D90429]"
                      : "text-neutral-300 hover:text-white hover:text-[#D90429]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D90429]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area (Theme Switch + Primary CTA + Mobile Trigger) */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 outline-none cursor-pointer ${
                isLight
                  ? "bg-white border-black/10 text-neutral-800 hover:border-[#D90429]"
                  : "bg-black/60 border-white/10 text-neutral-300 hover:border-[#D90429] hover:text-white"
              }`}
              title={isLight ? "Switch to Ultra-Premium Dark Theme" : "Switch to Architectural White Theme"}
              aria-label="Toggle dark/light theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-[#D90429]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Primary Action Button: LET'S TALK ↗ (Pill Button Matching Reference Image) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-semibold text-xs md:text-sm tracking-wide shadow-lg shadow-[#D90429]/25 hover:shadow-xl hover:shadow-[#D90429]/35 hover:-translate-y-0.5 transition-all duration-200 outline-none cursor-pointer"
            >
              Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-all outline-none md:hidden cursor-pointer ${
                isLight
                  ? "bg-white border-black/15 text-neutral-900"
                  : "bg-black/60 border-white/10 text-white hover:text-[#D90429]"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimal Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 pt-28 pb-10 px-8 backdrop-blur-3xl md:hidden flex flex-col justify-between ${
              isLight ? "bg-[#F8F9FA]/98 text-neutral-900" : "bg-[#040406]/98 text-white"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b pb-4 border-white/10">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.3em]">
                  DGEN Z NAVIGATION
                </span>
                <span className="text-xs font-mono text-[#D90429] font-bold">
                  AI MARKETING STUDIO
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 text-2xl font-sans font-bold tracking-tight uppercase border-b flex items-center justify-between transition-colors ${
                      isLight
                        ? "text-neutral-900 hover:text-[#D90429] border-black/10"
                        : "text-white hover:text-[#D90429] border-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-2xl font-sans font-bold tracking-tight uppercase border-b flex items-center justify-between transition-colors ${
                    isLight
                      ? "text-neutral-900 hover:text-[#D90429] border-black/10"
                      : "text-white hover:text-[#D90429] border-white/5"
                  }`}
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-bold text-sm tracking-wide shadow-lg shadow-[#D90429]/25"
              >
                Let&apos;s Talk <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-neutral-500">
                <span>KOLKATA, INDIA</span>
                <span>SOBHIT JAISWAL</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
