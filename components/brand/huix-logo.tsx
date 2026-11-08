import { cn } from "@/lib/utils"
import { HUIX_BARCODE, HUIX_BARCODE_CENTRE, HUIX_WORDMARK } from "./huix-logo-paths"

const LASER = "#ff2d2d"

type HuixBarcodeProps = {
  /** "full" is the 95-bar code; "centre" is a squared slice that stays crisp at icon sizes. */
  variant?: "full" | "centre"
  /** Print HUIX 2099 / H2099 under the full code. */
  numbers?: boolean
  /** A red scanner line: "hover" runs while a parent `.group` is hovered, "loop" always runs. */
  scan?: "hover" | "loop"
  scanOpacity?: number
  className?: string
  /** Accessible name; leave out when the barcode is decoration. */
  title?: string
}

/** The HUIX-2099 symbol. Bars take `currentColor`, so it follows the theme. */
export function HuixBarcode({
  variant = "full",
  numbers = variant === "full",
  scan,
  scanOpacity = 1,
  className,
  title,
}: HuixBarcodeProps) {
  const full = variant === "full"
  const w = full ? HUIX_BARCODE.w : HUIX_BARCODE_CENTRE.w
  const h = full ? HUIX_BARCODE.h : HUIX_BARCODE_CENTRE.h
  const travel = full ? HUIX_BARCODE.barH : h
  const beam = full ? 5 : 7

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      fill="currentColor"
      className={cn("block h-auto w-auto", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={full ? HUIX_BARCODE.bars : HUIX_BARCODE_CENTRE.bars} />
      {full && numbers && <path d={HUIX_BARCODE.numbers} />}
      {scan && (
        <g className={cn("huix-scan", scan === "hover" && "huix-scan--hover")} opacity={scanOpacity}>
          <rect x={-w * 0.03} width={w * 1.06} height={beam * 4} y={-beam * 1.5} fill={LASER} opacity={0.18}>
            <animate attributeName="y" values={`${-beam * 1.5};${travel - beam * 2.5};${-beam * 1.5}`} dur="2.6s" repeatCount="indefinite" />
          </rect>
          <rect x={-w * 0.03} width={w * 1.06} height={beam} fill={LASER}>
            <animate attributeName="y" values={`0;${travel - beam};0`} dur="2.6s" repeatCount="indefinite" />
          </rect>
        </g>
      )}
    </svg>
  )
}

/** HUIX-2099 drawn in Mohican as outlines, so it never waits on the font. */
export function HuixWordmark({ className, title = "HUIX-2099" }: { className?: string; title?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${HUIX_WORDMARK.w} ${HUIX_WORDMARK.h}`}
      width={HUIX_WORDMARK.w}
      height={HUIX_WORDMARK.h}
      fill="currentColor"
      className={cn("block h-auto w-auto", className)}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <path d={HUIX_WORDMARK.d} />
    </svg>
  )
}
