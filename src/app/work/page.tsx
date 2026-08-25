import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkGrid from "@/components/WorkGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Glen Paredes — eSIM platforms, corporate WordPress builds, real estate experiences, telecommunications and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Selected Work"
        title="Work built to perform."
        description="A selection of websites and digital experiences — from international transactional platforms to corporate WordPress builds. Each one designed, developed and optimised end to end."
      />
      <WorkGrid />
      <CTASection />
    </main>
  );
}
