import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, ORG_ID, siteUrl } from "@/lib/seo"
import { teamMembers, HUIX_COMPANY_TEAM_IDS } from "./data"

export const metadata: Metadata = buildPageMetadata({
  title: "HUIX Team — HUIX-2099 · Liberia",
  description:
    "HUIX-2099 company team — Victor Edet Coleman (Founder & CTO) and Wulwyn Porte L (CEO & Co-founder). Liberia-based studio leadership.",
  path: "/team",
  keywords: [
    "HUIX-2099 team",
    "Victor Edet Coleman",
    "Wulwyn Porte L",
    "Founder CTO Liberia",
    "HUIX company leadership",
    "Monrovia tech studio",
  ],
})

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HUIX-2099 Team",
  url: siteUrl("/team"),
  description: "Company leadership at HUIX-2099 — Liberia-based immersive technology studio.",
  about: { "@id": ORG_ID },
  hasPart: teamMembers
    .filter((m) => HUIX_COMPANY_TEAM_IDS.includes(m.id as (typeof HUIX_COMPANY_TEAM_IDS)[number]))
    .map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title || m.role,
      url: siteUrl(`/team/${m.id}`),
      worksFor: { "@id": ORG_ID },
    })),
}

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ]),
  teamJsonLd,
]

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
