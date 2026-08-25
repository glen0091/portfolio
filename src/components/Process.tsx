import { process } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Process() {
  return (
    <section
      id="process"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">{process.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
            {process.heading}
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((item, i) => (
            <RevealOnScroll key={item.step} delay={i * 0.04} y={12}>
              <div className="border-border-subtle bg-surface hover:bg-surface-2 h-full border p-6 transition-colors">
                <span className="text-accent-2/70 font-mono text-2xl font-semibold">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
