import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services | DGEN Z",
  description: "DGEN Z builds custom AI chatbots, automated WhatsApp systems, Instagram DM automations, and AI website development services. Schedule a strategic consultation with Sobhit Jaiswal.",
  alternates: {
    canonical: "/services/ai-chatbot",
  },
};

export default function AiChatbotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
