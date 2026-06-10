"use client"

import Image from "next/image"
import Link from "next/link"
import { Plane } from "lucide-react"

const MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'

/** Deterministic CSS barcode so it renders identically on server + client. */
function Barcode({ value, className = "h-9" }: { value: string; className?: string }) {
  let seed = 0
  for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) >>> 0

  const bars = Array.from({ length: 52 }, (_, i) => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    const w = (seed % 3) + 1
    const gap = ((seed >> 3) % 2) + 1
    return { w, gap, key: i }
  })

  return (
    <div className={`flex items-end gap-[1.5px] ${className}`} aria-hidden>
      {bars.map((b) => (
        <span
          key={b.key}
          className="h-full bg-current"
          style={{ width: `${b.w}px`, marginRight: `${b.gap}px` }}
        />
      ))}
    </div>
  )
}

/** Small crosshair registration mark, brutalist style. */
function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <circle cx="8" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 0v4M8 12v4M0 8h4M12 8h4" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export type BoardingPassProps = {
  airline: string
  flight: string
  from: { code: string; label: string }
  to: { code: string; label: string }
  rows?: { label: string; value: string }[]
  id: string
  image?: string
  href?: string
  tone?: "default" | "invert"
  cta?: string
  className?: string
}

export function BoardingPass({
  airline,
  flight,
  from,
  to,
  rows = [],
  id,
  image,
  href,
  tone = "default",
  cta,
  className = "",
}: BoardingPassProps) {
  const invert = tone === "invert"
  const base = invert
    ? "bg-foreground text-background"
    : "bg-card text-foreground border border-border"
  const dashed = invert ? "border-background/25" : "border-border"
  const muted = invert ? "text-background/55" : "text-muted-foreground"
  // notch color = page background so the cut looks punched through
  const notch = "bg-background"

  const Inner = (
    <div
      className={`group relative overflow-hidden rounded-2xl ${base} transition-transform duration-300 ${
        href ? "hover:-translate-y-1" : ""
      } ${className}`}
      style={{ fontFamily: MONO }}
    >
      {/* corner crosshairs */}
      <Crosshair className={`pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 ${muted}`} />
      <Crosshair className={`pointer-events-none absolute right-3 bottom-3 h-3.5 w-3.5 ${muted}`} />

      {/* header */}
      <div className={`flex items-center justify-between border-b border-dashed ${dashed} px-5 py-3 text-[9px] uppercase tracking-[0.2em] ${muted}`}>
        <span className="truncate">{airline}</span>
        <span className="shrink-0 pl-3">{flight}</span>
      </div>

      {/* optional image band */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${from.code} ${to.code}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {/* FROM → TO */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-5">
        <div>
          <div className={`text-[8px] uppercase tracking-[0.2em] ${muted}`}>From</div>
          <div className="text-3xl font-bold leading-none tracking-tight">{from.code}</div>
          <div className={`mt-1 text-[10px] uppercase tracking-[0.1em] ${muted}`}>{from.label}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className={`text-[8px] ${muted}`}>+ + +</span>
          <Plane className="h-4 w-4 rotate-90" strokeWidth={1.6} />
        </div>
        <div className="text-right">
          <div className={`text-[8px] uppercase tracking-[0.2em] ${muted}`}>To</div>
          <div className="text-3xl font-bold leading-none tracking-tight">{to.code}</div>
          <div className={`mt-1 text-[10px] uppercase tracking-[0.1em] ${muted}`}>{to.label}</div>
        </div>
      </div>

      {/* meta rows */}
      {rows.length > 0 && (
        <div className={`grid grid-cols-2 gap-x-4 gap-y-3 border-t border-dashed ${dashed} px-5 py-4 sm:grid-cols-3`}>
          {rows.map((r) => (
            <div key={r.label}>
              <div className={`text-[8px] uppercase tracking-[0.18em] ${muted}`}>{r.label}</div>
              <div className="mt-0.5 truncate text-xs font-semibold uppercase tracking-wide">{r.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* perforation + notches */}
      <div className="relative">
        <div className={`mx-5 border-t border-dashed ${dashed}`} />
        <span className={`absolute -left-3 -top-3 h-6 w-6 rounded-full ${notch}`} />
        <span className={`absolute -right-3 -top-3 h-6 w-6 rounded-full ${notch}`} />
      </div>

      {/* barcode footer */}
      <div className="flex items-end justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <Barcode value={id} />
          <div className={`mt-1.5 text-[9px] uppercase tracking-[0.2em] ${muted}`}>{id}</div>
        </div>
        {cta ? (
          <span className="shrink-0 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all group-hover:gap-3">
            {cta} <span>↗</span>
          </span>
        ) : (
          <span className={`shrink-0 text-[9px] uppercase tracking-[0.2em] ${muted}`}>HUIX-2099</span>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {Inner}
      </Link>
    )
  }
  return Inner
}
