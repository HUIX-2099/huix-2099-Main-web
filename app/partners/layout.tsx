import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Partners & Collaboration — HUIX-2099 | Liberia Tech Partnerships",
  },
  description:
    "Partner with HUIX-2099, a Liberia-based technology studio in Monrovia. We collaborate with media, technology, education, research, enterprise, and government partners on VR, XR, AR, AI, and 3D visualization projects across Africa. Email huixtech2099@gmail.com to explore a partnership.",
  keywords: [
    "HUIX-2099 partners",
    "HUIX-2099 partnership",
    "Liberia tech partnership",
    "Africa technology collaboration",
    "VR AR partnership Africa",
    "media partner Liberia",
    "technology partner West Africa",
    "Monrovia tech collaboration",
    "Liberia Digital Insights",
    "enterprise technology partner Africa",
  ],
  alternates: { canonical: `${SITE_URL}/partners` },
  openGraph: {
    title: "Partners & Collaboration | HUIX-2099",
    description:
      "Media, technology, education, and enterprise partnerships with Liberia-based studio HUIX-2099.",
    url: `${SITE_URL}/partners`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners & Collaboration | HUIX-2099",
    description: "Partner with Liberia-based studio HUIX-2099 on immersive tech across Africa.",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Partners", item: `${SITE_URL}/partners` },
  ],
}

const partnersJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HUIX-2099 Partners",
  url: `${SITE_URL}/partners`,
  description:
    "Strategic partners and collaboration opportunities with HUIX-2099 across media, technology, education, and enterprise.",
  about: { "@type": "Organization", name: "HUIX-2099", url: SITE_URL },
}

export default function PartnersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
