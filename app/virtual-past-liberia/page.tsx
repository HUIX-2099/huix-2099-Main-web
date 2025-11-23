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
        className="relative min-h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('${
            theme === "dark"
              ? "/images/virtual-20past-20liberia-20dark-20main-20version.jpg"
              : "/images/virtual-20past-20liberia-20white-20main-20version.jpg"
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
            className="rounded-3xl bg-background/95 shadow-xl overflow-hidden px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14"
          >
            {/* Top row with label and small image thumbnail */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  Virtual Past Liberia · Project
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground/80 mt-1">
                  Last updated — 2025
                </p>
              </div>
              <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 rounded-2xl overflow-hidden bg-black/60">
                <img
                  src={
                    theme === "dark"
                      ? "/images/virtual-20past-20liberia-20dark-20main-20version.jpg"
                      : "/images/virtual-20past-20liberia-20white-20main-20version.jpg"
                  }
                  alt="Virtual Past Liberia hero preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-10 md:gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
              {/* Left meta / description */}
              <div className="space-y-6 max-w-sm text-sm text-muted-foreground">
                <p className="leading-relaxed">
                  A digital time bridge reviving Liberia's cultural heritage through immersive virtual reality, 3D
                  visualization, and AI-powered storytelling.
                  <span className="inline-block ml-2 align-middle">
                    <DevBadge text="UNDER DEVELOPMENT" />
                  </span>
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground/80">
                  Featuring The Ancestral Grid and the 16 tribes of Liberia.
                </p>
              </div>

              {/* Right main title */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Virtual Past Liberia is a living archive of ancestral memory in immersive space.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                  Walk through reconstructed cultural spaces, encounter the 16 tribes, and experience Liberia's stories as
                  if you were there — past, present, and speculative futures woven together.
                </p>
              </div>
            </div>

            {/* Bottom preview image, echoing the sliding card in the reference */}
            <div className="mt-10">
              <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-3">
                01 · Visual frame from The Ancestral Grid
              </div>
              <div className="rounded-3xl overflow-hidden bg-black/80">
                <img
                  src="/images/generated-20image-20november-2006-2c-202025-20-206-17pm.png"
                  alt="Virtual Past Liberia visual frame"
                  className="w-full h-52 sm:h-64 md:h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Header */}
      <section className="px-4 lg:px-8 pt-10 pb-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div>
            <div className="text-7xl md:text-8xl font-bold text-foreground/30 leading-none">01</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Virtual Past Liberia</h1>
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
            Concept · Development Stage · 0 Funding
          </div>
        </div>
      </section>

      {/* Series 02: Media Preview (Video) */}
      <section className="px-4 lg:px-8 pt-12 pb-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 border-b border-border/70 pb-4 flex items-end justify-between">
            <div className="flex items-center gap-6">
              <div className="text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
              <div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-1">Media Preview</div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif' }}>V I D E O  ·  P R E V I E W</h2>
              </div>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-border bg-card"
            >
              <video
                src="/Hailuo_Video_MAKE ALL THE MASK TO COME TOGE_447303804190720009.mp4"
                autoPlay
                muted
                loop
                controls
                playsInline
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif' }}>
                M a s k &nbsp;  A s s e m b l y  &nbsp;  · &nbsp;  P r e v i e w
              </h3>
              <div className="h-px w-full bg-border" />
              <p className="text-muted-foreground leading-relaxed">
                A glimpse into the Mask Building sequence from Virtual Past Liberia. This short cut captures the
                convergence of traditional artistry and digital reconstruction inside the Ancestral Grid.
              </p>
              <p className="text-sm text-muted-foreground">
                For best results, view with sound on. The clip will autoplay silently—use the controls to enable audio.
              </p>
            </motion.div>
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
                <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">Concept · Development Stage · 0 Funding</div>
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
              the virtual session.
            </div>
          </div>

          <div className="text-sm md:text-base space-y-3 md:text-right max-w-xs md:max-w-sm text-black/80">
            <p className="font-semibold text-black">Session Guidelines</p>
            <p>
              How visitors prepare, experience, and reflect on Virtual Past Liberia inside The Ancestral Grid.
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
