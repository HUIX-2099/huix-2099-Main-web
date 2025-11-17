"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"

interface BarcodeProps {
  value: string
  format?: string
}

export function Barcode({ value, format = "code128" }: BarcodeProps) {
  const [src, setSrc] = useState("")
  const { theme } = useTheme()

  useEffect(() => {
    const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(value)}&code=${format}&dpi=150`
    setSrc(barcodeUrl)
  }, [value, format])

  const bgColor = theme === "dark" ? "bg-white" : "bg-white"
  const borderColor = theme === "dark" ? "border-white" : "border-border"

  return src ? (
    <img
      src={src || "/placeholder.svg"}
      alt="Barcode"
      className={`h-12 rounded border ${borderColor} ${bgColor} p-1`}
    />
  ) : null
}
