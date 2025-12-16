"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TeamPage() {
  const victorPhotos = [
    {
      id: "01",
      image: "/Team/514511392_703930722629649_5743849837949265079_n.jpg",
      caption: "Portrait",
    },
    {
      id: "02",
      image: "/Team/574933943_807963102226410_2571496973128815359_n.jpg",
      caption: "Engineering",
    },
    {
      id: "03",
      image: "/Team/597177353_837102955979091_1762846876181727098_n.jpg",
      caption: "XR / Field",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % victorPhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [victorPhotos.length])

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + victorPhotos.length) % victorPhotos.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % victorPhotos.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentPhoto = victorPhotos[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Series Header */}
          <div className="mb-12 border-b border-border/70">
            <div className="flex items-end justify-between pb-6">
              <div className="flex items-center gap-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>01</div>
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">Team</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.25em' }}>TEAM</h1>
                </div>
              </div>
              <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 01 · v1</div>
            </div>
          </div>

          {/* Member Card with Slideshow */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Slideshow Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-border bg-card relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={currentPhoto.image}
                    alt={`Victor Edet Coleman - ${currentPhoto.caption}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                {/* Slide Index */}
                <div
                  className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-white/80 bg-black/30 px-2 py-1 rounded"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  [{currentPhoto.id}] · {currentPhoto.caption}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-colors z-10"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-colors z-10"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {victorPhotos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/40 hover:bg-foreground/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Caption Bar */}
              <div
                className="px-4 py-3 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground border-t border-border"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <span>FIG. {currentPhoto.id} — {currentPhoto.caption}</span>
                <span>{currentIndex + 1} / {victorPhotos.length}</span>
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Founder</div>
                <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>01</div>
              </div>
              <div className="h-px w-full bg-border" />
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}>Victor · Edet · Coleman</h2>
              <p className="text-muted-foreground">3D Software Engineer · Founder of HUIX-2099</p>

              {/* Spec Panel */}
              <div className="mt-4 border border-border rounded-lg p-4 bg-background">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
                  <div>
                    <div className="uppercase tracking-[0.12em]">Focus</div>
                    <div className="text-foreground">XR · 3D Visualization · Systems</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Location</div>
                    <div className="text-foreground">Monrovia, Liberia</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Email</div>
                    <div className="text-foreground">huixtech2099@gmail.com</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Status</div>
                    <div className="text-foreground">Funding · Concept Stage · Experimental</div>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">
                Building HUIX-HORIZEN and Virtual Past Liberia—architectural and cultural visualization platforms designed
                to enable Liberia and the region to imagine, prototype, and build the future.
              </p>

              {/* Photo Thumbnails */}
              <div className="pt-4 border-t border-border">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-3">
                  Gallery · {victorPhotos.length} Photos
                </div>
                <div className="flex gap-2">
                  {victorPhotos.map((photo, idx) => (
                    <button
                      key={photo.id}
                      onClick={() => goToSlide(idx)}
                      className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                        idx === currentIndex ? "border-foreground" : "border-border hover:border-foreground/50"
                      }`}
                    >
                      <img
                        src={photo.image}
                        alt={`Thumbnail ${photo.id}`}
                        className="w-full h-full object-cover"
                      />
                      {idx === currentIndex && (
                        <div className="absolute inset-0 bg-foreground/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
