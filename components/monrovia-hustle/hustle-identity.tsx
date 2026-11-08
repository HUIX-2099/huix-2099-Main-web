"use client"

import { Fragment, useEffect, useId, useRef, useState } from "react"
import { MH_GLYPHS, MH_PALETTE, type HustleGlyphName } from "./hustle-brand"
import { cn } from "@/lib/utils"
import "./hustle-identity.css"

// Geometry lifted from the poster source: four brush bars and the four
// controller shapes that sit at the head of each one. The depths drive the
// parallax — each column drifts at its own speed while the page scrolls.
const COLUMNS: {
  word: string
  bar: { left: string; top: string; width: string; height: string }
  symbol: { left: string; name: HustleGlyphName; extra?: Record<string, string> }
  depth: number
}[] = [
  {
    word: "Hustle",
    bar: { left: "12.2cqw", top: "68.6cqw", width: "15.6cqw", height: "72.8cqw" },
    symbol: { left: "20cqw", name: "cross" },
    depth: 34,
  },
  {
    word: "Grind",
    bar: { left: "32cqw", top: "68.8cqw", width: "15.6cqw", height: "71.5cqw" },
    symbol: { left: "39.8cqw", name: "square" },
    depth: -22,
  },
  {
    word: "Earn",
    bar: { left: "51cqw", top: "69.3cqw", width: "15.6cqw", height: "72cqw" },
    symbol: { left: "58.8cqw", name: "triangle", extra: { width: "16cqw", marginLeft: "-8cqw" } },
    depth: 26,
  },
  {
    word: "Repeat",
    bar: { left: "70.2cqw", top: "68.6cqw", width: "16.6cqw", height: "73.5cqw" },
    symbol: { left: "78.5cqw", name: "circle" },
    depth: -38,
  },
]

const SEEDS = [3, 17, 29, 41]

/**
 * The paint, chalk and wear textures are SVG filters measured in pixels, so
 * they are rebuilt whenever the artwork changes size. That keeps the brush
 * strokes looking the same on a phone and on a big screen.
 */
function buildFilters(uid: string, width: number) {
  const k = Math.max(width, 1) / 500 // 1 when the art is 500px wide
  const f = (n: number) => (n / k).toFixed(4) // noise size follows the art
  const s = (n: number) => (n * k).toFixed(1) // push distance follows the art
  // On a phone the bars are only a few dozen pixels wide, so the same
  // texture would chew up the words. Small sizes get a milder brush.
  const q = Math.min(1, Math.max(0.35, (k - 0.28) / 0.72))
  const pores = (slope: number, offset: number, extra: number) =>
    `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${(-slope * q).toFixed(1)} ${(offset + extra * (1 - q)).toFixed(2)}`

  const bars = SEEDS.map((seed, i) => {
    // Each column of paint is pushed up or down by a different amount,
    // which gives the dry, streaky ends of a real brush stroke.
    return `
      <filter id="${uid}-bar-${i + 1}" x="-30%" y="-15%" width="160%" height="130%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="${f(0.16)} ${f(0.006)}" numOctaves="5" seed="${seed}" result="streak"/>
        <feColorMatrix in="streak" type="matrix" values="0.15 0 0 0 0.425  0 1 0 0 0  0 0 1 0 0  0 0 0 0 1" result="push"/>
        <feDisplacementMap in="SourceGraphic" in2="push" scale="${s(42 * q)}" xChannelSelector="R" yChannelSelector="B" result="paint"/>
        <feTurbulence type="fractalNoise" baseFrequency="${f(0.7)}" numOctaves="2" seed="${seed + 5}" result="grain"/>
        <feColorMatrix in="grain" type="matrix" values="${pores(18, 13, 5)}" result="pores"/>
        <feComposite in="paint" in2="pores" operator="in" result="holed"/>
        <feTurbulence type="fractalNoise" baseFrequency="${f(0.03)}" numOctaves="4" seed="${seed + 9}" result="tone"/>
        <feColorMatrix in="tone" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.8 0 0 0 -0.4" result="shade"/>
        <feComposite in="shade" in2="holed" operator="atop"/>
      </filter>`
  }).join("")

  // Chalky symbols: slightly wobbly lines with dust gaps.
  const chalk = `
    <filter id="${uid}-chalk" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="${f(0.06)}" numOctaves="2" seed="5" result="wobble"/>
      <feDisplacementMap in="SourceGraphic" in2="wobble" scale="${s(5 * q)}" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="${f(0.8)}" numOctaves="2" seed="21" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="${pores(11, 7.2, 3)}" result="holes"/>
      <feComposite in="rough" in2="holes" operator="in"/>
    </filter>`

  // Worn letters: small gaps let the paint show through.
  const worn = `
    <filter id="${uid}-worn" x="-25%" y="-10%" width="150%" height="120%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="${f(0.05)}" numOctaves="2" seed="4" result="wobble"/>
      <feDisplacementMap in="SourceGraphic" in2="wobble" scale="${s(2 * q)}" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="${f(0.6)}" numOctaves="2" seed="11" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="${pores(16, 10.9, 4)}" result="holes"/>
      <feComposite in="rough" in2="holes" operator="in"/>
    </filter>`

  return bars + chalk + worn
}

