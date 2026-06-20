"use client"

import * as React from "react"
import { Apple, Download, ExternalLink, Lock, Monitor, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

/** Local midnight — Windows build unlocks 20 June 2026 */
export const MH_CONCEPT_DOWNLOAD_RELEASE = new Date(2026, 5, 20, 0, 0, 0, 0)

export const MH_CONCEPT_DOWNLOAD_LABEL = "20 June 2026"

/** Windows build — Google Drive */
export const MH_CONCEPT_DOWNLOAD_HREF =
  "https://drive.google.com/drive/folders/1QW6XVnWFGTFpdQ1V5J2KMVxqtQzLlC_n"
export const MH_CONCEPT_DOWNLOAD_HOST = "Google Drive"

/** Android build — Google Drive */
export const MH_CONCEPT_ANDROID_HREF =
  "https://drive.google.com/drive/folders/1IMUgM-7yx7BiY6p0xf7SkzHO3yq0SDCZ"
export const MH_CONCEPT_ANDROID_HOST = "Google Drive"

type TimeLeft = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

type PlatformId = "windows" | "android" | "ios"

type PlatformConfig = {
  id: PlatformId
  label: string
  shortLabel: string
  host: string
  href?: string
  Icon: typeof Monitor
  /** windows = countdown gate; android = live; ios = pending */
  availability: "countdown" | "live" | "pending"
  pendingNote?: string
}

const PLATFORMS: PlatformConfig[] = [
  {
    id: "windows",
    label: "Download for Windows",
    shortLabel: "Windows",
    host: MH_CONCEPT_DOWNLOAD_HOST,
    href: MH_CONCEPT_DOWNLOAD_HREF,
    Icon: Monitor,
    availability: "countdown",
  },
  {
    id: "android",
    label: "Download for Android",
    shortLabel: "Android",
    host: MH_CONCEPT_ANDROID_HOST,
    href: MH_CONCEPT_ANDROID_HREF,
    Icon: Smartphone,
    availability: "live",
  },
  {
    id: "ios",
    label: "iOS release pending",
    shortLabel: "iOS",
    host: "App Store",
    Icon: Apple,
    availability: "pending",
    pendingNote: "Release pending",
  },
]

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
  releaseAt?: Date
  className?: string
  variant?: "compact" | "card"
}

export function ConceptDownloadButton({
  releaseAt = MH_CONCEPT_DOWNLOAD_RELEASE,
  className,
  variant = "compact",
}: ConceptDownloadButtonProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(null)

  React.useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(releaseAt))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [releaseAt])

  const windowsLive = timeLeft !== null && timeLeft.total <= 0
  const showWindowsCountdown = timeLeft === null || timeLeft.total > 0

  const isPlatformLive = (platform: PlatformConfig) => {
    if (platform.availability === "live") return true
    if (platform.availability === "countdown") return windowsLive
    return false
  }

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
          ? "Loading countdown to Windows download"
          : windowsLive
            ? "Windows download available now"
            : `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until Windows download`
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

  const platformButtons = (
    <div
      className={cn(
        "flex flex-col gap-2",
        variant === "compact" ? "w-full sm:flex-row sm:flex-wrap sm:items-center" : "gap-3",
      )}
    >
      {PLATFORMS.map((platform) => (
        <PlatformDownloadButton
          key={platform.id}
          platform={platform}
          isLive={isPlatformLive(platform)}
          windowsUnlockLabel={MH_CONCEPT_DOWNLOAD_LABEL}
          size={variant === "card" ? "lg" : "default"}
          className={variant === "card" ? "w-full sm:w-auto" : undefined}
        />
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
        <div className="flex flex-col gap-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
              Concept 01 builds · Windows · Android · iOS
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              Android is live on Google Drive · Windows unlocks {MH_CONCEPT_DOWNLOAD_LABEL} · iOS release pending
            </p>
            {showWindowsCountdown ? <div className="mt-3">{countdown}</div> : null}
          </div>
          {platformButtons}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center gap-3 sm:items-start", className)}>
      {platformButtons}
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
        {showWindowsCountdown && countdown}
      </div>
      <p className="text-center text-[11px] text-muted-foreground sm:text-left" style={{ fontFamily: MONO }}>
        {showWindowsCountdown
          ? `Windows unlocks ${MH_CONCEPT_DOWNLOAD_LABEL} · Android live · iOS pending`
          : `${MH_CONCEPT_DOWNLOAD_HOST} · Windows · ${MH_CONCEPT_ANDROID_HOST} · Android · iOS pending`}
      </p>
    </div>
  )
}

function PlatformDownloadButton({
  platform,
  isLive,
  windowsUnlockLabel,
  size = "default",
  className,
}: {
  platform: PlatformConfig
  isLive: boolean
  windowsUnlockLabel: string
  size?: "default" | "lg"
  className?: string
}) {
  const { Icon, label, href, host, availability, pendingNote } = platform
  const isExternal = href ? /^https?:\/\//i.test(href) : false

  if (isLive && href) {
    return (
      <Button
        asChild
        size={size === "lg" ? "lg" : "default"}
        className={cn(
          "gap-2 border-0 font-bold uppercase tracking-wide text-white",
          platform.id === "android"
            ? "bg-[#3DDC84] text-[#0d2b1a] hover:bg-[#34c977]"
            : "bg-[#002868] hover:bg-[#001a4d] dark:bg-[#1a4a8a] dark:hover:bg-[#153d75]",
          size === "default" && "h-11 px-5 text-[12px]",
          className,
        )}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${label} — ${host}`}
        >
          <Icon className="size-4 shrink-0" aria-hidden />
          <Download className="size-4 shrink-0" aria-hidden />
          {label}
          {isExternal ? <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden /> : null}
        </a>
      </Button>
    )
  }

  const lockedTitle =
    availability === "pending"
      ? pendingNote ?? "Release pending"
      : `Windows available ${windowsUnlockLabel}`

  return (
    <Button
      type="button"
      disabled
      size={size === "lg" ? "lg" : "default"}
      aria-disabled="true"
      title={lockedTitle}
      className={cn(
        "cursor-not-allowed gap-2 border border-border/80 bg-muted/40 font-bold uppercase tracking-wide text-muted-foreground opacity-100",
        size === "default" && "h-11 px-5 text-[12px]",
        className,
      )}
    >
      <Lock className="size-4 shrink-0 opacity-70" aria-hidden />
      <Icon className="size-4 shrink-0 opacity-70" aria-hidden />
      {availability === "pending" ? pendingNote ?? label : label}
    </Button>
  )
}
