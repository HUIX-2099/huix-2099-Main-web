"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MonroviaPassGate } from "@/components/monrovia-hustle/monrovia-pass-gate"
import { useTheme } from "@/components/theme-provider"
import { TeamProfileCard } from "@/components/team-profile-card"
import { teamMembers } from "@/app/team/data"
import {
  ArrowLeft,
  Download,
  Monitor,
  Heart,
  Mail,
  ExternalLink,
  Cpu,
  HardDrive,
  Gamepad2,
  Clapperboard,
  Mic,
  Lock,
} from "lucide-react"

const victorMember = teamMembers.find((m) => m.id === "victor")

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const ASSET_BASE = "/products/Monrovia_hustle_Demo_Campane"
const LOGO_SRC = `${ASSET_BASE}/logo%20for%20ui.png`
const KEY_ART_SRC = `${ASSET_BASE}/game_fam_main_character_ui.jpg`
const LIBERIA_FLAG_SRC = `${ASSET_BASE}/liberiaFlag.png`

const lockedGameScenes = [
  {
    sceneId: "MH-SCN-α",
    title: "Central district · day run",
    note: "Chase readability & crowd density pass — ships with story milestone 2.",
  },
  {
    sceneId: "MH-SCN-β",
    title: "Waterfront · night economy",
    note: "Trading & risk loops — locked until funding unlocks expanded map slice.",
  },
  {
    sceneId: "MH-SCN-γ",
    title: "Boss confrontation",
    note: "Spoiler-safe encounter build — gated for full campaign release.",
  },
] as const

const visualRefIndex = [
  {
    num: "01",
    refId: "MH-ENV-01",
    lane: "World build",
    title: "District read & street scale",
    purpose:
      "Blocking and mood for Monrovia-adjacent streets — density, signage, and pedestrian flow inform mission layout and chase readability.",
    file: "1nmdB.jpg" as const,
    capture: "WIDE · BLOCKING",
  },
  {
    num: "02",
    refId: "MH-UI-02",
    lane: "Interface",
    title: "Diegetic UI & legibility",
    purpose:
      "HUD and menu frames are tuned for contrast and at-a-glance objectives so players stay oriented during tension beats.",
    file: "OIP.jpg" as const,
    capture: "UI · PASS",
  },
  {
    num: "03",
    refId: "MH-CHR-03",
    lane: "Character",
    title: "Wardrobe & silhouette",
    purpose:
      "Outfits and props sell role and status in the world; silhouette tests keep characters readable at mid distance.",
    file: "oV3KT.jpg" as const,
    capture: "CHAR · REF",
  },
  {
    num: "04",
    refId: "MH-HUD-04",
    lane: "Systems",
    title: "Feedback & friction",
    purpose:
      "On-screen feedback loops (objectives, risk, economy) are iterated so the hustle feels fair but unforgiving.",
    file: "Th6WE.png" as const,
    capture: "FLOW · SPEC",
  },
]

const WINDOWS_DEMO_HREF = process.env.NEXT_PUBLIC_MONROVIA_HUSTLE_WINDOWS_DEMO ?? ""

function LiberiaFlagAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute left-1/2 top-[42%] h-[min(110vh,880px)] w-[min(110vw,960px)] -translate-x-1/2 -translate-y-1/2 scale-110"
        style={{
          backgroundImage: `url('${LIBERIA_FLAG_SRC}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          filter: "blur(52px)",
        }}
      />
      <div className="absolute -left-[25%] top-[10%] h-[55vmin] w-[55vmin] rounded-full bg-[#bf0d3e]/[0.22] blur-[100px]" />
      <div className="absolute -right-[20%] bottom-[5%] h-[50vmin] w-[50vmin] rounded-full bg-blue-500/[0.18] blur-[95px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
    </div>
  )
}

function RegMarks({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 text-[11px] font-light leading-none text-foreground/25 ${className}`} aria-hidden>
      <span className="absolute left-1.5 top-1.5">+</span>
      <span className="absolute right-1.5 top-1.5">+</span>
      <span className="absolute bottom-1.5 left-1.5">+</span>
      <span className="absolute bottom-1.5 right-1.5">+</span>
    </div>
  )
}

