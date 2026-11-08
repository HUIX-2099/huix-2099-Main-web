import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"
import { FranchiseShell } from "@/components/monrovia-hustle/franchise-shell"
import { PaintBand } from "@/components/monrovia-hustle/hustle-band"
import { MH_TRAILER_YOUTUBE_URL } from "@/components/monrovia-hustle/concept-hero"
import { HustleIdentity } from "@/components/monrovia-hustle/hustle-identity"
import { franchiseMetadata, MH_ASSETS, MH_BASE } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "About the Franchise",
  "Learn about the origin, mission, creative philosophy, Monrovia setting, and long-term vision behind the Monrovia Hustle gaming franchise.",
  "/about",
)

const PHOTO = (name: string) => `${MH_ASSETS}/images/${encodeURIComponent(name)}`

const PRINCIPLES = [
  {
    title: "Start with a place",
    body: "The setting is part of the experience, not a decorative background.",
  },
  {
    title: "Make interaction meaningful",
    body: "Exploration, activities and systems give a clear sense of presence and agency.",
  },
  {
    title: "Build with room to grow",
    body: "A flexible identity that can carry different game formats without losing Monrovia.",
  },
]

export default function AboutMonroviaHustlePage() {
  return (
    <FranchiseShell>
      {/* 01 — the page opens on the poster itself */}
      <PaintBand paint="blue">
        <div className="mh-band__info">
          <p className="mh-band__eyebrow">Monrovia Hustle / About</p>
          <span className="mh-band__rule" aria-hidden />
          <h1 className="mh-band__title mh-band__title--lead">Built in Monrovia. Built to grow.</h1>
          <p className="mh-band__body">
            Monrovia Hustle combines exploration, interactive environments, and a recognizable urban setting into one
            game world shaped by home.
          </p>
          <div className="mh-band__actions">
            <Link href={`${MH_BASE}/world`} className="mh-band__cta mh-band__cta--solid">
              Explore the world
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={MH_TRAILER_YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="mh-band__cta">
              <Play className="h-3.5 w-3.5" />
              Watch trailer
            </a>
          </div>
          <p className="mh-band__word">01 — Hustle</p>
        </div>
        <div className="mh-band__media mh-band__media--mark">
          <HustleIdentity />
        </div>
      </PaintBand>

      {/* 02 — where it comes from */}
      <PaintBand paint="purple" prev="blue">
        <div className="mh-band__media">
          <Image
            src={PHOTO("WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg")}
            alt="The HUIX-2099 team working on Monrovia Hustle in Monrovia"
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="mh-band__info">
          <p className="mh-band__eyebrow">Origin</p>
          <span className="mh-band__rule" aria-hidden />
          <h2 className="mh-band__title">A game identity shaped by home.</h2>
          <p className="mh-band__body">
            Monrovia Hustle began with a straightforward idea: build an engaging game experience inspired by the city
            around us. Its identity draws from Monrovia’s urban atmosphere, local culture, everyday routines, and the
            ways people move through the city.
          </p>
          <p className="mh-band__body">
            HUIX-2099 is developing the game in Monrovia with an independent, iterative approach—using playable
            concepts to test ideas, understand what works, and refine the direction over time.
          </p>
          <p className="mh-band__word">02 — Grind</p>
        </div>
      </PaintBand>

      {/* 03 — what it is for */}
      <PaintBand paint="green" prev="purple" media="right">
        <div className="mh-band__info">
          <p className="mh-band__eyebrow">Mission &amp; vision</p>
          <span className="mh-band__rule" aria-hidden />
          <h2 className="mh-band__title">Represent an urban setting through play.</h2>
          <p className="mh-band__body">
            Create an experience where exploration, environmental interaction, and simulation help players connect with
            a world inspired by Monrovia.
          </p>
          <h2 className="mh-band__title mh-band__title--sub">Grow a recognizable Liberian game franchise.</h2>
          <p className="mh-band__body">
            Develop a durable creative identity with room for new experiences, improved systems, and officially
            confirmed future releases.
          </p>
          <p className="mh-band__word">03 — Earn</p>
        </div>
        <div className="mh-band__media">
          <Image
            src={PHOTO("WhatsApp Image 2026-05-04 at 11.57.52 PM (1).jpeg")}
            alt="A HUIX-2099 developer building Monrovia Hustle on a laptop with a controller in hand"
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </PaintBand>

      {/* 04 — how it is built */}
      <PaintBand paint="red" prev="green">
        <div className="mh-band__media">
          <Image
            src={PHOTO("WhatsApp Image 2026-05-04 at 11.57.52 PM (2).jpeg")}
            alt="The team reviewing a Monrovia Hustle build projected on the wall"
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="mh-band__info">
          <p className="mh-band__eyebrow">Creative philosophy</p>
          <span className="mh-band__rule" aria-hidden />
          <h2 className="mh-band__title">Clear ideas guide the experience.</h2>
          <ul className="mh-band__list">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title}>
                <strong>
                  {String(index + 1).padStart(2, "0")} {principle.title}
                </strong>
                {principle.body}
              </li>
            ))}
          </ul>
          <div className="mh-band__actions">
            <Link href={`${MH_BASE}/world`} className="mh-band__cta mh-band__cta--solid">
              See why Monrovia matters
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mh-band__word">04 — Repeat</p>
        </div>
      </PaintBand>
    </FranchiseShell>
  )
}
