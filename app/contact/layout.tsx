import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, contactPageJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact HUIX-2099 — Monrovia, Liberia",
  description:
    "Contact HUIX-2099 in Monrovia, Liberia — project inquiries, partnerships, product support, and studio contact. Email huixtech2099@gmail.com or use the contact form.",
  path: "/contact",
  keywords: [
    "Contact HUIX-2099",
    "HUIX-2099 email",
    "Liberia tech studio contact",
    "Monrovia software company",
    "HUIX project inquiry",
  ],
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  contactPageJsonLd(),
]

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
