import Link from "next/link";
import { site, contact, services, featuredProjects } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-subtle relative border-t">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight"
            >
              {site.name}
              <span className="text-accent-2">.</span>
            </Link>
            <p className="text-muted mt-3 max-w-xs text-sm leading-relaxed">
              {site.role} — {site.supportingRole}.
            </p>
            <div className="mt-4 flex flex-col gap-1">
              <a
                href={`mailto:${contact.email}`}
                className="text-muted hover:text-foreground font-mono text-sm transition-colors"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="text-muted hover:text-foreground font-mono text-sm transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <FooterCol title="Navigate">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/work">Work</FooterLink>
            <FooterLink href="/#expertise">Expertise</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Selected work">
            {featuredProjects.map((p) => (
              <FooterLink key={p.slug} href={`/work/${p.slug}`}>
                {p.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.title} href="/contact">
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="border-border-subtle mt-14 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-muted-2 text-xs">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="text-muted-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            )}
            <span>Designed &amp; developed by {site.name}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-muted-2 font-mono text-xs tracking-wider uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted hover:text-foreground text-sm transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
