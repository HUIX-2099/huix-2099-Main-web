"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  MH_IDE_HERO,
  MH_IDE_LOGO,
  MH_IDE_PILLARS,
  MH_IDE_ROADMAP,
  MH_IDE_SUBTAG,
  MH_IDE_TAGLINE,
} from "@/lib/monrovia-hustle-independence"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const
const RED = "#BF0A30"

export default function MonroviaIndependenceDayPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#BF0A30] selection:text-white">
      <Navbar />

      <main className="pt-[var(--navbar-height,5rem)]">
        {/* Hero — HAPEBEAST-style centered */}
        <section className="px-4 pb-8 pt-10 text-center sm:px-6 sm:pt-14">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Image
              src={MH_IDE_LOGO}
              alt="Monrovia Hustle"
              width={120}
              height={48}
              className="mx-auto h-10 w-auto object-contain opacity-90 sm:h-12"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-8 max-w-5xl text-[clamp(2.25rem,9vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[0.02em]"
            style={{ fontFamily: MONO }}
          >
            Monrovia Hustle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="mt-4 text-[11px] font-bold uppercase tracking-[0.35em] sm:text-xs"
            style={{ color: RED }}
          >
            Independence Day Edition
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mx-auto mt-3 max-w-lg text-[10px] uppercase tracking-[0.28em] text-white/45 sm:text-[11px]"
            style={{ fontFamily: MONO }}
          >
            Liberian keke racing · HUIX-2099
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto mt-10 max-w-6xl overflow-hidden"
          >
            <Image
              src={MH_IDE_HERO}
              alt="Monrovia Hustle Independence Day Edition — keke racing key art"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
              priority
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 text-sm font-bold uppercase tracking-[0.22em] sm:text-base"
            style={{ fontFamily: MONO }}
          >
            {MH_IDE_TAGLINE}
          </motion.p>
          <p className="mx-auto mt-2 text-[11px] uppercase tracking-[0.2em] text-white/40" style={{ fontFamily: MONO }}>
            {MH_IDE_SUBTAG}
          </p>
        </section>

        {/* Narrative */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-light italic text-white/90 sm:text-2xl">
              In the beginning was the street, and the street was —
            </h2>
            <p className="mt-8 text-[15px] leading-[1.95] text-white/55 sm:text-base">
              <strong className="font-semibold text-white/80">Monrovia Hustle: Independence Day Edition</strong> is a
              racing-focused chapter in the Monrovia Hustle line — built around Liberia&apos;s keke culture, festival
              energy, and the hustle to move faster than the city allows.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] text-white/45 sm:text-base">
              Race tricycle taxis through Monrovia&apos;s corridors. Feel the drums, the flags, the crowd at the line —
              then launch into laps that treat West African streets as the main character, not a generic backdrop.
            </p>
          </div>
        </section>

        {/* Pillars — gallery row style */}
        <section className="border-t border-white/10 bg-black px-4 py-14 sm:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {MH_IDE_PILLARS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.02] p-6 text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white/40"
                  style={{ fontFamily: MONO }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl space-y-6 text-center text-[15px] leading-[1.95] text-white/50">
            <p>
              This edition sits inside the wider <strong className="text-white/75">Monrovia Hustle 3D</strong> franchise
              from HUIX-2099 — Liberia-based studio work that puts Monrovia on the map as a playable city, not a footnote.
            </p>
            <p>
              Independence Day Edition is in active development: a racing slice that honors keke drivers, street
              festival culture, and the speed of a capital that never sits still.
            </p>
            <Link
              href="/products/monrovia-hustle"
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#89b8ff] transition hover:text-white"
              style={{ fontFamily: MONO }}
            >
              Monrovia Hustle franchise hub →
            </Link>
          </div>
        </section>

        {/* Roadmap teaser — HAPEBEAST 3-column */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
          <h2
            className="text-center text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl"
            style={{ fontFamily: MONO }}
          >
            Roadmap teaser
          </h2>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            {MH_IDE_ROADMAP.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.03]">
                  <Image
                    src={MH_IDE_HERO}
                    alt=""
                    width={112}
                    height={112}
                    className="h-full w-full object-cover object-center grayscale opacity-80"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35" style={{ fontFamily: MONO }}>
                  {phase.phase}
                </p>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-white">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-left text-[11px] leading-relaxed text-white/45">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#BF0A30]">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All products
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
