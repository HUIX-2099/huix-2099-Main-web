"use client"

import { useEffect, useRef } from "react"

type Props = {
  src: string
  poster: string
  accent: string
}

export function HuixorIlluminatedVideo({ src, poster, accent }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.32 }
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-2xl border shadow-lg"
      style={{
        borderColor: `${accent}44`,
        boxShadow: `0 0 0 1px ${accent}22, 0 25px 80px -20px ${accent}55, 0 0 120px -40px ${accent}66`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          background: `radial-gradient(ellipse 85% 70% at 50% 20%, ${accent}38, transparent 55%),
            radial-gradient(ellipse 60% 50% at 80% 90%, ${accent}22, transparent 50%),
            linear-gradient(180deg, ${accent}14, transparent 40%, ${accent}0c)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-[40%] z-0 opacity-35 blur-3xl"
        style={{
          background: `conic-gradient(from 210deg at 50% 50%, ${accent}66, transparent, ${accent}44, transparent)`,
        }}
      />
      <video
        ref={videoRef}
        className="relative z-10 w-full bg-black/80"
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
