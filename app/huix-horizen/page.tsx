"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { ParallaxReveal, ParallaxText } from "@/components/parallax"
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react"
import Link from "next/link"

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
    { id: "01", title: "Real-time Rendering", desc: "60fps visualization with dynamic lighting", meta: "RTX-ON" },
    { id: "02", title: "Multi-layer Design", desc: "Stack architectural layers for views", meta: "LAYER-∞" },
    { id: "03", title: "Collaborative VR", desc: "Multiple users in shared spaces", meta: "SYNC-MU" },
    { id: "04", title: "Edge Computing", desc: "Low-latency instant feedback", meta: "EDGE-01" },
    { id: "05", title: "Cross-platform", desc: "Quest, Vive, PSVR, mobile AR", meta: "XR-ALL" },
    { id: "06", title: "Instant Deploy", desc: "One-click publishing", meta: "DEPLOY" },
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
                <span>HUIX-HORIZEN</span>
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
                    THE PLATFORM
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'Mohican, sans-serif' }}
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
                    HUIX-HORIZEN
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
                <span>HUIX-HORIZEN</span>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
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
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Features
                </h2>
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                6 items
              </div>
            </div>
          </div>

          {/* Features Index */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div />
            <div className="space-y-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[50px_1fr_100px] gap-6 py-5 border-b border-border/50 hover:bg-card/30 transition-colors group"
                >
                  <div className="text-[11px] text-muted-foreground/40" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    [{feature.id}]
                  </div>
                  <div>
                    <div className="font-medium mb-1">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                      {feature.meta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orange Accent Section - "Before During After" Style */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ff5a00" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left - Big Number + Title */}
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
                  the<br />session
                </h2>
              </motion.div>
            </div>

            {/* Right - Before/During/After */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-2 text-right"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Before
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/40" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  During
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/40" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  After
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-16 pt-6 border-t border-black/20 flex items-center justify-between text-black" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
            <div className="text-[10px] uppercase tracking-[0.15em] opacity-60">
              Visualization Guidelines
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60 border border-black/30 px-3 py-1">
                Table of contents
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                9
              </span>
            </div>
          </div>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  03
                </div>
              </ParallaxText>
              <div className="mt-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">INFRASTRUCTURE</div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>
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
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  04
                </div>
              </ParallaxText>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                APPLICATIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Mohican, sans-serif' }}>
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

      {/* CTA Section - Minimal */}
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
              <span>p. 04 of 04</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
