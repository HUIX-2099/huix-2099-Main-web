"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ParallaxReveal, ParallaxText } from "@/components/parallax";
import { GoogleDiscoveryRow } from "@/components/google-discovery";
import { BoardingPass } from "@/components/boarding-pass";
import { TiltCard } from "@/components/tilt-card";
import { AmbientGlow } from "@/components/ambient-glow";
import { HuixWorldMap } from "@/components/huix-world-map";
import { HuixTestimonialsSection } from "@/components/huix-testimonials";
import { HuixOasisSection } from "@/components/huix-oasis-section";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Monitor, Palette, Sparkles, ExternalLink, Gamepad2, Target, Users, FlaskConical, Handshake, LayoutGrid } from "lucide-react";

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
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — led the HUIX-THEME VS Code extension.",
    googleLabel: "HUIX-THEME · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "HUIX-THEME VS Code extension HUIX-2099 Victor Edet Coleman Founder CTO Liberia",
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
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — engineering lead on HUIXOR.",
    googleLabel: "HUIXOR · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "HUIXOR HUIX-2099 WPF WebView2 multi-device preview Victor Edet Coleman Liberia",
  },
  {
    id: 3,
    title: "Monrovia Hustle 3D",
    category: "Game",
    icon: Gamepad2,
    platform: "PC · Studio hub",
    description:
      "Warning: concept slice. Liberian narrative urban RPG — street hustle loop, tone-first casting, Monrovia as a lived-in open map.",
    image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    year: "2026",
    status: "Development" as const,
    openSource: false,
    href: "/products/monrovia-hustle",
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — narrative & technical lead on Monrovia Hustle 3D.",
    googleLabel: "Monrovia Hustle 3D · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "Monrovia Hustle 3D HUIX-2099 Victor Edet Coleman Liberian narrative urban RPG Liberia",
  },
];


export function HomePage() {
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

          <HuixOasisSection />
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
                  <AmbientGlow src={product.image} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg">
                    <Link
                      href={product.href}
                      className="flex min-h-0 flex-1 flex-col text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                        <p
                          className="mt-2 text-[10px] leading-snug text-muted-foreground/95"
                          style={{ fontFamily: monoFont }}
                        >
                          {product.creditLine}
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
                    <GoogleDiscoveryRow googleQuery={product.googleQuery} googleLabel={product.googleLabel} />
                  </article>
                  </AmbientGlow>
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

      <HuixTestimonialsSection />

      {/* Explore Section - Premium bento grid */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <ParallaxReveal direction="up">
            <div className="mb-10 lg:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
                  style={{ fontFamily: monoFont }}
                >
                  SECTION · 05 — EXPLORE
                </div>
                <h2
                  className="text-4xl lg:text-6xl font-bold uppercase tracking-[0.06em]"
                  style={{ fontFamily: "Mohican, sans-serif" }}
                >
                  DISCOVER HUIX-2099
                </h2>
              </div>
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                The story, people, research, and work behind a Liberia-based studio building the
                digital future of Africa.
              </p>
            </div>
          </ParallaxReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[minmax(168px,1fr)]">
            {/* Featured image tile — Our Story */}
            <ParallaxReveal direction="up" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <TiltCard max={6} className="h-full">
              <Link href="/about#our-story" className="group relative block h-full min-h-[340px] overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/icons/browser-icon.png"
                  alt="HUIX-2099"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur"
                      style={{ fontFamily: monoFont }}
                    >
                      01 · Featured
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl font-bold uppercase tracking-wide"
                      style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
                    >
                      Our Story
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                      How HUIX-2099 began in Monrovia, Liberia — and where we&apos;re headed.
                    </p>
                  </div>
                </div>
              </Link>
              </TiltCard>
            </ParallaxReveal>

            {/* Icon tiles */}
            {[
              { n: "02", title: "Mission & Values", desc: "What drives our work and culture.", href: "/about#mission-and-values", icon: Target, span: "lg:col-span-2" },
              { n: "03", title: "Team", desc: "Leadership & voice cast.", href: "/team", icon: Users, span: "lg:col-span-1" },
              { n: "04", title: "Research", desc: "Immersive tech & heritage.", href: "/research", icon: FlaskConical, span: "lg:col-span-1" },
              { n: "05", title: "Partners", desc: "Collaborate and build together.", href: "/partners", icon: Handshake, span: "lg:col-span-2" },
              { n: "06", title: "Showcase", desc: "Selected products & prototypes.", href: "/showcase", icon: LayoutGrid, span: "lg:col-span-2" },
            ].map((card) => (
              <ParallaxReveal key={card.href} direction="up" className={card.span}>
                <TiltCard max={7} className="h-full">
                <Link href={card.href} className="group relative flex h-full min-h-[168px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-foreground/30 hover:bg-card">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/40">
                      <card.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span
                      className="text-[28px] font-bold leading-none text-foreground/10"
                      style={{ fontFamily: "Mohican, sans-serif" }}
                    >
                      {card.n}
                    </span>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-lg font-bold uppercase tracking-wide"
                        style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
                      >
                        {card.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
                </TiltCard>
              </ParallaxReveal>
            ))}
          </div>
        </div>
      </section>

      <HuixWorldMap
        sectionLabel="[07] WHERE WE BUILD"
        title="MONROVIA · GLOBAL"
        description="Built in Liberia's capital — HUIX-2099 ships software, games, and tools with roots in Monrovia and reach across West Africa and the Americas."
      />

      {/* CTA Section - Editorial Document Style */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left - Boarding pass to the future */}
            <ParallaxReveal direction="up">
              <BoardingPass
                href="/contact"
                tone="invert"
                airline="HUIX-2099 · BOARDING PASS"
                flight="DEST · 2099"
                from={{ code: "NOW", label: "present day" }}
                to={{ code: "2099", label: "the future" }}
                rows={[
                  { label: "Gate", value: "A-01" },
                  { label: "Seat", value: "YOU" },
                  { label: "Status", value: "Boarding" },
                ]}
                id="HX-2099-FUTURE-BRD"
                cta="Board now"
              />
            </ParallaxReveal>

            {/* Right - Content */}
            <ParallaxReveal direction="right">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  SECTION · 06 — CONTACT
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
