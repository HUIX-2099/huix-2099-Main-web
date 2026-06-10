import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"
import { teamMembers } from "./data"

export const metadata: Metadata = {
  title: {
    absolute: "Team & voice cast — HUIX-2099 · Liberia",
  },
  description:
    "HUIX-2099 team and Monrovia Hustle 3D voice cast: Victor Edet Coleman (Founder & CTO, Jayboy), Dominic Rockson (sound engineer), and the full Liberia-led cast — HUIX-2099, Monrovia.",
  keywords: [
    "HUIX-2099 team",
    "Victor Edet Coleman",
    "Founder CTO Liberia",
    "Monrovia Hustle 3D voice cast",
    "HUIX voice actors Liberia",
    "Monrovia game studio",
  ],
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: "Team & voice cast | HUIX-2099",
    description: "Leadership, collaborators, and Monrovia Hustle 3D voice talent — Liberia-based studio HUIX-2099.",
    url: `${SITE_URL}/team`,
    type: "website",
  },
}

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HUIX-2099 Team & Voice Cast",
  url: `${SITE_URL}/team`,
  description:
    "Leadership, collaborators, and the Monrovia Hustle 3D voice cast at HUIX-2099.",
  about: { "@type": "Organization", name: "HUIX-2099", url: SITE_URL },
  hasPart: teamMembers
    .filter((m) => ["victor", "wulwyn"].includes(m.id))
    .map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title || m.role,
      url: `${SITE_URL}/team/${m.id}`,
      worksFor: { "@type": "Organization", name: "HUIX-2099", url: SITE_URL },
    })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Team", item: `${SITE_URL}/team` },
  ],
}

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
