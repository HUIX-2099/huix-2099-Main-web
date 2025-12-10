"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"
import { HeroPrototypeWithVideo, HeroPrototypeWithImage } from "./hero-prototype"
import Link from "next/link"
import { ArrowUpRight, Play, Image as ImageIcon, X, Expand, Share2 } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

interface Prototype {
  id: string
  title: string
  description: string
  type: "video" | "image"
  mediaSrc: string
  category: string
  technologies: string[]
  status: "completed" | "in-progress" | "prototype"
  projectUrl?: string
  code?: string
}

const prototypes: Prototype[] = [
  {
    id: "virtual-liberia",
    title: "Virtual Past Liberia",
    description: "3D programming testing of the Virtual Past Liberia project - immersive heritage reconstruction",
    type: "video",
    mediaSrc: "https://drive.google.com/file/d/1gkMQ2I1oP-_BG66zr152D-Vf8iE3l1xA/view?usp=drive_link",
    category: "Virtual Heritage",
    technologies: ["VR", "3D Programming", "Unity", "C#"],
    status: "in-progress",
    projectUrl: "/virtual-past-liberia",
    code: "VPL-001"
  },
  {
    id: "display-case",
    title: "Display Case - 2D Version",
    description: "2D version of the 3D prototype display case from the Virtual Past Liberia project",
    type: "image",
    mediaSrc: "/prototypes_vid_pic/display case.png",
    category: "Virtual Heritage",
    technologies: ["2D Design", "UI/UX", "Figma", "Prototyping"],
    status: "completed",
    projectUrl: "/virtual-past-liberia",
    code: "DSP-002"
  },
  {
    id: "museum-building",
    title: "The Ancestral Grid — Museum Building",
    description: "Architecture by Amanda Anderson — A fusion of art, science, and symbolism. Early 3D wireframe concept.",
    type: "image",
    mediaSrc: "/WhatsApp%20Image%202025-10-30%20at%2020.22.09_b72f70f2.jpg",
    category: "Virtual Heritage",
    technologies: ["Revit", "3D Modeling", "Architecture"],
    status: "prototype",
    projectUrl: "/virtual-past-liberia",
    code: "ARC-003"
  }
]

const statusConfig = {
  completed: { label: "COMPLETED", color: "#22c55e" },
  "in-progress": { label: "IN PROGRESS", color: "#3b82f6" }, 
  prototype: { label: "PROTOTYPE", color: "#a855f7" }
}

