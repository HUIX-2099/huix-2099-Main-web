"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { ParallaxReveal, ParallaxText } from "@/components/parallax"
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HUIXHorizenPage() {
  const { resolvedTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const features = [
    { id: "01", title: "Real-time Rendering", desc: "60fps architectural walkthroughs with physically based lighting so teams and clients see design intent exactly as modeled.", meta: "RTX-ON" },
    { id: "02", title: "Multi-layer Design", desc: "Toggle structure, MEP, interiors, and landscape as independent layers to review coordination without exporting new sets.", meta: "LAYER-∞" },
    { id: "03", title: "Collaborative VR", desc: "Architects, consultants, and clients join the same room—voice, pointers, markups, and saved viewpoints stay in sync.", meta: "SYNC-MU" },
    { id: "04", title: "Edge Computing", desc: "Adaptive streaming keeps fidelity high while phones and headsets stay responsive during design reviews on-site.", meta: "EDGE-01" },
    { id: "05", title: "Cross-platform", desc: "Quest, Vive, PSVR, desktop, tablet, and mobile WebXR so every client can experience the project on the device they already have.", meta: "XR-ALL" },
    { id: "06", title: "Instant Deploy", desc: "Publish a build from HUIX-HORIZEN with one click—share a link, pin a QR, or hand off to field teams for live feedback.", meta: "DEPLOY" },
  ]

  const specs = [
    { label: "FORMAT", value: "AR / VR / XR" },
    { label: "ENGINE", value: "Unity 2023.2 LTS" },
    { label: "RENDER", value: "Real-time · 60fps" },
    { label: "SYNC", value: "Multi-user WebSocket" },
    { label: "PLATFORMS", value: "Quest · Vive · PSVR · iOS · Android" },
    { label: "STATUS", value: "Concept Stage" },
  ]

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
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
                ? "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg"
                : "/images/h-20-20u-20-20i-20-20x-20-20horizen-20white-20version.jpg"
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
                <span className="tracking-[0.3em]">HUIX-HORIZEN</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span className="hidden sm:inline">AR/VR PLATFORM</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline">EST. 2024</span>
                <span className="hidden sm:inline-block h-px w-6 bg-border/50" />
                <span>INDEX · 01</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-24">
              
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
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    THE PLATFORM
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}
                  >
                    HUIX-<br />HORIZEN
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Immersive AR/VR visualization for architects, designers, and urban planners.
                  </p>
                </div>

                <div className="pt-4 space-y-3" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>[01]</span>
                    <span className="h-px flex-1 bg-border/30" />
                    <span>VIS</span>
                  </div>
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
                    02
                  </div>
                </div>

                <div className="border-r-2 border-foreground/20 pr-6 text-right space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    CAPABILITIES
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Real-time 60fps Rendering</div>
                    <div>Multi-user Collaboration</div>
                    <div>Cross-platform XR</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-end gap-4">
                  <Link href="#details">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Explore Features</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact?subject=HUIX-HORIZEN">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Request Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>

                <div className="pt-4" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <div className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    <span>XR</span>
                    <span className="h-px w-12 bg-border/30" />
                    <span>[02]</span>
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
                <span>H UIX-HORIZEN</span>
                <span className="h-px w-6 bg-border/30" />
                <span>p. 01</span>
              </div>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <span className="hidden sm:inline">AR · VR · XR</span>
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

      {/* Features Section - Document Index Style */}
      <section id="details" className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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
            </div>
            <div className="flex items-end justify-between border-b border-border pb-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  CAPABILITIES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  Features
                </h2>
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                6 items
              </div>
            </div>
          </div>

          {/* Features Index */}
          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                Document · Capabilities
              </div>
              <div className="border-l-2 border-foreground/20 pl-5 space-y-2">
                <div className="text-[32px] font-bold leading-none text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.3em' }}>
                  HUIX · HORIZEN
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  How architects and urban designers move from model to client-ready XR. HUIX-HORIZEN keeps the design source alive while pushing to VR headsets and mobile WebXR so every stakeholder can step inside the work without installs.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <span>02 · Capabilities</span>
                <span>Features · 6 items</span>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  HUIX-HORIZEN is built for architects who need to walk clients through spatial ideas fast. Start with your design file, layer structure and interiors, and deploy an interactive scene that plays on a headset in the studio or a phone in the field. Clients tap a link or scan a QR to join—no installs, no friction—while your team controls views, layers, and markups in real time.
                </p>
                <p>
                  The platform keeps rendering quality high through adaptive streaming and edge compute, so every perspective, sun study, and material swap lands with intent. Collaboration is native: invite consultants, capture notes, and keep a running trail of decisions anchored to the model. When you are ready to share, publish once and reuse across reviews, pitches, and site walks.
                </p>
              </div>

              <div className="border border-border/60 bg-card/40 divide-y divide-border/60">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-[70px_1fr_140px] gap-6 px-5 py-4 hover:bg-background/60 transition-colors"
                  >
                    <div className="text-[11px] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                      [{feature.id}]
                    </div>
                    <div className="space-y-1">
                      <div className="text-base font-semibold tracking-tight">{feature.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</div>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 border border-border px-3 py-1 rounded-full" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                        {feature.meta}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardholder Design Section */}
      <section className="relative py-8 bg-[#202020]">
        <div className="flex items-center justify-center">
          {/* Cardholder Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-[420px] h-[340px] group cursor-pointer"
          >
            {/* Hidden Info - Revealed on hover */}
            <div className="absolute inset-x-4 top-0 bottom-8 rounded-xl bg-neutral-950 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                HUIX-HORIZEN · System Info
              </div>
              <div className="space-y-2 text-[11px] text-neutral-400" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="flex justify-between"><span>Platform</span><span className="text-neutral-300">XR Visualization</span></div>
                <div className="flex justify-between"><span>Version</span><span className="text-neutral-300">2.0.99</span></div>
                <div className="flex justify-between"><span>Render Engine</span><span className="text-neutral-300">WebGL 2.0</span></div>
                <div className="flex justify-between"><span>Max FPS</span><span className="text-neutral-300">90Hz</span></div>
                <div className="flex justify-between"><span>Spatial Audio</span><span className="text-[#ff5a00]">Enabled</span></div>
                <div className="flex justify-between"><span>Hand Tracking</span><span className="text-[#ff5a00]">Active</span></div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 pt-3 border-t border-neutral-800">
                <div className="text-[9px] text-neutral-600" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  Licensed to HUIX-2099 TECH · Monrovia, Liberia
                </div>
              </div>
            </div>

            {/* Main Wallet Body */}
            <motion.div 
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:-translate-y-4"
              style={{ 
                backgroundColor: '#1a1a1a',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
              }}
            />

            {/* Gray Card - Peeking from top */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-8 left-4 right-4 h-28 rounded-lg transition-transform duration-300 group-hover:-translate-y-8"
              style={{ backgroundColor: '#2a2a2a' }}
            >
              <div className="absolute top-3 left-4 text-[9px] text-neutral-500" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div>SN-HRZ-2099</div>
                <div>REV-A3</div>
                <div className="mt-1">LIC 53698-LBR</div>
              </div>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] text-neutral-500" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                ○ XR READY
              </div>
              <div className="absolute top-2 right-4 text-right" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="text-2xl font-bold text-neutral-400 tracking-wider">2099</div>
                <div className="text-2xl font-bold text-neutral-500 tracking-wide">HORIZEN</div>
              </div>
            </motion.div>

            {/* Orange Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-4 left-4 right-4 bottom-8 rounded-lg transition-transform duration-300 group-hover:-translate-y-6"
              style={{ backgroundColor: '#ff5a00' }}
            >
              {/* Semi-circular cutout */}
              <div 
                className="absolute -bottom-px left-1/2 -translate-x-1/2 w-28 h-14 rounded-t-full"
                style={{ backgroundColor: '#1a1a1a' }}
              />
              
              <div className="relative p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-black/40" />
                  <span className="text-[9px] text-black/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    © HUIX 2025
                  </span>
                </div>
                <div className="text-5xl font-bold text-black leading-none tracking-[0.15em]" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  HUIX
                </div>
                <div className="text-4xl font-bold text-black leading-none tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  HORIZEN
                </div>
                <div className="absolute top-5 right-5 text-right text-[9px] text-black/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <div>VR · AR · XR</div>
                  <div>ARCH-VIZ</div>
                  <div className="mt-1">v2.0</div>
                </div>
              </div>
            </motion.div>

            {/* Orange Tab */}
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 rounded-r-sm transition-transform duration-300 group-hover:-translate-y-6" 
              style={{ backgroundColor: '#ff5a00' }} 
            />

            {/* Keychain (hide on small to avoid overflow) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block absolute -right-16 top-1/3 transition-transform duration-300 group-hover:-translate-y-4"
            >
              <div className="w-4 h-8 bg-neutral-700 rounded-sm" />
              <div className="w-3 h-16 bg-neutral-800 rounded-sm mx-auto" />
              <div className="w-8 h-8 border-4 border-neutral-600 rounded-full mx-auto -mt-1" />
            </motion.div>

            {/* Hover hint */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-neutral-600 opacity-60 group-hover:opacity-0 transition-opacity" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              Hover to reveal
            </div>
          </motion.div>
        </div>
      </section>

      {/* HUIX-HORIZEN OS Section - Full Width Visual */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* OS Visual - Full Width */}
        <div className="relative w-full max-h-[560px] sm:max-h-[640px] overflow-hidden">
          <img 
            src="/horzien-images/VRi.jpg" 
            alt="HUIX-HORIZEN OS System" 
            className="w-full h-full object-contain md:object-cover"
          />
          
          {/* Overlay gradient for text readability at edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-transparent to-[#0d0d0d]/60 pointer-events-none" />
          
          {/* Top-left corner info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-6 left-6 lg:top-10 lg:left-10"
          >
            <div className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              SYSTEM · IN DEVELOPMENT
            </div>
            <div className="text-lg lg:text-2xl font-bold text-white/90" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}>
              HUIX-HORIZEN OS
            </div>
          </motion.div>

          {/* Bottom-left description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 max-w-md"
          >
            <div className="text-[9px] lg:text-[11px] text-white/50 leading-relaxed mb-3" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              Phone-based immersive reality OS layer. Stereo rendering, 3DOF tracking, gaze interaction — designed for architectural visualization without expensive headsets.
            </div>
            <div className="flex items-center gap-3 text-[8px] lg:text-[9px] uppercase tracking-[0.15em] text-white/30" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              <span>R&D</span>
              <span className="h-px w-4 bg-white/20" />
              <span>UNITY XR</span>
              <span className="h-px w-4 bg-white/20" />
              <span>OPENXR</span>
            </div>
          </motion.div>

          {/* Right side specs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-right hidden sm:block"
          >
            <div className="space-y-1 text-[8px] lg:text-[9px] uppercase tracking-[0.12em] text-white/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              <div>STEREO · DUAL CAM</div>
              <div>IPD · ADJUSTABLE</div>
              <div>FOV · 60-70°</div>
              <div className="text-[#ff5a00]/80">STATUS · PROTOTYPE</div>
            </div>
          </motion.div>

          {/* Bottom-right version */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10"
          >
            <div className="flex items-center gap-2 text-[8px] lg:text-[9px] uppercase tracking-[0.15em] text-white/30" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              <span>HUIX-2099</span>
              <span className="h-3 w-px bg-white/20" />
              <span>v0.5</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section - Document Table Style */}
      <section className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            {/* Left - Number */}
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  03
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">INFRASTRUCTURE</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  Tech Stack
                </h2>
              </div>
            </div>

            {/* Right - Table */}
            <div>
              <div className="border border-border">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <div>Index</div>
                  <div>Component</div>
                  <div>Version</div>
                  <div className="text-right">Type</div>
                </div>
                
                {/* Table Rows */}
                {[
                  { name: "Unity Engine", version: "2023.2 LTS", type: "CORE" },
                  { name: "ARKit / ARCore", version: "v6.0", type: "AR" },
                  { name: "OpenXR Runtime", version: "1.0.28", type: "VR" },
                  { name: "WebSocket Sync", version: "v2.1", type: "NET" },
                  { name: "Cloud Render", version: "HUIX-CR", type: "SVC" },
                  { name: "Asset Pipeline", version: "v3.0", type: "BUILD" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/30 last:border-b-0 hover:bg-card/30 transition-colors"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <div className="text-[10px] text-muted-foreground/40">[{String(index + 1).padStart(2, '0')}]</div>
                    <div className="text-sm">{tech.name}</div>
                    <div className="text-[11px] text-muted-foreground">{tech.version}</div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50">{tech.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Multi-Column Editorial */}
      <section className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16 mb-16">
            <div>
              <ParallaxText speed={0.15} direction="up">
                <div 
                  className="text-[140px] md:text-[180px] font-bold leading-[0.8] text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  04
                </div>
              </ParallaxText>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                APPLICATIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                Use Cases
              </h2>
              
              {/* Multi-column Content */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { id: "01", title: "Architecture", desc: "Walk through buildings before they exist. Present to clients in immersive 3D space. Review designs at true scale." },
                  { id: "02", title: "Urban Planning", desc: "Visualize city developments. Simulate traffic, sunlight, and crowd flow. Engage communities in planning." },
                  { id: "03", title: "Real Estate", desc: "Virtual property tours that convert. Remote viewings, global reach. Showcase unbuilt developments." },
                  { id: "04", title: "Heritage", desc: "Reconstruct historical sites. Preserve culture through digital twins. Educational experiences." },
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

      {/* Visual Reference Gallery - Creative Bento Layout */}
      <section className="py-20 px-4 lg:px-8 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-16 mb-12">
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
            <div className="flex items-end justify-between border-b border-border pb-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  VISUAL REFERENCE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                  Design Library
                </h2>
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                7 references
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[180px]">
            {/* Large featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/Gemini_Generated_Image_klg7c0klg7c0klg7.png" 
                alt="Architectural visualization" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[8px] uppercase tracking-[0.15em] text-foreground/60 mb-1" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  [01] · CONCEPT
                </div>
                <div className="text-sm font-semibold text-foreground">XR Environment</div>
              </div>
              <div className="absolute top-3 right-3 w-6 h-6 border border-foreground/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-foreground/40 rounded-full" />
              </div>
            </motion.div>

            {/* Floor plan tall */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="col-span-1 row-span-2 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/Floor%20plan.jpg" 
                alt="Floor plan" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[7px] uppercase tracking-[0.12em] text-foreground/70 bg-background/50 backdrop-blur-sm px-1.5 py-0.5 rounded" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                [02] PLAN
              </div>
            </motion.div>

            {/* 3D Render */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1 row-span-1 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/I%20will%20do%20architectural%20floor%20plans%2C%203d%20model%20and%20renderings.jpg" 
                alt="3D model rendering" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.1em] text-foreground/70" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                [03]
              </div>
            </motion.div>

            {/* Villa wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-1 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/_Villa%20%20Vue%20en%20plan%20c%C3%B4t%C3%A9_.jpg" 
                alt="Villa plan view" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="text-[6px] uppercase tracking-[0.1em] text-foreground/70 bg-background/40 backdrop-blur-sm px-1.5 py-0.5 rounded" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  [04] VILLA
                </span>
                <span className="text-[6px] text-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  ARCH
                </span>
              </div>
            </motion.div>

            {/* Interior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-1 row-span-1 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/Interior%20design%20student%20%F0%9F%91%B7%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%E2%9C%A8.jpg" 
                alt="Interior design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.1em] text-foreground/70" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                [05]
              </div>
            </motion.div>

            {/* Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="col-span-1 row-span-1 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/b860a6a6db362df7737a3847d66712ad.jpg" 
                alt="Architecture reference" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.1em] text-foreground/70" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                [06]
              </div>
            </motion.div>

            {/* Download wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 row-span-1 relative rounded-lg overflow-hidden border border-border group"
            >
              <img 
                src="/horzien-images/download%20(61).jpg" 
                alt="Design reference" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.1em] text-foreground/70 bg-background/40 backdrop-blur-sm px-1.5 py-0.5 rounded" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                [07] REF
              </div>
            </motion.div>
          </div>

          {/* Bottom Caption */}
          <div className="mt-6 flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
            <div className="flex items-center gap-3">
              <span>PLATES · 01–07</span>
              <span className="h-px w-8 bg-border/50" />
              <span>ARCH-VIZ REFERENCES</span>
            </div>
            <div className="flex items-center gap-3">
              <span>HUIX-HORIZEN</span>
              <span className="h-px w-4 bg-border/50" />
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
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
                  Hello.
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  Ready to visualize your next project in immersive AR/VR? Get in touch to discuss how HUIX-HORIZEN can transform your workflow.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Link href="/contact?subject=HUIX-HORIZEN Demo">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Request Demo</span>
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
              <span>HUIX-HORIZEN</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>CAT NO · HRZ-001</span>
            </div>
            <div className="flex items-center gap-6">
              <span>REV A</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>2024</span>
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
