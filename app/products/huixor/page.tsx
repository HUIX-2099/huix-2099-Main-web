"use client"

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HuixorFeedbackPanel } from "@/components/huixor-feedback"
import { HuixorIlluminatedVideo } from "@/components/huixor-illuminated-video"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import {
  HUIXOR_EXE,
  HUIXOR_ICO,
  HUIXOR_LIGHTMODE_JPG,
  HUIXOR_VR_VIDEO,
  HUIXOR_APP_ICON_DARK,
  HUIXOR_APP_ICON_LIGHT,
  removeBgAssets,
  huixorScreenshotCatalog,
  shotSrc,
  type HuixorShotGroup,
} from "@/lib/huixor-media"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  ImageIcon,
  Layers,
  Monitor,
  Play,
  Smartphone,
  Sparkles,
  Glasses,
  BookOpen,
  ShieldCheck,
  Lock,
  X,
  CheckCircle2,
  Loader2,
} from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const ACCENT = "#22C55E"
const ACCENT_MUTED = "rgba(34, 197, 94, 0.35)"

const shotGroupTabs: { id: HuixorShotGroup; label: string }[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "chrome", label: "Title & URL" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "vr", label: "VR" },
]

const toc = [
  { id: "overview", label: "Overview", num: "00" },
  { id: "media", label: "Media", num: "01" },
  { id: "devtools", label: "vs DevTools", num: "02" },
  { id: "layout", label: "Window layout", num: "03" },
  { id: "tabs", label: "Navigation tabs", num: "04" },
  { id: "features", label: "Core systems", num: "05" },
  { id: "devices", label: "Device presets", num: "06" },
  { id: "tech", label: "Tech & build", num: "07" },
  { id: "download", label: "Download", num: "08" },
  { id: "feedback", label: "Feedback", num: "09" },
  { id: "community", label: "Community", num: "10" },
] as const

const comparison = [
  { feature: "Devices at once", devtools: "1", huixor: "Up to 8 simultaneously" },
  { feature: "VR preview", devtools: "No", huixor: "Yes (A-Frame 3D)" },
  { feature: "Watch preview", devtools: "No", huixor: "Yes" },
  { feature: "Multi-monitor simulation", devtools: "No", huixor: "Single / dual / triple" },
  { feature: "Synced scroll", devtools: "No", huixor: "Yes" },
  { feature: "Responsiveness analysis", devtools: "Manual", huixor: "Automatic per device" },
  { feature: "Portable single exe", devtools: "N/A", huixor: "Yes" },
]

const layoutAscii = `+------------------------------------------------------------------+
| ROW 0: TITLE BAR                                                 |
|   Logo | Version | Nav | Social | Theme | RAM | Controls         |
+------------------------------------------------------------------+
| ROW 1: URL BAR                                                   |
|   Back Forward Refresh | Lock | URL | Search | View | Scroll    |
+------------------------------------------------------------------+
| ROW 2: CONTENT AREA                                              |
|   Mobile / Desktop / VR / About                                  |
+------------------------------------------------------------------+
| ROW 3: STATUS BAR                                                |
|   HUIX 2099 — Huixor | Victor Edet Coleman | v1.1.1              |
+------------------------------------------------------------------+`

const tabPanels = [
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    body: "Phone, tablet, and watch together. Grid view (four columns) or single view with specs and responsiveness readouts. Below 900px window width, grid becomes 2×2.",
  },
  {
    id: "desktop",
    title: "Desktop",
    icon: Monitor,
    body: "Single monitor, dual (landscape + portrait), or triple layout. Switching layouts reloads the current URL on new panels (beta).",
  },
  {
    id: "vr",
    title: "VR",
    icon: Glasses,
    body: "A-Frame WebGL scene: orbit, zoom, virtual screens with your site. Theme syncs with the app. VR device presets exist in code for future selector wiring.",
  },
  {
    id: "about",
    title: "About",
    icon: BookOpen,
    body: "Editorial document view: mission, creator, company, capabilities, stack, license — mirroring the in-app About experience.",
  },
]

