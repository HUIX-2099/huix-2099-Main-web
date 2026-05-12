import type { Metadata } from "next"
import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConceptGameplayGallery, type ConceptGalleryItem } from "@/components/monrovia-hustle/concept-gameplay-gallery"
import { ClickToViewImage } from "@/components/click-to-view-image"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  Youtube,
  Play,
  ArrowRight,
  HeartHandshake,
  Twitter,
  Instagram,
  Facebook,
  Monitor,
  HardDrive,
  Cpu,
  ListChecks,
  Route,
  Scale,
  Palette,
  Search,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Concept 01 — Monrovia Hustle 3D | HUIX-2099",
  description:
    "Playable concept for Monrovia Hustle 3D: vertical slice, street hustle loop, trailer & screenshots, build contents, roadmap, partners — HUIX-2099.",
}

const MH_YOUTUBE_URL = "https://www.youtube.com/@HUIX-2099"
const MH_HUB = "/products/monrovia-hustle"
const STUDIO_EMAIL = "huixtech2099@gmail.com"
const FACEBOOK_PAGE_HREF = "https://www.facebook.com/profile.php?id=61572485499528"
const FACEBOOK_INFO =
  "HUIX-2099 on Facebook — dev snapshots, reels, build teasers, and community comments."
const VICTOR_IMAGE = `/products/Monrovia_hustle_Demo_Campane/developer/${encodeURIComponent("Victor Edet Coleman.png")}`
const VICTOR_GOOGLE_HREF =
  "https://www.google.com/search?q=Victor+Edet+Coleman&sourceid=chrome&ie=UTF-8"
const VICTOR_FACEBOOK_REEL_HREF = "https://www.facebook.com/reel/988259967072643"
const CAPSULE_ART = "/products/Monrovia_hustle_Demo_Campane/herosection.png"
/** Monrovia Hustle mark on cast / partner cards (matches hub gate branding). */
const MH_GAME_LOGO = "/products/Monrovia_hustle_Demo_Campane/lighticon.png"
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

const WORKSPACE_DIR = "/products/Monrovia_hustle_Demo_Campane/images"

const WORKSPACE_FILES = [
  "WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (1).jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (2).jpeg",
] as const

const CAST_CONCEPT_DIR = "/products/Monrovia_hustle_Demo_Campane/cast_concept"

function ws(name: string) {
  return `${WORKSPACE_DIR}/${encodeURIComponent(name)}`
}

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

const galleryItems: ConceptGalleryItem[] = [
  {
    kind: "video",
    posterSrc: CAPSULE_ART,
    alt: "Monrovia Hustle trailer on YouTube",
  },
  { kind: "image", src: "/products/Monrovia_hustle_Demo_Campane/1nmdB.jpg", alt: "In-engine snapshot" },
  { kind: "image", src: "/products/Monrovia_hustle_Demo_Campane/huix2099.png", alt: "Studio stamp on mock build" },
  ...WORKSPACE_FILES.map((filename, index) => ({
    kind: "image" as const,
    src: ws(filename),
    alt: `Workspace reference ${index + 1}`,
  })),
]

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
        href={`mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Play%20the%20concept%20%2F%20Wishlist`}
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

const TAGS = ["Single-player", "Slice-of-life", "Narrative", "Open world", "Liberia", "Godot", "Comic story", "Street RPG"]

