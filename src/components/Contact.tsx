"use client";

import { useState } from "react";
import { Copy, Check, Github, Linkedin, Calendar, ArrowUpRight } from "lucide-react";
import { contact, site } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ⚠️ EDIT ME — wire this up to your email service of choice
    // (Resend, Formspree, a Next.js Route Handler, etc). This demo just
    // simulates a send so the interaction is fully built out for you.
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section
      id="contact"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <RevealOnScroll>
          <p className="section-label">Contact</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            Let&apos;s build something that performs.
          </h2>
          <p className="text-muted mt-4 max-w-md">
            Tell me about the project and I&apos;ll reply within one business day with
            next steps — or book a call directly.
          </p>

          <div className="mt-8 space-y-3">
            <button
              onClick={copyEmail}
              data-cursor-hover
              className="border-border-subtle hover:border-accent-2 flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors sm:w-auto sm:min-w-[320px]"
            >
              <span className="font-mono text-sm">{contact.email}</span>
              {copied ? (
                <Check className="text-success h-4 w-4" />
              ) : (
                <Copy className="text-muted-2 h-4 w-4" />
              )}
            </button>

            <div className="flex flex-wrap gap-3">
              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border-border-subtle hover:border-accent-2 flex items-center gap-2 rounded-xl border px-5 py-4 text-sm transition-colors"
              >
                <Calendar className="text-accent-2 h-4 w-4" />
                Book a call
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="GitHub"
                className="border-border-subtle hover:border-accent-2 flex items-center gap-2 rounded-xl border px-5 py-4 text-sm transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="LinkedIn"
                className="border-border-subtle hover:border-accent-2 flex items-center gap-2 rounded-xl border px-5 py-4 text-sm transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="card-surface space-y-5 rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Company (optional)" name="company" type="text" />
            <div>
              <label
                htmlFor="message"
                className="text-muted mb-2 block text-xs font-medium"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you building, and what's the timeline?"
                className="border-border-subtle bg-surface-2 text-foreground placeholder:text-muted-2 focus:border-accent-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                data-cursor-hover
                disabled={status !== "idle"}
                className="bg-accent flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity disabled:opacity-70"
              >
                {status === "idle" && (
                  <>
                    Send message <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message sent ✓"}
              </button>
            </MagneticButton>
            {status === "sent" && (
              <p className="text-muted text-center text-xs">
                Thanks — {site.name} will reply within one business day.
              </p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-muted mb-2 block text-xs font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-border-subtle bg-surface-2 text-foreground placeholder:text-muted-2 focus:border-accent-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
      />
    </div>
  );
}
