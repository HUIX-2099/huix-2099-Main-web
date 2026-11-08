import { cn } from "@/lib/utils"
import "./hustle-identity.css"

/** The four franchise paints, in poster order. */
export const MH_PALETTE = [
  { name: "blue", color: "#4b8fe2", word: "Hustle", symbol: "cross" },
  { name: "purple", color: "#a77bd9", word: "Grind", symbol: "square" },
  { name: "green", color: "#1cc35c", word: "Earn", symbol: "triangle" },
  { name: "red", color: "#e3341f", word: "Repeat", symbol: "circle" },
] as const

/** The four controller shapes the poster draws at the head of each bar. */
export const MH_GLYPHS = {
  cross: { viewBox: "0 0 100 100", strokeWidth: 13, body: <path d="M14 12 L86 88 M86 12 L14 88" /> },
  square: { viewBox: "0 0 100 100", strokeWidth: 8, body: <rect x="8" y="8" width="84" height="84" /> },
  triangle: { viewBox: "0 0 123 100", strokeWidth: 9, body: <polygon points="61.5,10 118,90 5,90" /> },
  circle: { viewBox: "0 0 100 100", strokeWidth: 8, body: <circle cx="50" cy="50" r="43" /> },
} as const

export type HustleGlyphName = keyof typeof MH_GLYPHS

/** A single controller shape, drawn clean for small sizes. */
export function HustleGlyph({ name, className }: { name: HustleGlyphName; className?: string }) {
  const glyph = MH_GLYPHS[name]
  return (
    <svg
      viewBox={glyph.viewBox}
      className={cn("h-4 w-4", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={glyph.strokeWidth}
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      {glyph.body}
    </svg>
  )
}

/** The four paints as a thin rule, for cards and section edges. */
export function HustleBrush({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("mh-brush", className)}>
      {MH_PALETTE.map((paint) => (
        <span key={paint.name} style={{ background: paint.color, flexGrow: paint.word.length }} />
      ))}
    </span>
  )
}
