import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MonroviaConceptHero } from "@/components/monrovia-hustle/concept-hero"
import { ConceptVoiceCastVideo } from "@/components/monrovia-hustle/concept-voice-cast-video"
import { MonroviaCastShowcase, type MonroviaCastMember } from "@/components/monrovia-hustle/monrovia-cast-showcase"
import { MonroviaConceptSpecCard } from "@/components/monrovia-hustle/concept-spec-card"
import { ClickToViewImage } from "@/components/click-to-view-image"
import { monroviaConceptArtists, monroviaConceptArtistPageHref, MONROVIA_CONCEPT_ARTISTS_HREF } from "@/lib/monrovia-hustle/concept-artists"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  Youtube,
  ArrowRight,
  Twitter,
  Instagram,
  Facebook,
  Palette,
  ExternalLink,
  Lock,
  MessageCircleWarning,
  Target,
  Cpu,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const MH_YOUTUBE_URL = "https://www.youtube.com/@HUIX-2099"
const MH_HUB = "/products/monrovia-hustle"
const STUDIO_EMAIL = "huixtech2099@gmail.com"
const FACEBOOK_PAGE_HREF = "https://www.facebook.com/profile.php?id=61572485499528"
const FACEBOOK_INFO =
  "HUIX-2099 on Facebook — dev snapshots, reels, build teasers, and community comments."
const VICTOR_IMAGE = `/products/Monrovia_hustle_Demo_Campane/developer/${encodeURIComponent("Victor Edet Coleman.png")}`
const CAPSULE_ART = "/products/Monrovia_hustle_Demo_Campane/herosection.png"
const GAME_SCREEN_PLACEHOLDER = "/products/Monrovia_hustle_Demo_Campane/1nmdB.jpg"
/** Monrovia Hustle mark on cast / partner cards (matches hub gate branding). */
const MH_GAME_LOGO = "/products/Monrovia_hustle_Demo_Campane/lighticon.png"
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

const CAST_CONCEPT_DIR = "/products/Monrovia_hustle_Demo_Campane/cast_concept"
const BLAMO_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/BLAMO.jpeg`
const JAYBOY_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/JAYBOY.jpeg`
const DC_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/DC.jpeg`
const TRAPPER_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/Trapper.jpeg`
const ANGEL_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/angel.jpeg`
const UNCLE_FLOMO_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/uncle_flomo.jpeg`
const JAYBOY_PA_CHARACTER_SRC = `${CAST_CONCEPT_DIR}/CHARACTERS/${encodeURIComponent("jayboy pa.jpeg")}`

function cc(name: string) {
  return `${CAST_CONCEPT_DIR}/${encodeURIComponent(name)}`
}

function MonroviaGameLogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute right-2.5 top-2.5 z-20 flex size-10 items-center justify-center rounded-lg border border-black/10 bg-white/95 p-1 shadow-md ring-1 ring-black/[0.04] backdrop-blur-sm sm:right-3 sm:top-3 sm:size-11",
        className,
      )}
      aria-hidden
    >
      <Image src={MH_GAME_LOGO} alt="" width={36} height={36} className="size-7 object-contain sm:size-8" />
    </div>
  )
}

type SocialChannel = {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
  /** Icon + hover border tint (brand) */
  tone: string
}

const socialChannels: SocialChannel[] = [
  {
    label: "X / Twitter",
    href: "https://x.com/Huix2099",
    icon: Twitter,
    tone: "text-[#1D9BF0] hover:border-[#1D9BF0]/45 hover:bg-[#1D9BF0]/10",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/huix.2099/",
    icon: Instagram,
    tone: "text-[#E4405F] hover:border-[#E4405F]/45 hover:bg-[#E4405F]/10",
  },
  {
    label: "Facebook",
    href: FACEBOOK_PAGE_HREF,
    icon: Facebook,
    tone: "text-[#1877F2] hover:border-[#1877F2]/45 hover:bg-[#1877F2]/10",
  },
  {
    label: "YouTube",
    href: MH_YOUTUBE_URL,
    icon: Youtube,
    tone: "text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    tone: "text-[#0A66C2] hover:border-[#0A66C2]/45 hover:bg-[#0A66C2]/10",
  },
]

function GmailMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  )
}

