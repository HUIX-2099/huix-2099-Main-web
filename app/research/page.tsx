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
          <div className="mb-12">
            <div className="h-[2px] w-24 bg-orange-500 mb-4" />
            <div className="flex items-end justify-between pb-5 border-b border-border/70">
              <div className="flex items-center gap-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>01</div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.14em] mb-2">[01] Research · Doc</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.25em' }}>RESEARCH</h1>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end gap-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">Series / 01 · v1</div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <span>REV A</span>
                  <span className="inline-block h-[1px] w-8 bg-border" />
                  <span>CAT NO · RCH-01</span>
                </div>
              </div>
            </div>
            {/* Dot-matrix accent */}
            <div className="mt-4 flex items-center gap-4">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                ))}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">Index · R‑01</div>
            </div>
          </div>

          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Mission</h2>
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
              { title: 'HUIX-HORIZEN', meta: 'Platform · Experimental', desc: 'Modular XR platform for spatial visualization and collaboration.', href: '/huix-horizen' },
              { title: 'V i r t u a l  ·  P a s t  ·  L i b e r i a', meta: 'Concept · 0 Funding', desc: 'Immersive cultural reconstruction and architectural storytelling.', href: '/virtual-past-liberia' },
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
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="h-px w-full bg-border mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>{item.title}</h3>
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">{item.meta}</div>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Medical Implications — Virtual Past Liberia */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-3">
              <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                V i r t u a l  ·  P a s t  ·  L i b e r i a — Medical Implications
              </motion.h2>
              <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[02] Health · Review</div>
            </div>
            <div className="h-[1px] w-full bg-border mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="border border-border rounded-lg p-5 bg-card">
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">[+ ] Positives</div>
                <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
                  <li>Health education via culturally grounded, immersive storytelling to improve retention.</li>
                  <li>Remote wellness outreach using low-bandwidth XR modules for clinics and schools.</li>
                  <li>Stress-reduction and mental health support through restorative historical spaces.</li>
                  <li>Training scenarios for public-health responses and emergency drills.</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 }} className="border border-border rounded-lg p-5 bg-card">
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">[− ] Negatives / Risks</div>
                <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
                  <li>Motion sickness/eye strain from prolonged XR use without guidance.</li>
                  <li>Access inequity if devices and connectivity are limited in rural areas.</li>
                  <li>Potential cultural misinterpretation if historical content lacks community review.</li>
                  <li>Data privacy concerns for user biometrics or learning analytics.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Two Key Impacts on Liberia */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Two Key Impacts on Liberia</h2>
              <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[03] Impact · Brief</div>
            </div>
            <div className="h-[1px] w-full bg-border mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Economic & Creative Industries</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Catalyze local jobs in 3D, XR, and cultural content production. Enable micro-entrepreneurship
                  around digital heritage, experiential tourism, and education partnerships.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 }} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Cultural Preservation & Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preserve artifacts, architecture, and oral histories in accessible formats. Augment classrooms
                  with interactive lessons that connect youth to heritage and STEM pathways.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Platform Perspectives */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Platform Perspectives</h2>
              <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[04] Platforms · Spec</div>
            </div>
            <div className="h-[1px] w-full bg-border mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="border border-border rounded-lg p-5 bg-card">
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">Platform</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}>HUIX-HORIZEN</h3>
                <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
                  <li>Scalable modules for 3D scenes, avatars, and multi-user sessions.</li>
                  <li>Supports research dashboards, consent flows, and privacy-first telemetry.</li>
                  <li>Integrations for education partners and local content pipelines.</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 }} className="border border-border rounded-lg p-5 bg-card">
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">Program</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>Virtual · Past · Liberia</h3>
                <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
                  <li>Focus on historical reconstruction, community curation, and storytelling.</li>
                  <li>Field-ready experiences optimized for low-spec devices and offline modes.</li>
                  <li>Partnership model with museums, schools, and cultural custodians.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* ID Footer Strip */}
          <div className="mt-16 border-t border-border pt-3 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span> {new Date().getFullYear()}</span>
              <span className="inline-block h-[1px] w-6 bg-border" />
              <span>HUIX‑2099 · RCH</span>
            </div>
            <div className="flex items-center gap-3">
              <span>IDX · 01–04</span>
              <span className="inline-block h-[1px] w-6 bg-border" />
              <span>REV A</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
