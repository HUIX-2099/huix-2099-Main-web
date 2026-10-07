"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownRight, Box, Briefcase, Code2, Crosshair, Handshake, Scan } from "lucide-react"
import type { ComponentType } from "react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const display = { fontFamily: "Mohican, sans-serif" }

type Member = {
  n: string
  name: string
  role: string
  focus: string
  photo: string
  panel: string
  tags: string[]
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
}

const members: Member[] = [
  {
    n: "01",
    name: "Victor",
    role: "3D Modeler & Software Developer",
    focus: "Rebuilds artifacts and sites in 3D and engineers the VR, game, and web experiences around them.",
    photo: "/vpl/Team/Victor.jpg",
    panel: "#a8d5bb",
    tags: ["3D", "XR", "Code"],
    icon: Code2,
  },
  {
    n: "02",
    name: "Dave Weedor",
    role: "Business Strategist",
    focus: "Shapes the business model, partnerships, and funding that take Virtual Past Liberia from concept to classrooms.",
    photo: "/vpl/Team/Dave.png",
    panel: "#f26a3d",
    tags: ["Strategy", "Partners", "Funding"],
    icon: Briefcase,
  },
]

function Barcode() {
  const bars = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2]
  return (
    <div className="flex h-7 items-stretch gap-[2px]" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} className="bg-neutral-900" style={{ width: w }} />
      ))}
    </div>
  )
}

function HexLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <polygon points="50,8 86,28 86,68 50,88 14,68 14,28" />
      <polygon points="122,8 158,28 158,68 122,88 86,68 86,28" />
      <polygon points="158,48 194,68 194,108 158,128 122,108 122,68" />
    </svg>
  )
}

function Hinges() {
  return (
    <div className="pointer-events-none absolute inset-y-6 -right-[9px] z-10 hidden flex-col justify-between md:flex" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-10 w-[14px] rounded-sm border border-black/20 bg-neutral-300 shadow-sm" />
      ))}
    </div>
  )
}

function MemberPanel({ m, index }: { m: Member; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm text-neutral-900"
      style={{ background: m.panel }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={m.photo}
          alt={`${m.name}, ${m.role}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-[50%_20%] mix-blend-multiply grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <HexLines className="pointer-events-none absolute -right-4 top-3 h-28 w-48 text-neutral-900/50" />
        <span
          className="absolute left-4 top-4 rounded-sm bg-neutral-900 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.16em] text-white"
          style={{ fontFamily: monoFont }}
        >
          Crew {m.n}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <span
              className="block h-2 w-40 max-w-full"
              style={{ backgroundImage: "repeating-linear-gradient(135deg, #171717 0 5px, transparent 5px 10px)" }}
            />
            <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em]" style={{ fontFamily: monoFont }}>
              Heritage crew unit
            </span>
          </div>
          <Scan className="h-4 w-4" strokeWidth={1.6} />
        </div>

        <div className="mt-5 flex items-end gap-4 border-b-2 border-neutral-900 pb-4">
          <span className="text-7xl font-bold leading-[0.78] tracking-tight" style={display}>
            {m.n}
          </span>
          <div className="pb-0.5">
            <p className="text-lg font-bold leading-tight">{m.name}</p>
            <p className="text-xs font-semibold leading-tight text-neutral-900/75">{m.role}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-neutral-900/80">{m.focus}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-2">
            <m.icon className="h-4 w-4" strokeWidth={1.8} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ fontFamily: monoFont }}>
              {m.tags.join(" · ")}
            </span>
          </div>
          <Crosshair className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" strokeWidth={1.4} />
        </div>
      </div>
    </motion.article>
  )
}

export function VplTeamSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: monoFont }}>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
            <ArrowDownRight className="h-3 w-3" />
          </span>
          <span>08 · The team</span>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[repeating-linear-gradient(90deg,#d4d4d4_0_10px,#c4c4c4_10px_14px)] p-5 sm:p-10 dark:bg-[repeating-linear-gradient(90deg,#1b1b1b_0_10px,#111_10px_14px)]">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0_35%,rgba(0,0,0,0.12)_35%_55%,transparent_55%)] dark:bg-[linear-gradient(115deg,transparent_0_35%,rgba(0,0,0,0.35)_35%_55%,transparent_55%)]"
            aria-hidden
          />

          <div className="relative rounded-md border-[6px] border-neutral-800 bg-neutral-800 p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="grid gap-2 md:grid-cols-3">
              {/* Intro panel */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col rounded-sm bg-[#a8d5bb] p-6 text-neutral-900"
              >
                <Hinges />
                <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl" style={display}>
                  VPL Crew
                </h2>
                <span
                  className="mt-4 w-fit rounded-sm bg-neutral-900 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.16em] text-[#a8d5bb]"
                  style={{ fontFamily: monoFont }}
                >
                  HUIX-2099 Hub
                </span>
                <p className="mt-4 text-3xl font-bold leading-none">Liberia</p>
                <p className="mt-2 text-sm font-semibold leading-snug">
                  Virtual Past Liberia
                  <br />
                  Core Team (VPL-T2)
                </p>
                <div className="mt-4">
                  <Barcode />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-neutral-900/80">
                  A small Monrovia crew turning Liberian heritage into VR, games, and AI-guided experiences — growing with
                  historians, custodians, and partners.
                </p>

                <div className="mt-auto grid grid-cols-3 gap-px pt-8">
                  {[
                    { icon: Box, label: "Heritage capture" },
                    { icon: Code2, label: "XR build" },
                    { icon: Handshake, label: "Partnerships" },
                  ].map((c, i) => (
                    <div
                      key={c.label}
                      className={`flex aspect-square flex-col justify-between p-2.5 ${
                        i === 0 ? "bg-neutral-900 text-[#a8d5bb]" : "border border-neutral-900/25"
                      }`}
                    >
                      <c.icon className="h-4 w-4" strokeWidth={1.6} />
                      <span className="text-[9px] font-semibold leading-tight">{c.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {members.map((m, i) => (
                <div key={m.n} className="relative">
                  {i < members.length - 1 && <Hinges />}
                  <MemberPanel m={m} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
