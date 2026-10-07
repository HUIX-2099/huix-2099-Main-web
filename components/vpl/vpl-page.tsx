"use client"

import { useId, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Box,
  Check,
  Gamepad2,
  Glasses,
  Globe2,
  GraduationCap,
  History,
  Landmark,
  Microscope,
  Plane,
  TriangleAlert,
  Users,
} from "lucide-react"
import { VplTeamSection } from "@/components/vpl/vpl-team-section"
import { LiberiaMapArt, VplArchiveBackdrop } from "@/components/vpl/vpl-archive-backdrop"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const display = { fontFamily: "Mohican, sans-serif" }
const RED = "#b5562a"

function Barcode({ className = "" }: { className?: string }) {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 2, 3, 1, 1, 2]
  return (
    <div className={`flex h-6 items-stretch gap-[2px] ${className}`} aria-hidden>
      {bars.map((w, i) => (
        <span key={i} className="bg-current" style={{ width: w }} />
      ))}
    </div>
  )
}

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: monoFont }}>
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
        <ArrowDownRight className="h-3 w-3" />
      </span>
      <span>
        {n} · {label}
      </span>
    </div>
  )
}

const pillars = [
  {
    n: "01",
    title: "Reconstructing the record",
    sub: "Historical reconstruction",
    body: "We rebuild Liberian streets, buildings, and landmarks that time, conflict, and climate have erased — grounded in archives, photographs, survey data, and the memory of people who lived there. Every scene is traceable back to its sources.",
  },
  {
    n: "02",
    title: "Curated by community",
    sub: "Ethical stewardship",
    body: "Elders, historians, and cultural custodians review every scene before it ships. Oral histories are recorded with consent and credited to their tellers, so the past is told by those who own it — not guessed at from the outside.",
  },
  {
    n: "03",
    title: "Built for the field",
    sub: "Low-spec XR",
    body: "Experiences run offline on low-cost phones and entry headsets, so schools, clinics, and community centres can use them without fast internet or expensive hardware.",
  },
]

const steps = [
  {
    n: "1",
    title: "Research & 3D capture",
    body: "Gather maps, photographs, and records, and 3D-scan artifacts and sites with photogrammetry alongside partners and local historians.",
  },
  {
    n: "2",
    title: "Community review",
    body: "Record oral histories with consent and validate every artifact, scene, and story with custodians before it is published.",
  },
  {
    n: "3",
    title: "Build VR, games & emulations",
    body: "Turn the material into VR tours, playable history games, and time-travel emulations on the HUIX-HORIZEN platform, with AI guides layered on top.",
  },
  {
    n: "4",
    title: "Deploy & share",
    body: "Ship to headsets, phones, and the web — offline packs for schools, kiosks for tourist sites, and open access for citizens and the diaspora.",
  },
]

const formats = [
  {
    code: "VPL-A01",
    icon: Box,
    title: "Virtual artifacts",
    body: "3D-scanned masks, tools, textiles, and documents you can rotate, zoom, and inspect — with the story of where each piece came from.",
  },
  {
    code: "VPL-A02",
    icon: Glasses,
    title: "VR heritage tours",
    body: "Walk through historic sites and lost buildings in virtual reality, guided by narration and the voices of people who remember them.",
  },
  {
    code: "VPL-A03",
    icon: Gamepad2,
    title: "History games",
    body: "Playable quests and challenges set in Liberia's past — learn by exploring, choosing, and solving, not just reading.",
  },
  {
    code: "VPL-A04",
    icon: History,
    title: "Historical emulation",
    body: "Time-slider simulations that rebuild a street, village, or market across eras, so you can see how a place changed decade by decade.",
  },
  {
    code: "VPL-A05",
    icon: Bot,
    title: "AI guides",
    body: "Ask questions and hear answers in Liberian English and local languages, from AI guides grounded in reviewed sources.",
  },
  {
    code: "VPL-A06",
    icon: Landmark,
    title: "Virtual museum",
    body: "One open collection on web, mobile, and headset — offline-ready for classrooms and community centres with little or no internet.",
  },
]

