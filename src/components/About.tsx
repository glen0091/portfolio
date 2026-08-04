import { about } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="border-border-subtle relative border-t py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll>
            <p className="section-label">{about.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              {about.heading}
            </h2>
          </RevealOnScroll>

          <div>
            <RevealOnScroll className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-muted leading-relaxed text-balance">
                  {p}
                </p>
              ))}
            </RevealOnScroll>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {about.values.map((value, i) => (
                <RevealOnScroll key={value.title} delay={i * 0.06}>
                  <div className="card-surface h-full rounded-xl p-5">
                    <h3 className="font-display text-base font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
