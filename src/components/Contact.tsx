"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CircleCheck,
} from "lucide-react";
import { contact, site, projectTypes, budgetRanges } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10)
      next.message = "A little more detail helps — 10+ characters.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this hidden field.
    if (data.get("company_url")) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");

    // If no endpoint is configured, fall back to a prefilled mailto so the
    // enquiry is never lost. Wire `contact.formEndpoint` to enable real sends.
    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(
        `New enquiry from ${data.get("name")}`
      );
      const body = encodeURIComponent(
        [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Company: ${data.get("company") || "—"}`,
          `Project type: ${data.get("projectType") || "—"}`,
          `Budget: ${data.get("budget") || "—"}`,
          "",
          `${data.get("message")}`,
        ].join("\n")
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <RevealOnScroll>
          <p className="section-label">Reach me directly</p>
          <h2 className="font-display mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance md:text-3xl">
            Prefer email? Here&apos;s the fastest way.
          </h2>
          <p className="text-muted mt-4 max-w-md leading-relaxed">
            Fill in the form and I&apos;ll reply within one business day — or
            reach out through any of the channels below.
          </p>

          <dl className="mt-10 space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="text-accent-2 mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <dt className="text-muted-2 text-xs">Email</dt>
                <dd>
                  <button
                    onClick={copyEmail}
                    data-cursor-hover
                    className="hover:text-accent-2 flex items-center gap-2 font-mono text-sm transition-colors"
                  >
                    {contact.email}
                    {copied ? (
                      <Check className="text-success h-3.5 w-3.5" />
                    ) : (
                      <Copy className="text-muted-2 h-3.5 w-3.5" />
                    )}
                  </button>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-accent-2 mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <dt className="text-muted-2 text-xs">Phone</dt>
                <dd>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    data-cursor-hover
                    className="hover:text-accent-2 font-mono text-sm transition-colors"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-accent-2 mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <dt className="text-muted-2 text-xs">Location</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="text-accent-2 mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <dt className="text-muted-2 text-xs">Availability</dt>
                <dd className="text-sm">{site.availabilityNote}</dd>
              </div>
            </div>
          </dl>

          {(contact.github || contact.linkedin) && (
            <div className="mt-8 flex gap-3">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="GitHub"
                  className="border-border-subtle hover:border-accent-2 hover:text-accent-2 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="LinkedIn"
                  className="border-border-subtle hover:border-accent-2 hover:text-accent-2 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          {status === "sent" ? (
            <div className="card-surface flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl p-8 text-center">
              <div className="bg-accent-soft text-accent-2 flex h-14 w-14 items-center justify-center rounded-full">
                <CircleCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold">
                Thanks — that&apos;s on its way.
              </h3>
              <p className="text-muted mt-3 max-w-sm text-sm leading-relaxed">
                {contact.formEndpoint
                  ? `${site.firstName} will get back to you within one business day.`
                  : "Your email client should have opened with the details. If not, copy the address above and send it across."}
              </p>
              <button
                onClick={() => setStatus("idle")}
                data-cursor-hover
                className="text-accent-2 mt-8 text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface space-y-5 rounded-2xl p-6 md:p-8"
            >
              {/* Honeypot (hidden from users & AT) */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="company_url">Leave this empty</label>
                <input
                  id="company_url"
                  name="company_url"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  required
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <Field
                label="Company"
                name="company"
                type="text"
                optional
                autoComplete="organization"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Project type"
                  name="projectType"
                  options={projectTypes}
                />
                <SelectField label="Budget" name="budget" options={budgetRanges} />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-muted mb-2 block text-xs font-medium"
                >
                  Message <span className="text-accent-2">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="What are you building, and what's the timeline?"
                  className="border-border-subtle bg-surface-2 text-foreground placeholder:text-muted-2 focus:border-accent-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                />
                {errors.message && (
                  <p id="message-error" className="text-warning mt-1.5 text-xs">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p className="text-warning text-sm" role="alert">
                  Something went wrong sending that. Please email{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline underline-offset-2"
                  >
                    {contact.email}
                  </a>{" "}
                  directly.
                </p>
              )}

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  data-cursor-hover
                  disabled={status === "sending"}
                  className="bg-accent flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity disabled:opacity-70"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send enquiry <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </MagneticButton>
              <p className="text-muted-2 text-center text-xs">
                No spam, ever. Your details are only used to reply to your
                enquiry.
              </p>
            </form>
          )}
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
  optional,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-muted mb-2 block text-xs font-medium">
        {label}
        {required && <span className="text-accent-2"> *</span>}
        {optional && <span className="text-muted-2"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="border-border-subtle bg-surface-2 text-foreground placeholder:text-muted-2 focus:border-accent-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
      />
      {error && (
        <p id={`${name}-error`} className="text-warning mt-1.5 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-muted mb-2 block text-xs font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="border-border-subtle bg-surface-2 text-foreground focus:border-accent-2 w-full appearance-none rounded-lg border px-4 py-3 text-sm focus:outline-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
