"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { MH_DISCORD, MH_FACEBOOK, MH_WHATSAPP, MH_YOUTUBE } from "@/lib/monrovia-hustle/franchise"
import { BrandLogo, brandLogoSrc, type Brand } from "./brand-icons"
import { HustleIdentity } from "./hustle-identity"
import { HustleGlyph, MH_PALETTE, type HustleGlyphName } from "./hustle-brand"
import "./hustle-loop.css"

const COPY = [
  {
    title: "Step onto the street",
    body: "Every run starts the same way: outside, in Monrovia, with whatever the day is already doing around you. Exploration is the heart of the experience — the city opens up as you learn it.",
    facts: [
      ["Open streets", "Broad roads, side streets and landmarks give the world its shape and its sense of direction."],
      ["Three ways through", "Walk it, take a tro-tro, or drive the same routes from behind the wheel."],
      ["A day that moves", "Traffic, weather, voices and market stalls keep the streets active around you."],
    ],
    points: ["Exploration", "Walk, tro-tro or drive"],
    asideTitle: "The city as the starting point",
    aside: [
      "Monrovia is not a backdrop here. The setting shapes the visual direction, the activities and what is possible during a run.",
      "Where you go decides what you can do next — which is why the first hour of play is mostly about learning the streets.",
    ],
    status: "World design · in development",
  },
  {
    title: "Work the day",
    body: "Routes, jobs and small trades. The city keeps score of what you do with it, and so does everyone else.",
    facts: [
      ["Your own plan", "Every day brings a choice about where to go and what to take on. Player choice sits at the centre."],
      ["Trades and routes", "Work that exists because the city does: moving things, holding a spot, knowing who to ask."],
      ["What people remember", "The city keeps score of what you do with it, and so does everyone else."],
    ],
    points: ["Side jobs", "Reputation"],
    asideTitle: "The day as a set of choices",
    aside: [
      "The hustle is the loop: a day with only so much time in it and several ways to spend that time.",
      "Nothing is fixed to one route. The same day can be worked very differently by two players.",
    ],
    status: "Systems · concept stage",
  },
  {
    title: "Make it count",
    body: "Cash, respect and a name for yourself — the things you can actually carry home at the end of a run.",
    facts: [
      ["Cash", "Pays for the next move: better routes, new ground, room to plan ahead."],
      ["Respect", "How the city responds to you, and who is willing to help when you need it."],
      ["A name", "The part that lasts between runs — what people say when you are not there."],
    ],
    points: ["Cash and clout", "Buy your next move"],
    asideTitle: "What a run leaves behind",
    aside: [
      "Earning is where the feedback lives: what you did today changes what is available tomorrow.",
      "Progression is still being tested. What is described here is the intent, not a finished feature list.",
    ],
    status: "Progression · being tested",
  },
  {
    title: "Run it again",
    body: "Tomorrow the loop starts over: different routes, different people, different consequences for the same choices.",
    facts: [
      ["Nothing wiped clean", "The point of a run is to carry something forward into the next one."],
      ["New pressure", "Routes open up, different people show up, and old choices come back with company."],
      ["Room to grow", "A flexible identity that can carry different game formats without losing Monrovia."],
    ],
    points: ["New routes", "New consequences"],
    asideTitle: "Why the loop is the design",
    aside: [
      "The run — not a level — is the unit of the game. Four words describe one day, and the day is meant to be repeated.",
      "It is also how the project is being built: a small, testable loop that can grow with each release.",
    ],
    status: "The loop · spine of the design",
  },
]

type Follow = {
  href: string
  brand: Brand
  tone: string
  label: string
  title: string
  body: string
}

// Where to follow the game, keyed by the step whose colour it lights up in:
// Facebook on blue, Discord on purple, the WhatsApp group on green and
// YouTube on red.
const FOLLOW: Record<number, Follow> = {
  0: {
    href: MH_FACEBOOK,
    brand: "facebook",
    tone: "#1877f2",
    label: "Facebook",
    title: "Follow Monrovia Hustle",
    body: "Development updates, clips and news from the game, as they happen.",
  },
  1: {
    href: MH_DISCORD,
    brand: "discord",
    tone: "#5865f2",
    label: "Discord",
    title: "Join the Discord",
    body: "Chat with players and the team. The server is opening soon.",
  },
  2: {
    href: MH_WHATSAPP,
    brand: "whatsapp",
    tone: "#25d366",
    label: "WhatsApp",
    title: "Join the WhatsApp group",
    body: "Talk with the team and other players, and hear the news first.",
  },
  3: {
    href: MH_YOUTUBE,
    brand: "youtube",
    tone: "#ff0000",
    label: "YouTube",
    title: "Watch on YouTube",
    body: "Trailers, dev logs and gameplay from the studio channel.",
  },
}

const STEPS = MH_PALETTE.map((paint, i) => ({
  ...COPY[i],
  num: `0${i + 1}`,
  word: paint.word,
  color: paint.color,
  glyph: paint.symbol as HustleGlyphName,
  side: (i % 2 === 0 ? "left" : "right") as "left" | "right",
}))

// The band only needs the paint itself; how strongly it is mixed into the
// page background is a per-theme decision and lives in the CSS.
const PAINT = STEPS.map((step) => {
  const hex = step.color.replace("#", "")
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
})

// The QR is printed in the step's own paint, pulled darker so phone cameras
// still read it reliably against the white tile.
const QR_INK = PAINT.map((rgb) => `rgb(${rgb.map((c) => Math.round(c * 0.6)).join(" ")})`)

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