const CAST = [
  {
    name: "Jboy",
    role: "Playable protagonist",
    epithet: "Sidewalk calculus",
    imageSrc: cc("Dominc Rockson.png"),
    imageAlt: "Dominic Rockson — Monrovia Hustle 3D voice cast · Jboy",
    href: "/team/jboy",
  },
  {
    name: "Arthur B. Kollie",
    role: "Cast Concept · HUIX Archive",
    epithet: "Concept Tier 01",
    imageSrc: cc("Arthur B. Kollie.png"),
    imageAlt: "Arthur B. Kollie — Monrovia Hustle 3D voice cast concept",
    href: "/team/arthur-kollie",
  },
  {
    name: "David Neor Jr.",
    role: "Voice Actor · DC",
    epithet: "DC Young · mission spine",
    imageSrc: cc("David Neor Jr.png"),
    imageAlt: "David Neor Jr. — Voice talent for DC (DC Young)",
    href: "/team/david",
  },
  {
    name: "Jerry D Kollie",
    role: "Voice Actor · Cast Concept",
    epithet: "Voice talent",
    imageSrc: cc("Jerry D Kollie.png"),
    imageAlt: "Jerry D Kollie — Monrovia Hustle 3D voice cast concept",
    href: "/team/jerry-kollie",
  },
  {
    name: "Alfred M. Nyeswa",
    role: "Voice Actor · Jayboy's Father",
    epithet: "The voice of wisdom and pressure",
    imageSrc: cc("Alfred M. Nyeswa.png"),
    imageAlt: "Alfred M. Nyeswa — Voice talent for Jayboy's father",
    href: "/team/alfred-nyeswa",
  },
  {
    name: "Kanneh Mohammed K.",
    role: "Voice Actor · Instruction Narrator",
    epithet: "Guiding the hustle loop",
    imageSrc: cc("Kanneh Mohammed k..png"),
    imageAlt: "Kanneh Mohammed K. — Voice talent for the instruction narrator",
    href: "/team/kanneh-mohammed",
  },
  {
    name: "Felix J. K. Sowoma",
    role: "Voice Actor · Jayboy's uncle",
    epithet: "Family weight · street wisdom",
    imageSrc: cc("felix J. K. Sowoma.png"),
    imageAlt: "Felix J. K. Sowoma — Voice talent for Jayboy's uncle",
    href: "/team/felix-sowoma",
  },
  {
    name: "Johnette Talkpa",
    role: "Voice Actor · Angel",
    epithet: "Love priced in LD",
    imageSrc: cc("Johnette Talkpa.png"),
    imageAlt: "Johnette Talkpa — Voice talent for Angel",
    href: "/team/johnette-talkpa",
  },
] as const

