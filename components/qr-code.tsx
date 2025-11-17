"use client"

import { useState, useEffect } from "react"

interface QRCodeProps {
  value: string
  size?: number
}

export function QRCode({ value, size = 200 }: QRCodeProps) {
  const [src, setSrc] = useState("")

  useEffect(() => {
    // Generate QR code using QR Server API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`
    setSrc(qrCodeUrl)
  }, [value, size])

  return src ? <img src={src || "/placeholder.svg"} alt="QR Code" className="rounded-lg border border-border" /> : null
}
