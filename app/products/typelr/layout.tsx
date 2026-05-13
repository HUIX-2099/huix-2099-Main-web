import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Typelr — Liberian typing trainer | HUIX-2099",
  },
  description:
    "Typelr: Windows typing trainer with Liberian counties, names, phrases, and history — levels, XP, badges, and daily challenges. From HUIX-2099, Monrovia, Liberia. Victor Edet Coleman.",
  keywords: [
    "Typelr",
    "typing trainer Liberia",
    "HUIX-2099",
    "Victor Edet Coleman",
    "Liberian counties typing",
    "Monrovia software",
  ],
  alternates: { canonical: `${SITE_URL}/products/typelr` },
  openGraph: {
    title: "Typelr | HUIX-2099",
    description: "Liberian content typing trainer for Windows — HUIX-2099.",
    url: `${SITE_URL}/products/typelr`,
    type: "website",
  },
}

export default function TypelrLayout({ children }: { children: ReactNode }) {
  return children
}
