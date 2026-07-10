const BASE = "/products/Monrovia_hustle_independence_day_edition"

export const MH_IDE_HERO = `${BASE}/heo.png`
export const MH_IDE_LOGO = `${BASE}/logo/${encodeURIComponent("MONROVIA hUSTLE LOGO.png")}`
export const MH_IDE_PATH = "/products/monrovia-hustle-independence-day"

export const MH_IDE_TAGLINE = "BUILD. HUSTLE. RECLAIM."
export const MH_IDE_SUBTAG = "A Liberian story. A global game."

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
