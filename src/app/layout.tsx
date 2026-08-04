import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";
import ThemeScript from "@/components/ThemeScript";

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
    default: `${site.name} — ${site.role} | WordPress, React & Next.js`,
    template: `%s | ${site.name}`,
  },
  description:
    "Senior Web Developer with 8+ years building high-performance WordPress, WooCommerce, React and Next.js products for agencies, startups and enterprise clients across Australia and the US.",
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
      "Senior Web Developer building high-performance WordPress, WooCommerce, React and Next.js products.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Senior Web Developer building high-performance WordPress, WooCommerce, React and Next.js products.",
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
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  description:
    "Senior Web Developer specialising in WordPress, WooCommerce, React and Next.js.",
  knowsAbout: [
    "WordPress Development",
    "WooCommerce",
    "React",
    "Next.js",
    "TypeScript",
    "Technical SEO",
    "Performance Optimisation",
    "API Integrations",
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
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
