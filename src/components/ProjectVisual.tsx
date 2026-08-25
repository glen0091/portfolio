import type { Project } from "@/lib/content";

/**
 * Generated, CSS-only project visual rendered inside a browser frame.
 * It's intentionally lightweight (no image payload) and looks deliberate.
 *
 * To use a real screenshot later, drop an <Image> into the `.screen` area
 * and remove the generated gradient — the frame and layout stay the same.
 */
export default function ProjectVisual({
  project,
  className = "",
}: {
  project: Pick<Project, "name" | "liveUrl" | "hue" | "industry">;
  className?: string;
}) {
  const { hue } = project;
  const domain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "in production";

  return (
    <div
      className={`border-border-subtle bg-surface-2 relative overflow-hidden rounded-xl border ${className}`}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="border-border-subtle bg-surface flex items-center gap-2 border-b px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="bg-background/60 text-muted-2 ml-3 truncate rounded-md px-3 py-1 font-mono text-[11px]">
          {domain}
        </span>
      </div>

      {/* Generated "screen" */}
      <div
        className="screen relative aspect-[16/10] w-full overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(120% 120% at 15% 10%, hsl(${hue} 80% 55% / 0.28), transparent 55%), radial-gradient(120% 120% at 85% 90%, hsl(${(hue + 40) % 360} 80% 55% / 0.20), transparent 55%)`,
          backgroundColor: "var(--surface-2)",
        }}
      >
        <div className="noise-overlay" />
        {/* Abstract layout mimicking a real page */}
        <div className="absolute inset-0 flex flex-col gap-3 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div
              className="h-2.5 w-24 rounded-full"
              style={{ background: `hsl(${hue} 70% 60% / 0.8)` }}
            />
            <div className="flex gap-2">
              <div className="bg-foreground/20 h-2 w-10 rounded-full" />
              <div className="bg-foreground/20 h-2 w-10 rounded-full" />
              <div className="bg-foreground/20 h-2 w-10 rounded-full" />
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            <div className="bg-foreground/25 h-3.5 w-3/4 rounded-full" />
            <div className="bg-foreground/15 h-3.5 w-1/2 rounded-full" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="border-foreground/10 bg-background/30 rounded-lg border p-3"
              >
                <div
                  className="mb-2 h-6 w-6 rounded-md"
                  style={{ background: `hsl(${(hue + i * 25) % 360} 70% 60% / 0.6)` }}
                />
                <div className="bg-foreground/20 h-1.5 w-full rounded-full" />
                <div className="bg-foreground/10 mt-1.5 h-1.5 w-2/3 rounded-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-4 bottom-4">
          <span className="font-display text-foreground/70 text-sm font-semibold tracking-tight">
            {project.name}
          </span>
        </div>
      </div>
    </div>
  );
}
