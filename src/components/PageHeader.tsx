import RevealOnScroll from "./RevealOnScroll";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-border-subtle relative overflow-hidden border-b pt-36 pb-16 md:pt-44 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,var(--accent-soft),transparent_70%)]"
      />
      <div className="container-page relative">
        <RevealOnScroll>
          <p className="section-label">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed text-balance">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
