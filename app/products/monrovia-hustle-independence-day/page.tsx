"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, AlertTriangle, Smartphone, HeartHandshake, Download, Users, Bell, Play } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QRCode } from "@/components/qr-code"
import { Barcode } from "@/components/barcode"
import { AmbientVideo } from "@/components/ambient-video"
import { IdeDownloadPanel } from "@/components/monrovia-hustle/ide-download-button"
import {
  MH_IDE_CAT_NO,
  MH_IDE_CREATOR_GOOGLE_QUERY,
  MH_IDE_CREATOR_IMAGE,
  MH_IDE_CREATOR_NAME,
  MH_IDE_CREATOR_PATH,
  MH_IDE_CREATOR_ROLE,
  MH_IDE_DOC_ID,
  MH_IDE_HERO,
  MH_IDE_LOADING,
  MH_IDE_LOGO,
  MH_IDE_PAYMENT_MSISDN_DISPLAY,
  MH_IDE_PAYMENT_MSISDN_TEL,
  MH_IDE_PAYMENT_NOTE,
  MH_IDE_PILLARS,
  MH_IDE_REV,
  MH_IDE_ROADMAP,
  MH_IDE_SETTINGS_VIDEO,
  MH_IDE_SUBTAG,
  MH_IDE_TAGLINE,
  MH_IDE_TSHIRT_PRICE_USD,
  MH_IDE_TSHIRT_SKU,
  MH_IDE_TSHIRT_VIDEO,
  MH_IDE_TRAILER_EMBED_URL,
  MH_IDE_TRAILER_YOUTUBE_URL,
  MH_IDE_WHATSAPP_URL,
} from "@/lib/monrovia-hustle-independence"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const
const RED = "#BF0A30"
const MTN_YELLOW = "#FFCC00"
const ORANGE_MONEY = "#FF6600"

