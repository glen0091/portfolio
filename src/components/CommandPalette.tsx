"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Command } from "lucide-react";
import { nav, contact, projects } from "@/lib/content";

type Item = { label: string; hint: string; action: () => void };

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => {
          if (!v) setQuery("");
          return !v;
        });
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      // Navigate home first if needed, then scroll.
      if (window.location.pathname !== "/") {
        router.push(href);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    router.push(href);
  };

  const items: Item[] = [
    ...nav.map((n) => ({
      label: n.label,
      hint: "Page",
      action: () => go(n.href),
    })),
    ...projects.map((p) => ({
      label: p.name,
      hint: "Case study",
      action: () => go(`/work/${p.slug}`),
    })),
    {
      label: "Copy email address",
      hint: "Contact",
      action: () => {
        navigator.clipboard?.writeText(contact.email);
        setOpen(false);
      },
    },
    ...(contact.github
      ? [
          {
            label: "Open GitHub",
            hint: "External",
            action: () => {
              window.open(contact.github, "_blank");
              setOpen(false);
            },
          },
        ]
      : []),
    ...(contact.linkedin
      ? [
          {
            label: "Open LinkedIn",
            hint: "External",
            action: () => {
              window.open(contact.linkedin, "_blank");
              setOpen(false);
            },
          },
        ]
      : []),
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        data-cursor-hover
        onClick={() => {
          setQuery("");
          setOpen(true);
        }}
        className="border-border-strong bg-surface/80 text-muted hover:border-accent-2 hover:text-foreground fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-full border px-4 py-2.5 text-xs backdrop-blur-md transition-colors md:bottom-8 md:left-8 md:flex"
        aria-label="Open command palette"
      >
        <Command className="h-3.5 w-3.5" />
        <span className="font-mono">Quick nav</span>
        <kbd className="border-border-strong rounded border px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="border-border-strong bg-surface w-[92vw] max-w-lg overflow-hidden rounded-xl border shadow-2xl"
            >
              <div className="border-border-subtle flex items-center gap-3 border-b px-4 py-3">
                <Search className="text-muted h-4 w-4" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, projects…"
                  className="text-foreground placeholder:text-muted-2 w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
              <ul className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <li className="text-muted px-3 py-6 text-center text-sm">
                    No results
                  </li>
                )}
                {filtered.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={item.action}
                      className="text-foreground hover:bg-surface-2 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm"
                    >
                      <span>{item.label}</span>
                      <span className="text-muted-2 flex items-center gap-2 text-xs">
                        {item.hint}
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
