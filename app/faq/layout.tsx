import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, faqPageJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ — HUIX-2099 Help Center | Monrovia, Liberia",
  description:
    "Frequently asked questions about HUIX-2099 — services, products (Monrovia Hustle 3D, HUIX-THEME, Huixor, Typelr), project timelines, support, and how to get started in Monrovia, Liberia.",
  path: "/faq",
  keywords: [
    "HUIX-2099 FAQ",
    "HUIX help center",
    "Liberia tech FAQ",
    "Monrovia Hustle questions",
    "HUIX products support",
  ],
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]),
  faqPageJsonLd(),
]

export default function FaqLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
