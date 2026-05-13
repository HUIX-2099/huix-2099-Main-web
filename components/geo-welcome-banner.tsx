"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe2, MapPin, X } from "lucide-react"

/** Only used under `/products/monrovia-hustle/*` — separate from site-wide cookie consent. */
const STORAGE_KEY = "monrovia-hustle-geo-welcome-v1"

type Variant = "liberia" | "world"

export function GeoWelcomeBanner() {
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState<Variant>("world")

  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem(STORAGE_KEY)) return

    let cancelled = false

    const timer = window.setTimeout(async () => {
      let liberia = false
      try {
        const ctrl = new AbortController()
        const t = window.setTimeout(() => ctrl.abort(), 6500)
        const res = await fetch("https://get.geojs.io/v1/ip/geo.json", {
          signal: ctrl.signal,
        })
        window.clearTimeout(t)
        if (!res.ok) throw new Error("geo")
        const data = (await res.json()) as { country_code?: string }
        const code = (data.country_code || "").toUpperCase()
        liberia = code === "LR"
      } catch {
        liberia = false
      }

      if (cancelled) return
      setVariant(liberia ? "liberia" : "world")
      setOpen(true)
    }, 4000)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1")
    setOpen(false)
  }

  const title =
    variant === "liberia"
      ? "Looks like you’re in Liberia"
      : "You’re visiting Monrovia Hustle from outside Liberia"

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="geo-welcome-title"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed z-[104] max-lg:left-4 max-lg:right-4 max-lg:bottom-[calc(var(--mobile-tab-bar-spacing)+14rem)] lg:bottom-4 lg:left-4 lg:right-auto lg:w-[min(100vw-2rem,420px)]"
        >
          <div className="rounded-xl border border-border bg-card p-5 shadow-2xl sm:p-6">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#002868]/15 text-[#002868] dark:bg-[#002868]/25 dark:text-[#7eb3ff]">
                  {variant === "liberia" ? (
                    <MapPin className="h-5 w-5" aria-hidden />
                  ) : (
                    <Globe2 className="h-5 w-5" aria-hidden />
                  )}
                </div>
                <h3
                  id="geo-welcome-title"
                  className="text-base font-bold leading-snug text-foreground sm:text-lg"
                  style={{
                    fontFamily: "Mohican, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  {title}
                </h3>
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close welcome message"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {variant === "liberia" ? (
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  HUIX-2099 is rooted in Monrovia — seeing interest from home means a lot. Thanks for stopping by the
                  site and checking out what we&apos;re building.
                </p>
                <p>
                  From prototypes like Monrovia Hustle to VR and tooling experiments, we&apos;re glad you&apos;re here.
                  Explore at your pace; we hope something on the site sparks ideas or conversation.
                </p>
                <p className="text-xs text-muted-foreground/90">
                  We guessed &quot;Liberia&quot; from your network region (not GPS). This message shows once on this device
                  — not stored on our servers.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Monrovia Hustle 3D is a HUIX-2099 prototype rooted in Monrovia — when the dossier gets traffic from
                  abroad, it reminds us the story can travel. Thanks for opening this slice.
                </p>
                <p>
                  Use the hub and concept pages at your pace: trailer, voice cast, build notes. If something lands,
                  we&apos;re grateful; if you want to reach the studio, the main site contact form is the lane we check.
                </p>
                <p className="text-xs text-muted-foreground/90">
                  Country is inferred from your connection (approximate). This Monrovia Hustle pop-up only appears once
                  in this browser unless you clear site data.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={dismiss}
              className="mt-5 w-full rounded-md bg-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-colors hover:bg-foreground/90"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
              }}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
