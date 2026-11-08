"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, LayoutGrid, List, Plus } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VplCover, VplWordmarkCover } from "@/components/vpl-cover"
import { HustleBrush } from "@/components/monrovia-hustle/hustle-brand"
import { cn } from "@/lib/utils"
import { CTASection, PageHero, WRAP } from "@/components/clean-ui"

interface Product {
  id: number
  title: string
  category: "Software" | "Website" | "App" | "Game" | "Theme" | "Simulation" | "Plugin"
  platform: string
  description: string
  image?: string
  imageFit?: "cover" | "contain"
  cover?: "vpl"
  cardBg?: string
  brush?: boolean
  year: string
  status: "Live" | "Development" | "Concept"
  technologies: string[]
  openSource?: boolean
  link?: string
  detailPage?: string
}

const products: Product[] = [
  {
    id: 1,
    title: "HUIX-THEME",
    category: "Theme",
    platform: "VS Code",
    description:
      "A premium dark VS Code theme with ultra-sharp neon syntax and a clean, minimal interface.",
    image: "/products/huix-theme/Media/logo.png",
    imageFit: "contain",
    year: "2024",
    status: "Live",
    technologies: ["VS Code", "Neon syntax"],
    openSource: true,
    link: "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme",
    detailPage: "/products/huix-theme",
  },
  {
    id: 2,
    title: "HUIXOR",
    category: "Software",
    platform: "Windows 10/11",
    description:
      "Multi-device web preview in one window — up to eight panels, a VR stage, synced scroll and CDP emulation.",
    image: "/products/huixor/screenshorts/Screenshot 2026-04-05 111541.png",
    imageFit: "cover",
    year: "2026",
    status: "Development",
    technologies: ["WPF", ".NET 8", "WebView2", "CDP"],
    openSource: true,
    detailPage: "/products/huixor",
  },
  {
    id: 3,
    title: "Monrovia Hustle",
    category: "Game",
    platform: "Windows · macOS · Android",
    description: "A gaming franchise inspired by Monrovia, Liberia—built around exploration, interaction, and simulation.",
    image: "/products/monrovia-hustle/logo/monrovia-hustle-logo-white.png",
    imageFit: "contain",
    cardBg: "bg-[#111111]",
    brush: true,
    year: "2026",
    status: "Development",
    technologies: ["Exploration", "Simulation", "Liberia"],
    detailPage: "/products/monrovia-hustle",
  },
  {
    id: 5,
    title: "HUIX Market Liberia",
    category: "Website",
    platform: "Web · Mobile",
    description:
      "Premium commerce for Liberia and beyond — stores, sellers and delivery, onboarded and verified by our team.",
    image: "/huix-market/huix%20market.png",
    imageFit: "contain",
    year: "2026",
    status: "Live",
    technologies: ["E-commerce", "Logistics", "Verification"],
    link: "https://huix-market.vercel.app/",
  },
  {
    id: 6,
    title: "Virtual Past Liberia",
    category: "Simulation",
    platform: "XR · AI",
    description:
      "Community-curated reconstructions of Liberian history in immersive 3D, built for low-bandwidth devices.",
    cover: "vpl",
    year: "2026",
    status: "Concept",
    technologies: ["XR", "3D heritage", "LLM", "Liberian languages"],
    detailPage: "/virtual-past-liberia",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "Software", label: "Software" },
  { id: "Website", label: "Websites" },
  { id: "Game", label: "Games" },
  { id: "Theme", label: "Themes" },
  { id: "Simulation", label: "Simulations" },
  { id: "Plugin", label: "Plugins" },
].map((category) => ({
  ...category,
  count:
    category.id === "all"
      ? products.length
      : products.filter((product) => product.category === category.id).length,
}))

function statusTone(status: Product["status"]) {
  if (status === "Live") return "bg-emerald-500"
  if (status === "Development") return "bg-amber-500"
  return "bg-sky-500"
}

