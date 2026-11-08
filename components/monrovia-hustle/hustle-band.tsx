import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MH_PALETTE } from "./hustle-brand"
import "./hustle-band.css"

export type HustlePaintName = (typeof MH_PALETTE)[number]["name"]

function hexFor(name: HustlePaintName) {
  return MH_PALETTE.find((entry) => entry.name === name)?.color ?? MH_PALETTE[0].color
}

/** One section of the page, painted in one of the four poster colours. */
export function PaintBand({
  paint,
  prev,
  media = "left",
  className,
  children,
}: {
  paint: HustlePaintName
  /** The colour of the band above, so the seam between them melts instead of
      cutting. Defaults to this band's own colour (no visible seam). */
  prev?: HustlePaintName
  /** Which side the picture bleeds from. */
  media?: "left" | "right"
  className?: string
  children: ReactNode
}) {
  const color = hexFor(paint)
  return (
    <section
      className={cn("mh-band", media === "right" && "mh-band--media-right", className)}
      style={{
        ["--c" as string]: color,
        ["--mh-band-prev-c" as string]: prev ? hexFor(prev) : color,
      }}
    >
      <span className="mh-band__fill" aria-hidden />
      <div className="mh-band__inner">{children}</div>
    </section>
  )
}
