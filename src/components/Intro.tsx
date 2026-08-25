import { intro } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Intro() {
  return (
    <section
      id="intro"
      className="border-border-subtle relative border-t py-24 md:py-36"
    >
      <div className="container-page">
        <RevealOnScroll>
          <p className="section-label">{intro.eyebrow}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h2 className="font-display mt-6 max-w-4xl text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            {intro.heading}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="text-muted mt-8 max-w-2xl text-lg leading-relaxed text-balance">
            {intro.body}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <ul className="border-border-subtle mt-14 flex flex-wrap items-center gap-x-3 gap-y-4 border-t pt-10">
            {intro.pillars.map((pillar, i) => (
              <li key={pillar} className="flex items-center gap-3">
                <span className="font-display text-lg font-medium md:text-2xl">
                  {pillar}
                </span>
                {i < intro.pillars.length - 1 && (
                  <span className="text-accent-2 font-mono text-sm" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
