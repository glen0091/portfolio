"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  return (
    <section id="work" className="border-border-subtle relative border-t py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">Featured Work</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            Case studies from recent builds.
          </h2>
          <p className="text-muted mt-4">
            Each project below follows the same lens: the problem, the build, and the
            result the client actually cared about.
          </p>
        </RevealOnScroll>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="card-surface group grid gap-8 rounded-2xl p-6 md:grid-cols-[1fr_1.3fr] md:p-10"
              >
                <div>
                  <span className="text-accent-2 font-mono text-xs tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="border-border-subtle text-muted rounded-full border px-2.5 py-1 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="bg-accent flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white"
                      >
                        Live demo <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="border-border-strong text-foreground flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium"
                      >
                        <Github className="h-3 w-3" /> Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-muted-2 font-mono text-[11px] tracking-wider uppercase">
                      Challenge
                    </h4>
                    <p className="text-muted mt-2 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-muted-2 font-mono text-[11px] tracking-wider uppercase">
                      Solution
                    </h4>
                    <p className="text-muted mt-2 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="border-border-subtle col-span-full grid grid-cols-3 gap-4 border-t pt-5">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <p className="font-display text-accent-2 text-sm font-semibold">
                          {outcome.value}
                        </p>
                        <p className="text-muted-2 mt-0.5 text-[11px]">{outcome.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
