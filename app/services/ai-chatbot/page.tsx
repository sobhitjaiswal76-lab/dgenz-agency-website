"use client";

import React from "react";
import { Sparkles, MessageSquare, CheckCircle2, Phone, ArrowUpRight } from "lucide-react";

export default function AiChatbotPage() {
  const offerings = [
    {
      title: "Instagram DM AI Automations",
      time: "5 Days",
      price: "Starting $150",
      desc: "Instant reply conversational triggers, automatic keyword targeting triggers, story mention responses integrations, and client info harvest flows."
    },
    {
      title: "WhatsApp Leads Qualifier Bot",
      time: "6 Days",
      price: "Starting $250",
      desc: "Fully functional WhatsApp Business qualifying chatbots responding 24x7 to incoming prospect inquiries and saving pre-vetted leads details."
    },
    {
      title: "Website Live Assistant Widget",
      time: "8 Days",
      price: "Starting $350",
      desc: "Intelligent custom GPT web widgets trained specifically on your brand documents to answer complex pricing and catalog questions instantly."
    }
  ];

  return (
    <div className="space-y-16 py-8 select-none bg-transparent">
      
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono uppercase tracking-widest leading-none">
          <MessageSquare className="w-3.5 h-3.5 text-crimson animate-pulse" /> Agentic Automations
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight leading-none">
          AI CHATBOT SERVICES<br />
          <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
            CONVERSION ENGINES 24×7
          </span>
        </h1>
        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed text-balance">
          Stop keeping high ticket leads waiting. DGEN Z installs automated custom Gemini and Meta-endpoint chatbots that qualify your incoming digital inquiries, register pipeline logs, and lock sales bookings automatically.
        </p>
      </div>

      {/* Grid Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/35 transition-all flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">
                  PIPELINE MODULE 0{i + 1}
                </span>
                <span className="text-neon-green font-mono text-xs font-bold bg-neutral-900/40 px-2.5 py-1 rounded border border-neon-green/20 neon-glow-green">
                  {item.price}
                </span>
              </div>
              <h3 className="text-white font-sans font-black text-lg uppercase tracking-wide group-hover:text-crimson transition-all">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Build Sprints: <strong className="text-gray-300 font-sans font-bold">{item.time}</strong>
              </span>
              <a
                href={`https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%2520want%20to%20order%20the%20AI%2520Chatbot%2520service%3A%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-1 text-xs text-crimson hover:text-white transition-colors uppercase font-mono font-bold"
              >
                Enquire <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase leading-none tracking-tight mb-4">
          WANT TO AUTOMATE CUSTOMER ACQUISITION?
        </h2>
        <p className="text-gray-400 text-xs md:text-sm font-sans leading-relaxed max-w-2xl mx-auto mb-6">
          Integrate dynamic automated pipelines with direct CRM logs and real-time email triggers customized exactly for your active market requirements.
        </p>
        <a
          href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20develop%20an%20AI%20Chatbot%20for%20my%22business."
          target="_blank"
          rel="no-referrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-crimson/25 cursor-pointer"
        >
          Book AI Consultation <Phone className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
