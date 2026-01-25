"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import { ExternalLink, Facebook, Linkedin, Palette, ArrowRight, ArrowDown } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const HUIX_THEME_MARKETPLACE = "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme"

const designTable = [
  { element: "Background", color: "#0A0A0A" },
  { element: "Keywords", color: "#FF6B00 Bright Orange" },
  { element: "Strings", color: "#00FF88 Neon Green" },
  { element: "Functions", color: "#FFD000 Electric Yellow" },
  { element: "Types/Classes", color: "#00DDFF Neon Cyan" },
  { element: "Numbers", color: "#FF3366 Hot Pink" },
  { element: "Variables", color: "#FFFFFF Pure White" },
  { element: "Comments", color: "#666666 Subtle Gray" },
  { element: "Operators", color: "#FF9500 Orange" },
]

const commands = [
  { command: "HUIX: Toggle Background Image", description: "Enable/disable satellite background" },
  { command: "HUIX: Toggle Format on Save", description: "Enable/disable auto-formatting" },
  { command: "HUIX: Format Document", description: "Format current file" },
  { command: "HUIX: Open Settings", description: "Open HUIX settings menu" },
]

export default function HuixThemePage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Navbar />

      {/* Hero — VPL-style full viewport */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-background border-b border-border">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] z-[1]"
          style={{
            backgroundImage: `linear-gradient(${resolvedTheme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px), linear-gradient(90deg, ${resolvedTheme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Background: subtle logo watermark */}
        <motion.div
          className="absolute inset-0 w-full h-[130%] -top-[15%] z-[2]"
          style={{
            backgroundImage: "url('/products/huix-theme/Media/logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.06,
            y: heroY,
          }}
        />

        {/* Overlay */}
        <motion.div
          className={`absolute inset-0 z-[3] ${resolvedTheme === "dark" ? "bg-black" : "bg-white"}`}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [resolvedTheme === "dark" ? 0.2 : 0.1, 0.8]),
          }}
        />

        {/* Top meta bar — Microsoft + VS Code icons */}
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
                <img
                  src="/icons/icons8-microsoft-48.png"
                  alt="Microsoft"
                  className="h-5 w-5 object-contain opacity-70"
                />
                <img
                  src="/icons/icons8-visual-studio-code-2019-48.png"
                  alt="Visual Studio Code"
                  className="h-5 w-5 object-contain opacity-70"
                />
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>HUIX-THEME</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>VS CODE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          className="relative z-10 min-h-screen flex items-center"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]),
            opacity: heroOpacity,
          }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center py-24">
              {/* Left panel */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.08]"
                    style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}
                  >
                    01
                  </div>
                </div>

                <div className="border-l-2 border-foreground/20 pl-6 space-y-4">
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
                    style={{ fontFamily: monoFont }}
                  >
                    VS CODE THEME
                  </div>
                  <h1
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}
                  >
                    HUIX-THEME
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Premium dark VS Code theme with satellite hardware background and ultra-sharp
                    neon syntax colors. Clean, minimal design with maximum code visibility.
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

              {/* Center — logo in frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="hidden lg:flex items-center justify-center relative"
              >
                <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/10" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-foreground/10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-foreground/10" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-foreground/10" />
                <img
                  src="/products/huix-theme/Media/logo.png"
                  alt="HUIX-THEME"
                  className="h-24 w-auto object-contain"
                />
              </motion.div>

              {/* Right panel — Microsoft + VS Code icons, CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-start justify-end gap-4">
                  <div
                    className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.08]"
                    style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}
                  >
                    02
                  </div>
                </div>

                <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
                    style={{ fontFamily: monoFont }}
                  >
                    VS CODE · MICROSOFT
                  </div>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <img
                      src="/icons/icons8-microsoft-48.png"
                      alt="Microsoft"
                      className="h-8 w-8 object-contain opacity-80"
                    />
                    <img
                      src="/icons/icons8-visual-studio-code-2019-48.png"
                      alt="Visual Studio Code"
                      className="h-8 w-8 object-contain opacity-80"
                    />
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Neon syntax · Dark</div>
                    <div>Satellite background</div>
                    <div>VS Code Marketplace</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-end gap-4">
                  <Link href={HUIX_THEME_MARKETPLACE} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>View on Marketplace</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>

                <div className="pt-4" style={{ fontFamily: monoFont }}>
                  <div className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>THEME</span>
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
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Card - View on Marketplace (Click and View) */}
      <section className="py-8 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-border bg-card rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-32 sm:w-40 h-20 sm:h-24 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden p-2">
                <img
                  src="/products/huix-theme/Media/logo.png"
                  alt="HUIX-THEME"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2
                  className="text-lg font-bold uppercase tracking-wide mb-1"
                  style={{ fontFamily: "Mohican, sans-serif" }}
                >
                  Install HUIX-THEME
                </h2>
                <p
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  style={{ fontFamily: monoFont }}
                >
                  <img src="/icons/icons8-microsoft-48.png" alt="Microsoft" className="h-4 w-4 object-contain opacity-70" />
                  <img src="/icons/icons8-visual-studio-code-2019-48.png" alt="VS Code" className="h-4 w-4 object-contain opacity-70" />
                  VS Code Marketplace · Free
                </p>
              </div>
            </div>
            <Link
              href={HUIX_THEME_MARKETPLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity shrink-0"
              style={{ fontFamily: monoFont }}
            >
              <ExternalLink className="h-4 w-4" />
              View on Marketplace
            </Link>
          </motion.div>
        </div>
      </section>

      {/* YouTube — single video, loops (replays) forever */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-8"
            style={{ fontFamily: monoFont }}
          >
            [MEDIA] SHOWCASE
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg border border-border bg-card"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8auhq0VIxqo?autoplay=1&mute=1&loop=1&playlist=8auhq0VIxqo"
              title="YouTube video player - HUIX-THEME"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full min-h-[280px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Developer & Company */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                style={{ fontFamily: monoFont }}
              >
                [01] DEVELOPER
              </div>
              <h2
                className="text-xl font-bold mb-2 uppercase tracking-wide"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                Victor Edet Coleman
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://web.facebook.com/victor.coleman.745874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontFamily: monoFont }}
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-coleman-4731701a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontFamily: monoFont }}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                style={{ fontFamily: monoFont }}
              >
                [02] COMPANY
              </div>
              <h2
                className="text-xl font-bold mb-2 uppercase tracking-wide"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                HUIX-2099 — Monrovia, Liberia
              </h2>
              <a
                href="https://huix-2099.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                style={{ fontFamily: monoFont }}
              >
                https://huix-2099.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 lg:py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [03] FEATURES
          </div>
          <ul className="space-y-3">
            {[
              "Satellite Hardware Background — Subtle tech-inspired background image",
              "Ultra-Sharp Neon Colors — Maximum visibility syntax highlighting",
              "Deep Dark Base — #0A0A0A pure dark background",
              "Vibrant Accents — Electric orange, neon cyan, hot pink, bright green",
              "High Contrast — Every token pops off the screen",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 py-2 border-b border-border/30 last:border-b-0"
                style={{ fontFamily: monoFont }}
              >
                <span className="text-[9px] text-muted-foreground/50 shrink-0">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Design Table */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: monoFont }}
          >
            <Palette className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              [04] DESIGN
            </span>
          </div>
          <div className="border border-border overflow-hidden rounded-lg">
            <div
              className="grid grid-cols-2 gap-4 px-4 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground"
              style={{ fontFamily: monoFont }}
            >
              <span>ELEMENT</span>
              <span>COLOR</span>
            </div>
            {designTable.map((row, i) => (
              <div
                key={row.element}
                className="grid grid-cols-2 gap-4 px-4 py-3 border-b border-border/30 last:border-b-0 text-sm"
                style={{ fontFamily: monoFont }}
              >
                <span className="text-muted-foreground">{row.element}</span>
                <span className="text-foreground">{row.color}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="py-12 lg:py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [05] INSTALL
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3" style={{ fontFamily: monoFont }}>
              <span className="text-[9px] text-muted-foreground/50 shrink-0">[01]</span>
              <span className="text-sm">Install from VSIX or VS Code Marketplace</span>
            </li>
            <li className="flex gap-3" style={{ fontFamily: monoFont }}>
              <span className="text-[9px] text-muted-foreground/50 shrink-0">[02]</span>
              <span className="text-sm">Press Ctrl+K Ctrl+T</span>
            </li>
            <li className="flex gap-3" style={{ fontFamily: monoFont }}>
              <span className="text-[9px] text-muted-foreground/50 shrink-0">[03]</span>
              <span className="text-sm">Select HUIX-THEME</span>
            </li>
          </ul>
          <Link
            href={HUIX_THEME_MARKETPLACE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
            style={{ fontFamily: monoFont }}
          >
            <ExternalLink className="h-4 w-4" />
            View on Marketplace
          </Link>
        </div>
      </section>

      {/* Commands */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [06] COMMANDS
          </div>
          <div className="border border-border overflow-hidden rounded-lg">
            <div
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 px-4 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground"
              style={{ fontFamily: monoFont }}
            >
              <span>COMMAND</span>
              <span>DESCRIPTION</span>
            </div>
            {commands.map((row) => (
              <div
                key={row.command}
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 px-4 py-3 border-b border-border/30 last:border-b-0 text-sm"
                style={{ fontFamily: monoFont }}
              >
                <span className="text-foreground font-medium">{row.command}</span>
                <span className="text-muted-foreground">{row.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="py-12 lg:py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [07] SETTINGS
          </div>
          <pre
            className="p-6 bg-background border border-border rounded-lg text-sm overflow-x-auto"
            style={{ fontFamily: monoFont }}
          >
            {`{
  "huix2099.backgroundEnabled": true,
  "huix2099.backgroundOpacity": 0.03,
  "huix2099.formatOnSave": true
}`}
          </pre>
        </div>
      </section>

      {/* Background Image */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [08] BACKGROUND IMAGE
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            The theme includes a satellite hardware background image that appears subtly behind your
            code. You can:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
              <span className="text-foreground/50">·</span>
              Toggle it on/off with the command palette (Ctrl+Shift+P → &quot;HUIX: Toggle Background
              Image&quot;)
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
              <span className="text-foreground/50">·</span>
              Adjust opacity in settings (0.01 - 0.2)
            </li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="py-12 lg:py-16 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
            style={{ fontFamily: monoFont }}
          >
            [09] ABOUT HUIX-2099
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-4">
            HUIX-2099 is a technology company building the digital future of Africa from Monrovia,
            Liberia.
          </p>
          <p
            className="text-[10px] text-muted-foreground/60"
            style={{ fontFamily: monoFont }}
          >
            MIT © 2024-2026 Victor Edet Coleman / HUIX-2099
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-border rounded-lg bg-card">
            <div>
              <h2
                className="text-xl font-bold uppercase tracking-wide mb-2"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                Ready to use HUIX-THEME?
              </h2>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
                Install from the VS Code Marketplace — free.
              </p>
            </div>
            <Link
              href={HUIX_THEME_MARKETPLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity shrink-0"
              style={{ fontFamily: monoFont }}
            >
              <ExternalLink className="h-5 w-5" />
              View on Marketplace
            </Link>
          </div>
          <div
            className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40"
            style={{ fontFamily: monoFont }}
          >
            <Link href="/products" className="hover:text-foreground/60 transition-colors">
              ← All Products
            </Link>
            <span>HUIX-THEME · PRD</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
