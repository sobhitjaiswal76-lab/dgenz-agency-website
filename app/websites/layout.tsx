import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company | Business Website Design | DGEN Z",
  description: "DGEN Z is a top website development company in Kolkata. We build custom, ultra-fast, and SEO-friendly business websites, e-commerce stores, and custom React platforms.",
  alternates: {
    canonical: "/websites",
  },
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