const audiences = [
  {
    id: "tourists",
    icon: Plane,
    label: "Tourists",
    headline: "Visit before you land — and see more when you arrive.",
    points: [
      "VR previews of historic sites and landmarks",
      "On-site AR and kiosk experiences at tourist locations",
      "Multilingual AI guides for international visitors",
    ],
  },
  {
    id: "students",
    icon: GraduationCap,
    label: "Students",
    headline: "History you can walk through, play, and question.",
    points: [
      "Curriculum-linked VR lessons and history games",
      "Offline packs for schools with low connectivity",
      "AI tutor that answers questions about every artifact",
    ],
  },
  {
    id: "citizens",
    icon: Users,
    label: "Citizens",
    headline: "Your heritage, open to everyone in Liberia.",
    points: [
      "Free access to the virtual museum on any phone",
      "Contribute family stories, photos, and oral histories",
      "Community events and pop-up VR sessions",
    ],
  },
  {
    id: "diaspora",
    icon: Globe2,
    label: "Diaspora",
    headline: "Reconnect with home from anywhere in the world.",
    points: [
      "Remote VR tours of hometowns and historic places",
      "Family-history and heritage storytelling tools",
      "Live virtual events with guides in Liberia",
    ],
  },
  {
    id: "researchers",
    icon: Microscope,
    label: "Researchers & museums",
    headline: "Digitise, protect, and share collections responsibly.",
    points: [
      "High-fidelity 3D archives of artifacts and sites",
      "Source-linked metadata and provenance records",
      "Partnership model for exhibitions and loans",
    ],
  },
]
const chronicle = [
  ["c. 1500s", "Grain Coast trade routes"],
  ["1822", "Landing at Providence Island"],
  ["1833", "Vai script devised by Duwalu Bukele"],
  ["1847", "Declaration of Independence"],
  ["1869", "Liberia College founded"],
  ["1926", "Firestone concession"],
  ["1944", "Tubman era begins"],
  ["2003", "Accra peace agreement"],
  ["2005", "First elected woman head of state in Africa"],
  ["2099", "The past, rebuilt"],
]

function ArchiveStamp({ className = "", top, bottom, center }: { className?: string; top: string; bottom: string; center: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <path id={`stamp-top-${id}`} d="M 18 60 A 42 42 0 0 1 102 60" />
        <path id={`stamp-bot-${id}`} d="M 14 60 A 46 46 0 0 0 106 60" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fontSize="10" letterSpacing="3" fill="currentColor" fontFamily={monoFont}>
        <textPath href={`#stamp-top-${id}`} startOffset="50%" textAnchor="middle">
          {top}
        </textPath>
      </text>
      <text fontSize="10" letterSpacing="3" fill="currentColor" fontFamily={monoFont}>
        <textPath href={`#stamp-bot-${id}`} startOffset="50%" textAnchor="middle">
          {bottom}
        </textPath>
      </text>
      <text x="60" y="66" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor" fontFamily={monoFont}>
        {center}
      </text>
    </svg>
  )
}

const themes = [
  {
    id: "cultures",
    era: "Before 1822",
    title: "Indigenous cultures",
    body: "The peoples who shaped the land long before the Republic — Kpelle, Bassa, Kru, Grebo, Vai, Gola, Lorma, Mano, Gio, and more. Masks, tools, textiles, music, and village life, rebuilt with their communities.",
    formats: ["Virtual artifacts", "VR village tours", "AI guides"],
  },
  {
    id: "arrival",
    era: "1822",
    title: "Providence Island",
    body: "Where settlers from the Americas landed at Cape Mesurado. A VR walk through the island and the first settlement, told from more than one point of view — settlers and the people already living there.",
    formats: ["VR heritage tours", "Historical emulation"],
  },
  {
    id: "vai",
    era: "1830s",
    title: "The Vai script",
    body: "One of the few writing systems created in West Africa, devised by Momolu Duwalu Bukele. Learn the characters, decode messages, and hear how the script travelled from person to person.",
    formats: ["History games", "Ask the artifact"],
  },
  {
    id: "republic",
    era: "1847",
    title: "Independence & the Republic",
    body: "The declaration of independence on 26 July 1847, the early government, and the buildings and documents that marked Africa's first republic.",
    formats: ["Virtual artifacts", "Virtual museum"],
  },
  {
    id: "monrovia",
    era: "1900s → today",
    title: "Monrovia through the eras",
    body: "Streets, markets, and landmarks rebuilt decade by decade. Drag the time slider and watch a block of the capital change around you.",
    formats: ["Historical emulation", "History games"],
  },
  {
    id: "memory",
    era: "1989 → 2003",
    title: "Memory, peace & rebuilding",
    body: "Oral histories of the civil wars, the women's peace movement, and how communities rebuilt. Made with survivors, with consent, and with care. Content warnings and opt-in access by default.",
    formats: ["Oral history archive", "AI guides"],
  },
]

