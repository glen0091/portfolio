"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { site, hero, heroStats } from "@/lib/content";
import GridBackground from "./GridBackground";
import MagneticButton from "./MagneticButton";
import RevealOnScroll from "./RevealOnScroll";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  // Starts at the real value so the number is correct without JS, then counts
  // up from zero once mounted (progressive enhancement, respects reduced motion).
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span className="font-display text-3xl font-semibold tabular-nums md:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const availabilityColor =
    site.availability === "available"
      ? "bg-success"
      : site.availability === "limited"
        ? "bg-warning"
        : "bg-muted-2";

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent-soft),transparent_70%)]"
      />

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <RevealOnScroll y={16} className="mb-7 flex flex-wrap items-center gap-3">
              <span className="section-label">{hero.eyebrow}</span>
              <span className="border-border-subtle bg-surface/60 text-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${availabilityColor} opacity-75`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${availabilityColor}`}
                  />
                </span>
                <span className="font-mono">{site.availabilityNote}</span>
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h1 className="font-display text-[2.6rem] leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
                I build <span className="gradient-text">digital experiences</span>{" "}
                that perform.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <p className="text-muted mt-7 max-w-xl text-lg leading-relaxed text-balance">
                {hero.supporting}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href={hero.primaryCta.href}
                  data-cursor-hover
                  className="group bg-accent flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow hover:shadow-[0_0_30px_-4px_var(--accent)]"
                >
                  {hero.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href={hero.secondaryCta.href}
                  data-cursor-hover
                  className="border-border-strong text-foreground hover:border-accent-2 hover:text-accent-2 rounded-full border px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  {hero.secondaryCta.label}
                </Link>
              </MagneticButton>
            </RevealOnScroll>

            <RevealOnScroll
              delay={0.28}
              y={10}
              className="text-muted-2 mt-8 flex items-center gap-2 text-xs"
            >
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </RevealOnScroll>

            <RevealOnScroll
              delay={0.36}
              className="border-border-subtle mt-12 grid max-w-lg grid-cols-3 gap-6 border-t pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted mt-1 text-xs leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2} y={24} className="hidden lg:block">
            <PipelineVisual />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/**
 * Editorial "digital system" visual — an animated build pipeline. Restrained,
 * technical, and free of terminal/laptop clichés. A highlight travels down the
 * stages while a subtle progress meter fills.
 */
function PipelineVisual() {
  const [active, setActive] = useState(0);
  const stages = hero.pipeline;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % stages.length);
    }, 1900);
    return () => clearInterval(id);
  }, [stages.length]);

  return (
    <div className="card-surface relative overflow-hidden rounded-2xl p-8 shadow-2xl">
      <div className="noise-overlay" />
      <div className="relative flex items-center justify-between">
        <span className="section-label">The build</span>
        <span className="text-muted-2 font-mono text-xs">
          {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="relative mt-8 space-y-2">
        {stages.map((stage, i) => {
          const isActive = i === active;
          return (
            <li key={stage}>
              <div
                className={`relative flex items-center gap-4 rounded-xl border px-5 py-4 transition-colors duration-500 ${
                  isActive
                    ? "border-accent-2/40 bg-accent-soft"
                    : "border-border-subtle bg-surface-2/40"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pipeline-active"
                    className="bg-accent-2 absolute top-1/2 left-0 h-8 w-[3px] -translate-y-1/2 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`font-mono text-xs ${
                    isActive ? "text-accent-2" : "text-muted-2"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-display text-lg font-semibold tracking-tight transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {stage}
                </span>
                <ArrowUpRight
                  className={`ml-auto h-4 w-4 transition-all duration-500 ${
                    isActive
                      ? "text-accent-2 translate-x-0 opacity-100"
                      : "text-muted-2 -translate-x-1 opacity-0"
                  }`}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-border-subtle mt-8 border-t pt-6">
        <div className="text-muted-2 flex items-center justify-between font-mono text-[11px]">
          <span>design → build → optimise → ship</span>
          <span>{Math.round(((active + 1) / stages.length) * 100)}%</span>
        </div>
        <div className="bg-surface-2 mt-3 h-1 overflow-hidden rounded-full">
          <motion.div
            className="bg-accent-2 h-full rounded-full"
            animate={{ width: `${((active + 1) / stages.length) * 100}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
}
