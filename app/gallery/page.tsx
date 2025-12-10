"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Eye, Download, Share2, Grid, List, ArrowUpRight, X } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image?: string
  year: string
  type: string
  dimensions?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "3D Robotics Engineering",
    category: "VR",
    description: "Advanced orange robotic arm assembly and real-time visualization in lab environment",
    image: "/images/gallary1.png",
    year: "2024",
    type: "Render",
    dimensions: "4K"
  },
  {
    id: 2,
    title: "3D Architecture Render",
    category: "3D",
    description: "Interactive architectural visualization for modern residential complex",
    image: "/images/architech.jpg",
    year: "2024",
    type: "Visualization",
    dimensions: "8K"
  },
  {
    id: 3,
    title: "AI Dashboard Interface",
    category: "AI",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "/images/dan-20lehman-20-20qrs-20creative.jpg",
    year: "2024",
    type: "UI Design",
    dimensions: "1920×1080"
  },
  {
    id: 4,
    title: "XR Experience Design",
    category: "VR",
    description: "Extended reality interactive experience for immersive storytelling",
    image: "/images/generated-20image-20november-2006-2c-202025-20-206-12pm-20-282-29.png",
    year: "2024",
    type: "XR Design",
    dimensions: "Spatial"
  },
  {
    id: 5,
    title: "Web Platform Design",
    category: "Web",
    description: "SaaS platform user interface with modern design principles",
    image: "/images/lecube-20-20welcome.jpg",
    year: "2024",
    type: "Web Design",
    dimensions: "Responsive"
  },
  {
    id: 6,
    title: "Brand Identity System",
    category: "Animation",
    description: "3D motion graphics sequence for corporate identity",
    image: "/images/join-20us-20white-20theme.png",
    year: "2024",
    type: "Motion",
    dimensions: "4K 60fps"
  },
  {
    id: 7,
    title: "Heritage Site Scan",
    category: "3D",
    description: "Photogrammetry capture of historical Liberian landmark",
    image: "/images/3d.png",
    year: "2024",
    type: "3D Scan",
    dimensions: "High-Poly"
  },
  {
    id: 8,
    title: "Neural Network Viz",
    category: "AI",
    description: "Complex data visualization of deep learning architecture",
    year: "2024",
    type: "Data Viz",
    dimensions: "Vector"
  },
  {
    id: 9,
    title: "Floor Plan VR",
    category: "VR",
    description: "Interactive floor plan exploration in virtual reality",
    image: "/images/ground-20floor.png",
    year: "2024",
    type: "VR App",
    dimensions: "Spatial"
  },
  {
    id: 10,
    title: "Product 3D Model",
    category: "3D",
    description: "High-fidelity 3D product model for e-commerce",
    year: "2024",
    type: "3D Model",
    dimensions: "PBR"
  },
  {
    id: 11,
    title: "Motion Graphics Reel",
    category: "Animation",
    description: "Animated brand identity showcase",
    year: "2024",
    type: "Motion",
    dimensions: "4K 30fps"
  },
  {
    id: 12,
    title: "AR Navigation",
    category: "Mobile",
    description: "Augmented reality wayfinding application",
    year: "2024",
    type: "AR App",
    dimensions: "Mobile"
  },
]

