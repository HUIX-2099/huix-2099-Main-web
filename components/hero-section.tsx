"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { LiberiaMapArt } from "@/components/vpl/vpl-archive-backdrop"

const ORANGE = "#ff3b1f"
const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const display = { fontFamily: "Mohican, sans-serif" }

const definition = [
  { letter: "H", word: "Hyper" },
  { letter: "U", word: "Unified" },
  { letter: "I", word: "Intelligent" },
  { letter: "X", word: "eXperience" },
]

const cardBase =
  "group relative flex aspect-[3/4.4] flex-col overflow-hidden rounded-2xl p-4 sm:p-5 transition-shadow hover:shadow-[0_25px_40px_-20px_rgba(0,0,0,0.6)]"

export function HeroSection() {
  return (
    <section className="px-3 pb-10 pt-6 sm:px-4">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-[28px] bg-[#121212] px-6 py-10 text-white shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] sm:px-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:px-14 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden
        />

        <div className="relative">
          <div
            className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60"
            style={{ fontFamily: monoFont }}
          >
            <span>HUIX · 2099</span>
            <span className="h-3 w-px bg-white/30" />
            <span style={{ color: ORANGE }}>Monrovia · LBR</span>
            <span className="h-3 w-px bg-white/30" />
            <span>VR · XR · AR · AI</span>
          </div>

          <p className="text-sm italic text-white/70" style={{ fontFamily: "Georgia, serif" }}>
            Hello from Monrovia,
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl"
            style={display}
          >
            Building the
            <br />
            <span style={{ color: ORANGE }}>digital future</span>
            <br />
            of Africa
          </motion.h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
            HUIX-2099 merges human creativity with VR, XR, AR, AI, and 3D — building games, tools, and living digital
            worlds from Liberia for the continent.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2" style={{ fontFamily: monoFont }}>
            {definition.map((d, i) => (
              <motion.span
                key={d.letter}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-baseline gap-1.5 text-[10px] uppercase tracking-[0.14em] text-white/55"
              >
                <span className="text-lg font-bold" style={{ ...display, color: ORANGE }}>
                  {d.letter}
                </span>
                {d.word}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-950 transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              Explore our work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:bg-white hover:text-neutral-900"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Product cards */}
        <div className="relative grid grid-cols-3 gap-3 sm:gap-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} whileHover={{ y: -8 }}>
            <Link href="/about" className={`${cardBase} border border-white/10 bg-[#0e0e0e] text-white`}>
              <span className="relative z-10 text-[11px] text-white/50" style={{ fontFamily: monoFont }}>01</span>
              <h3 className="relative z-10 mt-2 text-base font-medium leading-tight sm:text-xl">
                HUIX
                <br />
                2099
              </h3>
              <span className="relative z-10 mt-1 text-[10px] uppercase tracking-[0.14em] text-white/50" style={{ fontFamily: monoFont }}>Est. 2024 · LBR</span>
              <img
                src="/icons/HUIX%202099%20dark%20logo%20icon%20version.jpg"
                alt="HUIX-2099 logo"
                className="absolute inset-x-0 bottom-[10%] h-auto w-full scale-[1.5] transition-transform duration-500 group-hover:scale-[1.6]"
              />
              <ArrowUpRight className="absolute right-4 top-4 z-10 h-4 w-4 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} whileHover={{ y: -8 }}>
            <Link href="/virtual-past-liberia" className={`${cardBase} text-[#2a0f08]`} style={{ background: ORANGE }}>
              <LiberiaMapArt className="pointer-events-none absolute -right-6 top-6 w-[95%] text-[#2a0f08] opacity-[0.18]" />

              <div className="relative flex items-center justify-between">
                <span className="text-[11px] text-[#2a0f08]/70" style={{ fontFamily: monoFont }}>02</span>
                <span
                  className="bg-[#2a0f08] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#ff3b1f] sm:text-[9px]"
                  style={{ fontFamily: monoFont }}
                >
                  VR · Heritage
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#2a0f08]/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2a0f08]" />
              </div>

              <div className="relative my-3 flex min-h-0 flex-1 items-center justify-center">
                <img
                  src="/vpl/VPL_LIGHT.png"
                  alt="Virtual Past Liberia logo"
                  className="h-full w-auto scale-[1.12] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.17] dark:hidden"
                />
                <img
                  src="/vpl/VPL_DARK.png"
                  alt="Virtual Past Liberia logo"
                  className="hidden h-full w-auto scale-[1.12] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.17] dark:block"
                />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.1em] sm:text-[9px]" style={{ fontFamily: monoFont }}>
                  <span>
                    <span className="font-bold">1847</span> → 2099 · VPL-001
                  </span>
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" />
                  </svg>
                </div>
                <div
                  className="mt-1.5 h-2 w-full"
                  style={{ backgroundImage: "repeating-linear-gradient(-45deg, #2a0f08 0 2.5px, transparent 2.5px 6px)" }}
                />
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ y: -8 }}>
            <Link href="/products/monrovia-hustle" className={`${cardBase} justify-between bg-[#b8d8c8] text-[#16231d]`}>
              <svg viewBox="0 0 120 100" className="pointer-events-none absolute -right-4 top-10 w-[70%] text-[#16231d]/25" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                <path d="M40 10 L62 10 L73 29 L62 48 L40 48 L29 29 Z" />
                <path d="M73 29 L95 29 L106 48 L95 67 L73 67 L62 48 Z" />
                <path d="M40 48 L62 48 L73 67 L62 86 L40 86 L29 67 Z" />
              </svg>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#16231d]/60" style={{ fontFamily: monoFont }}>03</span>
                  <ArrowUpRight className="h-4 w-4 text-[#16231d]/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16231d]" />
                </div>
                <img
                  src="/products/Monrovia_hustle_Demo_Campane/light_mode_logo.png"
                  alt="Monrovia Hustle logo"
                  className="mt-3 h-auto w-[82%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className="mt-2 inline-block bg-[#16231d] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#b8d8c8] sm:text-[9px]"
                  style={{ fontFamily: monoFont }}
                >
                  3D · Narrative RPG
                </span>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.1em] sm:text-[9px]" style={{ fontFamily: monoFont }}>
                  <span>Story unit · MH-01</span>
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" />
                  </svg>
                </div>
                <div
                  className="mt-1.5 h-2 w-full"
                  style={{ backgroundImage: "repeating-linear-gradient(-45deg, #16231d 0 2.5px, transparent 2.5px 6px)" }}
                />
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">26</span>
                  <span className="pb-1 text-[8px] font-medium leading-tight sm:text-[10px]">
                    Independence
                    <br />
                    Day Edition
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-[#16231d]/40 pt-2 text-[8px] sm:text-[9px]" style={{ fontFamily: monoFont }}>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                      <rect x="1" y="1" width="10" height="10" />
                      <path d="M1 1l10 10M11 1L1 11" />
                    </svg>
                    <span className="font-bold">231</span>
                    <span className="text-[#16231d]/60">Monrovia · LBR</span>
                  </span>
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <circle cx="6" cy="6" r="5" />
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
