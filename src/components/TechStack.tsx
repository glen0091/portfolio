import { techStack } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function TechStack() {
  const loopItems = [...techStack, ...techStack];

  return (
    <section className="border-border-subtle relative border-t py-20 md:py-24">
      <RevealOnScroll className="container-page mb-10">
        <p className="section-label">Tech Stack</p>
        <h2 className="font-display mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance md:text-3xl">
          Tools I reach for daily.
        </h2>
      </RevealOnScroll>

      <div
        className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max gap-4 motion-reduce:animate-none">
          {loopItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="card-surface text-muted flex items-center rounded-full px-5 py-2.5 font-mono text-sm whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">{techStack.join(", ")}</span>
    </section>
  );
}
