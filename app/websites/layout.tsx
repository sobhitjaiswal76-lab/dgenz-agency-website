import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development & Design Company Kolkata | DGEN Z",
  description: "Looking for a professional website design company in Kolkata? DGEN Z builds custom, high-speed, SEO-optimized business websites and Next.js applications.",
  alternates: {
    canonical: "/websites",
  },
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
