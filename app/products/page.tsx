"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AmbientGlow } from "@/components/ambient-glow"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Grid,
  List,
  Monitor,
  Globe,
  Smartphone,
  Gamepad2,
  Palette,
  Cpu,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { GoogleDiscoveryIconButton, GoogleDiscoveryRow } from "@/components/google-discovery"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

function IconWindows({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M3 5.5L10.5 4.2v7.1H3V5.5zm0 8.2h7.5v7.3L3 19.5v-5.8zm8.7-9.3L21 3v8.1h-9.3V4.4zm0 9.4H21V21l-9.3-1.3v-6.1z"
      />
    </svg>
  )
}

function IconMac({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M16.2 1.1c-1.3.1-2.5.9-3.1 1.8-.5.7-.9 1.7-.7 2.5.1.1.1.1.1.1 1.3-.1 2.4-.7 2.9-1.4.5-.6 1-1.6.8-3zm2.1 3.1c-2.1 0-3.4 1.2-4 1.2-.6 0-1.8-1.1-3.1-1.1-1.5 0-3.1.9-3.8 2.1-1.5 2.5-.3 6.2 1 8.1.6.9 1.4 2 2.3 1.9.8-.1 1.1-.4 1.8-.4.8 0 1.1.4 1.8.4.9 0 1.6-1.1 2.1-1.8 1-1.4 1.2-1.6 1.2-1.6-.1 0-2-1-2-3.4 0-1.6 1-2.2 1.1-2.2-.4-.4-1.1-.5-1.5-.5z"
      />
    </svg>
  )
}

function IconAndroid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M17.6 9.2l1.3-1.8c.1-.1.1-.3 0-.4-.1-.1-.2-.1-.3 0l-1.4 1.9c-1.1-.5-2.3-.7-3.5-.7s-2.4.2-3.5.7L8.8 7c-.1-.1-.2-.1-.3 0-.1.1-.1.2 0 .3l1.3 1.8C6.9 10.2 5.2 12.2 4.5 15h15c-.7-2.8-2.4-4.8-4.9-5.8zM9 12.2c0 .5-.4.9-.9.9s-.8-.4-.8-.9.3-.9.8-.9.9.4.9.9zm5.8.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.8.4.8.9-.3.9-.8.9zM7 20h1v1H7v-1zm9 0h1v1h-1v-1z"
      />
    </svg>
  )
}

interface Product {
  id: number
  title: string
  category: "Software" | "Website" | "App" | "Game" | "Theme" | "Simulation"
  platform: string
  description: string
  image?: string
  /** Hex accent (6-digit) used for the page-wide ambient glow on hover. */
  accent?: string
  year: string
  status: "Live" | "Development" | "Concept"
  technologies: string[]
  openSource?: boolean
  link?: string
  detailPage?: string
  /** HUIX-2099 + named lead + what they did on this product */
  creditLine: string
  googleLabel: string
  googleQuery: string
}

const products: Product[] = [
  {
    id: 1,
    title: "HUIX-THEME",
    category: "Theme",
    platform: "VS Code",
    description:
      "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors. Clean, minimal design with maximum code visibility.",
    image: "/products/huix-theme/Media/logo.png",
    accent: "#84cc16",
    year: "2024",
    status: "Live",
    technologies: ["VS Code", "Theme", "Neon Syntax"],
    openSource: true,
    link: "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme",
    detailPage: "/products/huix-theme",
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — led the HUIX-THEME VS Code extension.",
    googleLabel: "HUIX-THEME · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "HUIX-THEME VS Code extension HUIX-2099 Victor Edet Coleman Founder CTO Liberia",
  },
  {
    id: 2,
    title: "HUIXOR",
    category: "Software",
    platform: "Windows 10/11",
    description:
      "Multi-device web preview in one window — up to 8 panels, VR stage, synced scroll, CDP emulation. Portable .exe.",
    image: "/products/huixor/Huixor.ico",
    accent: "#10b981",
    year: "2026",
    status: "Development",
    technologies: ["WPF", ".NET 8", "WebView2", "CDP"],
    openSource: true,
    detailPage: "/products/huixor",
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — engineering lead on HUIXOR.",
    googleLabel: "HUIXOR · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "HUIXOR HUIX-2099 WPF WebView2 multi-device preview Victor Edet Coleman Liberia",
  },
  {
    id: 3,
    title: "Monrovia Hustle 3D",
    category: "Game",
    platform: "Windows · macOS · Android",
    description: "Warning: concept slice. Liberian narrative urban RPG — Monrovia as a lived-in open map.",
    image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    accent: "#2563eb",
    year: "2026",
    status: "Development",
    technologies: [],
    detailPage: "/products/monrovia-hustle",
    creditLine: "HUIX-2099 · Victor Edet Coleman — Founder & CTO — narrative & technical lead on Monrovia Hustle 3D.",
    googleLabel: "Monrovia Hustle 3D · HUIX-2099 · Victor Edet Coleman",
    googleQuery: "Monrovia Hustle 3D HUIX-2099 Victor Edet Coleman Liberian narrative urban RPG Liberia",
  },
]

