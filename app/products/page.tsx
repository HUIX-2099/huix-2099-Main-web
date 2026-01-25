"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Grid, List, Monitor, Globe, Smartphone, Gamepad2, Palette, Cpu } from "lucide-react"

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
  link?: string
  detailPage?: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Virtual Past Liberia Portal",
    category: "Website",
    platform: "Web",
    description: "Interactive digital heritage museum experience",
    image: "/images/virtual-20past-20liberia-20dark-20main-20version.jpg",
    year: "2024",
    status: "Development",
    technologies: ["Three.js", "WebGL", "React"],
    link: "/virtual-past-liberia",
  },
  {
    id: 2,
    title: "HUIX-HORIZEN Demo",
    category: "Simulation",
    platform: "PC / VR",
    description: "Interactive showcase of the HUIX-HORIZEN visualization platform",
    image: "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg",
    year: "2024",
    status: "Development",
    technologies: ["Unity", "WebGL", "C#"],
    link: "/huix-horizen",
  },
  {
    id: 3,
    title: "HUIX-THEME",
    category: "Theme",
    platform: "VS Code",
    description: "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors. Clean, minimal design with maximum code visibility.",
    image: "/products/huix-theme/Media/logo.png",
    year: "2024",
    status: "Live",
    technologies: ["VS Code", "Theme", "Neon Syntax"],
    link: "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme",
    detailPage: "/products/huix-theme",
  },
]

