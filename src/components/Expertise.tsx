"use client";

import { motion } from "framer-motion";
import { expertise } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-border-subtle relative scroll-mt-24 border-t py-24 md:py-32"
    >
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">{expertise.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
            {expertise.heading}
          </h2>
          <p className="text-muted mt-4 text-balance">{expertise.intro}</p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertise.categories.map((cat, i) => (
            <RevealOnScroll key={cat.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-surface group flex h-full flex-col rounded-2xl p-6"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-muted-2 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-border-subtle text-muted group-hover:border-border-strong group-hover:text-foreground rounded-full border px-2.5 py-1 text-xs transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
