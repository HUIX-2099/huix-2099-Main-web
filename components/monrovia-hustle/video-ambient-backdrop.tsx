"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type VideoAmbientBackdropProps = {
  posterSrc: string
  videoSrc?: string
  /** Muted autoplay embed — blurred behind the section for live color bleed */
  youtubeEmbedSrc?: string
  className?: string
}

const AMBIENT_LAYER_CLASS =
  "pointer-events-none opacity-[0.5] [filter:blur(88px)_saturate(1.75)_brightness(0.9)] dark:opacity-[0.44]"

const AMBIENT_MEDIA_POSITION =
  "absolute left-1/2 top-1/2 h-[140%] w-[140%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.35]"

export function VideoAmbientBackdrop({
  posterSrc,
  videoSrc,
  youtubeEmbedSrc,
  className,
}: VideoAmbientBackdropProps) {
  const reduceMotion = useReducedMotion()
  const ambientRef = React.useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = React.useState(false)

  const useYoutube = Boolean(youtubeEmbedSrc) && !reduceMotion
  const useVideo = Boolean(videoSrc) && !reduceMotion && !useYoutube

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const el = ambientRef.current
    if (!el || !useVideo) return
    el.play().catch(() => {})
  }, [useVideo, videoSrc])

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background", className)}>
      {mounted && useYoutube ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn("overflow-hidden", AMBIENT_LAYER_CLASS, AMBIENT_MEDIA_POSITION)}>
            <iframe
              src={youtubeEmbedSrc}
              title=""
              tabIndex={-1}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="pointer-events-none absolute inset-0 size-full border-0"
            />
          </div>
        </div>
      ) : useVideo ? (
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
            className={cn(AMBIENT_LAYER_CLASS, AMBIENT_MEDIA_POSITION, "object-cover")}
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

      <div className={cn("absolute inset-0", useYoutube || useVideo ? "bg-background/28" : "bg-background/35")} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/18 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-transparent to-background/45" />
    </div>
  )
}
