import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { FranchiseShell } from "@/components/monrovia-hustle/franchise-shell"
import { ConceptDownloadButton } from "@/components/monrovia-hustle/concept-download-button"
import { IdeDownloadPanel } from "@/components/monrovia-hustle/ide-download-button"
import { AmbientVideo } from "@/components/ambient-video"
import { ScanCode } from "@/components/monrovia-hustle/scan-code"
import { BrandLogo } from "@/components/monrovia-hustle/brand-icons"
import { MH_PALETTE } from "@/components/monrovia-hustle/hustle-brand"
import { monroviaCastMembers } from "@/lib/monrovia-hustle/voice-cast"
import { monroviaConceptArtists, monroviaConceptArtistPageHref } from "@/lib/monrovia-hustle/concept-artists"
import {
  MH_BASE,
  MH_EMAIL,
  MH_FACEBOOK,
  MH_PHONE,
  MH_TRAILER_YOUTUBE_ID,
  MH_TRAILER_YOUTUBE_URL,
  MH_YOUTUBE,
} from "@/lib/monrovia-hustle/franchise"
import {
  MH_IDE_CREATOR_IMAGE,
  MH_IDE_CREATOR_NAME,
  MH_IDE_CREATOR_PATH,
  MH_IDE_CREATOR_ROLE,
  MH_IDE_DOC_ID,
  MH_IDE_HERO,
  MH_IDE_LOADING,
  MH_IDE_PAYMENT_MSISDN_DISPLAY,
  MH_IDE_PAYMENT_MSISDN_TEL,
  MH_IDE_PAYMENT_NOTE,
  MH_IDE_PILLARS,
  MH_IDE_ROADMAP,
  MH_IDE_SETTINGS_VIDEO,
  MH_IDE_SUBTAG,
  MH_IDE_TAGLINE,
  MH_IDE_TRAILER_YOUTUBE_ID,
  MH_IDE_TRAILER_YOUTUBE_URL,
  MH_IDE_TSHIRT_PRICE_USD,
  MH_IDE_TSHIRT_SKU,
  MH_IDE_TSHIRT_VIDEO,
  MH_IDE_WHATSAPP_URL,
} from "@/lib/monrovia-hustle-independence"
import "@/components/monrovia-hustle/prototype-lab.css"

const [BLUE, PURPLE, GREEN, RED] = MH_PALETTE.map((paint) => paint.color)
const ASSETS = "/products/Monrovia_hustle_Demo_Campane"
const JBOY_ART = `${ASSETS}/${encodeURIComponent("Monrovia Hustle 3D playable concept — 1 GAME JAY BOY.jpg")}`
const JBOY_RENDER = `${ASSETS}/cast_concept/CHARACTERS/JAYBOY.jpeg`
/** The mobile field-test capture with the voice cast (same video as the old concept page). */
const VOICE_CAST_VIDEO_ID = "tSBJfEjlklk"

// ── Experiment 01: Monrovia Hustle 3D, J-Boy's story ─────────────────────

const JBOY_SPECS = [
  ["Type", "3D narrative RPG · open city"],
  ["Lead", "Jayboy (J-Boy), 24"],
  ["Setting", "Carey & Benson streets, downtown Monrovia"],
  ["Voices", "Liberian English & Krio"],
  ["Build", "Windows · tested on mobile"],
  ["Status", "Playable concept · vertical slice"],
] as const

const JBOY_FEATURES = [
  ["Urban Liberia flavour", "A stylized coastal capital sandbox — neighbourhoods, markets and back routes you can roam."],
  ["Dynamic street life", "Voiced NPCs, market energy, ambient pressure lines — the city reacts around you."],
  ["Comic-book story", "Emotional beats blend illustrated comics with 3D gameplay."],
  ["Real choices", "Branching dialogue — tough on the corner or low-key. The city remembers how you hustle."],
  ["Live the hustle", "Chase Liberian Dollars, errands and side moves; flip value into wardrobe and new paths."],
  ["Liberian voice cast", "Liberian English and Krio performances from a local cast, mixed in-engine."],
] as const

