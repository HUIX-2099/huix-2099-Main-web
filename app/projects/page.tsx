"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "gold-tower-premium-liberia-properties",
      title: "Gold Tower - Premium Liberia Properties",
      category: "Real Estate",
      type: "Major",
      relation: "Related",
      desc: "Flagship premium mixed‑use development opportunity in Liberia.",
      details:
        "A premier real estate initiative focused on luxury residential, commercial, and hospitality spaces located in Liberia.",
      technologies: ["Architecture", "Engineering", "Sustainability"],
      image: "/images/architech.jpg",
      imageLight: "/images/architech.jpg",
      imageDark: "/images/architech.jpg",
      href: "https://gold-tower-liberia-property-website.vercel.app/",
    },
    {
      id: "huix-horizen",
      title: "HUIX-HORIZEN",
      category: "Company Property",
      type: "Major",
      relation: "Related",
      desc: "Immersive AR/VR visualization platform for enterprise experiences.",
      details: "Flagship visualization stack showcasing interactive 3D, VR walkthroughs, and real-time rendering.",
      technologies: ["Unity", "WebGL", "VR"],
      image: "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg",
      imageLight: "/images/h-20-20u-20-20i-20-20x-20-20horizen-20white-20version.jpg",
      imageDark: "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg",
      href: "/huix-horizen",
    },
    {
      id: "virtual-past-liberia",
      title: "Virtual Past Liberia Museum",
      category: "Company Property",
      type: "Major",
      relation: "Related",
      desc: "Digital cultural heritage experience preserving Liberia’s past in immersive form.",
      details: "A museum-grade interactive narrative platform blending archives and 3D storytelling.",
      technologies: ["Three.js", "Story Systems", "Curation"],
      image: "/images/virtual-20past-20liberia-20dark-20main-20version.jpg",
      imageLight: "/images/virtual-20past-20liberia-20white-20main-20version.jpg",
      imageDark: "/images/virtual-20past-20liberia-20dark-20main-20version.jpg",
      href: "/virtual-past-liberia",
    },
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedRelation, setSelectedRelation] = useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesType = selectedType === "all" || (project as any).type === selectedType
    const matchesRelation = selectedRelation === "all" || (project as any).relation === selectedRelation
    return matchesSearch && matchesCategory && matchesType && matchesRelation
  })

  const categories = ["all", ...new Set(projects.map((p) => p.category))]
  const types = ["all", ...new Set((projects as any[]).map((p) => (p as any).type))]
  const relations = ["all", ...new Set((projects as any[]).map((p) => (p as any).relation))]

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Doc-style header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-14">
            <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
              <div className="flex items-center gap-6">
                <div className="text-5xl md:text-7xl font-bold leading-none tracking-tight">01</div>
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Projects Index</h1>
                  <p className="text-sm md:text-base text-muted-foreground">Serious, modular, document-forward layout</p>
                </div>
              </div>
              <div className="hidden md:block text-xs text-muted-foreground uppercase tracking-widest">Series / 01 · v1</div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mb-10 md:mb-14 grid md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-secondary border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 focus:border-foreground/50"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-md text-sm font-medium border ${
                    selectedCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-secondary text-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type and Relation filters */}
          <div className="mb-10 md:mb-14 grid md:grid-cols-3 gap-4">
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-2 rounded-md text-sm font-medium border ${
                    selectedType === t
                      ? "bg-foreground text-background border-foreground"
                      : "bg-secondary text-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  {t === "all" ? "All Types" : t}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap md:col-span-2">
              {relations.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRelation(r)}
                  className={`px-3 py-2 rounded-md text-sm font-medium border ${
                    selectedRelation === r
                      ? "bg-foreground text-background border-foreground"
                      : "bg-secondary text-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  {r === "all" ? "All Relations" : r}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal cards row */}
          <div className="grid grid-flow-col auto-cols-[minmax(320px,420px)] gap-6 overflow-x-auto pb-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="group bg-card border border-border rounded-lg overflow-hidden"
              >
                <Link href={(project as any).href || `/projects/${project.id}`} className="block">
                  <div className="relative h-48 bg-secondary overflow-hidden">
                    {/* Light mode image */}
                    <img
                      src={(project as any).imageLight || project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 dark:hidden"
                    />
                    {/* Dark mode image */}
                    <img
                      src={(project as any).imageDark || (project as any).imageLight || project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="hidden dark:block w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 bg-background/80 border border-border rounded">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Project</span>
                      <span className="text-3xl font-bold leading-none">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">{project.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
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
