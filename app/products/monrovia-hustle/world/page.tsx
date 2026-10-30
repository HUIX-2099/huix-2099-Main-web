import type { Metadata } from "next"
import Image from "next/image"
import { FranchiseShell, PageHero } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata, MH_CAPTURE_IN_GAME_NIGHT } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "World and Setting",
  "Discover how Monrovia, Liberia inspires the environmental design, urban atmosphere, cultural identity, exploration, and gameplay of Monrovia Hustle.",
  "/world",
)

const WORLD_AREAS = [
  {
    index: "01",
    title: "The streets",
    body: "Broad roads, side streets, and landmarks drawn from Monrovia’s urban character give the world its shape and its sense of direction.",
  },
  {
    index: "02",
    title: "The atmosphere",
    body: "Rain, traffic, market stalls, and the movement of the day make the city feel active rather than like an empty backdrop.",
  },
  {
    index: "03",
    title: "The culture",
    body: "Language, voices, and everyday social life carry the Liberian identity of the game and shape how the world is experienced.",
  },
  {
    index: "04",
    title: "The player’s place",
    body: "The world is meant to respond to where you go and what you do, so the city becomes part of how the game is played.",
  },
]

export default function WorldAndSettingPage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="World"
        title="Monrovia is more than a backdrop."
        description="The city provides the foundation for the game: its places, its rhythm, and the everyday life that makes the world feel real."
      />

      <section className="mx-auto max-w-[1320px] px-5 pt-12 sm:px-8 lg:px-16 lg:pt-16">
        <figure className="overflow-hidden rounded-2xl border border-border bg-black">
          <div className="relative aspect-[1280/632]">
            <Image
              src={MH_CAPTURE_IN_GAME_NIGHT}
              alt="Night street scene from the current Monrovia Hustle build"
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
            />
          </div>
        </figure>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">A sense of place</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              Inspired by the character of Liberia’s capital.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-7 text-muted-foreground lg:pt-2">
            <p>
              The setting influences the visual direction, the activities, the characters, and the possibilities of the
              game. It gives the franchise a specific identity and a familiar frame for players who know the city, while
              offering others a distinctive place to discover.
            </p>
            <p>
              The long-term ambition is a world that feels connected to the player’s presence and choices—somewhere you
              can recognize, explore, and come back to.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 sm:gap-x-12 lg:gap-x-20">
          {WORLD_AREAS.map((area) => (
            <article key={area.title} className="group">
              <p
                aria-hidden
                className="text-[clamp(2.6rem,4vw,3.6rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40"
              >
                {area.index}
              </p>
              <h3 className="mt-4 text-[16px] font-semibold">{area.title}</h3>
              <p className="mt-2 max-w-md text-[13px] leading-6 text-muted-foreground">{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Monrovia Hustle</p>
          <blockquote className="mt-6 text-[clamp(1.6rem,3.4vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
            “Build a world players can recognize, explore, and connect with.”
          </blockquote>
          <p className="mt-6 text-[11px] text-muted-foreground">Creative direction — HUIX-2099</p>
        </div>
      </section>
    </FranchiseShell>
  )
}