export function VplPage() {
  const [activeStep, setActiveStep] = useState(2)
  const [audienceId, setAudienceId] = useState(audiences[0].id)
  const [themeId, setThemeId] = useState(themes[0].id)
  const audience = audiences.find((a) => a.id === audienceId) ?? audiences[0]
  const themeIndex = Math.max(0, themes.findIndex((t) => t.id === themeId))
  const theme = themes[themeIndex]

  return (
    <main className="relative isolate overflow-hidden [clip-path:inset(0)]">
      <VplArchiveBackdrop />

      {/* HERO — banner with module cards */}
      <section className="px-3 pb-8 pt-6 sm:px-4">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[28px] bg-[#1d1410] px-6 py-10 text-white shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(181,86,42,0.22),transparent_55%)]" aria-hidden />

          <div className="relative">
            <div
              className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60"
              style={{ fontFamily: monoFont }}
            >
              <span>HUIX · 2099</span>
              <span className="h-3 w-px bg-white/30" />
              <span style={{ color: RED }}>L-231</span>
              <span className="h-3 w-px bg-white/30" />
              <span>VPL-001</span>
            </div>

            <p className="text-sm text-white/70" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              How da body, Liberia?
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3 text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl"
              style={display}
            >
              Walk through
              <br />
              <span style={{ color: RED }}>200 years</span> of
              <br />
              Liberia
            </motion.h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              Virtual Past Liberia rebuilds the country&apos;s artifacts, places, and stories as VR tours, history games,
              and AI guides — for tourists, students, citizens, and the diaspora.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#brief"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                style={{ background: RED }}
              >
                Start the journey
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:bg-white hover:text-neutral-900"
              >
                Partner with us
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5 text-white/50">
              <Barcode />
              <span className="text-[10px] uppercase tracking-[0.14em]" style={{ fontFamily: monoFont }}>
                Concept · Seeking funding
              </span>
            </div>
          </div>

          {/* Module cards */}
          <div className="relative grid grid-cols-3 gap-3 sm:gap-4">
            {/* 01 — Providence Island */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="relative flex aspect-[3/4.4] flex-col overflow-hidden rounded-2xl bg-[#f6f1e7] p-4 text-neutral-900 sm:p-5"
            >
              <span className="text-[11px] text-neutral-500" style={{ fontFamily: monoFont }}>01</span>
              <h3 className="mt-2 text-base font-medium leading-tight sm:text-xl">
                Providence
                <br />
                Island
              </h3>
              <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-neutral-500" style={{ fontFamily: monoFont }}>1822</span>
              <svg viewBox="0 0 200 190" className="absolute inset-x-0 bottom-0 w-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="160" cy="40" r="14" />
                <path d="M30 42 q5 -5 10 0 q5 -5 10 0 M58 30 q4 -4 8 0 q4 -4 8 0" />
                <path d="M88 48 L88 136 M128 66 L128 136" />
                <path d="M88 44 L104 48 L88 52" fill="currentColor" />
                <path d="M92 56 Q 124 92 92 128 Z" />
                <path d="M132 72 Q 160 104 132 132 Z" />
                <path d="M84 60 L44 134 L84 134 Z" />
                <path d="M30 140 L170 140 L156 162 L46 162 Z" />
                <path d="M60 150 h4 M80 150 h4 M100 150 h4 M120 150 h4 M140 150 h4" />
                <path d="M0 176 q12 -8 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0" />
                <path d="M10 188 q12 -8 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0" strokeOpacity="0.5" />
              </svg>
            </motion.div>

            {/* 02 — Around Liberia (map) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="relative flex aspect-[3/4.4] flex-col overflow-hidden rounded-2xl p-4 text-white sm:p-5"
              style={{ background: RED }}
            >
              <span className="relative z-10 text-[11px] text-white/70" style={{ fontFamily: monoFont }}>02</span>
              <h3 className="relative z-10 mt-2 text-base font-medium leading-tight sm:text-xl">
                Around
                <br />
                Liberia
              </h3>
              <span className="relative z-10 mt-1 text-[10px] uppercase tracking-[0.14em] text-white/70" style={{ fontFamily: monoFont }}>
                15 counties
              </span>
              <LiberiaMapArt className="absolute -bottom-2 -right-3 w-[108%] text-white" />
            </motion.div>

            {/* 03 — Ticket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="relative flex aspect-[3/4.4] flex-col overflow-hidden rounded-2xl bg-[#f6f1e7] p-4 text-neutral-900 sm:p-5"
            >
              <span className="text-[11px] text-neutral-500" style={{ fontFamily: monoFont }}>03</span>
              <h3 className="mt-2 text-base font-medium leading-tight sm:text-xl">
                Admit
                <br />
                one
              </h3>
              <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-neutral-500" style={{ fontFamily: monoFont }}>1847 → 2099</span>
              <img
                src="/vpl/VPL_LIGHT.png"
                alt="Virtual Past Liberia — L-231 ticket"
                className="absolute -bottom-4 left-1/2 h-[62%] w-auto -translate-x-1/2 rotate-[-8deg] drop-shadow-[0_12px_18px_rgba(0,0,0,0.25)]"
              />
              <ArchiveStamp
                top="REPUBLIC OF LIBERIA"
                bottom="ARCHIVE · VPL"
                center="1847"
                className="absolute -right-3 top-3 h-14 w-14 rotate-[-14deg] text-[#b5562a] opacity-75 sm:h-16 sm:w-16"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHRONICLE — scrolling timeline ribbon */}
      <div className="relative overflow-hidden border-b border-border bg-neutral-950 py-3 text-white dark:bg-[#161616]">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {[...chronicle, ...chronicle].map(([year, event], i) => (
            <span key={i} className="flex items-center gap-3 text-xs">
              <span className="font-semibold tracking-[0.14em]" style={{ fontFamily: monoFont, color: RED }}>
                {year}
              </span>
              <span className="italic text-white/70" style={{ fontFamily: "Georgia, serif" }}>
                {event}
              </span>
              <span className="text-white/30">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* BRIEF — editorial document */}
      <section id="brief" className="scroll-mt-28 bg-muted/40 px-3 py-20 sm:px-4">
        <div className="relative w-full">
          <div className="absolute inset-x-6 -top-3 h-full rounded-sm border border-border bg-card/60" aria-hidden />
          <div className="absolute inset-x-3 -top-1.5 h-full rounded-sm border border-border bg-card/80" aria-hidden />
          <article className="relative rounded-sm border border-border bg-card px-6 py-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.4)] sm:px-8 sm:py-14">
            <div className="flex items-center justify-between border-b border-border pb-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: RED }} />
                Virtual Past Liberia
              </span>
              <span style={{ fontFamily: monoFont }}>VPL-001 · Brief</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
            <div>
            <div className="mt-10 text-xs text-muted-foreground">Practices for heritage building</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Reconstructing what time erased</h2>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/85">
              <p>There are two kinds of history. The history that is written down, and the history that is lived.</p>
              <p>
                Written history lives in archives, maps, and photographs. It is organised and searchable, but for much of
                Liberia it is incomplete — scattered across institutions, damaged, or never recorded at all.
              </p>
              <p>
                Lived history lives in people: the stories of elders, the memory of a street before it changed, the
                architecture that shaped daily life. Virtual Past Liberia sits where these overlap — and turns them into
                places you can walk through again.
              </p>
            </div>

            {/* Venn diagram */}
            <div className="relative mx-auto mt-12 max-w-xl">
              <svg viewBox="0 0 520 320" className="w-full text-muted-foreground" fill="none" aria-label="Archives and oral history overlap in Virtual Past Liberia">
                <defs>
                  <pattern id="vpl-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke={RED} strokeWidth="1" strokeOpacity="0.55" />
                  </pattern>
                  <clipPath id="vpl-clip">
                    <circle cx="210" cy="170" r="120" />
                  </clipPath>
                </defs>
                <circle cx="210" cy="170" r="120" stroke="currentColor" strokeOpacity="0.4" />
                <circle cx="310" cy="170" r="120" stroke="currentColor" strokeOpacity="0.4" />
                <circle cx="310" cy="170" r="120" fill="url(#vpl-hatch)" clipPath="url(#vpl-clip)" />
                <text x="130" y="175" fontSize="12" fill="currentColor">Archives</text>
                <text x="350" y="175" fontSize="12" fill="currentColor">Oral history</text>
                <path d="M80 40 C 110 90, 140 120, 150 120" stroke="currentColor" strokeOpacity="0.6" />
                <circle cx="150" cy="120" r="2.5" fill="currentColor" />
                <text x="40" y="30" fontSize="11" fill="currentColor">Lost records</text>
                <path d="M470 50 C 430 60, 410 90, 395 100" stroke="currentColor" strokeOpacity="0.6" />
                <circle cx="395" cy="100" r="2.5" fill="currentColor" />
                <text x="430" y="40" fontSize="11" fill="currentColor">Fading memory</text>
                <path d="M260 210 C 262 250, 250 280, 240 305" stroke={RED} />
                <circle cx="260" cy="210" r="3" fill={RED} />
                <text x="250" y="318" fontSize="11" fill={RED}>Virtual Past Liberia</text>
              </svg>
            </div>
            </div>

            {/* Plate — played history */}
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mt-10 self-start lg:mt-16"
            >
              <div className="relative rotate-[1.5deg]">
              <span className="absolute -left-4 -top-3 z-10 h-6 w-20 -rotate-12 bg-[#e9dcc3]/80 shadow-sm dark:bg-[#cdbb98]/60" aria-hidden />
              <span className="absolute -right-4 -top-2 z-10 h-6 w-20 rotate-12 bg-[#e9dcc3]/80 shadow-sm dark:bg-[#cdbb98]/60" aria-hidden />

              <div className="border border-border bg-[#f4ecdc] p-3 pb-5 shadow-[0_25px_50px_-30px_rgba(60,35,15,0.6)] dark:bg-[#2a241c]">
                <div className="group relative aspect-[10/11] overflow-hidden">
                  <img
                    src="/vpl/vpl-controller.jpg"
                    alt="Hands holding a game controller — history held, and now played"
                    className="h-full w-full object-cover object-bottom grayscale sepia-[0.35] contrast-[1.05] transition-all duration-700 group-hover:scale-[1.03] group-hover:sepia-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(60,35,15,0.35)_100%)]" />
                  <div
                    className="absolute left-3 top-3 border border-neutral-900/60 bg-[#f4ecdc]/85 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-neutral-900"
                    style={{ fontFamily: monoFont }}
                  >
                    Plate 01 · Fig. A03
                  </div>
                  <ArchiveStamp
                    top="LIVED HISTORY"
                    bottom="PLAYABLE · VPL"
                    center="2099"
                    className="absolute -bottom-3 -right-3 h-24 w-24 rotate-[12deg] text-[#b5562a] opacity-80"
                  />
                </div>
                <figcaption className="mt-4 px-1">
                  <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.16em] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <span>Cat. VPL-A03</span>
                    <span>History games</span>
                  </div>
                  <p className="mt-2 text-lg italic leading-snug text-neutral-800 dark:text-neutral-200" style={{ fontFamily: "Georgia, serif" }}>
                    &ldquo;History was always held in hands. Now it can be played.&rdquo;
                  </p>
                </figcaption>
              </div>
              </div>

              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground/85">
                <div className="text-xs text-muted-foreground">The third kind of history</div>
                <p>
                  For generations, Liberian history was passed hand to hand — a griot&apos;s drum, a family photograph, a
                  hand-drawn map of a village that no longer stands.
                </p>
                <p>
                  We add one more pair of hands. In Virtual Past Liberia, a controller becomes the key to the archive: you
                  steer a canoe into Cape Mesurado, decode the Vai script letter by letter, and walk Broad Street as it
                  looked in 1847.
                </p>
                <div className="grid grid-cols-3 gap-px border border-border bg-border text-center">
                  {[
                    ["Hold", "Artifacts"],
                    ["Walk", "Places"],
                    ["Play", "Stories"],
                  ].map(([v, l]) => (
                    <div key={v} className="bg-card px-2 py-3">
                      <div className="text-xl uppercase leading-none" style={display}>
                        {v}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.figure>
            </div>
          </article>
        </div>
      </section>

      {/* WHAT WE BUILD — formats */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTag n="02" label="What we build" />
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="text-5xl uppercase leading-[0.9] sm:text-6xl" style={display}>
              Six ways to
              <br />
              <span style={{ color: RED }}>enter</span> the past
            </h2>
            <p className="max-w-md text-muted-foreground">
              Every artifact, site, and story we capture becomes virtual content in multiple formats — so the same piece of
              history can be a VR walk, a game level, a time-travel simulation, or a conversation with an AI guide.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => (
              <motion.div
                key={f.code}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative flex min-h-[260px] flex-col justify-between bg-background p-7 transition-colors hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-900"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center border border-current transition-colors group-hover:border-[#b5562a] group-hover:text-[#b5562a]"
                  >
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-white/50" style={{ fontFamily: monoFont }}>
                    {f.code}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl uppercase leading-none" style={display}>
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">{f.body}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full" style={{ background: RED }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES — what history we cover */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTag n="03" label="Themes" />
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="text-5xl uppercase leading-[0.9] sm:text-6xl" style={display}>
              Stories we
              <br />
              <span style={{ color: RED }}>bring back</span>
            </h2>
            <p className="max-w-md text-muted-foreground">
              Six themes guide the collection — from the cultures that came before the Republic to the memory of how the
              country rebuilt. Each one becomes artifacts, tours, games, and simulations.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div className="flex flex-col divide-y divide-border">
              {themes.map((t, i) => {
                const active = t.id === themeId
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setThemeId(t.id)}
                    onMouseEnter={() => setThemeId(t.id)}
                    className={`group relative flex items-center gap-5 px-6 py-5 text-left transition-colors ${
                      active ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-1 transition-opacity"
                      style={{ background: RED, opacity: active ? 1 : 0 }}
                    />
                    <span className="w-6 text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      T{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className={`block text-lg font-medium ${active ? "" : "text-muted-foreground group-hover:text-foreground"}`}>
                        {t.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        {t.era}
                      </span>
                    </span>
                    <ArrowRight className={`h-4 w-4 transition-transform ${active ? "translate-x-0" : "-translate-x-2 opacity-0"}`} />
                  </button>
                )
              })}
            </div>

            <div className="relative overflow-hidden border-t border-border bg-neutral-950 text-white lg:border-l lg:border-t-0 dark:bg-[#161616]">
              <span
                className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[14rem] leading-none text-white/[0.04]"
                style={display}
                aria-hidden
              >
                T{themeIndex + 1}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-full flex-col justify-between gap-10 p-8 sm:p-10"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/50" style={{ fontFamily: monoFont }}>
                      <span>Theme {String(themeIndex + 1).padStart(2, "0")} / {String(themes.length).padStart(2, "0")}</span>
                      <span className="flex items-center gap-2">
                        <History className="h-3.5 w-3.5" style={{ color: RED }} />
                        {theme.era}
                      </span>
                    </div>
                    <h3 className="mt-8 text-4xl uppercase leading-[0.95] sm:text-5xl" style={display}>
                      {theme.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">{theme.body}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-white/50" style={{ fontFamily: monoFont }}>
                      Becomes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {theme.formats.map((f) => (
                        <span key={f} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/85">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex gap-1.5">
                      {themes.map((t, i) => (
                        <span
                          key={t.id}
                          className="h-1 flex-1 rounded-full transition-colors"
                          style={{ background: i <= themeIndex ? RED : "rgba(255,255,255,0.15)" }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — audiences */}
      <section className="border-y border-border bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTag n="04" label="Who it's for" />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div>
              <h2 className="text-5xl uppercase leading-[0.9] sm:text-6xl" style={display}>
                One past,
                <br />
                many <span style={{ color: RED }}>visitors</span>
              </h2>
              <div className="mt-8 flex flex-col">
                {audiences.map((a, i) => {
                  const active = a.id === audienceId
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setAudienceId(a.id)}
                      onMouseEnter={() => setAudienceId(a.id)}
                      className={`flex items-center justify-between border-t py-4 text-left transition-colors last:border-b ${
                        active ? "border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span className="w-6 text-[10px]" style={{ fontFamily: monoFont }}>
                          0{i + 1}
                        </span>
                        <a.icon className="h-5 w-5" strokeWidth={1.5} style={active ? { color: RED } : undefined} />
                        <span className="text-lg font-medium">{a.label}</span>
                      </span>
                      <ArrowRight className={`h-4 w-4 transition-transform ${active ? "translate-x-0" : "-translate-x-2 opacity-0"}`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Ticket-style detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex overflow-hidden rounded-2xl bg-neutral-950 text-white"
              >
                <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/50" style={{ fontFamily: monoFont }}>
                      <span>Visitor pass · VPL</span>
                      <span>L-231</span>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: RED }}>
                        <audience.icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <span className="text-4xl uppercase leading-none" style={display}>
                        {audience.label}
                      </span>
                    </div>
                    <p className="mt-6 text-2xl font-light leading-snug">{audience.headline}</p>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {audience.points.map((p) => (
                      <li key={p} className="flex gap-3 border-t border-white/15 pt-3 text-sm text-white/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: RED }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Perforated stub */}
                <div className="relative hidden w-24 flex-col items-center justify-between border-l-2 border-dashed border-white/20 py-8 sm:flex">
                  <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-muted" />
                  <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-muted" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 [writing-mode:vertical-rl]" style={{ fontFamily: monoFont }}>
                    Admit one · HUIX 2099
                  </span>
                  <Barcode className="h-16 rotate-90 text-white/70" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PILLARS — numbered rows */}
      <section className="border-y border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTag n="05" label="From archive to experience" />
          <div className="space-y-16">
            {pillars.map((p) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)]"
              >
                <div className="text-8xl font-bold leading-[0.8] tracking-tight lg:text-9xl" style={display}>
                  {p.n}
                </div>
                <div className="grid gap-6 border-t-[3px] border-foreground pt-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{p.title}</h3>
                    <div className="mt-2 text-sm" style={{ color: RED }}>
                      {p.sub}
                    </div>
                  </div>
                  <p className="text-[15px] font-light leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 1 2 3 4 */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-sm border border-border bg-card px-6 py-12 sm:px-12">
          <SectionTag n="06" label="Working process" />
          <h2 className="text-4xl font-medium tracking-tight">How a site comes back</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Every Virtual Past Liberia module follows the same four steps, from the first archive search to a
            classroom in Monrovia.
          </p>

          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start">
            {steps.map((s, i) => {
              const active = i === activeStep
              return (
                <button
                  key={s.n}
                  type="button"
                  onMouseEnter={() => setActiveStep(i)}
                  onFocus={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`group flex border-t text-left transition-[flex] duration-500 ${
                    active ? "flex-[3] border-foreground" : "flex-1 border-border"
                  }`}
                >
                  <span
                    className="pt-4 text-[110px] font-light leading-[0.85] tracking-tight transition-colors duration-300 sm:text-[140px]"
                    style={{ color: active ? (i === steps.length - 1 ? RED : undefined) : undefined }}
                  >
                    <span className={active ? "" : "text-muted-foreground/30 group-hover:text-muted-foreground/60"}>{s.n}</span>
                  </span>
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-6 block max-w-xs pt-6"
                      >
                        <span className="block text-lg font-medium">{s.title}</span>
                        <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{s.body}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>

          <Link
            href="/research"
            className="mt-12 inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-xs font-medium transition-colors hover:bg-muted/70"
          >
            Explore the research
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* IMPACT — slide deck grid */}
      <section className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTag n="07" label="Impact review" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dark title slide */}
            <div className="flex min-h-[340px] flex-col justify-between rounded-xl bg-neutral-950 p-6 text-white">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-wider">Section 07</span>
                <span className="text-7xl font-light leading-none">07</span>
              </div>
              <div>
                <h3 className="text-4xl font-light leading-[1.05]">
                  Medical &amp;
                  <br />
                  Social impact
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-white/60">
                  Immersive content can support health education and wellbeing — with safeguards for comfort, privacy,
                  and access.
                </p>
              </div>
            </div>

            {/* Positives */}
            <div className="flex min-h-[340px] flex-col rounded-xl border border-border bg-card p-6">
              <span className="mb-5 w-fit rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                Positives
              </span>
              <h3 className="text-2xl font-medium leading-tight">
                What it <span className="text-muted-foreground">enables.</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Health education through culturally grounded stories",
                  "Low-bandwidth XR for clinics and schools",
                  "Restorative spaces for stress reduction",
                  "Training for public-health response drills",
                ].map((t) => (
                  <li key={t} className="flex gap-3 rounded-lg bg-muted/60 p-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: RED }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="flex min-h-[340px] flex-col rounded-xl bg-neutral-900 p-6 text-white">
              <span className="mb-5 w-fit rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-wider">
                Risks
              </span>
              <div className="space-y-3">
                {[
                  ["Motion sickness", "Short guided sessions and comfort settings by default."],
                  ["Access inequity", "Offline packs for low-cost phones and shared devices."],
                  ["Misinterpretation", "Every scene reviewed by cultural custodians."],
                  ["Data privacy", "No biometric capture; consent-first telemetry."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-white/5 p-3">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <TriangleAlert className="h-3.5 w-3.5" style={{ color: RED }} />
                      {k}
                    </div>
                    <p className="mt-1 text-xs text-white/60">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In numbers */}
            <div className="flex min-h-[340px] flex-col justify-between rounded-xl border border-border bg-card p-6">
              <span className="w-fit rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                Program
              </span>
              <h3 className="text-4xl font-medium leading-[1.05] tracking-tight">
                VPL <span className="text-muted-foreground">in numbers.</span>
              </h3>
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                {[
                  ["6", "content formats"],
                  ["5", "audiences"],
                  ["0", "internet needed"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-4xl font-light">{v}</div>
                    <div className="mt-1 text-[10px] leading-tight text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {["Museums", "Schools", "Custodians"].map((t, i) => (
                  <span
                    key={t}
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-[9px] font-medium ${
                      i === 2 ? "text-white" : "bg-muted text-foreground"
                    }`}
                    style={i === 2 ? { background: RED } : undefined}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Platform + sister project */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Link
              href="/research"
              className="group flex items-center justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Platform
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-[0.12em]" style={display}>
                  HUIX-HORIZEN
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modular scenes, avatars, and multi-user sessions with privacy-first telemetry.
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://liberia-language-lm.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 rounded-xl p-6 text-white transition-opacity hover:opacity-95"
              style={{ background: RED }}
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/70" style={{ fontFamily: monoFont }}>
                  Sister project · KoloquaLBR
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-[0.12em]" style={display}>
                  LLM LIBERIA
                </div>
                <p className="mt-2 text-sm text-white/80">
                  A Liberian language model for Liberian English and local languages — giving the stories a voice.
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <VplTeamSection />

      {/* CLOSING — dark panel */}
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-b-[48px] bg-neutral-900 px-6 pb-8 pt-20 text-white sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-10 select-none text-[220px] leading-none text-white/[0.04]"
              style={display}
            >
              L-231
            </div>
            <h2 className="relative max-w-3xl text-4xl uppercase leading-[0.95] sm:text-6xl" style={display}>
              Help us bring the past <span style={{ color: RED }}>back</span>.
            </h2>
            <p className="relative mt-5 max-w-xl text-white/60">
              We are looking for archives, historians, schools, and funders who want Liberian heritage preserved and
              shared — in Liberia and across the diaspora.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                style={{ background: RED }}
              >
                Become a partner
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/showcase"
                className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-white hover:text-neutral-900"
              >
                View prototypes
              </Link>
            </div>
            <div className="relative mt-16 flex items-center justify-between border-y border-white/20 py-3 text-sm tracking-[0.1em]">
              <span>PRESERVE</span>
              <span>RECONSTRUCT</span>
              <span>SHARE</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
            <span>HUIX · 2099 · 20-99</span>
            <Barcode className="h-4 text-muted-foreground" />
            <span>VPL-001 · L-231</span>
          </div>
        </div>
      </section>
    </main>
  )
}
