import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { site } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://erohweb.vercel.app"),
  title: {
    default: "EROH Technology | Digital solutions that move you forward",
    template: "%s | EROH Technology",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_RW",
    siteName: site.name,
  },
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/logo.jpg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: site.name,
  legalName: site.legal,
  url: "https://erohweb.vercel.app",
  logo: "https://erohweb.vercel.app/logo.jpg",
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  areaServed: ["Rwanda", "East Africa", "Global"],
  sameAs: [
    "https://www.linkedin.com/in/erichofla",
    site.whatsapp,
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
