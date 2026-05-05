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
  LayoutGrid,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

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
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col items-center justify-start flex-grow">
            
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

            <p className="relative z-30 mx-auto mt-3 max-w-lg text-center text-lg italic leading-snug text-foreground/95 sm:text-xl">
              &ldquo;School on pause. Hustle on the street.&rdquo;
            </p>
            <p className="relative z-30 mx-auto mt-4 max-w-2xl px-4 text-center text-sm leading-relaxed text-muted-foreground">
              This page is HUIX-2099&apos;s hub for{" "}
              <span className="font-semibold text-foreground">Monrovia Hustle 3D</span> — a new Liberian video game in active
              development. Lead developer:{" "}
              <Link href="/team/victor" className="font-medium text-[#002868] underline decoration-[#002868]/40 underline-offset-2 hover:decoration-[#002868] dark:text-[#7eb3ff] dark:decoration-[#7eb3ff]/50">
                Victor Edet Coleman
              </Link>
              , Founder &amp; CTO —{" "}
              <Link href="/team" className="font-medium text-foreground/90 underline underline-offset-2 hover:text-foreground">
                meet the team
              </Link>
              .
            </p>

            {/* Central Subject / Provided Image */}
            <motion.div 
              style={{ y: yImage }}
              className="relative w-full max-w-5xl mx-auto flex items-center justify-center flex-grow mt-6 lg:mt-0 transition-transform duration-700 ease-out hover:scale-[1.01]"
            >
              <Image 
                src="/products/Monrovia_hustle_Demo_Campane/herosection.png"
                alt="Monrovia Hustle 3D — key art"
                width={1920}
                height={1080}
                className="w-full max-h-[65vh] object-contain relative z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </motion.div>

            {/* Bottom Stats / Glass UI Cards (Dignitas Inspired) */}
            <motion.div 
              style={{ y: yCards }}
              className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-30"
            >
              
              {/* INFO CARD 1 */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#002868]/50 cursor-default group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#002868]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <Gamepad2 className="w-4 h-4 text-[#BF0A30]" /> Game Details
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-6 group-hover:text-[#002868] transition-colors duration-300">
                   Slice-of-life<br/>Narrative urban RPG
                 </div>
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
                   Try the demo
                 </div>
                 <div className="text-3xl sm:text-4xl font-black text-foreground italic tracking-tighter uppercase leading-none z-10">
                   Play The<br/>Demo Now
                 </div>
                 
                 <div className="mt-8 space-y-3 relative z-10">
                   <Link href="#download">
                     <button className="w-full bg-[#BF0A30] hover:bg-red-800 text-white font-black uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(191,10,48,0.3)]">
                       <Play className="w-5 h-5 fill-white" />
                       Download Game
                     </button>
                   </Link>
                   <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                     Supports Windows 10/11
                   </p>
                 </div>
              </div>

              {/* INFO CARD 3 */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#BF0A30]/50 cursor-default group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#BF0A30]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <ArrowRight className="w-4 h-4 text-[#002868]" /> Next Steps
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-6 group-hover:text-[#BF0A30] transition-colors duration-300">
                   Support<br/>The Campaign
                 </div>
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

        {/* About the game — hub narrative */}
        <section className="mt-12 w-full border-t border-border bg-[#fafafa] py-20 text-foreground transition-colors duration-300 dark:bg-background lg:py-32">
          <div className="container mx-auto max-w-4xl px-6 font-sans lg:px-8">
            <div className="mb-12 flex h-8 items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
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
            <p className="mb-12 font-serif text-xl italic text-muted-foreground sm:text-2xl">&ldquo;School on pause. Hustle on the street.&rdquo;</p>

            <div className="space-y-6 text-[15px] font-medium leading-[1.8] text-foreground/85 sm:text-base">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-foreground">The story pitch</h4>
              <p>
                Set against the vibrant backdrop of downtown Monrovia, Liberia,{" "}
                <strong className="text-foreground">Monrovia Hustle 3D</strong> follows{" "}
                <strong className="text-foreground">Jboy</strong>, a 24-year-old navigating a tough economy. When his girlfriend, Angel,
                breaks up with him over money and stability, Jboy lands on the unforgiving pavement of Carey and Benson streets.
              </p>
              <p>
                Caught between his mother&apos;s grounded wisdom and the fast-money pull of the corner boys, he has to move through the
                city grid. Take shady missions from fast-talkers like Trapper, or stack Liberian Dollars (LD), dress sharp, and aim for a
                real seat at Uncle Flomo&apos;s desk — in Monrovia, your hustle shapes survival.
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
                    <strong className="text-foreground">Authentic Liberian setting:</strong> a &ldquo;Super Liberia&rdquo; sandbox rooted in Broad,
                    Carey, Benson, and Gurley streets.
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
                    <strong className="text-foreground">Live the hustle:</strong> earn LD flipping phones, running errands, and building connects —
                    reinvest in wardrobe and narrative paths.
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

        {/* Workspace — production stills */}
        <section
          aria-labelledby="mh-workspace-heading"
          className="border-t border-border bg-[#ececec] py-20 text-foreground dark:bg-[#141414] lg:py-28"
        >
          <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                  HUIX-2099 · Monrovia Hustle 3D
                </p>
                <h2 id="mh-workspace-heading" className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                  Workspace
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Production references from the studio desk — environment reads, layout passes, and in-engine snapshots as the Liberian street
                  RPG takes shape.
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#002868]/40 bg-[#002868]/10 dark:bg-[#002868]/20">
                <LayoutGrid className="h-7 w-7 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WORKSPACE_IMAGES.map((filename, index) => (
                <motion.div
                  key={filename}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-lg"
                >
                  <Image
                    src={workspaceImageSrc(filename)}
                    alt={`Monrovia Hustle 3D workspace still ${index + 1} of ${WORKSPACE_IMAGES.length}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 dark:from-background/90" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-md">
                    Ref · {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo download anchor */}
        <section id="download" className="scroll-mt-24 border-t border-border bg-background py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-foreground">Demo</h3>
            <p className="mb-8 max-w-2xl text-muted-foreground">
              Windows 10/11 builds ship from this hub as releases land. macOS and Android are on the roadmap — follow HUIX-2099 for drops.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Demo%20%2F%20Press"
                className="inline-flex items-center gap-2 bg-[#BF0A30] px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-800"
              >
                <Play className="h-4 w-4 fill-white" />
                Request demo access
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition hover:bg-muted/50"
              >
                Contact studio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}
