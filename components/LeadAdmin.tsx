"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Shield, X, Eye, Trash2, Calendar, DollarSign, Briefcase, Phone, MessageSquare, Award } from "lucide-react";

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

interface LeadAdminProps {
  isOpen: boolean;
  onClose: () => void;
}

// Preloaded sample mock leads to illustrate complete live interface even on first visit
const sampleLeads: Lead[] = [
  {
    id: "mock1",
    name: "Rohit Sharma",
    phone: "+91 98300 12345",
    businessName: "Kolkata Spice Hut Cafe",
    businessType: "Restaurant / Cafe",
    services: ["Website Development", "Google Business Profile Management", "Instagram Growth Packages"],
    budget: "Mid Strategic Package ($1,000 - $2,500)",
    message: "Need beautiful online food ordering website and ranking #1 in Park Street Kolkata area.",
    timestamp: "22/06/2026, 09:30:15",
    aiProposal: "Pre-configured elite growth roadmap for Rohit Sharma was compiled successfully."
  },
  {
    id: "mock2",
    name: "Anjali Sen",
    phone: "+91 90511 98765",
    businessName: "Sen Fashion House",
    businessType: "Local Boutique / E-commerce",
    services: ["Startup Branding Package", "Logo & Packaging Design"],
    budget: "Starter Conversion Boost ($300 - $600)",
    message: "Launching private premium packaging box and brand identity redesign next month.",
    timestamp: "21/06/2026, 17:45:00",
    aiProposal: "Pre-configured luxury boutique branding strategy was generated successfully."
  }
];

