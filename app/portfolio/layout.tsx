import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio Showcase | DGEN Z — High Conversion Projects",
  description: "Explore our premium design layouts, robust 3D menu architectures, local business brand overhauls, and successful visual campaigns built by DGEN Z.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
