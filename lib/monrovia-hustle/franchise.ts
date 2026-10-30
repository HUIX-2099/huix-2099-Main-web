import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/seo"

export const MH_BASE = "/products/monrovia-hustle"
export const MH_ASSETS = "/products/Monrovia_hustle_Demo_Campane"

export const MH_COVER = "/products/monrovia-hustle/cover/monrovia-hustle-cover.jpg"
export const MH_COVER_OG = "/products/monrovia-hustle/cover/monrovia-hustle-og.jpg"

export const MH_CAPTURE_RAIN = "/products/monrovia-hustle/captures/cinematic-rain-a.jpg"
export const MH_CAPTURE_RAIN_CRANE = "/products/monrovia-hustle/captures/cinematic-rain-crane.jpg"
export const MH_CAPTURE_NIGHT = "/products/monrovia-hustle/captures/cinematic-night-a.jpg"
export const MH_CAPTURE_IN_GAME = "/products/monrovia-hustle/captures/in-game.jpg"
export const MH_CAPTURE_IN_GAME_NIGHT = "/products/monrovia-hustle/captures/in-game-night.jpg"

export const MH_LOGO_BLACK = "/products/monrovia-hustle/logo/monrovia-hustle-logo-black.png"
export const MH_LOGO_WHITE = "/products/monrovia-hustle/logo/monrovia-hustle-logo-white.png"
export const MH_EMAIL = "huixtech2099@gmail.com"
export const MH_PHONE = "+231 776 800 064"

export const MH_NAV = [
  { label: "About", href: `${MH_BASE}/about` },
  { label: "Experience", href: `${MH_BASE}/experience` },
  { label: "Products", href: `${MH_BASE}/products` },
  { label: "World", href: `${MH_BASE}/world` },
  { label: "News", href: `${MH_BASE}/news` },
  { label: "Contact", href: `${MH_BASE}/contact` },
] as const

export const MH_SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@HUIX-2099" },
  { label: "Instagram", href: "https://www.instagram.com/huix.2099/" },
  { label: "X / Twitter", href: "https://x.com/Huix2099" },
] as const

export function franchiseMetadata(title: string, description: string, route = ""): Metadata {
  return buildPageMetadata({
    title: `${title} | Monrovia Hustle`,
    description,
    path: `${MH_BASE}${route}`,
    keywords: [
      "Monrovia Hustle",
      "Monrovia gaming franchise",
      "Liberian video game",
      "Monrovia exploration game",
      "HUIX-2099 game",
      "Liberia game development",
    ],
    image: MH_COVER_OG,
    imageAlt: "Monrovia Hustle key art — gritty Monrovia street poster by HUIX-2099",
  })
}
