import type { Metadata } from "next"
import { FranchiseShell, PageHero, StatusBadge } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "The Gaming Experience",
  "Explore the Monrovia Hustle approach to world exploration, realistic simulation, game formats, immersion, and interaction—with current concept work and planned features clearly labelled.",
  "/experience",
)

const AREAS = [
  {
    index: "01",
    title: "Explore the city",
    body: "Walk the streets, learn the routes, and let the city open up. Exploration is the heart of the experience and the way the world tells its story.",
  },
  {
    index: "02",
    title: "Make your move",
    body: "Every day brings a choice about where to go and what to do next. Player choice sits at the center of how the game is played.",
  },
  {
    index: "03",
    title: "Feel the place",
    body: "Traffic, weather, voices, and street activity are part of the atmosphere. The aim is a world that feels active, grounded, and alive.",
  },
]

export default function GamingExperiencePage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="Experience"
        title="Explore. Interact. Feel part of the world."
        description="The Monrovia Hustle experience centers on discovering an interactive city and engaging with a world designed to feel like a place, not a stage."
      >
        <StatusBadge>In development</StatusBadge>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Play</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              A city you learn by moving through it.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Monrovia Hustle is built around exploring a recognizable urban world. The streets are the map, the
              activity is the atmosphere, and the choices you make give the day its shape.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {AREAS.map((area) => (
              <article key={area.title} className="group">
                <p
                  aria-hidden
                  className="text-[clamp(3rem,5vw,4.4rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40"
                >
                  {area.index}
                </p>
                <h3 className="mt-5 text-[16px] font-semibold leading-snug">{area.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Still in development</p>
              <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                The game is being built in the open, one step at a time.
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-6 text-muted-foreground">
              Features and systems in development are not final. We share progress only when it is ready to be shown.
            </p>
          </div>
        </div>
      </section>
    </FranchiseShell>
  )
}