const ARTISTS = [
  {
    name: "Bucky Raw",
    discipline: "Music partnership · Marketing collaboration",
    imageSrc: "/products/Monrovia_hustle_Demo_Campane/music_artist/bucky raw.jpeg",
    imageAlt: "Bucky Raw — Monrovia Hustle 3D music and marketing partner",
    body:
      "Liberian music artist partnering with HUIX-2099 on Monrovia Hustle 3D. Bucky Raw and his team bring authentic Liberian soundscapes and marketing expertise to amplify the game's cultural reach and street authenticity.",
    href: null,
  },
] as const

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="w-full min-w-0 pb-28 pt-[5.75rem] sm:pt-28 lg:pb-36">
        <div className="mx-auto w-full min-w-0 max-w-[2200px] px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
          <Link
            href={MH_HUB}
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-[#002868] lg:mb-12 dark:hover:text-[#89b8ff]"
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All games · Hub
          </Link>

          <div className="mb-10 xl:hidden">
            <div className="rounded-xl border border-border/70 bg-card/50 p-5 shadow-sm dark:border-border/60 dark:bg-muted/15">
              <StudioContactStrip heading="Studio &amp; community" />
            </div>
          </div>

          {/*
            xl+: two tracks — [flexible main | ~420px sidebar]. Main + gallery use w-full min-w-0 so flex parents never collapse width on desktop.
          */}
          <div className="grid w-full min-w-0 grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] xl:items-start xl:gap-10 2xl:gap-14">
            {/* Main column — video first like Steam */}
            <div className="min-w-0 w-full max-w-full">
              {/* Store title row */}
              <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-b border-border/60 pb-8 lg:mb-12 lg:pb-10 xl:gap-x-16">
                <div className="max-w-none lg:max-w-[52rem] xl:max-w-none">
                  <p className="mb-3 inline-flex items-center rounded-sm border border-[#002868]/30 bg-[#002868]/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:border-[#89b8ff]/35 dark:bg-[#10223a]/80 dark:text-[#89b8ff]" style={{ fontFamily: MONO }}>
                    Concept · early prototype
                  </p>
                  <h1 className="text-[clamp(1.85rem,3.8vw,3.35rem)] font-normal lowercase leading-[1.08] tracking-tight text-foreground [font-variant-ligatures:none]">
                    monrovia hustle<span className="text-muted-foreground/90"> </span>
                    <span className="text-[0.92em] text-muted-foreground">3d</span>
                  </h1>
                  <p className="mt-5 text-[15px] font-medium leading-[1.65] text-foreground/95 sm:text-[16px] lg:text-[17px] lg:leading-[1.7]">
                    <strong className="text-foreground">Monrovia Hustle 3D</strong> is a playable concept — a vertical slice of the world, systems, and story
                    we want to build at full scale. In plain English:{" "}
                    <span className="text-muted-foreground">
                      a Monrovia-set story game about street hustle, family pressure, and choosing your lane — part open-street slice, part mission-driven
                      drama.
                    </span>
                  </p>
                  <p className="mt-3 text-[13px] italic leading-relaxed text-muted-foreground sm:text-[14px]">
                    Not a finished AAA retail product — an honest prototype to prove direction and gather signal.
                  </p>
                </div>
                <div className="hidden shrink-0 text-right text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:block lg:text-[12px]" style={{ fontFamily: MONO }}>
                  HUIX-2099
                  <br />
                  <span className="opacity-75">concept 01 · archive 2026</span>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap items-center gap-3 lg:mb-10 xl:gap-4">
                <a
                  href={MH_YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 border border-border bg-[#BF0A30] px-5 text-[12px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#a00828]"
                >
                  <Play className="size-4 fill-white" aria-hidden />
                  Watch trailer
                </a>
                <a
                  href={`mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Play%20the%20concept%20%2F%20Wishlist`}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-[#002868]/45 bg-[#002868]/10 px-5 text-[12px] font-bold uppercase tracking-wide text-foreground transition hover:bg-[#002868]/18 dark:border-[#89b8ff]/40 dark:bg-[#10223a]/60 dark:hover:bg-[#10223a]/90"
                >
                  Play the concept · Request access
                </a>
                <Link
                  href="#download"
                  className="inline-flex h-11 items-center justify-center border border-border bg-background px-5 text-[12px] font-semibold uppercase tracking-wide text-foreground transition hover:bg-muted/60"
                >
                  Demo &amp; download
                </Link>
              </div>

              {/* Steam-style hero media (trailer first) */}
              <div className="mb-14 w-full min-w-0 max-w-full rounded-xl border border-border/70 bg-card/40 p-2 shadow-sm backdrop-blur dark:border-border/60 dark:bg-muted/10 lg:mb-16 lg:p-3">
                <ConceptGameplayGallery items={galleryItems} trailerHref={MH_YOUTUBE_URL} variant="hero" />
              </div>

              <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
              <section>
              <SectionTitle>About this concept</SectionTitle>
              <div className="space-y-8 text-[16px] leading-[1.85] text-muted-foreground sm:text-[17px] sm:leading-[1.85] lg:max-w-none">
                <p className="text-foreground/95">
                  <strong className="text-foreground">Label for players:</strong> treat this page and build as{" "}
                  <strong className="text-foreground">concept / early prototype</strong>, not a finished boxed product. Expect a Liberian urban hustle drama in
                  Godot on Windows, with comic sequences, a small 3D hub, and an open-street block — stitched together as a vertical slice.
                </p>
                <p>
                  The{" "}
                  <StoreLink href={MH_HUB}>public hub</StoreLink>{" "}
                  stays lighter on spoilers; here we spell out what&apos;s in the slice, how you&apos;re meant to play it, what comes next, and how partners can
                  reach the studio.
                </p>
              </div>
              </section>

              <section>
              <SectionTitle>What&apos;s in this build</SectionTitle>
              <ul className="max-w-none space-y-3 rounded-xl border border-border/70 bg-card/30 p-6 text-[15px] leading-[1.75] shadow-sm dark:border-border/60 dark:bg-muted/10 sm:p-8 lg:text-[16px]">
                <li className="flex gap-3">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Intended path from the main menu:</strong> Play — content-warning / rating slides — intro comic
                    (slideshow) — <strong className="text-foreground">Jboy&apos;s bedroom</strong> hub (phone, story beats, find the key, exit toward the street) — loading —{" "}
                    <strong className="text-foreground">the Street</strong> open block in third person with interaction prompts and UI hints.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Street loop:</strong> side &ldquo;hustles&rdquo; (pickup / drop-off / bike / street-sell-style zones) that pay{" "}
                    <strong className="text-foreground">LD</strong> and tie into broader Uncle Flomo-style trust in the full design.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Mission spine (concept):</strong> the Tenneh phone thread — talk to Trapper, Tenneh, back to Trapper, Blamo
                    (phone deal / money-split beat with an <strong className="text-foreground">Orange Money–style</strong> flavour), DC Young, Musu, then close with Trapper; waypoint / &ldquo;yellow arrow&rdquo; prompting, <strong className="text-foreground">E to interact</strong>, voiced lines.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Story menu:</strong> &ldquo;Story&rdquo; cards can jump episodes (intro, room, Angel comic, house, street, club, office, opening room) — the full experience is intentionally{" "}
                    <strong className="text-foreground">menu-driven episodes plus the street chain</strong>, not only one straight line.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <span>
                    <strong className="text-foreground">Controls:</strong> keyboard/mouse for this Windows slice; touch and mobile performance are roadmap targets, not promises in this drop.
                  </span>
                </li>
              </ul>
              </section>

              <section>
              <SectionTitle>Roadmap · what&apos;s next</SectionTitle>
              <p className="mb-4 max-w-none text-[15px] leading-[1.8] text-muted-foreground lg:text-[16px]">
                Only items we intend to keep chipping at — not a hype list:
              </p>
              <ul className="max-w-none rounded-xl border border-border/70 bg-card/30 p-6 list-inside list-disc space-y-2 text-[15px] leading-[1.75] text-muted-foreground marker:text-[#BF0A30] shadow-sm dark:border-border/60 dark:bg-muted/10 lg:text-[16px]">
                <li>Mobile-capable build and performance pass once funding allows</li>
                <li>More story chapters, polish passes, and clearer signposting between comic · room · street · club · office modes</li>
                <li>Formal waitlist / newsletter and cleaner installer distribution</li>
                <li>Partners for marketing, localization, and compliance where real brands appear as fiction</li>
              </ul>
              </section>

              <section>
              <SectionTitle>Why it can feel like &ldquo;many demos in one&rdquo;</SectionTitle>
              <div className="max-w-none space-y-4 rounded-xl border border-border/70 bg-card/30 p-6 text-[15px] leading-[1.85] text-muted-foreground shadow-sm dark:border-border/60 dark:bg-muted/10 sm:p-8 lg:text-[16px]">
                <div className="flex gap-3">
                  <Route className="mt-0.5 h-5 w-5 shrink-0 text-[#BF0A30]" aria-hidden />
                  <p>
                    Jumping between comic, bedroom hub, open street, and later club / office beats is a lot of modes for one download. Without heavy
                    hand-holding, some players read that as scattered — for a <strong className="text-foreground">vertical slice</strong>, that&apos;s normal, not a logic failure.
                  </p>
                </div>
                <p>
                  <strong className="text-foreground">Simple genre tag:</strong> story-led 3D third-person life / hustle sim — open(ish) street plus scripted mission chain, light economy (LD / wallet), and branching narrative toward club, uncle, and path choice. Closer to{" "}
                  <strong className="text-foreground">narrative adventure with errands</strong> than a pure shooter or racer.
                </p>
              </div>
              </section>

              <section className="lg:col-span-2">
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

              <section className="lg:col-span-2">
              <SectionTitle>Screenshots &amp; media</SectionTitle>
              <p className="mb-2 max-w-none text-[15px] leading-[1.8] text-muted-foreground lg:text-[16px]">
                Use the carousel above: trailer first, then stills that try to show <strong className="text-foreground/90">character on street, environment reads, HUD / prompts</strong> — not only menus. Quality varies by capture pass; some tiles are workspace references.
              </p>
              </section>

              <section id="about-developer" className="lg:col-span-2 scroll-mt-28">
              <SectionTitle>About the developer</SectionTitle>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="grid w-full min-w-0 grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-3 lg:gap-0 lg:items-stretch lg:p-0">
                  <div className="relative min-h-[20rem] w-full min-w-0 overflow-hidden bg-muted/30 sm:min-h-[22rem] md:min-h-[24rem] lg:min-h-[26rem] lg:border-r lg:border-border">
                    <ClickToViewImage
                      src={VICTOR_IMAGE}
                      alt="Portrait of Victor Edet Coleman"
                      triggerClassName="absolute inset-0 block size-full"
                      viewHintPlacement="bottom"
                    >
                      <Image
                        src={VICTOR_IMAGE}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="(max-width:1024px) 100vw, 33vw"
                        priority={false}
                      />
                    </ClickToViewImage>
                  </div>
                  <div className="flex min-w-0 flex-col justify-center gap-4 lg:border-r lg:border-border lg:px-8 lg:py-10 xl:px-10 xl:py-12">
                    <StoreLink href="/team/victor" className="text-xl font-bold uppercase tracking-tight lg:text-2xl">
                      Victor Edet Coleman
                    </StoreLink>
                    <p className="text-[15px] text-muted-foreground lg:text-base">
                      Founder &amp; CTO — HUIX-2099 · Monrovia, Liberia
                    </p>
                    <p className="text-[15px] leading-[1.85] text-muted-foreground lg:text-[16px] lg:leading-[1.85]">
                      Solo lead on <strong className="text-foreground/90">Monrovia Hustle 3D</strong> — 3D game assets, storytelling, graphics and this site,
                      narrative systems, technical direction, and the rest of the pipeline that gets the concept in players&apos; hands. Thank you to early testers
                      and friends who file bugs and keep receipts honest; you&apos;ll roll into credits as the campaign formalizes. More on the{" "}
                      <StoreLink href="/team">team index</StoreLink>.
                    </p>
                  </div>
                  <div className="flex min-w-0 flex-col justify-center gap-4 lg:px-8 lg:py-10 xl:px-10 xl:py-12">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                      style={{ fontFamily: MONO }}
                    >
                      Find Victor online
                    </p>
                    <a
                      href={VICTOR_GOOGLE_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-muted/25 px-4 py-3 transition hover:border-[#4285F4]/45 hover:bg-muted/45 dark:hover:border-[#4285F4]/35"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background text-[#4285F4] shadow-sm"
                        aria-hidden
                      >
                        <Search className="h-5 w-5" strokeWidth={2.25} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Google</span>
                        <span className="mt-0.5 block text-sm font-semibold leading-snug text-foreground">Victor Edet Coleman</span>
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-70" aria-hidden />
                    </a>
                    <a
                      href={VICTOR_FACEBOOK_REEL_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-muted/25 px-4 py-3 transition hover:border-[#1877F2]/45 hover:bg-muted/45 dark:hover:border-[#1877F2]/35"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background text-[#1877F2] shadow-sm"
                        aria-hidden
                      >
                        <Facebook className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Facebook</span>
                        <span className="mt-0.5 block text-sm font-semibold leading-snug text-foreground">Studio reel</span>
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-70" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
              </section>

              <section id="voice-actors" className="lg:col-span-2 scroll-mt-28">
              <SectionTitle>Voice Actors Cast</SectionTitle>
              <p className="mb-8 max-w-none text-[15px] leading-[1.85] text-muted-foreground lg:mb-10 lg:text-[16px]">
                Voice talent bringing Monrovia Hustle 3D characters to life. Casting remains open — contact via Facebook, socials &amp; Gmail on each profile card.
              </p>
              <div className="grid w-full min-w-0 grid-cols-1 justify-items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7 md:gap-8">
                {CAST.map((c, idx) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    className="group relative flex min-h-0 w-full max-w-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card via-card/95 to-muted/30 shadow-sm ring-1 ring-black/[0.03] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#BF0A30]/40 hover:shadow-lg hover:shadow-[#BF0A30]/[0.08] dark:from-card/80 dark:via-card/60 dark:to-muted/25 dark:ring-white/[0.04] dark:hover:border-[#BF0A30]/35 dark:hover:shadow-[#000]/40"
                  >
                    <div
                      className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-[#BF0A30] via-[#002868] to-[#BF0A30] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-muted/50">
                      <Image
                        src={c.imageSrc}
                        alt={c.imageAlt}
                        fill
                        className={cn(
                          "object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.03]",
                          "hoverImageSrc" in c && "group-hover:opacity-0"
                        )}
                        sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                      />
                      {"hoverImageSrc" in c && (
                        <Image
                          src={c.hoverImageSrc as string}
                          alt={`${c.name} — hover view`}
                          fill
                          className="absolute inset-0 object-cover object-top transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                          sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                        />
                      )}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pt-16" />
                      <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground drop-shadow-sm">
                        {c.name} · VOICE
                      </span>
                      <MonroviaGameLogoMark />
                    </div>
                    <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="text-lg font-black uppercase tracking-tight text-foreground sm:text-xl">{c.name}</h3>
                      </div>
                      <p className="text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-[#BF0A30] dark:text-[#ff6b6b]" style={{ fontFamily: MONO }}>
                        {c.role}
                      </p>
                      <p className="mt-3 text-sm font-semibold italic leading-snug text-foreground/95 sm:text-base">&ldquo;{c.epithet}&rdquo;</p>
                      <div className="mt-auto pt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#BF0A30] dark:text-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View Profile</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              </section>

              <section id="artists" className="lg:col-span-2 scroll-mt-28">
              <div className="mb-6 flex items-center gap-4 lg:mb-8 lg:gap-6">
                <Palette className="h-7 w-7 shrink-0 text-[#BF0A30]" aria-hidden />
                <h2
                  className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:text-[#89b8ff] lg:text-xs"
                  style={{ fontFamily: MONO }}
                >
                  Art &amp; artists
                </h2>
                <div className="h-px min-w-[2rem] flex-1 bg-foreground/10 dark:bg-foreground/15" aria-hidden />
              </div>
              <p className="mb-8 max-w-none text-[15px] leading-[1.85] text-muted-foreground lg:mb-10 lg:text-[16px]">
                Who&apos;s responsible for how the slice <strong className="text-foreground/90">reads on screen</strong> — not in-fiction characters (see{" "}
                <a href="#cast" className="font-medium text-[#002868] underline decoration-[#002868]/35 underline-offset-2 dark:text-[#89b8ff]">
                  Cast
                </a>
                ), but the people steering art direction, key art, and future collaborator credits.
              </p>
              <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:gap-8">
                {ARTISTS.map((a) => (
                  <article
                    key={a.name}
                    className="group flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card via-card/95 to-muted/30 shadow-sm ring-1 ring-black/[0.03] dark:from-card/80 dark:via-card/60 dark:to-muted/25 dark:ring-white/[0.04] sm:flex-row"
                  >
                    <div className="relative aspect-[16/10] w-full min-w-0 shrink-0 overflow-hidden bg-muted/50 sm:w-2/5 lg:w-1/3">
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
                          className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] bg-muted/30"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 40vw, 33vw"
                        />
                      </ClickToViewImage>
                      <MonroviaGameLogoMark />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                      <h3 className="text-lg font-black uppercase tracking-tight text-foreground sm:text-xl lg:text-2xl">{a.name}</h3>
                      <p
                        className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-[#002868] dark:text-[#89b8ff]"
                        style={{ fontFamily: MONO }}
                      >
                        {a.discipline}
                      </p>
                      <p className="mt-4 text-[13px] leading-[1.75] text-muted-foreground sm:text-[14px] sm:leading-[1.8] lg:text-[15px] lg:leading-[1.8]">{a.body}</p>
                      {a.href ? (
                        <StoreLink href={a.href} className="mt-5 inline-flex w-fit text-[13px] font-semibold">
                          Team profile →
                        </StoreLink>
                      ) : (
                        <p className="mt-5 text-[11px] font-medium italic text-muted-foreground sm:text-[12px]">Credits update as partners join — no implied endorsement yet.</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
              </section>

              <section className="lg:col-span-2">
              <SectionTitle>Partners &amp; investors</SectionTitle>
              <div className="max-w-none space-y-6 border border-border bg-[#002868]/[0.06] p-7 text-[15px] leading-[1.85] dark:bg-[#10223a]/50 sm:p-9 lg:text-[16px]">
                <div className="flex gap-3">
                  <Scale className="mt-0.5 h-5 w-5 shrink-0 text-[#BF0A30]" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">Problem / opportunity</p>
                    <p className="mt-2 text-muted-foreground">
                      West African cities — and Monrovia specifically — are under-represented as lived-in spaces in story-led games. A hustle-forward urban
                      drama with real cultural texture addresses players and press hungry for that authenticity, without defaulting to Hollywood clichés.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">What we&apos;re looking for</p>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground marker:text-[#002868] dark:marker:text-[#89b8ff]">
                    <li>
                      <strong className="text-foreground">Funding:</strong> early-stage / project-scale conversations to move from solo prototype to a shippable
                      slice and small team (specific rounds discussed privately).
                    </li>
                    <li>
                      <strong className="text-foreground">Collaborators:</strong> character art, environment polish, engineering for performance and mobile, audio
                      production.
                    </li>
                    <li>
                      <strong className="text-foreground">Distribution:</strong> platform and marketing partners who understand narrative indies and emerging
                      markets — not vague &ldquo;support,&rdquo; but concrete paths to players.
                    </li>
                  </ul>
                </div>
                <p className="text-[14px] text-muted-foreground">
                  Contact:{" "}
                  <a href={`mailto:${STUDIO_EMAIL}`} className="font-medium text-[#002868] underline dark:text-[#89b8ff]">
                    {STUDIO_EMAIL}
                  </a>
                  {" · "}
                  Socials in the sidebar — no implied endorsement by real-world brands referenced in-fiction unless we publish a formal partnership.
                </p>
              </div>
              </section>

              <section className="lg:col-span-2">
              <SectionTitle>System requirements (prototype)</SectionTitle>
              <div className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:gap-12">
                <div className="border border-border bg-muted/40 p-7 text-[13px] dark:bg-card/70 lg:p-9 lg:text-[14px]">
                  <p className="mb-6 flex items-center gap-2 font-bold uppercase tracking-wider text-foreground" style={{ fontFamily: MONO }}>
                    <Monitor className="h-4 w-4 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                    Minimum
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <span className="text-muted-foreground">OS:</span> Windows 10 (64-bit) or newer
                    </li>
                    <li>
                      <span className="text-muted-foreground">Processor:</span> Dual-core concept build
                    </li>
                    <li>
                      <span className="text-muted-foreground">Memory:</span> 8 GB RAM
                    </li>
                    <li>
                      <span className="text-muted-foreground">Graphics:</span> DirectX 11 class GPU
                    </li>
                    <li className="flex gap-2">
                      <HardDrive className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                      <span>
                        <span className="text-muted-foreground">Storage:</span> TBD — installer ships via studio email
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="border border-border bg-muted/40 p-7 text-[13px] dark:bg-card/70 lg:p-9 lg:text-[14px]">
                  <p className="mb-6 flex items-center gap-2 font-bold uppercase tracking-wider text-foreground" style={{ fontFamily: MONO }}>
                    <Cpu className="h-4 w-4 text-[#BF0A30]" aria-hidden />
                    Recommended
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <span className="text-muted-foreground">OS:</span> Windows 11
                    </li>
                    <li>
                      <span className="text-muted-foreground">Processor:</span> Quad-core
                    </li>
                    <li>
                      <span className="text-muted-foreground">Memory:</span> 16 GB RAM
                    </li>
                    <li>
                      <span className="text-muted-foreground">Graphics:</span> GTX 1060 / RX 580 class or better
                    </li>
                  </ul>
                </div>
              </div>
              </section>

              <section className="lg:col-span-2">
              <SectionTitle>Community &amp; backers</SectionTitle>
              <div className="rounded-sm border border-[#002868]/25 bg-[#002868]/[0.07] p-7 dark:border-[#4a7ab8]/30 dark:bg-[#10223a]/90 lg:p-9">
                <HeartHandshake className="mb-3 h-8 w-8 text-[#BF0A30]" aria-hidden />
                <p className="max-w-2xl text-[14px] leading-relaxed text-muted-foreground lg:text-[15px] lg:leading-[1.85]">
                  Backers and collaborators roll into credits and partner strips as the campaign formalizes. Drop a donation or join the mailing
                  thread via demo access.
                </p>
                <StoreLink href="/products/monrovia-hustle/donate" className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  Support the campaign <ArrowRight className="h-4 w-4" />
                </StoreLink>
              </div>
              </section>
              </div>
            </div>

            <aside className="hidden min-w-0 w-full max-w-full space-y-8 xl:block xl:max-w-[420px] xl:shrink-0">
              <div className="xl:sticky xl:top-28 xl:space-y-8">
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
            </aside>
          </div>

          {/* Bottom “Steam purchase bar” analogue */}
          <section id="download" className="scroll-mt-28 mt-14 border-t border-border bg-muted/30 px-5 py-8 dark:bg-muted/20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
                  Concept build · demo / press
                </p>
                <h2 className="mt-2 text-xl font-bold uppercase tracking-tight text-foreground">Play the concept · get access</h2>
                <p className="mt-2 max-w-xl text-[14px] text-muted-foreground">
                  Windows installers ship when QA clears. Email for invite links, wishlist placement, or a supervised walkthrough — not a mass-market store drop yet.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href={`mailto:${STUDIO_EMAIL}?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Demo%20%2F%20Press`}
                  className="inline-flex items-center gap-2 bg-[#BF0A30] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-sm hover:bg-[#a00828]"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Request concept build
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-foreground transition hover:bg-muted/50"
                >
                  Contact studio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <div
            className="mt-10 max-w-3xl space-y-3 border-t border-border pt-8 text-[11px] leading-relaxed text-muted-foreground"
            aria-label="Legal and privacy notes"
          >
            <p>
              <strong className="text-foreground/85">Privacy:</strong> Demo requests and wishlist replies use studio email ({STUDIO_EMAIL}); we
              don&apos;t sell addresses. If we add analytics or marketing capture, we&apos;ll publish a short policy on this site.
            </p>
            <p>
              <strong className="text-foreground/85">Trademarks:</strong> Names of real companies, carriers, or payment brands (e.g. Orange Money) that
              appear in dialogue or UI are fictional uses for world-building; trademarks belong to their owners and do not imply partnership or
              endorsement unless we state otherwise.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
