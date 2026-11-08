"use client"

import { useEffect, useRef } from "react"

// VP9 first: some Chromium builds can't play H.264, the MP4 covers Safari.
const SOURCES = [
  { src: "/products/monrovia-hustle/hero/monrovia-hustle-terminal.webm", type: "video/webm" },
  { src: "/products/monrovia-hustle/hero/monrovia-hustle-terminal.mp4", type: "video/mp4" },
]
const POSTER = "/products/monrovia-hustle/hero/monrovia-hustle-terminal-poster.jpg"

/**
 * The terminal film behind the hero: an old computer on a grey stage playing
 * the particle cut (the city, the controller, the logo). The clip is widened
 * with plain wall on its left, so the CSS can slide the computer to the right
 * and leave the left side clear for the wordmark. It holds on the poster for
 * anyone who asks for less motion, and pauses while it is off screen.
 */
export function HeroVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // The hero fills the screen under the bars above it; their height
    // changes with the width, so it is measured rather than guessed.
    const stage = video.parentElement
    const measure = () => {
      if (stage) stage.style.setProperty("--mh-stage-top", `${Math.round(stage.getBoundingClientRect().top + window.scrollY)}px`)
    }
    measure()
    window.addEventListener("resize", measure)

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (still) {
      video.pause()
      return () => window.removeEventListener("resize", measure)
    }

    const watch = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    })
    watch.observe(video)

    return () => {
      watch.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      poster={POSTER}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      {SOURCES.map((source) => (
        <source key={source.type} src={source.src} type={source.type} />
      ))}
    </video>
  )
}
