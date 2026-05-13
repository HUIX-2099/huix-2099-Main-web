import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Products — HUIX-2099 · Liberia",
  },
  description:
    "HUIX-2099 products: Monrovia Hustle 3D narrative RPG concept, HUIX-THEME VS Code extension by Victor Edet Coleman, Huixor multi-device preview, Typelr Liberian typing trainer — built in Monrovia, Liberia.",
  keywords: [
    "HUIX-2099 products",
    "Monrovia Hustle 3D",
    "HUIX-THEME VS Code",
    "Victor Edet Coleman",
    "Huixor",
    "Typelr Liberia",
    "Liberia software",
  ],
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "Products | HUIX-2099",
    description: "Games, themes, and tools from HUIX-2099 — Liberia.",
    url: `${SITE_URL}/products`,
    type: "website",
  },
}

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children
}
