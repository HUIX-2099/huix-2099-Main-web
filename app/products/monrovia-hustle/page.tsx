"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Play,
  ShieldAlert,
  Monitor,
  Gamepad2,
  ArrowRight,
  MapPin,
  Users,
  BookOpen,
  GitBranch,
  Wallet,
  HeartHandshake,
  Smartphone,
  Expand,
  Handshake,
  Target,
  Cpu,
  MessageCircleWarning,
  Palette,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { ClickToViewImage } from "@/components/click-to-view-image"
import { MonroviaPassGate } from "@/components/monrovia-hustle/monrovia-pass-gate"

const WORKSPACE_IMAGE_DIR = "/products/Monrovia_hustle_Demo_Campane/images"

/** Filenames under `public/.../images` — URL-encoded when built into src */
const WORKSPACE_IMAGES = [
  "WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (1).jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (2).jpeg",
] as const

function workspaceImageSrc(filename: string) {
  return `${WORKSPACE_IMAGE_DIR}/${encodeURIComponent(filename)}`
}

const WORKSPACE_FEATURE = WORKSPACE_IMAGES[0]
const WORKSPACE_MORE = WORKSPACE_IMAGES.slice(1)

const CONCEPT_HREF = "/products/monrovia-hustle/concept"

export default function MonroviaHustlePage() {
  const containerRef = useRef<HTMLElement>(null)
  
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Scroll Parallax Effects
  const yTextBack = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const yTextFront = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const ySpotlight = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  // Note: overflow-clip allows sticky elements inside the body to still work correctly,
  // unlike overflow-hidden which breaks the scrolling context layout.
  return (
    <MonroviaPassGate
      logoSrc="/products/Monrovia_hustle_Demo_Campane/lighticon.png"
      logoAlt="Monrovia Hustle 3D"
    >
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-clip selection:bg-[#002868] selection:text-white">
      <Navbar />
      
      <main className="flex-1 relative pt-20">
        {/* HERO SECTION */}
        <section 
          ref={containerRef}
          className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 overflow-visible"
        >
          
          {/* Background Typography Effects - Dignitas Style */}
          <motion.div 
            style={{ y: yTextBack }}
            className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none z-0"
          >
             <h1 
               className="text-[8rem] md:text-[15rem] lg:text-[22rem] font-black italic text-transparent whitespace-nowrap tracking-tighter" 
               style={{ 
                 WebkitTextStroke: '2px hsl(var(--foreground) / 0.5)', 
                 transform: 'rotate(-3deg) translateY(-10%) scale(1.1)',
               }}
             >
               MONROVIA
             </h1>
          </motion.div>

          <motion.div 
            style={{ y: yTextFront }}
            className="absolute top-1/2 left-1/2 w-full max-w-[100vw] flex justify-center -translate-x-1/2 -translate-y-1/2 z-0 opacity-15 dark:opacity-20 pointer-events-none select-none"
          >
             <h2 
               className="text-[10rem] md:text-[18rem] lg:text-[25rem] font-black italic text-[#BF0A30] whitespace-nowrap tracking-tighter" 
               style={{ 
                 transform: 'rotate(-3deg) translateY(15%) scale(1.2)', 
                 filter: 'blur(2px)'
               }}
             >
               HUSTLE
             </h2>
          </motion.div>

          {/* Seamless Gradients adapting to theme */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none"></div>

          {/* Glowing backdrop spotlight */}
          <motion.div 
            style={{ y: ySpotlight }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] bg-[#002868] blur-[150px] rounded-full opacity-[0.25] pointer-events-none z-10"
          ></motion.div>

          {/* Content Container */}
          <div className="relative z-20 mx-auto w-full max-w-[min(100vw-2rem,1600px)] px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-start flex-grow">
            
            {/* Top Header Labels */}
            <div className="w-full max-w-6xl flex justify-between items-start mb-4 lg:mb-0 z-30">
               <div className="bg-[#002868] text-white font-bold px-4 py-1.5 flex items-center gap-2 uppercase tracking-tight text-xs sm:text-sm transform -skew-x-12 translate-x-2 shadow-sm">
                 <span className="skew-x-12 inline-flex items-center gap-2">
                   <Monitor className="w-4 h-4" />
                   HUIX-2099 · Game hub
                 </span>
               </div>
               <div className="text-white font-mono text-xs sm:text-sm border border-white/20 px-4 py-1.5 flex items-center gap-2 bg-[#BF0A30]/90 backdrop-blur-md shadow-sm">
                 <span className="w-2 h-2 rounded-full bg-white animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                 Liberian-led · In development
               </div>
            </div>

            <p className="relative z-30 mx-auto mt-3 max-w-2xl text-center text-base font-medium leading-snug text-foreground/95 sm:text-lg">
              <span className="font-semibold text-foreground">Monrovia Hustle 3D</span> is a playable concept — a vertical slice of the world,
              systems, and story we want to build at full scale.
            </p>
            <p className="relative z-30 mx-auto mt-3 max-w-lg text-center text-sm italic leading-snug text-muted-foreground sm:text-base">
              &ldquo;Warning this is a concept.&rdquo;
            </p>
            <p className="relative z-30 mx-auto mt-4 max-w-2xl px-4 text-center text-sm leading-relaxed text-muted-foreground">
              HUIX-2099&apos;s hub for press, testers, and players. Lead developer:{" "}
              <Link href="/team/victor" className="font-medium text-[#002868] underline decoration-[#002868]/40 underline-offset-2 hover:decoration-[#002868] dark:text-[#7eb3ff] dark:decoration-[#7eb3ff]/50">
                Victor Edet Coleman
              </Link>
              , Founder &amp; CTO —{" "}
              <Link href="/team" className="font-medium text-foreground/90 underline underline-offset-2 hover:text-foreground">
                meet the team
              </Link>
              . Deep build notes live on the{" "}
              <Link href={CONCEPT_HREF} className="font-medium text-[#002868] underline underline-offset-2 dark:text-[#7eb3ff]">
                concept page
              </Link>
              .
            </p>

            {/* Central Subject / Provided Image */}
            <motion.div 
              style={{ y: yImage }}
              className="relative z-20 flex w-full max-w-5xl flex-grow items-center justify-center mx-auto mt-6 lg:mt-0 transition-transform duration-700 ease-out hover:scale-[1.01]"
            >
              <ClickToViewImage
                src="/products/Monrovia_hustle_Demo_Campane/herosection.png"
                alt="Monrovia Hustle 3D — key art"
                triggerClassName="relative w-full"
              >
                  <Image
                    src="/products/Monrovia_hustle_Demo_Campane/herosection.png"
                    alt=""
                    width={1920}
                    height={1080}
                    className="relative z-20 w-full max-h-[65vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
                    priority
                  />
              </ClickToViewImage>
            </motion.div>

            {/* Bottom Stats / Glass UI Cards (Dignitas Inspired) */}
            <motion.div 
              style={{ y: yCards }}
              className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-30"
            >
              
              {/* INFO CARD 1 — teaser → full dossier on concept page */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#002868]/50 group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#002868]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <Gamepad2 className="w-4 h-4 text-[#BF0A30]" /> Game Details
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-6 group-hover:text-[#002868] transition-colors duration-300">
                   Slice-of-life<br/>Narrative urban RPG
                 </div>
                 <div className="mb-4 flex flex-wrap gap-2">
                   <Link
                     href={CONCEPT_HREF}
                     className="inline-flex flex-1 min-w-[9rem] items-center justify-center gap-2 rounded border border-[#002868]/50 bg-[#002868]/10 py-2.5 text-[10px] font-black uppercase tracking-wider text-foreground transition hover:border-[#002868] hover:bg-[#002868]/18 dark:bg-[#002868]/14"
                   >
                     Full info
                     <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                   </Link>
                   <Link
                     href={`${CONCEPT_HREF}#download`}
                     className="inline-flex flex-1 min-w-[9rem] items-center justify-center gap-2 rounded border border-[#BF0A30]/50 bg-[#BF0A30]/10 py-2.5 text-[10px] font-black uppercase tracking-wider text-foreground transition hover:border-[#BF0A30] hover:bg-[#BF0A30]/18"
                   >
                     Request access
                     <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                   </Link>
                 </div>
                 <p className="mb-4 text-[10px] leading-relaxed text-muted-foreground">
                   Concept 01 · HUIX archive · 2026 — age notes, trailer, lead dev, cast &amp; supporters on the concept page.
                 </p>
                 <div className="mt-auto pt-4 border-t border-border flex justify-between w-full text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                   <span>Platform <span className="text-foreground ml-1 text-sm font-sans font-bold">PC</span></span>
                   <span>Engine <span className="text-foreground ml-1 text-sm font-sans font-bold">Godot</span></span>
                 </div>
              </div>

              {/* PRIMARY CALL TO ACTION CARD */}
              <div className="bg-background backdrop-blur-xl border border-[#BF0A30]/50 p-6 flex flex-col justify-between group transform md:-translate-y-6 hover:-translate-y-8 transition-transform duration-500 relative shadow-[0_10px_40px_rgba(191,10,48,0.15)] hover:shadow-[0_15px_60px_rgba(191,10,48,0.25)]">
                 <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card z-0"></div>
                 <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                    <ShieldAlert className="w-5 h-5 text-[#BF0A30]" />
                 </div>
                 <div className="text-[#002868] dark:text-[#5c89d6] font-bold font-mono text-xs mb-2 uppercase tracking-[0.2em] z-10">
                   Concept build
                 </div>
                 <div className="text-3xl sm:text-4xl font-black text-foreground italic tracking-tighter uppercase leading-none z-10">
                   Play the<br/>concept
                 </div>
                 
                 <div className="mt-8 space-y-3 relative z-10">
                   <Link href={`${CONCEPT_HREF}#download`}>
                     <button className="w-full bg-[#BF0A30] hover:bg-red-800 text-white font-black uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(191,10,48,0.3)]">
                       <Play className="w-5 h-5 fill-white" />
                       Request access
                     </button>
                   </Link>
                   <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                     Windows 10/11 · Godot prototype
                   </p>
                 </div>
              </div>

              {/* INFO CARD 3 */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#BF0A30]/50 cursor-default group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#BF0A30]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <ArrowRight className="w-4 h-4 text-[#002868]" /> Next Steps
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-4 group-hover:text-[#BF0A30] transition-colors duration-300">
                   Support<br/>The Campaign
                 </div>
                 <Link
                   href="/products/monrovia-hustle/donate"
                   className="relative z-10 mb-4 inline-flex w-full items-center justify-center gap-2 rounded border border-[#002868]/50 bg-[#002868]/10 py-3 text-[11px] font-black uppercase tracking-widest text-foreground shadow-sm transition hover:border-[#002868] hover:bg-[#002868]/20 dark:bg-[#002868]/15 dark:hover:bg-[#002868]/25"
                 >
                   <Smartphone className="h-4 w-4 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                   Donate · Mobile &amp; Orange Money
                 </Link>
                 <div className="mt-auto pt-4 border-t border-border flex justify-between w-full text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                   <span>Studio <span className="text-foreground ml-1 text-sm font-sans font-bold">HUIX-2099</span></span>
                   <Link href="/team/victor" className="text-foreground ml-1 text-sm font-sans font-bold underline decoration-[#BF0A30]/50 hover:decoration-[#BF0A30]">
                     Victor →
                   </Link>
                 </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Art & artists — ties to concept page credits */}
        <section aria-label="Art and artists" className="border-t border-border bg-[#002868]/[0.04] py-12 dark:bg-[#10223a]/40">
          <div className="mx-auto flex w-full max-w-[min(100vw-2rem,1600px)] flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
            <div className="flex gap-4">
              <Palette className="h-10 w-10 shrink-0 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
              <div>
                <h2 className="text-xl font-black uppercase tracking-tighter text-foreground sm:text-2xl">Art &amp; artists</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Art direction, key art, and rolling collaborator credits — see who shapes the look on the concept page.
                </p>
              </div>
            </div>
            <Link
              href={`${CONCEPT_HREF}#artists`}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-[#002868]/45 bg-[#002868]/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.15em] text-foreground transition hover:border-[#002868] hover:bg-[#002868]/18 dark:border-[#7eb3ff]/35 dark:bg-[#10223a]/50 dark:hover:bg-[#10223a]/80 sm:self-center"
            >
              View art &amp; credits
              <ArrowRight className="h-4 w-4 text-[#BF0A30]" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Partners — animated strip (placeholders until logos land) */}
        <section
          aria-label="Partners"
          className="border-t border-border bg-muted/40 py-14 dark:bg-muted/20 lg:py-16"
        >
          <div className="mx-auto mb-8 w-full max-w-[min(100vw-2rem,1600px)] px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                  HUIX-2099 · Monrovia Hustle 3D
                </p>
                <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter text-foreground sm:text-3xl">
                  <Handshake className="h-7 w-7 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                  Partners
                </h2>
                <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                  Brands and collaborators riding with us on this build — logos coming soon.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            {/* One flex row duplicated end-to-end with uniform gaps so translateX(-50%) loops cleanly */}
            <div className="mh-partners-marquee-track gap-14 sm:gap-16">
              {Array.from({ length: 16 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-[4.25rem] w-[11rem] shrink-0 items-center justify-center rounded-xl border-2 border-dashed border-[#002868]/35 bg-background/90 px-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground shadow-inner dark:border-[#7eb3ff]/30 dark:bg-card/80 sm:h-[5rem] sm:w-[13rem]"
                  {...(i >= 8 ? { "aria-hidden": true as const } : {})}
                >
                  Coming soon
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the game — hub narrative (studio stills sit beside the headline, not a separate section) */}
        <section className="mt-12 w-full border-t border-border bg-[#fafafa] py-20 text-foreground transition-colors duration-300 dark:bg-background lg:py-32">
          <div className="mx-auto w-full max-w-[min(100vw-2rem,2200px)] px-5 font-sans sm:px-8 md:px-12 lg:px-14">
            <div className="mb-6 grid gap-8 lg:mb-10 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
              <div
                className={`self-start ${
                  WORKSPACE_IMAGES.length > 0 && WORKSPACE_FEATURE
                    ? "lg:col-span-6 xl:col-span-5"
                    : "lg:col-span-12"
                }`}
              >
                <div className="mb-8 flex h-8 items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground/70 lg:mb-10">
                  <div>HUIX-2099 · MONROVIA HUSTLE 3D</div>
                  <div className="relative flex h-8 w-8 items-center justify-center rounded">
                    {mounted && (
                      <Image
                        src={
                          resolvedTheme === "dark"
                            ? "/products/Monrovia_hustle_Demo_Campane/darkicon.png"
                            : "/products/Monrovia_hustle_Demo_Campane/lighticon.png"
                        }
                        alt=""
                        fill
                        className="object-contain"
                        priority
                      />
                    )}
                  </div>
                </div>

                <h3 className="mb-4 text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-7xl" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Monrovia Hustle 3D
                </h3>
                <p className="mb-4 font-serif text-xl italic text-muted-foreground sm:text-2xl">&ldquo;Warning this is a concept.&rdquo;</p>
                <p className="text-[15px] font-medium leading-[1.75] text-foreground/90 sm:text-base">
                  A Monrovia-set story game about street hustle, family pressure, and choosing your lane — part open-street slice, part mission-driven drama.
                </p>
              </div>

              {WORKSPACE_IMAGES.length > 0 && WORKSPACE_FEATURE ? (
                <>
                  <div className="flex min-w-0 flex-col gap-3 self-start lg:col-span-6 xl:col-span-7">
                    <div>
                      <p id="mh-workspace-heading" className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                        Workspace · production stills
                      </p>
                      <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        From the HUIX-2099 desk — layout passes, environment reads, and in-engine snapshots as this RPG takes shape. Click a photo to view
                        full size.
                      </p>
                    </div>
                    <ClickToViewImage
                      src={workspaceImageSrc(WORKSPACE_FEATURE)}
                      alt={`Monrovia Hustle 3D workspace still 1 of ${WORKSPACE_IMAGES.length}`}
                      triggerClassName="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-lg ring-1 ring-black/[0.05] transition hover:border-[#002868]/40 dark:border-border dark:ring-white/[0.06] dark:hover:border-[#7eb3ff]/35"
                      viewHintPlacement="bottom"
                    >
                      <Image
                        src={workspaceImageSrc(WORKSPACE_FEATURE)}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width:1024px) 100vw, 52vw"
                        priority={false}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent dark:from-background/95" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-14 text-white">
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">Monrovia Hustle 3D</p>
                          <p className="text-sm font-semibold tracking-tight">Studio desk · ref 01</p>
                        </div>
                        <span className="rounded-md border border-white/25 bg-black/35 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white/95 backdrop-blur-sm">
                          HUIX-2099
                        </span>
                      </div>
                    </ClickToViewImage>
                  </div>

                  {WORKSPACE_MORE.length > 0 && (
                    <div className="col-span-full mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3 lg:mt-4 lg:max-w-none lg:gap-4">
                      {WORKSPACE_MORE.map((filename, index) => {
                        const refIndex = index + 2
                        const alt = `Monrovia Hustle 3D workspace still ${refIndex} of ${WORKSPACE_IMAGES.length}`
                        return (
                          <motion.div
                            key={filename}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="min-w-0"
                          >
                            <ClickToViewImage
                              src={workspaceImageSrc(filename)}
                              alt={alt}
                              showViewHint={false}
                              triggerClassName="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/70 bg-muted/30 shadow-sm ring-1 ring-black/[0.04] transition duration-300 hover:border-[#002868]/35 hover:shadow-md dark:border-border dark:hover:border-[#7eb3ff]/30"
                            >
                              <div
                                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] opacity-90"
                                aria-hidden
                              />
                              <Image
                                src={workspaceImageSrc(filename)}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                                sizes="(max-width:640px) 33vw, 20vw"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-1 px-1.5 pb-1.5 pt-8 sm:px-2 sm:pb-2">
                                <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-white drop-shadow-md sm:text-[9px]">
                                  Ref · {String(refIndex).padStart(2, "0")}
                                </span>
                                <span className="flex items-center gap-0.5 rounded bg-white/10 px-1 py-0.5 font-mono text-[7px] font-bold uppercase text-white/95 backdrop-blur-sm sm:gap-1 sm:px-1.5 sm:text-[8px]">
                                  <Expand className="size-2.5 shrink-0 opacity-90 sm:size-3" aria-hidden />
                                  Open
                                </span>
                              </div>
                            </ClickToViewImage>
                          </motion.div>
                        )
                      })}
                    </div>
                  )}
                </>
              ) : null}
            </div>

            <div className="space-y-8 text-[15px] font-medium leading-[1.8] text-foreground/85 sm:text-base">
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Vision first</h4>
                <p>
                  <strong className="text-foreground">Monrovia Hustle 3D</strong> is a playable concept: a vertical slice of Monrovia flavour, the hustle
                  loop, feel, and world we intend to scale when we have stronger tools, more time, and ideally a team. That&apos;s not an excuse — it&apos;s
                  how a lot of serious games start.
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">What you&apos;re really hearing</h4>
                <p>
                  This isn&apos;t a AAA-studio product yet. It&apos;s a proof of concept built solo on tight hardware, meant to show the direction clearly so we
                  can grow it with the right support — without overpromising a &ldquo;finished&rdquo; commercial box today.
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Reality (context, not a flex)</h4>
                <p className="text-muted-foreground">
                  Right now it&apos;s solo development on minimal hardware. This release is about proving the idea, collecting feedback and metrics, and
                  shipping honesty — not claiming we&apos;re already a full retail game.
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">What we&apos;re looking for</h4>
                <p>
                  Partners and investors who care about representation and West African urban stories — and who can help with{" "}
                  <strong className="text-foreground">funding, polish, and distribution</strong> (mobile readiness, performance, marketing). The{" "}
                  <Link
                    href={CONCEPT_HREF}
                    className="font-semibold text-[#002868] underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]"
                  >
                    concept dossier
                  </Link>{" "}
                  spells out the slice, roadmap, and how to reach us.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 dark:bg-card/30">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  <MessageCircleWarning className="h-4 w-4 text-[#BF0A30]" aria-hidden />
                  If the tone gets mocked
                </div>
                <p className="text-muted-foreground">
                  Critics often mix up <strong className="text-foreground">not finished</strong> with <strong className="text-foreground">not serious</strong>.
                  The frame here is intentional: serious direction, early-stage execution — which is normal for a vertical slice.
                </p>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  <Target className="h-4 w-4 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                  Concept-launch goals (concrete, not vague)
                </h4>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground marker:text-[#BF0A30]">
                  <li>Downloads / plays of the build</li>
                  <li>Watch time on trailer or average session length</li>
                  <li>Short survey signal (e.g. &ldquo;Would you play weekly?&rdquo;)</li>
                  <li>Waitlist interest for a mobile-capable release</li>
                  <li>One tight trailer (30–60s) that sells the promise</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#002868]/25 bg-[#002868]/[0.06] p-6 dark:border-[#7eb3ff]/20 dark:bg-[#002868]/10">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  <Cpu className="h-4 w-4 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                  On the workstation (i7 · 4&nbsp;GB RAM)
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  Godot is a strong fit for low RAM, but 4&nbsp;GB is tight — lean scenes, compressed audio and textures, and testing on a minimum-spec profile
                  are part of the discipline. That lines up with &ldquo;concept,&rdquo; not a flaw in the pitch.
                </p>
              </div>

              <p className="text-muted-foreground">
                Spoiler-light on this hub: economies bite, friendships fracture, missions go gray — full plot and cast bible sit in the{" "}
                <Link
                  href={CONCEPT_HREF}
                  className="font-semibold text-[#002868] underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]"
                >
                  Concept 01 dossier
                </Link>
                .
              </p>
            </div>

            <div className="mt-16">
              <h4 className="mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                <Gamepad2 className="h-4 w-4 text-[#BF0A30]" /> Key features
              </h4>
              <ul className="grid gap-6 text-[15px] leading-relaxed sm:grid-cols-2 sm:text-base">
                <li className="flex gap-3 rounded-xl border border-border bg-background/60 p-4 dark:bg-card/40">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#002868]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Urban Liberia flavour:</strong> a stylized coastal capital sandbox — neighbourhoods,
                    markets, and back routes you can roam. Street-level geography and named beats are unpacked in the{" "}
                    <Link href={CONCEPT_HREF} className="underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]">
                      concept dossier
                    </Link>
                    , not spoilers on this billboard.
                  </span>
                </li>
                <li className="flex gap-3 rounded-xl border border-border bg-background/60 p-4 dark:bg-card/40">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#002868]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Dynamic street life:</strong> voiced NPCs, market energy, ambient pressure lines —
                    the city reacts around you.
                  </span>
                </li>
                <li className="flex gap-3 rounded-xl border border-border bg-background/60 p-4 dark:bg-card/40">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#002868]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Comic-book narrative engine:</strong> emotional beats blend illustrated comics with 3D
                    gameplay.
                  </span>
                </li>
                <li className="flex gap-3 rounded-xl border border-border bg-background/60 p-4 dark:bg-card/40">
                  <GitBranch className="mt-0.5 h-5 w-5 shrink-0 text-[#002868]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Real choices:</strong> branching dialogue — tough on the corner or low-key —
                    the city remembers how you hustle.
                  </span>
                </li>
                <li className="flex gap-3 rounded-xl border border-border bg-background/60 p-4 dark:bg-card/40 sm:col-span-2">
                  <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-[#002868]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Live the hustle:</strong> chase in-world currency, errands, side moves — flip value into
                    wardrobe and branching paths (&ldquo;how far you push it&rdquo; lives in the{" "}
                    <Link href={CONCEPT_HREF} className="underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]">
                      sealed notes
                    </Link>
                    ).
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-foreground/[0.03] p-8 sm:p-10">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Vibe &amp; tone</h4>
              <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                Developer: <strong className="text-foreground">HUIX-2099</strong>. Genre: slice-of-life / narrative urban RPG. Tone: raw, culturally
                grounded — Liberian Krio and English, mobile-money culture, and a moral compass that asks what receipts versus noise really mean.
              </p>
            </div>

            <div className="mt-12 flex gap-3 rounded-2xl border border-[#002868]/30 bg-[#002868]/5 p-8 dark:bg-[#002868]/10 sm:p-10">
              <HeartHandshake className="mt-1 h-8 w-8 shrink-0 text-[#BF0A30]" aria-hidden />
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Why this game matters</h4>
                <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                  Monrovia Hustle 3D is a pioneer concept built to put modern West African street culture on the global gaming map — without
                  Hollywood clichés. It aims for an honest, on-the-ground read on pressure, pride, and hustle in Liberia&apos;s capital — crafted under{" "}
                  <Link href="/team/victor" className="font-semibold text-[#002868] underline underline-offset-2 dark:text-[#7eb3ff]">
                    Victor Edet Coleman
                  </Link>{" "}
                  at HUIX-2099.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </MonroviaPassGate>
  )
}
