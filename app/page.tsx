"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ParallaxReveal, ParallaxImage, ParallaxText, ParallaxFloat, ParallaxStagger, ParallaxStaggerItem } from "@/components/parallax";
 

export default function Home() {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* Flow Diagram: Company -> System -> Product */}
      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ParallaxReveal direction="up">
            <div className="mb-6 sm:mb-8 border-b border-border/70 pb-3 sm:pb-4 flex items-end justify-between">
              <div className="flex items-center gap-3 sm:gap-6">
                <ParallaxText speed={0.2} direction="up">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
                </ParallaxText>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.18em] mb-1">Overview</div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">System Flow</h2>
                </div>
              </div>
              <div className="hidden md:block text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
            </div>
          </ParallaxReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 items-start gap-4 sm:gap-6">
            {/* Node 1 */}
            <ParallaxReveal direction="left" delay={0}>
              <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Company</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
                </div>
                <div className="h-px w-full bg-border mb-4" />
                <div className="text-xl font-bold tracking-[0.15em]" style={{ fontFamily: 'Mohican, sans-serif' }}>HUIX-2099</div>
                <p className="text-sm text-muted-foreground mt-2">The studio and engineering company delivering advanced XR, AI and 3D software.</p>
              </div>
            </ParallaxReveal>

            {/* Center Column (Desktop): Wire + Map + Counties */}
            <div className="hidden md:flex flex-col items-center justify-center gap-2 -mt-6">
              <motion.svg
                width="120"
                height="8"
                viewBox="0 0 120 8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-foreground/50"
              >
                <motion.line
                  x1="0"
                  y1="4"
                  x2="110"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                {/* Arrowhead */}
                <motion.polyline
                  points="110,1 120,4 110,7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.svg>
              <div className="w-full flex justify-center py-2">
                <video
                  src="/ready.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-80 h-auto rounded-md"
                />
              </div>
            </div>

            {/* Node 2 */}
            <ParallaxReveal direction="up" delay={0.1}>
              <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">System</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
                </div>
                <div className="h-px w-full bg-border mb-2" />
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">Funding · Concept Stage · Experimental</div>
                <div className="text-xl font-bold tracking-[0.15em]" style={{ fontFamily: 'Mohican, sans-serif' }}>HUIX-HORIZEN</div>
                <p className="text-sm text-muted-foreground mt-2">Our modular platform architecture and tools powering immersive products.</p>
              </div>
            </ParallaxReveal>

            {/* Connector + Map + Counties (Mobile) */}
            <div className="md:hidden flex flex-col items-center justify-center gap-2 -mt-4">
              <motion.svg
                width="8"
                height="36"
                viewBox="0 0 8 36"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-foreground/50"
              >
                <motion.line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <motion.polyline
                  points="1,32 4,36 7,32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.svg>
              <div className="w-full flex justify-center py-2">
                <video
                  src="/ready.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-[14rem] h-auto rounded-md"
                />
              </div>
            </div>

            {/* Node 3 */}
            <ParallaxReveal direction="right" delay={0.2} className="md:col-start-3">
              <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Product</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>03</div>
                </div>
                <div className="h-px w-full bg-border mb-2" />
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">Concept · Development Stage · 0 Funding</div>
                <div className="text-xl font-bold">Virtual Past Liberia</div>
                <p className="text-sm text-muted-foreground mt-2">A flagship immersive heritage experience built on HUIX-HORIZEN.</p>
              </div>
            </ParallaxReveal>
          </div>
        </div>
      </section>

      {/* Series 02: Mission & Values (Home) */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <ParallaxReveal direction="up">
            <div className="mb-6 sm:mb-8 border-b border-border/70 pb-3 sm:pb-4 flex items-end justify-between">
              <div className="flex items-center gap-3 sm:gap-6">
                <ParallaxText speed={0.2} direction="up">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
                </ParallaxText>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.18em] mb-1">Mission & Values</div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-[0.08em] sm:tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>MISSION & VALUES</h2>
                </div>
              </div>
              <div className="hidden md:block text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
            </div>
          </ParallaxReveal>

          <ParallaxStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'INNOVATION', desc: "Constantly challenging the boundaries of what is possible in technology" },
              { title: 'CREATIVITY', desc: 'Where art and science coexist in perfect harmony for extraordinary solutions' },
              { title: 'INTEGRITY', desc: 'Operating with honesty, responsibility, and transparency always' },
              { title: 'COLLABORATION', desc: 'True innovation happens through collective intelligence and teamwork' },
              { title: 'EXCELLENCE', desc: 'Continuous improvement and technical mastery in every project' },
              { title: 'EMPOWERMENT', desc: 'Inspiring the next generation of African innovators and leaders' },
            ].map((item, index) => (
              <ParallaxStaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      Value
                    </div>
                    <div 
                      className="text-sm text-muted-foreground tabular-nums"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="h-px w-full bg-border mb-4" />
                  <h3 
                    className="text-lg font-bold text-foreground mb-2 uppercase tracking-[0.06em]"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-muted-foreground leading-relaxed text-sm"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              </ParallaxStaggerItem>
            ))}
          </ParallaxStagger>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left: Futuristic Number */}
            <ParallaxText speed={0.4} direction="up">
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10">
                01
              </div>
            </ParallaxText>

            {/* Center: Featured Image with Side Text */}
            <ParallaxReveal direction="up" delay={0.05}>
              <div className="flex items-center gap-3 lg:gap-4 justify-center">
                {/* Left side text - vertical */}
                <div 
                  className="flex flex-col items-center gap-1.5 lg:gap-2 text-[7px] lg:text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  <span className="hidden sm:inline">XR · VR · AR</span>
                  <span className="sm:hidden">XR</span>
                  <span className="h-6 lg:h-8 w-px bg-border/50" />
                  <span>2024</span>
                </div>

                {/* Image Container */}
                <div className="relative">
                  {/* Top label - mobile */}
                  <div 
                    className="mb-2 flex items-center gap-2 text-[8px] uppercase tracking-[0.15em] text-muted-foreground/70 lg:hidden"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span className="h-px w-4 bg-foreground/20" />
                    <span>HUIX-2099</span>
                    <span className="h-px flex-1 bg-foreground/20" />
                  </div>

                  <div className="relative rounded-lg overflow-hidden border border-border bg-card w-[180px] sm:w-[200px] lg:max-w-[240px]">
                    <img 
                      src="/images/22.jpg" 
                      alt="HUIX-2099 XR Demo" 
                      className="w-full h-auto object-cover aspect-[3/4] max-h-[220px] sm:max-h-[250px] lg:max-h-[280px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8">
                      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-foreground/30" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-8 h-8">
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-foreground/30" />
                    </div>

                    {/* Badge */}
                    <div 
                      className="absolute bottom-2 left-2 text-[7px] lg:text-[8px] uppercase tracking-[0.15em] text-white/90 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      [01] · FIELD
                    </div>

                    {/* Tech badge */}
                    <div 
                      className="absolute top-2 left-2 text-[6px] lg:text-[7px] uppercase tracking-[0.1em] text-white/70 bg-black/40 backdrop-blur-sm px-1 py-0.5 rounded"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      META QUEST 3
                    </div>
                  </div>

                  {/* Caption below */}
                  <div 
                    className="mt-2 flex items-center justify-between text-[7px] lg:text-[8px] uppercase tracking-[0.12em] text-muted-foreground/50"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span>FIG. 01</span>
                    <span className="h-px flex-1 mx-2 bg-border/30" />
                    <span>DEMO</span>
                  </div>

                  {/* Bottom specs - mobile */}
                  <div 
                    className="mt-1 flex items-center justify-center gap-3 text-[6px] uppercase tracking-[0.1em] text-muted-foreground/40 lg:hidden"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span>VR</span>
                    <span>·</span>
                    <span>AR</span>
                    <span>·</span>
                    <span>XR</span>
                  </div>
                </div>

                {/* Right side text - vertical */}
                <div 
                  className="flex flex-col items-center gap-1.5 lg:gap-2 text-[7px] lg:text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', writingMode: 'vertical-rl' }}
                >
                  <span className="hidden sm:inline">LIBERIA</span>
                  <span className="sm:hidden">LBR</span>
                  <span className="h-6 lg:h-8 w-px bg-border/50" />
                  <span>HUIX</span>
                </div>
              </div>
            </ParallaxReveal>
            
            {/* Right: Title and Description */}
            <ParallaxReveal direction="right" delay={0.1}>
              <div className="relative">
                <div className="relative inline-block">
                  <h2 
                    className="text-4xl md:text-5xl font-bold text-foreground mb-6 cursor-pointer uppercase tracking-[0.1em]" 
                    style={{ fontFamily: 'Mohican, sans-serif' }}
                  >
                    ABOUT HUIX-2099
                  </h2>
                  
                  {/* Hover Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-full mt-2 text-sm text-muted-foreground whitespace-nowrap pointer-events-none"
                  >
                    You should try click the about us button to learn more
                  </motion.div>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
                  Founded in 2024, HUIX-2099 is a Liberia-based next-generation technology company pioneering the future of
                  software development, 3D prototyping, and immersive digital engineering. We operate at the intersection of
                  imagination and technology — where creative vision evolves into real-world innovation.
                </p>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </div>
            </ParallaxReveal>
          </div>

          {/* Services Grid - Document style with numbering */}
          <ParallaxStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Virtual Reality", desc: "Immersive digital environments for exploration and training" },
              { title: "AI & Machine Learning", desc: "Intelligent systems that learn and adapt" },
              { title: "App Development", desc: "Powerful mobile and desktop applications" },
              { title: "Web Development", desc: "Modern web applications with cutting-edge technologies" },
              { title: "3D Modeling", desc: "Stunning 3D models and visualizations" },
              { title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
            ].map((service, index) => (
              <ParallaxStaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all h-full"
                >
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      Service
                    </div>
                    <div 
                      className="text-sm text-muted-foreground tabular-nums"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="h-px w-full bg-border mb-4" />
                  <h3 
                    className="text-lg font-bold text-foreground mb-2"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-muted-foreground leading-relaxed text-sm"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    {service.desc}
                  </p>
                  <div 
                    className="mt-4 text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    Read more →
                  </div>
                </motion.div>
              </ParallaxStaggerItem>
            ))}
          </ParallaxStagger>
        </div>
      </section>

      {/* Innovation Section - Editorial Document Style */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Document Style */}
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
            <ParallaxText speed={0.3} direction="up">
              <div className="flex items-baseline gap-3">
                <span 
                  className="text-[120px] lg:text-[180px] font-bold leading-none text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  0
                </span>
                <span 
                  className="text-[120px] lg:text-[180px] font-bold leading-none text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  3
                </span>
              </div>
            </ParallaxText>
            <div className="flex flex-col justify-end pb-4">
              <div className="border-b border-border pb-6 mb-6">
                <div 
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  SECTION · 03 — INNOVATION
                </div>
                <h2 
                  className="text-4xl lg:text-5xl font-bold uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  INNOVATION<br />IN MOTION
                </h2>
              </div>
              <p 
                className="text-muted-foreground max-w-xl leading-relaxed"
                style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Pushing the boundaries of digital experiences through cutting-edge technology and creative vision. 
                We transform ideas into immersive realities.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            {/* Left - Image with Document Frame */}
            <ParallaxReveal direction="left">
              <div className="relative">
                <div className="border border-border bg-card p-3">
                  <img
                    src="/other-images/download (38).jpg"
                    alt="Innovation in Motion"
                    className="w-full h-auto"
                  />
                  <div 
                    className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span>FIG. 03.1</span>
                    <span>INNOVATION · VISUAL</span>
                  </div>
                </div>
              </div>
            </ParallaxReveal>
            
            {/* Right - Principles Index */}
            <div>
              <div 
                className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 pb-4 border-b border-border mb-6"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <span>PRINCIPLES INDEX</span>
                <span>3 ITEMS</span>
              </div>
              
              <div className="space-y-0">
                {[
                  { title: "CREATIVE VISION", desc: "Transforming bold ideas into digital masterpieces through innovative design thinking" },
                  { title: "TECHNICAL EXCELLENCE", desc: "Advanced engineering meets artistic innovation for unprecedented results" },
                  { title: "FUTURE FORWARD", desc: "Pioneering tomorrow's digital experiences with today's cutting-edge technology" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-[60px_1fr] gap-6 py-6 border-b border-border/50 hover:bg-card/30 transition-colors group"
                  >
                    <div 
                      className="text-3xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      0{index + 1}
                    </div>
                    <div>
                      <h3 
                        className="text-base font-bold mb-2 uppercase tracking-[0.08em]"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Meta */}
              <div 
                className="mt-8 pt-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <span>REF · 03</span>
                <span className="h-px flex-1 bg-border/50" />
                <span>p. 03 of 06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototypes Preview Section - Editorial Document Style */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-[1fr_200px] gap-8 mb-16">
            <div>
              <div 
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                SECTION · 04 — PROTOTYPES
              </div>
              <h2 
                className="text-4xl lg:text-6xl font-bold mb-6 uppercase tracking-[0.1em]"
                style={{ fontFamily: 'Mohican, sans-serif' }}
              >
                OUR<br />PROTOTYPES
              </h2>
              <div className="h-px w-32 bg-foreground/20 mb-6" />
            </div>
            <ParallaxText speed={0.3} direction="up">
              <div className="flex items-baseline justify-end gap-3">
                <span 
                  className="text-[120px] lg:text-[180px] font-bold leading-none text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  0
                </span>
                <span 
                  className="text-[120px] lg:text-[180px] font-bold leading-none text-foreground/[0.06]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  4
                </span>
              </div>
            </ParallaxText>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
            {/* Left - Image */}
            <ParallaxReveal direction="up">
              <div className="relative">
                <div className="border border-border bg-background">
                  <img
                    src="/images/Generated%20Image%20November%2018,%202025%20-%202_07AM%20(1).png"
                    alt="Prototypes Visual"
                    className="w-full h-auto"
                  />
                </div>
                <div 
                  className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  <span>FIG. 04.1 — PROTOTYPE SHOWCASE</span>
                  <span>2024</span>
                </div>
              </div>
            </ParallaxReveal>
            
            {/* Right - Description + CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Explore our innovative prototypes showcasing cutting-edge technology and creative solutions. 
                  Discover how we push boundaries with immersive digital experiences, advanced 3D programming, 
                  and virtual heritage reconstructions that bring history to life.
                </p>

                {/* Specs Table */}
                <div className="border border-border bg-background mb-8">
                  <div 
                    className="grid grid-cols-2 gap-4 px-4 py-2 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.15em] text-muted-foreground"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span>SPECIFICATION</span>
                    <span>VALUE</span>
                  </div>
                  {[
                    { spec: "Active Projects", value: "3" },
                    { spec: "Technology", value: "VR · AR · 3D" },
                    { spec: "Status", value: "In Development" },
                    { spec: "Platform", value: "Cross-platform" },
                  ].map((item, idx) => (
                    <div 
                      key={item.spec}
                      className="grid grid-cols-2 gap-4 px-4 py-3 border-b border-border/30 last:border-b-0 text-sm"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span className="text-muted-foreground text-[10px] uppercase tracking-[0.1em]">{item.spec}</span>
                      <span className="text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <Link href="/prototypes">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors group"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span>View All Prototypes</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </Link>
                <div 
                  className="mt-6 pt-4 border-t border-border/50 flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  <span>CAT NO · PRO-001</span>
                  <span className="h-px flex-1 bg-border/50" />
                  <span>p. 04 of 06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Editorial Document Style */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left - Large Number */}
            <ParallaxText speed={0.3} direction="up">
              <div className="flex items-baseline gap-4">
                <span 
                  className="text-[150px] lg:text-[220px] font-bold leading-none text-foreground/[0.04]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  0
                </span>
                <span 
                  className="text-[150px] lg:text-[220px] font-bold leading-none text-foreground/[0.04]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  5
                </span>
              </div>
            </ParallaxText>

            {/* Right - Content */}
            <ParallaxReveal direction="right">
              <div>
                <div 
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  SECTION · 05 — CONTACT
                </div>
                <h2 
                  className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  READY TO BUILD<br />THE FUTURE?
                </h2>
                <div className="h-px w-24 bg-foreground/20 mb-6" />
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  Join us in creating next-generation digital experiences that transform how people interact with
                  technology. Let's pioneer the future together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 px-6 py-4 bg-foreground text-background text-sm uppercase tracking-[0.15em]"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Get Started</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 px-6 py-4 border border-border text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                </div>

                {/* Bottom Meta */}
                <div 
                  className="mt-10 pt-4 border-t border-border/50 flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  <span>HUIX-2099</span>
                  <span className="h-px flex-1 bg-border/50" />
                  <span>MONROVIA · LIBERIA</span>
                  <span className="h-px w-4 bg-border/50" />
                  <span>2024</span>
                </div>
              </div>
            </ParallaxReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
