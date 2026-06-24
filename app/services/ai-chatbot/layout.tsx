import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Website Development & Chatbot Automations | DGEN Z",
  description: "DGEN Z builds intelligent custom AI chatbots, Instagram DM triggers, automated WhatsApp systems, and AI website development services. Contact Sobhit Jaiswal for smart business automation.",
  alternates: {
    canonical: "/services/ai-chatbot",
  },
};

export default function AiChatbotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
