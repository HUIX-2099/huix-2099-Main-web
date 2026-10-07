"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { ComponentType } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  ExternalLink,
  Facebook,
  GitBranch,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircleWarning,
  Mic,
  Palette,
  Phone,
  Play,
  Target,
  Twitter,
  Users,
  Wallet,
  Youtube,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClickToViewImage } from "@/components/click-to-view-image"
import { MonroviaMatureSticker } from "@/components/monrovia-hustle/monrovia-mature-sticker"
import { ConceptVoiceCastVideo } from "@/components/monrovia-hustle/concept-voice-cast-video"
import { ConceptDownloadButton } from "@/components/monrovia-hustle/concept-download-button"
import { MonroviaCastShowcase } from "@/components/monrovia-hustle/monrovia-cast-showcase"
import { VideoAmbientBackdrop } from "@/components/monrovia-hustle/video-ambient-backdrop"
import {
  MH_TRAILER_AMBIENT_EMBED_URL,
  MH_TRAILER_HERO_EMBED_URL,
  MH_TRAILER_YOUTUBE_ID,
  MH_TRAILER_YOUTUBE_URL,
} from "@/components/monrovia-hustle/concept-hero"
import { monroviaConceptArtists, monroviaConceptArtistPageHref } from "@/lib/monrovia-hustle/concept-artists"
import { monroviaCastMembers } from "@/lib/monrovia-hustle/voice-cast"
import { cn } from "@/lib/utils"

const NAVY = "#002868"
const RED = "#BF0A30"
const ASSETS = "/products/Monrovia_hustle_Demo_Campane"
const CHAR = `${ASSETS}/cast_concept/CHARACTERS`
const STUDIO_EMAIL = "huixtech2099@gmail.com"
const STUDIO_MAILTO = `mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Inquiry`
const YOUTUBE_CHANNEL = "https://www.youtube.com/@HUIX-2099"
const MH_GAME_LOGO = `${ASSETS}/lighticon.png`
const MH_ICON_DARK = `${ASSETS}/darkicon.png`
const MH_LOGO_LIGHT = `${ASSETS}/light_mode_logo.png`
const MH_LOGO_DARK = `${ASSETS}/dark_mode_logo.png`
const MH_TRAILER_POSTER = `https://i.ytimg.com/vi/${MH_TRAILER_YOUTUBE_ID}/hqdefault.jpg`
const hand = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: "italic" as const }

const TAGS = ["Single-player", "Slice-of-life", "Narrative", "Open world", "Liberia", "Comic story", "Street RPG"]

const CAST = [
  { name: "Jayboy", role: "The hustler · lead · 24", src: `${CHAR}/JAYBOY.jpeg`, tint: RED },
  { name: "Trapper", role: "Street connect", src: `${CHAR}/Trapper.jpeg`, tint: NAVY },
  { name: "Angel", role: "The ex · love interest", src: `${CHAR}/angel.jpeg`, tint: "#f5f5f5" },
  { name: "Uncle Flomo", role: "Family mentor", src: `${CHAR}/uncle_flomo.jpeg`, tint: RED },
]

const FEATURES = [
  {
    icon: MapPin,
    title: "Urban Liberia flavour",
    text: "A stylized coastal capital sandbox — neighbourhoods, markets, and back routes you can roam.",
  },
  { icon: Users, title: "Dynamic street life", text: "Voiced NPCs, market energy, ambient pressure lines — the city reacts around you." },
  { icon: BookOpen, title: "Comic-book narrative", text: "Emotional beats blend illustrated comics with 3D gameplay." },
  { icon: GitBranch, title: "Real choices", text: "Branching dialogue — tough on the corner or low-key — the city remembers how you hustle." },
  { icon: Wallet, title: "Live the hustle", text: "Chase Liberian Dollars, errands, side moves — flip value into wardrobe and branching paths." },
  { icon: Mic, title: "Liberian voice cast", text: "Liberian English and Krio performances from a local cast, mixed in-engine." },
]

const CONCEPT_NOTES = [
  {
    title: "Vision first",
    text: "Monrovia Hustle 3D is a playable concept: a vertical slice of Monrovia flavour, the hustle loop, feel, and world we intend to scale when we have stronger tools, more time, and ideally a team. That's not an excuse — it's how a lot of serious games start.",
  },
  {
    title: "What you're really hearing",
    text: "This isn't a AAA-studio product yet. It's a proof of concept built solo on tight hardware, meant to show the direction clearly so we can grow it with the right support — without overpromising a “finished” commercial box today.",
  },
  {
    title: "Reality (context, not a flex)",
    text: "Right now it's solo development on minimal hardware. This release is about proving the idea, collecting feedback and metrics, and shipping honesty — not claiming we're already a full retail game.",
  },
  {
    title: "What we're looking for",
    text: "Partners and investors who care about representation and West African urban stories — and who can help with funding, polish, and distribution (mobile readiness, performance, marketing).",
  },
]