function StudioContactStrip({
  heading,
  className,
  variant = "section",
}: {
  heading: string
  className?: string
  variant?: "section" | "card"
}) {
  const card = variant === "card"
  return (
    <div className={cn(className)}>
      <p
        className={cn(
          "text-muted-foreground uppercase tracking-[0.2em]",
          card ? "mb-2 text-[9px] tracking-[0.16em]" : "mb-3 text-[10px]",
        )}
        style={{ fontFamily: MONO }}
      >
        {heading}
      </p>
      <p
        className={cn(
          "text-muted-foreground",
          card ? "mb-2 text-[10px] leading-snug" : "mb-3 text-[11px] leading-relaxed",
        )}
      >
        <span className="font-semibold text-[#1877F2]">Facebook</span>
        {" — "}
        {FACEBOOK_INFO}{" "}
        <a
          href={FACEBOOK_PAGE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-medium text-[#1877F2] underline decoration-[#1877F2]/35 underline-offset-2 transition hover:decoration-[#1877F2]",
            card && "text-[10px]",
          )}
        >
          Page link
        </a>
        .
      </p>
      <div className={cn("flex flex-wrap", card ? "gap-1.5" : "gap-2")}>
        {socialChannels.map((s) => {
          const Ico = s.icon
          return (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center rounded-[2px] border border-border bg-muted/50 transition dark:bg-muted/40",
                card ? "h-8 w-8" : "h-9 w-9",
                s.tone,
              )}
              aria-label={s.label}
            >
              <Ico className={cn("shrink-0", card ? "h-3.5 w-3.5" : "h-4 w-4")} />
            </a>
          )
        })}
      </div>
      <a
        href={`mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Studio%20inquiry`}
        className={cn(
          "flex min-w-0 items-center rounded-[2px] border border-border/80 bg-muted/30 transition hover:bg-muted/50",
          card
            ? "mt-2 gap-1.5 px-2 py-1.5 text-[11px]"
            : "mt-3 gap-2 px-2.5 py-2 text-[12px]",
        )}
      >
        <GmailMark className={cn("shrink-0", card ? "size-3.5" : "size-4")} />
        <span
          className={cn("shrink-0 font-semibold text-[#EA4335]", card && "text-[10px]")}
          style={{ fontFamily: MONO }}
        >
          Gmail
        </span>
        <span
          className={cn(
            "min-w-0 flex-1 truncate text-[#002868] underline decoration-[#002868]/35 underline-offset-2 dark:text-[#89b8ff] dark:decoration-[#89b8ff]/40",
            card && "text-[10px]",
          )}
        >
          {STUDIO_EMAIL}
        </span>
      </a>
    </div>
  )
}

const TAGS = ["Single-player", "Slice-of-life", "Narrative", "Open world", "Liberia", "Comic story", "Street RPG"]

