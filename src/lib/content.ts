/**
 * ============================================================================
 * SITE CONTENT — single source of truth
 * ============================================================================
 * Everything on the site is driven from this file. Items marked "⚠️ EDIT ME"
 * need information only Glen has (real metrics, real dates, real testimonials).
 * The rest is written from Glen's brief and is production copy.
 *
 * To add a project: append an object to `projects` following the Project type.
 * To make it a featured case study on the homepage, set `featured: true`.
 * ============================================================================
 */

export const site = {
  name: "Glen Paredes",
  firstName: "Glen",
  role: "Senior Web Developer",
  supportingRole: "Web Developer & Digital Experience Builder",
  tagline:
    "Senior web developer specialising in high-performance websites, custom WordPress, modern frontend engineering, eCommerce and digital optimisation.",
  url: "https://glenparedes.com",
  location: "Philippines — available remote, worldwide",
  availability: "available" as "available" | "limited" | "booked",
  availabilityNote: "Available for new projects",
  experienceYears: 7,
};

export const contact = {
  email: "glenmichael91@gmail.com",
  phone: "+63 952 468 3828",
  github: "https://github.com/glen0091",
  // Not shown — leave blank (add a URL later to enable).
  linkedin: "",
  // Set to a real endpoint (Formspree / Resend route / etc.) to enable the
  // contact form. While blank, the form validates and shows a mailto fallback.
  formEndpoint: "",
};

/** Primary navigation — real routes plus one in-page anchor for Expertise. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Senior Web Developer",
  headline: "I build digital experiences that perform.",
  supporting:
    "Web development, UX and digital experiences built for businesses that want more than just a website.",
  primaryCta: { label: "View my work", href: "/work" },
  secondaryCta: { label: "Let's work together", href: "/contact" },
  // The animated pipeline shown beside the headline.
  pipeline: ["Design", "Build", "Optimise", "Ship"],
};

export const heroStats = [
  { label: "Years building for production", value: 7, suffix: "+" },
  // Verifiable: reflects the breadth of the stack shown across the site.
  { label: "Technologies across the stack", value: 15, suffix: "+" },
  { label: "Focus on Core Web Vitals", value: 100, suffix: "%" },
];

/* -------------------------------------------------------------------------- */
/*  INTRO / VALUE PROPOSITION                                                  */
/* -------------------------------------------------------------------------- */

export const intro = {
  eyebrow: "What I do",
  heading: "I turn complex ideas into simple digital experiences.",
  body: "I don't just build websites. I design, develop, optimise and maintain digital experiences that are built to perform — from marketing sites to transactional platforms.",
  pillars: [
    "Design",
    "Development",
    "Integration",
    "Performance",
    "SEO",
  ],
};

/* -------------------------------------------------------------------------- */
/*  EXPERTISE                                                                  */
/* -------------------------------------------------------------------------- */

