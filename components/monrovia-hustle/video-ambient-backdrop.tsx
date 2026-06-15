"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type VideoAmbientBackdropProps = {
  posterSrc: string
  videoSrc?: string
  className?: string
}

const AMBIENT_VIDEO_CLASS =
  "pointer-events-none absolute object-cover opacity-[0.5] [filter:blur(88px)_saturate(1.75)_brightness(0.9)] dark:opacity-[0.44]"

export function VideoAmbientBackdrop({ posterSrc, videoSrc, className }: VideoAmbientBackdropProps) {
  const reduceMotion = useReducedMotion()
  const ambientRef = React.useRef<HTMLVideoElement>(null)
  const useVideo = Boolean(videoSrc) && !reduceMotion

  React.useEffect(() => {
    const el = ambientRef.current
    if (!el || !useVideo) return
    el.play().catch(() => {})
  }, [useVideo, videoSrc])

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background", className)}>
      {useVideo ? (
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={ambientRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            className={cn(
              AMBIENT_VIDEO_CLASS,
              "inset-0 left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.35]",
            )}
          />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 size-full scale-105 object-cover opacity-[0.35] blur-[72px] saturate-[1.5]"
        />
      )}

      <div className="absolute inset-0 bg-background/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/18 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-transparent to-background/45" />
    </div>
  )
}
