"use client"

import * as React from "react"
import { Download, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

/** Local midnight — playable build unlocks 20 June 2026 */
export const MH_CONCEPT_DOWNLOAD_RELEASE = new Date(2026, 5, 20, 0, 0, 0, 0)

export const MH_CONCEPT_DOWNLOAD_LABEL = "20 June 2026"

/** Update when the Windows build is hosted */
export const MH_CONCEPT_DOWNLOAD_HREF = "/products/Monrovia_hustle_Demo_Campane/Monrovia_Hustle_3D_Concept_01.zip"

type TimeLeft = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
  const total = Math.max(0, target.getTime() - Date.now())
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export type ConceptDownloadButtonProps = {
  downloadHref?: string
  releaseAt?: Date
  className?: string
  /** compact = hero row; default = card block with full countdown grid */
  variant?: "compact" | "card"
}

export function ConceptDownloadButton({
  downloadHref = MH_CONCEPT_DOWNLOAD_HREF,
  releaseAt = MH_CONCEPT_DOWNLOAD_RELEASE,
  className,
  variant = "compact",
}: ConceptDownloadButtonProps) {
  /** Defer Date.now() until after mount — avoids SSR/client hydration mismatch */
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(null)

  React.useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(releaseAt))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [releaseAt])

  const isLive = timeLeft !== null && timeLeft.total <= 0
  const showCountdown = timeLeft === null || timeLeft.total > 0

  const countdown = (
    <div
      className={cn(
        "grid grid-cols-4 gap-1.5 text-center sm:gap-2",
        variant === "compact" ? "min-w-[11rem]" : "max-w-xs",
      )}
      role="timer"
      aria-live="polite"
      aria-busy={timeLeft === null}
      aria-label={
        timeLeft === null
          ? "Loading countdown to download"
          : isLive
            ? "Download available now"
            : `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until download`
      }
    >
      {(
        [
          ["days", timeLeft?.days],
          ["hrs", timeLeft?.hours],
          ["min", timeLeft?.minutes],
          ["sec", timeLeft?.seconds],
        ] as const
      ).map(([label, value]) => (
        <div
          key={label}
          className={cn(
            "rounded-md border border-border/70 bg-background/60 px-1.5 py-1 dark:bg-muted/30",
            variant === "compact" && "px-1 py-0.5",
          )}
        >
          <span
            className={cn(
              "block font-bold tabular-nums text-foreground",
              variant === "compact" ? "text-sm leading-none" : "text-lg leading-none",
            )}
            style={{ fontFamily: MONO }}
            suppressHydrationWarning
          >
            {value === undefined ? "--" : pad(value)}
          </span>
          <span className="mt-0.5 block text-[8px] uppercase tracking-wider text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-[#002868]/25 bg-gradient-to-br from-[#002868]/[0.07] to-[#BF0A30]/[0.05] p-5 sm:p-6",
          className,
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
              Windows build · Concept 01
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {isLive ? "Download is live" : `Unlocks ${MH_CONCEPT_DOWNLOAD_LABEL}`}
            </p>
            {!showCountdown ? null : <div className="mt-3">{countdown}</div>}
          </div>
          <DownloadButtonCore isLive={isLive} downloadHref={downloadHref} size="lg" className="w-full shrink-0 sm:w-auto" />
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center gap-2 sm:items-start", className)}>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
        <DownloadButtonCore isLive={isLive} downloadHref={downloadHref} />
        {showCountdown && countdown}
      </div>
      {showCountdown && (
        <p className="text-[11px] text-muted-foreground" style={{ fontFamily: MONO }}>
          Unlocks {MH_CONCEPT_DOWNLOAD_LABEL} · Windows · Concept 01
        </p>
      )}
    </div>
  )
}

function DownloadButtonCore({
  isLive,
  downloadHref,
  size = "default",
  className,
}: {
  isLive: boolean
  downloadHref: string
  size?: "default" | "lg"
  className?: string
}) {
  if (isLive) {
    return (
      <Button
        asChild
        size={size === "lg" ? "lg" : "default"}
        className={cn(
          "gap-2 border-0 bg-[#002868] font-bold uppercase tracking-wide text-white hover:bg-[#001a4d] dark:bg-[#1a4a8a] dark:hover:bg-[#153d75]",
          size === "default" && "h-11 px-5 text-[12px]",
          className,
        )}
      >
        <a href={downloadHref} download>
          <Download className="size-4" aria-hidden />
          Download build
        </a>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      disabled
      size={size === "lg" ? "lg" : "default"}
      aria-disabled="true"
      title={`Available ${MH_CONCEPT_DOWNLOAD_LABEL}`}
      className={cn(
        "cursor-not-allowed gap-2 border border-border/80 bg-muted/40 font-bold uppercase tracking-wide text-muted-foreground opacity-100",
        size === "default" && "h-11 px-5 text-[12px]",
        className,
      )}
    >
      <Lock className="size-4 shrink-0 opacity-70" aria-hidden />
      Download build
    </Button>
  )
}
