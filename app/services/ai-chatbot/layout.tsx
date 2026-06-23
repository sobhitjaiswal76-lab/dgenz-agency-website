import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot & Flow Automation Services | DGEN Z",
  description: "Automate leads qualifying and customer support 24x7 with custom AI chatbots. Custom conversational models integrated with Instagram DM, WhatsApp, and websites.",
  alternates: {
    canonical: "/services/ai-chatbot",
  },
};

export default function AiChatbotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
