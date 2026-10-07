"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GitBranch,
  Heart,
  Mail,
  MapPin,
  Play,
  Users,
  Wallet,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LiberiaCountiesMap } from "@/components/monrovia-hustle/liberia-counties-map"
import { MonroviaMatureSticker } from "@/components/monrovia-hustle/monrovia-mature-sticker"
import { MH_VOICE_CAST_POSTER, MH_VOICE_CAST_VIDEO_ID } from "@/components/monrovia-hustle/concept-voice-cast-video"

const NAVY = "#002868"
const RED = "#BF0A30"
const CONCEPT_HREF = "/products/monrovia-hustle/concept"
const ASSETS = "/products/Monrovia_hustle_Demo_Campane"
const CHAR = `${ASSETS}/cast_concept/CHARACTERS`
const hand = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: "italic" as const }

const CAST = [
  { name: "Jayboy", role: "The hustler · lead", src: `${CHAR}/JAYBOY.jpeg`, tint: RED },
  { name: "Trapper", role: "Street connect", src: `${CHAR}/Trapper.jpeg`, tint: NAVY },
  { name: "Angel", role: "The ex · love interest", src: `${CHAR}/angel.jpeg`, tint: "#f5f5f5" },
  { name: "Uncle Flomo", role: "Family mentor", src: `${CHAR}/uncle_flomo.jpeg`, tint: RED },
]

const FEATURES = [
  { icon: MapPin, label: "Open Monrovia" },
  { icon: Users, label: "Street life" },
  { icon: BookOpen, label: "Comic story" },
  { icon: GitBranch, label: "Real choices" },
  { icon: Wallet, label: "Stack LD" },
  { icon: Play, label: "Voiced cast" },
]

/* ---------- Doodles ---------- */

function Star({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" fill={color} />
    </svg>
  )
}

function Bolt({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" fill={color} />
    </svg>
  )
}

function Squiggle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={className} fill="none" aria-hidden>
      <path d="M2 14 C 10 2, 18 22, 26 12 S 42 2, 50 12 S 66 22, 78 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Crown({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 28" className={className} fill="none" aria-hidden>
      <path d="M3 24 L6 6 L14 16 L20 3 L26 16 L34 6 L37 24 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

function CurlArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M8 6 C 2 26, 14 46, 46 50" />
      <path d="M38 42 L47 50 L37 56" />
    </svg>
  )
}

function Smiley({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <circle cx="20" cy="20" r="16" />
      <path d="M13 24 C 16 30, 24 30, 27 24" />
      <path d="M14 15 v3 M26 15 v3" />
    </svg>
  )
}

function Splat({ className = "", color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        d="M44 30 C 70 4, 120 10, 140 34 C 160 20, 196 36, 186 70 C 206 96, 184 130, 160 132 C 168 162, 130 190, 104 168 C 84 196, 34 184, 38 150 C 6 144, 0 104, 24 88 C 4 64, 20 34, 44 30 Z M176 168 a10 10 0 1 0 0.1 0 Z M16 176 a7 7 0 1 0 0.1 0 Z"
        fill={color}
      />
    </svg>
  )
}

function SectionTitle({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <h2 className="flex items-center gap-3 text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">
      {children}
      <Squiggle className="h-5 w-16" color={accent ?? RED} />
    </h2>
  )
}

