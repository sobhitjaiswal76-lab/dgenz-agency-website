"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, ArrowRight, Check, Send, Phone, Calendar, Loader2, RefreshCw } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  businessName: string;
  businessType: string;
  services: string[];
  budget: string;
  message: string;
  timestamp: string;
  aiProposal?: string;
}

export default function LeadWizard() {
  const [step, setStep] = useState<"intro" | "form" | "loading" | "proposal">("intro");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("Mid Strategic ($1,000 - $3,000)");
  const [loadingLog, setLoadingLog] = useState("");
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available services
  const servicesList = [
    "Website Development",
    "Startup Branding Package",
    "Instagram Growth Packages",
    "Google Business Profile Management",
    "AI Chatbot & Automation",
    "Pro Presentations & PPT Design",
    "Professional Pitch Decks",
    "Visual Social Media Designs",
    "Logo & Packaging Design"
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleServiceSelectAll = () => {
    if (selectedServices.length === servicesList.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices([...servicesList]);
    }
  };

  const startAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !businessName || !businessType || selectedServices.length === 0) {
      alert("Please fill in all details and choose at least one service to engineer your roadmap!");
      return;
    }

    setStep("loading");
    
    // Interactive terminal logs simulating direct premium branding computation
    const logs = [
      "⚡ CONNECTING DGEN Z CORE INTELLIGENCE SOURCE...",
      "🔍 SECURING COGNITIVE AUDIT FOR BUSINESS '" + businessName.toUpperCase() + "'...",
      "📊 RETRIEVING COMPETITIVE INTELLIGENCE GAPS IN Kolkata & Global Markets...",
      "🧠 MAP-REDUCING ATTENTION RETENTION HOOKS FOR " + businessType.toUpperCase() + "...",
      "🎨 ALIGNING COSMIC BRAND GRID SYSTEMS & MATTE BLACK VIBES...",
      "🚀 INJECTING REAL-TIME LEAD CONVERSION AUTOMATION PATHWAYS...",
      "✨ SYNTHESIZING CUSTOM ROI BLUEPRINT AND ESTIMATES..."
    ];

    for (let i = 0; i < logs.length; i++) {
      setLoadingLog(logs[i]);
      await new Promise((resolve) => setTimeout(resolve, i === 0 ? 500 : 800));
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/gemini/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          businessType,
          services: selectedServices,
          budget,
          message,
        }),
      });

      const data = await response.json();
      let proposalText = "";

      if (data.proposal) {
        proposalText = data.proposal;
      } else {
        // High quality backup proposal template if API key is not yet configured by the user
        proposalText = `## 🌌 DIGITAL BRAND IDENTITY REVAMP
        Analysis for **${businessName}**:
        Your current competitive landscape in the **${businessType}** industry indicates a massive lack of high-end visual authority. Businesses in this segment struggle to convert general social media traffic because their digital assets look generic. By working with DGEN Z, we will deliver an undeniable, elite aesthetic presence.

        ## ⚡ THE DGEN Z SYSTEM (THE FIX)
        We recommend immediately launching:
        ${selectedServices.map(s => `- **${s}**: A tailored funnel built specifically for customer acquisition.`).join("\n")}
        
        Our approach will focus on implementing deep crimson accents, interactive desktop layouts, micro-interactions, and lighting effects that load in under 2 seconds.

        ## 📈 ACQUISITION ENGINE & ROI DELIVERABLES
        - **Strategic Allocation**: Using your **${budget}** budget level efficiently across core design pillars and performance architectures.
        - **Deliverables**: Google Search SEO optimization, floating WhatsApp captures, and a modular framework to support rapid expansion.
        
        ## 🕒 ACTION PLAN (NEXT 14 DAYS)
        1. **Consultation Alignment**: Secure a structured briefing session with Sobhit Jaiswal.
        2. **Wireframe Forge**: Synthesize target buyer personas and deliver a 3D glassmorphic system.

        *"First impression dictates the financial metric. Real value stands out immediately."*`;
      }

      setGeneratedProposal(proposalText);

      // Save Lead details to localStorage for the Admin Panel
      const newLead: Lead = {
        id: Math.random().toString(36).slice(2, 9),
        name,
        phone,
        businessName,
        businessType,
        services: selectedServices,
        budget,
        message,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        aiProposal: proposalText,
      };

      const existingLeadsStr = localStorage.getItem("dgenz_leads") || "[]";
      const existingLeads = JSON.parse(existingLeadsStr);
      localStorage.setItem("dgenz_leads", JSON.stringify([newLead, ...existingLeads]));

      setStep("proposal");
    } catch (err) {
      console.error("Error generating proposal", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hello DGEN Z! I just generated a custom AI Proposal for my business "${businessName}" (${businessType}). Our estimated budget level is ${budget}. I'd love to lock in our strategic early founder proposal discount with Sobhit Jaiswal! Let's build.`;
    return `https://wa.me/919681168381?text=${encodeURIComponent(text)}`;
  };

  // Safe and super fast custom markdown parser to convert **bold** and headings into standard styled paragraph elements
  const parseMarkdown = (markdown: string) => {
    return markdown.split("\n").map((line, idx) => {
      let trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h4 key={idx} className="text-lg md:text-xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-rose-450 mt-6 mb-3 tracking-wide uppercase border-l-2 border-crimson pl-3">
            {trimmed.replace("## ", "")}
          </h4>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={idx} className="text-gray-300 ml-4 list-disc my-1 pl-1 line-height-relaxed font-sans text-sm md:text-base">
            {parseBoldText(trimmed.replace("- ", ""))}
          </li>
        );
      }
      if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ")) {
        return (
          <li key={idx} className="text-gray-300 ml-4 list-decimal my-1.5 pl-1 font-sans text-sm md:text-base">
            {parseBoldText(trimmed.replace(/^\d+\.\s+/, ""))}
          </li>
        );
      }
      if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
        return (
          <p key={idx} className="text-neon-green italic font-sans my-4 border-y border-white/5 py-3 text-center pl-2 text-sm md:text-lg bg-neon-green/10 rounded-sm">
            {trimmed.replace(/\*/g, "")}
          </p>
        );
      }
      if (!trimmed) return <div key={idx} className="h-2" />;
      return (
        <p key={idx} className="text-gray-300 font-sans my-2 text-sm md:text-base leading-relaxed">
          {parseBoldText(trimmed)}
        </p>
      );
    });
  };

  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="text-white font-semibold text-crimson">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-black/20 glass p-6 md:p-8 shadow-2xl shadow-crimson/5 relative overflow-hidden" id="ai-blueprint">
      {/* Decorative neon linear line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-crimson via-crimson/70 to-neon-green opacity-60" />

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson/30 bg-crimson/5 text-crimson text-xs font-mono uppercase tracking-widest animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> Client Conversion & Proposal Machine
            </div>
            <h3 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
              NEURAL BRAND <span className="text-crimson font-black drop-shadow-[0_0_8px_rgba(220,20,60,0.4)]">CO-PILOT</span>
            </h3>
            <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
              {"Don't guess your marketing strategy. Feed our customized AI model your business details, and instantly generate an ultra-premium visual growth roadmap and custom package blueprint in real-time."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto mt-6">
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="text-crimson font-mono text-xs font-bold uppercase tracking-wider">01 / ANALYZE</div>
                <div className="text-white font-bold text-sm">Deep Market Audit</div>
                <p className="text-gray-500 text-xs text-balance">We parse local competition metrics in your zone.</p>
              </div>
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="text-neon-green font-mono text-xs font-bold uppercase tracking-wider neon-glow-green">02 / STRUCTURE</div>
                <div className="text-white font-bold text-sm">Targeted Deliverables</div>
                <p className="text-gray-500 text-xs text-balance">Map your website hierarchy, WhatsApp triggers, and GBP.</p>
              </div>
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="text-neutral-400 font-mono text-xs font-bold uppercase tracking-wider">03 / CONSTRUCT</div>
                <div className="text-white font-bold text-sm">Instant Premium Proposal</div>
                <p className="text-gray-500 text-xs text-balance">Get a pricing scope optimized to convert prospects into clients.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setStep("form")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-crimson/25 uppercase tracking-wider relative group"
              >
                Launch Brand Co-Pilot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === "form" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            onSubmit={startAnalysis}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h4 className="text-lg font-sans font-bold text-white tracking-wide uppercase flex items-center gap-2">
                <Terminal className="w-5 h-5 text-crimson" /> Structure Your Blueprint
              </h4>
              <button
                type="button"
                onClick={() => setStep("intro")}
                className="text-xs font-mono text-gray-500 hover:text-white uppercase transition-colors"
              >
                Back To Lobby
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Form Block */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Your Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kolkata Cafe & Roasters"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white placeholder-gray-600 text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Business / Industry Sector *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Food & Beverage, Fitness, Real Estate, SaaS"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white placeholder-gray-600 text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sobhit Jaiswal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white placeholder-gray-600 text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Contact Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 96811 68381"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white placeholder-gray-600 text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none"
                  />
                </div>
              </div>

              {/* Right Form Block (Services & Budget) */}
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                      Select Required Solutions *
                    </label>
                    <button
                      type="button"
                      onClick={handleServiceSelectAll}
                      className="text-[10px] font-mono text-crimson hover:text-crimson/80 uppercase underline"
                    >
                      {selectedServices.length === servicesList.length ? "Clean All" : "Select All"}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar border border-white/5 py-2 pl-1 rounded bg-black/40">
                    {servicesList.map((service, idx) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`flex items-center justify-between text-left px-3 py-2.5 rounded text-xs border transition-all ${
                            isSelected
                              ? "bg-gradient-to-r from-crimson/20 to-crimson/10 border-crimson text-white"
                              : "bg-black/30 border-white/5 text-gray-400 hover:border-crimson/30"
                          }`}
                        >
                          <span className="truncate pr-1">{service}</span>
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-gray-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Investment Budget Level
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none cursor-pointer"
                  >
                    <option>Starter Conversion Boost ($300 - $600)</option>
                    <option>Mid Strategic Package ($1,000 - $2,500)</option>
                    <option>High Growth Dominance ($3,000 - $5,000)</option>
                    <option>Master Corporate Brand Facelift ($6,000+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Main Challenge / Specific Target (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="What is your immediate goal? e.g. Rank 1st on Google local search for cafes or triple Instagram follower count."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-sm text-white placeholder-gray-600 text-sm focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-bold transition-all uppercase tracking-wider shadow-lg shadow-neon-green/20 outline-none cursor-pointer"
              >
                Synthesize AI proposal <Sparkles className="w-4 h-4 text-black animate-pulse" />
              </button>
              <p className="text-[11px] font-mono text-gray-500 text-center sm:text-left">
                {"* Our AI engine merges Kolkata's competitive parameters and provides standard scope details instantly."}
              </p>
            </div>
          </motion.form>
        )}

        {step === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center space-y-6"
          >
            <div className="relative">
              <div className="w-16 h-16 border-2 border-crimson/20 rounded-full animate-spin" />
              <Loader2 className="w-8 h-8 text-crimson animate-spin absolute inset-0 m-auto" />
            </div>

            <div className="space-y-2 p-5 bg-black/40 border border-white/5 rounded-sm max-w-lg">
              <div className="flex items-center gap-2 justify-center font-mono text-xs text-crimson">
                <Terminal className="w-4 h-4 inline" /> COMPUTING COGNITIVE MATRIX
              </div>
              <p className="text-gray-300 font-mono text-sm tracking-wide transition-all h-10 flex items-center justify-center">
                {loadingLog}
              </p>
            </div>
          </motion.div>
        )}

        {step === "proposal" && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono text-neon-green uppercase tracking-widest block mb-1 neon-glow-green">
                  AI STRATEGIC GENERATION COMPLETED
                </span>
                <h4 className="text-2xl font-sans font-black text-white tracking-tight uppercase">
                  GROWTH SCOPE: {businessName}
                </h4>
              </div>
              <button
                onClick={() => setStep("form")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-black/40 border border-white/10 hover:border-white/20 text-gray-300 text-xs font-mono uppercase tracking-wider transition-all self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin-reverse" /> Re-Engineer
              </button>
            </div>

            {/* Generated Proposal Container */}
            <div className="p-6 bg-black/20 glass border border-white/10 rounded-sm max-h-[420px] overflow-y-auto custom-scrollbar shadow-inner text-gray-300 antialiased space-y-4 font-sans text-base leading-relaxed relative">
              {parseMarkdown(generatedProposal)}
            </div>

            {/* Crucial CTA Box */}
            <div className="p-6 rounded-sm border border-crimson/25 bg-black/40 glass text-center space-y-4">
              <h5 className="text-white font-sans font-extrabold text-lg md:text-xl tracking-wide uppercase">
                Ready to Lock in Your <span className="text-crimson">Early Founder Discount</span>?
              </h5>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
                All AI Proposals generate a customized founder discount of <strong className="text-neon-green">10% OFF</strong> total deliverables when customized by our Lead Director **Sobhit Jaiswal** within the next 48 hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-neon-green/20 active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4.5 h-4.5" /> Apply Via WhatsApp Now
                </a>
                <a
                  href={`mailto:creativedgenz32@gmail.com?subject=DGEN%20Z%20AI%20Proposal%20Submission%20-%20${encodeURIComponent(businessName)}&body=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0ABusiness:%20${encodeURIComponent(businessName)}%0ABudget:%20${encodeURIComponent(budget)}%0AServices:%20${encodeURIComponent(selectedServices.join(", "))}%0A%0AI'd%20like%20to%20review%20my%20proposal%20and%20schedule%20our%20growth%20consultation!`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-black/40 border border-white/15 hover:border-white/30 text-white font-sans font-extrabold text-sm uppercase tracking-wider transition-all hover:bg-white/5"
                >
                  <Calendar className="w-4.5 h-4.5 text-crimson" /> Book Free Email Session
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
