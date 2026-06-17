import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd } from "@/components/seo/json-ld"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  productItemListJsonLd,
} from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Products — HUIX-2099 · Liberia",
  description:
    "HUIX-2099 products: Monrovia Hustle 3D Liberian narrative RPG (Concept 01, trailer, voice cast), HUIX-THEME VS Code extension, Huixor multi-device web preview for Windows, Typelr Liberian typing trainer — built in Monrovia, Liberia.",
  path: "/products",
  keywords: [
    "HUIX-2099 products",
    "Monrovia Hustle 3D",
    "HUIX-THEME VS Code",
    "Huixor Windows",
    "Typelr Liberia",
    "Liberia software",
    "Liberia game studio",
    "Monrovia tech products",
  ],
  image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
  imageAlt: "HUIX-2099 products — Monrovia Hustle 3D and studio tools",
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]),
  productItemListJsonLd(),
]

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