export default function MonroviaHustlePage() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground selection:bg-[#002868] selection:text-white">
      <Navbar />

      <main className="relative flex-1 pt-20">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24">
          <Splat className="pointer-events-none absolute -left-24 -top-24 w-[420px] opacity-90" color={NAVY} />
          <Splat className="pointer-events-none absolute -right-28 top-24 w-[300px] rotate-45 opacity-90" color={RED} />
          <Splat className="pointer-events-none absolute -bottom-24 -left-20 w-[260px] rotate-180 opacity-80" color={NAVY} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Copy */}
            <div className="relative">
              <div className="flex items-end gap-3">
                <span className="text-2xl text-foreground/90 sm:text-3xl" style={hand}>
                  How da body?
                </span>
                <CurlArrow className="h-10 w-10 text-foreground/70" />
                <Crown className="mb-6 h-7 w-10" color={RED} />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.6 }}
                className="mt-2 text-6xl font-black uppercase italic leading-[0.82] tracking-tighter sm:text-7xl lg:text-[7.5rem]"
                style={{ textShadow: `5px 5px 0 ${NAVY}` }}
              >
                Monrovia
                <br />
                <span style={{ color: RED, textShadow: "5px 5px 0 rgba(0,0,0,0.35)" }}>Hustle</span>
              </motion.h1>
              <svg viewBox="0 0 400 24" className="mt-3 h-5 w-[min(420px,85%)]" aria-hidden>
                <path d="M4 16 C 120 4, 260 4, 396 12" stroke={RED} strokeWidth="8" strokeLinecap="round" fill="none" />
              </svg>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold sm:text-lg">
                <span>3D Narrative RPG</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                <span>Open city</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                <span>Made in Liberia</span>
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Jayboy is 24, broke, and freshly dumped on Carey Street. Stack Liberian Dollars, dodge bad deals, and decide how far you push the
                hustle in downtown Monrovia.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#trailer"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_8px_0_-2px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
                  style={{ background: RED }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                    <Play className="h-3 w-3 fill-current" style={{ color: RED }} />
                  </span>
                  Watch trailer
                </a>
                <Link
                  href={CONCEPT_HREF}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#002868] px-6 py-3 text-sm font-bold transition-colors hover:bg-[#002868] hover:text-white dark:border-[#5b8def]"
                >
                  Play the concept
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <a href="#trailer" className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex h-7 w-4 justify-center rounded-full border border-current pt-1">
                  <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="h-1.5 w-0.5 rounded-full bg-current"
                  />
                </span>
                Scroll down
              </a>
            </div>

            {/* Character */}
            <div className="relative mx-auto w-full max-w-md">
              <Star className="absolute -left-2 top-4 h-9 w-9" color={RED} />
              <Star className="absolute -right-4 top-1/3 h-6 w-6" color="#ffffff" />
              <Bolt className="absolute -left-8 bottom-20 h-10 w-10" color={RED} />
              <Smiley className="absolute -left-14 top-1/2 h-10 w-10" color={NAVY} />
              <Squiggle className="absolute -right-6 -top-2 h-6 w-24" color={NAVY} />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative overflow-hidden rounded-[40%_60%_55%_45%/50%_45%_55%_50%] border-[6px] border-white shadow-[12px_12px_0_0_#002868]"
              >
                <Image
                  src={`${CHAR}/JAYBOY.jpeg`}
                  alt="Jayboy — Monrovia Hustle 3D lead character"
                  width={768}
                  height={1024}
                  className="h-auto w-full object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -8 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-2 -top-6 w-40 rounded-[50%] px-4 py-5 text-center text-sm font-black uppercase leading-tight text-white shadow-lg sm:-right-10"
                style={{ background: RED }}
              >
                Let&apos;s hustle, my people!
                <span
                  className="absolute -bottom-2 left-8 h-5 w-5 rotate-45"
                  style={{ background: RED }}
                  aria-hidden
                />
              </motion.div>

              <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border-2 border-white bg-black px-3 py-2 text-white shadow-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: RED }}>
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider">Ep. 01 · Carey Street</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-6 px-4 pb-20 sm:px-6 lg:px-10">
          {/* ============ TRAILER ============ */}
          <section id="trailer" className="grid scroll-mt-28 items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="flex items-center gap-3">
                <Star className="h-7 w-7" color={RED} />
                <h2 className="text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">Trailer</h2>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                A quick look at the streets, the cast, and the voices bringing Monrovia to life.
              </p>
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: RED }}
              >
                Watch now
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2" style={{ borderColor: RED }}>
                  <Play className="h-2.5 w-2.5 fill-current" />
                </span>
              </button>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${MH_VOICE_CAST_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title="Monrovia Hustle 3D trailer"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label="Play trailer">
                  <img src={MH_VOICE_CAST_POSTER} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-[0_0_0_10px_rgba(191,10,48,0.3)] transition-transform group-hover:scale-110"
                    style={{ background: RED }}
                  >
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </span>
                </button>
              )}
            </div>
          </section>

          {/* ============ CAST ============ */}
          <section className="rounded-3xl border border-border bg-card p-6 sm:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <SectionTitle>Meet the cast</SectionTitle>
              <Link href={CONCEPT_HREF} className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: RED }}>
                Full dossier
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {CAST.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={CONCEPT_HREF} className="group block overflow-hidden rounded-2xl border border-border bg-background">
                    <div className="relative aspect-[4/3] overflow-hidden" style={{ background: c.tint }}>
                      <Image
                        src={c.src}
                        alt={`${c.name} — Monrovia Hustle 3D`}
                        fill
                        sizes="(max-width:1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-tight">{c.name}</h3>
                        <p className="text-xs text-muted-foreground">{c.role}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ============ FEATURES ============ */}
          <section className="relative flex flex-wrap items-center gap-x-10 gap-y-6 px-2 py-6 sm:px-6">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">What you do</h2>
              <Squiggle className="mt-1 h-4 w-24" color={RED} />
            </div>
            <div className="flex flex-1 flex-wrap justify-between gap-6">
              {FEATURES.map((f, i) => (
                <div key={f.label} className="flex w-20 flex-col items-center gap-2 text-center">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-transform hover:-rotate-6 ${
                      i % 2
                        ? "border-[#002868] bg-[#002868]/10 text-[#002868] dark:border-[#5b8def] dark:bg-[#5b8def]/10 dark:text-[#8fb0ff]"
                        : "border-[#BF0A30] bg-[#BF0A30]/10 text-[#BF0A30]"
                    }`}
                  >
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ============ ABOUT ============ */}
          <section className="grid items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden rounded-2xl p-3" style={{ background: RED }}>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={`${ASSETS}/images/${encodeURIComponent("WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg")}`}
                  alt="The HUIX-2099 team at the Monrovia Hustle studio in Monrovia"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute left-6 top-6 rotate-[-6deg] rounded-md bg-white px-3 py-2 text-sm font-black uppercase leading-tight text-black shadow-md">
                Raw
                <br />
                Real
                <br />
                <span style={{ color: RED }}>Liberian</span>
              </div>
              <Crown className="absolute bottom-5 right-5 h-8 w-12" color="#ffffff" />
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">About the game</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  <strong className="text-foreground">Monrovia Hustle 3D</strong> is a slice-of-life urban RPG built in Monrovia by{" "}
                  <Link href="/team/victor" className="font-semibold text-foreground underline decoration-[#BF0A30] underline-offset-4">
                    Victor Edet Coleman
                  </Link>{" "}
                  and the HUIX-2099 crew — Liberian Krio and English, mobile-money culture, and real choices.
                </p>
                <p>
                  Take shady missions from fast-talkers like Trapper, or stack LD, dress sharp, and aim for a seat at Uncle Flomo&apos;s desk. In
                  Monrovia, your hustle shapes survival.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link href={CONCEPT_HREF} className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: RED }}>
                  Read the dossier
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-2" style={{ borderColor: RED }}>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
                <MonroviaMatureSticker variant="badge" size="sm" />
              </div>
            </div>
          </section>

          {/* ============ CTA ============ */}
          <section className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr_auto]">
            <h2 className="text-3xl font-black uppercase italic leading-tight tracking-tighter sm:text-4xl">
              Let&apos;s hustle
              <br />
              <span className="relative inline-block px-3">
                together!
                <svg viewBox="0 0 220 70" className="absolute -inset-x-1 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+8px)]" fill="none" aria-hidden>
                  <ellipse cx="110" cy="35" rx="104" ry="29" stroke={RED} strokeWidth="3" transform="rotate(-3 110 35)" />
                </svg>
              </span>
            </h2>

            <div className="space-y-3 text-sm">
              <a href="mailto:huixtech2099@gmail.com" className="flex items-center gap-3 hover:underline">
                <Mail className="h-4 w-4" style={{ color: RED }} />
                huixtech2099@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4" style={{ color: RED }} />
                Monrovia, Liberia
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/monrovia-hustle/donate"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white"
                style={{ background: RED }}
              >
                <Heart className="h-4 w-4" />
                Support the game
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#002868] px-5 py-2.5 text-sm font-bold transition-colors hover:bg-[#002868] hover:text-white dark:border-[#5b8def]"
              >
                Partner
              </Link>
            </div>

            <Star className="pointer-events-none absolute -right-2 -top-2 h-10 w-10" color={NAVY} />
            <Bolt className="pointer-events-none absolute bottom-3 right-1/3 h-7 w-7 opacity-60" color={RED} />
          </section>
        </div>

        <LiberiaCountiesMap
          sectionLabel="MH-3D · LIBERIA MAP"
          title="ROOTED IN MONROVIA · ALL 15 COUNTIES"
          description="The game world starts in Liberia's capital — every county marked on the map. Monrovia is where Monrovia Hustle 3D lives."
          className="border-t border-[#002868]/20 bg-[#002868]/[0.03] dark:bg-[#10223a]/30"
          mapHeight="min(520px, 65vh)"
        />
      </main>
      <Footer />
    </div>
  )
}