function FollowCard({ follow, ink }: { follow: Follow; ink: string }) {
  return (
    <a href={follow.href} target="_blank" rel="noopener noreferrer" className="mh-loop__social">
      <span className="mh-loop__social-copy">
        <span className="mh-loop__social-head">
          <span className="mh-loop__social-icon" style={{ color: follow.tone }} aria-hidden>
            <BrandLogo brand={follow.brand} className="h-4 w-4" />
          </span>
          <span className="mh-loop__social-label">{follow.label} · tap or scan</span>
        </span>
        <span className="mh-loop__social-title">
          {follow.title}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
        <span className="mh-loop__social-body">{follow.body}</span>
      </span>
      <span className="mh-loop__social-qr">
        <QRCodeSVG
          value={follow.href}
          size={76}
          level="H"
          marginSize={0}
          fgColor={ink}
          bgColor="#ffffff"
          title={`QR code for ${follow.label}`}
          imageSettings={{ src: brandLogoSrc(follow.brand, follow.tone), width: 20, height: 20, excavate: true }}
        />
      </span>
    </a>
  )
}

/**
 * The four paints as a scroll: the mark holds the middle of the screen,
 * the information passes down one side then the other, and the background
 * settles on the colour of whichever step you are on — then leaks that
 * colour over the rest of the page as ambient light.
 */
export function HustleLoop() {
  const rootRef = useRef<HTMLElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = rootRef.current
    const mark = markRef.current
    if (!root || !mark) return

    // The colours are written on <html>, so the rest of the page can pick
    // them up as well as the band itself.
    const page = document.documentElement
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".mh-loop__step"))
    let frame = 0

    const update = () => {
      frame = 0
      const box = root.getBoundingClientRect()
      const view = window.innerHeight || 1
      // 0 when the first step is centred, 3 when the last one is.
      const raw = (view / 2 - box.top) / view - 0.5
      const pos = clamp(raw, 0, STEPS.length - 1)
      const near = Math.round(pos)

      // Each step's distance from the centre of the screen drives its
      // parallax: the two columns drift apart as it arrives and leaves.
      steps.forEach((step, i) => {
        step.style.setProperty("--mh-d", still ? "0" : clamp(raw - i, -1.5, 1.5).toFixed(4))
      })

      // One paint at a time: the page is fully blue, purple, green or red,
      // never a blend of two. The CSS eases the switch so it does not flash.
      const paint = `rgb(${PAINT[near].join(" ")})`
      page.style.setProperty("--mh-glow-a", paint)
      page.style.setProperty("--mh-glow-b", paint)

      // The light does not stop at the band: it ramps up over the section
      // before the loop and carries on fading over the one after it.
      const away = box.top > 0 ? box.top - view : view - box.bottom
      const reach = clamp(1 - Math.max(away, 0) / (view * 1.9), 0, 1)
      page.style.setProperty("--mh-mood-strength", reach.toFixed(3))

      mark.style.setProperty("--mh-p", still ? "0" : clamp((pos - near) * 2, -1, 1).toFixed(4))

      setActive((prev) => (prev === near ? prev : near))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={rootRef} className="mh-loop" aria-label="The Monrovia Hustle loop">
      <div className="mh-loop__mood" aria-hidden />
      <div className="mh-loop__stage">
        <div className="mh-loop__wash" aria-hidden />
        <div ref={markRef} className="mh-loop__mark">
          <HustleIdentity active={active} drift="parent" />
        </div>
        <div className="mh-loop__rail" aria-hidden>
          {STEPS.map((step, i) => (
            <span
              key={step.word}
              className="mh-loop__rail-item"
              data-on={i === active}
              style={{ ["--c" as string]: step.color }}
            >
              <span className="mh-loop__rail-word">{step.word}</span>
              <span className="mh-loop__rail-bar" />
            </span>
          ))}
        </div>
        <p className="mh-loop__hint">Scroll the loop</p>
      </div>

      <div className="mh-loop__steps">
        {STEPS.map((step, i) => {
          const follow = FOLLOW[i]
          return (
          <article
            key={step.word}
            className={`mh-loop__step mh-loop__step--${step.side}`}
            data-on={i === active}
            style={{ ["--c" as string]: step.color }}
          >
            <div className="mh-loop__card">
              {/* Some steps also carry a way to follow the game, lit with the
                  step's own colour. It always heads the left-hand block. */}
              {follow && step.side === "left" && <FollowCard follow={follow} ink={QR_INK[i]} />}
              <p className="mh-loop__key">
                <span className="mh-loop__rule" aria-hidden />
                <span className="mh-loop__num">{step.num}</span>
                <span style={{ color: step.color }}>
                  <HustleGlyph name={step.glyph} className="h-3.5 w-3.5" />
                </span>
              </p>
              <h3 className="mh-loop__title">{step.title}</h3>
              <p className="mh-loop__body">{step.body}</p>
              <dl className="mh-loop__facts">
                {step.facts.map(([term, line]) => (
                  <div className="mh-loop__fact" key={term}>
                    <dt>{term}</dt>
                    <dd>{line}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mh-loop__points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <aside className="mh-loop__aside">
              {follow && step.side === "right" && <FollowCard follow={follow} ink={QR_INK[i]} />}
              <p className="mh-loop__status">{step.status}</p>
              <h4 className="mh-loop__aside-title">{step.asideTitle}</h4>
              {step.aside.map((line) => (
                <p className="mh-loop__aside-body" key={line}>
                  {line}
                </p>
              ))}
            </aside>
          </article>
          )
        })}
      </div>
    </section>
  )
}
