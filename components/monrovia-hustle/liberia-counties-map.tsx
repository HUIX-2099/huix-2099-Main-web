"use client"

import { motion } from "framer-motion"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map"
import {
  LIBERIA_COUNTIES,
  LIBERIA_MAP_BOUNDS,
  LIBERIA_MAP_CENTER,
  type LiberiaCounty,
} from "@/lib/liberia-counties"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

const COUNTY_COLOR = "#002868"
const MONROVIA_RED = "#BF0A30"

function CountyPin({ county }: { county: LiberiaCounty }) {
  if (county.isMonrovia) {
    return (
      <div className="relative flex items-center justify-center">
        <span
          className="absolute h-14 w-14 rounded-full opacity-30 animate-ping"
          style={{ backgroundColor: MONROVIA_RED }}
        />
        <span
          className="absolute h-10 w-10 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: COUNTY_COLOR }}
        />
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-[#BF0A30] shadow-[0_0_20px_rgba(191,10,48,0.55)] ring-2 ring-[#002868]/80">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center">
      <span
        className="relative h-3 w-3 rounded-full border-2 border-white shadow-md"
        style={{ backgroundColor: COUNTY_COLOR }}
      />
    </div>
  )
}

type LiberiaCountiesMapProps = {
  sectionLabel?: string
  title?: string
  description?: string
  className?: string
  mapHeight?: string
}

export function LiberiaCountiesMap({
  sectionLabel = "MH-3D · LIBERIA MAP",
  title = "ALL 15 COUNTIES · MONROVIA AT THE CENTER",
  description = "Monrovia Hustle 3D is rooted in Liberia's capital — every county on the map is part of the world we're building toward.",
  className = "",
  mapHeight = "min(520px, 65vh)",
}: LiberiaCountiesMapProps) {
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
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/40 shadow-2xl ring-1 ring-black/[0.04] dark:ring-white/[0.06]"
        >
          <div
            className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md"
            style={{ fontFamily: monoFont }}
          >
            Liberia · LBR
          </div>
          <div
            className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#BF0A30]/40 bg-background/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] backdrop-blur-md"
            style={{ fontFamily: monoFont }}
          >
            <span className="h-2 w-2 rounded-full bg-[#BF0A30] animate-pulse" />
            Monrovia · capital
          </div>

          <div style={{ height: mapHeight }} className="w-full">
            <Map
              center={LIBERIA_MAP_CENTER}
              zoom={6.85}
              pitch={0}
              bearing={0}
              maxBounds={LIBERIA_MAP_BOUNDS}
              minZoom={5.8}
              maxZoom={10}
              className="h-full w-full"
            >
              <MapControls position="bottom-right" showZoom showCompass={false} />

              {LIBERIA_COUNTIES.filter((c) => !c.isMonrovia).map((county) => (
                <MapMarker
                  key={county.id}
                  longitude={county.longitude}
                  latitude={county.latitude}
                  anchor="center"
                >
                  <MarkerContent>
                    <CountyPin county={county} />
                  </MarkerContent>
                  <MarkerLabel
                    position="top"
                    className="rounded-md border border-border/60 bg-background/90 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm"
                  >
                    {county.name}
                  </MarkerLabel>
                  <MarkerPopup closeButton className="min-w-[180px] border-border bg-card">
                    <p
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                      style={{ fontFamily: monoFont }}
                    >
                      County seat
                    </p>
                    <p className="mt-1 text-sm font-semibold">{county.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{county.seat}</p>
                  </MarkerPopup>
                </MapMarker>
              ))}

              {LIBERIA_COUNTIES.filter((c) => c.isMonrovia).map((county) => (
                <MapMarker
                  key={county.id}
                  longitude={county.longitude}
                  latitude={county.latitude}
                  anchor="center"
                >
                  <MarkerContent>
                    <CountyPin county={county} />
                  </MarkerContent>
                  <MarkerLabel
                    position="top"
                    className="rounded-md border border-[#BF0A30]/50 bg-[#002868] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white shadow-lg"
                  >
                    Monrovia · Capital
                  </MarkerLabel>
                  <MarkerPopup closeButton className="min-w-[180px] border-border bg-card">
                    <p
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                      style={{ fontFamily: monoFont }}
                    >
                      Montserrado · Game world
                    </p>
                    <p className="mt-1 text-sm font-semibold">Monrovia</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Home of Monrovia Hustle 3D — Liberia&apos;s capital and the heart of the slice.
                    </p>
                  </MarkerPopup>
                </MapMarker>
              ))}
            </Map>
          </div>

          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {LIBERIA_COUNTIES.map((county) => (
              <div
                key={county.id}
                className={`flex items-center gap-2.5 px-3 py-2.5 backdrop-blur-sm ${
                  county.isMonrovia
                    ? "bg-[#002868]/10 dark:bg-[#002868]/25"
                    : "bg-background/80"
                }`}
              >
                <span
                  className={`shrink-0 rounded-full border-2 border-white shadow-sm ${
                    county.isMonrovia ? "h-3 w-3 bg-[#BF0A30]" : "h-2 w-2 bg-[#002868]"
                  }`}
                />
                <div className="min-w-0">
                  <p
                    className={`truncate text-[8px] uppercase tracking-[0.1em] ${
                      county.isMonrovia
                        ? "font-bold text-[#BF0A30] dark:text-[#ff7b93]"
                        : "text-muted-foreground"
                    }`}
                    style={{ fontFamily: monoFont }}
                  >
                    {county.isMonrovia ? "Capital · Montserrado" : county.name}
                  </p>
                  <p className="truncate text-[10px] text-foreground">{county.seat}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
