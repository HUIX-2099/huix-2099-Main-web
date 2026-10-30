import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Monrovia Hustle prototypes — 2 experimental versions | HUIX-2099",
  description:
    "Explore both Monrovia Hustle experiments from HUIX-2099: the 3D narrative concept and the Independence Day keke racing edition, with builds, cast, artwork, trailers, and development notes.",
  path: "/products/monrovia-hustle/prototype",
  keywords: [
    "Monrovia Hustle prototype",
    "Monrovia Hustle 3D concept build",
    "Monrovia Hustle Independence Day prototype",
    "Monrovia Hustle voice cast",
    "Liberian game prototype",
    "HUIX-2099 experiment",
  ],
  image: "/products/monrovia-hustle/cover/monrovia-hustle-og.jpg",
  imageAlt: "Monrovia Hustle 3D — experiment prototype key art",
})

export default function MonroviaHustlePrototypeLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>
}
