import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, Website Development & Graphic Design Services | DGEN Z",
  description: "Browse DGEN Z's complete range of digital marketing, custom Next.js website development, graphic design, and local SEO services in Kolkata.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