export default function LeadAdmin({ isOpen, onClose }: LeadAdminProps) {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const CORRECT_PIN = "sobhit123";

  const loadLeads = useCallback(() => {
    const localLeadsStr = localStorage.getItem("dgenz_leads");
    if (localLeadsStr) {
      const parsed = JSON.parse(localLeadsStr);
      const timer = setTimeout(() => {
        setLeads(parsed);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      // Seed with sample leads so the dashboard is not boring
      localStorage.setItem("dgenz_leads", JSON.stringify(sampleLeads));
      const timer = setTimeout(() => {
        setLeads(sampleLeads);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen, loadLeads]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === CORRECT_PIN || pin === "dgenz") {
      setIsAuthenticated(true);
      setErrorMsg("");
      loadLeads();
    } else {
      setErrorMsg("INVALID PIN ACCESS DENIED.");
      setTimeout(() => setErrorMsg(""), 3000);
    }
  };

  const handleDeleteLead = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to purge this record?")) {
      const updated = leads.filter((l) => l.id !== id);
      localStorage.setItem("dgenz_leads", JSON.stringify(updated));
      setLeads(updated);
      if (selectedLead?.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleResetLeads = () => {
    if (confirm("Reset current lead registry to factory defaults?")) {
      localStorage.setItem("dgenz_leads", JSON.stringify(sampleLeads));
      setLeads(sampleLeads);
      setSelectedLead(null);
    }
  };

  // Compute stats
  const totalLeads = leads.length;
  
  const parseBudgetToValue = (budgetStr: string) => {
    if (budgetStr.includes("$300")) return 450;
    if (budgetStr.includes("$1,000")) return 1750;
    if (budgetStr.includes("$3,000")) return 4000;
    if (budgetStr.includes("$6,000")) return 7500;
    return 1000;
  };

  const totalPipelineRevenue = leads.reduce((sum, current) => {
    return sum + parseBudgetToValue(current.budget);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="auth-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-sm p-6 bg-black/85 backdrop-blur-2xl border border-crimson/25 rounded-sm glass relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-crimson to-rose-450 animate-pulse" />
            
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-white font-sans font-bold flex items-center gap-2 uppercase text-xs tracking-widest">
                <Shield className="w-4 h-4 text-crimson" /> DGEN Z ADMIN CONTROL
              </h4>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors cursor-pointer outline-none">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Access is strictly restricted to DGEN Z administrators. Enter your Master PIN to view current high-ticket leads pipeline.
              </p>

              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                  {"Secure Administrative PIN (Hint: 'sobhit123')"}
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  autoFocus
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full px-4 py-3 text-center tracking-widest bg-black border border-white/10 rounded-sm text-white focus:border-crimson focus:ring-1 focus:ring-crimson transition-all outline-none font-mono text-lg"
                />
              </div>

              {errorMsg && (
                <div className="p-2 border border-crimson/25 bg-crimson/5 rounded font-mono text-crimson text-[10px] text-center uppercase tracking-wider">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-crimson/15 cursor-pointer"
              >
                Authenticate & Decrypt
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl h-[85vh] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-sm glass relative flex flex-col overflow-hidden"
          >
            {/* Top Glowing Header */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-crimson via-crimson/70 to-neon-green" />

            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-black/60 relative">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-crimson/10 border border-crimson/30 text-crimson">
                  <Database className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-sans font-extrabold tracking-tight text-base leading-tight">
                    LEAD HARVESTER COMMAND CENTER
                  </h4>
                  <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">
                    LIVE REGISTRY OVERVIEW • Kolkata, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetLeads}
                  className="px-3 py-1.5 rounded-sm border border-white/10 bg-black/40 text-xs font-mono text-gray-400 hover:text-white transition-all uppercase cursor-pointer"
                >
                  Reset Registry
                </button>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-3 py-1.5 rounded-sm border border-crimson/30 bg-crimson/10 text-xs font-mono text-crimson hover:bg-crimson/20 transition-all uppercase cursor-pointer"
                >
                  Lock Panel
                </button>
                <button onClick={onClose} className="p-1.5 rounded bg-black border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-black/40 border-b border-white/5">
              <div className="p-3 bg-black/20 glass rounded border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded bg-crimson/5 text-crimson">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-550 uppercase">Total Enquiries Captured</div>
                  <div className="text-white font-sans font-black text-xl">{totalLeads}</div>
                </div>
              </div>

              <div className="p-3 bg-black/20 glass rounded border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded bg-neon-green/10 text-neon-green neon-glow-green">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-550 uppercase">Projected Pipeline Value</div>
                  <div className="text-neon-green font-sans font-black text-xl">${totalPipelineRevenue.toLocaleString()}</div>
                </div>
              </div>

              <div className="p-3 bg-black/20 glass rounded border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded bg-crimson/10 text-crimson font-black drop-shadow-[0_0_6px_rgba(220,20,60,0.5)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-550 uppercase">Lead Quality Status</div>
                  <div className="text-crimson font-sans font-black text-sm">HIGH-TICKET HOT 🔥</div>
                </div>
              </div>
            </div>

            {/* Main Content Layout (Sidebar list + detail view) */}
            <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
              {/* Leady List Sidebar */}
              <div className="w-full md:w-2/5 border-r border-white/5 overflow-y-auto max-h-[300px] md:max-h-none h-full bg-black/40 custom-scrollbar">
                {leads.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-sm font-sans flex flex-col items-center justify-center h-full">
                    <Shield className="w-8 h-8 text-gray-600 mb-2 animate-pulse" />
                    No registrations in registry database. Submit the LeadWizard wizard to add real-time entries!
                  </div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {leads.map((lead) => {
                      const isSelected = selectedLead?.id === lead.id;
                      return (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-4 transition-all cursor-pointer relative ${
                            isSelected
                              ? "bg-crimson/10 border-l-2 border-crimson"
                              : "hover:bg-black/20"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-mono text-crimson font-bold truncate pr-3">
                              {lead.businessName}
                            </span>
                            <span className="text-[9px] font-mono text-gray-500 whitespace-nowrap">
                              {lead.timestamp.split(",")[0]}
                            </span>
                          </div>
                          
                          <div className="text-white font-sans font-bold text-sm tracking-tight mb-2">
                             {lead.name}
                          </div>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {lead.services.slice(0, 2).map((s, i) => (
                              <span key={i} className="px-1.5 py-0.5 rounded bg-black/40 border border-white/5 text-[9px] font-sans text-gray-300">
                                {s}
                              </span>
                            ))}
                            {lead.services.length > 2 && (
                              <span className="px-1 py-0.5 rounded bg-black/40 border border-white/5 text-[9px] font-mono text-gray-500">
                                +{lead.services.length - 2}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-neon-green font-bold">{lead.budget.replace(/(\(.*?\))/g, "")}</span>
                            <button
                              onClick={(e) => handleDeleteLead(lead.id, e)}
                              className="text-gray-500 hover:text-crimson p-1 rounded transition-colors cursor-pointer"
                              title="Purge record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Lead Details Main Panel */}
              <div className="flex-1 overflow-y-auto p-6 h-full custom-scrollbar flex flex-col justify-between bg-black/40">
                {selectedLead ? (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-3">
                      <div>
                        <div className="text-xs font-mono text-crimson uppercase tracking-widest flex items-center gap-1 mb-1 font-bold">
                          <MessageSquare className="w-3.5 h-3.5" /> Lead Profile Decrypted
                        </div>
                        <h5 className="text-xl font-sans font-black text-white tracking-tight leading-tight uppercase">
                          {selectedLead.businessName}
                        </h5>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          Industry Slot: <strong className="text-gray-200">{selectedLead.businessType}</strong>
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-bold text-xs uppercase tracking-wide transition-all cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5" /> WhatsApp Client
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-black/40 border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1 font-bold">Client Contact Name</span>
                        <span className="text-white font-sans font-bold text-sm block">{selectedLead.name}</span>
                      </div>
                      <div className="p-3 bg-black/40 border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1 font-bold font-bold">Contact Phone Number</span>
                        <span className="text-crimson font-mono font-bold text-sm block">{selectedLead.phone}</span>
                      </div>
                      <div className="p-3 bg-black/40 border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1 font-bold font-bold">Investment Budget Level</span>
                        <span className="text-neon-green font-mono font-bold text-sm block">{selectedLead.budget}</span>
                      </div>
                      <div className="p-3 bg-black/40 border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1 font-bold font-bold font-bold">Recorded Timestamp</span>
                        <span className="text-gray-400 font-mono text-sm block flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" /> {selectedLead.timestamp}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono text-gray-550 uppercase block mb-2 font-bold font-bold">Requested Solutions Checklist</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedLead.services.map((service, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-full border border-crimson/20 bg-crimson/5 text-crimson font-sans text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" /> {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1.5 font-bold font-bold">Additional Context / Custom Goals</span>
                      <p className="p-3 rounded bg-black/40 border border-white/5 text-gray-300 text-sm font-sans whitespace-pre-line min-h-[60px] leading-relaxed">
                        {selectedLead.message || "No specific goal specified."}
                      </p>
                    </div>

                    {selectedLead.aiProposal && (
                      <div>
                        <span className="text-[9px] font-mono text-gray-550 uppercase block mb-1.5 font-bold font-bold font-bold">Estimated Strategy Proposal Draft</span>
                        <div className="p-4 bg-black/20 border border-white/5 text-gray-400 text-xs font-mono max-h-[140px] overflow-y-auto pr-2 custom-scrollbar">
                          {selectedLead.aiProposal}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-500">
                    <Database className="w-12 h-12 text-zinc-800 mb-2 animate-bounce" />
                    <p className="font-sans text-sm">Select any incoming client from the sidebar register to decrypt their visual briefing and trigger contact funnels.</p>
                  </div>
                )}

                <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase">
                  <span>DGEN Z OPERATIONAL DATA SYSTEM</span>
                  <span>SECURE AGENT CHASSIS v2.5</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
