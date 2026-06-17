"use client"

import { useRef } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Lock,
  Monitor,
  Gamepad2,
  ArrowRight,
  MapPin,
  Users,
  BookOpen,
  GitBranch,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClickToViewImage } from "@/components/click-to-view-image"
import { LiberiaCountiesMap } from "@/components/monrovia-hustle/liberia-counties-map"
import { FeatureSection } from "@/components/ui/feature-section"
import { MonroviaMatureSticker } from "@/components/monrovia-hustle/monrovia-mature-sticker"

const CONCEPT_HREF = "/products/monrovia-hustle/concept"

/** Hero character key art ("JAY BOY") — em dash + spaces require encoding. */
const JAY_BOY_IMAGE = `/products/Monrovia_hustle_Demo_Campane/${encodeURIComponent(
  "Monrovia Hustle 3D playable concept — 1 GAME JAY BOY.jpg",
)}`

const GAME_SLOTS = [
  {
    id: "01",
    label: "Concept 01",
    title: "Monrovia Hustle",
    subtitle: "Concept · demo",
    available: true,
    href: CONCEPT_HREF,
    image: JAY_BOY_IMAGE,
  },
  { id: "02", label: "Concept 02", available: false },
  { id: "03", label: "Concept 03", available: false },
  { id: "04", label: "Concept 04", available: false },
] as const

