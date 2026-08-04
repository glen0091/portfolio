"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { site, heroRotatingRoles, heroStats } from "@/lib/content";
import GridBackground from "./GridBackground";
import MagneticButton from "./MagneticButton";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroRotatingRoles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      {heroRotatingRoles.map((role, i) => (
        <motion.span
          key={role}
          className="text-accent-2 absolute inset-0 whitespace-nowrap"
          initial={false}
          animate={
            i === index ? { y: 0, opacity: 1 } : { y: i < index ? -24 : 24, opacity: 0 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Reduced-motion preference is only knowable client-side post-mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const duration = 1200;
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
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16"
    >
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent-soft),transparent_70%)]"
      />

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="border-border-subtle bg-surface/60 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${availabilityColor} opacity-75`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${availabilityColor}`}
                  />
                </span>
                <span className="text-muted font-mono">{site.availabilityNote}</span>
              </span>
              <span className="border-border-subtle bg-surface/60 text-muted inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs backdrop-blur-md">
                <MapPin className="h-3 w-3" />
                {site.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
            >
              {site.name}, a <span className="gradient-text">{site.role}</span> for teams
              that can&apos;t afford a slow site.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted mt-6 max-w-xl text-lg text-balance"
            >
              8+ years shipping <RotatingRole /> for agencies, startups and enterprise
              clients across Australia and the US.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  data-cursor-hover
                  className="group bg-accent flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow hover:shadow-[0_0_30px_-4px_var(--accent)]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#work"
                  data-cursor-hover
                  className="border-border-strong text-foreground hover:border-accent-2 hover:text-accent-2 rounded-full border px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  View case studies
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="border-border-subtle mt-14 grid max-w-lg grid-cols-3 gap-6 border-t pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted mt-1 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: -6 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-muted-2 hover:text-accent-2 absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { label: "role", value: `"${site.role}"` },
    { label: "experience", value: `${site.experienceYears}+ years` },
    { label: "stack", value: `["WordPress", "React", "Next.js", "TS"]` },
    { label: "status", value: `"${site.availability}"` },
    { label: "location", value: `"${site.location}"` },
  ];

  return (
    <div className="card-surface relative overflow-hidden rounded-2xl shadow-2xl">
      <div className="border-border-subtle flex items-center gap-2 border-b px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="text-muted-2 ml-2 font-mono text-xs">profile.ts</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed">
        <p className="text-muted-2">
          <span className="text-accent">const</span> developer = {"{"}
        </p>
        {lines.map((line, i) => (
          <motion.p
            key={line.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.3 }}
            className="pl-4"
          >
            <span className="text-foreground">{line.label}</span>
            <span className="text-muted-2">: </span>
            <span className="text-accent-2">{line.value}</span>
            <span className="text-muted-2">,</span>
          </motion.p>
        ))}
        <p className="text-muted-2">
          {"}"}
          <span className="animate-blink bg-accent-2 ml-0.5 inline-block h-4 w-2 translate-y-0.5" />
        </p>
      </div>
    </div>
  );
}
