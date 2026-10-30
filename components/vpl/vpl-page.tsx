"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react"

/* ————————————————————————————————————————————————
   Tokens
   ———————————————————————————————————————————————— */

const WRAP = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16"
const EYEBROW =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
const HEADING =
  "text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.035em]"
const BODY = "text-[14px] sm:text-[15px] leading-[1.65] text-muted-foreground"

/* ————————————————————————————————————————————————
   Content
   ———————————————————————————————————————————————— */

const facts = [
  ["200+", "Years of history"],
  ["15", "Counties to survey"],
  ["6", "Ways to enter"],
  ["0", "Internet needed"],
]

const formats = [
  {
    code: "A01",
    title: "Virtual artifacts",
    body: "3D-scanned masks, tools, textiles, and documents you can rotate, zoom, and inspect — with the story of where each piece came from.",
  },
  {
    code: "A02",
    title: "VR heritage tours",
    body: "Walk through historic sites and lost buildings in virtual reality, guided by narration and the voices of people who remember them.",
  },
  {
    code: "A03",
    title: "History games",
    body: "Playable quests and challenges set in Liberia’s past — learn by exploring, choosing, and solving, not just reading.",
  },
  {
    code: "A04",
    title: "Historical emulation",
    body: "Time-slider simulations that rebuild a street, village, or market across eras, so you can see how a place changed decade by decade.",
  },
  {
    code: "A05",
    title: "AI guides",
    body: "Ask questions and hear answers in Liberian English and local languages, from guides grounded in reviewed sources.",
  },
  {
    code: "A06",
    title: "Virtual museum",
    body: "One open collection on web, mobile, and headset — offline-ready for classrooms and community centres with little or no internet.",
  },
]

const themes = [
  {
    id: "cultures",
    tab: "Cultures",
    era: "Before 1822",
    title: "Indigenous cultures",
    body: "The peoples who shaped the land long before the Republic — Kpelle, Bassa, Kru, Grebo, Vai, Gola, Lorma, Mano, Gio, and more. Masks, tools, textiles, music, and village life, rebuilt with their communities.",
    formats: ["Virtual artifacts", "VR village tours", "AI guides"],
    records: ["Masks & regalia", "Woven textiles", "Village life scenes"],
  },
  {
    id: "arrival",
    tab: "Providence Island",
    era: "1822",
    title: "Providence Island",
    body: "Where settlers from the Americas landed at Cape Mesurado. A VR walk through the island and the first settlement, told from more than one point of view — settlers and the people already living there.",
    formats: ["VR heritage tours", "Historical emulation"],
    records: ["Providence Island", "Cape Mesurado", "The first settlement"],
  },
  {
    id: "vai",
    tab: "Vai script",
    era: "1830s",
    title: "The Vai script",
    body: "One of the few writing systems created in West Africa, devised by Momolu Duwalu Bukele. Learn the characters, decode messages, and hear how the script travelled from person to person.",
    formats: ["History games", "Ask the artifact"],
    records: ["Vai syllabary", "Scribe testimony", "Message puzzles"],
  },
  {
    id: "republic",
    tab: "1847",
    era: "1847",
    title: "Independence & the Republic",
    body: "The declaration of independence on 26 July 1847, the early government, and the buildings and documents that marked Africa’s first republic.",
    formats: ["Virtual artifacts", "Virtual museum"],
    records: ["1847 declaration", "Early government", "Republic-era buildings"],
  },
  {
    id: "monrovia",
    tab: "Monrovia",
    era: "1900s → today",
    title: "Monrovia through the eras",
    body: "Streets, markets, and landmarks rebuilt decade by decade. Drag the time slider and watch a block of the capital change around you.",
    formats: ["Historical emulation", "History games"],
    records: ["Street plans", "Market scenes", "Landmark facades"],
  },
  {
    id: "memory",
    tab: "Memory",
    era: "1989 → 2003",
    title: "Memory, peace & rebuilding",
    body: "Oral histories of the civil wars, the women’s peace movement, and how communities rebuilt. Made with survivors, with consent, and with care. Content warnings and opt-in access by default.",
    formats: ["Oral history archive", "AI guides"],
    records: ["Oral histories", "Peace movement", "Rebuilding record"],
  },
]

