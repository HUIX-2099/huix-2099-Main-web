"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"

interface BarcodeProps {
  value: string
  format?: string
  className?: string
}

export function Barcode({ value, format = "code128", className = "" }: BarcodeProps) {
  const [src, setSrc] = useState("")
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(value)}&code=${format}&dpi=150`
    setSrc(barcodeUrl)
  }, [value, format])

  const bgColor = resolvedTheme === "dark" ? "bg-white" : "bg-white"
  const borderColor = resolvedTheme === "dark" ? "border-white" : "border-border"

  return src ? (
    <img
      src={src || "/placeholder.svg"}
      alt="Barcode"
      className={`p-0 ${className || "h-12"}`}
    />
  ) : null
}
