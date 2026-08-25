import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { projects, getProject, site } from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectVisual from "@/components/ProjectVisual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.name} — ${project.industry}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    about: project.industry,
    creator: { "@type": "Person", name: site.name, url: site.url },
    dateCreated: project.year,
    url: project.liveUrl || `${site.url}/work/${project.slug}`,
    keywords: project.technologies.join(", "),
    description: project.summary,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-border-subtle relative overflow-hidden border-b pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,var(--accent-soft),transparent_70%)]"
        />
        <div className="container-page relative">
          <RevealOnScroll>
            <Link
              href="/work"
              data-cursor-hover
              className="text-muted hover:text-foreground group inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
          </RevealOnScroll>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <RevealOnScroll>
              <div className="text-muted-2 flex items-center gap-3 font-mono text-xs">
                <span className="text-accent-2">{project.industry}</span>
                <span aria-hidden>·</span>
                <span>{project.year}</span>
              </div>
              <h1 className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                {project.name}
              </h1>
              <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed text-balance">
                {project.overview}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group bg-accent mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-shadow hover:shadow-[0_0_30px_-4px_var(--accent)]"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <ProjectVisual project={project} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-border-subtle border-b">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <MetaBlock label="Client" value={project.client} />
          <MetaBlock label="Role" value={project.role} />
          <MetaBlock label="Services" value={project.services.join(", ")} />
          <MetaBlock label="Year" value={project.year} />
        </div>
      </section>

      {/* Overview / Problem + My Role */}
      <section className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <p className="section-label">The problem</p>
          <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            What needed solving
          </h2>
          <p className="text-muted mt-5 leading-relaxed text-balance">
            {project.problem}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <p className="section-label">My role</p>
          <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            What I handled
          </h2>
          <p className="text-muted mt-5 leading-relaxed text-balance">
            {project.roleDetail}
          </p>
        </RevealOnScroll>
      </section>

      {/* Approach */}
      <section className="border-border-subtle border-t py-20 md:py-28">
        <div className="container-page">
          <RevealOnScroll className="max-w-2xl">
            <p className="section-label">Approach</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              How it came together.
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
            {project.approach.map((step, i) => (
              <RevealOnScroll key={step.phase} delay={i * 0.04} y={12}>
                <div className="border-border-subtle bg-surface h-full border p-6">
                  <span className="text-accent-2/70 font-mono text-2xl font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-base font-semibold">
                    {step.phase}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technology + Results */}
      <section className="border-border-subtle border-t py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <RevealOnScroll>
            <p className="section-label">Technology</p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              The stack
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="border-border-subtle bg-surface text-muted rounded-full border px-4 py-2 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <p className="section-label">Outcome</p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Results
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.outcomes.map((o) => (
                <div key={o.label} className="card-surface rounded-xl p-5">
                  <p className="font-display text-accent-2 text-lg font-semibold text-balance">
                    {o.value}
                  </p>
                  <p className="text-muted-2 mt-1 text-xs">{o.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-border-subtle border-t py-20 md:py-28">
        <div className="container-page">
          <RevealOnScroll className="max-w-2xl">
            <p className="section-label">Gallery</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              A closer look.
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {project.gallery.map((shot, i) => (
              <RevealOnScroll key={shot.caption} delay={i * 0.06}>
                <figure>
                  <ProjectVisual
                    project={{ ...project, hue: (project.hue + i * 22) % 360 }}
                  />
                  <figcaption className="text-muted-2 mt-3 text-xs">
                    {shot.caption}
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-border-subtle border-t">
        <Link
          href={`/work/${nextProject.slug}`}
          data-cursor-hover
          className="group hover:bg-surface block transition-colors"
        >
          <div className="container-page flex flex-col gap-4 py-16 sm:flex-row sm:items-center sm:justify-between md:py-20">
            <div>
              <p className="section-label">Next project</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {nextProject.name}
              </h2>
              <p className="text-muted mt-2 text-sm">{nextProject.industry}</p>
            </div>
            <span className="text-accent-2 flex items-center gap-2 text-sm font-medium">
              View case study
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-2 font-mono text-xs tracking-wider uppercase">
        {label}
      </p>
      <p className="text-foreground mt-2 text-sm leading-relaxed">{value}</p>
    </div>
  );
}
