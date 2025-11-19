"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"

export default function AboutPage() {
  const { theme } = useTheme()

  const logoUrl =
    theme === "dark" ? "/images/huix-202099-20dark-20logo-20jpg.jpg" : "/images/huix-202099-20white-20logo-20jpg.jpg"

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="mb-16 border-b border-border/70"
          >
            <div className="flex items-end justify-between pb-8">
              <div className="flex items-center gap-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">About Us</div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>A b o u t  &nbsp;&nbsp;  H U I X - 2 0 9 9</h1>
                </div>
              </div>
              <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">
                Series / 01 · v1
              </div>
            </div>
            <div className="flex items-center justify-center mb-10">
              <img src={logoUrl || "/placeholder.svg"} alt="HUIX-2099" className="h-48 md:h-56 w-auto object-contain" />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pb-8"
            >
              At HUIX-2099, we believe technology is not just a tool — it's an evolving language of human creativity and
              expression. We build digital futures where innovation meets imagination.
            </motion.p>
          </motion.div>

         

          {/* Section 01: Our Story */}
          <div id="our-story" className="pt-16 mb-20 grid lg:grid-cols-2 gap-16 items-start border-t border-border/60">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22 }}
              className="rounded-lg bg-card border border-border overflow-hidden"
            >
              <img src="/images/gallary1.png" alt="HUIX-2099 Engineering Lab" className="w-full h-80 object-cover" />
            </motion.div>
          </div>

          {/* Section 02: Core Values */}
          <div id="mission-and-values" className="pt-16 mb-20 border-t border-border/60">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              <h2 className="text-3xl font-bold text-foreground mb-12">Mission & Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 03: Founder */}
          <div className="pt-16 mb-20 grid lg:grid-cols-2 gap-16 items-start border-t border-border/60">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>03</div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Founder & Vision</h2>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22 }}
              className="p-8 rounded-lg bg-card border border-border space-y-6"
            >
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
            </motion.div>
          </div>

          {/* Team Section to align with nav anchors */}
          <div id="team" className="pt-16 mb-8 border-t border-border/60">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>04</div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Team</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ name: "Core Team", role: "Engineering & Operations" }].map((m) => (
                <div key={m.name} className="p-6 rounded-lg bg-card border border-border">
                  <div className="w-full h-40 mb-4 rounded bg-secondary border border-border overflow-hidden">
                    <img src="/placeholder.svg" alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{m.role}</div>
                  <div className="text-lg font-semibold text-foreground">{m.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
