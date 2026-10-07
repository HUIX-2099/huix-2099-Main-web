import type { MonroviaCastMember } from "@/components/monrovia-hustle/monrovia-cast-showcase"

const CAST_CONCEPT_DIR = "/products/Monrovia_hustle_Demo_Campane/cast_concept"
const CHAR = `${CAST_CONCEPT_DIR}/CHARACTERS`

function cc(name: string) {
  return `${CAST_CONCEPT_DIR}/${encodeURIComponent(name)}`
}

const VICTOR_IMAGE = `/products/Monrovia_hustle_Demo_Campane/developer/${encodeURIComponent("Victor Edet Coleman.png")}`

const VOICE_CAST = [
  {
    name: "Victor Edet Coleman",
    role: "Founder & CTO · Voice — Jayboy (Jboy)",
    epithet: "Playable protagonist · age 24 · Jboy / JBOY / JBoy",
    imageSrc: VICTOR_IMAGE,
    hoverImageSrc: `${CHAR}/JAYBOY.jpeg`,
    hoverImageAlt:
      "Jayboy — Monrovia Hustle 3D playable protagonist (Jboy / JBOY / JBoy in scripts), age 24 — voiced by Victor Edet Coleman",
    imageAlt: "Victor Edet Coleman — Monrovia Hustle 3D voice cast, Jayboy playable protagonist — HUIX-2099 Liberia",
    googleLabel: "Victor Edet Coleman · Jayboy · Monrovia Hustle 3D voice cast",
    googleQuery: "Victor Edet Coleman Jayboy Monrovia Hustle 3D Jboy voice Liberia HUIX-2099",
    href: "/team/victor",
  },
  {
    name: "Arthur B. Kollie",
    role: "Voice Actor · Blamo",
    epithet: "Smart-watch fence · Trapper's chain",
    imageSrc: cc("Arthur B. Kollie.png"),
    hoverImageSrc: `${CHAR}/BLAMO.jpeg`,
    hoverImageAlt:
      "Blamo — Monrovia Hustle 3D character (3D render), smart-watch fence in Trapper's chain — voiced by Arthur B. Kollie",
    imageAlt: "Arthur B. Kollie — Monrovia Hustle 3D voice cast, Blamo — HUIX-2099 Liberia",
    googleLabel: "Arthur B. Kollie · Monrovia Hustle voice cast · Blamo",
    googleQuery: "Arthur B Kollie voice actor Blamo Monrovia Hustle 3D HUIX-2099 Liberia",
    href: "/team/arthur-kollie",
  },
  {
    name: "David Neor Jr.",
    role: "Voice Actor · DC (DC Young)",
    epithet: "Trapper's sneaker contact · same street chain",
    imageSrc: cc("David Neor Jr.png"),
    hoverImageSrc: `${CHAR}/DC.jpeg`,
    hoverImageAlt:
      "DC (DC Young) — Monrovia Hustle 3D character; Trapper's brother and sneaker contact on the Tenneh phone mission chain — voiced by David Neor Jr.",
    imageAlt: "David Neor Jr. — Monrovia Hustle 3D voice cast, DC Young — HUIX-2099 Liberia",
    googleLabel: "David Neor Jr. · Monrovia Hustle voice cast · DC Young",
    googleQuery: "David Neor Jr voice actor DC Young Monrovia Hustle 3D Trapper sneaker Tenneh Liberia HUIX-2099",
    href: "/team/david",
  },
  {
    name: "Jerry D Kollie",
    role: "Voice Actor · Trapper",
    epithet: "Street connect · Broad Street hub · club world",
    imageSrc: cc("Jerry D Kollie.png"),
    hoverImageSrc: `${CHAR}/Trapper.jpeg`,
    hoverImageAlt:
      "Trapper — Monrovia Hustle 3D character; Jayboy's street connect (TennehPhoneMission hub) — voiced by Jerry D Kollie",
    imageAlt: "Jerry D Kollie — Monrovia Hustle 3D voice cast, Trapper — HUIX-2099 Liberia",
    googleLabel: "Jerry D Kollie · Monrovia Hustle voice cast · Trapper",
    googleQuery: "Jerry D Kollie voice actor Trapper Monrovia Hustle 3D TennehPhoneMission Liberia HUIX-2099",
    href: "/team/jerry-kollie",
  },
  {
    name: "Alfred M. Nyeswa",
    role: "Voice Actor · Jayboy Pa",
    epithet: "LISTEN · Pa · straight talk",
    imageSrc: cc("Alfred M. Nyeswa.png"),
    hoverImageSrc: `${CHAR}/${encodeURIComponent("jayboy pa.jpeg")}`,
    hoverImageAlt: "Jayboy Pa — Monrovia Hustle 3D character; Jayboy's father (Pa, Liberian English) — voiced by Alfred M. Nyeswa",
    imageAlt: "Alfred M. Nyeswa — Monrovia Hustle 3D voice cast, Jayboy Pa — HUIX-2099 Liberia",
    googleLabel: "Alfred M. Nyeswa · Monrovia Hustle voice cast · Jayboy Pa",
    googleQuery: "Alfred M Nyeswa voice actor Jayboy Pa father Monrovia Hustle 3D Liberia HUIX-2099",
    href: "/team/alfred-nyeswa",
  },
  {
    name: "Kanneh Mohammed K.",
    role: "Voice Actor · Instruction Narrator",
    epithet: "Guiding the hustle loop",
    imageSrc: cc("Kanneh Mohammed k..png"),
    imageAlt: "Kanneh Mohammed K. — Monrovia Hustle 3D voice cast, instruction narrator — HUIX-2099 Liberia",
    googleLabel: "Kanneh Mohammed K. · Monrovia Hustle voice cast",
    googleQuery: "Kanneh Mohammed K voice actor Monrovia Hustle 3D instruction narrator HUIX-2099 Liberia",
    href: "/team/kanneh-mohammed",
  },
  {
    name: "Felix J. K. Sowoma",
    role: "Voice Actor · Uncle Flomo",
    epithet: "Legit path · office scene landing",
    imageSrc: cc("felix J. K. Sowoma.png"),
    hoverImageSrc: `${CHAR}/uncle_flomo.jpeg`,
    hoverImageAlt:
      "Uncle Flomo — Monrovia Hustle 3D character; Jayboy's uncle, family mentor vs Trapper's hustle world — voiced by Felix J. K. Sowoma",
    imageAlt: "Felix J. K. Sowoma — Monrovia Hustle 3D voice cast, Uncle Flomo — HUIX-2099 Liberia",
    googleLabel: "Felix J. K. Sowoma · Monrovia Hustle voice cast · Uncle Flomo",
    googleQuery: "Felix J K Sowoma voice actor Uncle Flomo Monrovia Hustle 3D Jayboy mentor Liberia HUIX-2099",
    href: "/team/felix-sowoma",
  },
  {
    name: "Johnett S. Talkpa",
    role: "Voice Actor · Angel",
    epithet: "Jayboy's ex · bedroom thread · club confrontation",
    imageSrc: cc("Johnett S. Talkpa.png"),
    hoverImageSrc: `${CHAR}/angel.jpeg`,
    hoverImageAlt: "Angel — Monrovia Hustle 3D character; Jayboy's ex / love interest — voiced by Johnett S. Talkpa",
    imageAlt: "Johnett S. Talkpa — Monrovia Hustle 3D voice cast, Angel — HUIX-2099 Liberia",
    googleLabel: "Johnett S. Talkpa · Monrovia Hustle voice cast · Angel",
    googleQuery: "Johnett S Talkpa voice actor Angel Monrovia Hustle 3D Jayboy club HUIX-2099 Liberia",
    href: "/team/johnett-s-talkpa",
  },
] as const

