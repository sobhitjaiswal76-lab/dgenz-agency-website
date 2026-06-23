import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Your Growth Consultation | Contact DGEN Z",
  description: "Connect with Sobhit Jaiswal and the elite DGEN Z engineering team. Let's design, optimize, and scale your brand authority starting today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
