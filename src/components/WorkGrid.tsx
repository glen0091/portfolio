"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import ProjectVisual from "./ProjectVisual";

export default function WorkGrid() {
  return (
    <div className="container-page py-16 md:py-24">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={(i % 2) * 0.06}>
            <WorkCard project={project} index={i} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group card-surface h-full overflow-hidden rounded-2xl"
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor-hover
        className="flex h-full flex-col p-6"
        aria-label={`View case study: ${project.name}`}
      >
        <ProjectVisual
          project={project}
          className="transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <div className="mt-6 flex flex-1 flex-col">
          <div className="text-muted-2 flex items-center gap-3 font-mono text-xs">
            <span className="text-accent-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{project.industry}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h2 className="font-display mt-3 text-xl font-semibold tracking-tight md:text-2xl">
            {project.name}
          </h2>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="border-border-subtle text-muted rounded-full border px-2.5 py-1 text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-accent-2 mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium">
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
