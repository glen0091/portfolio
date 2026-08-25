import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cta } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <section className="border-border-subtle relative overflow-hidden border-t py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,var(--accent-soft),transparent_70%)]"
      />
      <div className="container-page relative">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <p className="section-label">Let&apos;s talk</p>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-6xl">
            {cta.heading}
          </h2>
          <p className="text-muted mx-auto mt-6 max-w-xl text-lg text-balance">
            {cta.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href={cta.primary.href}
                data-cursor-hover
                className="group bg-accent flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--accent)]"
              >
                {cta.primary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href={cta.secondary.href}
                data-cursor-hover
                className="border-border-strong text-foreground hover:border-accent-2 hover:text-accent-2 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
              >
                {cta.secondary.label}
              </Link>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
