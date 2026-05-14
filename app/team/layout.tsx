import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

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

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children
}
