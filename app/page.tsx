import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
import { JsonLd } from "@/components/seo/json-ld"
import { buildPageMetadata, productItemListJsonLd, webPageJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "HUIX-2099 | Building the Digital Future of Africa",
  description:
    "HUIX-2099 — A Liberia-based research and try-and-error development technology startup building games, apps, websites, experiments and research from Monrovia, West Africa.",
  path: "/",
  keywords: [
    "HUIX-2099",
    "Monrovia Hustle 3D",
    "HUIX-THEME",
    "Huixor",
    "Liberia tech company",
    "Monrovia software startup",
    "Liberian narrative game",
    "VS Code theme Liberia",
    "African XR startup",
    "Victor Edet Coleman",
  ],
  imageAlt: "HUIX-2099 — Building the Digital Future of Africa",
})

const jsonLd = [
  webPageJsonLd({
    name: "HUIX-2099 — Home",
    description:
      "Official homepage for HUIX-2099: products, team, research, and immersive technology from Monrovia, Liberia.",
    path: "/",
  }),
  productItemListJsonLd(),
]

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <HomePage />
    </>
  )
}
