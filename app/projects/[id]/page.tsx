"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectData: Record<string, any> = {
  "gold-tower-premium-liberia-properties": {
    title: "Gold Tower - Premium Liberia Properties",
    category: "Real Estate",
    type: "Major",
    relation: "Related",
    year: "2025",
    description: "Flagship premium mixed‑use development opportunity in Liberia.",
    image: "/placeholder.svg",
    overview:
      "A premier real estate initiative focused on luxury residential, commercial, and hospitality spaces. Designed to set a new benchmark for premium mixed‑use experiences in Liberia.",
    highlights: [
      "Luxury residential, commercial, and hospitality programming",
      "Sustainability-first engineering and materials",
      "Modern urban integration with community amenities",
    ],
    technologies: ["Architecture", "Engineering", "Sustainability"],
    location: "Liberia",
    status: "In Development",
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id]

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-foreground hover:text-foreground/80">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-14">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-6">
                <div className="text-5xl md:text-7xl font-bold leading-none tracking-tight">01</div>
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {project.category} • {project.type} • {project.relation}
                  </p>
                </div>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
            </div>
          </motion.div>

          {/* Hero image */}
          <div className="relative h-60 md:h-96 w-full overflow-hidden rounded-lg bg-secondary border border-border mb-10">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground mb-3">Overview</h2>
                <p className="text-foreground/90 leading-relaxed">{project.overview}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground mb-3">Highlights</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {project.highlights.map((h: string) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Meta</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Location</span><span>{project.location}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span>{project.status}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Year</span><span>{project.year}</span></div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="text-[11px] px-2 py-1 bg-secondary border border-border rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
