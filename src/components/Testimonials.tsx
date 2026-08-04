import { Quote, Plus } from "lucide-react";
import { testimonials } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Testimonials() {
  return (
    <section className="border-border-subtle relative border-t py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">Client Feedback</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            What clients say.
          </h2>
        </RevealOnScroll>

        {testimonials.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.author} delay={i * 0.06}>
                <div className="card-surface flex h-full flex-col rounded-2xl p-6">
                  <Quote className="text-accent-2 h-5 w-5" />
                  <p className="text-muted mt-4 flex-1 text-sm leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="border-border-subtle mt-6 border-t pt-4">
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="text-muted-2 text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll delay={0.08}>
            <div className="border-border-strong mt-14 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-16 text-center">
              <Plus className="text-muted-2 h-6 w-6" />
              <p className="text-muted mt-4 max-w-sm text-sm">
                Client testimonials will appear here as engagements wrap up. Get in touch
                to be one of the first case studies.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
