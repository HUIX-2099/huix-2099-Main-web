import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy — HUIX-2099",
  description:
    "HUIX-2099 privacy policy — how we handle data, cookies, analytics, and contact information for huix2099.com and HUIX-2099 products.",
  path: "/policy",
  keywords: ["HUIX-2099 privacy policy", "HUIX cookies", "Liberia privacy"],
  noIndex: false,
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/policy" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — HUIX-2099",
    url: "https://huix2099.com/policy",
    isPartOf: { "@type": "WebSite", name: "HUIX-2099", url: "https://huix2099.com" },
  },
]

export default function PolicyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
