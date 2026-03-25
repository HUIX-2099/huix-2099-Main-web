"use client"

import { useState, useEffect } from "react"

interface QRCodeProps {
  value: string
  size?: number
  className?: string
}

export function QRCode({ value, size = 200, className = "" }: QRCodeProps) {
  const [src, setSrc] = useState("")

  useEffect(() => {
    // Generate QR code using QR Server API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`
    setSrc(qrCodeUrl)
  }, [value, size])

  return src ? <img src={src || "/placeholder.svg"} alt="QR Code" className={`border border-border ${className}`} /> : null
}
