"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { VplCover, VplWordmarkCover } from "./vpl-cover"

const WRAP = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16"
const EYEBROW = "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
const HEADING = "font-semibold tracking-[-0.035em]"

const capabilities = [
  {
    title: "Immersive & VR",
    body: "Virtual museums, field sessions and WebXR experiences people can step inside.",
  },
  {
    title: "Games & narrative",
    body: "Story-driven 3D worlds rooted in Liberian life, built with local voices and artists.",
  },
  {
    title: "Software & tools",
    body: "Desktop apps, editor themes and creator utilities that remove friction.",
  },
  {
    title: "AI & automation",
    body: "Practical machine intelligence for small teams with limited time and budget.",
  },
  {
    title: "Design & web",
    body: "Websites, identities and interfaces made to feel considered on every screen.",
  },
]

const nowBuilding = [
  { title: "Virtual Past Liberia", meta: "VR heritage · in build", href: "/virtual-past-liberia" },
  { title: "Monrovia Hustle 3D", meta: "Narrative game · in build", href: "/products/monrovia-hustle" },
]

type WorkItem = {
  title: string
  category: string
  year: string
  href: string
  img?: string
  alt?: string
  fit?: "cover" | "contain"
  cover?: boolean
  wordmark?: "vpl"
  cardBg?: string
}

const work: WorkItem[] = [
  {
    title: "Virtual Past Liberia",
    category: "VR heritage",
    year: "2026",
    href: "/virtual-past-liberia",
    wordmark: "vpl",
  },
  {
    title: "Monrovia Hustle 3D",
    category: "Narrative game",
    year: "2026",
    href: "/products/monrovia-hustle",
    img: "/products/monrovia-hustle/logo/monrovia-hustle-logo-white.png",
    alt: "Monrovia Hustle wordmark logo",
    fit: "contain",
    cardBg: "bg-[#111111]",
  },
  {
    title: "HUIXOR",
    category: "Desktop software",
    year: "2026",
    href: "/products/huixor",
    img: "/products/huixor/screenshorts/Screenshot 2026-04-05 111541.png",
    alt: "HUIXOR desktop app previewing a site across landscape and portrait screens",
    fit: "cover",
  },
]

const stats = [
  { value: "2024", label: "Founded in Monrovia" },
  { value: "05", label: "Products in build" },
  { value: "15", label: "Counties in scope" },
]

