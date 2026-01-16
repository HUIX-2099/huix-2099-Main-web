"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Eye, Grid, List, ArrowUpRight, X, Monitor, Globe, Smartphone, Gamepad2, ExternalLink } from "lucide-react"
import Link from "next/link"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

interface Product {
  id: number
  title: string
  category: "Software" | "Website" | "App" | "Game"
  platform: string
  description: string
  image?: string
  year: string
  status: "Live" | "Development" | "Concept"
  technologies: string[]
  link?: string
}

const products: Product[] = [
  // Computer Software
  {
    id: 1,
    title: "HUIX Assistant Desktop",
    category: "Software",
    platform: "Windows / Mac / Linux",
    description: "AI-powered desktop assistant for productivity and creative workflows",
    image: "/images/dan-20lehman-20-20qrs-20creative.jpg",
    year: "2024",
    status: "Development",
    technologies: ["Electron", "TypeScript", "AI/ML"],
  },
  {
    id: 2,
    title: "3D Model Viewer Pro",
    category: "Software",
    platform: "Windows",
    description: "Professional 3D model viewer with real-time rendering and annotation tools",
    image: "/images/3d.png",
    year: "2024",
    status: "Concept",
    technologies: ["C++", "OpenGL", "Qt"],
  },
  // Websites
  {
    id: 3,
    title: "HUIX-2099 Main Website",
    category: "Website",
    platform: "Web",
    description: "Company portfolio and product showcase with immersive design",
    image: "/images/lecube-20-20welcome.jpg",
    year: "2024",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    link: "/",
  },
  {
    id: 4,
    title: "Gold Tower Liberia",
    category: "Website",
    platform: "Web",
    description: "Premium real estate property showcase for luxury development in Liberia",
    image: "/images/architech.jpg",
    year: "2024",
    status: "Live",
    technologies: ["Next.js", "Tailwind", "Vercel"],
    link: "https://gold-tower-liberia-property-website.vercel.app/",
  },
  {
    id: 5,
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
  // Apps
  {
    id: 6,
    title: "HUIX Mobile Companion",
    category: "App",
    platform: "iOS / Android",
    description: "Mobile companion app for HUIX ecosystem with AR features",
    image: "/images/generated-20image-20november-2006-2c-202025-20-206-12pm-20-282-29.png",
    year: "2024",
    status: "Concept",
    technologies: ["React Native", "AR Kit", "AR Core"],
  },
  {
    id: 7,
    title: "Heritage AR Explorer",
    category: "App",
    platform: "iOS / Android",
    description: "Augmented reality app for exploring Liberian cultural heritage sites",
    year: "2024",
    status: "Concept",
    technologies: ["Unity", "AR Foundation", "GPS"],
  },
  // Games
  {
    id: 8,
    title: "Virtual Past VR Experience",
    category: "Game",
    platform: "VR / Meta Quest",
    description: "Immersive VR journey through historical Liberia",
    image: "/images/gallary1.png",
    year: "2024",
    status: "Development",
    technologies: ["Unity", "VR SDK", "3D Audio"],
  },
  {
    id: 9,
    title: "HUIX-HORIZEN Demo",
    category: "Game",
    platform: "PC / VR",
    description: "Interactive showcase of the HUIX-HORIZEN visualization platform",
    image: "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg",
    year: "2024",
    status: "Development",
    technologies: ["Unity", "WebGL", "C#"],
    link: "/huix-horizen",
  },
  {
    id: 10,
    title: "Liberia Heritage Quest",
    category: "Game",
    platform: "Mobile",
    description: "Educational mobile game exploring Liberian history and culture",
    year: "2025",
    status: "Concept",
    technologies: ["Unity", "Mobile SDK", "AR"],
  },
]

const categories = [
  { id: "all", label: "ALL PRODUCTS", icon: Grid, count: products.length },
  { id: "Software", label: "SOFTWARE", icon: Monitor, count: products.filter(p => p.category === "Software").length },
  { id: "Website", label: "WEBSITES", icon: Globe, count: products.filter(p => p.category === "Website").length },
  { id: "App", label: "APPS", icon: Smartphone, count: products.filter(p => p.category === "App").length },
  { id: "Game", label: "GAMES", icon: Gamepad2, count: products.filter(p => p.category === "Game").length },
]

export default function ProductsPage() {
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

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
                  className={`p-4 border transition-all text-left ${
                    filter === cat.id
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
                  className={`relative px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                    filter === cat.id 
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
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedProduct(product)}
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

                        {/* Hover Overlay */}
                        <motion.div
                          initial={false}
                          animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-3 bg-white text-black"
                          >
                            <Eye className="h-5 w-5" />
                          </motion.button>
                          {product.link && (
                            <motion.div whileHover={{ scale: 1.1 }}>
                              <Link
                                href={product.link}
                                target={product.link.startsWith("http") ? "_blank" : undefined}
                                className="p-3 border border-white/30 text-white hover:bg-white/10 block"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="h-5 w-5" />
                              </Link>
                            </motion.div>
                          )}
                        </motion.div>
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
                      onClick={() => setSelectedProduct(product)}
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                {/* Image */}
                <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden">
                  {selectedProduct.image ? (
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {(() => {
                        const IconComp = getCategoryIcon(selectedProduct.category)
                        return <IconComp className="h-24 w-24 text-white/10" />
                      })()}
                    </div>
                  )}
                </div>

                {/* Info Panel */}
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${getStatusColor(selectedProduct.status)}`} />
                    <span 
                      className="text-[9px] uppercase tracking-[0.15em] text-neutral-500"
                      style={{ fontFamily: monoFont }}
                    >
                      [{String(selectedProduct.id).padStart(2, '0')}] · {selectedProduct.category} · {selectedProduct.status}
                    </span>
                  </div>
                  <h2 
                    className="text-2xl font-bold mb-4 uppercase"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.25em' }}
                  >
                    {selectedProduct.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Specs */}
                  <div className="border border-neutral-800 mb-6">
                    <div 
                      className="px-4 py-2 bg-neutral-900/50 border-b border-neutral-800 text-[9px] uppercase tracking-[0.12em] text-neutral-500"
                      style={{ fontFamily: monoFont }}
                    >
                      SPECIFICATIONS
                    </div>
                    {[
                      { label: "CATEGORY", value: selectedProduct.category },
                      { label: "PLATFORM", value: selectedProduct.platform },
                      { label: "STATUS", value: selectedProduct.status },
                      { label: "YEAR", value: selectedProduct.year },
                    ].map((spec) => (
                      <div 
                        key={spec.label}
                        className="grid grid-cols-[100px_1fr] gap-4 px-4 py-3 border-b border-neutral-800/50 last:border-b-0 text-[11px]"
                        style={{ fontFamily: monoFont }}
                      >
                        <span className="text-neutral-600 uppercase tracking-[0.1em]">{spec.label}</span>
                        <span className="text-neutral-300">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div 
                      className="text-[9px] uppercase tracking-[0.12em] text-neutral-500 mb-3"
                      style={{ fontFamily: monoFont }}
                    >
                      TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 text-[10px] text-neutral-300"
                          style={{ fontFamily: monoFont }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {selectedProduct.link && (
                      <Link
                        href={selectedProduct.link}
                        target={selectedProduct.link.startsWith("http") ? "_blank" : undefined}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black text-[10px] uppercase tracking-[0.1em] hover:bg-neutral-200 transition-colors"
                        style={{ fontFamily: monoFont }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {selectedProduct.status === "Live" ? "View Live" : "Learn More"}
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-neutral-700 text-white text-[10px] uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