export default function MonroviaHustlePage() {
  const containerRef = useRef<HTMLElement>(null)
  
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
          <div className="relative z-20 mx-auto w-full max-w-[min(100vw-2rem,1600px)] px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-start flex-grow">
            
            {/* Top Header Labels */}
            <div className="w-full max-w-6xl flex justify-between items-start gap-3 mb-4 lg:mb-0 z-30">
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

            <div className="relative z-30 mx-auto mt-6 max-w-2xl text-center">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                A HUIX-2099 product
              </p>
              <h1 className="mt-3 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Monrovia Hustle
              </h1>
              <p className="mt-4 text-base font-medium leading-snug text-foreground/95 sm:text-lg">
                Franchise hub — Liberia&apos;s first game from the studio.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Press, players, and partners land here for the Monrovia Hustle line. One live concept today; more franchise beats unlock as they ship.
                Full dossier for the first game on the{" "}
                <Link href={CONCEPT_HREF} className="font-medium text-[#002868] underline underline-offset-2 dark:text-[#7eb3ff]">
                  concept page
                </Link>
                .
              </p>
            </div>

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

          </div>
        </section>

        {/* Concept dossier — single live entry */}
        <motion.section
          style={{ y: yCards }}
          id="franchise"
          aria-labelledby="franchise-heading"
          className="relative z-20 border-t border-border bg-muted/25 py-14 dark:bg-muted/10 sm:py-16"
        >
          <div className="mx-auto w-full max-w-[min(100vw-2rem,1200px)] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-[#002868] to-[#BF0A30]" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                  HUIX-2099 · Monrovia Hustle 3D
                </p>
              </div>
              <h2 id="franchise-heading" className="text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                The game
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                One live dossier today — three franchise slots reserved for future beats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {GAME_SLOTS.map((slot) =>
                slot.available ? (
                  <article
                    key={slot.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#002868]/35 bg-card/80 shadow-sm ring-1 ring-black/[0.03] transition hover:-translate-y-0.5 hover:border-[#002868]/55 dark:ring-white/[0.05]"
                  >
                    <Link href={slot.href!} className="relative block aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={slot.image!}
                        alt={`${slot.title} — ${slot.subtitle}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width:640px) 50vw, 25vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      <span className="absolute left-2 top-2 rounded-full border border-white/20 bg-[#BF0A30]/90 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-white">
                        Live
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[#BF0A30] dark:text-[#ff7b93]">
                          {slot.label}
                        </p>
                        <h3 className="mt-0.5 text-sm font-black uppercase leading-tight tracking-tight text-foreground">
                          {slot.title}
                        </h3>
                      </div>
                    </Link>
                    <div className="flex flex-col gap-2 p-3 pt-2">
                      <p className="text-[10px] leading-snug text-muted-foreground line-clamp-2">{slot.subtitle}</p>
                      <Link
                        href={slot.href!}
                        className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#002868] dark:text-[#89b8ff]"
                      >
                        Full info
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                ) : (
                  <article
                    key={slot.id}
                    className="relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-muted/15"
                    aria-label={`${slot.label} — locked`}
                  >
                    <div className="relative flex aspect-[4/5] flex-col items-center justify-center px-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60">
                        <Lock className="h-4 w-4 text-muted-foreground/50" strokeWidth={1.25} aria-hidden />
                      </span>
                      <p className="mt-2 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Locked</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </motion.section>

        {/* About the game — hub narrative */}
        <section className="mt-12 w-full border-t border-border bg-[#fafafa] dark:bg-background">
          <div className="mx-auto w-full max-w-[min(100vw-2rem,1200px)] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
            <MonroviaMatureSticker size="md" />
          </div>
          <FeatureSection
            className="px-4 sm:px-6 lg:px-8"
            mainIcon={<Gamepad2 className="h-7 w-7" aria-hidden />}
            title="Key features"
            subtitle={
              <>
                Spoiler-light on this hub: economies bite, friendships fracture, missions go gray — full plot and cast bible sit in the{" "}
                <Link
                  href={CONCEPT_HREF}
                  className="font-semibold text-[#002868] underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]"
                >
                  Concept 01 dossier
                </Link>
                . Developer: <strong className="text-foreground">HUIX-2099</strong>. Genre: slice-of-life / narrative urban RPG. Tone: raw, culturally
                grounded — Liberian Krio and English, mobile-money culture, and a moral compass that asks what receipts versus noise really mean.
              </>
            }
            features={[
              {
                icon: <MapPin className="h-5 w-5" aria-hidden />,
                title: "Urban Liberia flavour",
                description: (
                  <>
                    A stylized coastal capital sandbox — neighbourhoods, markets, and back routes you can roam. Street-level geography and named beats are
                    unpacked in the{" "}
                    <Link href={CONCEPT_HREF} className="underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]">
                      concept dossier
                    </Link>
                    , not spoilers on this billboard.
                  </>
                ),
              },
              {
                icon: <Users className="h-5 w-5" aria-hidden />,
                title: "Dynamic street life",
                description: "Voiced NPCs, market energy, ambient pressure lines — the city reacts around you.",
              },
              {
                icon: <BookOpen className="h-5 w-5" aria-hidden />,
                title: "Comic-book narrative engine",
                description: "Emotional beats blend illustrated comics with 3D gameplay.",
              },
              {
                icon: <GitBranch className="h-5 w-5" aria-hidden />,
                title: "Real choices",
                description: "Branching dialogue — tough on the corner or low-key — the city remembers how you hustle.",
              },
              {
                icon: <Wallet className="h-5 w-5" aria-hidden />,
                title: "Live the hustle",
                description: (
                  <>
                    Chase in-world currency, errands, side moves — flip value into wardrobe and branching paths (&ldquo;how far you push it&rdquo; lives in
                    the{" "}
                    <Link href={CONCEPT_HREF} className="underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]">
                      sealed notes
                    </Link>
                    ).
                  </>
                ),
              },
            ]}
            callToAction={{
              title: "Why this game matters",
              description: (
                <>
                  Monrovia Hustle 3D is a pioneer concept built to put modern West African street culture on the global gaming map — without Hollywood
                  clichés. It aims for an honest, on-the-ground read on pressure, pride, and hustle in Liberia&apos;s capital — crafted under{" "}
                  <Link href="/team/victor" className="font-semibold text-[#002868] underline underline-offset-2 dark:text-[#7eb3ff]">
                    Victor Edet Coleman
                  </Link>{" "}
                  at HUIX-2099.
                </>
              ),
              actions: [
                { label: "Concept 01 dossier", href: CONCEPT_HREF },
                { label: "Meet the team", href: "/team" },
              ],
            }}
          />
        </section>

        <LiberiaCountiesMap
          sectionLabel="MH-3D · LIBERIA MAP"
          title="ROOTED IN MONROVIA · ALL 15 COUNTIES"
          description="The game world starts in Liberia's capital — every county marked on the map. Monrovia is where Monrovia Hustle 3D lives."
          className="border-t border-[#002868]/20 bg-[#002868]/[0.03] dark:bg-[#10223a]/30"
          mapHeight="min(520px, 65vh)"
        />
      </main>
      <Footer />
    </div>
  )
}