const CAST = [
  {
    name: "Victor Edet Coleman",
    role: "Founder & CTO · Voice — Jayboy (Jboy)",
    epithet: "Playable protagonist · age 24 · Jboy / JBOY / JBoy",
    imageSrc: VICTOR_IMAGE,
    hoverImageSrc: JAYBOY_CHARACTER_SRC,
    hoverImageAlt:
      "Jayboy — Monrovia Hustle 3D playable protagonist (Jboy / JBOY / JBoy in scripts), age 24 — voiced by Victor Edet Coleman",
    imageAlt: "Victor Edet Coleman — Monrovia Hustle 3D voice cast, Jayboy playable protagonist — HUIX-2099 Liberia",
    googleLabel: "Victor Edet Coleman · Jayboy · Monrovia Hustle 3D voice cast",
    googleQuery: "Victor Edet Coleman Jayboy Monrovia Hustle 3D Jboy voice Liberia HUIX-2099",
    href: "/team/victor",
  },
  {
    name: "Arthur B. Kollie",
    role: "Voice Actor · Blamo",
    epithet: "Smart-watch fence · Trapper's chain",
    imageSrc: cc("Arthur B. Kollie.png"),
    hoverImageSrc: BLAMO_CHARACTER_SRC,
    hoverImageAlt:
      "Blamo — Monrovia Hustle 3D character (3D render), smart-watch fence in Trapper's chain — voiced by Arthur B. Kollie",
    imageAlt: "Arthur B. Kollie — Monrovia Hustle 3D voice cast, Blamo — HUIX-2099 Liberia",
    googleLabel: "Arthur B. Kollie · Monrovia Hustle voice cast · Blamo",
    googleQuery: "Arthur B Kollie voice actor Blamo Monrovia Hustle 3D HUIX-2099 Liberia",
    href: "/team/arthur-kollie",
  },
  {
    name: "David Neor Jr.",
    role: "Voice Actor · DC (DC Young)",
    epithet: "Trapper's sneaker contact · same street chain",
    imageSrc: cc("David Neor Jr.png"),
    hoverImageSrc: DC_CHARACTER_SRC,
    hoverImageAlt:
      "DC (DC Young) — Monrovia Hustle 3D character; Trapper's brother and sneaker contact on the Tenneh phone mission chain — voiced by David Neor Jr.",
    imageAlt: "David Neor Jr. — Monrovia Hustle 3D voice cast, DC Young — HUIX-2099 Liberia",
    googleLabel: "David Neor Jr. · Monrovia Hustle voice cast · DC Young",
    googleQuery: "David Neor Jr voice actor DC Young Monrovia Hustle 3D Trapper sneaker Tenneh Liberia HUIX-2099",
    href: "/team/david",
  },
  {
    name: "Jerry D Kollie",
    role: "Voice Actor · Trapper",
    epithet: "Street connect · Broad Street hub · club world",
    imageSrc: cc("Jerry D Kollie.png"),
    hoverImageSrc: TRAPPER_CHARACTER_SRC,
    hoverImageAlt:
      "Trapper — Monrovia Hustle 3D character; Jayboy's street connect (TennehPhoneMission hub) — voiced by Jerry D Kollie",
    imageAlt: "Jerry D Kollie — Monrovia Hustle 3D voice cast, Trapper — HUIX-2099 Liberia",
    googleLabel: "Jerry D Kollie · Monrovia Hustle voice cast · Trapper",
    googleQuery: "Jerry D Kollie voice actor Trapper Monrovia Hustle 3D TennehPhoneMission Liberia HUIX-2099",
    href: "/team/jerry-kollie",
  },
  {
    name: "Alfred M. Nyeswa",
    role: "Voice Actor · Jayboy Pa",
    epithet: "LISTEN · Pa · straight talk",
    imageSrc: cc("Alfred M. Nyeswa.png"),
    hoverImageSrc: JAYBOY_PA_CHARACTER_SRC,
    hoverImageAlt:
      "Jayboy Pa — Monrovia Hustle 3D character; Jayboy's father (Pa, Liberian English) — voiced by Alfred M. Nyeswa",
    imageAlt: "Alfred M. Nyeswa — Monrovia Hustle 3D voice cast, Jayboy Pa — HUIX-2099 Liberia",
    googleLabel: "Alfred M. Nyeswa · Monrovia Hustle voice cast · Jayboy Pa",
    googleQuery: "Alfred M Nyeswa voice actor Jayboy Pa father Monrovia Hustle 3D Liberia HUIX-2099",
    href: "/team/alfred-nyeswa",
  },
  {
    name: "Kanneh Mohammed K.",
    role: "Voice Actor · Instruction Narrator",
    epithet: "Guiding the hustle loop",
    imageSrc: cc("Kanneh Mohammed k..png"),
    imageAlt: "Kanneh Mohammed K. — Monrovia Hustle 3D voice cast, instruction narrator — HUIX-2099 Liberia",
    googleLabel: "Kanneh Mohammed K. · Monrovia Hustle voice cast",
    googleQuery: "Kanneh Mohammed K voice actor Monrovia Hustle 3D instruction narrator HUIX-2099 Liberia",
    href: "/team/kanneh-mohammed",
  },
  {
    name: "Felix J. K. Sowoma",
    role: "Voice Actor · Uncle Flomo",
    epithet: "Legit path · office scene landing",
    imageSrc: cc("felix J. K. Sowoma.png"),
    hoverImageSrc: UNCLE_FLOMO_CHARACTER_SRC,
    hoverImageAlt:
      "Uncle Flomo — Monrovia Hustle 3D character; Jayboy's uncle, family mentor vs Trapper's hustle world — voiced by Felix J. K. Sowoma",
    imageAlt: "Felix J. K. Sowoma — Monrovia Hustle 3D voice cast, Uncle Flomo — HUIX-2099 Liberia",
    googleLabel: "Felix J. K. Sowoma · Monrovia Hustle voice cast · Uncle Flomo",
    googleQuery: "Felix J K Sowoma voice actor Uncle Flomo Monrovia Hustle 3D Jayboy mentor Liberia HUIX-2099",
    href: "/team/felix-sowoma",
  },
  {
    name: "Johnett S. Talkpa",
    role: "Voice Actor · Angel",
    epithet: "Jayboy's ex · bedroom thread · club confrontation",
    imageSrc: cc("Johnett S. Talkpa.png"),
    hoverImageSrc: ANGEL_CHARACTER_SRC,
    hoverImageAlt:
      "Angel — Monrovia Hustle 3D character; Jayboy's ex / love interest — voiced by Johnett S. Talkpa",
    imageAlt: "Johnett S. Talkpa — Monrovia Hustle 3D voice cast, Angel — HUIX-2099 Liberia",
    googleLabel: "Johnett S. Talkpa · Monrovia Hustle voice cast · Angel",
    googleQuery: "Johnett S Talkpa voice actor Angel Monrovia Hustle 3D Jayboy club HUIX-2099 Liberia",
    href: "/team/johnett-s-talkpa",
  },
] as const

