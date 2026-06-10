import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Showcase — HUIX-2099 | Games, Apps & Immersive Projects, Liberia",
  },
  description:
    "Explore the HUIX-2099 showcase: Monrovia Hustle 3D (Liberian narrative game), Huixor (immersive desktop app), HUIX-THEME (VS Code theme), Typelr, and more. Selected products, prototypes, and immersive VR/XR/AR experiences from a Liberia-based studio in Monrovia.",
  keywords: [
    "HUIX-2099 showcase",
    "HUIX-2099 projects",
    "Monrovia Hustle 3D",
    "Huixor app",
    "HUIX-THEME VS Code",
    "Typelr",
    "Liberia game studio",
    "immersive projects Africa",
    "VR XR AR portfolio Liberia",
    "3D visualization showcase",
    "African digital products",
  ],
  alternates: { canonical: `${SITE_URL}/showcase` },
  openGraph: {
    title: "Showcase | HUIX-2099",
    description:
      "Selected games, apps, developer tools, and immersive experiences from Liberia-based studio HUIX-2099.",
    url: `${SITE_URL}/showcase`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcase | HUIX-2099",
    description: "Games, apps, and immersive projects from Liberia-based studio HUIX-2099.",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Showcase", item: `${SITE_URL}/showcase` },
  ],
}

const showcaseJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HUIX-2099 Showcase",
  url: `${SITE_URL}/showcase`,
  description:
    "A showcase of products, prototypes, and immersive experiences built by HUIX-2099.",
  hasPart: [
    { "@type": "CreativeWork", name: "Monrovia Hustle 3D", url: `${SITE_URL}/products/monrovia-hustle` },
    { "@type": "SoftwareApplication", name: "Huixor", url: `${SITE_URL}/products/huixor` },
    { "@type": "SoftwareApplication", name: "HUIX-THEME", url: `${SITE_URL}/products/huix-theme` },
    { "@type": "SoftwareApplication", name: "Typelr", url: `${SITE_URL}/products/typelr` },
  ],
}

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(showcaseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
