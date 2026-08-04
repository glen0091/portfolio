"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">Skills</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            A full-stack toolkit built around WordPress and modern React.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <RevealOnScroll key={cat.category} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-surface group h-full rounded-2xl p-6"
              >
                <h3 className="text-accent-2 font-mono text-xs tracking-wider uppercase">
                  {cat.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-border-subtle text-muted group-hover:border-border-strong group-hover:text-foreground rounded-full border px-3 py-1.5 text-xs transition-colors"
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