const deviceGroups = [
  {
    title: "iPhone",
    count: 8,
    items: [
      "iPhone 17 Pro Max",
      "iPhone 16 Pro Max",
      "iPhone 16 Pro",
      "iPhone 16",
      "iPhone SE 4",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13 Mini",
    ],
  },
  {
    title: "Android",
    count: 7,
    items: [
      "Samsung Galaxy S26 Ultra",
      "Samsung Galaxy S25",
      "Google Pixel 9 Pro XL",
      "Google Pixel 9",
      "OnePlus 13",
      "Galaxy Z Fold 6 (cover)",
      "Galaxy Z Fold 6 (inner)",
    ],
  },
  {
    title: "Tablet",
    count: 7,
    items: [
      'iPad Pro 12.9"',
      'iPad Pro 11"',
      "iPad Air",
      "iPad Mini",
      "Galaxy Tab S9 Ultra",
      "Galaxy Tab S9",
      "Surface Pro 11",
    ],
  },
  {
    title: "Watch",
    count: 7,
    items: [
      "Apple Watch Ultra 2",
      "Apple Watch Series 10 (45mm)",
      "Apple Watch Series 10 (42mm)",
      "Apple Watch SE (44mm)",
      "Galaxy Watch 7 (44mm)",
      "Galaxy Watch Ultra",
      "Pixel Watch 3 (45mm)",
    ],
  },
  {
    title: "Monitors — landscape",
    count: 8,
    items: [
      'FHD 1080p (24")',
      'QHD 1440p (27")',
      '4K UHD @200% (32")',
      '4K UHD @150% (32")',
      'Ultrawide 21:9 (34")',
      'MacBook Pro 16"',
      'MacBook Air 13"',
      'Chromebook 14"',
    ],
  },
  {
    title: "Monitors — portrait",
    count: 3,
    items: ['1080p portrait (24")', '1440p portrait (27")', '4K portrait @200% (32")'],
  },
  {
    title: "VR / handheld (reserved)",
    count: 6,
    items: [
      "Meta Quest 3S",
      "Meta Quest Pro",
      "Apple Vision Pro",
      "Steam Deck OLED",
      "Google Cardboard",
      "PSVR 2",
    ],
  },
]

const techRows = [
  { k: "UI", v: "WPF (.NET 8)" },
  { k: "Browser", v: "WebView2 (Chromium)" },
  { k: "Emulation", v: "Chrome DevTools Protocol" },
  { k: "Theme", v: "XAML ResourceDictionary" },
  { k: "VR", v: "A-Frame 1.6 (WebGL)" },
  { k: "Language", v: "C# 12" },
  { k: "Ship", v: "dotnet publish — single file, self-contained" },
]

function WindowsIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5.5L10.5 4.2V11.25H3V5.5ZM10.5 12.75V19.8L3 18.45V12.75H10.5ZM11.25 4.2L21 3V11.25H11.25V4.2ZM21 12.75V21L11.25 19.8V12.75H21Z" />
    </svg>
  )
}