function DocSectionRule({
  index,
  eyebrow,
  title,
  subtitle,
  aside,
}: {
  index: string
  eyebrow: string
  title: string
  subtitle?: string
  aside?: ReactNode
}) {
  return (
    <div className="border-b border-border pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex gap-6">
          <span
            className="select-none text-5xl font-bold leading-none tracking-tight text-foreground/[0.08] sm:text-6xl md:text-7xl"
            style={{ fontFamily: monoFont }}
            aria-hidden
          >
            {index}
          </span>
          <div className="min-w-0 border-l border-border pl-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground" style={{ fontFamily: monoFont }}>
              {eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.14em] text-foreground sm:text-2xl md:text-3xl" style={{ fontFamily: "Mohican, sans-serif" }}>
              {title}
            </h2>
            {subtitle ? <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p> : null}
          </div>
        </div>
        {aside ? <div className="shrink-0 border border-border bg-card px-4 py-3">{aside}</div> : null}
      </div>
      <div className="mt-6 h-px w-full bg-border" />
    </div>
  )
}

function HudFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute left-2 top-2 z-10 h-4 w-4 border-l border-t border-foreground/30" aria-hidden />
      <span className="pointer-events-none absolute right-2 top-2 z-10 h-4 w-4 border-r border-t border-foreground/30" aria-hidden />
      <span className="pointer-events-none absolute bottom-2 left-2 z-10 h-4 w-4 border-b border-l border-[#bf0d3e]/45" aria-hidden />
      <span className="pointer-events-none absolute bottom-2 right-2 z-10 h-4 w-4 border-b border-r border-[#bf0d3e]/45" aria-hidden />
      {children}
    </div>
  )
}

