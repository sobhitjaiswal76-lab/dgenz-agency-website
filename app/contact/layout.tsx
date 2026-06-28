import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DGEN Z | Digital Marketing Agency Kolkata",
  description: "Get in touch with Sobhit Jaiswal and the team at DGEN Z in Kolkata. Request a free digital audit or project proposal for marketing, websites, and design.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
