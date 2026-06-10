import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "About HUIX-2099 — Our Story, Mission & Values | Monrovia, Liberia",
  },
  description:
    "Learn about HUIX-2099, a Liberia-based next-generation technology company founded in 2024 in Monrovia by Victor Edet Coleman. Discover our story, mission, and values across VR, XR, AR, AI, 3D visualization, the HUIX-Horizen platform, and the Virtual Past Liberia heritage project.",
  keywords: [
    "About HUIX-2099",
    "HUIX-2099 story",
    "HUIX-2099 mission and values",
    "Victor Edet Coleman founder",
    "Liberia technology company",
    "Monrovia tech startup",
    "HUIX-Horizen platform",
    "Virtual Past Liberia",
    "African tech company history",
    "VR XR AR AI Liberia",
    "immersive technology Africa",
    "digital engineering West Africa",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About HUIX-2099 — Our Story, Mission & Values",
    description:
      "Liberia-based studio founded in Monrovia in 2024. Our story, mission, and values across VR, XR, AR, AI, and 3D visualization.",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "About HUIX-2099 — Our Story, Mission & Values",
    description:
      "Liberia-based next-generation technology company founded in Monrovia in 2024 by Victor Edet Coleman.",
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About HUIX-2099",
  url: `${SITE_URL}/about`,
  description:
    "The story, mission, and values of HUIX-2099 — a Liberia-based technology company building immersive VR, XR, AR, AI, and 3D experiences from Monrovia.",
  about: {
    "@type": "Organization",
    name: "HUIX-2099",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Victor Edet Coleman",
      jobTitle: "Founder & CTO",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monrovia",
      addressCountry: "LR",
    },
    slogan: "Building the Digital Future of Africa",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
