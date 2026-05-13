import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"
import { GeoWelcomeBanner } from "@/components/geo-welcome-banner"

export const metadata: Metadata = {
  title: {
    absolute: "Monrovia Hustle 3D — Liberian narrative RPG | HUIX-2099 · Victor Edet Coleman",
  },
  description:
    "Monrovia Hustle 3D hub: Liberian slice-of-life narrative urban RPG concept from HUIX-2099 — Monrovia streets, voice cast, concept dossier. Lead developer Victor Edet Coleman (Founder & CTO), Liberia.",
  keywords: [
    "Monrovia Hustle 3D",
    "HUIX-2099",
    "Victor Edet Coleman",
    "Liberia narrative game",
    "Monrovia RPG",
    "Liberian voice cast",
    "West Africa indie game",
  ],
  alternates: { canonical: `${SITE_URL}/products/monrovia-hustle` },
  openGraph: {
    title: "Monrovia Hustle 3D | HUIX-2099",
    description:
      "Liberian-led narrative RPG concept — Monrovia, voice cast, concept page. Victor Edet Coleman.",
    url: `${SITE_URL}/products/monrovia-hustle`,
    type: "website",
    siteName: "HUIX-2099",
  },
}

export default function MonroviaHustleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">{children}</div>
      <GeoWelcomeBanner />
    </>
  )
}
