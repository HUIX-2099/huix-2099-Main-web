"use client"

import * as React from "react"
import Image from "next/image"
import { Download, ExternalLink, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  MH_IDE_ANDROID_DRIVE_URL,
  MH_IDE_ANDROID_GUIDE_IMAGE,
  MH_IDE_DOWNLOAD_LABEL,
  MH_IDE_DOWNLOAD_RELEASE,
  MH_IDE_WINDOWS_DRIVE_URL,
  MH_IDE_WINDOWS_GUIDE_IMAGE,
} from "@/lib/monrovia-hustle-independence"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

type TimeLeft = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

type PlatformId = "windows" | "android"

type PlatformConfig = {
  id: PlatformId
  label: string
  shortLabel: string
  href: string
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

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48 19.44 6.3a.63.63 0 0 0-.23-.86.63.63 0 0 0-.86.23l-1.9 3.29A11.3 11.3 0 0 0 12 8.2c-1.55 0-3.02.35-4.45.76L5.65 5.67a.63.63 0 0 0-.86-.23.63.63 0 0 0-.23.86l1.84 3.18C3.68 11.07 2.4 13.5 2.4 16.2h19.2c0-2.7-1.28-5.13-3.99-6.72ZM7.8 13.95a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm8.4 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
      <path d="M2.4 17.1h19.2v1.2c0 .99-.81 1.8-1.8 1.8H4.2c-.99 0-1.8-.81-1.8-1.8v-1.2Z" />
    </svg>
  )
}

const PLATFORMS: PlatformConfig[] = [
  {
    id: "windows",
    label: "Windows",
    shortLabel: "WIN",
    href: MH_IDE_WINDOWS_DRIVE_URL,
    Icon: WindowsIcon,
    liveClass: "bg-[#0078D4] text-white hover:bg-[#006cbc]",
  },
  {
    id: "android",
    label: "Android APK",
    shortLabel: "APK",
    href: MH_IDE_ANDROID_DRIVE_URL,
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

function PlatformGuide({
  platform,
  title,
  steps,
  imageSrc,
  imageAlt,
}: {
  platform: "windows" | "android"
  title: string
  steps: string[]
  imageSrc: string
  imageAlt: string
}) {
  return (
    <div className="border border-border bg-muted/20">
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
          style={{ fontFamily: MONO }}
        >
          {platform === "windows" ? "Windows setup" : "Android setup"}
        </p>
        <h4 className="mt-1.5 text-sm font-black uppercase tracking-[0.08em] text-foreground" style={{ fontFamily: MONO }}>
          {title}
        </h4>
      </div>
      <div className="grid gap-0 lg:grid-cols-2">
        <ol className="space-y-3 px-4 py-4 text-[13px] leading-relaxed text-foreground/85 sm:px-5 sm:text-sm">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-border bg-background text-[10px] font-bold text-foreground"
                style={{ fontFamily: MONO }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="border-t border-border lg:border-l lg:border-t-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={960}
            height={540}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}

/** Windows · Android APK — locked until Liberia Independence Day 26 July 2026 */
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
          Build distribution · Windows · Android
        </p>
        <h3 className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-foreground sm:text-base" style={{ fontFamily: MONO }}>
          Download Independence Day Edition
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/80 sm:text-sm">
          {isLive
            ? "Builds are live on Google Drive — choose your platform below. macOS and iOS are not available for this edition."
            : `Windows and Android APK unlock on ${MH_IDE_DOWNLOAD_LABEL} (Liberia Independence Day). Countdown runs from now until release.`}
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

      <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
        {PLATFORMS.map((platform) => {
          const { Icon, label, shortLabel, liveClass, href } = platform

          if (isLive) {
            return (
              <a
                key={platform.id}
                href={href}
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
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
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

      {isLive ? (
        <div className="space-y-4 border-t border-border p-4 sm:p-5">
          <PlatformGuide
            platform="windows"
            title="Download all 3 files · run from one folder"
            imageSrc={MH_IDE_WINDOWS_GUIDE_IMAGE}
            imageAlt="Google Drive folder showing the three Windows files for Monrovia Hustle Independence Day Edition"
            steps={[
              "Open the Windows Google Drive folder and download all 3 files (.exe, .pck, and .console.exe).",
              "Create a new folder on your PC — for example Monrovia Hustle Independence Day.",
              "Move all 3 downloaded files into that folder. They must stay together.",
              "Double-click Monrovia-hustle_independence_day_race.exe to launch the game.",
            ]}
          />
          <PlatformGuide
            platform="android"
            title="Single APK install"
            imageSrc={MH_IDE_ANDROID_GUIDE_IMAGE}
            imageAlt="Google Drive folder showing the Android APK for Monrovia Hustle Independence Day Edition"
            steps={[
              "Open the Android Google Drive folder and download MonroviaHustle_IndependenceDay_v1.apk.",
              "On your phone, allow installs from unknown sources if prompted.",
              "Tap the APK file to install, then open the game from your app drawer.",
            ]}
          />
        </div>
      ) : null}

      <div
        className="border-t border-border px-4 py-2.5 text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:px-5"
        style={{ fontFamily: MONO }}
      >
        {isLive
          ? "STATUS · LIVE · GOOGLE DRIVE · WIN · APK"
          : `STATUS · LOCKED · RELEASE ${MH_IDE_DOWNLOAD_LABEL} · WIN · APK`}
      </div>
    </div>
  )
}
