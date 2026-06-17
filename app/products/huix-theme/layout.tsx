import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, productByPath, softwareProductJsonLd } from "@/lib/seo"

const product = productByPath("/products/huix-theme")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt: "HUIX-THEME VS Code extension logo",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "HUIX-THEME", path: "/products/huix-theme" },
  ]),
  softwareProductJsonLd(product),
]

export default function HuixThemeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
