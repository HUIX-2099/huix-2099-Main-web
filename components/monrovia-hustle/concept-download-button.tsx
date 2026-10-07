"use client"

import * as React from "react"
import { ExternalLink, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type BrandIcon = (props: { className?: string; "aria-hidden"?: boolean }) => React.JSX.Element

const WindowsIcon: BrandIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3.449 9.75 2.1v9.451H0zm10.949-1.606L24 0v11.4H10.949zM0 12.6h9.75v9.451L0 20.699zm10.949 0H24V24l-12.9-1.801z" />
  </svg>
)

const AndroidIcon: BrandIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.523 15.341a1.003 1.003 0 1 1 0-2.006 1.003 1.003 0 0 1 0 2.006m-11.046 0a1.003 1.003 0 1 1 0-2.006 1.003 1.003 0 0 1 0 2.006m11.405-6.02 2.004-3.47a.416.416 0 0 0-.152-.567.416.416 0 0 0-.568.152l-2.03 3.515A12.6 12.6 0 0 0 12 7.83a12.6 12.6 0 0 0-5.136 1.12L4.834 5.436a.416.416 0 0 0-.568-.152.416.416 0 0 0-.152.567l2.004 3.47C2.67 11.187.343 14.659 0 18.761h24c-.344-4.102-2.67-7.574-6.118-9.44" />
  </svg>
)

const AppleIcon: BrandIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

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
  Icon: BrandIcon
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
    Icon: WindowsIcon,
    availability: "countdown",
  },
  {
    id: "android",
    label: "Download for Android",
    shortLabel: "Android",
    host: MH_CONCEPT_ANDROID_HOST,
    href: MH_CONCEPT_ANDROID_HREF,
    Icon: AndroidIcon,
    availability: "live",
  },
  {
    id: "ios",
    label: "iOS release pending",
    shortLabel: "iOS",
    host: "App Store",
    Icon: AppleIcon,
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
          <Icon className="size-[18px] shrink-0" aria-hidden />
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