const JBOY_NOTES = [
  [
    "Vision first",
    "A playable concept: a vertical slice of Monrovia flavour, the hustle loop, feel and world we intend to scale with stronger tools, more time and a team.",
  ],
  [
    "What you're really seeing",
    "Not a AAA-studio product. A proof of concept built solo on tight hardware, made to show the direction clearly without overpromising a finished game.",
  ],
  [
    "On the workstation",
    "An i7 with 4 GB of RAM. Lean scenes, compressed audio and textures, and testing on a minimum-spec profile are part of the discipline.",
  ],
  [
    "What we're looking for",
    "Partners and investors who care about representation and West African urban stories — funding, polish and distribution.",
  ],
] as const

const JBOY_GOALS = [
  "Downloads and plays of the build",
  "Watch time on the trailer, session length",
  "A short survey: would you play weekly?",
  "Waitlist interest for a mobile release",
  "One tight 30–60 s trailer that sells the promise",
]

/** "Voice Actor · Trapper" → "Trapper"; "Founder & CTO · Voice — Jayboy (Jboy)" → "Jayboy (Jboy)". */
const characterOf = (role: string) => role.split("·").pop()!.replace("Voice —", "").trim()

const VOICES = monroviaCastMembers.filter((member) => member.lane === "voice")
const AUDIO = monroviaCastMembers.filter((member) => member.lane === "audio")

// ── Shared bits, in the franchise home page's own type ───────────────────

function Eyebrow({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {color ? <span aria-hidden className="h-1.5 w-1.5" style={{ background: color }} /> : null}
      {children}
    </p>
  )
}

function Heading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.045em] ${className}`}>
      {children}
    </h2>
  )
}

function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-[1320px] scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 lg:px-16 ${className}`}>
      {children}
    </section>
  )
}

function Trailer({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-black">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </div>
  )
}

function TextLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const className = "inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  )
}

