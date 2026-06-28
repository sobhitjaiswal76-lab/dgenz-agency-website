import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile Management | DGEN Z",
  description: "DGEN Z provides Google Business Profile management and local SEO services in Kolkata. Rank #1 on Google Maps, generate phone leads, and lock listing authority with Sobhit Jaiswal.",
  alternates: {
    canonical: "/services/google-business-profile",
  },
};

export default function GoogleBusinessProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
