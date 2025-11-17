"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HUIXHorizenProjectsPage() {
  const projects = [
    {
      id: "project-1",
      title: "Architectural Visualization Suite",
      description: "Real-time 3D architectural visualization with immersive VR walkthroughs",
      category: "Architecture",
      year: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-machine-learning-Sf01LbmZSDIZf3dsENh4ikt0odWcNq.jpg",
      shortDesc: "Transform building designs into interactive VR experiences for client presentations",
    },
  ]

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-background pt-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">HUIX-HORIZEN Projects</h1>
            <p className="text-xl text-muted-foreground">Showcase of immersive AR/VR visualization solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/huix-horizen/projects/${project.id}`}>
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border h-64 mb-6">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2">{project.shortDesc}</p>

                    <div className="flex items-center gap-2 pt-4 text-foreground font-semibold">
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
