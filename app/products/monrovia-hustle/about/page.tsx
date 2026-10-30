import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FranchiseShell, PageHero } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata, MH_ASSETS, MH_BASE } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "About the Franchise",
  "Learn about the origin, mission, creative philosophy, Monrovia setting, and long-term vision behind the Monrovia Hustle gaming franchise.",
  "/about",
)

const PRINCIPLES = [
  {
    title: "Start with a place",
    body: "The setting is part of the experience, not a decorative background. Locations and everyday activity inform how the world feels and functions.",
  },
  {
    title: "Make interaction meaningful",
    body: "Exploration, activities, and gameplay systems should work together to give players a clear sense of presence and agency.",
  },
  {
    title: "Build with room to grow",
    body: "The franchise is designed as a flexible identity that can support different game formats without losing its connection to Monrovia.",
  },
]

export default function AboutMonroviaHustlePage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="About"
        title="Built in Monrovia. Built to grow."
        description="Monrovia Hustle combines exploration, interactive environments, and a recognizable urban setting into one game world shaped by home."
      />

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl border border-border bg-secondary">
            <div className="relative aspect-[4/3]">
              <Image
                src={`${MH_ASSETS}/images/${encodeURIComponent("WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg")}`}
                alt="The HUIX-2099 team working on Monrovia Hustle in Monrovia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 py-3 text-[11px] text-muted-foreground">
              HUIX-2099 — developing Monrovia Hustle in Monrovia, Liberia.
            </figcaption>
          </figure>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Origin</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              A game identity shaped by home.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted-foreground">
              <p>
                Monrovia Hustle began with a straightforward idea: build an engaging game experience inspired by the
                city around us. Its identity draws from Monrovia’s urban atmosphere, local culture, everyday routines,
                and the ways people move through the city.
              </p>
              <p>
                HUIX-2099 is developing the game in Monrovia with an independent, iterative approach—using playable
                concepts to test ideas, understand what works, and refine the direction over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <article>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Our mission</p>
              <h2 className="mt-4 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                Represent an urban setting through play.
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-muted-foreground">
                Create an experience where exploration, environmental interaction, and simulation help players connect
                with a world inspired by Monrovia.
              </p>
            </article>
            <article>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Long-term vision</p>
              <h2 className="mt-4 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                Grow a recognizable Liberian game franchise.
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-muted-foreground">
                Develop a durable creative identity with room for new experiences, improved systems, and officially
                confirmed future releases.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Creative philosophy</p>
        <h2 className="mt-4 max-w-xl text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
          Clear ideas guide the experience.
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {PRINCIPLES.map((principle, index) => (
            <article key={principle.title} className="group">
              <p
                aria-hidden
                className="text-[clamp(3.4rem,6vw,5rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-[16px] font-semibold">{principle.title}</h3>
              <p className="mt-2 max-w-xs text-[13px] leading-6 text-muted-foreground">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16">
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">The foundation</p>
            <h2 className="mt-3 max-w-xl text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              See why Monrovia matters to the game.
            </h2>
          </div>
          <Link
            href={`${MH_BASE}/world`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Explore the world
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </FranchiseShell>
  )
}
