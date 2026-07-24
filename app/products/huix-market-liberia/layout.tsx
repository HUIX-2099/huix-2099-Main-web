import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildPageMetadata, productByPath, softwareProductJsonLd } from "@/lib/seo"

const product = productByPath("/products/huix-market-liberia")!

export const metadata: Metadata = buildPageMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
  keywords: product.keywords,
  image: product.image,
  imageAlt: "HUIX Market Liberia — Premium e-commerce platform",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "HUIX Market Liberia", path: "/products/huix-market-liberia" },
  ]),
  softwareProductJsonLd(product),
]

export default function HuixMarketLiberiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