export function PrototypesShowcase() {
  const { resolvedTheme } = useTheme()
  const [selectedPrototype, setSelectedPrototype] = useState<Prototype | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [showModal, setShowModal] = useState(false)
  const [modalMedia, setModalMedia] = useState<{ type: "video" | "image"; src: string; title: string } | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const categories = ["all", ...Array.from(new Set(prototypes.map(p => p.category)))]
  const filteredPrototypes = filter === "all" 
    ? prototypes 
    : prototypes.filter(p => p.category === filter)

  const handleShare = (prototype: Prototype) => {
    const shareUrl = `${window.location.origin}/prototypes#${prototype.id}`
    const shareText = `Check out ${prototype.title} - ${prototype.description}`
    
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
    window.open(fbShareUrl, '_blank', 'width=600,height=400')
  }

  const handleViewLarger = (prototype: Prototype) => {
    setModalMedia({
      type: prototype.type,
      src: prototype.mediaSrc,
      title: prototype.title
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalMedia(null)
  }

  if (selectedPrototype) {
    return (
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="relative z-20 p-6 border-b border-border">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedPrototype(null)}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: monoFont }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              BACK TO PROTOTYPES
            </motion.button>
            <div className="text-[10px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
              {selectedPrototype.code} · {statusConfig[selectedPrototype.status].label}
            </div>
          </div>
        </div>

        {/* Hero Section with Selected Prototype */}
        {selectedPrototype.type === "video" ? (
          <HeroPrototypeWithVideo src={selectedPrototype.mediaSrc}>
            <div className="text-center text-white px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4" style={{ fontFamily: monoFont }}>
                  {selectedPrototype.category}
                </div>
                <h1 
                  className="text-4xl lg:text-6xl font-bold mb-4"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  {selectedPrototype.title.toUpperCase()}
                </h1>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-white/70">
                  {selectedPrototype.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {selectedPrototype.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[11px] uppercase tracking-wider"
                      style={{ fontFamily: monoFont }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </HeroPrototypeWithVideo>
        ) : (
          <HeroPrototypeWithImage src={selectedPrototype.mediaSrc}>
            <div className="text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4" style={{ fontFamily: monoFont }}>
                  {selectedPrototype.category}
                </div>
                <h1 
                  className="text-4xl lg:text-6xl font-bold mb-4"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                >
                  {selectedPrototype.title.toUpperCase()}
                </h1>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                  {selectedPrototype.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {selectedPrototype.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-foreground/10 backdrop-blur-sm text-[11px] uppercase tracking-wider border border-foreground/20"
                      style={{ fontFamily: monoFont }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </HeroPrototypeWithImage>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
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
              <span>PROTOTYPES</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · PRT-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>{filteredPrototypes.length} ITEMS</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[160px] lg:text-[220px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
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
                    [01] EXPERIMENTAL LAB
                  </div>
                  <h1 
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    PROTOTYPES
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-6" />
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
                    Experimental designs and innovative concepts pushing the boundaries 
                    of digital experiences. Each prototype represents our commitment to 
                    innovation and technical excellence.
                  </p>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                          filter === category
                            ? "bg-foreground text-background"
                            : "bg-transparent border border-foreground/20 text-muted-foreground hover:border-foreground/40"
                        }`}
                        style={{ fontFamily: monoFont }}
                      >
                        {category === "all" ? "ALL" : category}
                      </button>
                    ))}
                  </div>
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
              onMouseEnter={() => setHoveredCard('main')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full max-w-[360px] h-[280px] mx-auto">
                {/* Hidden Info */}
                <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${hoveredCard === 'main' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
                    Lab Status
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
                    <div className="flex justify-between"><span>Total Prototypes</span><span className="text-neutral-300">{prototypes.length}</span></div>
                    <div className="flex justify-between"><span>Completed</span><span className="text-green-400">{prototypes.filter(p => p.status === 'completed').length}</span></div>
                    <div className="flex justify-between"><span>In Progress</span><span className="text-blue-400">{prototypes.filter(p => p.status === 'in-progress').length}</span></div>
                    <div className="flex justify-between"><span>Prototype Stage</span><span className="text-purple-400">{prototypes.filter(p => p.status === 'prototype').length}</span></div>
                    <div className="flex justify-between"><span>Technologies</span><span className="text-purple-400">{[...new Set(prototypes.flatMap(p => p.technologies))].length}</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
                    <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
                      HUIX-2099 Innovation Lab · Monrovia, LBR
                    </div>
                  </div>
                </div>

                {/* Wallet Body */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-transform duration-300 ${hoveredCard === 'main' ? '-translate-y-4' : ''}`}
                  style={{ backgroundColor: '#1a1a1a', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                />

                {/* Gray Card */}
                <div 
                  className={`absolute -top-6 left-3 right-3 h-20 rounded-lg transition-transform duration-300 ${hoveredCard === 'main' ? '-translate-y-6' : ''}`}
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <div>SN-PRT-2024</div>
                    <div>REV-B1</div>
                    <div>LAB-001</div>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    ○ EXPERIMENTAL
                  </div>
                  <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
                    <div className="text-lg font-bold text-neutral-400">{prototypes.length}</div>
                    <div className="text-lg font-bold text-neutral-500">ACTIVE</div>
                  </div>
                </div>

                {/* Purple Accent Card */}
                <div 
                  className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${hoveredCard === 'main' ? '-translate-y-5' : ''}`}
                  style={{ backgroundColor: '#a855f7' }}
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
                      PROTO
                    </div>
                    <div className="text-3xl font-bold text-black leading-none tracking-[0.08em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      TYPES
                    </div>
                    <div className="absolute top-4 right-4 text-right text-[7px] text-black/60" style={{ fontFamily: monoFont }}>
                      <div>VR · 3D · UI</div>
                      <div>INNOVATION</div>
                      <div className="mt-1">v2.0</div>
                    </div>
                  </div>
                </div>

                {/* Accent Tab */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${hoveredCard === 'main' ? '-translate-y-8' : '-translate-y-1/2'}`}
                  style={{ backgroundColor: '#a855f7' }} 
                />

                {/* Keychain */}
                <div className={`absolute -right-12 top-1/3 transition-transform duration-300 ${hoveredCard === 'main' ? '-translate-y-3' : ''}`}>
                  <div className="w-3 h-6 bg-neutral-700 rounded-sm" />
                  <div className="w-2 h-12 bg-neutral-800 rounded-sm mx-auto" />
                  <div className="w-6 h-6 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                  {hoveredCard === 'main' ? 'Release to close' : 'Hover to reveal'}
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
                Lab · Overview
              </div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                INNOVATION LAB
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                Our experimental playground where ideas transform into reality. Each prototype 
                pushes boundaries in VR, 3D visualization, and interactive design.
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(statusConfig).map(([key, config]) => (
                  <div key={key} className="px-3 py-2 bg-neutral-800/50 border border-neutral-700 text-[10px]" style={{ fontFamily: monoFont }}>
                    <span className="text-neutral-500">{config.label}:</span>{' '}
                    <span style={{ color: config.color }}>{prototypes.filter(p => p.status === key).length}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="py-16 lg:py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-12">
            <div 
              className="text-[100px] lg:text-[140px] font-bold leading-none text-foreground/[0.03]"
              style={{ fontFamily: 'Mohican, sans-serif' }}
            >
              02
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2" style={{ fontFamily: monoFont }}>
                SHOWCASE
              </div>
              <h2 
                className="text-2xl lg:text-3xl font-bold"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                ALL PROTOTYPES
              </h2>
            </div>
          </div>

          {/* Grid */}
          <div className="space-y-20">
            {filteredPrototypes.map((prototype, index) => (
              <motion.div
                key={prototype.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Media */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    {/* Index Number */}
                    <div 
                      className="absolute -top-6 -left-2 lg:-left-4 text-[60px] lg:text-[80px] font-bold leading-none text-foreground/[0.04] select-none z-0"
                      style={{ fontFamily: 'Mohican, sans-serif' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Media Container */}
                    <div className="relative overflow-hidden bg-neutral-900 border border-border">
                      <div className="aspect-video relative overflow-hidden">
                        {prototype.type === "video" ? (
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src={prototype.mediaSrc} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={prototype.mediaSrc}
                            alt={prototype.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <button
                            onClick={() => handleViewLarger(prototype)}
                            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <Expand className="w-5 h-5 text-white" />
                          </button>
                          <button
                            onClick={() => handleShare(prototype)}
                            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <Share2 className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 right-3">
                        <span 
                          className="px-2 py-1 bg-black/80 backdrop-blur-sm text-[9px] uppercase tracking-wider text-white/70 flex items-center gap-1.5"
                          style={{ fontFamily: monoFont }}
                        >
                          {prototype.type === "video" ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                          {prototype.type}
                        </span>
                      </div>

                      {/* Code Badge */}
                      <div className="absolute bottom-3 left-3">
                        <span 
                          className="px-2 py-1 bg-black/80 backdrop-blur-sm text-[9px] uppercase tracking-wider text-white/50"
                          style={{ fontFamily: monoFont }}
                        >
                          {prototype.code}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-5">
                    {/* Status & Category */}
                    <div className="flex items-center gap-3">
                      <span 
                        className="px-2 py-1 text-[9px] uppercase tracking-wider"
                        style={{ 
                          fontFamily: monoFont,
                          backgroundColor: `${statusConfig[prototype.status].color}20`,
                          color: statusConfig[prototype.status].color,
                          border: `1px solid ${statusConfig[prototype.status].color}40`
                        }}
                      >
                        {statusConfig[prototype.status].label}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                        {prototype.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl lg:text-3xl font-bold"
                      style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.08em' }}
                    >
                      {prototype.title.toUpperCase()}
                    </h3>

                    {/* Divider */}
                    <div className="h-px w-12 bg-foreground/20" />

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {prototype.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-2" style={{ fontFamily: monoFont }}>
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {prototype.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-foreground/5 border border-foreground/10 text-[10px] uppercase tracking-wider text-muted-foreground"
                            style={{ fontFamily: monoFont }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {prototype.projectUrl && (
                        <Link
                          href={prototype.projectUrl}
                          className="group px-5 py-2.5 bg-foreground text-background text-[11px] uppercase tracking-wider flex items-center gap-2 hover:bg-foreground/90 transition-colors"
                          style={{ fontFamily: monoFont }}
                        >
                          View Project
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      )}
                      
                      <button
                        onClick={() => setSelectedPrototype(prototype)}
                        className="px-5 py-2.5 bg-transparent border border-foreground/20 text-[11px] uppercase tracking-wider text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors"
                        style={{ fontFamily: monoFont }}
                      >
                        Full View
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && modalMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Modal Header */}
              <div className="bg-neutral-900 border-b border-neutral-800 p-4 flex items-center justify-between">
                <h3 
                  className="text-sm uppercase tracking-wider text-white"
                  style={{ fontFamily: monoFont }}
                >
                  {modalMedia.title}
                </h3>
                <span className="text-[10px] text-neutral-500" style={{ fontFamily: monoFont }}>
                  {modalMedia.type.toUpperCase()}
                </span>
              </div>
              
              {/* Modal Content */}
              <div className="aspect-video bg-black">
                {modalMedia.type === "video" ? (
                  <video
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                  >
                    <source src={modalMedia.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={modalMedia.src}
                    alt={modalMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
