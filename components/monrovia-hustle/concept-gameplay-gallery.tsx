"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export type ConceptGalleryItem =
  | { kind: "video"; posterSrc: string; alt: string }
  | { kind: "image"; src: string; alt: string }

type Props = {
  items: ConceptGalleryItem[]
  trailerHref: string
  /** Large Steam-style hero: bigger viewer, oversized play control, footer bar */
  variant?: "default" | "hero"
}

function thumbSource(item: ConceptGalleryItem) {
  return item.kind === "video" ? item.posterSrc : item.src
}

export function ConceptGameplayGallery({ items, trailerHref, variant = "default" }: Props) {
  const [active, setActive] = useState(0)
  const hero = variant === "hero"
  if (items.length === 0) return null

  const current = items[Math.min(active, items.length - 1)]!

  return (
    <div className={hero ? "space-y-3" : "space-y-2"}>
      <div
        className={`relative w-full overflow-hidden border border-black/15 bg-black shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] dark:border-white/[0.08] dark:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] ${hero ? "aspect-video min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] xl:min-h-[460px] 2xl:min-h-[500px]" : "aspect-video"}`}
      >
        {current.kind === "video" ? (
          <a href={trailerHref} target="_blank" rel="noopener noreferrer" className="group relative block size-full">
            <Image
              src={current.posterSrc}
              alt={current.alt}
              fill
              className="object-cover opacity-92 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.01]"
              sizes={hero ? "(max-width:1024px) 100vw, min(1200px, 78vw)" : "(max-width:1024px) 100vw, 72vw"}
              priority
            />
            {/* Dim vignette */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] opacity-70" aria-hidden />
            <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25 transition duration-300 group-hover:bg-black/38">
              <span
                className={`relative flex items-center justify-center rounded-full bg-gradient-to-b from-white/95 to-white/78 text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-4 ring-[#BF0A30] ring-offset-4 ring-offset-black/55 transition duration-300 group-hover:scale-105 group-hover:ring-offset-[#BF0A30]/40 ${hero ? "size-[5.25rem] sm:size-28 md:size-32" : "size-16"}`}
              >
                <Play className={`fill-black text-black drop-shadow-sm ${hero ? "ml-1 size-12 sm:size-14 md:size-16" : "ml-0.5 h-7 w-7"}`} aria-hidden />
              </span>
              <span className="flex flex-col items-center gap-1 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className={`font-bold uppercase tracking-[0.2em] text-white ${hero ? "text-[12px] sm:text-[13px]" : "text-[11px]"}`}>
                  Play trailer
                </span>
                {hero && <span className="text-[11px] font-normal text-white/85">Opens on YouTube in a new tab</span>}
              </span>
            </span>
          </a>
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes={hero ? "(max-width:1024px) 100vw, min(1200px, 78vw)" : "(max-width:1024px) 100vw, 72vw"}
            priority={active === 0}
          />
        )}

        {/* Steam-ish bottom media bar */}
        {hero && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-2 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-12 text-[11px] text-white sm:px-5 sm:text-xs">
            <span className="font-semibold uppercase tracking-wide opacity-95">
              {current.kind === "video" ? "Trailer · Monrovia Hustle 3D" : `Screenshot · ${current.alt}`}
            </span>
            <span className="tabular-nums opacity-70">
              {active + 1} / {items.length}
            </span>
          </div>
        )}
      </div>

      <div
        className={`flex gap-1.5 overflow-x-auto pb-1 pt-0.5 [scrollbar-width:thin] ${hero ? "[scrollbar-color:hsl(var(--muted-foreground))_transparent]" : ""}`}
        role="tablist"
        aria-label="Videos and screenshots"
      >
        {items.map((item, idx) => {
          const sel = idx === active
          return (
            <button
              key={`${thumbSource(item)}-${idx}`}
              type="button"
              role="tab"
              aria-selected={sel}
              onClick={() => setActive(idx)}
              className={`relative shrink-0 overflow-hidden border-2 transition outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[#BF0A30] ${
                hero ? "h-[72px] w-[126px] sm:h-[82px] sm:w-[146px]" : "h-14 w-[88px] sm:h-[72px] sm:w-[120px]"
              } ${
                sel
                  ? "border-[#002868] opacity-100 ring-1 ring-[#002868]/40 dark:border-[#7eb3ff]"
                  : "border-transparent opacity-65 hover:border-foreground/25 hover:opacity-100"
              }`}
            >
              <Image src={thumbSource(item)} alt={item.alt} fill className="object-cover" sizes={hero ? "160px" : "120px"} />
              {item.kind === "video" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/45">
                  <Play className={`fill-white text-white drop-shadow-md ${hero ? "h-8 w-8" : "h-6 w-6"}`} aria-hidden />
                </span>
              )}
            </button>
          )
        })}
      </div>

      {!hero && (
        <p className="text-[11px] leading-snug text-muted-foreground">
          Thumbnails work like a Steam store carousel — switch stills; trailer tile opens YouTube when you hit play.
        </p>
      )}
    </div>
  )
}
