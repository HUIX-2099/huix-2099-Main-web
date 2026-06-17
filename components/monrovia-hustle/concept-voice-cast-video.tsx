"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Smartphone, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { VideoAmbientBackdrop } from "@/components/monrovia-hustle/video-ambient-backdrop"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export const MH_VOICE_CAST_VIDEO_ID = "tSBJfEjlklk"
export const MH_VOICE_CAST_YOUTUBE_URL = `https://www.youtube.com/watch?v=${MH_VOICE_CAST_VIDEO_ID}`
export const MH_VOICE_CAST_HERO_EMBED_URL = `https://www.youtube.com/embed/${MH_VOICE_CAST_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${MH_VOICE_CAST_VIDEO_ID}&controls=1&rel=0&modestbranding=1&playsinline=1`
export const MH_VOICE_CAST_AMBIENT_EMBED_URL = `https://www.youtube.com/embed/${MH_VOICE_CAST_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${MH_VOICE_CAST_VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`
export const MH_VOICE_CAST_POSTER = `https://img.youtube.com/vi/${MH_VOICE_CAST_VIDEO_ID}/maxresdefault.jpg`

const MOBILE_CHECKS = [
  "Street loop runs on phone — walk, interact, and finish a short hustle beat",
  "Tenneh phone mission chain readable on a small screen",
  "UI hints and dialogue legible in portrait and landscape",
  "Touch-friendly prompts — not a polished App Store build yet, but verified in the field",
] as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
}

export type ConceptVoiceCastVideoProps = {
  className?: string
}

export function ConceptVoiceCastVideo({ className }: ConceptVoiceCastVideoProps) {
  return (
    <motion.section
      id="mobile-demo"
      className={cn(
        "relative isolate left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip scroll-mt-28 bg-background py-10 sm:py-12 lg:py-14",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <VideoAmbientBackdrop posterSrc={MH_VOICE_CAST_POSTER} youtubeEmbedSrc={MH_VOICE_CAST_AMBIENT_EMBED_URL} />

      <div className="relative z-10 mx-auto w-full max-w-[min(100vw,1400px)] px-5 sm:px-8 md:px-10 lg:px-14 lg:pl-[4.75rem] xl:px-16 xl:pl-[5.25rem] 2xl:px-20">
        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10 xl:gap-12">
          <motion.div variants={itemVariants} className="flex min-w-0 flex-col items-center gap-5 text-center sm:items-start sm:text-left lg:gap-6">
            <div className="space-y-4">
              <p
                className="inline-flex items-center gap-2 rounded-sm border border-[#002868]/30 bg-[#002868]/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:border-[#89b8ff]/35 dark:bg-[#10223a]/80 dark:text-[#89b8ff]"
                style={{ fontFamily: MONO }}
              >
                <Smartphone className="size-3.5 shrink-0" aria-hidden />
                Mobile · field test
              </p>
              <h2
                className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal lowercase leading-[1.08] tracking-tight text-foreground [font-variant-ligatures:none]"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}
              >
                demo on mobile
              </h2>
              <p className="text-[15px] font-medium text-foreground/95 sm:text-[16px]">
                Concept 01 verified on phone — not retail-ready, but playable in the wild.
              </p>
              <p className="max-w-xl text-[15px] leading-[1.65] text-muted-foreground sm:text-[16px]">
                The Windows concept build is the primary drop today. We also run the same vertical slice on mobile to prove the hustle loop, mission chain, and
                Liberian voice cast hold up on a small screen — before we chase a full touch build and store release.
              </p>
              <p className="text-[13px] italic leading-relaxed text-muted-foreground sm:text-[14px]">
                The capture on the right is from mobile testing — scroll down for the full voice cast grid.
              </p>
            </div>

            <ul className="w-full max-w-xl space-y-2.5 text-left text-sm text-muted-foreground">
              {MOBILE_CHECKS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#002868]/25 bg-[#002868]/10 text-[#002868] dark:border-[#89b8ff]/30 dark:bg-[#10223a]/80 dark:text-[#89b8ff]">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto w-full min-w-0 lg:mx-0 lg:justify-self-end">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3" style={{ fontFamily: MONO }}>
              <Play className="h-3.5 w-3.5 shrink-0 text-[#BF0A30]" aria-hidden />
              <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70">Mobile demo capture</span>
              <a
                href={MH_VOICE_CAST_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground/50 transition-colors hover:text-foreground"
              >
                Open on YouTube
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </div>

            <motion.div
              className="group relative w-full overflow-hidden rounded-xl border border-border/70 bg-black shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)] dark:border-border/60"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={MH_VOICE_CAST_HERO_EMBED_URL}
                  title="Monrovia Hustle 3D — mobile demo capture"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 p-5 text-left text-white sm:p-6">
                <h3 className="text-base font-bold sm:text-lg" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.06em" }}>
                  Mobile verified
                </h3>
                <p className="mt-1 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
                  Field capture — street loop and mission chain on phone, same slice as the Windows concept build.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
