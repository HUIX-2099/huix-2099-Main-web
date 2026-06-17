import type { Metadata } from "next"
import type { ReactNode } from "react"
import { GeoWelcomeBanner } from "@/components/geo-welcome-banner"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, productByPath, softwareProductJsonLd } from "@/lib/seo"

const product = productByPath("/products/monrovia-hustle")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt: "Monrovia Hustle 3D — Liberian narrative RPG key art",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Monrovia Hustle 3D", path: "/products/monrovia-hustle" },
  ]),
  softwareProductJsonLd(product),
]

export default function MonroviaHustleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-background text-foreground">{children}</div>
      <GeoWelcomeBanner />
    </>
  )
}
