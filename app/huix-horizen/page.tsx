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
        className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
        style={{
          backgroundImage: `url('${
            theme === "dark"
              ? "/images/h-20-20u-20-20i-20-20x-20-20horizen-20black-20version.jpg"
              : "/images/h-20-20u-20-20i-20-20x-20-20horizen-20white-20version.jpg"
          }')`,
          backgroundSize: "60%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/50" : "bg-white/40"}`} />

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-10 max-w-sm"
        >
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-semibold">
            Immersive AR and VR visualization platform transforming architectural and design projects into interactive
            3D experiences
            <DevBadge text="COMING SOON" />
          </p>
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-10 max-w-sm"
        >
          <div className="text-sm lg:text-base text-muted-foreground space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-3">Key Capabilities</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">→</span> Real-time 3D Rendering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">→</span> Multi-user Collaboration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">→</span> Advanced Asset Library
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">→</span> Cross-platform Support
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
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
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Number and Title */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="mb-8">
                  <div className="text-7xl md:text-8xl font-bold text-foreground/30 mb-4">{section.number}</div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-lg text-muted-foreground">{section.description}</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
