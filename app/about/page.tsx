"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { ParallaxReveal, ParallaxText, ParallaxSection, ParallaxStagger, ParallaxStaggerItem, ParallaxImage, ParallaxFloat } from "@/components/parallax"

export default function AboutPage() {
  const { resolvedTheme } = useTheme()

  const logoUrl =
    resolvedTheme === "dark" ? "/images/huix-202099-20dark-20logo-20jpg.jpg" : "/images/huix-202099-20white-20logo-20jpg.jpg"

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ParallaxReveal direction="up">
            <div className="h-[2px] w-24 bg-orange-500 mb-4" />
            <div className="flex items-end justify-between pb-6 border-b border-border/70">
              <div className="flex items-center gap-6">
                <ParallaxText speed={0.3} direction="up">
                  <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
                </ParallaxText>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.14em] mb-2">[01] About · Doc</div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>A b o u t  &nbsp;&nbsp;  H U I X - 2 0 9 9</h1>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end gap-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">Series / 01 · v1</div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <span>REV A</span>
                  <span className="inline-block h-[1px] w-8 bg-border" />
                  <span>CAT NO · ABT-01</span>
                </div>
              </div>
            </div>
            <ParallaxFloat intensity={15}>
              <div className="flex items-center justify-center mb-10">
                <img src={logoUrl || "/placeholder.svg"} alt="HUIX-2099" className="h-48 md:h-56 w-auto object-contain" />
              </div>
            </ParallaxFloat>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pb-4">
              At HUIX-2099, we believe technology is not just a tool — it's an evolving language of human creativity and
              expression. We build digital futures where innovation meets imagination.
            </p>
            {/* Dot-matrix accent */}
            <div className="mt-2 mb-4 flex items-center justify-center gap-4">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                ))}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">Index · A‑01</div>
            </div>
          </ParallaxReveal>

         

          {/* Section 01: Our Story */}
          <div id="our-story" className="pt-16 mb-20 grid lg:grid-cols-2 gap-16 items-start border-t border-border/60">
            <ParallaxReveal direction="left">
              <ParallaxText speed={0.25} direction="up">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
              </ParallaxText>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[02] Story · Overview</div>
              </div>
              <div className="h-[1px] w-full bg-border mb-5" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024, HUIX-2099 started as a vision to revolutionize how Africa approaches technology and
                innovation. From our base in Monrovia, Liberia, we've grown into a hub of creative talent and technical
                expertise serving global markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower Africa's next generation of innovators by designing smart systems and
                immersive technologies that merge creativity, culture, and commerce. We believe the future belongs to
                those who dare to imagine differently.
              </p>
            </ParallaxReveal>

            <ParallaxReveal direction="right" delay={0.1}>
              <div className="rounded-lg bg-card border border-border overflow-hidden">
                <ParallaxImage src="/images/gallary1.png" alt="HUIX-2099 Engineering Lab" className="w-full h-80" />
              </div>
            </ParallaxReveal>
          </div>

          {/* Section 02: Core Values */}
          <div id="mission-and-values" className="pt-16 mb-20 border-t border-border/60">
            <ParallaxReveal direction="up">
              <ParallaxText speed={0.25} direction="up">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              </ParallaxText>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-3xl font-bold text-foreground">Mission & Values</h2>
                <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[03] Values · Index</div>
              </div>
              <div className="h-[1px] w-full bg-border mb-8" />
            </ParallaxReveal>

            <ParallaxStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Innovation", desc: "Constantly challenging the boundaries of what's possible in technology" },
                {
                  title: "Creativity",
                  desc: "Where art and science coexist in perfect harmony for extraordinary solutions",
                },
                { title: "Integrity", desc: "Operating with honesty, responsibility, and transparency always" },
                {
                  title: "Collaboration",
                  desc: "True innovation happens through collective intelligence and teamwork",
                },
                { title: "Excellence", desc: "Continuous improvement and technical mastery in every project" },
                {
                  title: "Empowerment",
                  desc: "Inspiring the next generation of African innovators and leaders",
                },
              ].map((value, index) => (
                <ParallaxStaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all h-full"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </motion.div>
                </ParallaxStaggerItem>
              ))}
            </ParallaxStagger>
          </div>

          {/* Section 03: Founder */}
          <div className="pt-16 mb-20 grid lg:grid-cols-2 gap-16 items-start border-t border-border/60">
            <ParallaxReveal direction="left">
              <ParallaxText speed={0.25} direction="up">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>03</div>
              </ParallaxText>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-bold text-foreground">Founder & Vision</h2>
                <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[04] Founder · Profile</div>
              </div>
              <div className="h-[1px] w-full bg-border mb-5" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Victor Edet Coleman</h3>
              <p className="text-sm font-semibold text-muted-foreground uppercase mb-2">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Victor is a visionary 3D engineer, software architect, and digital futurist redefining how the world
                experiences virtual innovation. With expertise spanning 3D prototyping, VR/XR/AR development, machine
                learning integration, and real-time visualization, Victor leads HUIX-2099 toward a future where human
                creativity and machine intelligence coexist seamlessly.
              </p>
              <motion.a
                href="https://www.linkedin.com/in/victor-coleman-4731701a5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-foreground/80 transition-colors"
              >
                Connect on LinkedIn →
              </motion.a>
            </ParallaxReveal>

            <ParallaxReveal direction="right" delay={0.1}>
              <div className="p-8 rounded-lg bg-card border border-border space-y-6">
              <div className="w-full h-64 rounded-lg bg-secondary border border-border overflow-hidden">
                <img
                  src="/images/join-20us-20white-20theme.png"
                  alt="Victor Coleman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase mb-2">Philosophy</p>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Technology is not the future — it's the language we use to design it. Every innovation is a
                  conversation between possibility and responsibility. We don't build tools; we build ecosystems."
                </p>
              </div>
              </div>
            </ParallaxReveal>
          </div>

          {/* Team Section to align with nav anchors */}
          <div id="team" className="pt-16 mb-8 border-t border-border/60">
            <ParallaxReveal direction="up">
              <ParallaxText speed={0.25} direction="up">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>04</div>
              </ParallaxText>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-3xl font-bold text-foreground">Team</h2>
                <div className="hidden md:block text-[10px] font-mono uppercase tracking-[0.12em] text-orange-500">[05] Team · Index</div>
              </div>
              <div className="h-[1px] w-full bg-border mb-6" />
            </ParallaxReveal>
            <ParallaxStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ name: "Core Team", role: "Engineering & Operations" }].map((m) => (
                <ParallaxStaggerItem key={m.name}>
                  <motion.div 
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
                  >
                    <div className="w-full h-40 mb-4 rounded bg-secondary border border-border overflow-hidden">
                      <img src="/placeholder.svg" alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{m.role}</div>
                    <div className="text-lg font-semibold text-foreground">{m.name}</div>
                  </motion.div>
                </ParallaxStaggerItem>
              ))}
            </ParallaxStagger>
          </div>
          {/* ID Footer Strip */}
          <div className="mt-16 border-t border-border pt-3 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span> {new Date().getFullYear()}</span>
              <span className="inline-block h-[1px] w-6 bg-border" />
              <span>HUIX‑2099 · ABT</span>
            </div>
            <div className="flex items-center gap-3">
              <span>IDX · 01–05</span>
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
