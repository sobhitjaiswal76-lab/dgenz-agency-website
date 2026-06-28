import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Services | DGEN Z",
  description: "DGEN Z builds custom, high-speed, SEO-optimized business websites, landing pages, and e-commerce platforms. Get your website development quote from Sobhit Jaiswal.",
  alternates: {
    canonical: "/websites",
  },
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
