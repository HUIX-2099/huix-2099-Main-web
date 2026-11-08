import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { MH_BASE, MH_LOGO_WHITE, MH_TRAILER_YOUTUBE_URL } from "@/lib/monrovia-hustle/franchise"
import { MH_PALETTE } from "./hustle-brand"
import { HeroVideo } from "./hero-video"
import "./hustle-hero.css"

const BADGE_TEXT = "Watch the trailer • Monrovia Hustle • HUIX-2099 • "

/**
 * The opening screen, the same in both themes: the Monrovia Hustle wordmark large
 * on the left with the four paints run under it as a bar, the terminal film
 * on the right (an old computer playing the particle cut: the city, the
 * controller, the logo) and the small print pinned to the corners.
 */
export function HustleHero() {
  return (
    <section className="mh-stage" aria-labelledby="mh-stage-title">
      <HeroVideo className="mh-stage__video" />

      <p className="mh-stage__corner mh-stage__corner--tl">
        A HUIX-2099 game
        <br />
        Monrovia, Liberia
      </p>
      <p className="mh-stage__corner mh-stage__corner--tr">
        PC
        <br />
        In development
      </p>

      <div className="mh-stage__title-wrap">
        <h1 id="mh-stage-title" className="mh-stage__title">
          <Image
            src={MH_LOGO_WHITE}
            alt="Monrovia Hustle"
            width={3840}
            height={399}
            priority
            sizes="(max-width: 760px) 92vw, 46vw"
            className="mh-stage__logo"
          />
        </h1>
        <span className="mh-stage__bar" aria-hidden>
          {MH_PALETTE.map((paint) => (
            <i key={paint.name} style={{ background: paint.color }} />
          ))}
        </span>
        <p className="mh-stage__caption">
          <span>
            Experience the streets.
            <br />
            Discover the hustle.
          </span>
        </p>
      </div>

      <ul className="mh-stage__corner mh-stage__corner--bl mh-stage__loop">
        {MH_PALETTE.map((paint) => (
          <li key={paint.name} style={{ ["--c" as string]: paint.color }}>
            {paint.word}
          </li>
        ))}
      </ul>

      <div className="mh-stage__scroll" aria-hidden>
        <span />
      </div>

      <a
        href={MH_TRAILER_YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mh-stage__badge"
        aria-label="Watch the Monrovia Hustle trailer on YouTube"
      >
        <svg viewBox="0 0 100 100" className="mh-stage__badge-ring" aria-hidden>
          <defs>
            <path id="mh-stage-ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
          </defs>
          <text>
            <textPath href="#mh-stage-ring">{BADGE_TEXT}</textPath>
          </text>
        </svg>
        <span className="mh-stage__badge-core" aria-hidden>
          <Play className="h-4 w-4" />
        </span>
      </a>

      <Link href={`${MH_BASE}/about`} className="mh-stage__corner mh-stage__corner--br mh-stage__cta">
        Explore the game
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </section>
  )
}
