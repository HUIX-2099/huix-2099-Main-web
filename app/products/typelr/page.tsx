"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import { ArrowRight, ArrowDown, Monitor, BookOpen, Gamepad2, BarChart3, Briefcase, Users } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

// Windows 11–style icon (4 panes)
function WindowsIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5.5L10.5 4.2V11.25H3V5.5ZM10.5 12.75V19.8L3 18.45V12.75H10.5ZM11.25 4.2L21 3V11.25H11.25V4.2ZM21 12.75V21L11.25 19.8V12.75H21Z" />
    </svg>
  )
}

const features = [
  { icon: Monitor, label: "Typing trainer", detail: "Home row, top row, bottom row, numbers, punctuation" },
  { icon: BookOpen, label: "Liberian content", detail: "All 15 counties, common names, phrases, history" },
  { icon: Gamepad2, label: "Gamification", detail: "Levels, XP, 20+ badges, daily challenges, leaderboards" },
  { icon: BarChart3, label: "Progress tracking", detail: "Stats, best WPM/accuracy, streaks, words typed" },
  { icon: Briefcase, label: "Professional skills", detail: "Business writing, CV/resume, email" },
  { icon: Users, label: "Multiplayer", detail: "Compete and learn with others" },
]

const howItWorksSteps = [
  { num: "01", title: "Learn", desc: "Start with the basics. TYPE LR guides you through home row, top row, and bottom row with Liberian context — names, places, and phrases you know." },
  { num: "02", title: "Practice", desc: "Level up with gamified lessons. Earn XP, unlock badges, and climb the leaderboards. Practice offline anytime, anywhere." },
  { num: "03", title: "Master", desc: "Reach real-world readiness. From business writing to CVs and email, TYPE LR prepares you for professional digital skills." },
]

const roadmapItems = [
  "Voice guidance in Liberian English",
  "Certificate generation",
  "School/training-center mode with teacher dashboard",
  "USB/LAN offline install packages",
  "Expanded digital skills (Word, Excel, email basics, intro to coding, CV writing, online safety)",
]

