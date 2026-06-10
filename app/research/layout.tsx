import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Research & Innovation — HUIX-2099 | Immersive Tech, Liberia",
  },
  description:
    "HUIX-2099 research and innovation: exploring VR, XR, AR, and AI through the HUIX-Horizen platform and the Virtual Past Liberia heritage preservation project. Studying the medical implications, societal impact, and platform perspectives of immersive technology in Liberia and Africa.",
  keywords: [
    "HUIX-2099 research",
    "immersive technology research Africa",
    "VR research Liberia",
    "XR AR research West Africa",
    "HUIX-Horizen platform",
    "Virtual Past Liberia",
    "digital heritage preservation Africa",
    "VR medical implications",
    "AI research Liberia",
    "Monrovia innovation",
    "African digital research",
  ],
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    title: "Research & Innovation | HUIX-2099",
    description:
      "Exploring immersive VR/XR/AR and AI through HUIX-Horizen and Virtual Past Liberia — research from Liberia-based studio HUIX-2099.",
    url: `${SITE_URL}/research`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Innovation | HUIX-2099",
    description:
      "Immersive technology and heritage research from Liberia-based studio HUIX-2099.",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Research", item: `${SITE_URL}/research` },
  ],
}

const researchJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HUIX-2099 Research & Innovation",
  url: `${SITE_URL}/research`,
  description:
    "Research initiatives at HUIX-2099 spanning immersive technology, the HUIX-Horizen platform, and the Virtual Past Liberia heritage project.",
  about: { "@type": "Organization", name: "HUIX-2099", url: SITE_URL },
}

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
