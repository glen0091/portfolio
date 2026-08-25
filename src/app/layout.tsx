import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";
import ThemeScript from "@/components/ThemeScript";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { contact } from "@/lib/content";

// Self-hosted variable fonts (no runtime dependency on Google Fonts —
// faster, more private, and works behind restrictive network policies).
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-variable.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Glen Paredes is a senior web developer with 7+ years building high-performance websites, custom WordPress, WooCommerce, and modern React/Vite applications for businesses, agencies and international clients.",
  keywords: [
    "Senior Web Developer",
    "WordPress Developer",
    "WooCommerce Developer",
    "React Developer",
    "Next.js Developer",
    "Freelance Web Developer Australia",
    "Remote Web Developer",
    "Performance Optimisation",
    "Technical SEO",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  applicationName: `${site.name} — Portfolio`,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description:
      "Web development, UX and digital experiences built for businesses that want more than just a website.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Web development, UX and digital experiences built for businesses that want more than just a website.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f9" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#glen`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${contact.email}`,
      telephone: contact.phone,
      description:
        "Senior web developer with 7+ years building high-performance websites, custom WordPress, WooCommerce, and modern React/Vite applications.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
      },
      knowsAbout: [
        "Web Development",
        "WordPress Development",
        "WooCommerce",
        "React",
        "Vite",
        "JavaScript",
        "PHP",
        "Technical SEO",
        "Core Web Vitals",
        "Performance Optimisation",
        "API Integrations",
        "Stripe",
      ],
      ...(contact.github || contact.linkedin
        ? { sameAs: [contact.github, contact.linkedin].filter(Boolean) }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      publisher: { "@id": `${site.url}/#glen` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="custom-cursor-active bg-background text-foreground min-h-dvh font-sans antialiased">
        <a
          href="#main-content"
          className="focus:bg-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <Nav />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
