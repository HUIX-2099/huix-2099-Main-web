import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, siteUrl } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Donate — Monrovia Hustle 3D | HUIX-2099 Liberia",
  description:
    "Support Monrovia Hustle 3D development via Mobile Money or Orange Money — HUIX-2099 Liberian narrative RPG concept. Monrovia, Liberia.",
  path: "/products/monrovia-hustle/donate",
  keywords: [
    "Monrovia Hustle donate",
    "HUIX-2099 donation",
    "Liberia game support",
    "Mobile Money Liberia",
    "Orange Money Liberia",
    "Monrovia Hustle 3D",
  ],
  image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
  imageAlt: "Support Monrovia Hustle 3D",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Monrovia Hustle 3D", path: "/products/monrovia-hustle" },
    { name: "Donate", path: "/products/monrovia-hustle/donate" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Support Monrovia Hustle 3D",
    description: "Donate to Monrovia Hustle 3D via Mobile Money or Orange Money.",
    target: siteUrl("/products/monrovia-hustle/donate"),
    recipient: { "@type": "Organization", name: "HUIX-2099", url: siteUrl("/") },
  },
]

export default function MonroviaDonateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
