import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Digital Services | DGEN Z — High-Ticket Conversions",
  description: "Complete list of high-performance digital services by DGEN Z: professional websites, Google Local Search optimizations, branding, and agentic AI chatbot integrations.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
