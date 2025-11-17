"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { HeroPrototypeWithVideo, HeroPrototypeWithImage } from "./hero-prototype"
import Link from "next/link"

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
    projectUrl: "/virtual-past-liberia"
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
    projectUrl: "/virtual-past-liberia"
  }
]

const statusColors = {
  completed: "bg-green-500/20 text-green-600 border-green-500/30",
  "in-progress": "bg-blue-500/20 text-blue-600 border-blue-500/30", 
  prototype: "bg-purple-500/20 text-purple-600 border-purple-500/30"
}

export function PrototypesShowcase() {
  const { theme } = useTheme()
  const [selectedPrototype, setSelectedPrototype] = useState<Prototype | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [showModal, setShowModal] = useState(false)
  const [modalMedia, setModalMedia] = useState<{ type: "video" | "image"; src: string; title: string } | null>(null)

  const categories = ["all", ...Array.from(new Set(prototypes.map(p => p.category)))]
  const filteredPrototypes = filter === "all" 
    ? prototypes 
    : prototypes.filter(p => p.category === filter)

  const handleShare = (prototype: Prototype) => {
    const shareUrl = `${window.location.origin}/prototypes#${prototype.id}`
    const shareText = `Check out ${prototype.title} - ${prototype.description}`
    
    // Facebook share
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
        <div className="relative z-20 p-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedPrototype(null)}
            className="flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-lg border hover:bg-foreground/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Prototypes
          </motion.button>
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
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  {selectedPrototype.title}
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  {selectedPrototype.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {selectedPrototype.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-black rounded-lg font-semibold"
                >
                  View Live Demo
                </motion.button>
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
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  {selectedPrototype.title}
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                  {selectedPrototype.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {selectedPrototype.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-foreground/10 backdrop-blur-sm rounded-full text-sm border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                >
                  View Live Demo
                </motion.button>
              </motion.div>
            </div>
          </HeroPrototypeWithImage>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Left: Giant Number */}
            <div className="relative">
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10">
                01
              </div>
            </div>

            {/* Right: Title, Description, and Filters */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  PROTOTYPES
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl" style={{ fontFamily: 'Mohican, sans-serif' }}>
                  Experimental designs and innovative concepts pushing the boundaries of digital experiences
                </p>
              </div>

              {/* Filter Tabs with Numbering */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(category)}
                    className={`relative group px-4 py-2 rounded-full border transition-all text-sm ${
                      filter === category
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-foreground/20 hover:border-foreground/40"
                    }`}
                  >
                    <span className="relative z-10">
                      {category === "all" ? "ALL PROTOTYPES" : category.toUpperCase()}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Prototypes Grid - Left Right Layout */}
      <div className="px-4 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto space-y-24">
          {filteredPrototypes.map((prototype, index) => (
            <motion.div
              key={prototype.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Media */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="relative group">
                  {/* Futuristic Number */}
                  <div className="absolute -top-8 -left-4 text-6xl lg:text-8xl font-bold text-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Media Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card">
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
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    {/* Clean Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg border border-foreground/20">
                        {prototype.type === "video" ? "VIDEO" : "IMAGE"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Information */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[prototype.status]}`}>
                      {prototype.status.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-sm text-foreground/50">
                      {prototype.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                      {prototype.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {prototype.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70 mb-3">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2">
                      {prototype.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background border border-foreground/20 rounded-lg text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {prototype.projectUrl && (
                      <Link
                        href={prototype.projectUrl}
                        className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Project
                      </Link>
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewLarger(prototype)}
                      className="px-6 py-3 bg-background border border-foreground/20 rounded-lg font-medium hover:border-foreground/40 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Larger
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for viewing larger images/videos */}
      {showModal && modalMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-background rounded-lg overflow-hidden">
              <div className="p-4 border-b border-foreground/10">
                <h3 className="text-lg font-semibold">{modalMedia.title}</h3>
              </div>
              
              <div className="aspect-video bg-black/50">
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
