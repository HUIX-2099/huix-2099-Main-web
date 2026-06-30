"use client"

import { useEffect, useState } from "react"

const BOOT_DURATION = 1800
const FADE_DURATION = 500

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("huix-booted")) {
      setHidden(true)
      return
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const endTimer = window.setTimeout(() => {
      setDone(true)
      window.setTimeout(() => {
        setHidden(true)
        document.body.style.overflow = prevOverflow
        sessionStorage.setItem("huix-booted", "1")
      }, FADE_DURATION)
    }, BOOT_DURATION)

    return () => {
      clearTimeout(endTimer)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  if (hidden) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading HUIX-2099"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
        HUIX-2099
      </p>
    </div>
  )
}
