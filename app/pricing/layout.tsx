import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Pricing & Services — HUIX-2099 | Custom Quotes, Liberia",
  },
  description:
    "HUIX-2099 pricing and services: website development, mobile apps, PWA & full-stack, native desktop software, VR/AR/XR immersive experiences, and animation. Every project is quoted individually — email huixtech2099@gmail.com for a tailored proposal. Liberia-based studio in Monrovia.",
  keywords: [
    "HUIX-2099 pricing",
    "HUIX-2099 services",
    "website development Liberia pricing",
    "app development Liberia",
    "PWA development Africa",
    "native desktop software development",
    "VR AR XR development Liberia",
    "3D visualization services Africa",
    "animation motion graphics Liberia",
    "custom software quote Monrovia",
    "web development West Africa",
    "Monrovia software studio pricing",
    "hire developers Liberia",
    "African tech studio services",
  ],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing & Services | HUIX-2099",
    description:
      "Website, app, PWA, native software, VR/AR/XR, and animation services from Liberia-based studio HUIX-2099. Custom quotes — email for info.",
    url: `${SITE_URL}/pricing`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Services | HUIX-2099",
    description:
      "Custom quotes for web, app, PWA, native software, VR/AR/XR, and animation. Email HUIX-2099 for a tailored proposal.",
  },
}

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "HUIX-2099 Services",
  url: `${SITE_URL}/pricing`,
  provider: {
    "@type": "Organization",
    name: "HUIX-2099",
    url: SITE_URL,
    email: "huixtech2099@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monrovia",
      addressCountry: "LR",
    },
  },
  itemListElement: [
    "Website Development",
    "App Development",
    "PWA & Full Stack",
    "Native Software",
    "XR · VR · AR",
    "Animation & Motion",
    "Open Source & Collaboration",
  ].map((name, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name,
      provider: { "@type": "Organization", name: "HUIX-2099" },
      areaServed: "Worldwide",
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description: "Custom quote — contact huixtech2099@gmail.com",
    },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
  ],
}

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
