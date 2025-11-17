"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { Lock, ExternalLink } from "lucide-react"
import { useState } from "react"
import { DevBadge } from "@/components/dev-badge"

export default function VirtualPastLiberiaPage() {
  const { theme } = useTheme()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const sections = [
    {
      number: "01",
      title: "The Vision",
      description: "A Digital Rebirth of Heritage — Bridging the Past and the Future",
      content:
        "Virtual Past Liberia (VPL) is a groundbreaking immersive research and digital reconstruction project developed by Victor Edet Coleman, founder of HUIX-2099. VPL is more than a virtual world — it is a digital time bridge, reviving Liberia's cultural past through virtual reality, 3D visualization, and AI-powered storytelling.",
    },
    {
      number: "02",
      title: "The Ancestral Grid",
      description: "Architecture by Amanda Anderson — A Fusion of Art, Science, and Symbolism",
      content:
        "The Ancestral Grid is the central structure of Virtual Past Liberia — a flowing, web-like architectural marvel that represents the connection between ancestral memory and digital intelligence. Inside The Grid, history becomes interactive: stories, music, and artistry awaken through immersive digital encounters. Visitors can explore recreated cultural spaces, ancient wisdom, and futuristic reimagings of Liberian design.",
      image: "/images/generated-20image-20november-2006-2c-202025-20-206-17pm.png",
    },
    {
      number: "03",
      title: "The 16 Tribes — Cultural Foundation",
      description: "Liberia's Rich Heritage Mapped in Virtual Space",
      content:
        "The Virtual Past Liberia experience is architected around the 16 major tribes and ethnic groups of Liberia. Each tribe has dedicated spaces within The Ancestral Grid where their unique history, traditions, art, music, and cultural artifacts are preserved and celebrated in immersive 3D environments.",
      tribeName: "All 16 Tribes Represented",
    },
    {
      number: "04",
      title: "Architectural Floors",
      description: "Multi-Level Experience Design",
      content:
        "Ground Floor (Mask Building) — The entrance and cultural gateway featuring traditional Liberian mask displays and interactive tribal introductions.\n\nFirst Floor (Ceremonial Space) — Dedicated spaces for each tribe with immersive storytelling, traditional music performances, and cultural ceremonies.\n\nThird Floor (Exhibition Hall) — Curated digital archives of artifacts, historical documents, and modern interpretations of Liberian heritage.",
    },
    {
      number: "05",
      title: "Why Virtual Past Liberia Matters",
      description: "Impact Across Education, Culture, and Innovation",
      content:
        "A National Digital Archive: Safeguard Liberia's centuries of culture, language, art, and resilience in digital form.\n\nEducation Reimagined: Students experience history as living knowledge, walking through ancient cities and exploring artifacts in real time.\n\nCultural Tourism Transformed: Tourists explore Liberia's beauty and traditions in VR before visiting physically, strengthening the nation's identity as a hub of innovation.\n\nGlobal Bridge of Innovation: VPL puts Liberia at the center of Africa's digital revolution, merging art, culture, and cutting-edge technology.",
    },
  ]

  const floorPlans = [
    {
      id: "ground-floor",
      title: "Ground Floor — Mask Building",
      description: "Cultural gateway featuring traditional Liberian masks",
      fullDescription:
        "The entrance and cultural gateway showcasing traditional Liberian mask displays and interactive tribal introductions. This is where visitors first encounter the spiritual and artistic heritage of Liberia.",
      image: "/images/ground-20floor.png",
    },
    {
      id: "first-floor",
      title: "First Floor — Ceremonial Space",
      description: "Dedicated tribal spaces with immersive storytelling",
      fullDescription:
        "Dedicated spaces for each of the 16 tribes with immersive storytelling, traditional music performances, and cultural ceremonies. A place where ancestral narratives come alive through interactive experiences.",
      image: "/images/first-20floor.png",
    },
    {
      id: "third-floor",
      title: "Third Floor — Exhibition Hall",
      description: "Curated digital archives of artifacts and history",
      fullDescription:
        "Curated digital archives of artifacts, historical documents, and modern interpretations of Liberian heritage. A comprehensive repository of cultural knowledge spanning centuries of history.",
      image: "/images/third.png",
    },
    {
      id: "3d-viz",
      title: "3D Visualization",
      description: "Architectural rendering of The Ancestral Grid",
      fullDescription:
        "A stunning architectural rendering showcasing the complete vision of The Ancestral Grid. This 3D model illustrates the fusion of ancestral wisdom with cutting-edge digital innovation.",
      image: "/images/3d.png",
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
              ? "/images/virtual-20past-20liberia-20dark-20main-20version.jpg"
              : "/images/virtual-20past-20liberia-20white-20main-20version.jpg"
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
            A digital time bridge reviving Liberia's cultural heritage through immersive virtual reality and AI-powered
            storytelling
            <DevBadge text="UNDER DEVELOPMENT" />
          </p>
        </motion.div>

        {/* Right text - 16 Tribes info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-10 max-w-sm"
        >
          <div className="text-sm lg:text-base text-muted-foreground space-y-3">
            <p className="font-semibold text-foreground mb-4">The 16 Tribes of Liberia</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span>• Kpelle</span>
              <span>• Bassa</span>
              <span>• Gola</span>
              <span>• Kru</span>
              <span>• Grebo</span>
              <span>• Mandingo</span>
              <span>• Vai</span>
              <span>• Mende</span>
              <span>• Kissi</span>
              <span>• Fulani</span>
              <span>• Dei</span>
              <span>• Geh</span>
              <span>• Gio</span>
              <span>• Mano</span>
              <span>• Lorma</span>
              <span>• Belleh</span>
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
                <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                  {section.image && (
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt="Architectural visualization"
                      className="w-full rounded-lg mt-6"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floor Plans Section - 4 Column Grid */}
      <section className="py-20 px-4 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            The Ancestral Grid — Architectural Blueprint
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div
                  className="bg-background border border-border rounded-lg overflow-hidden hover:border-foreground transition-colors cursor-pointer h-full flex flex-col"
                  onClick={() => setExpandedCard(expandedCard === plan.id ? null : plan.id)}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                    <img
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-foreground mb-1">{plan.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>

                    {/* View Button */}
                    <div className="mt-auto space-y-2">
                      <button
                        onClick={() => setExpandedCard(expandedCard === plan.id ? null : plan.id)}
                        className="w-full px-3 py-2 bg-foreground text-background text-xs font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                      >
                        {expandedCard === plan.id ? "Close" : "View"}
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Description */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedCard === plan.id ? 1 : 0,
                    height: expandedCard === plan.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-3 bg-card border border-border rounded-lg text-xs text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {plan.fullDescription}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits - Team Section */}
      <section className="py-16 px-4 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">The Team Behind Virtual Past Liberia</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Victor Coleman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Victor Edet Coleman</h3>
              <p className="text-muted-foreground mb-2">Founder & 3D Innovator</p>
              <p className="text-sm text-muted-foreground mb-6">Liberian 3D Software Engineer & Visionary</p>
              <a
                href="https://www.linkedin.com/in/victor-coleman-4731701a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                View Profile
              </a>
            </motion.div>

            {/* Amanda Anderson */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Amanda Anderson</h3>
              <p className="text-muted-foreground mb-2">Architect & Designer</p>
              <p className="text-sm text-muted-foreground mb-6">The Ancestral Grid Architect</p>
              <a
                href="https://www.linkedin.com/in/amanda-anderson-88a18635a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                View Profile
              </a>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 p-8 bg-card border border-border rounded-lg text-center">
            <p className="text-foreground leading-relaxed">
              "The Ancestral Grid represents the fusion of ancestral wisdom and digital innovation, preserving Liberia's
              cultural heritage through immersive technology for generations to come."
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Download Virtual Past Liberia</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone VR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Phone VR</h3>
                <p className="text-muted-foreground">Experience Virtual Past Liberia on your mobile device</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">Status: In Development</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Funding Status</p>
                  <p className="text-3xl font-bold text-foreground">$0</p>
                  <p className="text-xs text-muted-foreground">Seeking Sponsorship</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop VR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Desktop VR</h3>
                <p className="text-muted-foreground">Full VR experience on PC with motion controls</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">Status: In Development</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Funding Status</p>
                  <p className="text-3xl font-bold text-foreground">$0</p>
                  <p className="text-xs text-muted-foreground">Seeking Sponsorship</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Funding CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 p-12 bg-card border border-border rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Support the Future of Liberian Heritage</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Virtual Past Liberia is seeking sponsors, investors, and cultural organizations to bring this
              transformative project to life. Your support enables the preservation and celebration of Liberia's rich
              heritage for generations to come.
            </p>
            <a
              href="/contact?subject=Virtual Past Liberia Sponsorship"
              className="inline-block px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Become a Sponsor
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
