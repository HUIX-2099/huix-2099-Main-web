import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { VRImmersePrompt } from "@/components/vr-immerse-prompt"
import { ChatBot } from "@/components/chat-bot"
import { CookieConsent } from "@/components/cookie-consent"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        url: "/icons/HUIX 2099 dark logo icon version.jpg",
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
    images: ["/icons/HUIX 2099 dark logo icon version.jpg"],
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
      { url: "/icons/HUIX 2099 dark logo icon version.jpg", type: "image/jpeg", sizes: "512x512", media: "(prefers-color-scheme: dark)" },
      { url: "/icons/HUIX 2099 light logo icon version.jpg", type: "image/jpeg", sizes: "512x512", media: "(prefers-color-scheme: light)" },
      { url: "/icons/HUIX 2099 dark logo icon version.jpg", type: "image/jpeg", sizes: "192x192", media: "(prefers-color-scheme: dark)" },
      { url: "/icons/HUIX 2099 light logo icon version.jpg", type: "image/jpeg", sizes: "192x192", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: [
      { url: "/icons/HUIX 2099 dark logo icon version.jpg", type: "image/jpeg", sizes: "192x192", media: "(prefers-color-scheme: dark)" },
      { url: "/icons/HUIX 2099 light logo icon version.jpg", type: "image/jpeg", sizes: "192x192", media: "(prefers-color-scheme: light)" },
    ],
    apple: [
      { url: "/icons/HUIX 2099 dark logo icon version.jpg", type: "image/jpeg", sizes: "180x180", media: "(prefers-color-scheme: dark)" },
      { url: "/icons/HUIX 2099 light logo icon version.jpg", type: "image/jpeg", sizes: "180x180", media: "(prefers-color-scheme: light)" },
    ],
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
  name: "HUIX-2099",
  alternateName: "HUIX 2099",
  url: "https://huix2099.com",
  logo: "https://huix2099.com/icons/HUIX 2099 dark logo icon version.jpg",
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
    "https://www.instagram.com/huix.2099/",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          <CustomCursor />
          <VRImmersePrompt />
          <main>
            {children}
          </main>
          <ChatBot />
          <CookieConsent />
          <Analytics />

        </ThemeProvider>
      </body>
    </html>
  )
}
