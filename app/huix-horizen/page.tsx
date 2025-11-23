"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { DevBadge } from "@/components/dev-badge"

export default function HUIXHorizenPage() {
  const { theme } = useTheme()

  const sections = [
    {
      number: "01",
      title: "Overview",
      description:
        "HUIX-HORIZEN is the immersive AR and VR visualization platform of HUIX-2099. Designed to transform architectural, design, and spatial projects into interactive 3D and VR experiences, it bridges the gap between concepts, digital models, and real-world execution.",
      content:
        "Our platform enables architects, designers, and engineers to collaborate seamlessly in immersive digital environments. Whether visualizing complex building designs, exploring interior spaces, or previewing product iterations, HUIX-HORIZEN provides the tools to make better decisions faster.",
    },
    {
      number: "02",
      title: "Key Features",
      description: "Real-time AR/VR rendering, collaborative workspace, asset library, and export capabilities.",
      content:
        "- Real-time Synchronized Environments: See changes instantly across all connected devices\n- Advanced 3D Asset Library: Access thousands of pre-built components and textures\n- Intuitive Gesture Controls: Navigate and interact naturally in VR environments\n- Multi-user Collaboration: Work together with team members in the same virtual space\n- Export Integration: Seamlessly export to various 3D and design platforms",
    },
    {
      number: "03",
      title: "Technology Stack",
      description: "Built on cutting-edge technologies for performance and reliability.",
      content:
        "- Engine: Unity with C# scripting\n- VR Platforms: Meta Quest, HTC Vive, PlayStation VR\n- AR Frameworks: ARKit, ARCore for mobile AR\n- Backend: Real-time sync with WebSocket architecture\n- Cloud: Scalable cloud rendering and asset management",
    },
    {
      number: "04",
      title: "Use Cases",
      description: "Transforming industries through immersive visualization.",
      content:
        "- Architecture: Client presentations and design reviews in 3D space\n- Product Design: Prototype testing and user experience validation\n- Real Estate: Virtual property tours and site planning\n- Interior Design: Space planning and furniture arrangement\n- Engineering: Complex system visualization and technical review",
    },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('${
            theme === "dark"
              ? "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg"
              : "/images/h-20-20u-20-20i-20-20x-20-20horizen-20white-20version.jpg"
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/65" : "bg-white/55"}`} />

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-background/95 shadow-xl overflow-hidden px-7 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12"
          >
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  HUIX-HORIZEN · Platform
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground/80 mt-1">
                  Immersive AR / VR visualization
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 rounded-2xl overflow-hidden bg-black/60">
                  <img
                    src={
                      theme === "dark"
                        ? "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg"
                        : "/images/h-20-20u-20-20i-20-20x-20-20horizen-20white-20version.jpg"
                    }
                    alt="HUIX-HORIZEN hero preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                  <span>Status</span>
                  <DevBadge text="COMING SOON" />
                </div>
              </div>
            </div>

            <div className="grid gap-10 md:gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
              {/* Left meta / description */}
              <div className="space-y-6 max-w-sm text-sm text-muted-foreground">
                <p className="leading-relaxed">
                  HUIX-HORIZEN transforms architectural, design, and spatial projects into interactive AR and VR
                  experiences, bridging the gap between concepts, 3D models, and real-world execution.
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground/80">
                  Built for architects, designers, and immersive teams.
                </p>
              </div>

              {/* Right main title */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Immersive visualization for the spaces and cities of tomorrow.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                  Real-time 3D rendering, multi-user collaboration, advanced asset libraries, and cross-platform support
                  — all inside a single HUIX-2099 visualization layer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Header */}
      <section className="px-4 lg:px-8 pt-10 pb-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div>
            <div className="text-7xl md:text-8xl font-bold text-foreground/30 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: 'Mohican, sans-serif' }}>H U I X  -  H O R I Z E N</h1>
          </div>
          <div className="hidden md:block text-xs uppercase tracking-wide text-muted-foreground">
            <span className="font-mono">Series / 01 · v1</span>
          </div>
        </div>
      </section>

      {/* Funding status under header */}
      <section className="px-4 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground py-2 border-b border-border/70">
            Funding · Concept Stage · Experimental
          </div>
        </div>
      </section>

      {/* Series 02: Mission & Values */}
      <section className="px-4 lg:px-8 pt-12 pb-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 border-b border-border/70 pb-4 flex items-end justify-between">
            <div className="flex items-center gap-6">
              <div className="text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              <div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-1">Mission & Values</div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif' }}>M I S S I O N  ·  V A L U E S</h2>
              </div>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'I n n o v a t i o n', desc: 'Pushing the limits of real‑time AR/VR to visualize architecture and cities for Liberia and beyond.' },
              { title: 'C r e a t i v i t y', desc: 'Blending design, storytelling, and engineering to make complex spaces clear and inspiring.' },
              { title: 'I n t e g r i t y', desc: 'Transparent process, accurate models, and responsible data in every engagement.' },
              { title: 'C o l l a b o r a t i o n', desc: 'Co‑creating with architects, communities, and partners across disciplines.' },
              { title: 'E x c e l l e n c e', desc: 'High‑fidelity visualization, performance, and rigorous QA on every build.' },
              { title: 'E m p o w e r m e n t', desc: 'Tools and training that enable Liberian creators—and the region—to build the future.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Value</div>
                  <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="h-px w-full bg-border mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Mohican, sans-serif' }}>{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-start pt-12 border-t border-border"
            >
              {/* Left: Number and Title */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="mb-8">
                  <div className="text-7xl md:text-8xl font-bold text-foreground/30 mb-4 leading-none">{section.number}</div>
                  <h2 className="text-4xl font-bold text-foreground mb-2 tracking-tight">{section.title}</h2>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">Section {section.number}</p>
                  <p className="text-lg text-muted-foreground mt-4">{section.description}</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-3">Funding · Concept Stage · Experimental</div>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Orange Session-style Section */}
      <section
        className="py-20 px-4 lg:px-12"
        style={{ backgroundColor: "#ff5a00" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10 text-black">
          <div className="space-y-6">
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">01</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Before, during, and after
              <br />
              the HUIX-HORIZEN session.
            </div>
          </div>

          <div className="text-sm md:text-base space-y-3 md:text-right max-w-xs md:max-w-sm text-black/80">
            <p className="font-semibold text-black">Visualization Guidelines</p>
            <p>
              How teams prepare, collaborate, and review immersive AR/VR visualizations inside HUIX-HORIZEN.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our team to schedule a personalized demo of HUIX-HORIZEN
          </p>
          <motion.a
            href="/contact?subject=HUIX-HORIZEN Demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Request Demo
          </motion.a>
        </div>
      </section>

      <Footer />
    </>
  )
}