const categories = [
  { id: "all", label: "ALL PRODUCTS", icon: Grid, count: products.length },
  { id: "Software", label: "SOFTWARE", icon: Monitor, count: products.filter(p => p.category === "Software").length },
  { id: "Website", label: "WEBSITES", icon: Globe, count: products.filter(p => p.category === "Website").length },
  { id: "App", label: "APPS", icon: Smartphone, count: products.filter(p => p.category === "App").length },
  { id: "Game", label: "GAMES", icon: Gamepad2, count: products.filter(p => p.category === "Game").length },
  { id: "Theme", label: "THEMES", icon: Palette, count: products.filter(p => p.category === "Theme").length },
  { id: "Simulation", label: "SIMULATIONS", icon: Cpu, count: products.filter(p => p.category === "Simulation").length },
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
      case "Live": return "bg-green-500"
      case "Development": return "bg-yellow-500"
      case "Concept": return "bg-blue-500"
      default: return "bg-muted-foreground"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Software": return Monitor
      case "Website": return Globe
      case "App": return Smartphone
      case "Game": return Gamepad2
      case "Theme": return Palette
      case "Simulation": return Cpu
      default: return Grid
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Top Meta Strip */}
          <div
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>PRODUCTS</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · PRD-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>{filteredProducts.length} ITEMS</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-[300px_1fr] gap-12">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[180px] lg:text-[240px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
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
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                    style={{ fontFamily: monoFont }}
                  >
                    [02] PRODUCT SHOWCASE
                  </div>
                  <h1
                    className="text-5xl lg:text-6xl font-bold mb-6"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    PRODUCTS
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-6" />
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    A showcase of what we've built — software, websites, apps, and games
                    crafted with precision and innovation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((cat, idx) => {
              const IconComponent = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setFilter(cat.id)}
                  className={`p-4 border transition-all text-left ${filter === cat.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border hover:border-foreground/30"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className={`h-5 w-5 ${filter === cat.id ? 'text-background/70' : 'text-muted-foreground'}`} />
                    <span
                      className={`text-2xl font-bold ${filter === cat.id ? 'text-background' : 'text-foreground'}`}
                      style={{ fontFamily: monoFont }}
                    >
                      {cat.count}
                    </span>
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.12em] ${filter === cat.id ? 'text-background/70' : 'text-muted-foreground'}`}
                    style={{ fontFamily: monoFont }}
                  >
                    {cat.label}
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter & Controls Section */}
      <section className="sticky top-14 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`relative px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors ${filter === cat.id
                    ? 'text-background'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                  style={{ fontFamily: monoFont }}
                >
                  {filter === cat.id && (
                    <motion.div
                      layoutId="activeProductFilter"
                      className="absolute inset-0 bg-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.label}
                    <span className={`${filter === cat.id ? 'text-background/60' : 'text-muted-foreground/40'}`}>
                      [{cat.count}]
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground/50 mr-2" style={{ fontFamily: monoFont }}>
                VIEW
              </span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${viewMode === "grid" ? 'text-foreground' : 'text-muted-foreground/40 hover:text-muted-foreground'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? 'text-foreground' : 'text-muted-foreground/40 hover:text-muted-foreground'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              /* Grid View */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product, index) => {
                  const CategoryIcon = getCategoryIcon(product.category)
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                      onClick={() => handleProductSelect(product)}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] bg-card border border-border overflow-hidden">
                        {/* Index Number */}
                        <div
                          className="absolute top-3 left-3 z-10 text-[10px] text-foreground/30 group-hover:text-foreground/60 transition-colors"
                          style={{ fontFamily: monoFont }}
                        >
                          [{String(product.id).padStart(2, '0')}]
                        </div>

                        {/* Category & Status Badge */}
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(product.status)}`} />
                          <div
                            className="px-2 py-1 bg-background/80 backdrop-blur-sm border border-border text-[8px] uppercase tracking-[0.1em] flex items-center gap-1.5"
                            style={{ fontFamily: monoFont }}
                          >
                            <CategoryIcon className="h-3 w-3" />
                            {product.category}
                          </div>
                        </div>

                        {/* Image */}
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary">
                            <CategoryIcon className="h-16 w-16 text-muted-foreground/20" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3
                            className="text-base font-bold uppercase"
                            style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.25em' }}
                          >
                            {product.title}
                          </h3>
                          <span className="text-[9px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                            {product.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                        <div
                          className="flex items-center gap-3 text-[9px] text-muted-foreground/40 uppercase tracking-[0.1em]"
                          style={{ fontFamily: monoFont }}
                        >
                          <span>{product.platform}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                          <span className={`${product.status === "Live" ? "text-green-500" : ""}`}>{product.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              /* List View */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-border"
              >
                {/* Table Header */}
                <div
                  className="hidden md:grid grid-cols-[60px_1fr_120px_120px_100px_80px] gap-4 px-4 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60"
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
                      className="grid grid-cols-1 md:grid-cols-[60px_1fr_120px_120px_100px_80px] gap-2 md:gap-4 px-4 py-4 border-b border-border/30 last:border-b-0 hover:bg-card/30 transition-colors cursor-pointer group"
                    >
                      <div
                        className="hidden md:block text-muted-foreground/40 group-hover:text-foreground/60 transition-colors"
                        style={{ fontFamily: monoFont }}
                      >
                        [{String(product.id).padStart(2, '0')}]
                      </div>
                      <div className="flex items-center gap-4">
                        {product.image && (
                          <div className="w-12 h-9 bg-card border border-border overflow-hidden flex-shrink-0">
                            <img src={product.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div>
                          <div
                            className="font-bold text-sm group-hover:text-foreground transition-colors uppercase"
                            style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.2em' }}
                          >
                            {product.title}
                          </div>
                          <div className="text-[10px] text-muted-foreground/50 line-clamp-1">{product.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span
                          className="px-2 py-1 bg-card border border-border text-[9px] uppercase tracking-[0.1em] flex items-center gap-1.5"
                          style={{ fontFamily: monoFont }}
                        >
                          <CategoryIcon className="h-3 w-3" />
                          {product.category}
                        </span>
                      </div>
                      <div className="flex items-center text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                        {product.platform}
                      </div>
                      <div className="flex items-center gap-2 text-[10px]" style={{ fontFamily: monoFont }}>
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(product.status)}`} />
                        <span className="text-muted-foreground">{product.status}</span>
                      </div>
                      <div className="flex items-center text-[10px] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
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
            className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40"
            style={{ fontFamily: monoFont }}
          >
            <span>SHOWING {filteredProducts.length} OF {products.length} PRODUCTS</span>
            <span>PRODUCTS · p. 01</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
