"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
 

export default function Home() {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* Flow Diagram: Company -> System -> Product */}
      <section className="py-12 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 border-b border-border/70 pb-4 flex items-end justify-between">
            <div className="flex items-center gap-6">
              <div className="text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              <div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-1">Overview</div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">System Flow</h2>
              </div>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 items-start gap-6">
            {/* Node 1 */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Company</div>
                <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
              </div>
              <div className="h-px w-full bg-border mb-4" />
              <div className="text-xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>H U I X - 2 0 9 9</div>
              <p className="text-sm text-muted-foreground mt-2">The studio and engineering company delivering advanced XR, AI and 3D software.</p>
            </div>

            {/* Animated Wire (Desktop) */}
            <div className="hidden md:flex items-center justify-center">
              <motion.svg
                width="120"
                height="8"
                viewBox="0 0 120 8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-foreground/50"
              >
                <motion.line
                  x1="0"
                  y1="4"
                  x2="110"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                {/* Arrowhead */}
                <motion.polyline
                  points="110,1 120,4 110,7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.svg>
            </div>

            {/* Node 2 */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">System</div>
                <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              </div>
              <div className="h-px w-full bg-border mb-4" />
              <div className="text-xl font-bold" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>H U I X - H O R I Z E N</div>
              <p className="text-sm text-muted-foreground mt-2">Our modular platform architecture and tools powering immersive products.</p>
            </div>

            {/* Animated Wire (Mobile) */}
            <div className="md:hidden flex items-center justify-center">
              <motion.svg
                width="8"
                height="36"
                viewBox="0 0 8 36"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-foreground/50"
              >
                <motion.line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <motion.polyline
                  points="1,32 4,36 7,32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.svg>
            </div>

            {/* Node 3 */}
            <div className="p-6 rounded-lg bg-card border border-border md:col-start-3">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Product</div>
                <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>03</div>
              </div>
              <div className="h-px w-full bg-border mb-4" />
              <div className="text-xl font-bold">Virtual Past Liberia</div>
              <p className="text-sm text-muted-foreground mt-2">A flagship immersive heritage experience built on HUIX-HORIZEN.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* About Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Futuristic Number */}
            <div className="text-8xl lg:text-9xl font-bold text-foreground/10">
              01
            </div>
            
            {/* Right: Title and Description */}
            <div className="relative">
              <div className="relative inline-block">
                <h2 
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6 cursor-pointer" 
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  A b o u t  &nbsp;&nbsp; H U I X - 2 0 9 9
                </h2>
                
                {/* Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full mt-2 text-sm text-muted-foreground whitespace-nowrap pointer-events-none"
                >
                  You should try click the about us button to learn more
                </motion.div>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
                Founded in 2024, HUIX-2099 is a Liberia-based next-generation technology company pioneering the future of
                software development, 3D prototyping, and immersive digital engineering. We operate at the intersection of
                imagination and technology — where creative vision evolves into real-world innovation.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Services Grid - Document style with numbering */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Virtual Reality", desc: "Immersive digital environments for exploration and training" },
              { title: "AI & Machine Learning", desc: "Intelligent systems that learn and adapt" },
              { title: "App Development", desc: "Powerful mobile and desktop applications" },
              { title: "Web Development", desc: "Modern web applications with cutting-edge technologies" },
              { title: "3D Modeling", desc: "Stunning 3D models and visualizations" },
              { title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className="group relative p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
              >
                {/* Meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Service</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="h-px w-full bg-border mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                <div className="mt-4 text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">Read more →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section with Image */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/other-images/download (38).jpg"
                alt="Innovation in Motion"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Right: Content */}
            <div>
              <div className="text-6xl lg:text-8xl font-bold text-foreground/10 mb-6" style={{ fontFamily: 'Mohican, sans-serif' }}>
                02
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                INNOVATION IN MOTION
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pushing the boundaries of digital experiences through cutting-edge technology and creative vision. 
                We transform ideas into immersive realities that inspire and engage audiences worldwide.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Creative Vision", desc: "Transforming bold ideas into digital masterpieces" },
                  { title: "Technical Excellence", desc: "Advanced engineering meets artistic innovation" },
                  { title: "Future Forward", desc: "Pioneering tomorrow's digital experiences today" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-4 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Principle</div>
                      <div className="text-xs text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="h-px w-full bg-border mb-3" />
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prototypes Preview Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Numbered header and copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-6" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Prototypes</h2>
              <div className="h-px w-full bg-border mb-6" />
              <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>
                Explore our innovative prototypes showcasing cutting-edge technology and creative solutions. Discover how we push boundaries with immersive digital experiences, advanced 3D programming, and virtual heritage reconstructions that bring history to life.
              </p>
              <Link href="/prototypes">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                >
                  View All Prototypes
                </motion.button>
              </Link>
            </motion.div>

            {/* Right: Provided image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-card">
                <img
                  src="/images/Generated%20Image%20November%2018,%202025%20-%202_07AM%20(1).png"
                  alt="Prototypes Visual"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Build the Future?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating next-generation digital experiences that transform how people interact with
              technology.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
