"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Map,
  MapArc,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  useMap,
} from "@/components/ui/map"
import {
  HUIX_ARCS,
  HUIX_REACH,
  MH_GAME_ARCS,
  MH_GAME_LOCATIONS,
  type HuixLocation,
} from "@/lib/huix-locations"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

type HuixWorldMapProps = {
  variant?: "hq" | "game"
  /** Section eyebrow, e.g. "[05] GLOBAL REACH" */
  sectionLabel?: string
  title?: string
  description?: string
  className?: string
  mapHeight?: string
  /** Slow cinematic rotation */
  animate?: boolean
}

function PulsingPin({ color, primary }: { color: string; primary?: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      <span
        className="absolute h-8 w-8 rounded-full opacity-40 animate-ping"
        style={{ backgroundColor: color }}
      />
      <span
        className="absolute h-5 w-5 rounded-full opacity-25 animate-pulse"
        style={{ backgroundColor: color }}
      />
      <span
        className={`relative rounded-full border-2 border-background shadow-lg ${primary ? "h-4 w-4" : "h-3 w-3"}`}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function MapOrbit({ animate }: { animate: boolean }) {
  const { map, isLoaded } = useMap()

  useEffect(() => {
    if (!animate || !isLoaded || !map) return

    let bearing = map.getBearing()
    let raf = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = now - last
      last = now
      bearing = (bearing + dt * 0.004) % 360
      map.setBearing(bearing)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [animate, isLoaded, map])

  return null
}

export function HuixWorldMap({
  variant = "hq",
  sectionLabel = "[05] GLOBAL REACH",
  title = "ROOTED IN LIBERIA",
  description = "HUIX-2099 is built in Monrovia — with reach across West Africa, the Americas, and the diaspora.",
  className = "",
  mapHeight = "min(520px, 70vh)",
  animate = true,
}: HuixWorldMapProps) {
  const locations: HuixLocation[] = variant === "game" ? MH_GAME_LOCATIONS : HUIX_REACH
  const arcs = variant === "game" ? MH_GAME_ARCS : HUIX_ARCS

  const centerLng =
    locations.reduce((s, l) => s + l.longitude, 0) / locations.length
  const centerLat =
    locations.reduce((s, l) => s + l.latitude, 0) / locations.length

  return (
    <section className={`border-t border-border py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl"
        >
          <div
            className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            style={{ fontFamily: monoFont }}
          >
            {sectionLabel}
          </div>
          <h2
            className="text-3xl font-bold uppercase tracking-wide sm:text-4xl"
            style={{ fontFamily: "Mohican, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/40 shadow-2xl ring-1 ring-black/[0.04] dark:ring-white/[0.06]"
        >
          {/* HUD corners */}
          <div
            className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md"
            style={{ fontFamily: monoFont }}
          >
            {variant === "game" ? "MH-3D · FOOTPRINT" : "HUIX-2099 · LBR"}
          </div>
          <div
            className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md"
            style={{ fontFamily: monoFont }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Live map
          </div>

          <div style={{ height: mapHeight }} className="w-full">
            <Map
              center={[centerLng, centerLat]}
              zoom={variant === "game" ? 1.8 : 1.65}
              pitch={42}
              bearing={-12}
              projection={{ type: "globe" }}
              className="h-full w-full"
            >
              <MapOrbit animate={animate} />
              <MapControls
                position="bottom-right"
                showZoom
                showCompass
              />

              <MapArc
                data={arcs}
                curvature={0.35}
                paint={{
                  "line-color": variant === "game" ? "#BF0A30" : "#002868",
                  "line-width": 2,
                  "line-opacity": 0.55,
                }}
                hoverPaint={{
                  "line-width": 3,
                  "line-opacity": 0.95,
                }}
              />

              {locations.map((loc) => (
                <MapMarker
                  key={loc.id}
                  longitude={loc.longitude}
                  latitude={loc.latitude}
                  anchor="center"
                >
                  <MarkerContent>
                    <PulsingPin color={loc.color} primary={loc.primary} />
                  </MarkerContent>
                  <MarkerLabel
                    position="top"
                    className="rounded-md border border-border/60 bg-background/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider shadow-sm backdrop-blur-sm"
                  >
                    {loc.label}
                  </MarkerLabel>
                  <MarkerPopup closeButton className="min-w-[180px] border-border bg-card">
                    <p
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                      style={{ fontFamily: monoFont }}
                    >
                      {loc.subtitle ?? "HUIX-2099"}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{loc.name}</p>
                  </MarkerPopup>
                </MapMarker>
              ))}
            </Map>
          </div>

          {/* Location legend */}
          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex items-center gap-3 bg-background/80 px-4 py-3 backdrop-blur-sm"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: loc.color }}
                />
                <div className="min-w-0">
                  <p
                    className="truncate text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                    style={{ fontFamily: monoFont }}
                  >
                    {loc.label}
                  </p>
                  <p className="truncate text-xs text-foreground">{loc.name}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
