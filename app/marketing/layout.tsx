import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Social Media Marketing Kits | DGEN Z",
  description: "Deploy premium Conversion Surge kits built by DGEN Z. Command premium prices on Instagram with custom layouts, structures, and story triggers.",
  alternates: {
    canonical: "/marketing",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
