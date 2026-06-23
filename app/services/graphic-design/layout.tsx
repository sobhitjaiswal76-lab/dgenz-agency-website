import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Graphic Design & Logo Forge | DGEN Z",
  description: "Visual brand assets designed for high-end perception. We craft custom logos, corporate brand guidelines, and high-ticket packaging boxes.",
  alternates: {
    canonical: "/services/graphic-design",
  },
};

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
