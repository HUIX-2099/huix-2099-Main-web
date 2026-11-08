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
/** The studio rig — headset on, laptop open. The only photograph the franchise
 *  hero is allowed to use, because it shows where the game is actually built. */
export const MH_STUDIO_RIG = "/vpl/field/vr-session.jpg"

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
  /** Early builds (J-Boy 3D, Independence Day) — not the official game. */
  { label: "Experiment prototype", href: `${MH_BASE}/prototype` },
] as const

/** The game's own Facebook page — separate from the HUIX-2099 studio page. */
export const MH_FACEBOOK = "https://www.facebook.com/profile.php?id=61595564057357"

/** A reel from the game's Facebook page, played in the blue step of the loop. */
export const MH_FACEBOOK_REEL = "https://web.facebook.com/reel/1518310743461186/"

/** The community WhatsApp group for players and followers of the game. */
export const MH_WHATSAPP = "https://chat.whatsapp.com/IzrsbvLapPLCj48aCzo23O"

/** The Discord server isn't open yet: the loop shows its card as "coming soon"
 *  until this holds a real invite link. */
export const MH_DISCORD: string | null = null

export const MH_TIKTOK = "https://www.tiktok.com/@huix2099"

export const MH_YOUTUBE = "https://www.youtube.com/@HUIX-2099"

/** The game on Pinterest, and one of its first pins, shown on the franchise home page. */
export const MH_PINTEREST = "https://pin.it/OjZlOUCm6"
export const MH_PINTEREST_FIRST_PIN = "1000080661027458825"

export const MH_TRAILER_YOUTUBE_ID = "GUPVn-m8Dr8"
export const MH_TRAILER_YOUTUBE_URL = `https://youtu.be/${MH_TRAILER_YOUTUBE_ID}`

export const MH_SOCIALS = [
  { label: "Facebook", href: MH_FACEBOOK },
  { label: "WhatsApp group", href: MH_WHATSAPP },
  { label: "YouTube", href: MH_YOUTUBE },
  { label: "Instagram", href: "https://www.instagram.com/huix2099/" },
  { label: "Pinterest", href: MH_PINTEREST },
  { label: "TikTok", href: MH_TIKTOK },
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
