import { experienceTimeline } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section className="border-border-subtle relative border-t py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">Experience</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            Where the work has happened.
          </h2>
        </RevealOnScroll>

        <div className="border-border-subtle mt-14 space-y-0 border-l pl-8 md:pl-10">
          {experienceTimeline.map((role, i) => (
            <RevealOnScroll key={role.title + role.period} delay={i * 0.06}>
              <div className="relative pb-12 last:pb-0">
                <span className="border-accent-2 bg-background absolute top-1.5 -left-[2.6rem] h-3 w-3 rounded-full border-2 md:-left-[3.15rem]" />
                <span className="text-accent-2 font-mono text-xs">{role.period}</span>
                <h3 className="font-display mt-2 text-xl font-semibold">{role.title}</h3>
                <p className="text-muted mt-2 max-w-2xl text-sm leading-relaxed">
                  {role.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((h) => (
                    <li key={h} className="text-muted flex gap-2 text-sm">
                      <span className="bg-accent-2 mt-2 h-1 w-1 shrink-0 rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
