import type { Metadata } from "next";
import { site } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation with ${site.name} — senior web developer available for new website, WordPress, frontend, performance and integration projects.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell me about your project — new build, redesign, or a complex web problem to solve. I'll reply within one business day."
      />
      <Contact />
    </main>
  );
}
