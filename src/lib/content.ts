/**
 * ============================================================================
 * SITE CONTENT — single source of truth
 * ============================================================================
 * Everything on the site is driven from this file. Sections marked
 * "⚠️ EDIT ME" contain placeholders because they need information only you
 * have (real project outcomes, real client quotes, real contact details).
 * Nothing else in this file is placeholder — it's written from the brief
 * you gave. Replace the ⚠️ items and redeploy.
 * ============================================================================
 */

export const site = {
  name: "Glen",
  role: "Senior Web Developer",
  tagline: "Senior Web Developer for WordPress & React/Next.js products",
  url: "https://glen.dev", // ⚠️ EDIT ME — your production domain
  // ⚠️ EDIT ME — replace with your real location + timezone
  location: "Remote — available AU / US hours",
  availability: "available" as "available" | "limited" | "booked",
  availabilityNote: "Taking on 1–2 new projects this quarter",
  experienceYears: 8,
};

export const contact = {
  // ⚠️ EDIT ME — all four of these
  email: "hello@glen.dev",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  calendly: "https://cal.com/your-username",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroRotatingRoles = [
  "WordPress Development",
  "React & Next.js Applications",
  "WooCommerce Builds",
  "API Integrations",
  "Performance Optimisation",
  "Technical SEO",
];

export const heroStats = [
  { label: "Years in production", value: 8, suffix: "+" },
  { label: "Avg. Lighthouse score shipped", value: 96, suffix: "" },
  { label: "Projects delivered", value: 60, suffix: "+" }, // ⚠️ EDIT ME if you have a more precise number
];

export const about = {
  eyebrow: "About",
  heading: "Code that has to work, for businesses that can't afford downtime.",
  paragraphs: [
    "I'm Glen, a senior web developer with 8+ years building and shipping production websites and web applications — from high-traffic WordPress and WooCommerce builds to custom React and Next.js products.",
    "My work sits at the intersection of two things most developers treat as separate: engineering discipline and business outcomes. I write clean, maintainable code, but I measure success in load times, conversion rates, and search rankings — the numbers a client's business actually feels.",
    "I've spent most of my career working directly with agencies, startups, and business owners across Australia and the US, which means I'm fluent in both the technical and the commercial side of a project: scoping realistic timelines, communicating in plain language, and building things that are still easy to maintain a year after launch.",
  ],
  values: [
    {
      title: "Performance is a feature",
      description:
        "A slow site is a broken site. Every build I ship is optimised for Core Web Vitals from day one, not patched afterward.",
    },
    {
      title: "Maintainable over clever",
      description:
        "Code is read far more than it's written. I optimise for the developer who inherits this project in two years — often, that's still me.",
    },
    {
      title: "Business results over busywork",
      description:
        "A feature that doesn't move a metric — traffic, conversion, retention — is a feature I'll question before I build it.",
    },
    {
      title: "Direct communication",
      description:
        "No jargon, no status theatre. Clear scopes, honest timelines, and a straight answer when something isn't a good idea.",
    },
  ],
};

export const experienceTimeline = [
  // ⚠️ EDIT ME — replace with your real role history (employers, dates, achievements)
  {
    period: "2022 — Present",
    title: "Senior Web Developer, Freelance / Contract",
    description:
      "Add a 1–2 sentence summary of the clients or agencies you work with and the scope of projects (e.g. platform type, team size, stack).",
    highlights: [
      "Add a specific, measurable highlight (e.g. reduced LCP from 4.2s to 1.1s)",
      "Add a second highlight (e.g. delivered N WooCommerce builds for AU retail clients)",
    ],
  },
  {
    period: "20XX — 20XX",
    title: "Add your previous role title",
    description: "Add a short description of this role and what you owned.",
    highlights: ["Add a highlight", "Add a highlight"],
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "WordPress",
    skills: [
      "WordPress Development",
      "Elementor Pro",
      "WooCommerce",
      "PHP",
      "Custom Themes & Plugins",
    ],
  },
  {
    category: "Data & APIs",
    skills: ["MySQL", "API Integrations", "REST & Webhooks"],
  },
  {
    category: "Performance & SEO",
    skills: [
      "Technical SEO",
      "Website Optimisation",
      "Performance Optimisation",
      "Core Web Vitals",
    ],
  },
  {
    category: "Infrastructure",
    skills: ["Cloudflare", "GitHub", "Vercel", "CI/CD"],
  },
];

export const services = [
  {
    title: "WordPress Development",
    description:
      "Custom themes, plugin development, and Elementor Pro builds engineered for speed and long-term maintainability — not page-builder bloat.",
  },
  {
    title: "WooCommerce",
    description:
      "Store builds and optimisation focused on checkout conversion, payment/shipping integrations, and catalogue performance at scale.",
  },
  {
    title: "Custom Web Applications",
    description:
      "React and Next.js applications built with TypeScript from the ground up — dashboards, portals, and product frontends.",
  },
  {
    title: "API Integrations",
    description:
      "Connecting your site to CRMs, payment gateways, booking systems, and internal tools with clean, documented integrations.",
  },
  {
    title: "Performance Optimisation",
    description:
      "Turning slow, bloated sites into fast ones — image pipelines, caching strategy, code splitting, and Core Web Vitals audits.",
  },
  {
    title: "Technical SEO",
    description:
      "Site structure, schema markup, crawlability, and Core Web Vitals work that supports — not fights — your content and marketing SEO.",
  },
  {
    title: "UI/UX",
    description:
      "Interface design and frontend implementation that balances a premium feel with genuinely usable, accessible interaction patterns.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing security updates, backups, monitoring, and incremental improvements so the site stays reliable after launch.",
  },
  {
    title: "Consulting",
    description:
      "Technical audits and architecture advice for teams deciding between WordPress and a custom-built stack, or planning a migration.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding the business goal behind the build — not just the feature list.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Scoping architecture, timeline, and success metrics before a line of code is written.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Wireframes and UI direction reviewed with you before development begins.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Clean, typed, version-controlled code with regular checkpoints — no black-box weeks.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Cross-browser, cross-device QA plus performance and accessibility audits.",
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Staged rollout with monitoring in place from the first minute in production.",
  },
  {
    step: "07",
    title: "Support",
    description:
      "A defined handover and, where needed, an ongoing maintenance arrangement.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "WordPress",
  "WooCommerce",
  "PHP",
  "MySQL",
  "HTML5",
  "CSS3",
  "GitHub",
  "Vercel",
  "Cloudflare",
  "Elementor Pro",
  "REST APIs",
];

/**
 * ⚠️ EDIT ME — these are structural placeholders, not real case studies.
 * Replace title/summary/metrics/links with your actual project details.
 * The shape (challenge → solution → outcome) is what the design expects;
 * keep it when you swap in real content.
 */
export const projects = [
  {
    slug: "project-one",
    name: "Add your project name",
    category: "WordPress / WooCommerce", // e.g. "WordPress / WooCommerce" or "Next.js / SaaS"
    summary: "One or two sentences describing what this project is and who it's for.",
    challenge:
      "Describe the problem the client came to you with — e.g. slow load times, an outdated stack, a conversion bottleneck.",
    solution:
      "Describe what you built and the key technical decisions — stack, architecture, integrations.",
    outcomes: [
      { label: "Load time", value: "Add real before → after" },
      { label: "Lighthouse score", value: "Add real number" },
      { label: "Business result", value: "e.g. conversion rate, traffic, revenue" },
    ],
    tech: ["WordPress", "PHP", "WooCommerce"],
    liveUrl: "", // ⚠️ add live URL or leave blank to hide the button
    githubUrl: "", // ⚠️ add repo URL or leave blank to hide the button
  },
  {
    slug: "project-two",
    name: "Add your project name",
    category: "Next.js / Web App",
    summary: "One or two sentences describing what this project is and who it's for.",
    challenge: "Describe the problem this project solved.",
    solution: "Describe your build — stack, architecture, decisions.",
    outcomes: [
      { label: "Performance", value: "Add real metric" },
      { label: "Scale", value: "Add real metric" },
      { label: "Business result", value: "Add real metric" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "project-three",
    name: "Add your project name",
    category: "API Integration",
    summary: "One or two sentences describing what this project is and who it's for.",
    challenge: "Describe the integration problem.",
    solution: "Describe the systems you connected and how.",
    outcomes: [
      { label: "Time saved", value: "Add real metric" },
      { label: "Reliability", value: "Add real metric" },
      { label: "Business result", value: "Add real metric" },
    ],
    tech: ["React", "REST APIs", "MySQL"],
    liveUrl: "",
    githubUrl: "",
  },
];

/**
 * ⚠️ EDIT ME — empty by default on purpose. No fabricated quotes.
 * Add objects here in the same shape once you have real client testimonials;
 * the section renders an honest empty state until then.
 */
export const testimonials: {
  quote: string;
  author: string;
  role: string;
  company: string;
}[] = [];

export const blogPlaceholder = {
  eyebrow: "Writing",
  heading: "Notes on WordPress, React, and building fast web products.",
  description:
    "Long-form articles on performance, architecture, and lessons from client work — coming soon.",
};

export const faqs = [
  {
    question: "What's your typical engagement length?",
    answer:
      "It depends on scope — a WordPress build is often 2–6 weeks, a custom application can run several months. Ongoing maintenance and retainer arrangements are available for either.",
  },
  {
    question: "Do you work with agencies or only direct clients?",
    answer:
      "Both. I regularly work white-label with agencies as a senior development resource, and directly with startups and business owners.",
  },
  {
    question: "What time zones do you work with?",
    answer:
      "I structure my schedule to overlap with Australian and US business hours — get in touch and we'll find a working rhythm.",
  },
];