/** The dark title card that opens each experiment. */
function Opener({
  id,
  num,
  color,
  art,
  artAlt,
  title,
  kicker,
  specs,
}: {
  id: string
  num: string
  color: string
  art: string
  artAlt: string
  title: string
  kicker: string
  specs: readonly (readonly [string, string])[]
}) {
  return (
    <section id={id} className="mh-lab mh-lab--opener scroll-mt-24" style={{ ["--c" as string]: color }} aria-labelledby={`${id}-title`}>
      <div className="mh-lab__art">
        <Image src={art} alt={artAlt} fill sizes="(max-width: 900px) 100vw, 68vw" />
      </div>
      <p className="mh-lab__corner mh-lab__corner--tl">
        Experiment {num}
        <br />
        Early development
      </p>
      <div className="mh-lab__opener">
        <span className="mh-lab__num" aria-hidden>
          {num}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="mh-lab__kicker">{kicker}</p>
        <dl className="mh-lab__specs">
          {specs.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default function MonroviaHustlePrototypePage() {
  const orderMail = `mailto:${MH_EMAIL}?subject=${encodeURIComponent("Monrovia Hustle IDE T-Shirt Order")}&body=${encodeURIComponent(
    `Payment sent via Mobile Money / Orange Money.\nAmount: $${MH_IDE_TSHIRT_PRICE_USD} USD\nReference: ${MH_IDE_PAYMENT_NOTE}\n\nName:\nSize:\nDelivery contact:\nTransaction ID:`,
  )}`

  const ideSpecs = [
    ["Type", "Keke racing art game"],
    ["Made for", "Liberia Independence Day · 26 July 2026"],
    ["Builds", "Windows · Android APK"],
    ["Created by", MH_IDE_CREATOR_NAME],
    ["Status", `Active development · ${MH_IDE_DOC_ID}`],
    ["Motto", MH_IDE_TAGLINE],
  ] as const

  return (
    <FranchiseShell>
      {/* ═══ Opening: what this page is ═══ */}
      <section className="mh-lab mh-lab--hero" aria-labelledby="mh-lab-title">
        <p className="mh-lab__corner mh-lab__corner--tl">
          HUIX-2099 · Monrovia Hustle
          <br />
          Experiment prototypes
        </p>
        <p className="mh-lab__corner mh-lab__corner--tr">
          02 experiments
          <br />
          Not the official game
        </p>

        <div className="mh-lab__title-wrap">
          <p className="mh-lab__eyebrow">The road to Monrovia Hustle</p>
          <h1 id="mh-lab-title" className="mh-lab__title">
            Experi-
            <br />
            ments<span aria-hidden>.</span>
          </h1>
          <span className="mh-lab__bar" aria-hidden>
            {MH_PALETTE.map((paint) => (
              <i key={paint.name} style={{ background: paint.color }} />
            ))}
          </span>
          <p className="mh-lab__caption">
            Two early builds from before the official game: <strong>J-Boy&apos;s story</strong> in 3D and the{" "}
            <strong>Independence Day</strong> keke race. Raw, playable and unfinished — this is where we tested the city, the voices
            and the hustle.
          </p>
        </div>

        <div className="mh-lab__cards">
          <a href="#monrovia-hustle-3d" className="mh-lab__card" style={{ ["--c" as string]: BLUE }}>
            <div className="mh-lab__card-art">
              <Image src={JBOY_ART} alt="Jayboy, the lead of Monrovia Hustle 3D" fill sizes="(max-width: 900px) 70vw, 25vw" className="object-cover object-top" />
            </div>
            <div className="mh-lab__card-copy">
              <p>Experiment 01</p>
              <h2>Monrovia Hustle 3D</h2>
            </div>
          </a>
          <a href="#independence-day" className="mh-lab__card" style={{ ["--c" as string]: RED }}>
            <div className="mh-lab__card-art">
              <Image src={MH_IDE_LOADING} alt="Independence Day Edition loading screen art" fill sizes="(max-width: 900px) 70vw, 25vw" className="object-cover" />
            </div>
            <div className="mh-lab__card-copy">
              <p>Experiment 02</p>
              <h2>Independence Day Edition</h2>
            </div>
          </a>
        </div>

        <ul className="mh-lab__corner mh-lab__corner--bl mh-lab__index">
          <li>
            <a href="#monrovia-hustle-3d" style={{ ["--c" as string]: BLUE }}>
              01 · J-Boy 3D
            </a>
          </li>
          <li>
            <a href="#independence-day" style={{ ["--c" as string]: RED }}>
              02 · Independence Day
            </a>
          </li>
          <li>
            <a href="#credits" style={{ ["--c" as string]: "#f4f1ea" }}>
              Credits
            </a>
          </li>
        </ul>
        <Link href={MH_BASE} className="mh-lab__corner mh-lab__corner--br inline-flex items-center gap-2 no-underline hover:underline">
          The official game
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <div className="mh-lab__scroll" aria-hidden>
          <span />
        </div>
      </section>

      {/* A plain word on what these are */}
      <Section className="!py-12 sm:!py-16">
        <div className="flex flex-col gap-6 rounded-2xl border border-border p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Read this first</Eyebrow>
            <p className="mt-3 text-[clamp(1.25rem,2.2vw,1.7rem)] font-semibold leading-[1.2] tracking-[-0.03em]">
              These are experiments, not the official Monrovia Hustle. They are how a small studio in Monrovia learned what the game should be.
            </p>
          </div>
          <TextLink href={MH_BASE}>See the official game</TextLink>
        </div>
      </Section>

      {/* ═══ Experiment 01 ═══ */}
      <Opener
        id="monrovia-hustle-3d"
        num="01"
        color={BLUE}
        art={JBOY_RENDER}
        artAlt="Jayboy, the lead of Monrovia Hustle 3D, as a 3D character render"
        title="Monrovia Hustle 3D"
        kicker="J-Boy's story · How da body?"
        specs={JBOY_SPECS}
      />

      <Section id="trailer">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Eyebrow color={BLUE}>The story</Eyebrow>
            <Heading>Twenty-four, broke, and freshly dumped on Carey Street.</Heading>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>
                <strong className="text-foreground">Jayboy</strong> — J-Boy — is navigating a tough economy in downtown Monrovia. When his
                girlfriend <strong className="text-foreground">Angel</strong> breaks up with him over money and stability, he lands on the
                unforgiving pavement of Carey and Benson streets.
              </p>
              <p>
                Caught between his mother&apos;s grounded wisdom and the fast-money pull of the corner boys, he moves through the city grid.
                Take shady missions from fast-talkers like <strong className="text-foreground">Trapper</strong>, or stack Liberian Dollars,
                dress sharp, and aim for a real seat at <strong className="text-foreground">Uncle Flomo&apos;s</strong> desk.
              </p>
            </div>
            <div className="mt-8 max-w-md">
              <ConceptDownloadButton variant="compact" className="w-full" />
            </div>
          </div>
          <div>
            <Trailer id={MH_TRAILER_YOUTUBE_ID} title="Monrovia Hustle 3D — gameplay trailer" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Gameplay trailer · Experiment 01</p>
              <TextLink href={MH_TRAILER_YOUTUBE_URL} external>
                Watch on YouTube
              </TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Characters and the voices behind them */}
      <section id="voice-actors" className="scroll-mt-28 border-y border-border">
        <span id="cast" className="block scroll-mt-28" aria-hidden />
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow color={BLUE}>Characters &amp; voice cast</Eyebrow>
              <Heading>The faces of the street, and the Liberian voices behind them.</Heading>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(VOICES.length).padStart(2, "0")} voices · Hover a card
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {VOICES.map((member) => (
              <li key={member.id} className="group">
                <Link href={member.href} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-black">
                    {/* The character first; the actor shows on hover. */}
                    <Image
                      src={member.hoverImageSrc ?? member.imageSrc}
                      alt={member.hoverImageAlt ?? member.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                      src={member.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span className="absolute left-3 top-3 h-1 w-8 rounded-full" style={{ background: BLUE }} aria-hidden />
                  </div>
                  <p className="mt-4 text-[17px] font-semibold tracking-[-0.01em]">{characterOf(member.role)}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    Voiced by <span className="text-foreground">{member.name}</span>
                  </p>
                  {member.epithet ? <p className="mt-1 text-[12px] leading-5 text-muted-foreground/80">{member.epithet}</p> : null}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sound, and the cast on a phone */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <Eyebrow color={PURPLE}>Sound &amp; audio</Eyebrow>
              {AUDIO.map((member) => (
                <Link key={member.id} href={member.href} className="group mt-5 flex items-center gap-4">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image src={member.imageSrc} alt={member.imageAlt} fill sizes="64px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block text-[17px] font-semibold tracking-[-0.01em] group-hover:underline">{member.name}</span>
                    <span className="block text-[13px] text-muted-foreground">Sound engineer · capture, mix and clarity</span>
                  </span>
                </Link>
              ))}
              <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
                Mix, capture and in-engine clarity for the prototype — a separate lane from the voice cast. The same slice was also run on a
                phone to prove the hustle loop, the mission chain and the voices hold up on a small screen.
              </p>
            </div>
            <div>
              <Trailer id={VOICE_CAST_VIDEO_ID} title="Monrovia Hustle 3D — mobile field test with the voice cast" />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Mobile field test · not a store build</p>
            </div>
          </div>
        </div>
      </section>

      {/* What you do */}
      <Section>
        <Eyebrow color={BLUE}>What you do</Eyebrow>
        <Heading className="max-w-xl">Live the hustle, one street at a time.</Heading>
        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {JBOY_FEATURES.map(([title, body], i) => (
            <li key={title}>
              <span aria-hidden className="mb-5 block h-[3px] w-14 rounded-full" style={{ background: MH_PALETTE[i % 4].color }} />
              <p aria-hidden className="text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.01em]">{title}</h3>
              <p className="mt-2 max-w-xs text-[13px] leading-6 text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Music & art */}
      <section id="artists" className="scroll-mt-28 border-y border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          {monroviaConceptArtists.map((artist) => (
            <div key={artist.slug} className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <div className="overflow-hidden rounded-2xl border border-border bg-black">
                {"videoSrc" in artist && artist.videoSrc ? (
                  <video src={artist.videoSrc} poster={artist.imageSrc} autoPlay loop muted playsInline controls className="aspect-square w-full object-cover" />
                ) : (
                  <div className="relative aspect-square">
                    <Image src={artist.imageSrc} alt={artist.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                )}
              </div>
              <div>
                <Eyebrow color={GREEN}>Music &amp; marketing partner</Eyebrow>
                <Heading>{artist.name}</Heading>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{artist.discipline}</p>
                <p className="mt-6 text-[15px] leading-7 text-muted-foreground">{artist.summary}</p>
                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                  His record <strong className="text-foreground">African Baddie</strong> is licensed into the game and plays in the club scene.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  <TextLink href={monroviaConceptArtistPageHref(artist.slug)}>Artist page</TextLink>
                  <a
                    href={artist.facebookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
                  >
                    <Facebook className="h-4 w-4" aria-hidden />
                    Facebook
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About this concept */}
      <Section id="concept-notes">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow color={BLUE}>About this concept</Eyebrow>
            <Heading className="max-w-2xl">Serious direction. Early-stage build.</Heading>
          </div>
          <p className="max-w-sm text-[13px] leading-6 text-muted-foreground">
            Critics often mix up <em>not finished</em> with <em>not serious</em>. A vertical slice is meant to be both serious and unfinished.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {JBOY_NOTES.map(([title, body]) => (
            <div key={title} className="bg-background p-7 sm:p-8">
              <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{title}</h3>
              <p className="mt-2 text-[14px] leading-7 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border p-7 sm:p-8">
          <Eyebrow>What the concept launch measures</Eyebrow>
          <ul className="mt-5 grid gap-x-8 gap-y-3 text-[14px] text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
            {JBOY_GOALS.map((goal) => (
              <li key={goal} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0" style={{ background: BLUE }} />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ═══ Experiment 02 ═══ */}
      <Opener
        id="independence-day"
        num="02"
        color={RED}
        art={MH_IDE_HERO}
        artAlt="A green keke under garage lights — Independence Day Edition key art"
        title="Independence Day Edition"
        kicker={`Keke racing · ${MH_IDE_TAGLINE}`}
        specs={ideSpecs}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Eyebrow color={RED}>The brief</Eyebrow>
            <Heading>{MH_IDE_SUBTAG}</Heading>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>
                A Liberian keke racing art game, built around tricycle-taxi culture, festival energy and the hustle to move faster than the
                city allows — timed for Liberia Independence Day, <strong className="text-foreground">26 July 2026</strong>.
              </p>
              <p>
                Race kekes through Monrovia&apos;s corridors. Drums, flags and a crowd at the line, then laps that treat West African streets
                as the main character, not a generic backdrop.
              </p>
            </div>
          </div>
          <div>
            <Trailer id={MH_IDE_TRAILER_YOUTUBE_ID} title="Monrovia Hustle Independence Day Edition — official trailer" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Official trailer · Experiment 02</p>
              <TextLink href={MH_IDE_TRAILER_YOUTUBE_URL} external>
                Watch on YouTube
              </TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Key art, full width */}
      <figure className="relative border-y border-border bg-black">
        <Image
          src={MH_IDE_LOADING}
          alt="Independence Day Edition loading screen: a keke crowded with laughing Monrovians under the motto Hustle, Pray, Reclaim"
          width={1672}
          height={941}
          sizes="100vw"
          className="h-auto w-full"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/80 to-transparent px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 sm:px-8 lg:px-16">
          <span>Loading screen</span>
          <span>Independence Day Edition</span>
        </figcaption>
      </figure>

      {/* Pillars */}
      <Section>
        <Eyebrow color={RED}>Design pillars</Eyebrow>
        <Heading className="max-w-xl">Racing with roots.</Heading>
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {MH_IDE_PILLARS.map((pillar, i) => (
            <article key={pillar.title}>
              <span aria-hidden className="mb-6 block h-[3px] w-14 rounded-full" style={{ background: [RED, BLUE, GREEN][i] }} />
              <p aria-hidden className="text-[clamp(4.5rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em]">{pillar.title}</h3>
              <p className="mt-2 max-w-xs text-[13px] leading-6 text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Creator */}
      <section id="creator" className="scroll-mt-28 border-y border-border">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-16">
          <Link href={MH_IDE_CREATOR_PATH} className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-border lg:mx-0">
            <Image src={MH_IDE_CREATOR_IMAGE} alt={`${MH_IDE_CREATOR_NAME}, creator of both experiments`} fill sizes="320px" className="object-cover object-top" />
          </Link>
          <div>
            <Eyebrow color={RED}>Created by</Eyebrow>
            <Heading>{MH_IDE_CREATOR_NAME}</Heading>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{MH_IDE_CREATOR_ROLE} · HUIX-2099</p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
              Founder and CTO of HUIX-2099 in Monrovia. He built both experiments, voices Jayboy in the 3D concept, and made the Independence
              Day Edition as an art game — a Liberian story built for Independence Day 2026, not a racing skin pack.
            </p>
            <div className="mt-7">
              <TextLink href={MH_IDE_CREATOR_PATH}>Team profile</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Get the game */}
      <Section id="downloads">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div id="get-game" className="scroll-mt-28">
            <Eyebrow color={GREEN}>Get the game</Eyebrow>
            <Heading>Join the WhatsApp group to play.</Heading>
            <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
              Members get the Independence Day build, update drops and playtest notices first. Tap to join, or scan the code with your phone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={MH_IDE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[12px] font-medium text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "#25d366" }}
              >
                <BrandLogo brand="whatsapp" className="h-4 w-4" />
                Join the WhatsApp group
              </a>
              <span className="rounded-xl border border-border bg-white p-2.5">
                <ScanCode value={MH_IDE_WHATSAPP_URL} size={84} ink="#0f5a2c" />
              </span>
            </div>
          </div>
          <div>
            <Eyebrow>Builds · Windows · Android APK</Eyebrow>
            <div className="mt-5">
              <IdeDownloadPanel />
            </div>
          </div>
        </div>
      </Section>

      {/* Media: sound reference and the tee */}
      <section id="sound-reference" className="scroll-mt-28 border-y border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <Eyebrow color={PURPLE}>Sound reference &amp; merch</Eyebrow>
          <Heading className="max-w-2xl">Street heat, on a phone and on a shirt.</Heading>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">
            The portrait reel is a sound reference for the game, in the voice of a fictional social-media influencer. Unmute it to hear the
            track. The landscape clip shows the official Independence Day tee.
          </p>
          <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row lg:items-end">
            <AmbientVideo
              src={MH_IDE_SETTINGS_VIDEO}
              aspect="portrait"
              controls
              className="w-full max-w-[20rem] shrink-0"
              aria-label="Independence Day Edition sound reference reel"
            />
            <AmbientVideo
              src={MH_IDE_TSHIRT_VIDEO}
              aspect="landscape"
              className="w-full min-w-0 flex-1"
              aria-label="The official Independence Day Edition t-shirt"
            />
          </div>
        </div>
      </section>

      {/* Tee and support */}
      <Section id="merch">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border p-7 sm:p-10">
            <Eyebrow color={RED}>Official tee · {MH_IDE_TSHIRT_SKU}</Eyebrow>
            <p className="mt-5 text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.06em]">${MH_IDE_TSHIRT_PRICE_USD}</p>
            <p className="mt-4 text-[14px] leading-7 text-muted-foreground">
              Pay with MTN Mobile Money or Orange Money to <strong className="text-foreground">{MH_IDE_PAYMENT_MSISDN_DISPLAY}</strong> (or the
              LRD equivalent) with the reference <strong className="text-foreground">{MH_IDE_PAYMENT_NOTE}</strong>, then send us your size and
              delivery contact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${MH_IDE_PAYMENT_MSISDN_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden />
                Pay {MH_IDE_PAYMENT_MSISDN_DISPLAY}
              </a>
              <a href={orderMail} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[12px] font-medium transition-colors hover:bg-secondary">
                Confirm your order
              </a>
            </div>
          </div>
          <div id="donate" className="scroll-mt-28 rounded-2xl border border-border p-7 sm:p-10">
            <Eyebrow color={GREEN}>Support the project</Eyebrow>
            <p className="mt-5 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              Every contribution goes to development, art, audio and shipping Liberian-led games.
            </p>
            <p className="mt-4 text-[14px] leading-7 text-muted-foreground">
              Any amount by Mobile Money or Orange Money to <strong className="text-foreground">{MH_IDE_PAYMENT_MSISDN_DISPLAY}</strong>. Add your
              gamer tag or email for a shout-out in the credits.
            </p>
            <div className="mt-7">
              <TextLink href={`${MH_BASE}/donate`}>Donation page</TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Roadmap */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <Eyebrow color={RED}>Roadmap</Eyebrow>
          <Heading className="max-w-xl">Where the race goes next.</Heading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {MH_IDE_ROADMAP.map((phase, i) => (
              <div key={phase.phase} className="bg-background p-7 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: [RED, PURPLE, BLUE][i] }}>
                  {phase.phase}
                </p>
                <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.01em]">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-[13px] leading-6 text-muted-foreground">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Credits ═══ */}
      <section id="credits" className="mh-lab mh-lab--credits scroll-mt-24" aria-labelledby="mh-lab-credits">
        <p className="mh-lab__eyebrow">A HUIX-2099 production · Monrovia, Liberia</p>
        <h2 id="mh-lab-credits" className="text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-none tracking-[-0.06em]">
          Credits
        </h2>
        <span className="mh-lab__bar mx-auto" aria-hidden>
          {MH_PALETTE.map((paint) => (
            <i key={paint.name} style={{ background: paint.color }} />
          ))}
        </span>
        <dl className="mh-lab__roll">
          <div>
            <dt>Created &amp; directed by</dt>
            <dd>
              <Link href={MH_IDE_CREATOR_PATH}>{MH_IDE_CREATOR_NAME}</Link>
              <small>Founder &amp; CTO, HUIX-2099 · both experiments</small>
            </dd>
          </div>
          <div>
            <dt>Voice cast · Experiment 01</dt>
            {VOICES.map((member) => (
              <dd key={member.id}>
                <Link href={member.href}>{member.name}</Link> <small className="!inline">as {characterOf(member.role)}</small>
              </dd>
            ))}
          </div>
          <div>
            <dt>Sound engineer</dt>
            {AUDIO.map((member) => (
              <dd key={member.id}>
                <Link href={member.href}>{member.name}</Link>
              </dd>
            ))}
          </div>
          <div>
            <dt>Music &amp; marketing partner</dt>
            {monroviaConceptArtists.map((artist) => (
              <dd key={artist.slug}>
                <Link href={monroviaConceptArtistPageHref(artist.slug)}>{artist.name}</Link>
                <small>&ldquo;African Baddie&rdquo; · club scene</small>
              </dd>
            ))}
          </div>
          <div>
            <dt>Office space for the prototype</dt>
            <dd>
              <Link href="/team/quinn-win-liberia">Quinn</Link>
              <small>A friend who gave us a desk and a door that closes</small>
            </dd>
          </div>
          <div>
            <dt>Studio</dt>
            <dd>
              <Link href="/">HUIX-2099</Link>
              <small>Monrovia, Liberia</small>
            </dd>
          </div>
        </dl>
      </section>

      {/* Closing */}
      <Section>
        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-border p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <Eyebrow>Partner with the hustle</Eyebrow>
            <h2 className="mt-3 max-w-xl text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              These experiments are behind us. The official game is what comes next.
            </h2>
            <ul className="mt-6 space-y-2 text-[13px] text-muted-foreground">
              <li>
                <a href={`mailto:${MH_EMAIL}`} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  {MH_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${MH_PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  {MH_PHONE}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Monrovia, Liberia
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href={MH_BASE}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                The official game
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={`${MH_BASE}/contact`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[12px] font-medium transition-colors hover:bg-secondary"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-2">
              {(
                [
                  ["facebook", MH_FACEBOOK, "Facebook"],
                  ["whatsapp", MH_IDE_WHATSAPP_URL, "WhatsApp group"],
                  ["youtube", MH_YOUTUBE, "YouTube"],
                ] as const
              ).map(([brand, href, label]) => (
                <a
                  key={brand}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                >
                  <BrandLogo brand={brand} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <a href="#mh-lab-title" className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
          <ArrowDown className="h-3 w-3 rotate-180" aria-hidden />
          Back to the top
        </a>
      </Section>
    </FranchiseShell>
  )
}
