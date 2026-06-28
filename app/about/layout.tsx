import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DGEN Z | Digital Marketing Agency Founded by Sobhit Jaiswal",
  description: "Learn about DGEN Z, the leading digital marketing agency and website development company in Kolkata founded by Sobhit Jaiswal. Discover our story and growth mission today.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
