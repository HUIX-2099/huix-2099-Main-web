const BASE = "/products/Monrovia_hustle_independence_day_edition"

export const MH_IDE_HERO = `${BASE}/heo.png`
export const MH_IDE_LOADING = `${BASE}/Loading_screen.png`
export const MH_IDE_LOGO = `${BASE}/logo/${encodeURIComponent("MONROVIA hUSTLE LOGO.png")}`
export const MH_IDE_TSHIRT_VIDEO = `${BASE}/tshirt.mp4`
export const MH_IDE_TSHIRT_VIDEO_PORTRAIT = `${BASE}/${encodeURIComponent("tshirt_show case.mp4")}`
export const MH_IDE_SETTINGS_VIDEO = `${BASE}/settings.mp4`
export const MH_IDE_PATH = "/products/monrovia-hustle-independence-day"

export const MH_IDE_TAGLINE = "BUILD. HUSTLE. RECLAIM."
export const MH_IDE_SUBTAG = "A Liberian story. A global game."

/** Strategic document / compliance label metadata */
export const MH_IDE_DOC_ID = "MH-IDE-2026-R1"
export const MH_IDE_CAT_NO = "8SSB10MHIDE01P"
export const MH_IDE_REV = "REV 1.0 · 2026-07"
export const MH_IDE_ORIGIN = "MONROVIA · LR · HUIX-2099"

export const MH_IDE_TSHIRT_PRICE_USD = 10
export const MH_IDE_TSHIRT_SKU = "MH-IDE-TSH-001"

export const MH_IDE_PAYMENT_MSISDN_DISPLAY = "0776800064"
export const MH_IDE_PAYMENT_MSISDN_TEL = "+231776800064"
export const MH_IDE_PAYMENT_NOTE = "MH IDE TSHIRT"

/** WhatsApp community — join to get the game */
export const MH_IDE_WHATSAPP_URL =
  "https://chat.whatsapp.com/IzrsbvLapPLCj48aCzo23O?s=cl&p=a&ilr=0"

/** Local midnight — Windows / Android APK unlock Liberia Independence Day */
export const MH_IDE_DOWNLOAD_RELEASE = new Date(2026, 6, 26, 0, 0, 0, 0)
export const MH_IDE_DOWNLOAD_LABEL = "26 July 2026"

/** Google Drive — Windows build folder (3 files: .exe, .pck, .console.exe) */
export const MH_IDE_WINDOWS_DRIVE_URL =
  "https://drive.google.com/drive/folders/1pNWjDkQ9lfGYuoYu0Hohy8n7U6ZfP5MD"

/** Google Drive — Android APK */
export const MH_IDE_ANDROID_DRIVE_URL =
  "https://drive.google.com/drive/folders/1_xWDho2Qku0bdw5AutMEf94vSfloU9V0"

export const MH_IDE_WINDOWS_GUIDE_IMAGE = `${BASE}/extra/windows.png`
export const MH_IDE_ANDROID_GUIDE_IMAGE = `${BASE}/extra/android.png`

/** Official trailer — YouTube */
export const MH_IDE_TRAILER_YOUTUBE_ID = "Hftd3ZGKofo"
export const MH_IDE_TRAILER_YOUTUBE_URL = `https://youtu.be/${MH_IDE_TRAILER_YOUTUBE_ID}`
export const MH_IDE_TRAILER_EMBED_URL = `https://www.youtube.com/embed/${MH_IDE_TRAILER_YOUTUBE_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`

/** Creator — Victor Edet Coleman */
export const MH_IDE_CREATOR_NAME = "Victor Edet Coleman"
export const MH_IDE_CREATOR_ROLE = "Founder & CTO · Art game creator"
export const MH_IDE_CREATOR_PATH = "/team/victor"
export const MH_IDE_CREATOR_IMAGE =
  "/products/Monrovia_hustle_Demo_Campane/developer/" + encodeURIComponent("Victor Edet Coleman.png")
export const MH_IDE_CREATOR_GOOGLE_QUERY =
  "Victor Edet Coleman Monrovia Hustle Independence Day Edition 2026 HUIX-2099 Liberia"

export const MH_IDE_ROADMAP = [
  {
    phase: "Phase 1",
    title: "In the streets",
    items: [
      "Keke racing vertical slice",
      "Monrovia circuit block-out",
      "Independence Day atmosphere pass",
      "Single-player time trial loop",
    ],
  },
  {
    phase: "Phase 2",
    title: "Race day",
    items: [
      "Multi-rider keke mechanics",
      "Crowd & festival energy",
      "Rival lanes & street hazards",
      "Mobile + PC performance targets",
    ],
  },
  {
    phase: "Phase 3",
    title: "Reclaim the city",
    items: [
      "Story beats tied to Monrovia Hustle",
      "Full Independence Day campaign",
      "Online leaderboards",
      "Franchise hub integration",
    ],
  },
] as const

export const MH_IDE_PILLARS = [
  {
    title: "Keke culture",
    body: "Liberia's tricycle taxis aren't backdrop — they're the vehicle. Race through Monrovia's lived-in streets in the machines locals actually use.",
  },
  {
    title: "Independence Day energy",
    body: "Flags, drums, crowds, and pride — a seasonal edition built around Liberia's national moment, not a generic street-racer skin pack.",
  },
  {
    title: "Racing with roots",
    body: "Fast laps meet West African street identity. This edition is about speed, hustle, and reclaiming how Monrovia shows up in games.",
  },
] as const
