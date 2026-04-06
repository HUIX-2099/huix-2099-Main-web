"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

interface Product {
  id: number
  title: string
  category: "Software" | "Website" | "App" | "Game" | "Theme" | "Simulation"
  platform: string
  description: string
  image?: string
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
      "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors. Clean, minimal design with maximum code visibility.",
    image: "/products/huix-theme/Media/logo.png",
    year: "2024",
    status: "Live",
    technologies: ["VS Code", "Theme", "Neon Syntax"],
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
      "Multi-device web preview in one window — up to 8 panels, VR stage, synced scroll, CDP emulation. Portable .exe.",
    image: "/products/huixor/Huixor.ico",
    year: "2026",
    status: "Development",
    technologies: ["WPF", ".NET 8", "WebView2", "CDP"],
    openSource: true,
    detailPage: "/products/huixor",
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

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

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
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {filteredProducts.map((product, index) => {
                  const CategoryIcon = getCategoryIcon(product.category)
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      onClick={() => handleProductSelect(product)}
                      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
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

                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

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
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className="truncate text-sm font-bold uppercase transition-colors group-hover:text-foreground"
                              style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.2em" }}
                            >
                              {product.title}
                            </span>
                            {product.openSource && (
                              <span className="shrink-0 rounded-full bg-green-500/10 px-2 py-0.5 text-[8px] uppercase tracking-wider text-green-600 dark:text-green-400" style={{ fontFamily: monoFont }}>
                                OSS
                              </span>
                            )}
                          </div>
                          <div className="truncate text-[10px] text-muted-foreground/50">{product.description}</div>
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
    </>
  )
}
