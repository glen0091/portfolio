import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about, site } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import Portrait from "./Portrait";

export default function About() {
  return (
    <section
      id="about"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <RevealOnScroll>
          <Portrait />
        </RevealOnScroll>

        <div>
          <RevealOnScroll>
            <p className="section-label">{about.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
              {about.heading}
            </h2>
            <p className="text-muted mt-6 text-lg leading-relaxed text-balance">
              {about.lead}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05} className="mt-6 space-y-5">
            {about.paragraphs.slice(0, 2).map((p, i) => (
              <p key={i} className="text-muted leading-relaxed text-balance">
                {p}
              </p>
            ))}
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.strengths.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 0.06}>
                <div className="card-surface h-full rounded-xl p-5">
                  <h3 className="font-display text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/about"
              data-cursor-hover
              className="group text-accent-2 mt-10 inline-flex items-center gap-2 text-sm font-medium"
            >
              More about {site.firstName}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