export const monroviaCastMembers: MonroviaCastMember[] = [
  ...VOICE_CAST.map((c) => ({
    id: c.href.replace(/^\/team\//, ""),
    name: c.name,
    role: c.role,
    epithet: c.epithet,
    imageSrc: c.imageSrc,
    imageAlt: c.imageAlt,
    href: c.href,
    googleQuery: c.googleQuery,
    googleLabel: c.googleLabel,
    lane: "voice" as const,
    ...("hoverImageSrc" in c && c.hoverImageSrc
      ? { hoverImageSrc: c.hoverImageSrc, hoverImageAlt: (c as { hoverImageAlt?: string }).hoverImageAlt }
      : {}),
  })),
  {
    id: "dominic-rockson",
    name: "Dominic Rockson",
    role: "Sound Engineer · Monrovia Hustle 3D",
    epithet: "Capture, mix, and clarity for the slice",
    imageSrc: cc("Dominc Rockson.png"),
    imageAlt: "Dominic Rockson — Monrovia Hustle 3D sound engineer — HUIX-2099 Liberia",
    href: "/team/dominic-rockson",
    googleQuery: "Dominic Rockson sound engineer Monrovia Hustle 3D Liberia HUIX-2099",
    googleLabel: "Dominic Rockson · Monrovia Hustle 3D · Sound engineer",
    lane: "audio",
  },
]
