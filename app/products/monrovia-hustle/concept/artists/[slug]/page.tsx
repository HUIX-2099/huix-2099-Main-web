import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  getMonroviaConceptArtist,
  monroviaConceptArtists,
  MONROVIA_CONCEPT_ARTISTS_HREF,
} from "@/lib/monrovia-hustle/concept-artists"
import { SITE_URL } from "@/lib/site"
import { ChevronLeft, ExternalLink, Facebook } from "lucide-react"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export function generateStaticParams() {
  return monroviaConceptArtists.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const artist = getMonroviaConceptArtist(slug)
  if (!artist) {
    return { title: { absolute: "Artist | HUIX-2099" } }
  }
  const canonical = `${SITE_URL}/products/monrovia-hustle/concept/artists/${slug}`
  const descriptionBase = `${artist.summary} Victor Edet Coleman · HUIX-2099.`
  const description =
    descriptionBase.length > 168 ? `${descriptionBase.slice(0, 165).trim()}…` : descriptionBase
  return {
    title: {
      absolute: `${artist.name} · Monrovia Hustle 3D — Art & artists | HUIX-2099 Liberia`,
    },
    description,
    keywords: [
      artist.name,
      "Monrovia Hustle 3D",
      "HUIX-2099",
      "Victor Edet Coleman",
      "Liberia music game",
      artist.discipline,
    ],
    alternates: { canonical },
    openGraph: {
      title: `${artist.name} · Monrovia Hustle 3D`,
      description: artist.summary,
      url: canonical,
      type: "article",
      siteName: "HUIX-2099",
    },
    twitter: {
      card: "summary_large_image",
      title: `${artist.name} | HUIX-2099`,
      description: artist.summary,
    },
  }
}

export default async function MonroviaConceptArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getMonroviaConceptArtist(slug)
  if (!artist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full min-w-0 max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-32">
        <Link
          href={MONROVIA_CONCEPT_ARTISTS_HREF}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
          Art &amp; artists on concept page
        </Link>

        <div className="mb-10 overflow-hidden rounded-2xl border border-border/70 bg-muted/30 dark:bg-muted/15">
          {artist.videoSrc ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square w-full bg-muted/50">
                <video
                  src={artist.videoSrc}
                  poster={artist.imageSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="size-full object-cover"
                />
              </div>
              <div className="relative aspect-square w-full bg-muted/50 border-t md:border-t-0 md:border-l border-border/70">
                <Image
                  src={artist.imageSrc}
                  alt={artist.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:768px) 100vw, 24rem"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] w-full bg-muted/50">
              <Image
                src={artist.imageSrc}
                alt={artist.imageAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width:768px) 100vw, 48rem"
                priority
              />
            </div>
          )}
        </div>

        <p
          className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#002868] dark:text-[#89b8ff]"
          style={{ fontFamily: MONO }}
        >
          Monrovia Hustle 3D · Art &amp; artists
        </p>
        <h1 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">{artist.name}</h1>
        <p
          className="mt-3 text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-[#BF0A30] dark:text-[#ff6b6b]"
          style={{ fontFamily: MONO }}
        >
          {artist.discipline}
        </p>

        <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-muted-foreground sm:text-[16px]">
          {artist.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-10">
          <a
            href={artist.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-[#1877F2]/40 hover:bg-muted/50"
          >
            <Facebook className="h-4 w-4 shrink-0 text-[#1877F2]" aria-hidden />
            Facebook
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          </a>
          <p className="text-[12px] font-medium italic text-muted-foreground">
            Credits update as partners join — no implied endorsement yet.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