const audiences = [
  {
    id: "tourists",
    label: "Tourists",
    headline: "Visit before you land — and see more when you arrive.",
    points: [
      "VR previews of historic sites",
      "On-site AR and kiosk experiences",
      "Multilingual AI guides",
    ],
  },
  {
    id: "students",
    label: "Students",
    headline: "History you can walk through, play, and question.",
    points: [
      "Curriculum-linked VR lessons",
      "Offline packs for low connectivity",
      "An AI tutor for every artifact",
    ],
  },
  {
    id: "citizens",
    label: "Citizens",
    headline: "Your heritage, open to everyone in Liberia.",
    points: [
      "Free museum access on any phone",
      "Contribute family stories and photos",
      "Community and pop-up VR sessions",
    ],
  },
  {
    id: "diaspora",
    label: "Diaspora",
    headline: "Reconnect with home from anywhere in the world.",
    points: [
      "Remote tours of hometowns",
      "Family-history storytelling tools",
      "Live virtual events with guides",
    ],
  },
  {
    id: "researchers",
    label: "Researchers",
    headline: "Digitise, protect, and share collections responsibly.",
    points: [
      "High-fidelity 3D archives",
      "Source-linked provenance records",
      "Partnerships for exhibitions and loans",
    ],
  },
]

const steps = [
  {
    title: "Research & 3D capture",
    body: "Gather maps, photographs, and records, and 3D-scan artifacts and sites with photogrammetry alongside partners and local historians.",
  },
  {
    title: "Community review",
    body: "Record oral histories with consent and validate every artifact, scene, and story with custodians before it is published.",
  },
  {
    title: "Build VR, games & emulations",
    body: "Turn the material into tours, playable history games, and time-travel emulations on the HUIX-Horizen platform, with AI guides layered on top.",
  },
  {
    title: "Deploy & share",
    body: "Ship to headsets, phones, and the web — offline packs for schools, kiosks for tourist sites, and open access for citizens and the diaspora.",
  },
]

const guardrails = [
  {
    label: "Source-linked",
    title: "Nothing guessed",
    body: "Every scene is traceable back to archives, survey data, or recorded testimony.",
  },
  {
    label: "Consent-first",
    title: "Told by its owners",
    body: "Oral histories are recorded with consent and credited to the people who tell them.",
  },
  {
    label: "Offline-first",
    title: "Built for the field",
    body: "Runs on low-cost phones and entry headsets, without fast internet or expensive hardware.",
  },
]

/* ————————————————————————————————————————————————
   Small pieces
   ———————————————————————————————————————————————— */

