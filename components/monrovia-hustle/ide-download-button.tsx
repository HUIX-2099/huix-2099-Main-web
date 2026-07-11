"use client"

import * as React from "react"
import { Download, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  MH_IDE_DOWNLOAD_LABEL,
  MH_IDE_DOWNLOAD_RELEASE,
  MH_IDE_WHATSAPP_URL,
} from "@/lib/monrovia-hustle-independence"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

type TimeLeft = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

type PlatformId = "windows" | "mac" | "ios" | "android"

type PlatformConfig = {
  id: PlatformId
  label: string
  shortLabel: string
  Icon: (props: { className?: string }) => React.ReactElement
  liveClass: string
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13 7.5 1.1v-7.2H3v6.1ZM11.3 4.3 21 3v8.5h-9.7V4.3Zm0 16.4L21 21v-8.6h-9.7v8.3Z" />
    </svg>
  )
}

function MacIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
    </svg>
  )
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48 19.44 6.3a.63.63 0 0 0-.23-.86.63.63 0 0 0-.86.23l-1.9 3.29A11.3 11.3 0 0 0 12 8.2c-1.55 0-3.02.35-4.45.76L5.65 5.67a.63.63 0 0 0-.86-.23.63.63 0 0 0-.23.86l1.84 3.18C3.68 11.07 2.4 13.5 2.4 16.2h19.2c0-2.7-1.28-5.13-3.99-6.72ZM7.8 13.95a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm8.4 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
      <path d="M2.4 17.1h19.2v1.2c0 .99-.81 1.8-1.8 1.8H4.2c-.99 0-1.8-.81-1.8-1.8v-1.2Z" />
    </svg>
  )
}

function IosIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.2 2H7.8A2.8 2.8 0 0 0 5 4.8v14.4A2.8 2.8 0 0 0 7.8 22h8.4a2.8 2.8 0 0 0 2.8-2.8V4.8A2.8 2.8 0 0 0 16.2 2Zm.4 16.8a.4.4 0 0 1-.4.4H7.8a.4.4 0 0 1-.4-.4V5.2c0-.22.18-.4.4-.4h8.4c.22 0 .4.18.4.4v13.6ZM12 19.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
    </svg>
  )
}

const PLATFORMS: PlatformConfig[] = [
  {
    id: "windows",
    label: "Windows",
    shortLabel: "WIN",
    Icon: WindowsIcon,
    liveClass: "bg-[#0078D4] text-white hover:bg-[#006cbc]",
  },
  {
    id: "mac",
    label: "macOS",
    shortLabel: "MAC",
    Icon: MacIcon,
    liveClass: "bg-foreground text-background hover:opacity-90",
  },
  {
    id: "ios",
    label: "iOS",
    shortLabel: "iOS",
    Icon: IosIcon,
    liveClass: "bg-[#555555] text-white hover:bg-[#444444] dark:bg-[#e8e8e8] dark:text-black dark:hover:bg-white",
  },
  {
    id: "android",
    label: "Android APK",
    shortLabel: "APK",
    Icon: AndroidIcon,
    liveClass: "bg-[#3DDC84] text-[#0d2b1a] hover:bg-[#34c977]",
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

/** Windows · macOS · iOS · Android APK — locked until Liberia Independence Day 26 July 2026 */
export function IdeDownloadPanel({ className }: { className?: string }) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(null)

  React.useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(MH_IDE_DOWNLOAD_RELEASE))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  const isLive = timeLeft !== null && timeLeft.total <= 0
  const showCountdown = timeLeft === null || timeLeft.total > 0

  return (
    <div className={cn("border border-border bg-card", className)}>
      <div className="border-b border-border px-4 py-4 sm:px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
          Build distribution · Multi-platform
        </p>
        <h3 className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-foreground sm:text-base" style={{ fontFamily: MONO }}>
          Download Independence Day Edition
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/80 sm:text-sm">
          {isLive
            ? "Builds are live — tap your platform to get the game via WhatsApp."
            : `Windows, macOS, iOS, and Android APK unlock on ${MH_IDE_DOWNLOAD_LABEL} (Liberia Independence Day). Countdown runs from now until release.`}
        </p>
      </div>

      {showCountdown ? (
        <div className="border-b border-border bg-muted/30 px-4 py-4 sm:px-5">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: MONO }}>
            Unlock · {MH_IDE_DOWNLOAD_LABEL}
          </p>
          <div
            className="grid max-w-md grid-cols-4 gap-2"
            role="timer"
            aria-live="polite"
            aria-busy={timeLeft === null}
            aria-label={
              timeLeft === null
                ? "Loading countdown to downloads"
                : `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until downloads unlock`
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
              <div key={label} className="border border-border bg-background px-2 py-2.5 text-center">
                <span
                  className="block text-xl font-black tabular-nums leading-none text-foreground sm:text-2xl"
                  style={{ fontFamily: MONO }}
                  suppressHydrationWarning
                >
                  {value === undefined ? "--" : pad(value)}
                </span>
                <span className="mt-1.5 block text-[8px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4 sm:p-5">
        {PLATFORMS.map((platform) => {
          const { Icon, label, shortLabel, liveClass } = platform

          if (isLive) {
            return (
              <a
                key={platform.id}
                href={MH_IDE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center gap-2.5 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition",
                  liveClass,
                )}
                style={{ fontFamily: MONO }}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                {label}
              </a>
            )
          }

          return (
            <button
              key={platform.id}
              type="button"
              disabled
              aria-disabled="true"
              title={`Available ${MH_IDE_DOWNLOAD_LABEL}`}
              className="flex cursor-not-allowed items-center justify-center gap-2.5 border border-border bg-muted/40 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
              style={{ fontFamily: MONO }}
            >
              <Lock className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
              <Icon className="h-5 w-5 shrink-0 opacity-80" />
              <span className="flex flex-col items-start leading-tight sm:flex-row sm:items-center sm:gap-1.5">
                <span>{label}</span>
                <span className="text-[8px] font-semibold tracking-[0.14em] opacity-70">· {shortLabel} locked</span>
              </span>
            </button>
          )
        })}
      </div>

      <div
        className="border-t border-border px-4 py-2.5 text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:px-5"
        style={{ fontFamily: MONO }}
      >
        {isLive
          ? "STATUS · LIVE · JOIN WHATSAPP TO RECEIVE BUILD"
          : `STATUS · LOCKED · RELEASE ${MH_IDE_DOWNLOAD_LABEL} · WIN · MAC · iOS · APK`}
      </div>
    </div>
  )
}