const DOMINIC_SOUND_IMAGE = cc("Dominc Rockson.png")
const DOMINIC_SOUND_HREF = "/team/dominic-rockson"
const DOMINIC_SOUND_GOOGLE_QUERY = "Dominic Rockson sound engineer Monrovia Hustle 3D Liberia HUIX-2099"
const DOMINIC_SOUND_GOOGLE_LABEL = "Dominic Rockson · Monrovia Hustle 3D · Sound engineer"

const castMembers: MonroviaCastMember[] = [
  ...CAST.map((c) => ({
    id: c.href.replace(/^\/team\//, ""),
    name: c.name,
    role: c.role,
    epithet: c.epithet,
    imageSrc: c.imageSrc,
    imageAlt: c.imageAlt,
    href: c.href,
    googleQuery: c.googleQuery,
    googleLabel: c.googleLabel,
    lane: "voice" as const,
    ...("hoverImageSrc" in c && c.hoverImageSrc
      ? { hoverImageSrc: c.hoverImageSrc, hoverImageAlt: (c as { hoverImageAlt?: string }).hoverImageAlt }
      : {}),
  })),
  {
    id: "dominic-rockson",
    name: "Dominic Rockson",
    role: "Sound Engineer · Monrovia Hustle 3D",
    epithet: "Capture, mix, and clarity for the slice",
    imageSrc: DOMINIC_SOUND_IMAGE,
    imageAlt: "Dominic Rockson — Monrovia Hustle 3D sound engineer — HUIX-2099 Liberia",
    href: DOMINIC_SOUND_HREF,
    googleQuery: DOMINIC_SOUND_GOOGLE_QUERY,
    googleLabel: DOMINIC_SOUND_GOOGLE_LABEL,
    lane: "audio",
  },
]

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4 lg:mb-8 lg:gap-6">
      <h2 className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:text-[#89b8ff] lg:text-xs" style={{ fontFamily: MONO }}>
        {children}
      </h2>
      <div className="h-px min-w-[2rem] flex-1 bg-foreground/10 dark:bg-foreground/15" aria-hidden />
    </div>
  )
}

/** Steam-like blue link color without copying Steam palette wholesale */
function StoreLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`text-[#002868] underline decoration-[#002868]/35 underline-offset-2 transition hover:decoration-[#BF0A30] dark:text-[#89b8ff] dark:decoration-[#89b8ff]/45 ${props.className ?? ""}`}
    />
  )
}

