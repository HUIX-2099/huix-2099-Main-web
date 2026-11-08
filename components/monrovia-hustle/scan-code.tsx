"use client"

import { QRCodeSVG } from "qrcode.react"

/** A QR code for a link, drawn in the page's own ink rather than an image service. */
export function ScanCode({ value, size = 96, ink = "#0c0c0c", className }: { value: string; size?: number; ink?: string; className?: string }) {
  return <QRCodeSVG value={value} size={size} level="M" marginSize={0} fgColor={ink} bgColor="transparent" className={className} />
}
