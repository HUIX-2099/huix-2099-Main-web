import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { VRImmersePrompt } from "@/components/vr-immerse-prompt"
import { CookieConsent } from "@/components/cookie-consent"
import { productItemListJsonLd } from "@/lib/seo"

import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://huix2099.com"),
  title: {
    default: "HUIX-2099 | Building the Digital Future of Africa",
    template: "%s | HUIX-2099",
  },
  description:
    "HUIX-2099 is a Liberia-based next-generation technology company pioneering VR, XR, AR, AI, 3D visualization, and immersive digital engineering. Founded in 2024 in Monrovia by Victor Edet Coleman, we build innovative software solutions that merge creativity, culture, and commerce. Our flagship products include HUIX-Horizen platform and Virtual Past Liberia heritage preservation project.",
  applicationName: "HUIX-2099",
  generator: "Next.js",
  keywords: [
    "HUIX-2099",
    "HUIX 2099",
    "HUIX-THEME",
    "HUIX THEME VS Code extension",
    "Monrovia Hustle 3D",
    "Monrovia Hustle voice cast",
    "Huixor",
    "Liberia technology company",
    "African tech startup",
    "VR development Africa",
    "XR development Liberia",
    "AR development West Africa",
    "AI solutions Africa",
    "3D visualization services",
    "immersive technology",
    "digital engineering Liberia",
    "Monrovia tech company",
    "West Africa innovation",
    "software development Liberia",
    "virtual reality Africa",
    "augmented reality Africa",
    "HUIX Horizen platform",
    "Virtual Past Liberia",
    "African heritage technology",
    "tech startup Africa",
    "Victor Coleman",
    "Victor Edet Coleman",
    "Liberian software developer",
    "3D prototyping Africa",
    "machine learning Liberia",
    "app development West Africa",
    "web development Liberia",
    "UI UX design Africa",
    "digital transformation Africa",
    "tech innovation Monrovia",
    "African digital future",
  ],
  authors: [
    { name: "Victor Edet Coleman", url: "https://www.linkedin.com/in/victor-coleman-4731701a5/" },
    { name: "HUIX-2099 Team" },
  ],
  creator: "Victor Edet Coleman",
  publisher: "HUIX-2099",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Technology",
  classification: "Technology Company",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huix2099.com",
    siteName: "HUIX-2099",
    title: "HUIX-2099 | Building the Digital Future of Africa",
    description:
      "Liberia-based next-generation technology company pioneering VR, XR, AR, AI, 3D visualization, and immersive digital engineering. Founded in 2024 in Monrovia, we build innovative solutions that merge creativity, culture, and commerce.",
    images: [
      {
        url: "/logos/social/huix-2099-og-image-horizontal-dark.png",
        width: 1200,
        height: 630,
        alt: "HUIX-2099 - Building the Digital Future of Africa - Liberia Tech Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Huix2099",
    creator: "@Huix2099",
    title: "HUIX-2099 | Building the Digital Future of Africa",
    description:
      "Liberia-based next-generation technology company pioneering VR, XR, AR, AI, 3D visualization, and immersive digital engineering. Founded in 2024 in Monrovia.",
    images: ["/logos/social/huix-2099-og-image-horizontal-dark.png"],
  },
  alternates: {
    canonical: "https://huix2099.com",
    languages: {
      "en-US": "https://huix2099.com",
      "en-GB": "https://huix2099.com",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logos/icon/huix-2099-app-icon-dark-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logos/icon/huix-2099-app-icon-dark-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logos/icon/huix-2099-app-icon-dark-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/logos/icon/favicon-dark.ico" }],
    apple: [{ url: "/logos/icon/huix-2099-app-icon-dark-square-180.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "LR",
    "geo.placename": "Monrovia, Liberia",
    "geo.position": "6.3106;-10.8047",
    "ICBM": "6.3106, -10.8047",
    "og:locale:alternate": "en_GB",
    "application-name": "HUIX-2099",
    "msapplication-TileColor": "#0d0d0d",
    "apple-mobile-web-app-title": "HUIX-2099",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
}

// JSON-LD structured data for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://huix2099.com/#organization",
  name: "HUIX-2099",
  alternateName: "HUIX 2099",
  url: "https://huix2099.com",
  logo: "https://huix2099.com/logos/png/huix-2099-stacked-light-1024.png",
  description:
    "Liberia-based next-generation technology company pioneering VR, XR, AR, AI, 3D visualization, and immersive digital engineering.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Victor Edet Coleman",
      jobTitle: "Founder & CTO",
      url: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    },
    {
      "@type": "Person",
      name: "Wulwyn Porte L",
      jobTitle: "CEO & Co-founder & Investor",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monrovia",
    addressCountry: "LR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+231-776-800-064",
    contactType: "customer service",
    email: "huixtech2099@gmail.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://x.com/Huix2099",
    "https://www.instagram.com/huix2099/",
    "https://www.tiktok.com/@huix2099",
    "https://www.facebook.com/profile.php?id=61572485499528",
    "https://www.youtube.com/@HUIX-2099",
    "https://www.linkedin.com/in/victor-coleman-4731701a5/",
  ],
  knowsAbout: [
    "Virtual Reality",
    "Augmented Reality",
    "Extended Reality",
    "Artificial Intelligence",
    "3D Visualization",
    "Software Development",
    "Digital Engineering",
    "Immersive Technology",
    "Monrovia Hustle 3D",
    "HUIX-THEME VS Code extension",
    "Huixor",
    "Liberian narrative games",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 6.3106,
      longitude: -10.8047,
    },
    geoRadius: "5000",
  },
  slogan: "Building the Digital Future of Africa",
}

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HUIX-2099",
  url: "https://huix2099.com/",
  description:
    "Official site for HUIX-2099 — Liberia-based startup: Monrovia Hustle 3D, HUIX-THEME, Huixor, and XR/3D work from Monrovia.",
  publisher: { "@id": "https://huix2099.com/#organization" },
  inLanguage: "en",
  about: { "@id": "https://huix2099.com/#organization" },
}

const jsonLdProducts = productItemListJsonLd()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;if(d==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProducts) }}
        />
      </head>
      <body
        className="font-sans antialiased overflow-x-clip"
      >
        <ThemeProvider>
          <VRImmersePrompt />
          <main className="flex min-h-dvh w-full min-w-0 flex-col">
            <div className="min-w-0 w-full flex-1">
              {children}
            </div>
            {/* Bottom breathing room for floating UI + home indicator (see --mobile-tab-bar-spacing in globals.css) */}
            <div
              aria-hidden
              className="shrink-0 bg-background lg:hidden"
              style={{ height: "var(--mobile-tab-bar-spacing)" }}
            />
          </main>
          <CookieConsent />
          <Analytics />

        </ThemeProvider>
      </body>
    </html>
  )
}
