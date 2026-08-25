import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import Portrait from "@/components/Portrait";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a senior web developer who sits between design, technology and business — building fast, maintainable, effective websites.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="About"
        title="The developer behind the work."
        description={about.lead}
      />

      <section className="container-page grid gap-14 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <RevealOnScroll>
          <Portrait />
        </RevealOnScroll>
        <div>
          <RevealOnScroll className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted text-lg leading-relaxed text-balance first:text-foreground"
              >
                {p}
              </p>
            ))}
          </RevealOnScroll>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {about.strengths.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 0.06}>
                <div className="card-surface h-full rounded-xl p-5">
                  <h2 className="font-display text-base font-semibold">
                    {s.title}
                  </h2>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <Expertise />
      <CTASection />
    </main>
  );
}
