import { site, nav, contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-border-subtle border-t py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display text-sm font-semibold">
            {site.name}
            <span className="text-accent-2">.</span>
          </p>
          <p className="text-muted-2 mt-1 text-xs">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>

        <ul className="text-muted flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-muted flex items-center gap-4 text-xs">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
