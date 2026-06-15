"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export type HuixTestimonial = {
  text: string
  name: string
  role: string
  /** Two-letter initials when no photo */
  initials: string
}

export const huixTestimonials: HuixTestimonial[] = [
  {
    text: "Monrovia Hustle feels like my city — not a Hollywood stand-in. The street loop and voice cast hit different.",
    name: "Amara K.",
    role: "Playtester · Monrovia",
    initials: "AK",
  },
  {
    text: "HUIXOR saved me hours previewing layouts across phone and desktop in one window. Clean WPF energy.",
    name: "Jordan M.",
    role: "Frontend engineer",
    initials: "JM",
  },
  {
    text: "Rare to see a Liberian studio ship a vertical slice this honest about being a concept. Respect the transparency.",
    name: "Priya S.",
    role: "Narrative designer",
    initials: "PS",
  },
  {
    text: "The HUIX-THEME on VS Code is sharp — neon syntax that actually reads on long sessions. Installed day one.",
    name: "Leo T.",
    role: "VS Code user",
    initials: "LT",
  },
  {
    text: "Victor and the team are building something Africa needed — immersive tools and stories rooted in Monrovia.",
    name: "David N.",
    role: "Creative technologist · LBR",
    initials: "DN",
  },
  {
    text: "Tenneh phone mission chain had me grinning — waypoint prompts and Liberian English done with care.",
    name: "Michelle O.",
    role: "Game writer",
    initials: "MO",
  },
  {
    text: "HUIX-2099's site and product pages feel editorial, not template — you can tell it's studio-built.",
    name: "Samuel B.",
    role: "Product designer",
    initials: "SB",
  },
  {
    text: "Checked out the concept dossier for Monrovia Hustle — cast section and trailer sold me on the direction.",
    name: "Fatou D.",
    role: "Streamer · diaspora",
    initials: "FD",
  },
  {
    text: "Open-source HUIXOR with WebView2 multi-panel preview? That's the kind of tooling indie studios need.",
    name: "Chris L.",
    role: "Windows developer",
    initials: "CL",
  },
]

function TestimonialCard({ item }: { item: HuixTestimonial }) {
  return (
    <figure className="w-full max-w-xs rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/50 dark:ring-white/[0.04]">
      <blockquote className="text-sm leading-relaxed text-foreground/90">&ldquo;{item.text}&rdquo;</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/50 text-[11px] font-bold uppercase tracking-wide text-foreground/80"
          style={{ fontFamily: MONO }}
          aria-hidden
        >
          {item.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight tracking-tight text-foreground">{item.name}</p>
          <p className="truncate text-xs leading-tight text-muted-foreground" style={{ fontFamily: MONO }}>
            {item.role}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string
  testimonials: HuixTestimonial[]
  duration?: number
}) {
  return (
    <div className={cn("relative h-[28rem] overflow-hidden md:h-[32rem]", className)}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-background to-transparent" />
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {testimonials.map((item) => (
              <TestimonialCard key={`${pass}-${item.name}`} item={item} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

const columnSets: HuixTestimonial[][] = [
  huixTestimonials.filter((_, i) => i % 3 === 0),
  huixTestimonials.filter((_, i) => i % 3 === 1),
  huixTestimonials.filter((_, i) => i % 3 === 2),
]

export function HuixTestimonialsSection({ className }: { className?: string }) {
  return (
    <section
      className={cn("border-t border-border bg-muted/20 py-14 dark:bg-muted/10 sm:py-16 lg:py-20", className)}
      aria-labelledby="huix-testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
              [04] · Community signal
            </p>
            <h2
              id="huix-testimonials-heading"
              className="text-3xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-4xl"
              style={{ fontFamily: "Mohican, sans-serif" }}
            >
              What people are saying
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Early reactions from playtesters, builders, and friends around HUIX-2099 — illustrative quotes while the studio
              grows its public feedback lane.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60" style={{ fontFamily: MONO }}>
            Placeholder testimonials · not verified reviews
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {columnSets.map((set, index) => (
            <TestimonialsColumn
              key={index}
              testimonials={set}
              duration={14 + index * 4}
              className={cn(index === 1 && "hidden sm:block", index === 2 && "hidden lg:block")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
