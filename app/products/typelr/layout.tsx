import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, productByPath, softwareProductJsonLd } from "@/lib/seo"

const product = productByPath("/products/typelr")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt: "Typelr — Liberian typing trainer",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Typelr", path: "/products/typelr" },
  ]),
  softwareProductJsonLd(product),
]

export default function TypelrLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