function SpecRow({ label, value, onDark = false }: { label: string; value: string; onDark?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[minmax(6.5rem,8.5rem)_1fr] gap-x-3 py-1.5 text-[11px] sm:text-xs ${
        onDark ? "border-b border-white/15" : "border-b border-border"
      }`}
    >
      <span
        className={`font-bold uppercase tracking-[0.14em] ${onDark ? "text-white/55" : "text-muted-foreground"}`}
        style={{ fontFamily: MONO }}
      >
        {label}
      </span>
      <span
        className={`leading-snug ${onDark ? "text-white/95" : "text-foreground"}`}
        style={{ fontFamily: MONO }}
      >
        {value}
      </span>
    </div>
  )
}

function SectionMark({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-2">
      <div className="flex items-baseline gap-3">
        <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
          [{index}]
        </span>
        <h2
          className="text-sm font-black uppercase tracking-[0.18em] text-foreground sm:text-base"
          style={{ fontFamily: MONO }}
        >
          {title}
        </h2>
      </div>
      <span
        className="hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:inline"
        style={{ fontFamily: MONO }}
      >
        {MH_IDE_DOC_ID}
      </span>
    </div>
  )
}

function RegulatoryMark({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={`inline-flex h-7 min-w-7 items-center justify-center border px-1 text-[9px] font-bold leading-none ${
        onDark
          ? "border-white/35 text-white/75"
          : "border-border text-muted-foreground"
      }`}
      style={{ fontFamily: MONO }}
    >
      {children}
    </span>
  )
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function MonroviaIndependenceDayPage() {
  const payMailto = `mailto:huixtech2099@gmail.com?subject=${encodeURIComponent(
    "Monrovia Hustle IDE T-Shirt Order"
  )}&body=${encodeURIComponent(
    `Payment sent via Mobile Money / Orange Money.\nAmount: $${MH_IDE_TSHIRT_PRICE_USD} USD\nReference: ${MH_IDE_PAYMENT_NOTE}\n\nName:\nSize:\nDelivery contact:\nTransaction ID:`
  )}`

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#BF0A30] selection:text-white">
      <Navbar />

      <main>
        {/* Hero loading screen — art stays dark; overlays stay high-contrast */}
        <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black text-white">
          <Image
            src={MH_IDE_LOADING}
            alt="Monrovia Hustle Independence Day Edition — loading screen art"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/90"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[28%] max-w-md bg-gradient-to-r from-black/50 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-[22%] max-w-sm bg-gradient-to-l from-black/45 to-transparent"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-x-0 top-0 z-10 border-b border-white/15 bg-black/55 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-10"
            style={{ paddingTop: "calc(var(--navbar-height, 5rem) + 0.5rem)" }}
          >
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <RegulatoryMark onDark>CE</RegulatoryMark>
                <RegulatoryMark onDark>LR</RegulatoryMark>
                <RegulatoryMark onDark>HUIX</RegulatoryMark>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/80" style={{ fontFamily: MONO }}>
                  {MH_IDE_DOC_ID} · {MH_IDE_REV}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <QRCode
                  value="https://huix.amaratech.io/products/monrovia-hustle-independence-day"
                  size={48}
                  className="border-white/30 bg-white p-0.5"
                />
                <Barcode value={MH_IDE_CAT_NO} className="hidden h-8 bg-white sm:block" />
              </div>
            </div>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="max-w-xl rounded-sm border border-white/20 bg-black/75 px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5"
              >
                <Image
                  src={MH_IDE_LOGO}
                  alt="Monrovia Hustle"
                  width={120}
                  height={48}
                  className="h-8 w-auto object-contain opacity-95"
                  priority
                />
                <p
                  className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: RED, fontFamily: MONO }}
                >
                  Independence Day Edition
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base" style={{ fontFamily: MONO }}>
                  {MH_IDE_TAGLINE}
                </p>
                <p className="mt-1 text-xs text-white/90 sm:text-[13px]">{MH_IDE_SUBTAG}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={MH_IDE_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-[#25D366] bg-[#25D366] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_rgba(37,211,102,0.35)] transition hover:bg-[#1ebe57]"
                    style={{ fontFamily: MONO }}
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Join WhatsApp · get the game
                  </a>
                  <a
                    href="#merch"
                    className="inline-flex items-center border border-white bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black transition hover:bg-white/90"
                    style={{ fontFamily: MONO }}
                  >
                    Get the tee · ${MH_IDE_TSHIRT_PRICE_USD}
                  </a>
                  <a
                    href="#downloads"
                    className="inline-flex items-center border border-white/50 bg-black/40 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
                    style={{ fontFamily: MONO }}
                  >
                    Downloads · July 26
                  </a>
                  <a
                    href="#donate"
                    className="inline-flex items-center border border-white/50 bg-black/40 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
                    style={{ fontFamily: MONO }}
                  >
                    Donate
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="border border-white/20 bg-black/75 px-3 py-3 backdrop-blur-md sm:min-w-[11rem]"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75" style={{ fontFamily: MONO }}>
                  Classification
                </p>
                <SpecRow onDark label="TYPE" value="RACING / NARRATIVE" />
                <SpecRow onDark label="PLATFORM" value="PC · MOBILE" />
                <SpecRow onDark label="STATUS" value="ACTIVE DEV" />
                <SpecRow onDark label="STUDIO" value="HUIX-2099" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Official trailer — YouTube autoplay */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10" id="trailer">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex items-center gap-3">
              <Play className="h-3.5 w-3.5 text-[#BF0A30]" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
                Official trailer
              </span>
              <span className="h-px flex-1 bg-border" />
              <a
                href={MH_IDE_TRAILER_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground transition hover:text-foreground"
                style={{ fontFamily: MONO }}
              >
                YouTube →
              </a>
            </div>
            <div className="relative w-full overflow-hidden border border-border bg-black" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={MH_IDE_TRAILER_EMBED_URL}
                title="Monrovia Hustle Independence Day Edition — official trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: MONO }}>
              Autoplay · tap unmute in the player for sound
            </p>
          </div>
        </section>

        {/* Secondary key art */}
        <section className="border-b border-border bg-background">
          <div className="relative w-full overflow-hidden">
            <Image
              src={MH_IDE_HERO}
              alt="Monrovia Hustle Independence Day Edition — keke racing key art"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-white sm:px-6 lg:px-10"
              style={{ fontFamily: MONO }}
            >
              <span>FIG 1.0 · KEY ART</span>
              <span>MH-IDE-HERO</span>
            </div>
          </div>
        </section>

        {/* Brief */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="02" title="Operational brief" />
            <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-[1.9] text-foreground/85 sm:text-base">
              <p>
                <strong className="font-semibold text-foreground">MONROVIA HUSTLE: INDEPENDENCE DAY EDITION 2026</strong>{" "}
                is a Liberian keke racing art game created by{" "}
                <Link href={MH_IDE_CREATOR_PATH} className="font-semibold text-foreground underline underline-offset-2">
                  {MH_IDE_CREATOR_NAME}
                </Link>{" "}
                of HUIX-2099. Built around Liberia keke culture, festival energy, and the hustle to move faster than the
                city allows — timed for Liberia Independence Day,{" "}
                <strong className="text-foreground">26 July 2026</strong>.
              </p>
              <p>
                Race tricycle taxis through Monrovia corridors. Drums, flags, crowd at the line — then launch into laps
                that treat West African streets as the main character, not a generic backdrop.
              </p>
              <p className="border-l-2 border-border pl-4 text-muted-foreground">
                This edition sits inside the wider Monrovia Hustle 3D franchise from HUIX-2099 — Liberia-based studio
                work that puts Monrovia on the map as a playable city.
              </p>
              <Link
                href="/products/monrovia-hustle"
                className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-[#002868] transition hover:text-foreground dark:text-[#89b8ff] dark:hover:text-white"
                style={{ fontFamily: MONO }}
              >
                Franchise hub → /products/monrovia-hustle
              </Link>
            </div>
          </div>
        </section>

        {/* Creator — Victor Edet Coleman */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10" id="creator">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="02A" title="Creator credit · Art game" />
            <div className="mt-6 flex flex-col gap-6 border border-border bg-card p-5 sm:flex-row sm:items-center sm:p-6">
              <Link
                href={MH_IDE_CREATOR_PATH}
                className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden border border-border sm:mx-0 sm:h-40 sm:w-40"
              >
                <Image
                  src={MH_IDE_CREATOR_IMAGE}
                  alt={`${MH_IDE_CREATOR_NAME} — creator of Monrovia Hustle Independence Day Edition 2026, HUIX-2099 Liberia`}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </Link>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
                  Created by
                </p>
                <h3 className="mt-1 text-xl font-black tracking-tight text-foreground sm:text-2xl">
                  <Link href={MH_IDE_CREATOR_PATH} className="hover:underline">
                    {MH_IDE_CREATOR_NAME}
                  </Link>
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#BF0A30]" style={{ fontFamily: MONO }}>
                  {MH_IDE_CREATOR_ROLE}
                </p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                  Monrovia Hustle Independence Day Edition is an art game created by {MH_IDE_CREATOR_NAME}, Founder &amp;
                  CTO of HUIX-2099 in Monrovia, Liberia — not a generic racing skin pack, but a Liberian story built for
                  Independence Day 2026.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <Link
                    href={MH_IDE_CREATOR_PATH}
                    className="inline-flex border border-border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground transition hover:border-foreground/40"
                    style={{ fontFamily: MONO }}
                  >
                    Team profile →
                  </Link>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(MH_IDE_CREATOR_GOOGLE_QUERY)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#002868] transition hover:border-foreground/40 dark:text-[#89b8ff]"
                    style={{ fontFamily: MONO }}
                  >
                    Google · {MH_IDE_CREATOR_NAME}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp — get the game */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10" id="get-game">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="02B" title="Access channel · Get the game" />

            <div className="mt-6 overflow-hidden border border-[#25D366]/40 bg-[#25D366]/10 dark:bg-[#25D366]/[0.12]">
              <div className="flex flex-col lg:flex-row">
                {/* Brand / icon column */}
                <div className="flex flex-col items-center justify-center gap-4 border-b border-[#25D366]/25 bg-[#25D366] px-8 py-10 text-white lg:w-56 lg:border-b-0 lg:border-r lg:border-[#1ebe57]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/40">
                    <WhatsAppIcon className="h-11 w-11" />
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80" style={{ fontFamily: MONO }}>
                      Channel
                    </p>
                    <p className="mt-1 text-sm font-black uppercase tracking-[0.1em]" style={{ fontFamily: MONO }}>
                      HUIX Games
                    </p>
                  </div>
                  <QRCode
                    value={MH_IDE_WHATSAPP_URL}
                    size={96}
                    className="border-2 border-white bg-white p-1"
                  />
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/85" style={{ fontFamily: MONO }}>
                    Scan to join
                  </p>
                </div>

                {/* Copy + CTA */}
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
                  <div>
                    <p
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#128C7E]"
                      style={{ fontFamily: MONO }}
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                      WhatsApp group invite
                    </p>
                    <h3
                      className="mt-3 text-xl font-black uppercase tracking-[0.06em] text-foreground sm:text-2xl"
                      style={{ fontFamily: MONO }}
                    >
                      Join the chat to get the game
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                      Tap below to open the HUIX Games WhatsApp group. Members get the Independence Day Edition build,
                      update drops, and playtest notices first.
                    </p>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        { icon: Download, label: "Game builds", body: "Download links posted in chat" },
                        { icon: Bell, label: "Live updates", body: "Patches & race-day news" },
                        { icon: Users, label: "Community", body: "Players & HUIX crew" },
                      ].map(({ icon: Icon, label, body }) => (
                        <li key={label} className="flex gap-3 border border-border/80 bg-background/60 px-3 py-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" aria-hidden />
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground" style={{ fontFamily: MONO }}>
                              {label}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">{body}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={MH_IDE_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe57]"
                      style={{ fontFamily: MONO }}
                    >
                      <WhatsAppIcon className="h-6 w-6" />
                      Join WhatsApp · get the game
                    </a>
                    <p className="text-[11px] text-muted-foreground sm:max-w-[14rem]" style={{ fontFamily: MONO }}>
                      Opens WhatsApp · HUIX Games group invite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads — locked until 26 July 2026 */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10" id="downloads">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="03" title="Build downloads · Windows · Android APK" />
            <div className="mt-6">
              <IdeDownloadPanel />
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="04" title="Design pillars index" />
            <div className="mt-6 grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-border">
              {MH_IDE_PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className="border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    [{String(i + 1).padStart(2, "0")}]
                  </div>
                  <h3
                    className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/80 sm:text-base">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media row — sound ref (portrait) + tee (landscape) */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10" id="sound-reference">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="05" title="Media · Sound reference · Merchandise" />
            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                Fictional social-media influencer angle — lensy, dating-app energy, street heat. The portrait reel is a{" "}
                <strong className="text-foreground">sound reference</strong> for the game; the landscape clip showcases the
                official Independence Day tee.
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: MONO }}>
                Tip · unmute the portrait player to hear the reference track
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:gap-6 xl:gap-8">
              <AmbientVideo
                src={MH_IDE_SETTINGS_VIDEO}
                aspect="portrait"
                controls
                className="w-full max-w-[18rem] shrink-0 sm:max-w-[20rem] lg:max-w-[22rem]"
                aria-label="Monrovia Hustle Independence Day Edition — sound reference reel, social media influencer style"
                footer={
                  <div
                    className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-muted/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    <span>PORTRAIT · SOUND REF</span>
                    <span>UNMUTE</span>
                  </div>
                }
              />

              <AmbientVideo
                src={MH_IDE_TSHIRT_VIDEO}
                aspect="landscape"
                className="min-w-0 w-full flex-1"
                aria-label="Monrovia Hustle Independence Day Edition official t-shirt showcase"
                footer={
                  <div
                    className="flex items-center justify-between border-t border-border bg-muted/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    <span>LANDSCAPE · TSHIRT · AMBIENT</span>
                    <span>LOOP · MUTED</span>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* T-shirt buy */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10" id="merch">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="06" title="Official merchandise · T-shirt" />
            <div className="mt-6 max-w-2xl">
              <div className="flex flex-col">
                <div className="border border-border bg-card p-4">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    Product specification
                  </p>
                  <SpecRow label="SKU" value={MH_IDE_TSHIRT_SKU} />
                  <SpecRow label="ITEM" value="INDEPENDENCE DAY OFFICIAL TEE" />
                  <SpecRow label="UNIT PRICE" value={`$${MH_IDE_TSHIRT_PRICE_USD}.00 USD`} />
                  <SpecRow label="ORIGIN" value="HUIX-2099 · LIBERIA" />
                  <SpecRow label="REF NOTE" value={MH_IDE_PAYMENT_NOTE} />
                </div>

                <div className="mt-5 flex items-baseline gap-3 border-y border-border py-4">
                  <span
                    className="text-4xl font-black tracking-tight text-foreground sm:text-5xl"
                    style={{ fontFamily: MONO }}
                  >
                    ${MH_IDE_TSHIRT_PRICE_USD}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    USD · per unit
                  </span>
                </div>

                <p
                  className="mt-5 text-[13px] leading-relaxed text-foreground/80 sm:text-sm"
                  style={{ fontFamily: MONO }}
                >
                  Pay via MTN Lonestar Cell Mobile Money or Orange Money. Send{" "}
                  <strong className="text-foreground">${MH_IDE_TSHIRT_PRICE_USD} USD</strong> (or LRD equivalent) to the
                  wallet below. Include reference <strong className="text-foreground">{MH_IDE_PAYMENT_NOTE}</strong> in
                  your payment message, then email your size and delivery contact.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${MH_IDE_PAYMENT_MSISDN_TEL}`}
                    className="group flex items-center gap-3 border border-border bg-card px-4 py-3.5 transition hover:border-foreground/30 hover:bg-muted/50"
                  >
                    <Smartphone className="h-5 w-5 shrink-0" style={{ color: MTN_YELLOW }} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
                        style={{ fontFamily: MONO }}
                      >
                        Pay · MTN Lonestar Mobile Money
                      </p>
                      <p
                        className="text-lg font-black tracking-tight text-foreground sm:text-xl"
                        style={{ fontFamily: MONO }}
                      >
                        {MH_IDE_PAYMENT_MSISDN_DISPLAY}
                      </p>
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground"
                      style={{ fontFamily: MONO }}
                    >
                      Pay ${MH_IDE_TSHIRT_PRICE_USD}
                    </span>
                  </a>

                  <a
                    href={`tel:${MH_IDE_PAYMENT_MSISDN_TEL}`}
                    className="group flex items-center gap-3 border border-border bg-card px-4 py-3.5 transition hover:border-foreground/30 hover:bg-muted/50"
                  >
                    <Smartphone className="h-5 w-5 shrink-0" style={{ color: ORANGE_MONEY }} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
                        style={{ fontFamily: MONO }}
                      >
                        Pay · Orange Money
                      </p>
                      <p
                        className="text-lg font-black tracking-tight text-foreground sm:text-xl"
                        style={{ fontFamily: MONO }}
                      >
                        {MH_IDE_PAYMENT_MSISDN_DISPLAY}
                      </p>
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground"
                      style={{ fontFamily: MONO }}
                    >
                      Pay ${MH_IDE_TSHIRT_PRICE_USD}
                    </span>
                  </a>

                  <a
                    href={payMailto}
                    className="flex items-center justify-center gap-2 border border-dashed border-border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground transition hover:border-foreground/40 hover:text-foreground"
                    style={{ fontFamily: MONO }}
                  >
                    Confirm order after payment →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10" id="donate">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="07" title="Project support · Donation" />
            <div className="mt-6 flex items-start gap-3">
              <HeartHandshake className="mt-0.5 h-6 w-6 shrink-0" style={{ color: RED }} aria-hidden />
              <div className="max-w-2xl">
                <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                  Donate to support the Monrovia Hustle Independence Day Edition and the wider HUIX-2099 project. Every
                  contribution goes toward development, art, audio, and shipping Liberian-led game work.
                </p>
                <p className="mt-2 text-xs text-muted-foreground" style={{ fontFamily: MONO }}>
                  Any amount welcome. Include your gamer tag or email for a credits shout-out when the full release ships.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${MH_IDE_PAYMENT_MSISDN_TEL}`}
                className="flex flex-col border border-border bg-card px-4 py-4 transition hover:border-foreground/30 hover:bg-muted/50"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
                  style={{ fontFamily: MONO }}
                >
                  Donate via Mobile Money
                </span>
                <span className="mt-1 text-xl font-black text-foreground" style={{ fontFamily: MONO }}>
                  {MH_IDE_PAYMENT_MSISDN_DISPLAY}
                </span>
              </a>
              <a
                href={`tel:${MH_IDE_PAYMENT_MSISDN_TEL}`}
                className="flex flex-col border border-border bg-card px-4 py-4 transition hover:border-foreground/30 hover:bg-muted/50"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
                  style={{ fontFamily: MONO }}
                >
                  Donate via Orange Money
                </span>
                <span className="mt-1 text-xl font-black text-foreground" style={{ fontFamily: MONO }}>
                  {MH_IDE_PAYMENT_MSISDN_DISPLAY}
                </span>
              </a>
            </div>

            <Link
              href="/products/monrovia-hustle/donate"
              className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-[#002868] transition hover:text-foreground dark:text-[#89b8ff] dark:hover:text-white"
              style={{ fontFamily: MONO }}
            >
              Full donation page →
            </Link>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionMark index="08" title="Development roadmap index" />
            <div className="mt-6 overflow-x-auto">
              <table
                className="w-full min-w-[28rem] border-collapse text-left text-xs sm:text-sm"
                style={{ fontFamily: MONO }}
              >
                <thead>
                  <tr className="border-b border-border text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <th className="py-2 pr-4 font-bold">Phase</th>
                    <th className="py-2 pr-4 font-bold">Title</th>
                    <th className="py-2 font-bold">Deliverables</th>
                  </tr>
                </thead>
                <tbody>
                  {MH_IDE_ROADMAP.map((phase) => (
                    <tr key={phase.phase} className="border-b border-border align-top">
                      <td className="py-4 pr-4 font-bold text-muted-foreground">{phase.phase}</td>
                      <td className="py-4 pr-4 font-bold uppercase text-foreground">{phase.title}</td>
                      <td className="py-4 text-foreground/80">
                        <ul className="space-y-1.5">
                          {phase.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-muted-foreground">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Caution strip */}
        <footer className="border-b border-border bg-background px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-start gap-2 border border-border bg-muted/30 px-3 py-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              <p
                className="text-[9px] leading-relaxed uppercase tracking-[0.08em] text-muted-foreground sm:text-[10px]"
                style={{ fontFamily: MONO }}
              >
                CAUTION · DO NOT EXPOSE TO UNAUTHORIZED DISTRIBUTION · INDEPENDENCE DAY EDITION IS IN ACTIVE DEVELOPMENT
                · SPECIFICATIONS SUBJECT TO CHANGE WITHOUT NOTICE · HUIX-2099 · MONROVIA · LIBERIA · {MH_IDE_REV}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <Barcode value={MH_IDE_DOC_ID} className="h-8 bg-white" />
              <div
                className="text-right text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
                style={{ fontFamily: MONO }}
              >
                <p>HUIX-2099 · END OF DOCUMENT</p>
                <p className="mt-0.5">
                  {MH_IDE_CAT_NO} · {MH_IDE_DOC_ID}
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div className="bg-background px-4 py-8 text-center sm:px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition hover:text-foreground"
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All products
          </Link>
        </div>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={MH_IDE_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join WhatsApp to get the game"
        className="fixed bottom-[calc(1.25rem+var(--mobile-tab-bar-spacing,0px))] right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#1ebe57] sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden text-[11px] font-bold uppercase tracking-[0.12em] sm:inline" style={{ fontFamily: MONO }}>
          Get the game
        </span>
      </a>
    </div>
  )
}
