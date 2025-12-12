"use client"

import { useRef, useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Use a stable default for SSR, then switch to actual theme on client
  const isDark = mounted ? resolvedTheme === "dark" : false

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [isDark ? 0.2 : 0.1, 0.8])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const bgImage = isDark
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20dark%20logo%20jpg-hsTGc84LzW8UXZuWwFFWi2KEDNl22K.jpg"
    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20white%20logo%20jpg-l8PO2vmS2QGLye3u4EgPMgyDDxU3jy.jpg"

  const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-[1]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-[2]"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          y: backgroundY,
          scale: backgroundScale,
        }}
      />
      
      {/* Gradient Overlay */}
      <motion.div 
        className={`absolute inset-0 z-[3] ${isDark ? "bg-black" : "bg-white"}`}
        style={{ opacity: overlayOpacity }}
      />

      {/* Top Meta Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-20 border-b border-border/30"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
            <div className="flex items-center gap-4">
              <span>HUIX-2099</span>
              <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
              <span className="hidden sm:inline">MONROVIA · LIBERIA</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">EST. 2024</span>
              <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
              <span>INDEX · 00</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center py-24">
            
            {/* Left Panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Number */}
              <div className="flex items-start gap-4">
                <div 
                  className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.08]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  01
                </div>
              </div>

              {/* Definition Block */}
              <div className="border-l-2 border-foreground/20 pl-6 space-y-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                  THE DEFINITION
                </div>
                <div className="space-y-2">
                  {[
                    { letter: "H", word: "Hyper" },
                    { letter: "U", word: "Unified" },
                    { letter: "I", word: "Intelligent" },
                    { letter: "X", word: "eXperience" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.letter}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-baseline gap-3"
                    >
                      <span 
                        className="text-2xl md:text-3xl font-bold text-foreground tracking-[0.1em]"
                        style={{ fontFamily: 'Mohican, sans-serif' }}
                      >
                        {item.letter}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        = {item.word}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Meta Info */}
              <div className="pt-4 space-y-3" style={{ fontFamily: monoFont }}>
                <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                  <span>[0 1]</span>
                  <span className="h-px flex-1 bg-border/30" />
                  <span>DEF</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Merging human creativity with digital innovation to create seamless ecosystems.
                </p>
              </div>
            </motion.div>

            {/* Center - Visual Focus Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/10" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-foreground/10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-foreground/10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-foreground/10" />
              
              {/* Center Label */}
              <div className="text-center">
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/30 mb-2" style={{ fontFamily: monoFont }}>
                  HUIX-2099
                </div>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              </div>
            </motion.div>

            {/* Right Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Number */}
              <div className="flex items-start justify-end gap-4">
                <div 
                  className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  02
                </div>
              </div>

              {/* Content Block */}
              <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                  UNIFIED REALITY
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-foreground tracking-[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  Building<br />Digital Worlds
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  VR, XR, AR, AI, and 3D visualization merged into one living ecosystem. We build universes powered by next-generation technology.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col items-end gap-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                    style={{ fontFamily: monoFont }}
                  >
                    <span>Explore Work</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
                    style={{ fontFamily: monoFont }}
                  >
                    <span>Contact</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Meta Info */}
              <div className="pt-4" style={{ fontFamily: monoFont }}>
                <div className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                  <span>VIS</span>
                  <span className="h-px w-12 bg-border/30" />
                  <span>[0 2]</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Meta Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-border/30"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left - Scroll Indicator */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
              style={{ fontFamily: monoFont }}
            >
              <ArrowDown className="h-3 w-3" />
              <span>Scroll</span>
            </motion.div>

            {/* Center - Page Info */}
            <div className="hidden md:flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
              <span>HOME</span>
              <span className="h-px w-6 bg-border/30" />
              <span>p. 0 1</span>
            </div>

            {/* Right - Tech Stack */}
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
              <span className="hidden sm:inline">VR · XR · AR · AI</span>
              <span className="inline-block h-px w-4 bg-border/30" />
              <span>3D</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-4 lg:left-8 z-20">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 80 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-px bg-gradient-to-b from-foreground/20 to-transparent"
        />
      </div>
      <div className="absolute top-20 right-4 lg:right-8 z-20">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 80 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="w-px bg-gradient-to-b from-foreground/20 to-transparent"
        />
      </div>
    </section>
  )
}
