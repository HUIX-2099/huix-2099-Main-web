"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Download, Monitor, AlertCircle } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

// Portable folder as zip — contains TypeLR.exe and all dependencies
const DOWNLOAD_URL = "/products/typelr/install/TypeLR-Portable.zip"
const DOWNLOAD_FILENAME = "TypeLR-Portable.zip"

function WindowsIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5.5L10.5 4.2V11.25H3V5.5ZM10.5 12.75V19.8L3 18.45V12.75H10.5ZM11.25 4.2L21 3V11.25H11.25V4.2ZM21 12.75V21L11.25 19.8V12.75H21Z" />
    </svg>
  )
}

function useIsWindows() {
  const [isWindows, setIsWindows] = useState<boolean | null>(null)
  useEffect(() => {
    if (typeof navigator === "undefined") return
    const ua = navigator.userAgent.toLowerCase()
    const win = ua.includes("windows") || ua.includes("win32") || ua.includes("wow64")
    setIsWindows(win)
  }, [])
  return isWindows
}

export default function TypeLrInstallPage() {
  const [phase, setPhase] = useState<"idle" | "preparing" | "downloading" | "done" | "error">("idle")
  const [progress, setProgress] = useState(0)
  const isWindows = useIsWindows()

  const startDownload = () => {
    if (phase !== "idle") return
    setPhase("preparing")
    setProgress(0)

    // Animation: preparing 0 → 40%
    const prepInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 40) {
          clearInterval(prepInterval)
          setPhase("downloading")
          return 40
        }
        return p + 4
      })
    }, 40)

    // Then "downloading" 40 → 95%
    setTimeout(() => {
      const dlInterval = setInterval(() => {
        setProgress((p) => {
          if (p >= 95) {
            clearInterval(dlInterval)
            return 95
          }
          return p + 3
        })
      }, 30)
    }, 1200)

    // Trigger actual download and finish
    setTimeout(() => {
      const a = document.createElement("a")
      a.href = DOWNLOAD_URL
      a.download = DOWNLOAD_FILENAME
      a.rel = "noopener noreferrer"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setProgress(100)
      setPhase("done")
    }, 2800)
  }

  return (
    <>
      <Navbar />

      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-border overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #0078D4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4 lg:px-8 py-16 text-center">
          {/* Windows + TYPE LR header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <WindowsIcon className="h-12 w-12 text-[#0078D4]" />
            <img
              src="/products/typelr/SPLASH%20SCREEN%20LOGO.jpg"
              alt="TYPE LR"
              className="h-14 w-auto object-contain rounded border border-border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
            style={{ fontFamily: monoFont }}
          >
            // DOWNLOAD PORTABLE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.08em" }}
          >
            TYPE LR · Portable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Windows 10/11 (64-bit). Download the full folder as a zip — extract and run TypeLR.exe inside. No separate .NET install.
          </motion.p>

          {/* PC detection */}
          {isWindows === false && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 border border-amber-500/30 bg-amber-500/5 rounded-lg flex items-start gap-3 text-left"
            >
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Not on Windows</p>
                <p className="text-sm text-muted-foreground">
                  TYPE LR runs on Windows 10/11 (64-bit). You can still download the portable and transfer it to a Windows PC.
                </p>
              </div>
            </motion.div>
          )}

          {isWindows === true && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              style={{ fontFamily: monoFont }}
            >
              <Monitor className="h-4 w-4 text-[#0078D4]" />
              <span>Windows detected — ready to download</span>
            </motion.div>
          )}

          {/* Install / Download button + animation */}
          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.button
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onClick={startDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-xl bg-foreground text-background text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
                style={{ fontFamily: monoFont }}
              >
                <WindowsIcon className="h-8 w-8 text-white" />
                <span className="uppercase tracking-[0.15em]">Download portable</span>
                <Download className="h-6 w-6" />
              </motion.button>
            )}

            {(phase === "preparing" || phase === "downloading") && (
              <motion.div
                key="progress"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="w-8 h-8 rounded-full border-2 border-foreground/30 border-t-foreground"
                  />
                  <span className="text-sm uppercase tracking-wider text-muted-foreground" style={{ fontFamily: monoFont }}>
                    {phase === "preparing" ? "Preparing..." : "Downloading..."}
                  </span>
                </div>
                <div className="h-2 bg-card border border-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-foreground"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: 9999 }}
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                  {progress}%
                </p>
              </motion.div>
            )}

            {phase === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400">
                  <Check className="h-8 w-8" />
                  <span className="text-lg font-semibold uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                    Download started
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Extract <code className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground" style={{ fontFamily: monoFont }}>TypeLR-Portable.zip</code> and run <code className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground" style={{ fontFamily: monoFont }}>TypeLR.exe</code> from inside the folder. No install needed — portable.
                </p>
                <button
                  onClick={() => { setPhase("idle"); setProgress(0); }}
                  className="text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontFamily: monoFont }}
                >
                  Download again
                </button>
              </motion.div>
            )}

            {phase === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 border border-red-500/30 bg-red-500/5 rounded-lg text-red-600 dark:text-red-400"
              >
                <p className="mb-2">Download could not start.</p>
                <a
                  href={DOWNLOAD_URL}
                  download={DOWNLOAD_FILENAME}
                  className="text-sm underline"
                >
                  Click here to download TypeLR-Portable.zip
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/products/typelr"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: monoFont }}
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to TYPE LR
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: monoFont }}
            >
              All products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