export default function MonroviaHustleConceptPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main className="w-full min-w-0 overflow-x-hidden pb-28 pt-[4.5rem] sm:pt-[5.25rem] lg:pb-36">
        <div className="w-full min-w-0 max-w-none px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
          <Link
            href={MH_HUB}
            className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-[#002868] lg:mb-5 dark:hover:text-[#89b8ff]"
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All games · Hub
          </Link>

          <div className="grid w-full min-w-0 grid-cols-1 gap-12 xl:gap-y-14">
            <div className="min-w-0 w-full max-w-full">
              <MonroviaConceptHero
                posterSrc={CAPSULE_ART}
                youtubeChannelUrl={MH_YOUTUBE_URL}
                className="mb-10 pb-10 lg:mb-14 lg:pb-14"
              />
            </div>

            <div className="mb-2 xl:hidden">
              <div className="rounded-xl border border-border/70 bg-card/50 p-5 shadow-sm dark:border-border/60 dark:bg-muted/15">
                <StudioContactStrip heading="Studio &amp; community" />
              </div>
            </div>

            <div className="hidden min-w-0 w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid">
              <div className="rounded-xl border border-border/70 bg-card/50 p-6 shadow-sm backdrop-blur-sm dark:border-border/60 dark:bg-muted/15">
                <StudioContactStrip heading="Studio &amp; community" variant="card" />
              </div>
              <div className="rounded-xl border border-border/70 bg-card/40 p-6 shadow-sm dark:border-border/60 dark:bg-muted/10">
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  style={{ fontFamily: MONO }}
                >
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/80 bg-muted/35 px-2.5 py-1 text-[11px] font-medium leading-none text-muted-foreground dark:bg-muted/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0 w-full max-w-full">
              <div className="grid w-full min-w-0 grid-cols-1 gap-12 lg:gap-14 xl:gap-16">
              <section id="concept-spec" className="scroll-mt-28">
              <MonroviaConceptSpecCard hubHref={MH_HUB} />
              </section>

              <section id="concept-framing" className="scroll-mt-28">
              <SectionTitle>About this concept</SectionTitle>
              <div className="space-y-8 border border-border bg-muted/20 p-8 text-[15px] leading-[1.85] text-foreground/90 shadow-sm dark:bg-muted/15 sm:p-10 sm:text-[16px] lg:p-12">
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Vision first</h3>
                  <p>
                    <strong className="text-foreground">Monrovia Hustle 3D</strong> is a playable concept: a vertical slice of Monrovia flavour, the hustle
                    loop, feel, and world we intend to scale when we have stronger tools, more time, and ideally a team. That&apos;s not an excuse — it&apos;s
                    how a lot of serious games start.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">What you&apos;re really hearing</h3>
                  <p>
                    This isn&apos;t a AAA-studio product yet. It&apos;s a proof of concept built solo on tight hardware, meant to show the direction clearly so we
                    can grow it with the right support — without overpromising a &ldquo;finished&rdquo; commercial box today.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Reality (context, not a flex)</h3>
                  <p className="text-muted-foreground">
                    Right now it&apos;s solo development on minimal hardware. This release is about proving the idea, collecting feedback and metrics, and
                    shipping honesty — not claiming we&apos;re already a full retail game.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">What we&apos;re looking for</h3>
                  <p>
                    Partners and investors who care about representation and West African urban stories — and who can help with{" "}
                    <strong className="text-foreground">funding, polish, and distribution</strong> (mobile readiness, performance, marketing). Use the studio
                    contact strip above or{" "}
                    <a
                      href={`mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Studio%20inquiry`}
                      className="font-semibold text-[#002868] underline decoration-[#002868]/35 underline-offset-2 hover:decoration-[#BF0A30] dark:text-[#7eb3ff]"
                    >
                      email the studio
                    </a>{" "}
                    for slice details, roadmap, and partnership conversations.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/60 p-6 dark:bg-card/30">
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
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                    <Target className="h-4 w-4 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                    Concept-launch goals (concrete, not vague)
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground marker:text-[#BF0A30]">
                    <li>Downloads / plays of the build</li>
                    <li>Watch time on trailer or average session length</li>
                    <li>Short survey signal (e.g. &ldquo;Would you play weekly?&rdquo;)</li>
                    <li>Waitlist interest for a mobile-capable release</li>
                    <li>One tight trailer (30–60s) that sells the promise</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[#002868]/25 bg-[#002868]/[0.06] p-6 dark:border-[#7eb3ff]/20 dark:bg-[#002868]/10">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                    <Cpu className="h-4 w-4 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                    On the workstation (i7 · 4&nbsp;GB RAM)
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    Our workstation profile is modest (i7 · 4&nbsp;GB RAM) — lean scenes, compressed audio and textures, and testing on a minimum-spec profile
                    are part of the discipline. That lines up with &ldquo;concept,&rdquo; not a flaw in the pitch.
                  </p>
                </div>
              </div>
              </section>

              <section>
              <SectionTitle>The story pitch</SectionTitle>
              <div className="space-y-8 border border-border bg-muted/20 p-8 text-[16px] leading-[1.9] text-foreground/95 shadow-sm dark:bg-muted/15 sm:p-10 sm:text-[17px] sm:leading-[1.9] lg:p-12 lg:text-lg lg:leading-[1.95] xl:leading-loose xl:p-14">
                <p>
                  Set against the vibrant backdrop of downtown Monrovia, Liberia, <strong className="text-foreground">Monrovia Hustle 3D</strong> follows{" "}
                  <strong className="text-foreground">Jboy</strong>, a 24-year-old navigating a tough economy. When his girlfriend, Angel,
                  breaks up with him over money and stability, Jboy lands on the unforgiving pavement of Carey and Benson streets.
                </p>
                <p className="text-muted-foreground">
                  Caught between his mother&apos;s grounded wisdom and the fast-money pull of the corner boys, he has to move through the city grid.
                  Take shady missions from fast-talkers like Trapper, or stack Liberian Dollars (LD), dress sharp, and aim for a real seat at Uncle
                  Flomo&apos;s desk — in Monrovia, your hustle shapes survival.
                </p>
              </div>
              </section>

              <section id="game-screens" className="scroll-mt-28">
              <SectionTitle>Game Screens</SectionTitle>
              <p className="mb-6 max-w-none text-[15px] leading-[1.8] text-muted-foreground lg:text-[16px]">
                Preview of upcoming levels and in-game locations. Content is currently locked for this early prototype.
              </p>
              <div className="w-full relative px-12 sm:px-14">
                <Carousel opts={{ align: "start" }} className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm dark:border-border/60">
                            <Image 
                              src={GAME_SCREEN_PLACEHOLDER} 
                              alt="Locked Screen" 
                              fill 
                              className="object-cover blur-[6px] opacity-40 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                              <div className="flex size-14 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-sm backdrop-blur-md">
                                <Lock className="size-6 text-muted-foreground/80" />
                              </div>
                              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground" style={{ fontFamily: MONO }}>
                                Locked · Level {index + 1}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 sm:-left-6" />
                  <CarouselNext className="-right-4 sm:-right-6" />
                </Carousel>
              </div>
              </section>

              <ConceptVoiceCastVideo className="mb-2 lg:mb-4" />

              <section id="voice-actors" className="scroll-mt-28">
              <SectionTitle>Monrovia Hustle 3D — cast &amp; audio</SectionTitle>
              <p className="mb-8 max-w-none text-[15px] leading-[1.85] text-muted-foreground lg:mb-10 lg:text-[16px]">
                Hover a name or photo to preview in-game characters — click through to team profiles or Google.{" "}
                <strong className="text-foreground">Jayboy</strong> is performed by{" "}
                <strong className="text-foreground">Victor Edet Coleman</strong>.
              </p>
              <MonroviaCastShowcase
                members={castMembers}
                audioIntro={{
                  id: "sound-audio",
                  title: "Sound & audio",
                  description:
                    "Mix, capture, and in-engine clarity for the prototype — a separate lane from the voice cast. Dominic Rockson is the sound engineer on Monrovia Hustle 3D.",
                }}
              />
              </section>

              <section id="artists" className="scroll-mt-28 border-t border-border pt-12 dark:border-border lg:pt-14" aria-label="Art and artists">
              <div className="mb-6 flex items-center gap-4 lg:mb-8 lg:gap-6">
                <Palette className="h-7 w-7 shrink-0 text-[#BF0A30]" aria-hidden />
                <h2
                  id="artists-heading"
                  className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:text-[#89b8ff] lg:text-xs"
                  style={{ fontFamily: MONO }}
                >
                  Art &amp; artists
                </h2>
                <div className="h-px min-w-[2rem] flex-1 bg-foreground/10 dark:bg-foreground/15" aria-hidden />
              </div>
              <p className="mb-3 text-[11px] font-medium text-muted-foreground" style={{ fontFamily: MONO }}>
                Section anchor:{" "}
                <StoreLink href={MONROVIA_CONCEPT_ARTISTS_HREF} className="text-[11px] font-semibold">
                  #artists
                </StoreLink>
              </p>
              <p className="mb-8 max-w-none text-[15px] leading-[1.85] text-muted-foreground lg:mb-10 lg:text-[16px]">
                Who&apos;s responsible for how the slice <strong className="text-foreground/90">reads on screen</strong> — not in-fiction characters (see{" "}
                <a href="#voice-actors" className="font-medium text-[#002868] underline decoration-[#002868]/35 underline-offset-2 dark:text-[#89b8ff]">
                  Cast
                </a>
                ), but the people steering art direction, key art, music collaborators, and future credits.
              </p>
              <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
                {monroviaConceptArtists.map((a) => {
                  const artistHref = monroviaConceptArtistPageHref(a.slug)
                  const hasVideo = "videoSrc" in a && a.videoSrc
                  return (
                    <article
                      key={a.slug}
                      className={cn(
                        "group min-h-0 w-full min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card via-card/95 to-muted/30 shadow-sm ring-1 ring-black/[0.03] dark:from-card/80 dark:via-card/60 dark:to-muted/25 dark:ring-white/[0.04]",
                        hasVideo ? "grid grid-cols-1 md:grid-cols-3 col-span-full" : "flex flex-col sm:flex-row"
                      )}
                    >
                      {/* Video Column (only rendered if hasVideo is true) */}
                      {hasVideo && (
                        <div className="relative aspect-square w-full min-w-0 overflow-hidden bg-muted/50">
                          <video
                            src={a.videoSrc}
                            poster={a.imageSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="size-full object-cover"
                          />
                          <MonroviaGameLogoMark />
                        </div>
                      )}

                      {/* Image Column */}
                      <div
                        className={cn(
                          "relative bg-muted/50 overflow-hidden min-w-0",
                          hasVideo
                            ? "aspect-square w-full border-t md:border-t-0 md:border-l border-border/60"
                            : "aspect-[16/10] w-full shrink-0 sm:w-2/5 lg:w-1/3"
                        )}
                      >
                        <ClickToViewImage
                          src={a.imageSrc}
                          alt={a.imageAlt}
                          triggerClassName="absolute inset-0 block size-full"
                          showViewHint
                          viewHintPlacement="bottom"
                        >
                          <Image
                            src={a.imageSrc}
                            alt=""
                            fill
                            className={cn(
                              "object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]",
                              hasVideo ? "object-cover" : "object-contain bg-muted/30"
                            )}
                            sizes={hasVideo ? "(max-width:768px) 100vw, 33vw" : "(max-width:640px) 100vw, (max-width:1024px) 40vw, 33vw"}
                          />
                        </ClickToViewImage>
                        {hasVideo && (
                          <Link
                            href={artistHref}
                            className="absolute bottom-3 left-3 z-30 rounded-md border border-border/80 bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground shadow-sm transition hover:border-[#BF0A30]/50 hover:text-[#BF0A30] sm:text-[11px]"
                          >
                            More info
                          </Link>
                        )}
                        {!hasVideo && (
                          <>
                            <Link
                              href={artistHref}
                              className="absolute bottom-3 left-3 z-30 rounded-md border border-border/80 bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground shadow-sm transition hover:border-[#BF0A30]/50 hover:text-[#BF0A30] sm:text-[11px]"
                            >
                              More info
                            </Link>
                            <MonroviaGameLogoMark />
                          </>
                        )}
                      </div>

                      {/* Text Column */}
                      <div
                        className={cn(
                          "flex flex-1 flex-col p-5 sm:p-6 lg:p-8",
                          hasVideo && "border-t md:border-t-0 md:border-l border-border/60 justify-center"
                        )}
                      >
                        <Link href={artistHref} className="block w-fit max-w-full rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[#4285F4]/50 focus-visible:ring-offset-2">
                          <h3 className="text-lg font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-[#002868] sm:text-xl lg:text-2xl dark:group-hover:text-[#89b8ff]">
                            {a.name}
                          </h3>
                        </Link>
                        <p
                          className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-[#002868] dark:text-[#89b8ff]"
                          style={{ fontFamily: MONO }}
                        >
                          {a.discipline}
                        </p>
                        <p className="mt-4 text-[13px] leading-[1.75] text-muted-foreground sm:text-[14px] sm:leading-[1.8] lg:text-[15px] lg:leading-[1.8]">{a.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <StoreLink href={artistHref} className="inline-flex w-fit text-[13px] font-semibold">
                            Full artist page →
                          </StoreLink>
                          <a
                            href={a.facebookHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-semibold text-foreground shadow-sm transition hover:border-[#1877F2]/40 hover:bg-muted/50"
                          >
                            <Facebook className="h-4 w-4 shrink-0 text-[#1877F2]" aria-hidden />
                            <span className="min-w-0">Facebook</span>
                            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
                          </a>
                          <p className="text-[11px] font-medium italic text-muted-foreground sm:text-[12px] w-full">
                            Credits update as partners join — no implied endorsement yet.
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
              </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
