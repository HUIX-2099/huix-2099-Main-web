"use client"

import type { ReactNode } from "react"

type AmbientGlowProps = {
  /** Image whose colors bleed behind the card (YouTube ambient-mode style). */
  src?: string
  children: ReactNode
  className?: string
  /** Tailwind rounding to match the inner card (default rounded-xl). */
  rounded?: string
}

/**
 * Wraps a card and renders a blurred, scaled copy of its image behind it.
 * On hover the copy fades in and grows slightly, so the surrounding area
 * glows with the product image's own colors — like YouTube's ambient mode.
 */
export function AmbientGlow({
  src,
  children,
  className = "",
  rounded = "rounded-xl",
}: AmbientGlowProps) {
  return (
    <div className={`group/amb relative isolate ${className}`}>
      {src && (
        <>
          {/* Soft wide halo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden
            className={`pointer-events-none absolute -inset-2 -z-10 h-[calc(100%+1rem)] w-[calc(100%+1rem)] scale-100 object-cover opacity-0 blur-3xl saturate-150 transition-all duration-700 ease-out group-hover/amb:scale-110 group-hover/amb:opacity-70 ${rounded}`}
          />
          {/* Tighter, brighter core glow */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden
            className={`pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-0 blur-2xl saturate-200 transition-all duration-700 ease-out group-hover/amb:opacity-50 ${rounded}`}
          />
        </>
      )}
      {children}
    </div>
  )
}
