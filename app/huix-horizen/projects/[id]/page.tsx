"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projectData: Record<string, any> = {
  "project-1": {
    title: "Architectural Visualization Suite",
    category: "Architecture",
    year: "2024",
    description: "Real-time 3D architectural visualization with immersive VR walkthroughs",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-machine-learning-Sf01LbmZSDIZf3dsENh4ikt0odWcNq.jpg",
    overview:
      "This groundbreaking project demonstrates HUIX-HORIZEN's capabilities in transforming architectural designs into fully immersive VR experiences. Architects and clients can walk through buildings before construction begins.",
    challenge:
      "The primary challenge was creating real-time rendering of complex architectural models while maintaining high visual fidelity and smooth performance across multiple VR platforms.",
    solution:
      "We implemented advanced LOD (Level of Detail) systems, optimized asset streaming, and utilized multi-platform rendering pipelines to ensure consistent performance.",
    results: [
      "40% reduction in design review time",
      "95% client satisfaction rate",
      "Successfully deployed across 5 major architectural firms",
      "Support for 50+ simultaneous VR users",
    ],
    technologies: ["Unity", "C#", "Meta Quest", "HTC Vive", "WebSocket", "AR Kit"],
    teamSize: "8 developers, 2 designers",
    duration: "6 months",
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
            <Link href="/huix-horizen/projects" className="text-foreground hover:text-foreground/80">
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

      <section className="bg-background">
        {/* Hero Image */}
        <div className="relative h-96 md:h-screen w-full overflow-hidden">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Project Content */}
        <div className="px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/huix-horizen/projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>

            {/* Overview */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
            </motion.div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">Results</h3>
              <ul className="space-y-3">
                {project.results.map((result: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack & Info */}
            <div className="grid md:grid-cols-3 gap-8 pb-20 border-t border-border pt-12">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-card border border-border rounded text-sm text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Team Size</h4>
                <p className="text-foreground">{project.teamSize}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Duration</h4>
                <p className="text-foreground">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