export const expertise = {
  eyebrow: "Expertise",
  heading: "What I do, in depth.",
  intro:
    "Seven years across the full lifecycle of a website — from the first wireframe to Core Web Vitals in production.",
  categories: [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive interfaces built with performance and accessibility in mind.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "SCSS",
        "Vite",
        "Responsive UI",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Custom builds beyond page-builder defaults — themes, plugins and CMS solutions.",
      skills: [
        "WordPress",
        "Elementor",
        "Bricks",
        "Divi",
        "Gutenberg",
        "Breakdance",
        "ACF",
        "WooCommerce",
        "Custom Themes",
        "Custom Plugins",
      ],
    },
    {
      title: "Backend & Integrations",
      description:
        "Connecting the front of a site to the systems that make it work.",
      skills: [
        "PHP",
        "Node.js",
        "MySQL",
        "REST APIs",
        "Third-party APIs",
        "Stripe",
        "Payment Systems",
      ],
    },
    {
      title: "Performance & SEO",
      description:
        "Technical optimisation that makes sites fast and findable.",
      skills: [
        "Technical SEO",
        "Core Web Vitals",
        "PageSpeed",
        "GTmetrix",
        "Image Optimisation",
        "Caching",
        "CDN",
        "Cloudflare",
      ],
    },
    {
      title: "Infrastructure",
      description:
        "Deployment, DNS and hosting handled end to end.",
      skills: [
        "GitHub",
        "Vercel",
        "Cloudflare",
        "DNS",
        "Hosting",
        "Deployment",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  PROCESS                                                                    */
/* -------------------------------------------------------------------------- */

export const process = {
  eyebrow: "How I work",
  heading: "From first idea to final launch.",
  steps: [
    {
      step: "01",
      title: "Discover",
      description: "Understand the business, audience and objectives.",
    },
    {
      step: "02",
      title: "Structure",
      description:
        "Plan content, UX, information architecture and user journeys.",
    },
    {
      step: "03",
      title: "Design",
      description: "Create a visual system that supports the business.",
    },
    {
      step: "04",
      title: "Build",
      description:
        "Develop a responsive, accessible and maintainable website.",
    },
    {
      step: "05",
      title: "Integrate",
      description:
        "Connect APIs, payments, CMS, analytics and external services.",
    },
    {
      step: "06",
      title: "Optimise",
      description:
        "Improve performance, SEO, accessibility and Core Web Vitals.",
    },
    {
      step: "07",
      title: "Launch",
      description: "Deploy, monitor and continuously improve.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SERVICES                                                                   */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    title: "Website Design & Development",
    description:
      "High-end websites designed around business goals — not templates.",
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress builds, CMS solutions and WooCommerce stores.",
  },
  {
    title: "Frontend Development",
    description: "Modern React, Vite and JavaScript interfaces.",
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern digital experiences.",
  },
  {
    title: "Performance & SEO",
    description:
      "Technical optimisation, Core Web Vitals and search visibility.",
  },
  {
    title: "API & Platform Integration",
    description:
      "Connect websites to external platforms, payment systems and APIs.",
  },
];

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About",
  heading: "The developer behind the work.",
  lead: "A web developer who sits between design, technology and business.",
  paragraphs: [
    "I'm Glen Paredes, a senior web developer with 7+ years building websites and digital experiences — from custom WordPress and WooCommerce stores to modern React and Vite applications with real transactional flows.",
    "I enjoy solving practical problems through technology: building websites that are not only visually strong, but also fast, accessible and genuinely maintainable long after launch. I care as much about Core Web Vitals and clean architecture as I do about the way a page feels.",
    "Most of my work is with businesses, agencies and international clients who need more than a brochure site — they need something that performs, converts and holds up under real-world use.",
  ],
  strengths: [
    {
      title: "Design meets engineering",
      description:
        "I work fluently across visual design and production code, so nothing gets lost in handover.",
    },
    {
      title: "Performance as a default",
      description:
        "Core Web Vitals, image pipelines and caching are part of the build — not an afterthought.",
    },
    {
      title: "Business-minded",
      description:
        "I measure success in load times, conversions and outcomes the client actually feels.",
    },
    {
      title: "Built to maintain",
      description:
        "Clean, documented, version-controlled work that's still easy to extend a year later.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE TIMELINE                                                        */
/*  Periods are kept flexible (no fabricated dates). To add exact dates,       */
/*  change each `period` (e.g. "2021 — Present").                              */
/* -------------------------------------------------------------------------- */

export const experienceTimeline = [
  {
    period: "Now",
    title: "Founder & Lead Developer — UT Digital Studios",
    description:
      "Design and develop premium websites and digital experiences for clients across Australia and internationally.",
    highlights: [
      "Full-service web design, development and branding",
      "WordPress, WooCommerce and modern frontend builds",
      "Performance, SEO and ongoing maintenance",
    ],
  },
  {
    period: "Ongoing",
    title: "Web Developer — UtukTel / Telecommunications",
    description:
      "Development work on telecommunications and NBN-related digital experiences with transactional customer journeys.",
    highlights: [
      "Plan search, pricing systems and customer journeys",
      "API integrations and transactional workflows",
    ],
  },
  {
    period: "7+ years",
    title: "Freelance / Contract Web Developer",
    description:
      "Partnering with agencies, startups and business owners as a senior development resource.",
    highlights: [
      "eCommerce, API integrations and modern frontend development",
      "White-label delivery for agencies",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  TECH STACK                                                                 */
/* -------------------------------------------------------------------------- */

export const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Vite",
  "Next.js",
  "Node.js",
  "PHP",
  "WordPress",
  "WooCommerce",
  "Tailwind CSS",
  "MySQL",
  "Stripe",
  "GitHub",
  "Cloudflare",
  "Vercel",
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS / CASE STUDIES                                                    */
/* -------------------------------------------------------------------------- */

export type ProjectOutcome = { label: string; value: string };
export type ApproachStep = { phase: string; detail: string };

export type Project = {
  slug: string;
  name: string;
  industry: string;
  year: string;
  client: string;
  role: string;
  /** Short one-line summary for cards. */
  summary: string;
  /** Longer positioning paragraph for the case study hero. */
  overview: string;
  /** The problem that needed solving. */
  problem: string;
  /** What Glen personally handled. */
  roleDetail: string;
  services: string[];
  technologies: string[];
  approach: ApproachStep[];
  /** Qualitative or real metrics. ⚠️ Replace values with real numbers where available. */
  outcomes: ProjectOutcome[];
  /** Gallery is placeholder framing — swap captions for real screenshots later. */
  gallery: { caption: string }[];
  liveUrl: string;
  featured: boolean;
  /** Layout weight on the homepage grid. */
  size: "large" | "small";
  /** Accent hue (degrees) used for the generated project visual. */
  hue: number;
};

const standardApproach: ApproachStep[] = [
  {
    phase: "Discovery",
    detail:
      "Clarified the business goal, audience and success metrics before scoping the build.",
  },
  {
    phase: "UX & Design",
    detail:
      "Structured content and user journeys, then designed a visual system to match.",
  },
  {
    phase: "Development",
    detail:
      "Built a responsive, accessible and maintainable front end with clean architecture.",
  },
  {
    phase: "Integration",
    detail:
      "Connected the CMS, third-party services and analytics required to run the site.",
  },
  {
    phase: "Optimisation & Launch",
    detail:
      "Tuned performance, SEO and Core Web Vitals, then deployed with monitoring in place.",
  },
];

export const projects: Project[] = [
  {
    slug: "ut-global",
    name: "UT Global",
    industry: "Travel Connectivity / eSIM",
    year: "2024",
    client: "UT Global",
    role: "Frontend Development, Integrations, Performance",
    summary:
      "International eSIM and travel connectivity platform with real transactional flows.",
    overview:
      "UT Global is an international eSIM and travel connectivity platform that lets travellers buy and manage data plans across countries. It's a real transactional product — pricing, currency, payments and account functionality all have to work flawlessly.",
    problem:
      "Travellers needed a fast, trustworthy way to browse international eSIM plans, see accurate localised pricing, and complete a purchase without friction — on any device, anywhere in the world.",
    roleDetail:
      "I built the React / Vite frontend and the purchasing experience end to end: the plan browsing UX, international pricing with currency conversion, payment integration, responsive layouts, and the performance and SEO work needed for a global, transactional site.",
    services: [
      "Frontend Development",
      "UX",
      "Payment Integration",
      "Performance",
      "SEO",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Stripe",
      "REST APIs",
      "Cloudflare",
      "Vercel",
    ],
    approach: [
      {
        phase: "Discovery",
        detail:
          "Mapped the purchasing journey across countries, currencies and plan types.",
      },
      {
        phase: "UX & Frontend",
        detail:
          "Designed and built the React / Vite eSIM purchasing experience with responsive layouts.",
      },
      {
        phase: "Pricing & Currency",
        detail:
          "Implemented international pricing and currency conversion for a global audience.",
      },
      {
        phase: "Payments & APIs",
        detail:
          "Integrated Stripe payments and third-party APIs behind the transactional flows.",
      },
      {
        phase: "Optimise & Ship",
        detail:
          "Tuned Core Web Vitals and SEO, deployed on Vercel behind Cloudflare.",
      },
    ],
    outcomes: [
      { label: "Experience", value: "End-to-end eSIM purchasing" },
      { label: "Reach", value: "International pricing & currency" },
      { label: "Performance", value: "Optimised for Core Web Vitals" },
    ],
    gallery: [
      { caption: "Plan browsing & international pricing" },
      { caption: "Checkout & payment flow" },
      { caption: "Account & plan management" },
    ],
    liveUrl: "https://utglobal.app/",
    featured: true,
    size: "large",
    hue: 245,
  },
  {
    slug: "ogawa-world",
    name: "Ogawa World",
    industry: "E-commerce / Wellness",
    year: "2024",
    client: "OGAWA",
    role: "Frontend Development, UI/UX, E-commerce",
    summary:
      "Premium e-commerce experience for OGAWA's massage chairs and wellness products.",
    overview:
      "Ogawa World is the online home for OGAWA's premium massage chairs and wellness products — a content-rich e-commerce experience built to showcase high-consideration products and guide customers toward buying online or finding a store.",
    problem:
      "Premium wellness products are a considered purchase. The site needed to present massage chairs with the depth of information buyers expect, keep a large catalogue easy to browse on any device, and run promotional campaigns without losing clarity or speed.",
    roleDetail:
      "I worked on the front-end build and UI/UX — responsive product presentation, campaign layouts (anniversary sale, trade-in, new arrivals), catalogue browsing, and the shop and store-locator journeys on a WordPress-based e-commerce stack.",
    services: [
      "Frontend Development",
      "UI/UX Implementation",
      "E-commerce",
      "Responsive Development",
      "Performance",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    approach: [
      {
        phase: "Discovery",
        detail:
          "Understood the product range, campaigns and how customers research a high-value purchase.",
      },
      {
        phase: "UI/UX",
        detail:
          "Designed product-first layouts and conversion-focused journeys toward purchase and store discovery.",
      },
      {
        phase: "E-commerce Build",
        detail:
          "Implemented the catalogue, product presentation and promotional campaign pages on WordPress.",
      },
      {
        phase: "Responsive & Performance",
        detail:
          "Tuned the experience for mobile and desktop, keeping media-rich pages fast.",
      },
      {
        phase: "Launch",
        detail: "Shipped, with ongoing campaign and catalogue updates.",
      },
    ],
    outcomes: [
      { label: "Experience", value: "Premium product presentation" },
      { label: "Commerce", value: "Catalogue, cart & store locator" },
      { label: "Delivery", value: "Responsive across devices" },
    ],
    gallery: [
      { caption: "Homepage & campaigns" },
      { caption: "Product catalogue" },
      { caption: "Product detail & purchase" },
    ],
    liveUrl: "https://ogawaworld.net/",
    featured: true,
    size: "small",
    hue: 12,
  },
  {
    slug: "utuk-telecom",
    name: "UT UK Telecom",
    industry: "Telecommunications",
    year: "2024",
    client: "Utuktel",
    role: "Frontend Development, UI/UX, Conversion",
    summary:
      "Australian internet provider site turning complex NBN and mobile plans into clear, comparable pricing.",
    overview:
      "UT UK Telecom (Utuktel) is an Australian-owned internet and mobile provider. The site turns a broad range of NBN and mobile plans into transparent, comparable pricing that customers can act on with confidence — backed by a customer portal.",
    problem:
      "Telco pricing is notoriously confusing. The site had to present NBN and mobile plans across residential, business and Opticomm segments with transparent, comparable pricing, and move visitors confidently toward signing up — on mobile as much as desktop.",
    roleDetail:
      "I built the responsive front end and UI/UX: the plan comparison tables, segmented pricing (residential / business / Opticomm), promotional intro offers, conversion-focused sign-up paths, and the links into the customer portal.",
    services: [
      "Frontend Development",
      "UI/UX Implementation",
      "Conversion-focused Design",
      "Responsive Development",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Responsive UI"],
    approach: [
      {
        phase: "Discovery",
        detail:
          "Mapped the plan range across residential, business and Opticomm segments.",
      },
      {
        phase: "UI/UX",
        detail:
          "Designed clear, comparable pricing tables and conversion-focused sign-up paths.",
      },
      {
        phase: "Frontend Build",
        detail:
          "Built responsive, mobile-first layouts and interactive plan presentation.",
      },
      {
        phase: "Conversion",
        detail:
          "Structured promotions and calls-to-action to guide visitors toward signing up.",
      },
      {
        phase: "Launch",
        detail: "Shipped with links into the customer portal and ongoing updates.",
      },
    ],
    outcomes: [
      { label: "Clarity", value: "Transparent plan comparison" },
      { label: "Segments", value: "Residential · Business · Opticomm" },
      { label: "Delivery", value: "Mobile-first, conversion-focused" },
    ],
    gallery: [
      { caption: "NBN plan comparison" },
      { caption: "Mobile plans & pricing" },
      { caption: "Sign-up & customer portal" },
    ],
    liveUrl: "https://utuktel.com.au/",
    featured: true,
    size: "small",
    hue: 205,
  },
  {
    slug: "ut-digital-studios",
    name: "UT Digital Studios",
    industry: "Digital Studio",
    year: "2024",
    client: "UT Digital Studios",
    role: "Design, Development, Branding",
    summary:
      "My digital studio — web design, development and branding for client work.",
    overview:
      "UT Digital Studios is my digital studio: the home for design, development, branding and digital strategy work delivered to clients. The site itself is a statement of the studio's standard of work.",
    problem:
      "The studio needed a digital presence that communicated senior-level capability across design and development, and gave prospective clients confidence in the work.",
    roleDetail:
      "I led design and development end to end — the visual identity direction, the WordPress and frontend build, and the digital strategy behind how the studio presents its services.",
    services: ["Web Design", "Web Development", "Branding", "Digital Strategy"],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    approach: standardApproach,
    outcomes: [
      { label: "Positioning", value: "Studio-grade presentation" },
      { label: "Scope", value: "Design → build → brand" },
      { label: "Stack", value: "Custom WordPress" },
    ],
    gallery: [
      { caption: "Studio homepage" },
      { caption: "Services & capabilities" },
      { caption: "Selected client work" },
    ],
    liveUrl: "https://www.utdigital.au/",
    featured: false,
    size: "small",
    hue: 200,
  },
  {
    slug: "avsar-medical",
    name: "Avsar Medical",
    industry: "Healthcare / Medical",
    year: "2024",
    client: "Avsar Medical Services",
    role: "WordPress Development, UI/UX",
    summary:
      "Professional healthcare site for a Victorian event medical and first aid provider.",
    overview:
      "Avsar Medical Services provides on-site medical teams, first aid stations and event risk assessment across Victoria. The website presents the service professionally and builds trust with event organisers looking for reliable medical cover.",
    problem:
      "Event organisers choosing a medical provider need to trust them quickly. The site had to communicate credibility, clearly present the services, and make it easy to get in touch — with a clean, professional, responsive presentation.",
    roleDetail:
      "I developed the WordPress site with a focus on UI/UX, responsive layouts, clear service presentation, performance and a professional, accessible design.",
    services: [
      "WordPress Development",
      "UI/UX Implementation",
      "Responsive Development",
      "Performance",
      "Accessibility",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    approach: standardApproach,
    outcomes: [
      { label: "Presentation", value: "Professional & trustworthy" },
      { label: "Focus", value: "Clear service communication" },
      { label: "Build", value: "Responsive WordPress" },
    ],
    gallery: [
      { caption: "Homepage & services" },
      { caption: "About & credibility" },
      { caption: "Contact & enquiry" },
    ],
    liveUrl: "https://avsarmedical.au/",
    featured: false,
    size: "small",
    hue: 175,
  },
  {
    slug: "avsar-disability",
    name: "Avsar Disability",
    industry: "Disability / Healthcare Services",
    year: "2023",
    client: "Avsar Disability Service",
    role: "WordPress Development, Accessibility, UI/UX",
    summary:
      "Accessibility-conscious website for a Melbourne-based disability services provider.",
    overview:
      "Avsar Disability Service is a Melbourne-based NDIS-style provider offering personalised support across self-care, domestic and community participation. The site is built with accessibility and a clear information architecture at its core, so people can quickly find the support they need.",
    problem:
      "A disability services provider needs a site that's genuinely accessible and easy to navigate — with content structured across services, FAQs and a blog so visitors can find the right support and get in touch.",
    roleDetail:
      "I developed the WordPress site with an accessibility-conscious approach: a clear multi-page information architecture (services, team, FAQ, blog), responsive layouts, readable typography and a build that's straightforward to maintain.",
    services: [
      "Accessibility-Conscious Design",
      "WordPress Development",
      "Responsive Development",
      "Information Architecture",
      "UI/UX Implementation",
    ],
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML", "CSS"],
    approach: standardApproach,
    outcomes: [
      { label: "Priority", value: "Accessibility-conscious" },
      { label: "Structure", value: "Clear multi-page IA" },
      { label: "Build", value: "Responsive WordPress" },
    ],
    gallery: [
      { caption: "Homepage & services overview" },
      { caption: "Services & support information" },
      { caption: "FAQ, blog & contact" },
    ],
    liveUrl: "https://avsardisability.com.au/",
    featured: false,
    size: "small",
    hue: 160,
  },
  {
    slug: "avsar-group",
    name: "Avsar Group",
    industry: "Corporate",
    year: "2023",
    client: "Avsar Group",
    role: "WordPress Development, UI/UX",
    summary:
      "Corporate website development with a professional, performance-focused presentation.",
    overview:
      "Avsar Group is a corporate website built to present the business professionally and perform reliably. It's a clean, responsive WordPress build focused on clarity and credibility.",
    problem:
      "The business needed a corporate presence that felt established and trustworthy, loaded quickly, and was easy to maintain as the organisation grew.",
    roleDetail:
      "I developed the corporate WordPress site with a focus on responsive design, UI/UX, performance and a professional business presentation.",
    services: [
      "Corporate Website",
      "WordPress Development",
      "Responsive Design",
      "Performance",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    approach: standardApproach,
    outcomes: [
      { label: "Presentation", value: "Professional & credible" },
      { label: "Build", value: "Responsive WordPress" },
      { label: "Focus", value: "Performance & UX" },
    ],
    gallery: [
      { caption: "Corporate homepage" },
      { caption: "Services & about" },
      { caption: "Contact & enquiry" },
    ],
    liveUrl: "https://avsar.au/",
    featured: false,
    size: "small",
    hue: 210,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  TESTIMONIALS                                                               */
/*  ⚠️ EDIT ME — empty on purpose. No fabricated quotes. Add real ones here.   */
/* -------------------------------------------------------------------------- */

export const testimonials: {
  quote: string;
  author: string;
  role: string;
  company: string;
}[] = [];

/* -------------------------------------------------------------------------- */
/*  CONTACT FORM OPTIONS                                                       */
/* -------------------------------------------------------------------------- */

export const projectTypes = [
  "New website",
  "Website redesign",
  "WordPress / WooCommerce",
  "React / frontend app",
  "Performance & SEO",
  "API / integration",
  "Other",
];

export const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $30k",
  "$30k+",
  "Not sure yet",
];

/* -------------------------------------------------------------------------- */
/*  CTA                                                                        */
/* -------------------------------------------------------------------------- */

export const cta = {
  heading: "Have a project in mind?",
  body: "Whether you're launching something new, redesigning an existing website or solving a complex web problem, let's talk.",
  primary: { label: "Start a conversation", href: "/contact" },
  secondary: { label: "View my work", href: "/work" },
};
