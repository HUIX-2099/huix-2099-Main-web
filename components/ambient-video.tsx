"use client"

import { useEffect, useRef, useState, type ReactNode, type VideoHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type AmbientVideoProps = {
  src: string
  className?: string
  videoClassName?: string
  /** landscape = 16:9 full width; portrait = 9:16 phone reel width */
  aspect?: "landscape" | "portrait"
  /** Extra content under the video (caption bar, etc.) */
  footer?: ReactNode
} & Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "className" | "children">

/**
 * YouTube ambient-mode style: a blurred, scaled, saturated clone of the
 * playing video illuminates the area behind the player.
 */
export function AmbientVideo({
  src,
  className,
  videoClassName,
  aspect = "landscape",
  footer,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...videoProps
}: AmbientVideoProps) {
  const mainRef = useRef<HTMLVideoElement>(null)
  const glowWideRef = useRef<HTMLVideoElement>(null)
  const glowCoreRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const isPortrait = aspect === "portrait"

  useEffect(() => {
    const main = mainRef.current
    const glows = [glowWideRef.current, glowCoreRef.current].filter(Boolean) as HTMLVideoElement[]
    if (!main || glows.length === 0) return

    const syncTime = () => {
      for (const glow of glows) {
        try {
          if (Math.abs(glow.currentTime - main.currentTime) > 0.2) {
            glow.currentTime = main.currentTime
          }
        } catch {
          /* ignore seek while buffering */
        }
      }
    }

    const playGlows = () => {
      for (const glow of glows) void glow.play().catch(() => {})
    }

    const pauseGlows = () => {
      for (const glow of glows) glow.pause()
    }

    const onLoaded = () => {
      setReady(true)
      syncTime()
      if (!main.paused) playGlows()
    }

    main.addEventListener("play", playGlows)
    main.addEventListener("pause", pauseGlows)
    main.addEventListener("seeked", syncTime)
    main.addEventListener("timeupdate", syncTime)
    main.addEventListener("loadeddata", onLoaded)

    if (main.readyState >= 2) onLoaded()

    return () => {
      main.removeEventListener("play", playGlows)
      main.removeEventListener("pause", pauseGlows)
      main.removeEventListener("seeked", syncTime)
      main.removeEventListener("timeupdate", syncTime)
      main.removeEventListener("loadeddata", onLoaded)
    }
  }, [src])

  return (
    <div
      className={cn(
        "relative isolate py-6 sm:py-8",
        isPortrait && "w-full max-w-[22rem] sm:max-w-[26rem]",
        className,
      )}
    >
      {/* Wide soft halo */}
      <video
        ref={glowWideRef}
        src={src}
        muted
        loop={loop}
        playsInline
        aria-hidden
        tabIndex={-1}
        className={cn(
          "pointer-events-none absolute -inset-[18%] -z-10 h-[136%] w-[136%] object-cover opacity-0 blur-[48px] saturate-[1.9] transition-opacity duration-700",
          ready && "opacity-65 dark:opacity-80",
        )}
      />
      {/* Tighter brighter core */}
      <video
        ref={glowCoreRef}
        src={src}
        muted
        loop={loop}
        playsInline
        aria-hidden
        tabIndex={-1}
        className={cn(
          "pointer-events-none absolute -inset-[6%] -z-10 h-[112%] w-[112%] object-cover opacity-0 blur-[28px] saturate-[2.2] transition-opacity duration-700",
          ready && "opacity-45 dark:opacity-60",
        )}
      />

      <div className="relative z-10 overflow-hidden border border-border bg-card shadow-[0_12px_48px_-16px_rgba(0,0,0,0.5)]">
        <video
          ref={mainRef}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className={cn(
            "w-full object-cover",
            isPortrait ? "aspect-[9/16]" : "aspect-video",
            videoClassName,
          )}
          {...videoProps}
        />
        {footer}
      </div>
    </div>
  )
}