function Photo({
  src,
  alt,
  caption,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string
  alt: string
  caption: string
  className?: string
  imgClassName?: string
  eager?: boolean
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[26px] bg-secondary ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${imgClassName}`}
      />
      <figcaption className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[10.5px] font-medium tracking-[0.02em] text-black backdrop-blur-md dark:bg-black/60 dark:text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c2410c]" />
        {caption}
      </figcaption>
    </figure>
  )
}

function FieldVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (reduceMotion) {
      video.pause()
      return
    }
    const attempt = video.play()
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => setPlaying(false))
    }
  }, [reduceMotion])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      const attempt = video.play()
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => setPlaying(false))
      }
    } else {
      video.pause()
    }
  }

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[26px] bg-secondary">
      <video
        ref={ref}
        src="/vpl/field/field-loop.mp4"
        poster="/vpl/field/field-loop-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="A visitor wearing a VR headset and holding a controller while the Providence Island build runs on a laptop"
        className="h-full w-full object-cover object-[52%_42%]"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />

      <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[10.5px] font-medium text-black backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c2410c]" />
        Field loop · 2026
      </span>

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the field video" : "Play the field video"}
        className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black backdrop-blur-md transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {playing ? (
          <Pause className="h-3.5 w-3.5" fill="currentColor" />
        ) : (
          <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
        )}
      </button>

      <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 pr-12 text-[11px] leading-snug text-white/90">
        Providence Island build, tested at UN Day · Monrovia
      </figcaption>
    </div>
  )
}

function SectionHead({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string
  title: string
  body?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-[680px]">
        <p className={EYEBROW}>{eyebrow}</p>
        <h2 className={`mt-3 ${HEADING}`}>{title}</h2>
        {body ? <p className={`mt-4 max-w-[560px] ${BODY}`}>{body}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

/* ————————————————————————————————————————————————
   Page
   ———————————————————————————————————————————————— */

export function VplPage() {
  const [activeTheme, setActiveTheme] = useState(themes[0].id)
  const theme = themes.find((item) => item.id === activeTheme) ?? themes[0]

  return (
    <main id="top" className="vpl-clean bg-background text-foreground">
      {/* ——— Hero ——————————————————————————————— */}
      <section className="pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-20">
        <div className={WRAP}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left: logo + copy */}
            <div className="flex flex-col items-start text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c2410c]" />
                Field notes · Monrovia · October 2026
              </p>

              <h1
                className="mt-8 w-full text-left uppercase leading-[0.88] tracking-[-0.02em]"
                style={{ fontFamily: '"Gogono", "Arial Black", sans-serif' }}
              >
                <span className="block text-[clamp(2.25rem,6vw,4.2rem)] text-muted-foreground">
                  Virtual Past
                </span>
                <span className="block text-[clamp(3.5rem,10vw,7.5rem)] text-foreground">
                  Liberia
                </span>
              </h1>

              <p className="mt-7 max-w-[520px] text-[15px] leading-[1.65] text-muted-foreground sm:text-[17px]">
                A virtual museum of Liberian memory — rebuilt from archives, 3D
                scans, and the voices of the people who were there. Free, offline,
                on any phone or headset.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#collection"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition hover:opacity-85"
                >
                  Explore the collection
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-[13px] font-medium transition hover:bg-secondary"
                >
                  Partner with us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    { src: "/vpl/field/vr-session.jpg", alt: "Visitor testing the headset" },
                    { src: "/vpl/field/field-desk.jpg", alt: "Headset and laptop at the field desk" },
                  ].map((avatar) => (
                    <span
                      key={avatar.src}
                      className="relative inline-flex h-9 w-9 overflow-hidden rounded-full ring-2 ring-background"
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </span>
                  ))}
                </div>
                <p className="max-w-[280px] text-left text-[12px] leading-snug text-muted-foreground">
                  Built with elders, historians and custodians across all 15
                  counties.
                </p>
              </div>
            </div>

            {/* Right: media boxes */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 sm:max-h-[520px]">
              <Photo
                src="/vpl/field/vr-session.jpg"
                alt="A visitor wearing a Quest headset and holding a controller, with a laptop in front of him"
                caption="Field session"
                eager
                className="order-2 aspect-[4/5] h-full sm:order-1 sm:aspect-auto"
                imgClassName="object-[50%_38%]"
              />
              <div className="order-1 aspect-[4/5] h-full sm:order-2 sm:aspect-auto">
                <FieldVideo />
              </div>
              <Photo
                src="/vpl/field/field-desk.jpg"
                alt="A VR headset and laptop on a red field desk during a HUIX-2099 workshop"
                caption="Field desk · 2026"
                eager
                className="order-3 aspect-[4/5] h-full sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:aspect-auto"
                imgClassName="object-[48%_42%]"
              />
            </div>
          </div>

          {/* Facts */}
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-border pt-9 sm:mt-24 sm:grid-cols-4 sm:gap-x-8 sm:pt-10">
            {facts.map(([value, label]) => (
              <div key={label}>
                <dd className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-semibold leading-none tracking-[-0.045em]">
                  {value}
                </dd>
                <dt className="mt-2.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— Position ——————————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <div className="grid gap-8 border-t border-border pt-12 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className={EYEBROW}>Why this exists</p>
              <h2 className="mt-3 text-[clamp(2rem,4.6vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                The record is incomplete.
                <span className="block text-muted-foreground">
                  The memory is not.
                </span>
              </h2>
            </div>
            <p className={`${BODY} max-w-[520px] lg:pb-2`}>
              Conflict, climate and time have erased buildings, objects and
              documents across Liberia. Some of it can be rebuilt. All of it can
              be recorded — with the people who remember it. Virtual Past
              Liberia is an attempt to hold both, in one open archive.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Collection ————————————————————————— */}
      <section id="collection" className="scroll-mt-24 pb-20 sm:pb-28">
        <div className={WRAP}>
          <SectionHead
            eyebrow="The collection"
            title="Six ways to enter the past."
            body="One collection, built in layers — from single artifacts you can hold in your hand, to whole streets you can walk through."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {formats.map((item) => (
              <article
                key={item.code}
                className="group flex flex-col rounded-[26px] bg-secondary p-6 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[210px] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    VPL–{item.code}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-8 sm:mt-auto sm:pt-10">
                  <h3 className="text-[18px] font-medium tracking-[-0.015em] sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Rooms —————————————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <SectionHead
            eyebrow="Inside the rooms"
            title="Start where you’re curious."
            body="The museum is arranged by era and community. Pick a room to see what has been rebuilt so far."
          />

          <div
            role="tablist"
            aria-label="Museum rooms"
            className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {themes.map((item) => {
              const active = item.id === theme.id
              return (
                <button
                  key={item.id}
                  id={`room-tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls="room-panel"
                  onClick={() => setActiveTheme(item.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-[12.5px] font-medium transition ${
                    active
                      ? "bg-foreground text-background"
                      : "border border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.tab}
                </button>
              )
            })}
          </div>

          <div
            id="room-panel"
            role="tabpanel"
            aria-labelledby={`room-tab-${theme.id}`}
            className="mt-4 rounded-[32px] bg-secondary p-6 sm:p-10 lg:p-14"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
              >
                <div>
                  <p className={EYEBROW}>{theme.era}</p>
                  <h3 className="mt-3 text-[clamp(1.65rem,3.4vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                    {theme.title}
                  </h3>
                  <p className="mt-4 max-w-[560px] text-[14px] leading-[1.65] text-muted-foreground">
                    {theme.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {theme.formats.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-[11.5px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:pt-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    In this room
                  </p>
                  <ul className="mt-3 border-t border-border">
                    {theme.records.map((record, index) => (
                      <li
                        key={record}
                        className="flex items-center justify-between gap-4 border-b border-border py-3.5 text-[14px]"
                      >
                        <span>{record}</span>
                        <span className="text-[11px] tabular-nums text-muted-foreground">
                          0{index + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium underline decoration-border underline-offset-4 transition hover:opacity-70"
                  >
                    Request a walkthrough
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ——— Audiences —————————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <SectionHead
            eyebrow="Who it’s for"
            title="One archive, many doors."
            body="Whether you live here, left here, study here or are just arriving, there is a way in."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.id}
                className="flex flex-col rounded-[24px] border border-border p-6 transition-colors hover:bg-secondary"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {audience.label}
                </p>
                <h3 className="mt-3 text-[17px] font-medium leading-snug tracking-[-0.01em]">
                  {audience.headline}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[12.5px] leading-snug text-muted-foreground"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <Link
              href="/contact"
              className="group flex min-h-[200px] flex-col justify-between rounded-[24px] bg-foreground p-6 text-background transition hover:opacity-95"
            >
              <div className="flex items-start justify-between">
                <p className="text-[11px] uppercase tracking-[0.16em] text-background/60">
                  Institutions
                </p>
                <ArrowUpRight className="h-4 w-4 text-background/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div>
                <h3 className="text-[19px] font-medium leading-snug tracking-[-0.015em]">
                  Bring a site, a collection or a story to the record.
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[12.5px] text-background/70">
                  Start a partnership
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Method ————————————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <SectionHead
            eyebrow="How a site comes back"
            title="Four steps, from archive to headset."
            body="Research first, community always, technology last."
            action={
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-[12.5px] font-medium transition hover:bg-secondary"
              >
                Read the method
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            }
          />
          <ol className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="text-[12px] font-medium tabular-nums text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-[17px] font-medium leading-snug tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {guardrails.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] bg-secondary p-5 sm:p-6"
              >
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <h3 className="mt-2 text-[15px] font-medium tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Stewardship ———————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <div className="rounded-[32px] bg-secondary px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <p className={EYEBROW}>Stewardship</p>
            <blockquote className="mt-4 max-w-[880px] text-[clamp(1.7rem,3.8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              “The past is told by those who own it — not guessed at from the
              outside.”
            </blockquote>
            <p className="mt-6 max-w-[560px] text-[13.5px] leading-[1.65] text-muted-foreground">
              Every scene, artifact and oral history passes community review
              before it ships. Testimony is recorded with consent, credited to
              its tellers, and can be withdrawn at any time.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Consent recorded",
                "Tellers credited",
                "Content warnings by default",
                "Community can withdraw",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-[11.5px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— Team ——————————————————————————————— */}
      <section className="pb-20 sm:pb-28">
        <div className={WRAP}>
          <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className={EYEBROW}>Who’s building it</p>
              <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                A small team,
                <span className="block text-muted-foreground">
                  working with many.
                </span>
              </h2>
              <Link
                href="/team"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium underline decoration-border underline-offset-4 transition hover:opacity-70"
              >
                Meet the team
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-[18px] font-medium tracking-[-0.015em]">
                  Victor Edet Coleman
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  3D modeller & software developer
                </p>
                <p className="mt-3 text-[13px] leading-[1.65] text-muted-foreground">
                  Rebuilds artifacts and sites in 3D and engineers the VR, game,
                  and web experiences around them.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium tracking-[-0.015em]">
                  Dave Weedor
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Business strategist
                </p>
                <p className="mt-3 text-[13px] leading-[1.65] text-muted-foreground">
                  Shapes the business model, partnerships, and funding that take
                  Virtual Past Liberia from concept to classrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Closing ———————————————————————————— */}
      <section className="pb-16 sm:pb-24">
        <div className={WRAP}>
          <div className="rounded-[32px] bg-foreground px-6 py-14 text-center text-background sm:px-12 sm:py-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/55">
              Virtual Past Liberia
            </p>
            <h2 className="mx-auto mt-4 max-w-[720px] text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              The past is a place.
              <span className="block text-background/55">Let’s go back.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[460px] text-[13.5px] leading-[1.65] text-background/65">
              Partner with us, bring a site into the archive, or try the build on
              a headset.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-[13px] font-medium text-foreground transition hover:opacity-90"
              >
                Start a project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium text-background ring-1 ring-white/30 transition hover:bg-white/10 dark:ring-black/20 dark:hover:bg-black/5"
              >
                See the collection
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