export default function HuixorPage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string>(toc[0].id)
  const [openTab, setOpenTab] = useState<(typeof tabPanels)[number]["id"]>("mobile")
  const [shotGroup, setShotGroup] = useState<HuixorShotGroup>("all")
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [isWindows, setIsWindows] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobilePopup, setShowMobilePopup] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [downloadDone, setDownloadDone] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    const winOs = /Win/i.test(ua)
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua)
    setIsWindows(winOs)
    setIsMobile(mobile)

    const dismissed = localStorage.getItem("huixor-mobile-dismissed")
    if (mobile && !dismissed) {
      setShowMobilePopup(true)
      if (navigator.vibrate) navigator.vibrate([100, 50, 100])
    }
  }, [])

  const dismissMobilePopup = () => {
    setShowMobilePopup(false)
    localStorage.setItem("huixor-mobile-dismissed", "true")
  }

  const handleDownload = async () => {
    if (!isWindows || downloading) return
    setDownloading(true)
    setDownloadProgress(0)
    setDownloadDone(false)

    try {
      const resp = await fetch(HUIXOR_EXE)
      if (!resp.ok) throw new Error("Download failed")

      const contentLength = resp.headers.get("content-length")
      const total = contentLength ? parseInt(contentLength, 10) : 0
      const reader = resp.body?.getReader()
      if (!reader) throw new Error("No reader")

      const chunks: Uint8Array[] = []
      let received = 0

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        chunks.push(value)
        received += value.length
        if (total > 0) {
          setDownloadProgress(Math.min((received / total) * 100, 99))
        } else {
          setDownloadProgress(Math.min(received / 1e5, 99))
        }
      }

      setDownloadProgress(100)

      const blob = new Blob(chunks, { type: "application/octet-stream" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Huixor.exe"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      setDownloadDone(true)
      setDownloading(false)
      setTimeout(() => setDownloadDone(false), 4000)
    } catch {
      setDownloading(false)
      setDownloadProgress(0)
      const a = document.createElement("a")
      a.href = HUIXOR_EXE
      a.download = "Huixor.exe"
      a.click()
    }
  }

  const visibleShots = useMemo(
    () =>
      shotGroup === "all"
        ? huixorScreenshotCatalog
        : huixorScreenshotCatalog.filter((s) => s.group === shotGroup),
    [shotGroup]
  )

  const vrPoster = shotSrc(huixorScreenshotCatalog[3].file)
  const primaryAppIcon = resolvedTheme === "dark" ? HUIXOR_APP_ICON_DARK : HUIXOR_APP_ICON_LIGHT
  const alternateAppIcon = resolvedTheme === "dark" ? HUIXOR_APP_ICON_LIGHT : HUIXOR_APP_ICON_DARK

  const isDark = resolvedTheme === "dark"

  const observeSection = useCallback(() => {
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-42% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const cleanup = observeSection()
    return () => cleanup?.()
  }, [observeSection])

  useEffect(() => {
    setLightbox(null)
  }, [shotGroup])

  useEffect(() => {
    if (lightbox === null) return
    const len = visibleShots.length
    if (len === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        setLightbox((i) => (i === null ? null : (i - 1 + len) % len))
      }
      if (e.key === "ArrowRight") {
        e.preventDefault()
        setLightbox((i) => (i === null ? null : (i + 1) % len))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, visibleShots.length])

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Navbar />

      {/* Mobile popup - "Open on Windows PC" */}
      <AnimatePresence>
        {showMobilePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0078D4]/10">
                  <WindowsIcon className="h-5 w-5 text-[#0078D4]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Windows Only</h3>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: monoFont }}>
                    Desktop required
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Huixor is a native Windows application (.exe). Open this page on a <strong className="text-foreground">Windows 10/11 PC</strong> to download and run it.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={dismissMobilePopup}
                  className="flex-1 rounded-lg bg-foreground px-4 py-2.5 text-[11px] uppercase tracking-wider text-background transition-opacity hover:opacity-90"
                  style={{ fontFamily: monoFont }}
                >
                  OK, Got it
                </button>
              </div>
              <p className="mt-3 text-center text-[9px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                This won't show again
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        ref={heroRef}
        className="relative w-full overflow-hidden border-b border-border bg-background"
      >
        {/* Background layers */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)"} 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${ACCENT_MUTED}, transparent 55%)`,
            opacity: isDark ? 0.45 : 0.28,
          }}
        />

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative z-20 border-b border-border/40"
        >
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 lg:px-8">
            <div
              className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/65"
              style={{ fontFamily: monoFont }}
            >
              <span>HUIX-2099</span>
              <span className="hidden h-px w-6 bg-border/60 sm:block" />
              <span className="hidden sm:inline">PRODUCTS · DOC</span>
            </div>
            <div
              className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/65"
              style={{ fontFamily: monoFont }}
            >
              <WindowsIcon className="h-4 w-4 text-[#0078D4]" />
              <span className="hidden sm:inline">WIN 10/11 · X64 · ARM64</span>
              <span className="sm:hidden">WIN</span>
              <span className="h-px w-6 bg-border/60" />
              <span style={{ color: ACCENT }}>BETA</span>
            </div>
          </div>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              {/* App icons row */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                className="mb-6 flex flex-wrap items-center gap-4"
              >
                <div className="flex flex-wrap items-end gap-3">
                  <div className="flex flex-col items-center gap-1.5">
                    <img
                      src={primaryAppIcon}
                      alt=""
                      width={80}
                      height={80}
                      className="h-20 w-20 shrink-0 rounded-xl border border-border bg-card object-contain p-1.5 shadow-sm"
                    />
                    <span className="text-[8px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      {resolvedTheme === "dark" ? "Dark" : "Light"} · store art
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <img
                      src={HUIXOR_ICO}
                      alt="Huixor"
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-lg border border-border bg-card object-contain p-1 opacity-90"
                    />
                    <span className="text-[8px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      .ico
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 opacity-80">
                    <img
                      src={alternateAppIcon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-lg border border-dashed border-border bg-muted/30 object-contain p-1"
                    />
                    <span className="text-[8px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      Alt theme
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1.5 backdrop-blur-sm" style={{ fontFamily: monoFont }}>
                  <Sparkles className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    v1.1.1 · open source · portable
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.7 }}
                className="mb-4 text-4xl font-bold tracking-[0.12em] md:text-6xl"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                HUIXOR
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="max-w-xl text-lg text-muted-foreground md:text-xl"
              >
                Professional multi-device web preview — phones, tablets, watches, desktop layouts, and a VR
                stage — in one native Windows window. No extensions. No cloud. One{" "}
                <span className="text-foreground/90">.exe</span>.
              </motion.p>

              {/* Download button with OS detection + animation */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                {isWindows ? (
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={downloading}
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-transparent bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.14em] text-background transition-all hover:opacity-90 disabled:cursor-wait"
                    style={{ fontFamily: monoFont }}
                  >
                    {downloading && (
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-green-500/30"
                        initial={{ width: "0%" }}
                        animate={{ width: `${downloadProgress}%` }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-3">
                      {downloadDone ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : downloading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                      )}
                      {downloadDone ? "Download started!" : downloading ? `${Math.round(downloadProgress)}%` : "Download Huixor.exe"}
                    </span>
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    <Lock className="h-4 w-4" />
                    {isMobile ? "Open on Windows PC" : "Windows only"}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => scrollToId("media")}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                  style={{ fontFamily: monoFont }}
                >
                  View media
                  <ArrowDown className="h-4 w-4" />
                </button>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70 transition-colors hover:text-foreground"
                  style={{ fontFamily: monoFont }}
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  All products
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-5 flex flex-wrap items-center gap-4"
              >
                {[
                  { icon: ShieldCheck, label: "Verified safe" },
                  { icon: Sparkles, label: "Open source" },
                  { icon: WindowsIcon, label: "Windows 10/11" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                    <Icon className="h-3 w-3" />
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right column - TOC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              className="relative hidden border border-border bg-card/50 p-5 shadow-sm backdrop-blur-md lg:block"
            >
              <div
                className="absolute -left-px top-8 h-24 w-px"
                style={{ background: `linear-gradient(transparent, ${ACCENT}, transparent)` }}
              />
              <div className="mb-4 flex items-center justify-between" style={{ fontFamily: monoFont }}>
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  [00] INDEX
                </span>
                <Layers className="h-4 w-4 text-muted-foreground/50" />
              </div>
              <ul className="space-y-2">
                {toc.slice(0, 7).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className="group flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                      style={{ fontFamily: monoFont }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[9px] text-muted-foreground/40">{item.num}</span>
                        {item.label}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-50" />
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border/60 pt-4 text-[10px] leading-relaxed text-muted-foreground/70">
                Victor Edet Coleman · HUIX 2099 · Monrovia, Liberia
              </p>
            </motion.div>
          </div>

          {/* Hero YouTube Video - stays visible, NOT inside parallax wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12"
          >
            <div className="mb-3 flex items-center gap-3" style={{ fontFamily: monoFont }}>
              <Play className="h-3.5 w-3.5" style={{ color: ACCENT }} />
              <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/60">
                Product Demo
              </span>
              <span className="h-px flex-1 bg-border/40" />
              <a
                href="https://youtu.be/iN2mzgyfHQg?si=Yxs21AeUWONEIGUS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground/40 transition-colors hover:text-foreground"
              >
                YouTube →
              </a>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg border border-border bg-black shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/iN2mzgyfHQg?autoplay=1&mute=1&loop=1&playlist=iN2mzgyfHQg&controls=1&rel=0&modestbranding=1&playsinline=1"
                title="Huixor Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="relative z-20 border-t border-border/40"
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-8">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
              style={{ fontFamily: monoFont }}
            >
              <ArrowDown className="h-3 w-3" />
              Scroll
            </motion.div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
              HUIXOR · PRD · p. 01
            </span>
          </div>
        </motion.div>
      </section>

      <div className="border-b border-border bg-muted/20">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[minmax(0,220px)_1fr]">
          <aside className="hidden lg:block lg:border-r lg:border-border/80">
            <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-10 lg:px-6">
              <p
                className="mb-4 text-[9px] uppercase tracking-[0.22em] text-muted-foreground/55"
                style={{ fontFamily: monoFont }}
              >
                On this page
              </p>
              <nav className="space-y-0.5">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-[11px] transition-colors",
                      activeId === item.id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    )}
                    style={{ fontFamily: monoFont }}
                  >
                    <span className={cn("text-[9px] opacity-50", activeId === item.id && "text-background/70")}>
                      {item.num}
                    </span>
                    <span className="uppercase tracking-[0.08em]">{item.label}</span>
                  </button>
                ))}
              </nav>
              <div
                className="mt-8 border-t border-border/70 pt-6 text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/45"
                style={{ fontFamily: monoFont }}
              >
                Tip: sections highlight as you scroll.
              </div>
            </div>
          </aside>

          <main className="min-w-0 border-border/80 bg-background px-4 py-12 lg:border-l lg:px-10 lg:py-14">
            <div className="mx-auto max-w-3xl">
              <DocSection id="overview" kicker="00" title="What is Huixor?">
                <p className="text-muted-foreground leading-relaxed">
                  Huixor previews any website across device categories — iPhone, Android, tablet, watch, desktop
                  monitors, and a VR environment — simultaneously in a single window. It is built with{" "}
                  <strong className="text-foreground">WPF + .NET 8</strong> and{" "}
                  <strong className="text-foreground">WebView2</strong>, using the Chrome DevTools Protocol for
                  faithful emulation.
                </p>
                <blockquote
                  className="mt-6 border-l-2 pl-5 text-sm italic text-muted-foreground"
                  style={{ borderColor: ACCENT }}
                >
                  Beta software: features are still being refined. Feedback directly shapes what ships next.
                </blockquote>
              </DocSection>
            </div>

            <div className="mx-auto w-full max-w-6xl lg:px-2">
              <motion.section
                id="media"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.35 }}
                className="scroll-mt-28 border-b border-border/60 py-12"
              >
                <div className="mb-6 flex flex-wrap items-baseline gap-3">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55"
                    style={{ fontFamily: monoFont }}
                  >
                    [01]
                  </span>
                  <h2 className="text-2xl font-bold tracking-[0.06em]" style={{ fontFamily: "Mohican, sans-serif" }}>
                    Media
                  </h2>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/50"
                    style={{ fontFamily: monoFont }}
                  >
                    Logo · icons · UI shot · VR capture
                  </span>
                </div>

                <p className="mb-8 max-w-3xl text-sm text-muted-foreground leading-relaxed">
                  This page follows your <strong className="text-foreground">light/dark theme</strong>: the large app mark matches
                  it; the dashed tile is the alternate. Executable <code className="rounded bg-muted px-1 text-xs">.ico</code> is
                  always shown for installers and shortcuts.
                </p>

                <div className="mb-10 flex flex-wrap items-end gap-6 rounded-xl border border-border bg-card/30 p-5">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={primaryAppIcon}
                      alt=""
                      className="h-24 w-24 rounded-xl border border-border bg-background object-contain p-2 shadow-sm"
                    />
                    <span className="text-center text-[9px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      Primary · {resolvedTheme === "dark" ? "dark" : "light"} PNG
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={HUIXOR_ICO} alt="Huixor .ico" className="h-16 w-16 rounded-lg border border-border bg-background object-contain p-1" />
                    <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      Huixor.ico
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-85">
                    <img
                      src={alternateAppIcon}
                      alt=""
                      className="h-16 w-16 rounded-lg border border-dashed border-border bg-muted/25 object-contain p-1.5"
                    />
                    <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      Alternate theme asset
                    </span>
                  </div>
                </div>

                <div className="mb-10">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    Light mode reference (full window)
                  </p>
                  <div className="overflow-hidden rounded-lg border border-border bg-muted/20">
                    <img
                      src={HUIXOR_LIGHTMODE_JPG}
                      alt="Huixor light mode interface"
                      className="w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    Brand cuts (RemoveBG)
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {removeBgAssets.map((a) => (
                      <div key={a.src} className="overflow-hidden rounded-lg border border-border bg-card/30 p-2">
                        <img src={a.src} alt={a.label} className="mx-auto max-h-48 w-full object-contain" />
                        <p className="mt-2 text-center text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                          {a.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70" style={{ fontFamily: monoFont }}>
                    <Play className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                    VR tab · ambient loop
                    <span className="normal-case text-muted-foreground/50">— muted, autoplay while in view</span>
                  </div>
                  <HuixorIlluminatedVideo src={HUIXOR_VR_VIDEO} poster={vrPoster} accent={ACCENT} />
                  <p className="mt-2 text-xs text-muted-foreground" style={{ fontFamily: monoFont }}>
                    vr video.mp4
                  </p>
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    <ImageIcon className="h-3.5 w-3.5" />
                    Screenshots — numbered to match UI areas
                  </div>
                  <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
                    Filter by region. Scroll the wide strip for large previews; thumbnails open the full viewer with captions.
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {shotGroupTabs.map((t) => {
                      const on = shotGroup === t.id
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setShotGroup(t.id)}
                          className={cn(
                            "border px-3 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors",
                            on
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-card/40 text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                          )}
                          style={{ fontFamily: monoFont }}
                        >
                          {t.label}
                          <span className="ml-1.5 opacity-60">
                            [
                            {t.id === "all"
                              ? huixorScreenshotCatalog.length
                              : {
                                  general: huixorScreenshotCatalog.filter((s) => s.group === "general").length,
                                  chrome: huixorScreenshotCatalog.filter((s) => s.group === "chrome").length,
                                  mobile: huixorScreenshotCatalog.filter((s) => s.group === "mobile").length,
                                  desktop: huixorScreenshotCatalog.filter((s) => s.group === "desktop").length,
                                  vr: huixorScreenshotCatalog.filter((s) => s.group === "vr").length,
                                }[t.id]}
                            ]
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mb-6 flex gap-4 overflow-x-auto pb-2 pt-1 [scrollbar-width:thin] snap-x snap-mandatory">
                    {visibleShots.map((shot, i) => (
                      <div
                        key={shot.file}
                        className="w-[min(92vw,720px)] shrink-0 snap-center"
                      >
                        <button
                          type="button"
                          onClick={() => setLightbox(i)}
                          className="block w-full overflow-hidden rounded-xl border border-border bg-card/40 text-left shadow-sm transition-all hover:border-foreground/25 hover:ring-2 hover:ring-foreground/5"
                        >
                          <img
                            src={shotSrc(shot.file)}
                            alt=""
                            className="max-h-[min(72vh,640px)] w-full object-contain object-top bg-muted/20"
                            loading="lazy"
                          />
                          <div className="border-t border-border/60 bg-card/50 px-4 py-3">
                            <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                              [{shot.num}] · {shot.group}
                            </p>
                            <p className="mt-1 font-medium text-foreground">{shot.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{shot.caption}</p>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>

                  <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                    Thumbnails
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                    {visibleShots.map((shot, i) => (
                      <button
                        key={`thumb-${shot.file}`}
                        type="button"
                        onClick={() => setLightbox(i)}
                        className="group relative overflow-hidden rounded-md border border-border bg-card text-left transition-all hover:border-foreground/30 hover:ring-2 hover:ring-foreground/10"
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={shotSrc(shot.file)}
                            alt=""
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2">
                          <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                            [{shot.num}]
                          </span>
                          <p className="line-clamp-2 text-[11px] leading-tight text-foreground">{shot.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.section>
            </div>

            <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
              <DialogContent
                showCloseButton
                className="max-h-[92vh] max-w-[min(96vw,56rem)] gap-0 border-border bg-background p-3 sm:p-4"
              >
                {lightbox !== null && visibleShots[lightbox] && (
                  <>
                    <DialogTitle className="sr-only">{visibleShots[lightbox].title}</DialogTitle>
                    <div className="relative flex max-h-[min(78vh,760px)] items-center justify-center">
                      <img
                        src={shotSrc(visibleShots[lightbox].file)}
                        alt=""
                        className="max-h-[min(78vh,760px)] w-auto max-w-full object-contain"
                      />
                      <button
                        type="button"
                        aria-label="Previous screenshot"
                        className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card sm:left-2"
                        onClick={() =>
                          setLightbox((idx) =>
                            idx === null ? null : (idx - 1 + visibleShots.length) % visibleShots.length
                          )
                        }
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next screenshot"
                        className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card sm:right-2"
                        onClick={() =>
                          setLightbox((idx) => (idx === null ? null : (idx + 1) % visibleShots.length))
                        }
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 text-center">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        [{visibleShots[lightbox].num}] · {visibleShots[lightbox].group} · {lightbox + 1} /{" "}
                        {visibleShots.length}
                      </p>
                      <p className="text-sm font-medium text-foreground">{visibleShots[lightbox].title}</p>
                      <p className="text-sm text-muted-foreground">{visibleShots[lightbox].caption}</p>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>

            <div className="mx-auto max-w-3xl">
              <DocSection id="devtools" kicker="02" title="Huixor vs browser DevTools">
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/60">
                        <th className="px-4 py-3 text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                          Feature
                        </th>
                        <th className="px-4 py-3 text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                          DevTools
                        </th>
                        <th
                          className="px-4 py-3 text-[10px] uppercase tracking-[0.12em]"
                          style={{ fontFamily: monoFont, color: ACCENT }}
                        >
                          Huixor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row) => (
                        <tr key={row.feature} className="border-b border-border/40 last:border-b-0">
                          <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                          <td className="px-4 py-3 text-muted-foreground/80">{row.devtools}</td>
                          <td className="px-4 py-3 font-medium text-foreground">{row.huixor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DocSection>

              <DocSection id="layout" kicker="03" title="Application layout">
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  The shell is organized in four rows — title bar, URL bar, content, and status — with progressive
                  UI collapse at narrow widths (see INFO for breakpoints).
                </p>
                <pre
                  className="overflow-x-auto rounded-lg border border-border bg-card/40 p-4 text-[10px] leading-relaxed text-muted-foreground md:text-[11px]"
                  style={{ fontFamily: monoFont }}
                >
                  {layoutAscii}
                </pre>
              </DocSection>

              <DocSection id="tabs" kicker="04" title="Navigation tabs">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Switch contexts without leaving the app. Pick a tab to read how each mode behaves.
                </p>
                <div className="flex flex-wrap gap-2">
                  {tabPanels.map((t) => {
                    const Icon = t.icon
                    const on = openTab === t.id
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setOpenTab(t.id)}
                        className={cn(
                          "inline-flex items-center gap-2 border px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors",
                          on
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-card/30 text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                        )}
                        style={{ fontFamily: monoFont }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {t.title}
                      </button>
                    )
                  })}
                </div>
                <motion.div
                  key={openTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6 rounded-lg border border-border bg-card/25 p-5"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tabPanels.find((t) => t.id === openTab)?.body}
                  </p>
                </motion.div>
              </DocSection>

              <DocSection id="features" kicker="05" title="Core systems">
                <ul className="space-y-5 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Theme engine — </span>
                    Dark (#09090B) and light (#F4F4F5) dictionaries with green accents; instant apply and VR sync.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Scroll sync — </span>
                    Injected scripts, <code className="rounded bg-muted px-1 py-0.5 text-xs">postMessage</code>, 30ms
                    debounce, 400ms echo suppression; works across mobile and desktop pages.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Responsiveness analysis — </span>
                    Viewport meta, media-query counts, horizontal overflow — with color-coded results per device.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">RAM monitor — </span>
                    Live working-set readout every 3 seconds in the title bar.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Close confirmation — </span>
                    Full-screen overlay; WebViews hidden while confirming exit.
                  </li>
                </ul>
              </DocSection>

              <DocSection id="devices" kicker="06" title="Supported devices (30+ presets)">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Expand a category to see preset names. VR / handheld rows are reserved for future selector wiring.
                </p>
                <div className="space-y-2">
                  {deviceGroups.map((g, i) => (
                    <Collapsible key={g.title} defaultOpen={i === 0}>
                      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg border border-border bg-card/30 px-4 py-3 text-left transition-colors hover:bg-card/60">
                        <span className="text-sm font-medium" style={{ fontFamily: monoFont }}>
                          {g.title}
                          <span className="ml-2 text-[10px] font-normal uppercase tracking-[0.12em] text-muted-foreground">
                            [{String(g.count).padStart(2, "0")}]
                          </span>
                        </span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul
                          className="mt-2 space-y-1.5 rounded-lg border border-border/60 bg-muted/15 px-4 py-3 text-sm text-muted-foreground"
                          style={{ fontFamily: monoFont }}
                        >
                          {g.items.map((d) => (
                            <li key={d} className="flex gap-2">
                              <span className="text-muted-foreground/40">·</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </DocSection>

              <DocSection id="tech" kicker="07" title="Tech stack & build">
                <div className="mb-6 overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {techRows.map((row) => (
                        <tr key={row.k} className="border-b border-border/40 last:border-b-0">
                          <td
                            className="w-[40%] px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                            style={{ fontFamily: monoFont }}
                          >
                            {row.k}
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground">{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Distribution is a single self-contained executable — embedded VR assets, no separate runtime
                  install. Example:{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    dotnet publish src\Huixor\Huixor.csproj -c Release -r win-x64
                  </code>
                </p>
              </DocSection>

              <DocSection id="download" kicker="08" title="Download">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Grab the portable build from this site. WebView2 Runtime is required (usually already present on
                  Windows 10/11). Single <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.exe</code> — no installer needed.
                </p>

                {isWindows ? (
                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={downloading}
                      className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.14em] text-background transition-all hover:opacity-90 disabled:cursor-wait"
                      style={{ fontFamily: monoFont }}
                    >
                      {downloading && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-green-500/30"
                          initial={{ width: "0%" }}
                          animate={{ width: `${downloadProgress}%` }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-3">
                        {downloadDone ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : downloading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                        )}
                        {downloadDone ? "Download started!" : downloading ? `Preparing ${Math.round(downloadProgress)}%` : "Huixor.exe"}
                      </span>
                    </button>

                    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border/60 bg-card/30 px-4 py-3">
                      {[
                        { icon: ShieldCheck, text: "Verified safe — no malware" },
                        { icon: Sparkles, text: "Open source" },
                        { icon: WindowsIcon, text: "Win 10/11 · x64 · ARM64" },
                      ].map(({ icon: Icon, text }) => (
                        <span key={text} className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                          <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: ACCENT }} />
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg border border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Lock className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{isMobile ? "Open this page on a Windows PC" : "Windows only"}</p>
                        <p className="mt-1 text-xs">Huixor requires Windows 10 or 11 to run. It is a native WPF desktop application.</p>
                      </div>
                    </div>
                  </div>
                )}
              </DocSection>

              <DocSection id="feedback" kicker="09" title="Beta feedback">
                <HuixorFeedbackPanel accent={ACCENT} />
              </DocSection>

              <DocSection id="community" kicker="10" title="Community">
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Report bugs, request features, and follow releases on our channels. Huixor is open source — test
                  on real sites and tell us what breaks.
                </p>
                <ul className="space-y-2 text-sm" style={{ fontFamily: monoFont }}>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/109222370/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      LinkedIn — HUIX 2099
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.facebook.com/huix2099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      Facebook — HUIX 2099
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@HUIX-2099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      YouTube — HUIX-2099
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://huix-2099.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      huix-2099.vercel.app
                    </a>
                  </li>
                </ul>
                <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                  Huixor v1.1.1 beta — Victor Edet Coleman / HUIX 2099
                </p>
              </DocSection>

              {/* Developer Card */}
              <motion.section
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.35 }}
                className="scroll-mt-28 pt-2 pb-4"
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55" style={{ fontFamily: monoFont }}>
                    [DEV]
                  </span>
                  <h2 className="text-2xl font-bold tracking-[0.06em]" style={{ fontFamily: "Mohican, sans-serif" }}>
                    Built by
                  </h2>
                </div>

                <Link
                  href="/team/victor"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:border-foreground/20 hover:shadow-xl"
                >
                  {/* Photo */}
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-muted">
                    <img
                      src="/Team/VICTOR.jpeg"
                      alt="Victor Edet Coleman"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                      <div className="flex gap-2 flex-wrap">
                        {["XR", "3D Visualization", "Systems Architecture"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="shrink-0 rounded-md bg-black/40 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm drop-shadow-lg">
                        ★ 5.0
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <h3 className="truncate text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                            Victor Edet Coleman
                          </h3>
                          <span className="shrink-0 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium tracking-wider text-foreground backdrop-blur-sm">
                            01
                          </span>
                        </div>
                        <p className="mb-1 text-sm font-medium text-muted-foreground">
                          Monrovia, Liberia · CTO & Co-founder
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          3D Software Engineer who designed, architected, and built Huixor from scratch — the WPF engine, WebView2 integration, VR preview, device emulation layer, and every pixel of the UI.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end justify-between border-t border-border/40 pt-5 mt-auto">
                      <div className="flex flex-col gap-2 min-w-0 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500/70" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70" style={{ fontFamily: monoFont }}>
                            Lead developer · HUIXOR
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-foreground truncate">
                          huixtech2099@gmail.com
                        </span>
                      </div>
                      <div className="shrink-0 flex items-center gap-2 rounded-full bg-foreground py-1.5 pl-4 pr-1.5 text-background shadow-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <span className="text-sm font-semibold">View</span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background group-hover:bg-primary-foreground">
                          <ArrowRight className="h-3.5 w-3.5 text-foreground group-hover:text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.section>
            </div>

            <div
              className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-[9px] uppercase tracking-[0.14em] text-muted-foreground/45 lg:hidden"
              style={{ fontFamily: monoFont }}
            >
              <span>End of document</span>
              <Link href="/products" className="hover:text-foreground/70">
                ← Products
              </Link>
            </div>
          </main>
        </div>
      </div>

      <section className="border-t border-border bg-card/25 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-xl font-bold tracking-[0.1em]" style={{ fontFamily: "Mohican, sans-serif" }}>
              Ready to preview everything at once?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Portable Windows build · WPF · WebView2 · CDP</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {isWindows ? (
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.12em] text-background hover:opacity-90 disabled:cursor-wait"
                style={{ fontFamily: monoFont }}
              >
                {downloading && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-green-500/30"
                    initial={{ width: "0%" }}
                    animate={{ width: `${downloadProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {downloadDone ? <CheckCircle2 className="h-4 w-4" /> : downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  {downloadDone ? "Started!" : downloading ? `${Math.round(downloadProgress)}%` : "Download"}
                </span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                <Lock className="h-4 w-4" />
                {isMobile ? "Windows PC required" : "Windows only"}
              </span>
            )}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
              style={{ fontFamily: monoFont }}
            >
              All products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function DocSection({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-28 border-b border-border/60 pb-12 pt-2 last:border-b-0 last:pb-0"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55" style={{ fontFamily: monoFont }}>
          [{kicker}]
        </span>
        <h2 className="text-2xl font-bold tracking-[0.06em]" style={{ fontFamily: "Mohican, sans-serif" }}>
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}