const GOALS = [
  "Downloads / plays of the build",
  "Watch time on trailer or average session length",
  "Short survey signal (e.g. “Would you play weekly?”)",
  "Waitlist interest for a mobile-capable release",
  "One tight trailer (30–60s) that sells the promise",
]

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

const SOCIALS: { label: string; href: string; icon: ComponentType<{ className?: string }>; tone: string }[] = [
  { label: "X / Twitter", href: "https://x.com/Huix2099", icon: Twitter, tone: "hover:text-[#1D9BF0]" },
  { label: "Instagram", href: "https://www.instagram.com/huix.2099/", icon: Instagram, tone: "hover:text-[#E4405F]" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572485499528", icon: Facebook, tone: "hover:text-[#1877F2]" },
  { label: "YouTube", href: YOUTUBE_CHANNEL, icon: Youtube, tone: "hover:text-[#FF0000]" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-coleman-4731701a5/", icon: LinkedinIcon, tone: "hover:text-[#0A66C2]" },
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

function MhLogo({ className = "" }: { className?: string }) {
  return (
    <>
      <Image src={MH_LOGO_LIGHT} alt="Monrovia Hustle" width={940} height={260} className={cn("h-auto w-auto dark:hidden", className)} />
      <Image src={MH_LOGO_DARK} alt="Monrovia Hustle" width={780} height={240} className={cn("hidden h-auto w-auto dark:block", className)} />
    </>
  )
}

function MhIcon({ className = "" }: { className?: string }) {
  return (
    <>
      <Image src={MH_GAME_LOGO} alt="" width={64} height={64} className={cn("object-contain dark:hidden", className)} />
      <Image src={MH_ICON_DARK} alt="" width={64} height={64} className={cn("hidden object-contain dark:block", className)} />
    </>
  )
}

function SectionTitle({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <h2 className="flex items-center gap-3 text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">
      <MhIcon className="h-9 w-9 shrink-0 not-italic" />
      {children}
      <Squiggle className="h-5 w-16" color={accent ?? RED} />
    </h2>
  )
}

export default function MonroviaHustlePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground selection:bg-[#002868] selection:text-white">
      <Navbar />

      <main className="relative flex-1 pt-20">
        {/* ============ HERO ============ */}
        <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24">
          <VideoAmbientBackdrop posterSrc={MH_TRAILER_POSTER} youtubeEmbedSrc={MH_TRAILER_AMBIENT_EMBED_URL} className="-z-10" />
          <Splat className="pointer-events-none absolute -left-24 -top-24 w-[420px] opacity-80" color={NAVY} />
          <Splat className="pointer-events-none absolute -right-28 top-24 w-[300px] rotate-45 opacity-80" color={RED} />
          <Splat className="pointer-events-none absolute -bottom-24 -left-20 w-[260px] rotate-180 opacity-70" color={NAVY} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            {/* Copy */}
            <div className="relative">
              <MhLogo className="mb-6 h-14 sm:h-16" />
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
                  href={MH_TRAILER_YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_8px_0_-2px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
                  style={{ background: RED }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                    <Play className="h-3 w-3 fill-current" style={{ color: RED }} />
                  </span>
                  Watch on YouTube
                </a>
                <a
                  href="#voice-actors"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#002868] px-6 py-3 text-sm font-bold transition-colors hover:bg-[#002868] hover:text-white dark:border-[#5b8def]"
                >
                  Meet the cast
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 max-w-md">
                <ConceptDownloadButton variant="compact" className="w-full" />
              </div>

              <div className="mt-5 flex max-w-lg flex-wrap gap-2">
                {TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-full border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
                      i % 2 ? "border-[#002868] dark:border-[#5b8def]" : "border-[#BF0A30]",
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#cast" className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
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

            {/* Trailer video */}
            <div id="trailer" className="relative mx-auto w-full max-w-2xl scroll-mt-28">
              <Star className="absolute -left-4 -top-4 z-10 h-9 w-9" color={RED} />
              <Star className="absolute -right-3 top-1/3 z-10 h-6 w-6" color="#ffffff" />
              <Bolt className="absolute -left-8 bottom-10 z-10 h-10 w-10" color={RED} />
              <Smiley className="absolute -left-12 top-1/3 z-10 h-10 w-10" color={NAVY} />
              <Squiggle className="absolute -right-4 -top-8 z-10 h-6 w-24" color={NAVY} />

              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative overflow-hidden rounded-[28px] border-[6px] border-white bg-black shadow-[12px_12px_0_0_#002868]"
              >
                <div className="relative aspect-video w-full">
                  <iframe
                    src={MH_TRAILER_HERO_EMBED_URL}
                    title="Monrovia Hustle 3D — gameplay trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                  />
                </div>
                <span className="pointer-events-none absolute left-3 top-3 flex size-11 items-center justify-center rounded-xl bg-white/95 p-1 shadow-md">
                  <Image src={MH_GAME_LOGO} alt="" width={40} height={40} className="size-8 object-contain" />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -8 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-2 -top-10 z-10 w-40 rounded-[50%] px-4 py-5 text-center text-sm font-black uppercase leading-tight text-white shadow-lg sm:-right-8"
                style={{ background: RED }}
              >
                Let&apos;s hustle, my people!
                <span className="absolute -bottom-2 left-8 h-5 w-5 rotate-45" style={{ background: RED }} aria-hidden />
              </motion.div>

              <div className="absolute -bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-white bg-black px-3 py-2 text-white shadow-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: RED }}>
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider">Official gameplay trailer</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-6 px-4 pb-20 sm:px-6 lg:px-10">

          {/* ============ CAST ============ */}
          <section id="cast" className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <SectionTitle>Meet the cast</SectionTitle>
              <a href="#voice-actors" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: RED }}>
                Voices behind them
                <ArrowRight className="h-4 w-4" />
              </a>
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
                  <a href="#voice-actors" className="group block overflow-hidden rounded-2xl border border-border bg-background">
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
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ============ FEATURES ============ */}
          <section className="px-2 py-6 sm:px-6">
            <div className="mb-6">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">What you do</h2>
              <Squiggle className="mt-1 h-4 w-24" color={RED} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <div key={f.title} className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 transition-transform hover:-rotate-6",
                      i % 2
                        ? "border-[#002868] bg-[#002868]/10 text-[#002868] dark:border-[#5b8def] dark:bg-[#5b8def]/10 dark:text-[#8fb0ff]"
                        : "border-[#BF0A30] bg-[#BF0A30]/10 text-[#BF0A30]",
                    )}
                  >
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-tight">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Why this game matters:</strong> Monrovia Hustle 3D is a pioneer concept built to put modern West
              African street culture on the global gaming map — without Hollywood clichés. An honest, on-the-ground read on pressure, pride, and hustle
              in Liberia&apos;s capital.
            </p>
          </section>

          {/* ============ VOICE CAST ============ */}
          <ConceptVoiceCastVideo />

          <section id="voice-actors" className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10">
            <div className="mb-6">
              <SectionTitle>Voice cast &amp; audio</SectionTitle>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Hover a name or photo to preview the in-game character — click through to team profiles or Google.{" "}
                <strong className="text-foreground">Jayboy</strong> is performed by <strong className="text-foreground">Victor Edet Coleman</strong>.
              </p>
            </div>
            <MonroviaCastShowcase
              members={monroviaCastMembers}
              audioIntro={{
                id: "sound-audio",
                title: "Sound & audio",
                description:
                  "Mix, capture, and in-engine clarity for the prototype — a separate lane from the voice cast. Dominic Rockson is the sound engineer on Monrovia Hustle 3D.",
              }}
            />
          </section>

          {/* ============ ARTISTS ============ */}
          <section id="artists" className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10" aria-label="Art and artists">
            <div className="mb-6 flex items-center gap-3">
              <Palette className="h-7 w-7" style={{ color: RED }} />
              <SectionTitle>Art &amp; artists</SectionTitle>
            </div>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The people steering how the slice <strong className="text-foreground">reads on screen</strong> — art direction, key art, music
              collaborators, and future credits.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {monroviaConceptArtists.map((a) => {
                const artistHref = monroviaConceptArtistPageHref(a.slug)
                const videoSrc = "videoSrc" in a ? a.videoSrc : undefined
                return (
                  <article
                    key={a.slug}
                    className={cn(
                      "group overflow-hidden rounded-2xl border border-border bg-background",
                      videoSrc ? "grid md:col-span-2 md:grid-cols-3" : "flex flex-col sm:flex-row",
                    )}
                  >
                    {videoSrc && (
                      <div className="relative aspect-square w-full overflow-hidden bg-muted/50">
                        <video src={videoSrc} poster={a.imageSrc} autoPlay loop muted playsInline controls className="size-full object-cover" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "relative overflow-hidden bg-muted/40",
                        videoSrc ? "aspect-square w-full" : "aspect-[16/10] w-full shrink-0 sm:w-2/5",
                      )}
                    >
                      <ClickToViewImage
                        src={a.imageSrc}
                        alt={a.imageAlt}
                        triggerClassName="absolute inset-0 block size-full"
                        showViewHint
                        viewHintPlacement="bottom"
                      >
                        <Image
                          src={a.imageSrc}
                          alt=""
                          fill
                          className={cn(
                            "transition-transform duration-500 group-hover:scale-[1.02]",
                            videoSrc ? "object-cover" : "object-contain",
                          )}
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      </ClickToViewImage>
                      <span className="pointer-events-none absolute right-2.5 top-2.5 z-20 flex size-10 items-center justify-center rounded-lg bg-white/95 p-1 shadow-md">
                        <Image src={MH_GAME_LOGO} alt="" width={32} height={32} className="size-7 object-contain" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                      <Link href={artistHref}>
                        <h3 className="text-lg font-black uppercase tracking-tight transition-colors group-hover:text-[#BF0A30]">{a.name}</h3>
                      </Link>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#002868] dark:text-[#8fb0ff]">{a.discipline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <Link href={artistHref} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: RED }}>
                          Full artist page
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href={a.facebookHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:border-[#1877F2]/50"
                        >
                          <Facebook className="h-3.5 w-3.5 text-[#1877F2]" />
                          Facebook
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </a>
                      </div>
                      <p className="mt-3 text-[11px] italic text-muted-foreground">Credits update as partners join — no implied endorsement yet.</p>
                    </div>
                  </article>
                )
              })}
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
                  Set against downtown Monrovia, the game follows <strong className="text-foreground">Jboy</strong>, a 24-year-old navigating a tough
                  economy. When his girlfriend, Angel, breaks up with him over money and stability, Jboy lands on the unforgiving pavement of Carey and
                  Benson streets.
                </p>
                <p>
                  Caught between his mother&apos;s grounded wisdom and the fast-money pull of the corner boys, he has to move through the city grid. Take
                  shady missions from fast-talkers like Trapper, or stack Liberian Dollars (LD), dress sharp, and aim for a real seat at Uncle
                  Flomo&apos;s desk — in Monrovia, your hustle shapes survival.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a href="#concept-notes" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: RED }}>
                  About this concept
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-2" style={{ borderColor: RED }}>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <MonroviaMatureSticker variant="badge" size="sm" />
              </div>
            </div>
          </section>

          {/* ============ ABOUT THIS CONCEPT ============ */}
          <section id="concept-notes" className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10">
            <SectionTitle>About this concept</SectionTitle>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {CONCEPT_NOTES.map((n, i) => (
                <div key={n.title} className="rounded-2xl border border-border bg-background p-5">
                  <div className="flex items-center gap-2">
                    {i % 2 ? <Bolt className="h-4 w-4" color={NAVY} /> : <Star className="h-4 w-4" color={RED} />}
                    <h3 className="text-sm font-black uppercase tracking-tight">{n.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border-2 border-[#BF0A30]/40 bg-[#BF0A30]/[0.06] p-5">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tight">
                  <MessageCircleWarning className="h-4 w-4" style={{ color: RED }} />
                  If the tone gets mocked
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Critics often mix up <strong className="text-foreground">not finished</strong> with{" "}
                  <strong className="text-foreground">not serious</strong>. Serious direction, early-stage execution — normal for a vertical slice.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tight">
                  <Target className="h-4 w-4 text-[#002868] dark:text-[#8fb0ff]" />
                  Concept-launch goals
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground marker:text-[#BF0A30]">
                  {GOALS.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-[#002868]/40 bg-[#002868]/[0.06] p-5 dark:border-[#5b8def]/40">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tight">
                  <Cpu className="h-4 w-4 text-[#002868] dark:text-[#8fb0ff]" />
                  On the workstation (i7 · 4&nbsp;GB RAM)
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Lean scenes, compressed audio and textures, and testing on a minimum-spec profile are part of the discipline. That lines up with
                  &ldquo;concept,&rdquo; not a flaw in the pitch.
                </p>
              </div>
            </div>
          </section>

          {/* ============ CTA ============ */}
          <section className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr_auto]">
            <h2 className="text-3xl font-black uppercase italic leading-tight tracking-tighter sm:text-4xl">
              <MhLogo className="mb-4 h-12 not-italic" />
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
              <a href={STUDIO_MAILTO} className="flex items-center gap-3 hover:underline">
                <Mail className="h-4 w-4" style={{ color: RED }} />
                {STUDIO_EMAIL}
              </a>
              <a href="tel:+231776800064" className="flex items-center gap-3 hover:underline">
                <Phone className="h-4 w-4" style={{ color: RED }} />
                +231 776 800 064
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4" style={{ color: RED }} />
                Monrovia, Liberia
              </p>
              <div className="flex gap-2 pt-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={cn("flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors", s.tone)}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
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

      </main>
      <Footer />
    </div>
  )
}
