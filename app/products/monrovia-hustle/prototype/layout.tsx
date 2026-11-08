import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, siteUrl, softwareProductJsonLd, SEO_PRODUCTS } from "@/lib/seo"
import {
  MH_IDE_ANDROID_DRIVE_URL,
  MH_IDE_CREATOR_IMAGE,
  MH_IDE_CREATOR_NAME,
  MH_IDE_WINDOWS_DRIVE_URL,
  MH_IDE_WHATSAPP_URL,
} from "@/lib/monrovia-hustle-independence"

export const metadata: Metadata = buildPageMetadata({
  title: "Monrovia Hustle experiment prototypes — J-Boy 3D & Independence Day Edition | HUIX-2099",
  description:
    "Explore both Monrovia Hustle experiments from HUIX-2099: the 3D narrative concept and the Independence Day keke racing edition, with builds, cast, artwork, trailers, and development notes.",
  path: "/products/monrovia-hustle/prototype",
  keywords: [
    "Monrovia Hustle prototype",
    "Monrovia Hustle 3D concept build",
    "Monrovia Hustle Independence Day prototype",
    "Monrovia Hustle Independence Day Edition 2026",
    "Liberia Independence Day keke racing game",
    "Jayboy Monrovia Hustle",
    "Monrovia Hustle voice cast",
    "Liberian game prototype",
    "HUIX-2099 experiment",
  ],
  image: "/products/monrovia-hustle/cover/monrovia-hustle-og.jpg",
  imageAlt: "Monrovia Hustle 3D — experiment prototype key art",
})

const creatorJsonLd = {
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
        text: "Windows and Android APK builds unlock on 26 July 2026 (Liberia Independence Day). macOS and iOS are not available for this edition.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get Monrovia Hustle Independence Day Edition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Download from Google Drive: Windows at ${MH_IDE_WINDOWS_DRIVE_URL} · Android at ${MH_IDE_ANDROID_DRIVE_URL}. Join the HUIX Games WhatsApp chat at ${MH_IDE_WHATSAPP_URL} for community updates.`,
      },
    },
  ],
}

// The Independence Day Edition used to have its own page; it now lives in
// the #independence-day section here, so its structured data moved with it.
const independenceDay = SEO_PRODUCTS.find((product) => product.id === "monrovia-hustle-independence-day")!

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Monrovia Hustle", path: "/products/monrovia-hustle" },
    { name: "Experiment prototypes", path: "/products/monrovia-hustle/prototype" },
  ]),
  softwareProductJsonLd(independenceDay),
  creatorJsonLd,
  faqJsonLd,
]

export default function MonroviaHustlePrototypeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
