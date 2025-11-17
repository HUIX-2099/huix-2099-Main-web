"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, Search, Share2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "huix-ai-solutions",
      title: "AI & Machine Learning Solutions",
      category: "Artificial Intelligence",
      desc: "Intelligent systems for enterprise automation and data analysis",
      details:
        "Cutting-edge AI solutions leveraging transformer models for intelligent automation, predictive analytics, and enterprise optimization across industries.",
      technologies: ["TensorFlow", "Python", "GPU Computing", "Node.js"],
      image: "/ai-machine-learning.jpg",
    },
    {
      id: "3d-visualization-engine",
      title: "3D Visualization Engine",
      category: "3D Rendering",
      desc: "Real-time 3D rendering and visualization for web and desktop applications",
      details:
        "Advanced 3D rendering engine capable of processing complex geometric data with real-time performance optimization for architectural and engineering visualization.",
      technologies: ["WebGL", "Three.js", "GLSL", "WebAssembly"],
      image: "/3d-visualization-engine.jpg",
    },
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...new Set(projects.map((p) => p.category))]

  const handleShare = (projectId: string) => {
    const url = `${window.location.origin}/projects/${projectId}`
    navigator.clipboard.writeText(url)
  }

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our innovative solutions and transformative technologies. For HUIX-HORIZEN, visit our flagship
              platform page.
            </p>
          </motion.div>

          <div className="mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-secondary border border-border text-foreground hover:border-foreground/30"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-lg bg-card border border-border overflow-hidden hover:border-foreground/30 transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.desc}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Link href={`/projects/${project.id}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-4 py-2 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleShare(project.id)}
                        className="px-4 py-2 border border-border text-foreground rounded-lg font-semibold text-sm hover:bg-secondary transition-colors flex items-center gap-2"
                      >
                        <Share2 className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects match your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
