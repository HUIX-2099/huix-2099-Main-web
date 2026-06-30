import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "HUIX Oasis — Experimental virtual overlay OS | HUIX-2099",
  description:
    "HUIX Oasis — HUIX-2099 flagship research platform. An experimental virtual overlay operating system that transforms Android smartphones into immersive spatial computing devices. Marketplace, social, gaming, and architecture in one VR layer.",
  path: "/huix-oasis",
  keywords: [
    "HUIX Oasis",
    "HUIX-2099",
    "virtual overlay OS",
    "Android VR",
    "spatial computing",
    "mobile VR research",
    "Liberia tech research",
    "HUIX Horizon",
  ],
  image: "/Huix-Oasis/Huix%20-%20Oasis.png",
  imageAlt: "HUIX Oasis — experimental research platform",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "HUIX Oasis", path: "/huix-oasis" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: "HUIX Oasis",
    description:
      "Experimental virtual overlay operating system research by HUIX-2099 — spatial computing on Android smartphones.",
    url: "https://huix2099.com/huix-oasis",
    parentOrganization: { "@id": "https://huix2099.com/#organization" },
  },
]

export default function HuixOasisLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