export default function ProductsPage() {
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filtered =
    filter === "all" ? products : products.filter((product) => product.category === filter)

  const visibleCategories = categories.filter(
    (category) => category.id === "all" || category.count > 0
  )

  const liveCount = products.filter((product) => product.status === "Live").length
  const devCount = products.filter((product) => product.status === "Development").length
  const conceptCount = products.filter((product) => product.status === "Concept").length

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <PageHero
          eyebrow="Work · Product index"
          title={
            <>
              Five builds,
              <br />
              one pipeline.
            </>
          }
          description="Software, websites, games and tools engineered in Monrovia, Liberia. Some are live, some are in development, and some are still a concept."
          aside={
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 rounded-[24px] bg-secondary p-6 sm:p-7">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Total builds
                </dt>
                <dd className="mt-1.5 text-[26px] font-semibold leading-none">
                  {String(products.length).padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Live
                </dt>
                <dd className="mt-1.5 text-[26px] font-semibold leading-none">
                  {String(liveCount).padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  In development
                </dt>
                <dd className="mt-1.5 text-[26px] font-semibold leading-none">
                  {String(devCount).padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Concept
                </dt>
                <dd className="mt-1.5 text-[26px] font-semibold leading-none">
                  {String(conceptCount).padStart(2, "0")}
                </dd>
              </div>
            </dl>
          }
        />

        <section>
          <div className={WRAP}>
            <div className="py-10 lg:py-14">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                <div className="flex flex-wrap gap-2">
                  {visibleCategories.map((category) => {
                    const active = filter === category.id
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setFilter(category.id)}
                        aria-pressed={active}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium transition-colors ${
                          active
                            ? "bg-foreground text-background"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category.label}
                        <span
                          className={`text-[10px] tabular-nums ${
                            active ? "text-background/60" : "text-muted-foreground/70"
                          }`}
                        >
                          {String(category.count).padStart(2, "0")}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    aria-pressed={viewMode === "grid"}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                      viewMode === "grid"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    aria-pressed={viewMode === "list"}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                      viewMode === "list"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    <List className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {filtered.map((product) => {
                    const href = product.detailPage || product.link || "/products"
                    const external = !product.detailPage && !!product.link
                    const content = (
                      <>
                        <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[20px] bg-secondary", product.cardBg)}>
                          {product.cover === "vpl" ? (
                            <VplWordmarkCover size="sm" />
                          ) : product.image ? (
                            <img
                              src={product.image}
                              alt={product.title}
                              loading="lazy"
                              className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                                product.imageFit === "contain"
                                  ? "object-contain p-10"
                                  : "object-cover"
                              }`}
                            />
                          ) : null}
                          {product.brush ? (
                            <HustleBrush className="mh-brush--bleed absolute inset-x-0 bottom-0" />
                          ) : null}
                          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 text-[10px] font-medium text-foreground backdrop-blur">
                            <span className={`h-1.5 w-1.5 rounded-full ${statusTone(product.status)}`} />
                            {product.status}
                          </span>
                          {product.openSource ? (
                            <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1.5 text-[10px] font-medium text-muted-foreground backdrop-blur">
                              Open source
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-4">
                          <div>
                            <h2 className="text-[16px] font-medium tracking-[-0.01em] text-foreground">
                              {product.title}
                            </h2>
                            <p className="mt-1 text-[12px] text-muted-foreground">
                              {product.category} · {product.platform} · {product.year}
                            </p>
                          </div>
                          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                          {product.description}
                        </p>
                        {product.technologies.length > 0 ? (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {product.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </>
                    )

                    return external ? (
                      <a
                        key={product.id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link key={product.id} href={href} className="group block">
                        {content}
                      </Link>
                    )
                  })}

                  <Link href="/contact" className="group block">
                    <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[20px] border border-dashed border-border bg-secondary/30 text-center transition-colors group-hover:border-foreground/30 group-hover:bg-secondary/50">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                        <Plus className="h-4 w-4" />
                      </span>
                      <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                        Next build
                      </p>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-[16px] font-medium tracking-[-0.01em]">Your project</h2>
                      <p className="mt-1 text-[12px] text-muted-foreground">
                        Websites · apps · games · immersive
                      </p>
                    </div>
                    <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                      Tell us what you are making and we will tell you how we would approach it.
                    </p>
                  </Link>
                </div>
              ) : (
                <ul className="mt-6 border-t border-border">
                  {filtered.map((product) => {
                    const href = product.detailPage || product.link || "/products"
                    const external = !product.detailPage && !!product.link
                    const row = (
                      <div className="group grid gap-2 border-b border-border py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[15px] font-medium text-foreground">
                              {product.title}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2 py-1 text-[10px] text-muted-foreground">
                              <span className={`h-1.5 w-1.5 rounded-full ${statusTone(product.status)}`} />
                              {product.status}
                            </span>
                          </div>
                          <p className="mt-1 text-[12px] text-muted-foreground">
                            {product.category} · {product.platform} · {product.year}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                          <p className="max-w-md text-[12px] leading-relaxed text-muted-foreground sm:text-right">
                            {product.description}
                          </p>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </div>
                      </div>
                    )
                    return (
                      <li key={product.id}>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {row}
                          </a>
                        ) : (
                          <Link href={href} className="block">
                            {row}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}

              <p className="mt-8 border-t border-border pt-5 text-[11px] text-muted-foreground">
                Showing {filtered.length} of {products.length} builds
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title={
            <>
              Need something
              <br />
              built?
            </>
          }
          body="Websites, apps, games and immersive experiences. Tell us the shape of the idea and we will tell you how we would approach it."
          secondary={{ label: "About the studio", href: "/about" }}
        />
      </main>
      <Footer />
    </>
  )
}
