import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConceptGameplayGallery, type ConceptGalleryItem } from "@/components/monrovia-hustle/concept-gameplay-gallery"
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Concept 01 — Monrovia Hustle 3D | HUIX-2099",
  description:
    "Store-style concept profile for Monrovia Hustle 3D: gameplay media, screenshots, specs, narrative urban RPG hub — HUIX-2099.",
}

const MH_YOUTUBE_URL = "https://www.youtube.com/@HUIX-2099"
const MH_HUB = "/products/monrovia-hustle"
const VICTOR_IMAGE = "/Team/VICTOR.jpeg"
const CAPSULE_ART = "/products/Monrovia_hustle_Demo_Campane/herosection.png"
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

const WORKSPACE_DIR = "/products/Monrovia_hustle_Demo_Campane/images"

const WORKSPACE_FILES = [
  "WhatsApp Image 2026-05-04 at 11.57.51 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM.jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (1).jpeg",
  "WhatsApp Image 2026-05-04 at 11.57.52 PM (2).jpeg",
] as const

function ws(name: string) {
  return `${WORKSPACE_DIR}/${encodeURIComponent(name)}`
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

const socialChannels = [
  { label: "X / Twitter", href: "https://x.com/Huix2099", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/huix.2099/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572485499528", icon: Facebook },
  { label: "YouTube", href: MH_YOUTUBE_URL, icon: Youtube },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
]

const TAGS = ["Single-player", "Slice-of-life", "Narrative", "Open world", "Liberia", "Godot", "Comic story", "Street RPG"]

const CAST = [
  {
    name: "Jboy",
    role: "Playable protagonist · Jayboy",
    epithet: "Sidewalk calculus",
    body: [
      "Twenty-four on a thin wage. Carey and Benson know his stride — hustle as survival math, receipts as morality.",
      "Caught between grounded sense at home and the corner’s louder offers; every mission is another line in the ledger of who he’s becoming.",
    ],
  },
  {
    name: "Angel",
    role: "Ex · emotional anchor arc",
    epithet: "Love priced in LD",
    body: [
      "Walks truth about stability and ambition; the fallout that strands Jboy on pavement is chapter one gravity, not melodrama wallpaper.",
      "Her dialogue trees push tone — tenderness, exhaustion, receipts — forcing the comic panels to breathe like real conversations.",
    ],
  },
  {
    name: "Thomas",
    role: "Street operator · connect",
    epithet: "Fast talk, slower trust",
    body: [
      "Knows every shortcut between Broad and Benson; runs errands into favours — the kind that teach you downtown doesn’t forgive noise.",
      "Expect branching missions that treat him like a hinge: help him, fleece him, or ghost him — the city adjusts its voice lines accordingly.",
    ],
  },
  {
    name: "Jonnet",
    role: "Network · pressure / payoff",
    epithet: "Corner memory",
    body: [
      "Holds rumours like currency — who owes, who flips phones, whose cousin heard Uncle Flomo’s desk creak.",
      "Use her intel to stack LD or gamble reputation; epic beats land when alley gossip upgrades into storyline collision.",
    ],
  },
]

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4 lg:gap-6">
      <h2 className="whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.12em] text-[#002868] dark:text-[#89b8ff] lg:text-xs" style={{ fontFamily: MONO }}>
        {children}
      </h2>
      <div className="h-px min-w-[2rem] flex-1 bg-foreground/[0.115] dark:bg-foreground/[0.12]" aria-hidden />
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

      <main className="pb-28 pt-[5.75rem] sm:pt-28 lg:pb-36">
        <div className="mx-auto w-full max-w-[min(100vw-2rem,1560px)] px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 2xl:px-32">
          <Link
            href={MH_HUB}
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-[#002868] lg:mb-12 dark:hover:text-[#89b8ff]"
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All games · Hub
          </Link>

          <div className="flex flex-col gap-14 xl:flex-row xl:items-start xl:gap-16 2xl:gap-24">
            {/* Main column — video first like Steam */}
            <div className="min-w-0 flex-1">
              {/* Store title row */}
              <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-b border-border pb-8 lg:mb-12 lg:pb-10 xl:gap-x-16">
                <div className="max-w-none lg:max-w-[52rem] xl:max-w-none">
                  <h1 className="text-[clamp(1.85rem,3.8vw,3.35rem)] font-normal lowercase leading-[1.08] tracking-tight text-foreground [font-variant-ligatures:none]">
                    monrovia hustle<span className="text-muted-foreground/90"> </span>
                    <span className="text-[0.92em] text-muted-foreground">3d</span>
                  </h1>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px] lg:text-base">
                    <span className="text-[#002868] dark:text-[#89b8ff]">Concept prototype</span>
                    {" · "}Slice-of-life narrative urban RPG · Godot · Windows
                  </p>
                  <p className="mt-3 text-[14px] italic leading-relaxed text-muted-foreground sm:text-[15px]">&ldquo;Warning this is a concept.&rdquo;</p>
                </div>
                <div className="hidden shrink-0 text-right text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:block lg:text-[12px]" style={{ fontFamily: MONO }}>
                  HUIX-2099
                  <br />
                  <span className="opacity-75">concept 01 · archive 2026</span>
                </div>
              </div>

              {/* Steam-style hero media (trailer first) */}
              <div className="mb-14 rounded-sm border border-border bg-muted/20 p-2 shadow-sm dark:bg-muted/15 lg:mb-20 lg:p-3">
                <ConceptGameplayGallery items={galleryItems} trailerHref={MH_YOUTUBE_URL} variant="hero" />
              </div>

              <div className="space-y-16 lg:space-y-24 xl:space-y-28 [&>*:first-child]:pt-0">
              <section>
              <SectionTitle>About this game</SectionTitle>
              <div className="space-y-6 text-[16px] leading-[1.85] text-muted-foreground sm:text-[17px] sm:leading-[1.85] lg:max-w-[56rem] xl:max-w-[62rem]">
                <p>
                  Concept build on PC (Godot): voiced NPC corridors, branching hustle beats, illustrated comic passages, and sandbox movement through a stylized Monrovia grid. The sections below unpack the synopsis, cast bible, and media — intended for dossier readers; the{' '}
                  <StoreLink href={MH_HUB}>public hub</StoreLink>{' '}
                  stays lighter on plot specifics.
                </p>
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

              <section>
              <SectionTitle>Screenshots &amp; media</SectionTitle>
              <p className="mb-2 max-w-[56rem] text-[15px] leading-[1.8] text-muted-foreground lg:text-[16px] xl:max-w-[62rem]">
                Swap tiles on the carousel above — the first thumbnail is always the cinematic hook; remaining frames are workspace and in-progress
                capture (quality varies by slice).
              </p>
              </section>

              <section>
              <SectionTitle>About these characters</SectionTitle>
              <p className="mb-10 max-w-[56rem] text-[15px] leading-[1.85] text-muted-foreground lg:mb-12 lg:text-[16px] xl:max-w-[62rem]">
                Lore bible entries — voice talent TBA. Casting inquiries through studio socials or the demo mail thread below.
              </p>
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12 xl:grid-cols-2 xl:gap-x-14 xl:gap-y-12">
                {CAST.map((c) => (
                  <article
                    key={c.name}
                    className="border border-border bg-card p-7 shadow-sm sm:p-9 lg:p-10"
                  >
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground lg:text-2xl">{c.name}</h3>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#002868] dark:text-[#89b8ff] lg:text-[11px]" style={{ fontFamily: MONO }}>
                      {c.role}
                    </p>
                    <p className="mt-4 text-base font-semibold italic leading-snug text-foreground/90 lg:text-lg">{c.epithet}</p>
                    <div className="mt-6 space-y-5 border-t border-border/60 pt-6 text-[15px] leading-[1.85] text-muted-foreground lg:text-[16px] lg:leading-[1.88]">
                      {c.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              </section>

              <section>
              <SectionTitle>About the developer</SectionTitle>
              <div className="flex flex-col gap-10 border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-start lg:gap-12 lg:p-10 xl:p-12">
                <div className="relative h-48 w-full shrink-0 overflow-hidden border border-border sm:h-52 sm:w-44 lg:h-56 lg:w-48">
                  <Image src={VICTOR_IMAGE} alt="Victor Edet Coleman" fill className="object-cover object-top" sizes="(max-width:640px) 100vw, 192px" />
                </div>
                <div className="min-w-0 max-w-none flex-1 space-y-4 lg:max-w-[42rem]">
                  <StoreLink href="/team/victor" className="text-xl font-bold uppercase tracking-tight lg:text-2xl">
                    Victor Edet Coleman
                  </StoreLink>
                  <p className="text-[15px] text-muted-foreground lg:text-base">Founder &amp; CTO — HUIX-2099 · Monrovia, Liberia</p>
                  <p className="text-[15px] leading-[1.85] text-muted-foreground lg:text-[16px] lg:leading-[1.85]">
                    Narrative systems and technical direction on Monrovia Hustle 3D. More team context on the{" "}
                    <StoreLink href="/team">team index</StoreLink>.
                  </p>
                </div>
              </div>
              </section>

              <section>
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

              <section>
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

            {/* Sidebar — store column */}
            <aside className="w-full shrink-0 xl:w-[380px] xl:sticky xl:top-28 xl:self-start">
              <div className="border border-border bg-card shadow-sm">
                <div className="relative aspect-[2/3] w-full overflow-hidden border-b border-border">
                  <Image src={CAPSULE_ART} alt="Monrovia Hustle 3D capsule" fill className="object-cover object-top" sizes="380px" />
                </div>

                <div className="space-y-4 p-4">
                  <a
                    href={MH_YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2 border border-black/15 bg-muted/90 text-[13px] font-semibold uppercase tracking-wide text-foreground shadow-sm transition hover:bg-muted dark:border-white/10"
                  >
                    <Play className="size-5 fill-[#BF0A30] text-[#BF0A30]" aria-hidden />
                    Play video
                  </a>
                  <p className="text-[13px] leading-[1.6] text-muted-foreground">
                    &ldquo;Warning this is a concept.&rdquo; Branching hustle, LD economy, and comic beats in a Super-Liberia sandbox.
                  </p>

                  <div className="space-y-2 text-[12px]">
                    <div className="flex gap-2">
                      <span className="w-[88px] shrink-0 text-muted-foreground">Developer</span>
                      <StoreLink href="/team" className="font-medium">
                        HUIX-2099
                      </StoreLink>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-[88px] shrink-0 text-muted-foreground">Publisher</span>
                      <span className="text-foreground/90">HUIX-2099</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-[88px] shrink-0 text-muted-foreground">Release</span>
                      <span className="text-foreground/90">In active development · 2026 concept</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {TAGS.map((t) => (
                        <span
                          key={t}
                          className="inline-block rounded-[1px] border border-border bg-muted/80 px-2 py-0.5 text-[11px] text-foreground/90"
                          style={{ fontFamily: MONO }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2 border-y border-border py-4">
                    <a
                      href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Wishlist%20%2F%20Demo"
                      className="flex h-11 items-center justify-center gap-2 bg-[#BF0A30] text-[12px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-800"
                    >
                      <span className="text-lg leading-none">+</span>
                      Request demo
                    </a>
                    <Link
                      href="#download"
                      className="flex h-11 items-center justify-center border border-border bg-background text-[12px] font-semibold uppercase tracking-wide text-foreground transition hover:bg-muted/60"
                    >
                      Demo details
                    </Link>
                  </div>

                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
                      Follow &amp; share
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {socialChannels.map((s) => {
                        const Ico = s.icon
                        return (
                          <a
                            key={s.href}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-border bg-muted/50 text-muted-foreground transition hover:border-[#002868]/35 hover:text-[#002868] dark:hover:text-[#89b8ff]"
                            aria-label={s.label}
                          >
                            <Ico className="h-4 w-4" />
                          </a>
                        )
                      })}
                    </div>
                    <p className="mt-3 text-[11px] text-muted-foreground">
                      Web:{" "}
                      <a href="mailto:huixtech2099@gmail.com" className="text-[#002868] underline dark:text-[#89b8ff]">
                        huixtech2099@gmail.com
                      </a>
                    </p>
                  </div>

                  <a
                    href={MH_YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-sm border border-border bg-muted/40 px-3 py-2.5 text-[12px] text-foreground transition hover:bg-muted/55"
                  >
                    <Youtube className="h-5 w-5 shrink-0 text-[#BF0A30]" aria-hidden />
                    View all trailers &amp; shorts
                  </a>
                  <StoreLink href={MH_HUB} className="block text-center text-[12px] font-medium">
                    Hub overview page →
                  </StoreLink>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom “Steam purchase bar” analogue */}
          <section id="download" className="scroll-mt-28 mt-14 border-t border-border bg-muted/30 px-5 py-8 dark:bg-muted/20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: MONO }}>
                  Demo / press
                </p>
                <h2 className="mt-2 text-xl font-bold uppercase tracking-tight text-foreground">Get the playable slice</h2>
                <p className="mt-2 max-w-xl text-[14px] text-muted-foreground">
                  Windows installers ship once QA clears. Ask for invite links or schedule a supervised build walkthrough.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="mailto:huixtech2099@gmail.com?subject=Monrovia%20Hustle%203D%20%E2%80%94%20Demo%20%2F%20Press"
                  className="inline-flex items-center gap-2 bg-[#BF0A30] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-sm hover:bg-[#a00828]"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Request demo
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
