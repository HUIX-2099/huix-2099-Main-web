"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Play, Youtube, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { VideoAmbientBackdrop } from "@/components/monrovia-hustle/video-ambient-backdrop"
import { ConceptDownloadButton } from "@/components/monrovia-hustle/concept-download-button"
import { MonroviaMatureSticker } from "@/components/monrovia-hustle/monrovia-mature-sticker"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export const MH_TRAILER_YOUTUBE_ID = "GUPVn-m8Dr8"
export const MH_TRAILER_YOUTUBE_URL = `https://youtu.be/${MH_TRAILER_YOUTUBE_ID}`
export const MH_TRAILER_EMBED_URL = `https://www.youtube.com/embed/${MH_TRAILER_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
export const MH_TRAILER_HERO_EMBED_URL = `https://www.youtube.com/embed/${MH_TRAILER_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${MH_TRAILER_YOUTUBE_ID}&controls=1&rel=0&modestbranding=1&playsinline=1`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
}

export type MonroviaConceptHeroProps = {
  posterSrc: string
  youtubeChannelUrl: string
  className?: string
}

export function MonroviaConceptHero({
  posterSrc,
  youtubeChannelUrl,
  className,
}: MonroviaConceptHeroProps) {
  const [trailerOpen, setTrailerOpen] = React.useState(false)

  return (
    <>
      <motion.section
        className={cn(
          "relative isolate left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip bg-background",
          className,
        )}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <VideoAmbientBackdrop posterSrc={posterSrc} />

        <div className="relative z-10 mx-auto w-full max-w-[min(100vw,1400px)] px-4 sm:px-6 md:px-8">
          <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 text-center sm:text-left lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:gap-12">
            <div className="flex min-w-0 flex-col items-center gap-5 sm:items-start lg:gap-6">
              <motion.div variants={itemVariants} className="space-y-4">
                <p
                  className="inline-flex items-center rounded-sm border border-[#002868]/30 bg-[#002868]/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:border-[#89b8ff]/35 dark:bg-[#10223a]/80 dark:text-[#89b8ff]"
                  style={{ fontFamily: MONO }}
                >
                  Concept · early prototype
                </p>
                <h1
                  className="text-[clamp(2rem,4.5vw,3.5rem)] font-normal lowercase leading-[1.06] tracking-tight text-foreground [font-variant-ligatures:none]"
                  style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}
                >
                  monrovia hustle{" "}
                  <span className="text-[0.88em] text-muted-foreground">3d</span>
                </h1>
                <p className="max-w-xl text-[15px] font-medium leading-[1.65] text-foreground/95 sm:text-[16px] lg:text-[17px]">
                  Welcome to <strong className="text-foreground">Concept 01</strong> — a playable vertical slice of Monrovia&apos;s streets,
                  systems, and story.{" "}
                  <span className="text-muted-foreground">
                    Street hustle, family pressure, and choosing your lane in a Liberian urban drama.
                  </span>
                </p>
                <p className="text-[13px] italic leading-relaxed text-muted-foreground sm:text-[14px]">
                  Not a finished AAA retail product — an honest prototype to prove direction and gather signal.
                </p>
                <MonroviaMatureSticker size="md" className="mx-auto pt-1 text-left sm:mx-0" />
              </motion.div>

              <motion.div variants={itemVariants} className="w-full space-y-4">
                <ConceptDownloadButton variant="compact" className="w-full max-w-md sm:max-w-none" />
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <Button
                    type="button"
                    onClick={() => setTrailerOpen(true)}
                    className="h-11 gap-2 border-0 bg-[#BF0A30] px-5 text-[12px] font-bold uppercase tracking-wide text-white shadow-sm hover:bg-[#a00828]"
                  >
                    <Play className="size-4 fill-white" aria-hidden />
                    Watch trailer
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 gap-2 px-5 text-[12px] font-semibold uppercase tracking-wide"
                  >
                    <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube className="size-4 text-[#FF0000]" aria-hidden />
                      HUIX-2099
                      <Badge variant="secondary" className="ml-0.5 px-1.5 py-0.5 text-[10px]">
                        YT
                      </Badge>
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="hidden w-full text-right text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:block lg:text-[12px]"
                style={{ fontFamily: MONO }}
              >
                HUIX-2099 · concept 01 · archive 2026
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="mx-auto w-full min-w-0 xl:mx-0">
              <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3" style={{ fontFamily: MONO }}>
                <Play className="h-3.5 w-3.5 shrink-0 text-[#BF0A30]" aria-hidden />
                <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  Gameplay trailer
                </span>
                <a
                  href={MH_TRAILER_YOUTUBE_URL}
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
                    src={MH_TRAILER_HERO_EMBED_URL}
                    title="Monrovia Hustle 3D — YouTube gameplay trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 p-5 text-left text-white sm:p-6">
                  <h2 className="text-base font-bold sm:text-lg" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.06em" }}>
                    Monrovia Hustle 3D
                  </h2>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
                    Official gameplay trailer — street loop, mission chain, and Liberian voice cast in-engine.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Dialog open={trailerOpen} onOpenChange={setTrailerOpen}>
        <DialogContent className="max-w-[min(100vw-1rem,960px)] gap-0 overflow-hidden p-0 sm:max-w-3xl" showCloseButton>
          <DialogHeader className="border-b border-border px-4 py-3 text-left sm:px-5">
            <DialogTitle className="text-sm font-bold uppercase tracking-wide" style={{ fontFamily: "Mohican, sans-serif" }}>
              Monrovia Hustle 3D — gameplay trailer
            </DialogTitle>
            <DialogDescription className="text-xs">
              Official HUIX-2099 trailer on YouTube.
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full bg-black">
            {trailerOpen ? (
              <iframe
                src={MH_TRAILER_EMBED_URL}
                title="Monrovia Hustle 3D — YouTube gameplay trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            ) : null}
          </div>
          <div className="flex justify-end border-t border-border px-4 py-2 sm:px-5">
            <a
              href={MH_TRAILER_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              style={{ fontFamily: MONO }}
            >
              Open on YouTube
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
