"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")

  const images = [
    {
      id: 1,
      title: "3D Robotics Engineering",
      category: "VR",
      description: "Advanced orange robotic arm assembly and real-time visualization in lab environment",
      image: "/images/gallary1.png",
    },
    {
      id: 2,
      title: "3D Architecture Render",
      category: "3D",
      description: "Interactive architectural visualization",
      image: "/images/architech.jpg",
    },
    {
      id: 3,
      title: "AI Dashboard Interface",
      category: "AI",
      description: "Real-time analytics dashboard",
      image: "/images/dan-20lehman-20-20qrs-20creative.jpg",
    },
    {
      id: 4,
      title: "Mobile App UI",
      category: "Mobile",
      description: "Enterprise mobile application interface",
      image: "/images/generated-20image-20november-2013-2c-202025-20-208-20pm.jpg",
    },
    {
      id: 5,
      title: "Web Platform Design",
      category: "Web",
      description: "SaaS platform user interface",
      image: "/images/lecube-20-20welcome.jpg",
    },
    {
      id: 6,
      title: "Animation Concept",
      category: "Animation",
      description: "3D motion graphics sequence",
      image: "/images/join-20us-20white-20theme.png",
    },
    {
      id: 7,
      title: "XR Experience",
      category: "VR",
      description: "Extended reality interactive experience",
      image: "/images/generated-20image-20november-2006-2c-202025-20-206-12pm-20-282-29.png",
    },
    {
      id: 8,
      title: "Data Visualization",
      category: "AI",
      description: "Complex data visualization system",
    },
    {
      id: 9,
      title: "UI Component Library",
      category: "Web",
      description: "Comprehensive design system",
    },
    {
      id: 10,
      title: "3D Model Showcase",
      category: "3D",
      description: "High-fidelity 3D product model",
    },
    {
      id: 11,
      title: "Motion Graphics",
      category: "Animation",
      description: "Animated brand identity",
    },
    {
      id: 12,
      title: "App Store Feature",
      category: "Mobile",
      description: "Featured mobile app screenshot",
    },
  ]

  const categories = ["all", "VR", "AI", "3D", "Web", "Animation", "Mobile"]
  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Gallery</h1>
            <p className="text-xl text-muted-foreground">Visual showcase of our innovative projects and achievements</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === cat
                    ? "bg-foreground text-background"
                    : "bg-card border border-border text-foreground hover:border-foreground/30"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 8) * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-card rounded-lg border border-border overflow-hidden">
                  {image.image && (
                    <img
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent group-hover:from-foreground/10 transition-all" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                    <div className="flex gap-3 mb-4">
                      <Link href={`/gallery/${image.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
                        >
                          <Eye className="h-5 w-5" />
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
                      >
                        <Download className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
