"use client"

import { useEffect, useRef, useState } from "react"
import {
  Check,
  Code2,
  Globe,
  Monitor,
  Smartphone,
  TriangleAlert,
} from "lucide-react"

const MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'

// Total visible boot time before fade-out (ms)
const BOOT_DURATION = 5000
const FADE_DURATION = 600

const STATUS_LINES = [
  "BOOTING HUIX-OS V20.99 — MOUNTING CORE SYSTEMS",
  "ESTABLISHING SECURE CONNECTION TO MONROVIA NODE",
  "INITIALIZING VR / XR / AR / AI ENGINE",
  "FETCHING ASSETS — COMPILING INTERFACE",
  "RENDERING THE DIGITAL FUTURE OF AFRICA",
]

const STACK = ["NEXT.JS", "REACT", "WEBXR", "THREE.JS"]

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    // Only show on a true initial page load (not on client-side nav remounts).
    if (typeof window !== "undefined" && sessionStorage.getItem("huix-booted")) {
      setHidden(true)
      return
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    // Rotate the caution status line across the boot window.
    const perStatus = BOOT_DURATION / STATUS_LINES.length
    const statusTimers = STATUS_LINES.map((_, i) =>
      window.setTimeout(() => setStatusIdx(i), perStatus * i),
    )

    // Smooth progress bar driven by rAF.
    let raf = 0
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      setProgress(Math.min(100, (elapsed / BOOT_DURATION) * 100))
      if (elapsed < BOOT_DURATION) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const endTimer = window.setTimeout(() => {
      setDone(true)
      window.setTimeout(() => {
        setHidden(true)
        document.body.style.overflow = prevOverflow
        sessionStorage.setItem("huix-booted", "1")
      }, FADE_DURATION)
    }, BOOT_DURATION)

    return () => {
      statusTimers.forEach((t) => clearTimeout(t))
      clearTimeout(endTimer)
      cancelAnimationFrame(raf)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  if (hidden) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading HUIX-2099"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background px-4 py-6 transition-opacity duration-500"
      style={{
        fontFamily: MONO,
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <div className="w-full max-w-2xl bg-transparent text-foreground">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Geometric overlapping-circles mark */}
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden className="shrink-0">
              <circle cx="10" cy="13" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="16" cy="13" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span className="text-base font-bold tracking-[0.15em] sm:text-lg">HUIX-2099</span>
          </div>
          <div className="text-right text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:text-[10px]">
            <div>ALSO LISTED AS</div>
            <div className="text-foreground">TECH / XR STUDIO</div>
            <div className="mt-1">
              VER <span className="text-foreground">99</span>
            </div>
          </div>
        </div>

        {/* Spec grid */}
        <div className="grid grid-cols-1 border-b border-border sm:grid-cols-2">
          <div className="flex items-end justify-between gap-3 border-b border-border p-5 sm:border-b-0 sm:border-r">
            <div className="space-y-2 text-[10px] uppercase tracking-[0.12em] sm:text-xs">
              <div>
                <span className="text-muted-foreground">INPUT:</span>
                <br />
                IDEA / BRIEF / REQUIREMENTS
              </div>
              <div>
                <span className="text-muted-foreground">OUTPUT:</span>
                <br />
                VR / XR / AI / 3D SYSTEMS
              </div>
              <div className="text-muted-foreground">ID: 03-2099</div>
            </div>
            <div className="flex shrink-0 items-center gap-2 text-foreground">
              <Check className="h-4 w-4" strokeWidth={1.6} />
              <Globe className="h-5 w-5" strokeWidth={1.4} />
            </div>
          </div>

          <div className="relative p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                SERVICE SCOPE
              </span>
              <div className="flex items-center gap-2 text-foreground">
                <Smartphone className="h-4 w-4" strokeWidth={1.5} />
                <Monitor className="h-4 w-4" strokeWidth={1.5} />
                <Code2 className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </div>
            <p className="max-w-[90%] text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted-foreground sm:text-[11px]">
              WE BUILD IMMERSIVE DIGITAL EXPERIENCES FROM MONROVIA — MERGING
              CREATIVITY, CULTURE, AND COMMERCE.
            </p>
            <span className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full border border-border text-[10px] font-bold">
              H
            </span>
          </div>
        </div>

        {/* Centered HUIX brand mark */}
        <div className="flex flex-col items-center justify-center border-b border-border px-5 py-10">
          <div
            className="text-center text-5xl font-bold leading-none sm:text-7xl"
            style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.14em" }}
          >
            HUIX-2099
          </div>
          <div className="mt-3 text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
            building the digital future of africa
          </div>
        </div>

        {/* Stack row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border px-5 py-3 text-[10px] uppercase tracking-[0.12em] sm:text-xs">
          <span className="text-muted-foreground">STACK</span>
          {STACK.map((s) => (
            <span key={s} className="font-bold">
              {s}
            </span>
          ))}
          <span className="text-muted-foreground">+MORE</span>
        </div>

        {/* Caution / live status */}
        <div className="p-5">
          <div className="border border-border">
            <div className="bg-foreground py-1.5 text-center text-xs font-bold uppercase tracking-[0.35em] text-background">
              BOOTING
            </div>
            <div className="flex items-center gap-4 px-4 py-4">
              <TriangleAlert className="h-7 w-7 shrink-0" strokeWidth={1.5} />
              <p className="flex-1 text-center text-[10px] uppercase leading-relaxed tracking-[0.1em] sm:text-[11px]">
                {STATUS_LINES[statusIdx]}
              </p>
              <TriangleAlert className="h-7 w-7 shrink-0" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Progress + footer */}
        <div className="border-t border-border px-5 py-4">
          <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full overflow-hidden bg-muted">
            <div
              className="h-full bg-foreground transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
            <span>©2099</span>
            <span>MADE WITH LOVE BY HUIX-2099</span>
          </div>
        </div>
      </div>
    </div>
  )
}