export function HomeClean() {
  return (
    <div className="home-clean bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className={`${WRAP} pb-14 lg:pb-20`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-9 sm:pt-12 lg:pt-14">
            <p className={EYEBROW}>R&amp;D startup · Monrovia, Liberia</p>
            <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Open for 2026
            </p>
          </div>

          <h1 className="mt-8 text-[clamp(2.2rem,5.6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] lg:mt-10">
            HUIX-2099 is a Liberia-based
            <br />
            <span className="text-muted-foreground/45">R&amp;D and try-and-error startup.</span>
          </h1>

          <div className="mt-9 grid gap-10 border-t border-border pt-7 sm:grid-cols-12 lg:mt-12 lg:gap-14">
            <div className="flex flex-col gap-9 sm:col-span-7">
              <div>
                <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  <div className="border-l border-foreground/20 pl-4">
                    <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground">
                      Research
                    </dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                      Experimenting, testing ideas, trying things to see what works.
                    </dd>
                  </div>
                  <div className="border-l border-foreground/20 pl-4">
                    <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground">
                      Development
                    </dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                      Building those ideas into games, apps, websites and products.
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore our work
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-[13px] font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <p className="mt-auto max-w-sm text-[12px] leading-relaxed text-muted-foreground">
                Founded in Monrovia in 2024. We work with artists, historians and
                engineers across all 15 counties.
              </p>
            </div>

            <div className="sm:col-span-5 sm:border-l sm:border-border sm:pl-9 lg:pl-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Now building
              </p>
              <ul className="mt-4 border-t border-border">
                {nowBuilding.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-4 border-b border-border py-4"
                    >
                      <span className="min-w-0">
                        <span className="block text-[14px] font-medium tracking-[-0.01em] text-foreground">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted-foreground">
                          {item.meta}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work">
        <div className={WRAP}>
          <div className="py-16 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={EYEBROW}>Selected work</p>
                <h2 className={`mt-3 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] ${HEADING}`}>
                  Things we have built.
                </h2>
              </div>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                All products
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
              {work.map((item) => (
                <Link key={item.href} href={item.href} className="group block">
                  <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[24px] bg-secondary", item.cardBg)}>
                    {item.wordmark ? (
                      <VplWordmarkCover />
                    ) : item.cover ? (
                      <VplCover />
                    ) : (
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                          item.fit === "contain"
                            ? "object-contain p-10 sm:p-14"
                            : "object-cover"
                        }`}
                      />
                    )}
                    <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[16px] font-medium tracking-[-0.01em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-muted-foreground">{item.year}</p>
                    </div>
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="border-t border-border">
        <div className={WRAP}>
          <div className="py-14 lg:py-20">
            <div className="grid overflow-hidden rounded-[32px] bg-secondary p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
              <div className="lg:col-span-7">
                <p className={EYEBROW}>The studio</p>
                <h2
                  className={`mt-4 text-[clamp(2rem,4vw,3.1rem)] leading-[1.04] ${HEADING}`}
                >
                  A small team
                  <br />
                  building big worlds.
                </h2>
                <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                  We work from Monrovia with artists, engineers and storytellers across
                  Liberia. Every project starts with local context and ends with something
                  people can actually use.
                </p>
              </div>

              <div className="mt-9 flex flex-col justify-between border-t border-border pt-8 lg:col-span-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <dl className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-[26px] font-semibold leading-none tracking-[-0.03em]">
                        {stat.value}
                      </dd>
                      <p className="mt-2 text-[11px] uppercase leading-snug tracking-[0.1em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-foreground"
                >
                  About HUIX-2099
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border">
        <div className={WRAP}>
          <div className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className="lg:col-span-4">
              <p className={EYEBROW}>What we do</p>
              <h2 className={`mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.05] ${HEADING}`}>
                One studio,
                <br />
                five disciplines.
              </h2>
              <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
                We keep the team small so the work stays direct, considered and easy to
                follow from first sketch to launch.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t border-border">
                {capabilities.map((item, index) => (
                  <li key={item.title} className="border-b border-border">
                    <div className="group grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-6">
                      <span className="text-[11px] tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="sm:flex sm:items-baseline sm:gap-6">
                        <h3 className="text-[17px] font-medium tracking-[-0.01em] text-foreground transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                        <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:mt-0">
                          {item.body}
                        </p>
                      </div>
                      <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground sm:block" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border">
        <div className={WRAP}>
          <figure className="mx-auto max-w-3xl py-16 text-center lg:py-24">
            <blockquote className="text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-[1.3] tracking-[-0.025em] text-foreground">
              &ldquo;Monrovia Hustle feels like my city — not a Hollywood stand-in.
              The street loop and voice cast hit different.&rdquo;
            </blockquote>
            <figcaption className="mt-7 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Amara K. · Playtester, Monrovia
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16 lg:pb-24">
        <div className={WRAP}>
          <div className="rounded-[32px] bg-foreground px-6 py-12 text-background sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">
                  Start something
                </p>
                <h2
                  className={`mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] ${HEADING}`}
                >
                  Have a world
                  <br />
                  in mind?
                </h2>
              </div>
              <div className="lg:pb-1">
                <p className="max-w-md text-[14px] leading-relaxed text-background/60">
                  Tell us what you are imagining. We will tell you honestly what it takes to
                  build it — and whether we are the right studio for it.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between gap-3 rounded-full bg-background px-6 py-3.5 text-[13px] font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-between gap-3 rounded-full px-6 py-3.5 text-[13px] font-medium text-background ring-1 ring-background/30 transition-colors hover:bg-background/10"
                  >
                    See our work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
