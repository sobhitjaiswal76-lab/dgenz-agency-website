import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DGEN Z | Digital Marketing & Website Design Kolkata",
  description: "Get in touch with Sobhit Jaiswal and DGEN Z Digital Agency in Kolkata, India. Schedule your free consultation for premium website development and design services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
