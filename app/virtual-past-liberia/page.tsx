"use client"

import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { ArrowRight, ArrowUpRight, ExternalLink, Play, ArrowDown } from "lucide-react"
import Link from "next/link"
import { ParallaxReveal, ParallaxText } from "@/components/parallax"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

export default function VirtualPastLiberiaPage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const tribes = [
    "Kpelle", "Bassa", "Gio", "Mano", "Kru", "Grebo", "Mandingo", "Krahn",
    "Gola", "Gbandi", "Loma", "Kissi", "Vai", "Dei", "Bella", "Mende"
  ]

  const floorPlans = [
    { id: "00", title: "Ground Floor", subtitle: "Mask Building", desc: "Cultural gateway with traditional Liberian masks", image: "/images/ground-20floor.png" },
    { id: "01", title: "First Floor", subtitle: "Ceremonial Space", desc: "Tribal spaces with immersive storytelling", image: "/images/first-20floor.png" },
    { id: "02", title: "Third Floor", subtitle: "Exhibition Hall", desc: "Digital archives of artifacts and history", image: "/images/third.png" },
    { id: "03", title: "3D Model", subtitle: "Full Visualization", desc: "Complete architectural rendering", image: "/images/3d.png" },
  ]

  const team = [
    { name: "Victor Edet Coleman", role: "Founder & 3D Innovator", desc: "Liberian 3D Software Engineer", linkedin: "https://www.linkedin.com/in/victor-coleman-4731701a5/" },
    { name: "Amanda Anderson", role: "Architect & Designer", desc: "The Ancestral Grid Architect", linkedin: "https://www.linkedin.com/in/amanda-anderson-88a18635a/" },
  ]

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section - Matching Home Style */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-background">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] z-[1]"
          style={{
            backgroundImage: `linear-gradient(${resolvedTheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px), linear-gradient(90deg, ${resolvedTheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-[130%] -top-[15%] z-[2]"
          style={{
            backgroundImage: `url('${
              resolvedTheme === "dark"
                ? "/images/virtual-20past-20liberia-20dark-20main-20version.jpg"
                : "/images/virtual-20past-20liberia-20white-20main-20version.jpg"
            }')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: heroY,
          }}
        />
        
        {/* Overlay */}
        <motion.div 
          className={`absolute inset-0 z-[3] ${resolvedTheme === "dark" ? "bg-black" : "bg-white"}`}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [resolvedTheme === "dark" ? 0.2 : 0.1, 0.8]) }}
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
                <span>VIRTUAL PAST LIBERIA</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span className="hidden sm:inline">HERITAGE VR</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline">2024-2025</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>INDEX · 02</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 min-h-screen flex items-center"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity: heroOpacity }}
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
                <div className="flex items-start gap-4">
                  <div 
                    className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.08]"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    01
                  </div>
                </div>

                <div className="border-l-2 border-foreground/20 pl-6 space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    THE PROJECT
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    Virtual Past<br />Liberia
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A digital time bridge reviving Liberia's cultural heritage through VR and AI-powered storytelling.
                  </p>
                </div>

                <div className="pt-4 space-y-3" style={{ fontFamily: monoFont }}>
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>[01]</span>
                    <span className="h-px flex-1 bg-border/30" />
                    <span>HER</span>
                  </div>
                </div>
              </motion.div>

              {/* Center */}
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
                
                <div className="text-center">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/30 mb-2" style={{ fontFamily: monoFont }}>
                    VPL
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
                <div className="flex items-start justify-end gap-4">
                  <div 
                    className="text-[80px] md:text-[100px] font-bold leading-none text-foreground/[0.08]"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    16
                  </div>
                </div>

                <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                    THE ANCESTRAL GRID
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>16 Tribes Represented</div>
                    <div>3 Immersive Floors</div>
                    <div>Digital Archive</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-end gap-4">
                  <Link href="#tribes">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>Explore Heritage</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact?subject=VPL Sponsorship">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>Become Sponsor</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>

                <div className="pt-4" style={{ fontFamily: monoFont }}>
                  <div className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>VR</span>
                    <span className="h-px w-12 bg-border/30" />
                    <span>[16]</span>
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
                <span>VIRTUAL PAST LIBERIA</span>
                <span className="h-px w-6 bg-border/30" />
                <span>p. 01</span>
              </div>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                <span className="hidden sm:inline">HERITAGE · VR</span>
                <span className="inline-block h-px w-4 bg-border/30" />
                <span>3D</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Corner Lines */}
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

      {/* Cardholder Section */}
      <section className="py-12 bg-[#202020]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Card Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="relative w-full max-w-[360px] h-[280px] mx-auto">
                {/* Hidden Info */}
                <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${isCardHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
                    System Specs
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
                    <div className="flex justify-between"><span>Tribes</span><span className="text-neutral-300">16</span></div>
                    <div className="flex justify-between"><span>Floors</span><span className="text-neutral-300">3</span></div>
                    <div className="flex justify-between"><span>Artifacts</span><span className="text-neutral-300">100+</span></div>
                    <div className="flex justify-between"><span>Platform</span><span className="text-amber-600">WebXR</span></div>
                    <div className="flex justify-between"><span>Status</span><span className="text-amber-600">In Development</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
                    <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
                      Virtual Past Liberia · Heritage VR
                    </div>
                  </div>
                </div>

                {/* Wallet Body */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-transform duration-300 ${isCardHovered ? '-translate-y-4' : ''}`}
                  style={{ backgroundColor: '#1a1a1a', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                />

                {/* Gray Card */}
                <div 
                  className={`absolute -top-6 left-3 right-3 h-20 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-6' : ''}`}
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <div>SN-VPL-2024</div>
                    <div>REV-B2</div>
                    <div>HER-LBR-001</div>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    ○ HERITAGE
                  </div>
                  <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
                    <div className="text-lg font-bold text-neutral-400">16</div>
                    <div className="text-lg font-bold text-neutral-500">TRIBES</div>
                  </div>
                </div>

                {/* Brown Accent Card */}
                <div 
                  className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-5' : ''}`}
                  style={{ backgroundColor: '#8B4513' }}
                >
                  <div 
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full"
                    style={{ backgroundColor: '#1a1a1a' }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                      <span className="text-[7px] text-black/50" style={{ fontFamily: monoFont }}>© HUIX 2025</span>
                    </div>
                    <div className="text-3xl font-bold text-white leading-none tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      VIRTUAL
                    </div>
                    <div className="text-2xl font-bold text-white/90 leading-none tracking-[0.08em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      PAST
                    </div>
                    <div className="text-xl font-bold text-white/80 leading-none tracking-[0.06em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      LIBERIA
                    </div>
                    <div className="absolute top-4 right-4 text-right text-[7px] text-white/60" style={{ fontFamily: monoFont }}>
                      <div>VR · 3D · AI</div>
                      <div>HERITAGE</div>
                      <div className="mt-1">v1.0</div>
                    </div>
                  </div>
                </div>

                {/* Accent Tab */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${isCardHovered ? '-translate-y-8' : '-translate-y-1/2'}`}
                  style={{ backgroundColor: '#8B4513' }} 
                />

                {/* Keychain */}
                <div className={`absolute -right-12 top-1/3 transition-transform duration-300 ${isCardHovered ? '-translate-y-3' : ''}`}>
                  <div className="w-3 h-6 bg-neutral-700 rounded-sm" />
                  <div className="w-2 h-12 bg-neutral-800 rounded-sm mx-auto" />
                  <div className="w-6 h-6 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                  {isCardHovered ? 'Release to close' : 'Hover to reveal'}
                </span>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                Project · Overview
              </div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                HERITAGE VR
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                Virtual Past Liberia is a groundbreaking VR experience that preserves and celebrates 
                Liberia's rich cultural heritage through immersive technology, connecting generations 
                across time and space.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "TRIBES", value: "16" },
                  { label: "FLOORS", value: "3" },
                  { label: "ARTIFACTS", value: "100+" },
                ].map((stat) => (
                  <div key={stat.label} className="px-3 py-2 bg-neutral-800/50 border border-neutral-700 text-[10px]" style={{ fontFamily: monoFont }}>
                    <span className="text-neutral-500">{stat.label}:</span>{' '}
                    <span className="text-amber-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 16 Tribes Section */}
      <section id="tribes" className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            {/* Left - Number */}
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  16
                </div>
              </ParallaxText>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-end justify-between border-b border-border pb-4 mb-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: monoFont }}>
                    CULTURAL FOUNDATION
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                    The Tribes of Liberia
                  </h2>
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                  16 groups
                </div>
              </div>

              <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                The Virtual Past Liberia experience is architected around the 16 major tribes and ethnic groups of Liberia. Each tribe has dedicated spaces within The Ancestral Grid where their unique history, traditions, art, music, and cultural artifacts are preserved.
              </p>

              {/* Tribes Grid */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {tribes.map((tribe, index) => (
                  <motion.div
                    key={tribe}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 border border-border/50 hover:border-foreground/30 transition-colors text-center"
                  >
                    <div className="text-[8px] text-muted-foreground/40 mb-0.5" style={{ fontFamily: monoFont }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.1em]" style={{ fontFamily: monoFont }}>
                      {tribe}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ancestral Grid Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16 mb-16">
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  02
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: monoFont }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">ARCHITECTURE</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  The Ancestral Grid
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Architecture by Amanda Anderson — A flowing, web-like structure representing the connection between ancestral memory and digital intelligence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Document · Virtual Museum
                </div>
                <div className="border-l-2 border-foreground/20 pl-4 space-y-2">
                  <div className="text-[28px] font-bold leading-tight text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                    Virtual Past Liberia · Museum in Motion
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A living archive built to travel. Every gallery in the Ancestral Grid can be experienced on a Quest headset, a laptop, or a phone in WebXR, letting diasporic families, students, and visitors walk Liberia’s stories without waiting for installs.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Architects and curators keep control of the source spaces—switch floors, rearrange exhibits, and push updates instantly. Community guests tap a link or scan a QR to join a synchronized tour where voices, highlights, and annotations stay anchored to each artifact.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70" style={{ fontFamily: monoFont }}>
                <span>02 · Exhibit Plan</span>
                <span>Floors &amp; Models · 4 items</span>
              </div>

              {/* Floor Plans Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {floorPlans.map((floor, index) => (
                  <motion.div
                    key={floor.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-background border border-border/70 hover:border-foreground/40 transition-all overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={floor.image}
                        alt={floor.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-[9px] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                          [{floor.id}]
                        </div>
                        <ArrowUpRight className="h-3 w-3 text-muted-foreground/30 group-hover:text-foreground transition-colors" />
                      </div>
                      <h3 className="font-bold mb-1">{floor.title}</h3>
                      <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground/60 mb-2" style={{ fontFamily: monoFont }}>
                        {floor.subtitle}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {floor.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Accent Section - Heritage Mission */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ff5a00" }}>
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-black/20" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-black/20" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-black/20" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-black/20" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          {/* Top Meta */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-16 text-black"
            style={{ fontFamily: monoFont }}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">
              OUR MISSION
            </div>
            <div className="text-[10px] uppercase tracking-[0.15em] opacity-60">
              3 PILLARS · CULTURAL PRESERVATION
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
            {/* Left - Big Title + Description */}
            <div className="text-black">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div 
                  className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-[0.85] opacity-20"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  ∿
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] -mt-8"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  Bridging<br />Time
                </h2>
                <p className="mt-6 text-black/70 max-w-md leading-relaxed">
                  Virtual Past Liberia connects generations through immersive technology, preserving centuries of culture, wisdom, and tradition in digital form for eternity.
                </p>
              </motion.div>
            </div>

            {/* Right - Three Pillars */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  { num: "01", title: "Explore", desc: "Journey through reconstructed historical sites and villages", active: true },
                  { num: "02", title: "Discover", desc: "Uncover stories, artifacts, and traditions of 16 tribes", active: false },
                  { num: "03", title: "Preserve", desc: "Safeguard cultural heritage for future generations", active: false },
                ].map((pillar, index) => (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start gap-4 p-4 border-l-2 ${pillar.active ? 'border-black bg-black/10' : 'border-black/20'}`}
                  >
                    <div 
                      className={`text-2xl font-bold ${pillar.active ? 'text-black' : 'text-black/30'}`}
                      style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                    >
                      {pillar.num}
                    </div>
                    <div>
                      <div className={`text-xl font-bold ${pillar.active ? 'text-black' : 'text-black/50'}`} style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                        {pillar.title}
                      </div>
                      <div className="text-sm text-black/60" style={{ fontFamily: monoFont }}>
                        {pillar.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "16", unit: "", label: "Tribes represented" },
              { value: "3", unit: "", label: "Immersive floors" },
              { value: "100+", unit: "", label: "Cultural artifacts" },
              { value: "∞", unit: "", label: "Stories to tell" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 border border-black/20 bg-black/5">
                <div className="text-4xl md:text-5xl font-bold text-black" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  {stat.value}<span className="text-2xl">{stat.unit}</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-black/60 mt-2" style={{ fontFamily: monoFont }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-black/20 bg-black/5 p-8 mb-16"
          >
            <p className="text-xl md:text-2xl text-black/80 italic leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              "A people without the knowledge of their past history, origin and culture is like a tree without roots."
            </p>
            <div className="text-[10px] uppercase tracking-[0.15em] text-black/50" style={{ fontFamily: monoFont }}>
              — Marcus Garvey
            </div>
          </motion.div>

          {/* Bottom Row */}
          <div className="pt-6 border-t border-black/20 flex items-center justify-between text-black" style={{ fontFamily: monoFont }}>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                VIRTUAL PAST LIBERIA
              </span>
              <span className="h-px w-8 bg-black/30" />
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                Heritage Mission v1.0
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60 border border-black/30 px-3 py-1">
                Research Index
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                p. 03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Phone VR Device Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Device Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 blur-3xl opacity-50" />
                
                {/* Device Image */}
                <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800">
                  <img 
                    src="/images/phone-vr-headset.jpg" 
                    alt="Phone VR Headset - Virtual Past Liberia"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  
                  {/* Tech specs overlay */}
                  <div className="absolute top-4 left-4 text-[8px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                    <div>DEVICE · PHONE VR</div>
                    <div>MODEL · HMD-2024</div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 text-[8px] text-neutral-500 uppercase tracking-wider text-right" style={{ fontFamily: monoFont }}>
                    <div>COMPATIBLE</div>
                    <div>iOS · ANDROID</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-amber-600 text-black px-4 py-2 rounded-lg"
              >
                <div className="text-[10px] uppercase tracking-wider font-bold" style={{ fontFamily: monoFont }}>
                  Phone VR Ready
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-4" style={{ fontFamily: monoFont }}>
                [DEVICE] ACCESSIBLE VR
              </div>
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                PHONE VR
              </h2>
              <div className="h-px w-16 bg-amber-600 mb-6" />
              <p className="text-neutral-400 leading-relaxed mb-8">
                Experience Virtual Past Liberia on affordable phone-based VR headsets. 
                No expensive equipment needed — just your smartphone and a compatible headset. 
                We're bringing Liberia's heritage to everyone, everywhere.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Cost", value: "$15-50" },
                  { label: "Setup", value: "Instant" },
                  { label: "Platform", value: "WebXR" },
                  { label: "Access", value: "Global" },
                ].map((item, i) => (
                  <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-4">
                    <div className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1" style={{ fontFamily: monoFont }}>
                      {item.label}
                    </div>
                    <div className="text-lg font-bold text-amber-500" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compatibility */}
              <div className="border-t border-neutral-800 pt-6">
                <div className="text-[9px] uppercase tracking-wider text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                  Compatible With
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Google Cardboard", "Samsung Gear VR", "Daydream", "Any Phone HMD"].map((device) => (
                    <span 
                      key={device}
                      className="px-3 py-1.5 bg-neutral-900 border border-neutral-700 text-[10px] uppercase tracking-wider text-neutral-400"
                      style={{ fontFamily: monoFont }}
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  03
                </div>
              </ParallaxText>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: monoFont }}>
                WHY IT MATTERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                Impact
              </h2>
              
              {/* Impact Grid */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { id: "01", title: "National Digital Archive", desc: "Safeguard Liberia's centuries of culture, language, art, and resilience in digital form for future generations." },
                  { id: "02", title: "Education Reimagined", desc: "Students experience history as living knowledge, walking through ancient cities and exploring artifacts in real time." },
                  { id: "03", title: "Cultural Tourism", desc: "Tourists explore Liberia's beauty and traditions in VR before visiting physically, strengthening national identity." },
                  { id: "04", title: "Global Innovation", desc: "VPL puts Liberia at the center of Africa's digital revolution, merging art, culture, and cutting-edge technology." },
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-t border-border pt-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-[10px] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                        {item.id}
                      </div>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground/30" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  04
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: monoFont }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">CREDITS</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  Team
                </h2>
              </div>
            </div>

            <div>
              {/* Team Table */}
              <div className="border border-border bg-background">
                <div className="grid grid-cols-[60px_1fr_1fr_100px] gap-4 px-6 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                  <div>Index</div>
                  <div>Name</div>
                  <div>Role</div>
                  <div className="text-right">Link</div>
                </div>
                
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-[60px_1fr_1fr_100px] gap-4 px-6 py-5 border-b border-border/30 last:border-b-0 hover:bg-card/30 transition-colors items-center"
                  >
                    <div className="text-[10px] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                      [{String(index + 1).padStart(2, '0')}]
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-[10px] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                        {member.desc}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                    <div className="text-right">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                        style={{ fontFamily: monoFont }}
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 border border-border bg-background">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "The Ancestral Grid represents the fusion of ancestral wisdom and digital innovation, preserving Liberia's cultural heritage through immersive technology for generations to come."
                </p>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                  — Project Mission Statement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  05
                </div>
              </ParallaxText>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: monoFont }}>
                SUPPORT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                Funding
              </h2>
              
              {/* Status Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { platform: "Phone VR", status: "In Development", funding: "$0" },
                  { platform: "Desktop VR", status: "In Development", funding: "$0" },
                ].map((item, index) => (
                  <div key={item.platform} className="border border-border p-6 bg-card/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                        [{String(index + 1).padStart(2, '0')}]
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 px-2 py-1 border border-border/50" style={{ fontFamily: monoFont }}>
                        {item.status}
                      </div>
                    </div>
                    <h3 className="font-bold mb-4">{item.platform}</h3>
                    <div className="text-center py-4 border border-border bg-background">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50 mb-1" style={{ fontFamily: monoFont }}>
                        Current Funding
                      </div>
                      <div className="text-3xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>{item.funding}</div>
                      <div className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 mt-1" style={{ fontFamily: monoFont }}>
                        Seeking Sponsors
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div>
              <div 
                className="text-[80px] md:text-[100px] font-bold leading-[0.8] text-foreground/[0.06]"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                →
              </div>
            </div>
            <div>
              <ParallaxReveal direction="up">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  Support the<br />Future.
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  Virtual Past Liberia is seeking sponsors, investors, and cultural organizations to bring this transformative project to life. Your support enables preservation.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Link href="/contact?subject=Virtual Past Liberia Sponsorship">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>Become a Sponsor</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <span>Contact</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </ParallaxReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Meta Strip */}
      <section className="border-t border-border py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
            <div className="flex items-center gap-6">
              <span>VIRTUAL PAST LIBERIA</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>CAT NO · VPL-001</span>
            </div>
            <div className="flex items-center gap-6">
              <span>REV A</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>2025</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>p. 06 of 06</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