const categories = [
  { id: "all", label: "ALL WORKS", count: galleryItems.length },
  { id: "VR", label: "VR/XR", count: galleryItems.filter(i => i.category === "VR").length },
  { id: "AI", label: "AI/ML", count: galleryItems.filter(i => i.category === "AI").length },
  { id: "3D", label: "3D", count: galleryItems.filter(i => i.category === "3D").length },
  { id: "Web", label: "WEB", count: galleryItems.filter(i => i.category === "Web").length },
  { id: "Animation", label: "MOTION", count: galleryItems.filter(i => i.category === "Animation").length },
  { id: "Mobile", label: "MOBILE", count: galleryItems.filter(i => i.category === "Mobile").length },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((img) => img.category === filter)

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
              <span>GALLERY</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · GAL-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>{filteredItems.length} ITEMS</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-[300px_1fr] gap-12">
              {/* Left - Large Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[180px] lg:text-[240px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
              >
                G
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
                    [01] VISUAL ARCHIVE
                  </div>
                  <h1 
                    className="text-5xl lg:text-6xl font-bold mb-6"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    GALLERY
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-6" />
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    A curated collection of our work across immersive technologies, 
                    3D visualization, and digital innovation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardholder Section */}
      <section className="py-10 bg-[#202020]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Card Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="relative w-full max-w-[360px] h-[280px] mx-auto">
                {/* Hidden Info */}
                <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${isCardHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
                    Archive Info
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
                    <div className="flex justify-between"><span>Total Items</span><span className="text-neutral-300">{galleryItems.length}</span></div>
                    <div className="flex justify-between"><span>VR/XR Works</span><span className="text-neutral-300">{galleryItems.filter(i => i.category === "VR").length}</span></div>
                    <div className="flex justify-between"><span>3D Models</span><span className="text-neutral-300">{galleryItems.filter(i => i.category === "3D").length}</span></div>
                    <div className="flex justify-between"><span>AI Projects</span><span className="text-neutral-300">{galleryItems.filter(i => i.category === "AI").length}</span></div>
                    <div className="flex justify-between"><span>Last Updated</span><span className="text-cyan-400">2024</span></div>
                    <div className="flex justify-between"><span>Status</span><span className="text-cyan-400">Active</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
                    <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
                      HUIX-2099 Visual Archive · Monrovia, Liberia
                    </div>
                  </div>
                </div>

                {/* Wallet Body */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-transform duration-300 ${isCardHovered ? '-translate-y-4' : ''}`}
                  style={{ backgroundColor: '#1a1a1a', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                />

                {/* Gray Card */}
                <div 
                  className={`absolute -top-6 left-3 right-3 h-20 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-6' : ''}`}
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <div>SN-GAL-2024</div>
                    <div>REV-A1</div>
                    <div>ARC-001</div>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    ○ ARCHIVE
                  </div>
                  <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
                    <div className="text-lg font-bold text-neutral-400">{galleryItems.length}</div>
                    <div className="text-lg font-bold text-neutral-500">WORKS</div>
                  </div>
                </div>

                {/* Cyan Accent Card */}
                <div 
                  className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-5' : ''}`}
                  style={{ backgroundColor: '#06b6d4' }}
                >
                  <div 
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full"
                    style={{ backgroundColor: '#1a1a1a' }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                      <span className="text-[7px] text-black/50" style={{ fontFamily: monoFont }}>© HUIX 2025</span>
                    </div>
                    <div className="text-4xl font-bold text-black leading-none tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      VISUAL
                    </div>
                    <div className="text-3xl font-bold text-black leading-none tracking-[0.08em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      ARCHIVE
                    </div>
                    <div className="absolute top-4 right-4 text-right text-[7px] text-black/60" style={{ fontFamily: monoFont }}>
                      <div>VR · 3D · AI</div>
                      <div>GALLERY</div>
                      <div className="mt-1">v1.0</div>
                    </div>
                  </div>
                </div>

                {/* Accent Tab */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${isCardHovered ? '-translate-y-8' : '-translate-y-1/2'}`}
                  style={{ backgroundColor: '#06b6d4' }} 
                />

                {/* Keychain */}
                <div className={`absolute -right-12 top-1/3 transition-transform duration-300 ${isCardHovered ? '-translate-y-3' : ''}`}>
                  <div className="w-3 h-6 bg-neutral-700 rounded-sm" />
                  <div className="w-2 h-12 bg-neutral-800 rounded-sm mx-auto" />
                  <div className="w-6 h-6 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                  {isCardHovered ? 'Release to close' : 'Hover to reveal'}
                </span>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                Archive · Overview
              </div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                VISUAL ARCHIVE
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                Our gallery showcases the breadth of HUIX-2099's creative output — from immersive VR experiences to AI-powered visualizations and architectural renders.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "VR/XR", value: galleryItems.filter(i => i.category === "VR").length },
                  { label: "3D", value: galleryItems.filter(i => i.category === "3D").length },
                  { label: "AI", value: galleryItems.filter(i => i.category === "AI").length },
                ].map((stat, i) => (
                  <div key={i} className="px-3 py-2 bg-neutral-800/50 border border-neutral-700 text-[10px]" style={{ fontFamily: monoFont }}>
                    <span className="text-neutral-500">{stat.label}:</span>{' '}
                    <span className="text-neutral-300">{stat.value} works</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
                      layoutId="activeFilter"
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

      {/* Gallery Content */}
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
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] bg-card border border-border overflow-hidden">
                      {/* Index Number */}
                      <div 
                        className="absolute top-3 left-3 z-10 text-[10px] text-foreground/30 group-hover:text-foreground/60 transition-colors"
                        style={{ fontFamily: monoFont }}
                      >
                        [{String(item.id).padStart(2, '0')}]
                      </div>

                      {/* Category Badge */}
                      <div 
                        className="absolute top-3 right-3 z-10 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border text-[8px] uppercase tracking-[0.1em]"
                        style={{ fontFamily: monoFont }}
                      >
                        {item.category}
                      </div>

                      {/* Image */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div 
                            className="text-6xl font-bold text-foreground/5"
                            style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                          >
                            {item.category}
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={false}
                        animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-white text-black"
                        >
                          <Eye className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-3 border border-white/30 text-white hover:bg-white/10"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 
                          className="text-base font-bold"
                          style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
                        >
                          {item.title}
                        </h3>
                        <span className="text-[9px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                      <div 
                        className="flex items-center gap-3 text-[9px] text-muted-foreground/40 uppercase tracking-[0.1em]"
                        style={{ fontFamily: monoFont }}
                      >
                        <span>{item.type}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                        <span>{item.dimensions}</span>
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
                className="border border-border"
              >
                {/* Table Header */}
                <div 
                  className="grid grid-cols-[60px_1fr_120px_100px_100px_80px] gap-4 px-4 py-3 bg-card/50 border-b border-border text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60"
                  style={{ fontFamily: monoFont }}
                >
                  <span>IDX</span>
                  <span>TITLE</span>
                  <span>CATEGORY</span>
                  <span>TYPE</span>
                  <span>DIMENSIONS</span>
                  <span>YEAR</span>
                </div>

                {/* Table Rows */}
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedImage(item)}
                    className="grid grid-cols-[60px_1fr_120px_100px_100px_80px] gap-4 px-4 py-4 border-b border-border/30 last:border-b-0 hover:bg-card/30 transition-colors cursor-pointer group"
                  >
                    <div 
                      className="text-muted-foreground/40 group-hover:text-foreground/60 transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      [{String(item.id).padStart(2, '0')}]
                    </div>
                    <div className="flex items-center gap-4">
                      {item.image && (
                        <div className="w-12 h-9 bg-card border border-border overflow-hidden flex-shrink-0">
                          <img src={item.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div>
                        <div 
                          className="font-bold text-sm group-hover:text-foreground transition-colors"
                          style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.03em' }}
                        >
                          {item.title}
                        </div>
                        <div className="text-[10px] text-muted-foreground/50 line-clamp-1">{item.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span 
                        className="px-2 py-1 bg-card border border-border text-[9px] uppercase tracking-[0.1em]"
                        style={{ fontFamily: monoFont }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      {item.type}
                    </div>
                    <div className="flex items-center text-[10px] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                      {item.dimensions}
                    </div>
                    <div className="flex items-center text-[10px] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
                      {item.year}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div 
            className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40"
            style={{ fontFamily: monoFont }}
          >
            <span>SHOWING {filteredItems.length} OF {galleryItems.length} ITEMS</span>
            <span>GALLERY · p. 01</span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                {/* Image */}
                <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden">
                  {selectedImage.image ? (
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span 
                        className="text-8xl font-bold text-white/5"
                        style={{ fontFamily: 'Mohican, sans-serif' }}
                      >
                        {selectedImage.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Panel */}
                <div className="text-white">
                  <div 
                    className="text-[9px] uppercase tracking-[0.15em] text-neutral-500 mb-2"
                    style={{ fontFamily: monoFont }}
                  >
                    [{String(selectedImage.id).padStart(2, '0')}] · {selectedImage.category}
                  </div>
                  <h2 
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.08em' }}
                  >
                    {selectedImage.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>

                  {/* Specs */}
                  <div className="border border-neutral-800">
                    <div 
                      className="px-4 py-2 bg-neutral-900/50 border-b border-neutral-800 text-[9px] uppercase tracking-[0.12em] text-neutral-500"
                      style={{ fontFamily: monoFont }}
                    >
                      SPECIFICATIONS
                    </div>
                    {[
                      { label: "TYPE", value: selectedImage.type },
                      { label: "DIMENSIONS", value: selectedImage.dimensions },
                      { label: "YEAR", value: selectedImage.year },
                      { label: "CATEGORY", value: selectedImage.category },
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

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black text-[10px] uppercase tracking-[0.1em] hover:bg-neutral-200 transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                    <button 
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-neutral-700 text-white text-[10px] uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
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