const categories = [
  { id: "all", label: "ALL", icon: Grid, count: products.length },
  { id: "Software", label: "SOFTWARE", icon: Monitor, count: products.filter((p) => p.category === "Software").length },
  { id: "Website", label: "WEBSITES", icon: Globe, count: products.filter((p) => p.category === "Website").length },
  { id: "App", label: "APPS", icon: Smartphone, count: products.filter((p) => p.category === "App").length },
  { id: "Game", label: "GAMES", icon: Gamepad2, count: products.filter((p) => p.category === "Game").length },
  { id: "Theme", label: "THEMES", icon: Palette, count: products.filter((p) => p.category === "Theme").length },
  { id: "Simulation", label: "SIMS", icon: Cpu, count: products.filter((p) => p.category === "Simulation").length },
]

export default function ProductsPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

  const activeAccent = hoveredId ? products.find((p) => p.id === hoveredId)?.accent : undefined
  const ambientBackground = activeAccent
    ? `radial-gradient(70% 55% at 50% -8%, ${activeAccent}38, transparent 60%), radial-gradient(45% 45% at 85% 110%, ${activeAccent}24, transparent 70%), radial-gradient(45% 45% at 12% 95%, ${activeAccent}1f, transparent 70%)`
    : undefined

  const getProductPage = (product: Product): string | null => {
    if (product.detailPage) return product.detailPage
    if (product.link && !product.link.startsWith("http")) return product.link
    return null
  }

  const handleProductSelect = (product: Product) => {
    const page = getProductPage(product)
    if (page) router.push(page)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500"
      case "Development":
        return "bg-yellow-500"
      case "Concept":
        return "bg-blue-500"
      default:
        return "bg-muted-foreground"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Software":
        return Monitor
      case "Website":
        return Globe
      case "App":
        return Smartphone
      case "Game":
        return Gamepad2
      case "Theme":
        return Palette
      case "Simulation":
        return Cpu
      default:
        return Grid
    }
  }

  return (
    <>
      {/* Page-wide ambient glow — takes on the hovered product's color (YouTube ambient style) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{ opacity: hoveredId ? 1 : 0, background: ambientBackground }}
      />

      <div className="relative z-10">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Top Meta Strip */}
          <div
            className="flex items-center justify-between border-b border-border/50 py-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>PRODUCTS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">CAT NO · PRD-001</span>
              <span className="hidden sm:inline h-px w-4 bg-border/50" />
              <span>{filteredProducts.length} ITEMS</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-10 lg:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden text-[200px] font-bold leading-[0.75] text-foreground/[0.04] select-none lg:block"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
              >
                P
              </motion.div>

              {/* Right - Content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div
                    className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
                    style={{ fontFamily: monoFont }}
                  >
                    [02] PRODUCT SHOWCASE
                  </div>
                  <h1
                    className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl"
                    style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}
                  >
                    PRODUCTS
                  </h1>
                  <div className="mb-4 h-px w-16 bg-foreground/20" />
                  <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
                    A showcase of what we&apos;ve built — software, websites, apps, and games crafted with precision
                    and innovation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Category Stats */}
      <section className="border-b border-border bg-card/30 py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.slice(1).map((cat, idx) => {
              const IconComponent = cat.icon
              const active = filter === cat.id
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setFilter(active ? "all" : cat.id)}
                  className={`flex items-center gap-2 rounded-md border px-3 py-2 text-[10px] uppercase tracking-[0.1em] transition-all ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                  style={{ fontFamily: monoFont }}
                >
                  <IconComponent className={`h-3.5 w-3.5 ${active ? "text-background/70" : ""}`} />
                  <span>{cat.label}</span>
                  <span className={`ml-0.5 ${active ? "text-background/50" : "text-muted-foreground/40"}`}>
                    {cat.count}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter & Controls Bar */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Active Filter */}
            <div className="flex items-center gap-3">
              <span
                className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground/50"
                style={{ fontFamily: monoFont }}
              >
                Showing
              </span>
              <div className="flex flex-wrap gap-1">
                {categories
                  .filter((c) => filter === "all" || c.id === filter || c.id === "all")
                  .map((cat) => (
                    <motion.button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      className={`relative rounded-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                        (filter === "all" && cat.id === "all") || filter === cat.id
                          ? "text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={{ fontFamily: monoFont }}
                    >
                      {((filter === "all" && cat.id === "all") || filter === cat.id) && (
                        <motion.div
                          layoutId="activeProductFilter"
                          className="absolute inset-0 rounded-sm bg-foreground"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">
                        {cat.id === "all" ? "ALL" : cat.label}
                        <span className="ml-1.5 opacity-60">[{cat.count}]</span>
                      </span>
                    </motion.button>
                  ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5">
              <span
                className="mr-1.5 hidden text-[9px] uppercase tracking-[0.12em] text-muted-foreground/50 sm:inline"
                style={{ fontFamily: monoFont }}
              >
                VIEW
              </span>
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-sm p-1.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground/40 hover:text-muted-foreground"
                }`}
              >
                <Grid className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-sm p-1.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground/40 hover:text-muted-foreground"
                }`}
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              /* Grid View — 4 columns: 2 products + 2 empty slots */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 landscape:grid-cols-4 lg:grid-cols-4"
              >
                {filteredProducts.map((product, index) => {
                  const CategoryIcon = getCategoryIcon(product.category)
                  return (
                    <AmbientGlow key={product.id} src={product.image} className="h-full">
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId((cur) => (cur === product.id ? null : cur))}
                      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-2xl"
                    >
                      <motion.div
                        onClick={() => handleProductSelect(product)}
                        className="flex min-h-0 flex-1 cursor-pointer flex-col"
                      >
                      {/* Image */}
                      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted/20 border-b border-border/50">
                        {/* Top badges */}
                        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
                          <div
                            className="text-[10px] text-foreground/40 group-hover:text-foreground/70 transition-colors"
                            style={{ fontFamily: monoFont }}
                          >
                            [{String(product.id).padStart(2, "0")}]
                          </div>
                          <div className="flex items-center gap-2">
                            {product.openSource && (
                              <span
                                className="flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-green-600 dark:text-green-400 backdrop-blur-md"
                                style={{ fontFamily: monoFont }}
                              >
                                <Sparkles className="h-3 w-3" />
                                Open Source
                              </span>
                            )}
                            <span
                              className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[9px] uppercase tracking-wider backdrop-blur-md"
                              style={{ fontFamily: monoFont }}
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${getStatusColor(product.status)}`} />
                              {product.status}
                            </span>
                          </div>
                        </div>

                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-secondary">
                            <CategoryIcon className="h-16 w-16 text-muted-foreground/20" />
                          </div>
                        )}

                        {/* Bottom gradient */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
                      </div>

                      {/* Info */}
                      <div className="p-5 sm:p-6">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3
                              className="text-lg font-bold uppercase tracking-wider sm:text-xl"
                              style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.2em" }}
                            >
                              {product.title}
                            </h3>
                            <div
                              className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/60"
                              style={{ fontFamily: monoFont }}
                            >
                              <CategoryIcon className="h-3 w-3" />
                              <span>{product.category}</span>
                              <span className="h-px w-2 bg-border" />
                              <span>{product.platform}</span>
                            </div>
                          </div>
                          <span
                            className="shrink-0 text-[10px] text-muted-foreground/40"
                            style={{ fontFamily: monoFont }}
                          >
                            {product.year}
                          </span>
                        </div>

                        {product.id === 3 ? (
                          <div className="mb-4">
                            <p className="mb-2 text-center font-serif text-sm italic leading-snug text-muted-foreground sm:text-base">
                              &ldquo;{product.description}&rdquo;
                            </p>
                            <p className="mb-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground/80" style={{ fontFamily: monoFont }}>
                              HUIX-2099 hub · Liberian narrative RPG
                            </p>
                            <p
                              className="mb-3 px-1 text-center text-[10px] leading-snug text-muted-foreground/90"
                              style={{ fontFamily: monoFont }}
                            >
                              {product.creditLine}
                            </p>
                            <div className="flex items-center justify-center gap-6 py-2 text-foreground/80">
                              <span className="flex flex-col items-center gap-1" title="Windows">
                                <IconWindows className="h-9 w-9" />
                                <span className="text-[9px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: monoFont }}>
                                  Windows
                                </span>
                              </span>
                              <span className="flex flex-col items-center gap-1" title="macOS">
                                <IconMac className="h-9 w-9" />
                                <span className="text-[9px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: monoFont }}>
                                  Mac
                                </span>
                              </span>
                              <span className="flex flex-col items-center gap-1" title="Android">
                                <IconAndroid className="h-9 w-9" />
                                <span className="text-[9px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: monoFont }}>
                                  Android
                                </span>
                              </span>
                            </div>
                            <p className="text-center text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
                              Coming soon
                            </p>
                          </div>
                        ) : (
                          <>
                            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                            <p
                              className="mb-3 text-[10px] leading-snug text-muted-foreground/90"
                              style={{ fontFamily: monoFont }}
                            >
                              {product.creditLine}
                            </p>

                            {/* Tech tags */}
                            <div className="mb-4 flex flex-wrap gap-1.5">
                              {product.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[9px] uppercase tracking-wider text-muted-foreground"
                                  style={{ fontFamily: monoFont }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-border/50 pt-4">
                          <div className="flex items-center gap-3">
                            {product.link && (
                              <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
                                style={{ fontFamily: monoFont }}
                              >
                                <ExternalLink className="h-3 w-3" />
                                Marketplace
                              </a>
                            )}
                          </div>
                          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/60 transition-colors group-hover:text-foreground" style={{ fontFamily: monoFont }}>
                            View details
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                      </motion.div>
                      <GoogleDiscoveryRow googleQuery={product.googleQuery} googleLabel={product.googleLabel} />
                    </motion.article>
                    </AmbientGlow>
                  )
                })}

                {/* Empty placeholder slots to fill 4-column grid */}
                {Array.from({ length: Math.max(0, 4 - filteredProducts.length) }).map((_, i) => (
                  <motion.div
                    key={`empty-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (filteredProducts.length + i) * 0.08 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-border/60 bg-card/30"
                  >
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted/10">
                      <div className="flex flex-col items-center gap-3 px-4 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                          <span className="text-lg text-muted-foreground/30">+</span>
                        </div>
                        <span
                          className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/30"
                          style={{ fontFamily: monoFont }}
                        >
                          Coming soon
                        </span>
                      </div>
                    </div>
                    <div className="w-full p-5 sm:p-6">
                      <div className="mb-3 h-4 w-24 rounded bg-muted/20" />
                      <div className="mb-2 h-3 w-full rounded bg-muted/15" />
                      <div className="mb-4 h-3 w-3/4 rounded bg-muted/10" />
                      <div className="flex gap-1.5">
                        <div className="h-5 w-12 rounded-md bg-muted/15" />
                        <div className="h-5 w-10 rounded-md bg-muted/15" />
                        <div className="h-5 w-14 rounded-md bg-muted/15" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* List View */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-lg border border-border"
              >
                {/* Table Header */}
                <div
                  className="hidden gap-4 border-b border-border bg-card/50 px-4 py-3 text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60 md:grid md:grid-cols-[50px_1fr_100px_100px_90px_60px]"
                  style={{ fontFamily: monoFont }}
                >
                  <span>IDX</span>
                  <span>PRODUCT</span>
                  <span>CATEGORY</span>
                  <span>PLATFORM</span>
                  <span>STATUS</span>
                  <span>YEAR</span>
                </div>

                {/* Table Rows */}
                {filteredProducts.map((product, index) => {
                  const CategoryIcon = getCategoryIcon(product.category)
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.02 }}
                      viewport={{ once: true }}
                      onClick={() => handleProductSelect(product)}
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId((cur) => (cur === product.id ? null : cur))}
                      className="grid cursor-pointer grid-cols-1 gap-2 border-b border-border/30 px-4 py-4 transition-colors last:border-b-0 hover:bg-card/30 md:grid-cols-[50px_1fr_100px_100px_90px_60px] md:gap-4 group"
                    >
                      <div
                        className="hidden text-muted-foreground/40 transition-colors group-hover:text-foreground/60 md:block"
                        style={{ fontFamily: monoFont }}
                      >
                        [{String(product.id).padStart(2, "0")}]
                      </div>
                      <div className="flex items-center gap-4">
                        {product.image && (
                          <div className="h-9 w-12 flex-shrink-0 overflow-hidden rounded border border-border bg-card">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex min-w-0 items-center gap-2">
                            <span
                              className="min-w-0 truncate text-sm font-bold uppercase transition-colors group-hover:text-foreground"
                              style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.2em" }}
                            >
                              {product.title}
                            </span>
                            {product.openSource && (
                              <span className="shrink-0 rounded-full bg-green-500/10 px-2 py-0.5 text-[8px] uppercase tracking-wider text-green-600 dark:text-green-400" style={{ fontFamily: monoFont }}>
                                OSS
                              </span>
                            )}
                            <GoogleDiscoveryIconButton
                              className="ml-auto shrink-0"
                              googleQuery={product.googleQuery}
                              title={product.googleLabel}
                            />
                          </div>
                          {product.id === 3 ? (
                            <div className="mt-1 space-y-1">
                              <div className="line-clamp-2 text-[10px] italic text-muted-foreground/80">&ldquo;{product.description}&rdquo;</div>
                              <p className="text-[9px] leading-snug text-muted-foreground/85" style={{ fontFamily: monoFont }}>
                                {product.creditLine}
                              </p>
                              <div className="flex items-center gap-3 text-foreground/70">
                              <IconWindows className="h-4 w-4 shrink-0" />
                              <IconMac className="h-4 w-4 shrink-0" />
                              <IconAndroid className="h-4 w-4 shrink-0" />
                              <span className="text-[10px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: monoFont }}>
                                Coming soon
                              </span>
                            </div>
                            </div>
                          ) : (
                            <>
                              <div className="mt-1 truncate text-[10px] text-muted-foreground/50">{product.description}</div>
                              <div className="mt-1 line-clamp-2 text-[9px] leading-snug text-muted-foreground/80" style={{ fontFamily: monoFont }}>
                                {product.creditLine}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span
                          className="flex items-center gap-1.5 rounded border border-border bg-card px-2 py-1 text-[9px] uppercase tracking-[0.1em]"
                          style={{ fontFamily: monoFont }}
                        >
                          <CategoryIcon className="h-3 w-3" />
                          {product.category}
                        </span>
                      </div>
                      <div
                        className="flex items-center text-[10px] text-muted-foreground"
                        style={{ fontFamily: monoFont }}
                      >
                        {product.platform}
                      </div>
                      <div className="flex items-center gap-2 text-[10px]" style={{ fontFamily: monoFont }}>
                        <span className={`h-2 w-2 rounded-full ${getStatusColor(product.status)}`} />
                        <span className="text-muted-foreground">{product.status}</span>
                      </div>
                      <div
                        className="flex items-center text-[10px] text-muted-foreground/40"
                        style={{ fontFamily: monoFont }}
                      >
                        {product.year}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div
            className="mt-8 flex items-center justify-between border-t border-border pt-6 text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40"
            style={{ fontFamily: monoFont }}
          >
            <span>
              SHOWING {filteredProducts.length} OF {products.length} PRODUCTS
            </span>
            <span>PRODUCTS · p. 01</span>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
