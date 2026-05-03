"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ParallaxReveal, ParallaxImage, ParallaxText, ParallaxFloat, ParallaxStagger, ParallaxStaggerItem } from "@/components/parallax";
import { ArrowRight, Monitor, Palette, Sparkles, ExternalLink, Gamepad2 } from "lucide-react";

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

const latestProducts = [
  {
    id: 1,
    title: "HUIX-THEME",
    category: "Theme",
    icon: Palette,
    platform: "VS Code",
    description: "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors.",
    image: "/products/huix-theme/Media/logo.png",
    year: "2024",
    status: "Live" as const,
    openSource: true,
    href: "/products/huix-theme",
    external: "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme",
  },
  {
    id: 2,
    title: "HUIXOR",
    category: "Software",
    icon: Monitor,
    platform: "Windows 10/11",
    description: "Multi-device web preview in one window — up to 8 panels, VR stage, synced scroll, CDP emulation.",
    image: "/products/huixor/Huixor.ico",
    year: "2026",
    status: "Development" as const,
    openSource: true,
    href: "/products/huixor",
  },
  {
    id: 3,
    title: "Monrovia Hustle",
    category: "Game",
    icon: Gamepad2,
    platform: "PC",
    description: "Survival Action RPG Demo Campaign built by HUIX-2099",
    image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    year: "2024",
    status: "Live" as const,
    openSource: false,
    href: "/products/monrovia-hustle",
  },
];


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


      {/* Latest Products Showcase */}
      <section className="border-t border-border bg-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <ParallaxReveal direction="up" delay={0.05}>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div
                  className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
                  style={{ fontFamily: monoFont }}
                >
                  [03] LATEST PRODUCTS
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  OUR PRODUCTS
                </h2>
                <p className="mt-2 max-w-md text-base text-muted-foreground">
                  Tools and software built by HUIX-2099 — all open source.
                </p>
              </div>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground shrink-0"
                style={{ fontFamily: monoFont }}
              >
                View all products
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ParallaxReveal>

          {/* Product cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {latestProducts.map((product, idx) => {
              const Icon = product.icon;
              return (
                <ParallaxReveal key={product.id} direction="up" delay={0.1 + idx * 0.08}>
                  <Link
                    href={product.href}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted/20 border-b border-border/50">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Icon className="h-12 w-12 text-muted-foreground/20" />
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Status pill */}
                      <span
                        className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[9px] uppercase tracking-wider backdrop-blur-md"
                        style={{ fontFamily: monoFont }}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${product.status === "Live" ? "bg-green-500" : "bg-yellow-500"}`} />
                        {product.status}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3
                            className="text-base font-bold uppercase tracking-wider sm:text-lg"
                            style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.18em' }}
                          >
                            {product.title}
                          </h3>
                          {product.openSource && (
                            <span
                              className="flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[8px] uppercase tracking-wider text-green-600 dark:text-green-400"
                              style={{ fontFamily: monoFont }}
                            >
                              <Sparkles className="h-2.5 w-2.5" />
                              Open Source
                            </span>
                          )}
                        </div>
                        <div
                          className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/50"
                          style={{ fontFamily: monoFont }}
                        >
                          <Icon className="h-3 w-3" />
                          {product.category}
                          <span className="h-px w-2 bg-border" />
                          {product.platform}
                          <span className="h-px w-2 bg-border" />
                          {product.year}
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        {product.external ? (
                          <span
                            className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/50"
                            style={{ fontFamily: monoFont }}
                          >
                            <ExternalLink className="h-3 w-3" />
                            Marketplace
                          </span>
                        ) : (
                          <span />
                        )}
                        <span
                          className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/50 transition-colors group-hover:text-foreground"
                          style={{ fontFamily: monoFont }}
                        >
                          Details
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ParallaxReveal>
              );
            })}
          </div>

          {/* Browse all CTA */}
          <ParallaxReveal direction="up" delay={0.25}>
            <div className="mt-8 flex justify-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-8 py-3.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground hover:shadow-md"
                  style={{ fontFamily: monoFont }}
                >
                  Browse All Products
                  <ArrowRight className="h-3.5 w-3.5" />
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
