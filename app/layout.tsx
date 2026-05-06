import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeScript } from "@/components/theme-script";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Professional Portfolio and Activity Log",
    template: "%s | Portfolio"
  },
  description: "High-performance, SEO-optimized portfolio rendered from local JSON and Markdown.",
  applicationName: "Portfolio Activity Log",
  authors: [{ name: "Wesley R. Lebusta" }],
  openGraph: {
    type: "website",
    title: "Professional Portfolio and Activity Log",
    description: "High-performance, SEO-optimized portfolio rendered from local JSON and Markdown.",
    url: "/",
    siteName: "Portfolio Activity Log"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio and Activity Log",
    description: "High-performance, SEO-optimized portfolio rendered from local JSON and Markdown."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <ThemeScript />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
