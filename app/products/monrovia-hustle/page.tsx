import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FranchiseShell, StatusBadge } from "@/components/monrovia-hustle/franchise-shell"
import { HustleHero } from "@/components/monrovia-hustle/hustle-hero"
import { HustleLoop } from "@/components/monrovia-hustle/hustle-loop"
import {
  franchiseMetadata,
  MH_BASE,
  MH_CAPTURE_IN_GAME,
} from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "Experience the Streets. Discover the Hustle.",
  "Discover Monrovia Hustle, a gaming franchise inspired by Monrovia, Liberia, with immersive exploration, realistic gameplay, and simulation-driven interaction.",
)

const PILLARS = [
  {
    index: "01",
    title: "The streets",
    body: "A city built from the places, landmarks, and daily motion that make Monrovia feel like itself.",
    accent: "#4b8fe2",
  },
  {
    index: "02",
    title: "The hustle",
    body: "Every day is a choice. Move through the city, find your way, and make the day count.",
    accent: "#a77bd9",
  },
  {
    index: "03",
    title: "The culture",
    body: "Language, sound, and street life carry the Liberian identity of the game—not just its look.",
    accent: "#1cc35c",
  },
]

export default function MonroviaHustlePage() {
  return (
    <FranchiseShell>
      {/* Intro: the name, huge, over turning shards */}
      <HustleHero />

      {/* Four words, each one a stage of the same run */}
      <section className="relative z-10 mx-auto max-w-[1320px] px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">The loop</p>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.045em]">
            Four words. One day in the city.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
            The poster says it in paint. In play, each word is a stage of the same run — and the run is what the game
            is built around. Keep scrolling: the city changes colour with it.
          </p>
        </div>
      </section>

      {/* Identity: the loop, pinned in the middle of the scroll */}
      <HustleLoop />

      {/* About the game */}
      <section className="relative z-10 mx-auto max-w-[1320px] px-5 py-12 sm:px-8 sm:py-20 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">The game</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.045em]">
              A game shaped by the city.
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-[15px] leading-7 text-muted-foreground sm:text-base">
              <p>
                Monrovia Hustle is built around a recognizable urban world. The places you pass, the routes you take,
                and the life happening around you are all part of the experience.
              </p>
              <p>
                The game is in development at HUIX-2099 in Monrovia. We are building it one step at a time, and we will
                only announce what is real.
              </p>
            </div>
            <Link
              href={`${MH_BASE}/about`}
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
            >
              About Monrovia Hustle
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars with oversized numerals */}
      <section className="relative z-10 border-y border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">What it is</p>
              <h2 className="mt-4 max-w-xl text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.045em]">
                One city. Three ways in.
              </h2>
            </div>
            <StatusBadge>In development</StatusBadge>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:gap-12">
            {PILLARS.map((pillar) => (
              <article key={pillar.title} className="group">
                <span
                  aria-hidden
                  className="mb-6 block h-[3px] w-14 rounded-full"
                  style={{ background: pillar.accent }}
                />
                <p
                  aria-hidden
                  className={`text-[clamp(4.5rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.06em] transition-colors duration-300 ${
                    pillar.index === "02" ? "text-foreground" : "text-foreground/15 group-hover:text-foreground/40"
                  }`}
                >
                  {pillar.index}
                </p>
                <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em]">{pillar.title}</h3>
                <p className="mt-2 max-w-xs text-[13px] leading-6 text-muted-foreground">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* In-game */}
      <section className="relative z-10 mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-black">
            <div className="relative aspect-[1280/632]">
              <Image
                src={MH_CAPTURE_IN_GAME}
                alt="In-game view of a Monrovia-inspired street in the current Monrovia Hustle build"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">In-game</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              The city, in motion.
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-muted-foreground">
              Rain, traffic, roadside stalls, and the sound of the street. The world of Monrovia Hustle is still in
              development, but it is already alive.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link href={`${MH_BASE}/world`} className="inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline">
                World and setting
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={`${MH_BASE}/experience`} className="inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline">
                The experience
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 mx-auto max-w-[1320px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16">
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Follow development</p>
            <h2 className="mt-3 max-w-xl text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              News will land here when there is something real to share.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`${MH_BASE}/news`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              News and updates
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={`${MH_BASE}/contact`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[12px] font-medium transition-colors hover:bg-secondary"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </FranchiseShell>
  )
}
