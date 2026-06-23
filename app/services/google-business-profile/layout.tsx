import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile Rankings Management | DGEN Z",
  description: "Lock in #1 rank on Google Maps. We optimize business listings, execute local Kolkata citations, and establish neighborhood keyword dominance.",
  alternates: {
    canonical: "/services/google-business-profile",
  },
};

export default function GoogleBusinessProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
