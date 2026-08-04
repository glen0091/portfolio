"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-border-subtle bg-background/75 border-b backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          data-cursor-hover
          className="font-display text-lg font-semibold tracking-tight"
        >
          {site.name}
          <span className="text-accent-2">.</span>
        </a>

        <ul className="border-border-subtle bg-surface/60 hidden items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur-md lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-cursor-hover
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === item.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="bg-surface-2 absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            data-cursor-hover
            className="bg-accent rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="border-border-subtle flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-border-subtle bg-background overflow-hidden border-b lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground hover:bg-surface-2 block rounded-lg px-3 py-3 text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-accent mt-2 block rounded-lg px-3 py-3 text-center text-base font-medium text-white"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
