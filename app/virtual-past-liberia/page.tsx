"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { ArrowRight, ArrowUpRight, ExternalLink, Play, ArrowDown } from "lucide-react"
import Link from "next/link"
import { ParallaxReveal, ParallaxText } from "@/components/parallax"

export default function VirtualPastLiberiaPage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)
  
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
            <div className="flex items-center justify-between h-12 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                    style={{ fontFamily: 'Mohican, sans-serif' }}
                  >
                    01
                  </div>
                </div>

                <div className="border-l-2 border-foreground/20 pl-6 space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    THE PROJECT
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'Mohican, sans-serif' }}
                  >
                    Virtual Past<br />Liberia
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A digital time bridge reviving Liberia's cultural heritage through VR and AI-powered storytelling.
                  </p>
                </div>

                <div className="pt-4 space-y-3" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/30 mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                    style={{ fontFamily: 'Mohican, sans-serif' }}
                  >
                    16
                  </div>
                </div>

                <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Explore Heritage</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact?subject=VPL Sponsorship">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Become Sponsor</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>

                <div className="pt-4" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <ArrowDown className="h-3 w-3" />
                <span>Scroll</span>
              </motion.div>

              <div className="hidden md:flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <span>VIRTUAL PAST LIBERIA</span>
                <span className="h-px w-6 bg-border/30" />
                <span>p. 01</span>
              </div>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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

      {/* The 16 Tribes Section */}
      <section id="tribes" className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            {/* Left - Number */}
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  16
                </div>
              </ParallaxText>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-end justify-between border-b border-border pb-4 mb-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    CULTURAL FOUNDATION
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>
                    The Tribes of Liberia
                  </h2>
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                    <div className="text-[8px] text-muted-foreground/40 mb-0.5" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.1em]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  02
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">ARCHITECTURE</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  The Ancestral Grid
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Architecture by Amanda Anderson — A flowing, web-like structure representing the connection between ancestral memory and digital intelligence.
                </p>
              </div>
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
                  className="group bg-background border border-border hover:border-foreground/30 transition-all overflow-hidden"
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
                      <div className="text-[9px] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                        [{floor.id}]
                      </div>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground/30 group-hover:text-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold mb-1">{floor.title}</h3>
                    <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground/60 mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                      {floor.subtitle}
                    </div>
                    <p className="text-sm text-muted-foreground">{floor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orange Accent Section - Heritage Style */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ff5a00" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left - Big Title */}
            <div className="text-black">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div 
                  className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-[0.85] opacity-30"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  01
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] -mt-8"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  the<br />heritage
                </h2>
              </motion.div>
            </div>

            {/* Right - Explore/Discover/Preserve */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-2 text-right"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Explore
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/40" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Discover
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/40" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Preserve
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-16 pt-6 border-t border-black/20 flex items-center justify-between text-black" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
            <div className="text-[10px] uppercase tracking-[0.15em] opacity-60">
              Digital Heritage Preservation
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                (Research) Index No. 001
              </span>
            </div>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  03
                </div>
              </ParallaxText>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                WHY IT MATTERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif' }}>
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
                      <div className="text-[10px] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  04
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">CREDITS</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Team
                </h2>
              </div>
            </div>

            <div>
              {/* Team Table */}
              <div className="border border-border bg-background">
                <div className="grid grid-cols-[60px_1fr_1fr_100px] gap-4 px-6 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                    <div className="text-[10px] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                      [{String(index + 1).padStart(2, '0')}]
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-[10px] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                        style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
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
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  05
                </div>
              </ParallaxText>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                SUPPORT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif' }}>
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
                      <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                        [{String(index + 1).padStart(2, '0')}]
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 px-2 py-1 border border-border/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                        {item.status}
                      </div>
                    </div>
                    <h3 className="font-bold mb-4">{item.platform}</h3>
                    <div className="text-center py-4 border border-border bg-background">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50 mb-1" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                        Current Funding
                      </div>
                      <div className="text-3xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>{item.funding}</div>
                      <div className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 mt-1" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
                style={{ fontFamily: 'Mohican, sans-serif' }}
              >
                →
              </div>
            </div>
            <div>
              <ParallaxReveal direction="up">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Mohican, sans-serif' }}>
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
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Become a Sponsor</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
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
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
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
