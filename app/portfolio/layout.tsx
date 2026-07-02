import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Website Design, Branding & Marketing Projects | DGEN Z",
  description: "Discover our featured portfolio of custom website design, professional branding kits, creative graphic designs, and digital marketing results in Kolkata.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