export default function MonroviaHustlePage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <>
      <Navbar />

      <MonroviaPassGate logoSrc={LOGO_SRC} logoAlt="Monrovia Hustle">
      <main className="relative overflow-hidden bg-background text-foreground">
        <div
          className="pointer-events-none absolute right-0 top-24 z-0 h-[min(85vw,480px)] w-[min(85vw,480px)] opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url('${LOGO_SRC}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <p
          className="pointer-events-none fixed bottom-8 right-4 z-0 hidden origin-bottom-right rotate-90 text-[clamp(4rem,14vw,10rem)] font-bold uppercase leading-none text-foreground/[0.03] lg:block"
          style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.2em" }}
          aria-hidden
        >
          HUSTLE
        </p>

        {/* Doc masthead */}
        <header className="relative z-10 border-b border-border bg-background/90">
          <div
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-b border-border/80 px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
            style={{ fontFamily: monoFont }}
          >
            <span>INHALT / CONTENT</span>
            <span className="hidden sm:inline">MONROVIA HUSTLE · PRODUCT DOSSIER</span>
            <span className="text-muted-foreground/60">CLASS · PUBLIC BETA</span>
          </div>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70"
              style={{ fontFamily: monoFont }}
            >
              <span>HUIX-2099</span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="hidden sm:inline">CAT NO · PRD-MH-003</span>
              <span className="hidden md:inline text-border">|</span>
              <span className="hidden md:inline">REV · {new Date().getFullYear()}</span>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              style={{ fontFamily: monoFont }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              ← Products index
            </Link>
          </div>
        </header>

        {/* [01] Hero — brutalist doc + key art */}
        <section className="relative z-10 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
              {/* Index column */}
              <div className="flex items-start gap-4 lg:col-span-2 lg:flex-col lg:border-r lg:border-border lg:pr-6">
                <span className="text-6xl font-bold leading-none text-foreground/[0.09] sm:text-7xl lg:text-8xl" style={{ fontFamily: monoFont }}>
                  01
                </span>
                <div className="hidden h-px w-full bg-border lg:block" />
              </div>

              <motion.div
                className="lg:col-span-5 lg:border-r lg:border-border lg:px-8 xl:px-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden />
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    Brief · campaign hero
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                    §01
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 border border-border bg-muted/40">
                    <Image src={LOGO_SRC} alt="" width={48} height={48} className="object-contain p-1.5" unoptimized />
                    <RegMarks />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    HUIX-2099 · game project
                  </p>
                </div>

                <h1
                  className="mt-8 text-3xl font-bold leading-[1.05] tracking-[0.12em] text-foreground sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "Mohican, sans-serif" }}
                >
                  MONROVIA HUSTLE
                </h1>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">Street life · Ambition · Survival</p>
                <p className="mt-6 max-w-xl text-sm leading-[1.75] text-foreground/90">
                  This page is a <span className="border-b border-blue-600/40 pb-px text-blue-700 dark:text-[#93c5fd]">funding campaign</span>{" "}
                  to ship a stronger build. The demo is{" "}
                  <span className="font-semibold text-foreground">Windows only</span> — authored in Monrovia as a solo-led production under HUIX-2099.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {WINDOWS_DEMO_HREF ? (
                    <a
                      href={WINDOWS_DEMO_HREF}
                      className="inline-flex items-center gap-2 border border-[#bf0d3e] bg-[#bf0d3e] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a30d35]"
                      style={{ fontFamily: monoFont }}
                    >
                      <Download className="h-4 w-4" />
                      Download · Windows
                    </a>
                  ) : (
                    <a
                      href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%20%E2%80%94%20Windows%20demo%20request"
                      className="inline-flex items-center gap-2 border border-[#bf0d3e] bg-[#bf0d3e] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a30d35]"
                      style={{ fontFamily: monoFont }}
                    >
                      <Download className="h-4 w-4" />
                      Request demo
                    </a>
                  )}
                  <a
                    href="#support"
                    className="inline-flex items-center gap-2 border border-border bg-transparent px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition hover:bg-muted/50"
                    style={{ fontFamily: monoFont }}
                  >
                    <Heart className="h-4 w-4" />
                    Support build_
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="border border-border px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
                    style={{ fontFamily: monoFont }}
                  >
                    Windows demo
                  </span>
                  <span
                    className="border border-[#bf0d3e]/35 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[#a30d35] dark:text-[#fca5a5]"
                    style={{ fontFamily: monoFont }}
                  >
                    Funding open
                  </span>
                </div>
                {!WINDOWS_DEMO_HREF ? (
                  <p className="mt-4 text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    ENV: set NEXT_PUBLIC_MONROVIA_HUSTLE_WINDOWS_DEMO for direct installer URL.
                  </p>
                ) : null}
              </motion.div>

              <motion.div
                className="lg:col-span-5 lg:pl-8 xl:pl-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Fig. 01 — key art · protagonist
                </p>
                <div className="relative mt-3 border border-border bg-muted/40">
                  <RegMarks />
                  <HudFrame className="border-0">
                    <div className="relative aspect-[4/5] w-full max-h-[min(72vh,520px)]">
                      <Image
                        src={KEY_ART_SRC}
                        alt="Monrovia Hustle — protagonist key art"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        unoptimized
                      />
                    </div>
                  </HudFrame>
                  <div
                    className="flex items-center justify-between border-t border-border bg-card px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    style={{ fontFamily: monoFont }}
                  >
                    <span>Visual target · in-engine tone</span>
                    <span className="text-foreground/50">SCROLL ↓</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* [02] Build / distribution — data sheet */}
        <section id="download" className="relative z-10 border-b border-border bg-muted/15 dark:bg-muted/5">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <DocSectionRule
              index="02"
              eyebrow="[02] Build · distribution"
              title="Windows demo package"
              subtitle="Early build for testers and backers. Status, platform, and channel are fixed fields — same as a shipping manifest."
              aside={
                <p style={{ fontFamily: monoFont }} className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="text-foreground">BUILD_00</span>
                  <span className="mx-2 text-border">|</span>
                  WIN64
                </p>
              }
            />

            <div className="mt-10 grid gap-0 border border-border md:grid-cols-3 md:divide-x md:divide-border">
              {[
                { icon: Monitor, label: "Platform", value: "Windows 10 / 11", k: "PLT" },
                { icon: Gamepad2, label: "Status", value: "Development demo", k: "STS" },
                { icon: HardDrive, label: "Channel", value: "Direct / email", k: "CH" },
              ].map(({ icon: Icon, label, value, k }) => (
                <div key={k} className="border-b border-border p-6 md:border-b-0">
                  <div className="flex items-start justify-between gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-foreground/60" strokeWidth={1.25} />
                    <span className="text-[9px] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                      {k}
                    </span>
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    {label}
                  </p>
                  <p className="mt-2 border-t border-border pt-3 text-lg font-semibold tabular-nums text-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              {WINDOWS_DEMO_HREF ? (
                <a
                  href={WINDOWS_DEMO_HREF}
                  className="inline-flex items-center gap-2 border border-blue-600 bg-blue-600 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-blue-700 dark:border-[#3b82f6] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb]"
                  style={{ fontFamily: monoFont }}
                >
                  <Download className="h-4 w-4" />
                  Acquire build
                </a>
              ) : (
                <a
                  href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%20%E2%80%94%20Windows%20demo"
                  className="inline-flex items-center gap-2 border border-blue-600 bg-blue-600 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-blue-700 dark:border-[#3b82f6] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb]"
                  style={{ fontFamily: monoFont }}
                >
                  <Mail className="h-4 w-4" />
                  Request access
                </a>
              )}
              <Link href="/contact" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground" style={{ fontFamily: monoFont }}>
                HUIX-2099 liaison
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* [03] About — asymmetric doc + margin column */}
        <section id="about" className="relative z-10 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="lg:grid lg:grid-cols-12 lg:gap-0">
              <div className="lg:col-span-8 lg:border-r lg:border-border lg:pr-10">
                <DocSectionRule
                  index="03"
                  eyebrow="[03] Narrative · vision"
                  title="About Monrovia Hustle"
                  subtitle="Design brief: street-scale survival drama with systems-first clarity — written like a mission summary, not marketing fluff."
                />

                <div className="mt-8 max-w-none space-y-5 text-[15px] leading-[1.8] text-foreground/95">
                  <p>
                    <strong className="font-semibold text-foreground">Monrovia Hustle</strong> is a raw, unfiltered study of street life,
                    ambition, and survival — built from Liberia outward. The world is grounded in real rhythm: junctions, noise, pressure,
                    and the quiet after midnight.
                  </p>
                  <p>
                    Players move through Monrovia-adjacent streets where decisions compound. Reputation, connections, and risk trade off
                    in missions that privilege readability and strategy over spectacle for its own sake.
                  </p>
                  <p>
                    The project is part of a wider push: African-led game development that is bold, specific, and unapologetic about culture
                    and context.
                  </p>
                </div>

                <div className="mt-12 border border-border bg-card p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-700 dark:text-[#93c5fd]" style={{ fontFamily: monoFont }}>
                    Vision statement
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/95">
                    Ship a definitive Liberian street saga on the global stage — one coherent universe where story, systems, and identity
                    share the same spec.
                  </p>
                  <p className="mt-8 text-lg font-bold uppercase tracking-[0.1em] text-foreground" style={{ fontFamily: "Mohican, sans-serif" }}>
                    THE HUSTLE NEVER STOPS_
                  </p>
                  <p className="mt-2 text-sm text-foreground/90">
                    This is <strong className="text-[#bf0d3e]">Monrovia Hustle</strong>.
                  </p>
                </div>

                <p className="mt-8 text-[11px] leading-relaxed text-muted-foreground/80" style={{ fontFamily: monoFont }}>
                  NOTICE · Unauthorized reproduction or redistribution of demo binaries or source assets is prohibited.
                </p>

                <div className="mt-10 border-t border-border pt-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    Rights block
                  </p>
                  <p className="mt-3 text-sm font-semibold">Developed by Victor Edet Coleman</p>
                  <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-[#93c5fd]">Licensed to HUIX-2099</p>
                </div>
              </div>

              <aside className="mt-10 border-t border-border pt-10 lg:col-span-4 lg:mt-0 lg:border-t-0 lg:border-l lg:border-border lg:pl-8 lg:pt-14">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Margin · jump index
                </p>
                <ul className="mt-4 space-y-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  <li>
                    <a href="#download" className="border-b border-transparent hover:border-foreground hover:text-foreground">
                      02 Build
                    </a>
                  </li>
                  <li>
                    <a href="#cast" className="border-b border-transparent hover:border-foreground hover:text-foreground">
                      04 Crew
                    </a>
                  </li>
                  <li>
                    <a href="#game-scenes" className="border-b border-transparent hover:border-foreground hover:text-foreground">
                      04B Scenes · locked
                    </a>
                  </li>
                  <li>
                    <a href="#ref-index-heading" className="border-b border-transparent hover:border-foreground hover:text-foreground">
                      05 Visual index
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="border-b border-transparent hover:border-foreground hover:text-foreground">
                      06 Funding
                    </a>
                  </li>
                </ul>
                <div className="mt-10 border border-dashed border-border p-4 text-[10px] leading-relaxed text-muted-foreground" style={{ fontFamily: monoFont }}>
                  DOC STYLE · Sections follow a fixed index (01–06). Typography and rules mirror technical briefs / HUD dossiers.
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* [04] Cast */}
        <section id="cast" className="relative z-10 border-b border-border bg-muted/10 dark:bg-background">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <DocSectionRule
              index="04"
              eyebrow="[04] Personnel · credits"
              title="Crew overview"
              subtitle="Creator dossier and open funding slot — same card language as the main Team registry, framed under this document."
              aside={
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  <Clapperboard className="h-4 w-4 text-[#bf0d3e]" />
                  CAST
                </div>
              }
            />
            <div className="mt-10 grid gap-6 border border-border bg-background/50 p-4 md:grid-cols-2 md:p-6 dark:bg-background/30">
              {victorMember ? (
                <TeamProfileCard
                  variant="member"
                  member={victorMember}
                  index={0}
                  taglineOverride="Creator of Monrovia Hustle — modeling, animation, programming, and graphics. Licensed to HUIX-2099."
                  focusOverride="Modeling · Animation · Programming · Graphics"
                />
              ) : null}
              <TeamProfileCard
                variant="funders"
                index={1}
                title="Funders needed"
                badge="OPEN"
                locationLine="Monrovia Hustle · Campaign"
                tagline="We are seeking backers, partners, and publishers to grow the demo into the full game. Reach out to discuss funding, co-production, or distribution."
                email="huixtech2099@gmail.com"
                qrValue="https://huix.amaratech.io/products/monrovia-hustle#support"
                barcodeValue="HUIX-MH-FUND"
                href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%20%E2%80%94%20Funding%20%2F%20Partners"
                ctaLabel="Inquire"
                focusTags={["Funding", "Partners"]}
                imageSrc={LOGO_SRC}
                imageAlt="Monrovia Hustle"
              />
            </div>
            <div className="mt-6 flex gap-3 border border-dashed border-border bg-card/40 px-4 py-4">
              <Mic className="mt-0.5 h-4 w-4 shrink-0 text-[#bf0d3e]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-foreground" style={{ fontFamily: monoFont }}>
                  Voice cast · TBD
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Listing deferred until recording milestones. Contact for VO interest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* [04B] Locked scenes */}
        <section id="game-scenes" className="relative z-10 overflow-hidden border-b border-border bg-muted/20 dark:bg-[#060606]" aria-labelledby="game-scenes-heading">
          {isDark ? <LiberiaFlagAtmosphere /> : null}
          <div className="relative mx-auto max-w-6xl px-4 py-14">
            <h2 id="game-scenes-heading" className="sr-only">
              Locked game scenes
            </h2>
            <DocSectionRule
              index="04B"
              eyebrow="[04B] Game scene · classified"
              title="Scenes · locked"
              subtitle="Progression-gated beats. Cards mirror restricted annexes in a design bible — no preview imagery until unlock conditions are met."
              aside={
                <p className="max-w-[200px] text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Atmosphere: V. E. Coleman · LR flag art · dark only
                </p>
              }
            />
            <ul className="mt-10 grid gap-0 border border-border sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-border">
              {lockedGameScenes.map((scene) => (
                <li key={scene.sceneId} className="border-b border-border lg:border-b-0">
                  <article className="flex h-full flex-col bg-background/70 dark:bg-black/50">
                    <div className="relative flex min-h-[200px] flex-1 flex-col items-center justify-center border-b border-border">
                      <div
                        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
                        style={{
                          backgroundImage: `url('${LIBERIA_FLAG_SRC}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "blur(3px)",
                        }}
                      />
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_9px,rgba(0,0,0,0.03)_9px,rgba(0,0,0,0.03)_10px)] dark:bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,255,255,0.025)_10px,rgba(255,255,255,0.025)_11px)]" />
                      <RegMarks className="!text-foreground/20" />
                      <div className="relative flex flex-col items-center gap-3 py-12">
                        <div className="flex h-14 w-14 items-center justify-center border-2 border-foreground/20 bg-background/90 dark:bg-black/70">
                          <Lock className="h-6 w-6 text-foreground/45" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                          Locked
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#bf0d3e] dark:text-[#f87171]" style={{ fontFamily: monoFont }}>
                        {scene.sceneId}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold text-foreground">{scene.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{scene.note}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* [05] Reference index */}
        <section className="relative z-10 overflow-hidden border-b border-border py-14 dark:bg-[#070707]" aria-labelledby="ref-index-heading">
          {isDark ? <LiberiaFlagAtmosphere /> : null}
          <div className="relative mx-auto max-w-6xl px-4">
            <DocSectionRule
              index="05"
              eyebrow="[05] Ref · in-game & UI"
              title="Visual reference index"
              subtitle="Production lanes with traceable evidence. Each row is a spec entry — not a gallery tile."
              aside={
                <p style={{ fontFamily: monoFont }} className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="text-foreground">MODULE</span>
                  <span className="mx-2">|</span>
                  MH-VIS-IDX v0.1
                </p>
              }
            />

            <div className="mt-10 space-y-0 border border-border">
              {visualRefIndex.map((row, i) => (
                <article key={row.refId} className={`grid md:grid-cols-12 md:divide-x md:divide-border ${i > 0 ? "border-t border-border" : ""}`}>
                  <div className="flex flex-row items-start gap-6 p-6 md:col-span-2 md:flex-col md:gap-4">
                    <span className="text-4xl font-light text-foreground/20 sm:text-5xl" style={{ fontFamily: monoFont }}>
                      {row.num}
                    </span>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        Ref id
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ fontFamily: monoFont }}>
                        {row.refId}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 md:col-span-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      Lane · purpose
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">{row.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.purpose}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-2 border-t border-border pt-4 text-[10px] uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                      <dt className="text-muted-foreground/70">Lane</dt>
                      <dd>{row.lane}</dd>
                      <dt className="text-muted-foreground/70">Capture</dt>
                      <dd>{row.capture}</dd>
                    </dl>
                  </div>
                  <div className="p-4 md:col-span-6 md:p-6">
                    <HudFrame className="border border-border bg-muted">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={`${ASSET_BASE}/${row.file}`}
                          alt={`${row.title} — ${row.lane} reference`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                      <div className="flex items-center justify-between border-t border-border bg-card px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        <span>Evidence · {row.file}</span>
                        <span className="text-foreground/60">Fig. {row.num}</span>
                      </div>
                    </HudFrame>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* [06] Funding */}
        <section id="support" className="relative z-10 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <DocSectionRule
              index="06"
              eyebrow="[06] Funding · operations"
              title="Next build capitalization"
              subtitle="Capital expands missions, audio, performance, and art. Interface follows procurement language — clear ask, clear channel."
              aside={
                <p style={{ fontFamily: monoFont }} className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  STATUS <span className="text-[#bf0d3e]">· OPEN</span>
                </p>
              }
            />
            <div className="mt-10 border border-border border-[#bf0d3e]/35 bg-gradient-to-br from-muted/40 to-background p-8 dark:from-[#140508]/90 dark:to-background lg:p-10">
              <Cpu className="h-7 w-7 text-[#bf0d3e]" strokeWidth={1.25} />
              <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                Action · contact channel
              </p>
              <h3 className="mt-2 text-xl font-bold uppercase tracking-[0.1em] text-foreground" style={{ fontFamily: "Mohican, sans-serif" }}>
                Fund the next milestone_
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Use email for term sheets, co-production, or publisher intros. Leadership page lists corporate officers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%20%E2%80%94%20Funding%20%2F%20Support"
                  className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-background hover:opacity-90"
                  style={{ fontFamily: monoFont }}
                >
                  <Mail className="h-4 w-4" />
                  Open thread
                </a>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground hover:bg-muted/40"
                  style={{ fontFamily: monoFont }}
                >
                  Leadership roster
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-border bg-muted/10">
          <div
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-[9px] uppercase tracking-[0.14em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <span>END OF DOSSIER · PRD-MH-003</span>
            <span>HUIX-2099 · {new Date().getFullYear()}</span>
          </div>
        </footer>
      </main>

      <Footer />
      </MonroviaPassGate>
    </>
  )
}