/**
 * The Monrovia Hustle mark, drawn live instead of shipped as a flat image:
 * the four painted words and their controller keys, on the page's own
 * background, drifting in parallax as you scroll past them.
 */
export function HustleIdentity({
  className,
  active,
  drift = "self",
}: {
  className?: string
  /** Which column is lit; the others drop back. Omit to keep them even. */
  active?: number
  /** "self" follows the page scroll; "parent" lets a wrapper drive --mh-p. */
  drift?: "self" | "parent"
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "")
  const rootRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const [defs, setDefs] = useState(() => buildFilters(uid, 500))

  // The textures are measured in pixels, so they follow the rendered size.
  useEffect(() => {
    const art = artRef.current
    if (!art) return
    const render = () => setDefs(buildFilters(uid, art.offsetWidth))
    render()
    const observer = new ResizeObserver(render)
    observer.observe(art)
    return () => observer.disconnect()
  }, [uid])

  // Scroll progress of the artwork, written to --mh-p for the CSS to use.
  useEffect(() => {
    const el = rootRef.current
    if (!el || drift === "parent") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const box = el.getBoundingClientRect()
      const view = window.innerHeight || 1
      const span = view / 2 + box.height / 2
      const offset = box.top + box.height / 2 - view / 2
      el.style.setProperty("--mh-p", Math.max(-1, Math.min(1, offset / span)).toFixed(4))
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
  }, [drift])

  return (
    <div
      ref={rootRef}
      className={cn("mh-id", className)}
      role="img"
      aria-label="Monrovia Hustle — Hustle, Grind, Earn, Repeat"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true" dangerouslySetInnerHTML={{ __html: defs }} />

      <div ref={artRef} className="mh-id__art">
        {COLUMNS.map((column, i) => {
          const glyph = MH_GLYPHS[column.symbol.name]
          const paint = MH_PALETTE[i]
          // The field behind the poster is now a saturated colour, so the
          // columns that are not lit still have to keep their own paint: they
          // drop back only slightly instead of ghosting into the background.
          const lit = active === undefined || active === i ? 1 : 0.78
          return (
            <Fragment key={paint.name}>
              <svg
                className="mh-id__symbol"
                style={{
                  left: column.symbol.left,
                  stroke: paint.color,
                  filter: `url(#${uid}-chalk)`,
                  opacity: lit,
                  ["--d" as string]: column.depth,
                  ...column.symbol.extra,
                }}
                viewBox={glyph.viewBox}
                strokeWidth={glyph.strokeWidth}
                strokeLinejoin="miter"
                aria-hidden="true"
              >
                {glyph.body}
              </svg>

              <div
                className="mh-id__bar"
                style={{
                  ...column.bar,
                  ["--c" as string]: paint.color,
                  ["--d" as string]: column.depth,
                  opacity: lit,
                }}
              >
                <span className="mh-id__paint" style={{ filter: `url(#${uid}-bar-${i + 1})` }} />
                <span className="mh-id__wear" style={{ filter: `url(#${uid}-worn)` }}>
                  <span className="mh-id__word">{column.word}</span>
                </span>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
