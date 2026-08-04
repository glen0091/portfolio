import { PenLine } from "lucide-react";
import { blogPlaceholder, faqs } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function BlogTeaser() {
  return (
    <section className="border-border-subtle relative border-t py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="card-surface flex h-full flex-col justify-between rounded-2xl p-8">
            <div>
              <PenLine className="text-accent-2 h-5 w-5" />
              <p className="section-label mt-4">{blogPlaceholder.eyebrow}</p>
              <h2 className="font-display mt-3 text-2xl leading-tight font-semibold tracking-tight text-balance md:text-3xl">
                {blogPlaceholder.heading}
              </h2>
              <p className="text-muted mt-4 text-sm leading-relaxed">
                {blogPlaceholder.description}
              </p>
            </div>
            <span className="border-border-subtle text-muted-2 mt-8 inline-flex w-fit items-center rounded-full border px-3 py-1.5 font-mono text-xs">
              First article coming soon
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="section-label">FAQ</p>
          <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
            Common questions.
          </h3>
          <div className="divide-border-subtle border-border-subtle mt-6 divide-y border-t">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary
                  data-cursor-hover
                  className="text-foreground flex cursor-pointer list-none items-center justify-between text-sm font-medium"
                >
                  {faq.question}
                  <span className="text-muted-2 ml-4 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-muted mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
