import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  productByPath,
  siteUrl,
  softwareProductJsonLd,
} from "@/lib/seo"
import { MH_IDE_CREATOR_IMAGE, MH_IDE_CREATOR_NAME, MH_IDE_WHATSAPP_URL } from "@/lib/monrovia-hustle-independence"

const product = productByPath("/products/monrovia-hustle-independence-day")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt:
    "Monrovia Hustle Independence Day Edition 2026 — Liberian keke racing art game by Victor Edet Coleman, HUIX-2099 Monrovia Liberia",
})

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: MH_IDE_CREATOR_NAME,
  alternateName: ["Victor Coleman", "Victor E. Coleman"],
  jobTitle: "Founder & CTO",
  description:
    "Victor Edet Coleman created Monrovia Hustle Independence Day Edition (2026), a Liberian keke racing art game from HUIX-2099 in Monrovia, Liberia.",
  url: siteUrl("/team/victor"),
  image: siteUrl(MH_IDE_CREATOR_IMAGE),
  nationality: { "@type": "Country", name: "Liberia" },
  homeLocation: { "@type": "Place", name: "Monrovia, Liberia" },
  worksFor: {
    "@type": "Organization",
    name: "HUIX-2099",
    url: siteUrl("/"),
  },
  sameAs: [
    "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    "https://www.facebook.com/victor.coleman.745874",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Monrovia Hustle Independence Day Edition 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monrovia Hustle Independence Day Edition is a Liberian keke racing art game created by Victor Edet Coleman of HUIX-2099. It celebrates Liberia Independence Day (July 26, 2026) with racing through Monrovia streets.",
      },
    },
    {
      "@type": "Question",
      name: "Who created Monrovia Hustle Independence Day Edition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Victor Edet Coleman — Founder & CTO of HUIX-2099 in Monrovia, Liberia — created the Monrovia Hustle Independence Day Edition art game.",
      },
    },
    {
      "@type": "Question",
      name: "When can I download Monrovia Hustle Independence Day Edition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Windows, macOS, iOS, and Android APK builds unlock on 26 July 2026 (Liberia Independence Day). Join the HUIX Games WhatsApp group for updates and the download.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get Monrovia Hustle Independence Day Edition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Join the HUIX Games WhatsApp chat at ${MH_IDE_WHATSAPP_URL} to get the game and release announcements.`,
      },
    },
  ],
}

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Monrovia Hustle Independence Day Edition 2026", path: "/products/monrovia-hustle-independence-day" },
  ]),
  softwareProductJsonLd(product),
  personJsonLd,
  faqJsonLd,
]

export default function MonroviaIndependenceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