export default function TypeLrPage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const isDark = resolvedTheme === "dark"

  return (
    <>
      <Navbar />

      {/* Hero — HUIX-style full viewport */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-background border-b border-border">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] z-[1]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Dotted accent — Liberian red */}
        <div
          className="absolute inset-0 opacity-[0.04] z-[1]"
          style={{
            backgroundImage: "radial-gradient(circle, #BF0D3E 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Background: TYPE LR splash */}
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-[2]"
          style={{
            backgroundImage: "url('/products/typelr/SPLASH%20SCREEN%20LOGO.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.08,
            y: contentY,
          }}
        />

        {/* Overlay */}
        <motion.div
          className={`absolute inset-0 z-[3] ${isDark ? "bg-black" : "bg-white"}`}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [isDark ? 0.15 : 0.08, 0.75]),
          }}
        />

        {/* Top meta bar — Windows + TYPE LR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-0 left-0 right-0 z-20 border-b border-border/30"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div
              className="flex items-center justify-between h-12 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60"
              style={{ fontFamily: monoFont }}
            >
              <div className="flex items-center gap-4">
                <span>HUIX-2099</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span className="hidden sm:inline">PRODUCTS · SOFTWARE</span>
              </div>
              <div className="flex items-center gap-4">
                <WindowsIcon className="h-5 w-5 text-[#0078D4]" />
                <img
                  src="/icons/icons8-microsoft-48.png"
                  alt="Microsoft"
                  className="h-5 w-5 object-contain opacity-70"
                />
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>TYPE LR</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>WINDOWS 10/11</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="relative z-10 min-h-screen flex items-center"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[300px_1fr_300px] gap-8 lg:gap-12 items-center py-24">
              {/* Left panel */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-[80px] md:text-[100px] font-bold leading-[0.75] text-foreground/[0.08]" style={{ fontFamily: "Mohican, sans-serif" }}>
                  01
                </div>
                <div className="border-l-2 border-foreground/20 pl-6 space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    DIGITAL SKILLS
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}>
                    TYPE LR
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Digital Skills for Liberia. A modern typing tutor built for Liberians — teaching practical skills with local context.
                  </p>
                </div>
                <div className="pt-4 space-y-3" style={{ fontFamily: monoFont }}>
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>[01]</span>
                    <span className="h-px flex-1 bg-border/30" />
                    <span>PRD</span>
                  </div>
                </div>
              </motion.div>

              {/* Center — TYPE LR visual + Windows */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="flex flex-col items-center justify-center relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 border-l border-r border-t border-foreground/10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 border-l border-r border-b border-foreground/10" />
                <div className="relative border border-border bg-card/50 p-4">
                  <img
                    src="/products/typelr/SPLASH%20SCREEN%20LOGO.jpg"
                    alt="TYPE LR"
                    className="w-48 h-auto object-contain"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-background border border-border text-[8px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                    <WindowsIcon className="h-4 w-4 text-[#0078D4]" />
                    Windows 10/11 · 64-bit
                  </div>
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground/80 italic">"Teaching Liberians to type, one keystroke at a time." 🇱🇷⌨️</p>
              </motion.div>

              {/* Right panel — CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-[80px] md:text-[100px] font-bold leading-[0.75] text-foreground/[0.08] text-right" style={{ fontFamily: "Mohican, sans-serif" }}>
                  02
                </div>
                <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    WINDOWS · OFFLINE
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    .NET 8 · WPF · Self-contained. No extra install. Runs fully offline.
                  </p>
                </div>
                <div className="pt-4 flex flex-col items-end gap-4">
                  <Link href="/products/typelr/install">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-6 py-3 bg-foreground text-background text-[11px] uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
                      style={{ fontFamily: monoFont }}
                    >
                      <WindowsIcon className="h-5 w-5 text-white" />
                      <span>Download portable</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/products">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>Back to products</span>
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </motion.button>
                  </Link>
                </div>
                <div className="pt-4" style={{ fontFamily: monoFont }}>
                  <div className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>IN PROGRESS</span>
                    <span className="h-px w-12 bg-border/30" />
                    <span>[02]</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom meta bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-20 border-t border-border/30"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
                style={{ fontFamily: monoFont }}
              >
                <ArrowDown className="h-3 w-3" />
                <span>Scroll</span>
              </motion.div>
              <div className="hidden md:flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                <span>TYPE LR</span>
                <span className="h-px w-6 bg-border/30" />
                <span>p. 01</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                <WindowsIcon className="h-4 w-4 text-[#0078D4]" />
                <span>.NET 8 · WPF</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How it works — inspiration 3-step cards */}
      <section className="py-16 lg:py-24 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2" style={{ fontFamily: monoFont }}>
                // HOW IT WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}>
                Digital skills made effortless and impactful.
              </h2>
            </div>
            <Link
              href="/products/typelr/install"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
              style={{ fontFamily: monoFont }}
            >
              Download portable
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="relative">
                  <div className="text-[40px] font-bold text-foreground/20 mb-4" style={{ fontFamily: monoFont }}>{step.num}.</div>
                  <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.08em" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-8" style={{ fontFamily: monoFont }}>
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 border border-border bg-card/30 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 border border-border">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: monoFont }}>{f.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">{f.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech & Design + Windows */}
      <section className="py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4" style={{ fontFamily: monoFont }}>Tech</h2>
              <p className="text-muted-foreground leading-relaxed">
                .NET 8, WPF (XAML). Windows 10/11 (64-bit), self-contained. User data stored locally — full offline.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4" style={{ fontFamily: monoFont }}>Design</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dark theme with Liberian flag colors: red, blue, gold for actions and achievements.
              </p>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded border border-border bg-[#BF0D3E]" title="Red" />
                <span className="w-8 h-8 rounded border border-border bg-[#002868]" title="Blue" />
                <span className="w-8 h-8 rounded border border-border bg-[#C5B358]" title="Gold" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
              <div className="p-4 border border-border bg-card rounded-lg flex items-center justify-center">
                <WindowsIcon className="h-12 w-12 text-[#0078D4]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1" style={{ fontFamily: monoFont }}>Platform</div>
                <p className="text-foreground font-semibold">Windows 10/11 · 64-bit</p>
                <p className="text-sm text-muted-foreground">Native desktop app</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who built it */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4" style={{ fontFamily: monoFont }}>Who built it</h2>
            <p className="text-muted-foreground leading-relaxed">
              Built and maintained by <strong className="text-foreground">HUIX (Victor Edet Coleman)</strong>. Distribution in Liberia in partnership with <strong className="text-foreground">Amara</strong>. One product, one market — built for Liberia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6" style={{ fontFamily: monoFont }}>Roadmap</h2>
          <p className="text-muted-foreground mb-6">Planned or possible next steps:</p>
          <ul className="space-y-2">
            {roadmapItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-[10px] text-muted-foreground/50 mt-1" style={{ fontFamily: monoFont }}>[{String(i + 1).padStart(2, "0")}]</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tagline + Install CTA */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium text-center text-muted-foreground mb-4"
            style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
          >
            TYPE LR – Digital Skills for Liberia. Made with ❤️ for Liberia.
          </motion.p>
          <p className="text-center text-muted-foreground/80 italic mb-8">"The Love of Liberty Brought Us Here."</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/products/typelr/install">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
                style={{ fontFamily: monoFont }}
              >
                <WindowsIcon className="h-6 w-6 text-white" />
                Download portable
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: monoFont }}>
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
