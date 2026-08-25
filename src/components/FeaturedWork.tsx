"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { featuredProjects, type Project } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import ProjectVisual from "./ProjectVisual";

export default function FeaturedWork() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section
      id="work"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="section-label">Selected Work</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
              Real projects, built to perform.
            </h2>
          </div>
          <Link
            href="/work"
            data-cursor-hover
            className="group text-muted hover:text-foreground flex items-center gap-2 text-sm transition-colors"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>

        <div className="mt-16 space-y-6">
          {/* Project 01 — large feature */}
          {lead && (
            <RevealOnScroll>
              <FeatureCard project={lead} index={0} large />
            </RevealOnScroll>
          )}

          {/* Remaining featured — asymmetric grid */}
          {rest.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((project, i) => (
                <RevealOnScroll key={project.slug} delay={i * 0.06}>
                  <FeatureCard project={project} index={i + 1} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group card-surface h-full overflow-hidden rounded-2xl"
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor-hover
        className="flex h-full flex-col"
        aria-label={`View case study: ${project.name}`}
      >
        <div
          className={
            large
              ? "grid gap-8 p-6 md:grid-cols-2 md:items-center md:p-8"
              : "flex flex-col p-6"
          }
        >
          {large && (
            <div className="order-2 md:order-1">
              <ProjectMeta project={project} index={index} />
            </div>
          )}
          <div className={large ? "order-1 md:order-2" : ""}>
            <ProjectVisual
              project={project}
              className="transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </div>
          {!large && <ProjectMeta project={project} index={index} compact />}
        </div>
      </Link>
    </motion.article>
  );
}

function ProjectMeta({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mt-6" : ""}>
      <div className="text-muted-2 flex items-center gap-3 font-mono text-xs">
        <span className="text-accent-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{project.industry}</span>
        <span aria-hidden>·</span>
        <span>{project.year}</span>
      </div>
      <h3
        className={`font-display mt-3 font-semibold tracking-tight ${
          compact ? "text-xl" : "text-2xl md:text-3xl"
        }`}
      >
        {project.name}
      </h3>
      <p className="text-muted mt-3 max-w-md text-sm leading-relaxed">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, compact ? 3 : 5).map((t) => (
          <span
            key={t}
            className="border-border-subtle text-muted rounded-full border px-2.5 py-1 text-[11px]"
          >
            {t}
          </span>
        ))}
      </div>
      <span className="text-accent-2 mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
        View case study
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  );
}
