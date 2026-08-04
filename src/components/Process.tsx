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
          <p className="section-label">Process</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            A predictable process, on purpose.
          </h2>
          <p className="text-muted mt-4">
            The same seven stages run on every engagement, sized to the scope of the
            project.
          </p>
        </RevealOnScroll>

        <div className="border-border-subtle bg-border-subtle mt-14 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <RevealOnScroll key={item.step} delay={i * 0.04} y={12}>
              <div className="bg-surface h-full p-6">
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
