import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Typelr — Download & install | HUIX-2099",
  description:
    "Download Typelr portable for Windows — Liberian typing trainer with counties, names, phrases, XP, and badges. Free download from HUIX-2099, Monrovia, Liberia.",
  path: "/products/typelr/install",
  keywords: ["Typelr download", "Typelr install", "Liberian typing trainer", "HUIX-2099", "Windows portable"],
  image: "/products/typelr/SPLASH%20SCREEN%20LOGO.jpg",
  imageAlt: "Typelr download",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Typelr", path: "/products/typelr" },
    { name: "Download", path: "/products/typelr/install" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Typelr",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Windows 10, Windows 11",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: "https://huix2099.com/products/typelr/install",
    },
  },
]

export default function TypelrInstallLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
