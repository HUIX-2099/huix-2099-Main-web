"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Series Header */}
          <div className="mb-12 border-b border-border/70">
            <div className="flex items-end justify-between pb-6">
              <div className="flex items-center gap-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">Research</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif' }}>R E S E A R C H</h1>
                </div>
              </div>
              <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 01 · v1</div>
            </div>
          </div>

          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Mohican, sans-serif' }}>Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We conduct research in 3D technology and invention—advancing real‑time visualization, spatial computing,
                and interactive systems that empower creators across Liberia and beyond.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground mb-2">Focus Areas</div>
                <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
                  <li>Real‑time 3D rendering and XR prototyping</li>
                  <li>Procedural generation and worldbuilding tools</li>
                  <li>3D pipelines for architecture and cultural visualization</li>
                  <li>Human‑computer interaction for immersive systems</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Projects/Initiatives */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'H U I X  -  H O R I Z E N', meta: 'Platform · Experimental', desc: 'Modular XR platform for spatial visualization and collaboration.', href: '/huix-horizen' },
              { title: 'V i r t u a l  ·  P a s t  ·  L i b e r i a', meta: 'Concept · 0 Funding', desc: 'Immersive cultural reconstruction and architectural storytelling.', href: '/virtual-past-liberia' },
              { title: 'P r o t o t y p e s', meta: 'R&D', desc: 'Explorations in 3D interaction, shaders, and tools.', href: '/prototypes' },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="block p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Initiative</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="h-px w-full bg-border mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: 'Mohican, sans-serif' }}>{item.title}</h3>
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">{item.meta}</div>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
