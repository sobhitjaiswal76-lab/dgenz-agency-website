"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  AlertCircle,
  HelpCircle,
  TrendingUp
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  { text: "Suggest a growth strategy for my business", icon: <TrendingUp className="w-3.5 h-3.5 text-crimson" /> },
  { text: "How can I optimize my Google Business Profile?", icon: <Bot className="w-3.5 h-3.5 text-green-400" /> },
  { text: "How much does a custom website cost?", icon: <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> },
  { text: "I want a free digital marketing audit", icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> }
];

export default function VeerChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lazy state initialization to read from sessionStorage purely
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("veer_chat_history");
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        // Fallback to default
      }
    }
    return [
      {
        id: "msg-0",
        role: "model",
        content: "Hello! I am **VEER.1**, the official AI Business Growth Consultant at **DGEN Z**.\n\nI am here to understand your business goals, share high-ticket client acquisition strategies, and guide you on establishing an elite digital brand authority. \n\nTo begin, what is your **business name**, and which **industry** are you in? Or, feel free to choose one of the quick options below!",
        timestamp: "Active"
      }
    ];
  });

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Trigger floating invite notification on delay
  useEffect(() => {
    const savedChat = typeof window !== "undefined" ? sessionStorage.getItem("veer_chat_history") : null;
    if (!savedChat) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Save chat to session storage on update
  useEffect(() => {
    if (messages.length > 0 && typeof window !== "undefined") {
      try {
        sessionStorage.setItem("veer_chat_history", JSON.stringify(messages));
      } catch (e) {
        // Handle session storage failures gracefully
      }
    }
  }, [messages]);

  // Scroll to bottom on updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    if (!textToSend) {
      setInputValue("");
    }
    setError(null);

    // Build unique pure sequential ID
    const nextIdNum = messages.length + 1;
    const userMsg: Message = {
      id: `msg-${nextIdNum}`,
      role: "user",
      content: text,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const chatContext = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatContext }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to communicate with VEER.1");
      }

      const modelMsg: Message = {
        id: `msg-${nextIdNum + 1}`,
        role: "model",
        content: data.content,
        timestamp: "Just now"
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Connection alert. Let's try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    if (typeof window !== "undefined" && window.confirm("Are you sure you want to reset your consultation with VEER.1?")) {
      sessionStorage.removeItem("veer_chat_history");
      setMessages([
        {
          id: "msg-0",
          role: "model",
          content: "Hello! I am **VEER.1**, the official AI Business Growth Consultant at **DGEN Z**.\n\nI am here to understand your business goals, share high-ticket client acquisition strategies, and guide you on establishing an elite digital brand authority. \n\nTo begin, what is your **business name**, and which **industry** are you in? Or, feel free to choose one of the quick options below!",
          timestamp: "Active"
        }
      ]);
    }
  };

  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="text-white font-extrabold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderMessageContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("### ")) {
        return <h4 key={i} className="text-sm font-bold text-white mt-3 mb-1 font-sans">{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("## ")) {
        return <h3 key={i} className="text-base font-extrabold text-crimson mt-4 mb-2 font-sans tracking-tight">{line.replace("## ", "")}</h3>;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return <li key={i} className="list-disc ml-5 text-xs text-gray-300 my-1 font-sans">{parseBold(line.substring(2))}</li>;
      }
      if (line.trim() === "") {
        return <div key={i} className="h-2" />;
      }
      return <p key={i} className="text-xs text-gray-300 leading-relaxed my-1 font-sans">{parseBold(line)}</p>;
    });
  };

  const floatingWhatsAppLink = "https://wa.me/919681168381?text=Hello%20DGEN%20Z%2C%20I%20am%20chatting%20with%20VEER.1%20and%20want%20to%20book%20a%20free%20consultation%21";

  return (
    <>
      {/* 1. FLOATING CHAT TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-24 z-40 flex items-center gap-3">
        {/* Persistent Invitation Bubble */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="bg-[#0c0c10] border border-crimson/30 glass px-4 py-2.5 rounded-lg shadow-xl text-left max-w-[240px] pointer-events-auto relative hidden sm:block"
            >
              <button 
                onClick={() => setShowNotification(false)}
                className="absolute top-1 right-1 text-gray-500 hover:text-white transition-colors p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1.5 mb-1 text-crimson font-mono text-[9px] uppercase tracking-widest font-bold">
                <Sparkles className="w-3 h-3 text-crimson animate-pulse" /> LIVE STRATEGIST
              </div>
              <p className="text-[11px] text-gray-300 font-sans leading-normal">
                {"I'm VEER.1, your business growth consultant. Let's map your strategy!"}
              </p>
              <button 
                onClick={() => {
                  setIsOpen(true);
                  setShowNotification(false);
                }}
                className="mt-1.5 text-[10px] text-crimson font-mono uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                Start Chat <Bot className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Core Floating Bot Bubble */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 outline-none hover:scale-105 active:scale-95 border ${
            isOpen 
              ? "bg-[#0f0f13] border-crimson/50 text-crimson rotate-90 shadow-crimson/20" 
              : "bg-gradient-to-tr from-crimson to-red-500 border-white/10 text-white shadow-crimson/30"
          }`}
          title="Consult VEER.1 AI Growth Coach"
          id="veer-chat-trigger"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#39ff14] border-2 border-[#050505] rounded-full animate-ping" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#39ff14] border-2 border-[#050505] rounded-full" />
            </div>
          )}
        </button>
      </div>

      {/* 2. CHAT PANEL DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-full max-w-[370px] sm:max-w-[400px] h-[520px] md:h-[580px] bg-[#08080c] border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden glass"
            id="veer-chat-panel"
          >
            {/* Panel Header */}
            <div className="p-4 border-b border-white/5 bg-black/40 flex items-center justify-between relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent animate-pulse" />
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-crimson/15 border border-crimson/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-crimson" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#39ff14] border-2 border-[#08080c] rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-sans font-black uppercase text-white tracking-wider">VEER.1</span>
                    <span className="text-[9px] font-mono tracking-widest uppercase bg-crimson/10 border border-crimson/30 text-crimson px-1.5 py-0.5 rounded-sm">AI STRATEGIST</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-sans tracking-wide">DGEN Z Digital Growth Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-1.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  title="Reset consultation"
                >
                  <ChevronDown className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-[#050508]/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3.5 py-2.5 relative ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-crimson/90 to-red-700/80 text-white rounded-br-none shadow-md shadow-crimson/10"
                        : "bg-[#0f0f16]/90 border border-white/5 text-gray-200 rounded-bl-none glass"
                    }`}
                  >
                    {msg.role === "model" && (
                      <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-white/5 text-[9px] font-mono uppercase tracking-widest text-crimson font-bold">
                        <Sparkles className="w-3 h-3 text-crimson animate-pulse" /> VEER.1 CONSULTING
                      </div>
                    )}
                    <div className="space-y-1">
                      {msg.role === "model" ? renderMessageContent(msg.content) : <p className="text-xs font-sans whitespace-pre-line leading-relaxed">{msg.content}</p>}
                    </div>
                    <span className="block text-[8px] font-mono text-gray-500 mt-1.5 text-right uppercase tracking-wider">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#0f0f16]/90 border border-white/5 rounded-lg rounded-bl-none px-4 py-3 glass flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-crimson font-bold">
                      <Sparkles className="w-3 h-3 text-crimson animate-pulse" /> ANALYZING CRITERIA...
                    </div>
                    <div className="flex items-center gap-1 py-1 px-2 bg-black/20 rounded">
                      <span className="w-2 h-2 bg-crimson rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-crimson rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-crimson rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error indicator */}
              {error && (
                <div className="flex justify-center p-2">
                  <div className="bg-red-950/40 border border-red-500/30 text-red-400 rounded-lg p-3 text-xs flex items-start gap-2 max-w-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-bold font-mono">CONNECTION ALERT</p>
                      <p className="text-[11px] text-gray-300 mt-0.5">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Starter Prompts */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-black/40 border-t border-white/5 space-y-1.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Suggested growth starters:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {STARTER_PROMPTS.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(prompt.text)}
                      className="text-[10px] text-left text-gray-300 bg-white/5 hover:bg-crimson/10 border border-white/5 hover:border-crimson/20 rounded px-2 py-1.5 transition-all duration-150 flex items-center gap-1.5 leading-snug font-sans h-full outline-none cursor-pointer"
                    >
                      {prompt.icon}
                      <span className="truncate">{prompt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sticky Actions panel for client acquisition conversion */}
            <div className="px-4 py-2 border-t border-white/5 bg-[#0a0a0f] grid grid-cols-2 gap-2 text-center select-none">
              <a
                href="/contact"
                className="flex items-center justify-center gap-1 py-1.5 rounded bg-crimson/10 hover:bg-crimson/20 border border-crimson/30 text-[10px] font-mono uppercase tracking-wider text-white transition-all outline-none"
                title="Book an audit"
              >
                <Calendar className="w-3.5 h-3.5 text-crimson" />
                Book Free Audit
              </a>
              <a
                href={floatingWhatsAppLink}
                target="_blank"
                rel="no-referrer"
                className="flex items-center justify-center gap-1 py-1.5 rounded bg-green-600/10 hover:bg-green-600/20 border border-green-500/30 text-[10px] font-mono uppercase tracking-wider text-green-400 transition-all outline-none"
                title="Chat with consultant"
              >
                <Phone className="w-3.5 h-3.5 text-green-400" />
                WhatsApp Direct
              </a>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/5 bg-black flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                placeholder="Ask VEER.1 about branding or marketing..."
                className="flex-1 bg-[#0d0d12] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-crimson/50 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className={`p-2 rounded transition-all outline-none cursor-pointer ${
                  inputValue.trim() && !isTyping
                    ? "bg-crimson hover:bg-red-600 text-white shadow-md shadow-crimson/20"
                    : "bg-[#0d0d12] border border-white/5 text-gray-600 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
