import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, productByPath, softwareProductJsonLd } from "@/lib/seo"

const product = productByPath("/products/monrovia-hustle/concept")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt: "Monrovia Hustle 3D Concept 01 dossier",
  type: "article",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Monrovia Hustle 3D", path: "/products/monrovia-hustle" },
    { name: "Concept 01", path: "/products/monrovia-hustle/concept" },
  ]),
  softwareProductJsonLd(product),
]

export default function MonroviaConceptLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
