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

          {/* Services Replacement - Show Explore */}
          <ParallaxReveal direction="up" delay={0.2}>
            <div className="mt-12 w-full flex flex-col items-center justify-center p-12 sm:p-20 rounded-[32px] bg-card/50 border border-border/50 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
              
              <div 
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono"
              >
                SERVICES · CAPABILITIES
              </div>
              
              <h3 
                className="text-3xl sm:text-4xl font-bold text-foreground mb-8 uppercase tracking-[0.1em]"
                style={{ fontFamily: 'Mohican, sans-serif' }}
              >
                Discover Our Capabilities
              </h3>
              
              <Link href="/showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-foreground text-background rounded-full font-semibold uppercase tracking-widest text-sm flex items-center gap-3 transition-shadow hover:shadow-lg hover:shadow-foreground/20"
                >
                  <span>Show Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </motion.button>
              </Link>
            </div>
          </ParallaxReveal>
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
                  className="text-[150px] lg:text-[220px] font-bold leading-none text-foreground/10"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  0
                </span>
                <span
                  className="text-[150px] lg:text-[220px] font-bold leading-none text-foreground/10"
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
