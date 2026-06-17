"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Twitter, Instagram, Facebook, Youtube } from "lucide-react"

type TabId = "huix-2099" | "huix-or" | "monrovia-hustle"

interface CardDesign {
  bgColor: string
  accentColor: string
  mainText: string
  subText: string
  codes: {
    topLeft: string[]
    topRight: string[]
    bottomCodes: string[]
  }
  systemInfo: { label: string; value: string; highlight?: boolean }[]
}

interface TabContent {
  id: TabId
  label: string
  shortLabel: string
  card: CardDesign
  sections: {
    number: string
    title: string
    subtitle: string
    content: string[]
  }[]
}

const tabsContent: TabContent[] = [
  {
    id: "huix-2099",
    label: "HUIX-2099",
    shortLabel: "2099",
    card: {
      bgColor: "#0a0a0a",
      accentColor: "#ffffff",
      mainText: "HUIX",
      subText: "2099",
      codes: {
        topLeft: ["SN-HX-2024", "REV-C1", "LIC-LBR-001"],
        topRight: ["2024", "TECH"],
        bottomCodes: ["XR · AI · 3D", "MONROVIA", "v1.0"]
      },
      systemInfo: [
        { label: "Company", value: "HUIX-2099 TECH" },
        { label: "Founded", value: "2024" },
        { label: "Location", value: "Liberia" },
        { label: "Focus", value: "XR/AI/3D" },
        { label: "Status", value: "Active", highlight: true },
        { label: "Clients", value: "Global", highlight: true }
      ]
    },
    sections: [
      {
        number: "01",
        title: "Building the Digital Future",
        subtitle: "Company Overview",
        content: [
          "HUIX-2099 is a technology company founded in Monrovia, Liberia, dedicated to building the digital future of Africa. We specialize in immersive technologies, 3D visualization, and innovative software solutions that bridge creativity with cutting-edge technology.",
          "Our mission is to empower Africa's next generation of innovators by designing smart systems and immersive technologies that merge creativity, culture, and commerce. We believe the future belongs to those who dare to imagine differently.",
          "From our base in Liberia, we serve clients globally, bringing African innovation to the world stage while creating opportunities for local talent to thrive in the global tech ecosystem."
        ]
      },
      {
        number: "02",
        title: "Our Vision & Values",
        subtitle: "What Drives Us",
        content: [
          "At HUIX-2099, we believe technology is not just a tool — it is an evolving language of human creativity and expression. We build digital futures where innovation meets imagination, and where African creativity leads global conversations.",
          "Our core values center on Innovation, Creativity, Integrity, Collaboration, Excellence, and Empowerment. These principles guide every project we undertake and every relationship we build.",
          "We are committed to creating technology that is accessible, meaningful, and transformative — technology that doesn't just solve problems but opens new possibilities for how we live, work, and connect."
        ]
      }
    ]
  },
  {
    id: "huix-or",
    label: "HUIX OR",
    shortLabel: "HUIXOR",
    card: {
      bgColor: "#0a0a0a",
      accentColor: "#22C55E",
      mainText: "HUIX",
      subText: "OR",
      codes: {
        topLeft: ["SN-HXR-2099", "REV-B1", "LIC-LBR-002"],
        topRight: ["2099", "HUIXOR"],
        bottomCodes: ["BROWSER · VR", "DEVTOOLS", "v1.0"]
      },
      systemInfo: [
        { label: "Product", value: "HUIXOR Browser" },
        { label: "Use Cases", value: "DevTools · VR Preview" },
        { label: "Stack", value: "Desktop · WebView" },
        { label: "Platform", value: "Windows" },
        { label: "Status", value: "Live / Beta", highlight: true },
        { label: "Built", value: "Liberia", highlight: true }
      ]
    },
    sections: [
      {
        number: "01",
        title: "HUIXOR — dev browser & VR preview",
        subtitle: "HUIX OR product line",
        content: [
          "HUIXOR is HUIX-2099's desktop browser and developer preview shell — built to inspect responsive layouts, device presets, and VR-ready views without juggling a pile of separate tools.",
          "It targets designers and engineers who need a fast loop: resize, screenshot, compare against DevTools, and jump into immersive preview when a build supports it.",
          "Explore the full product page for media, feature breakdown, download, and community feedback."
        ]
      },
      {
        number: "02",
        title: "Why it sits in the studio stack",
        subtitle: "Tooling for how we ship",
        content: [
          "HUIXOR is part of the same pipeline that powers Monrovia Hustle 3D and client work — honest tooling built in Liberia for global-quality output.",
          "Window layout, navigation tabs, device presets, and VR preview modes are documented on the product hub with screenshots and a downloadable build.",
          "Partners and testers can request access or file feedback directly from the HUIXOR page."
        ]
      }
    ]
  },
  {
    id: "monrovia-hustle",
    label: "MONROVIA HUSTLE INFO",
    shortLabel: "MH-3D",
    card: {
      bgColor: "#0a0a0a",
      accentColor: "#BF0A30",
      mainText: "MONROVIA",
      subText: "HUSTLE",
      codes: {
        topLeft: ["SN-MH3D-01", "REV-C1", "LIC-LBR-003"],
        topRight: ["2026", "CONCEPT"],
        bottomCodes: ["3D · NARRATIVE", "LIBERIA", "CONCEPT"]
      },
      systemInfo: [
        { label: "Franchise", value: "Monrovia Hustle 3D" },
        { label: "Region", value: "Monrovia, Liberia" },
        { label: "Genre", value: "Urban narrative RPG" },
        { label: "Platform", value: "Windows PC" },
        { label: "Concept 01", value: "Live dossier", highlight: true },
        { label: "Studio", value: "HUIX-2099", highlight: true }
      ]
    },
    sections: [
      {
        number: "01",
        title: "Monrovia Hustle 3D — franchise hub",
        subtitle: "Liberia's first game line from HUIX-2099",
        content: [
          "Monrovia Hustle 3D is a Liberian-led narrative game franchise — street hustle, family pressure, and choosing your lane in a Monrovia-set urban drama.",
          "The public hub stays spoiler-light; Concept 01 is the playable vertical slice with trailer, voice cast, spec sheet, and a timed Windows build drop.",
          "Press, players, and partners start on the franchise page, then drill into the Concept 01 dossier for cast, art credits, and download."
        ]
      },
      {
        number: "02",
        title: "What's live today",
        subtitle: "Concept 01 · not retail yet",
        content: [
          "Concept 01 includes a Windows playable slice — intro comic, bedroom hub, open-street loop, Tenneh phone mission chain, and Liberian voice cast in-engine.",
          "Three additional franchise slots are reserved on the hub as locked placeholders while future beats are in development.",
          "Visit the concept page for gameplay trailer, developer notes, and the June 2026 build unlock."
        ]
      }
    ]
  }
]

// Cardholder Component
function CardholderDesign({ card, isHovered }: { card: CardDesign; isHovered: boolean }) {
  const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
  
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[380px] overflow-x-hidden sm:overflow-visible">
      {/* Hidden Info - Revealed on hover */}
      <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
          System Info
        </div>
        <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
          {card.systemInfo.map((info, i) => (
            <div key={i} className="flex justify-between">
              <span>{info.label}</span>
              <span className={info.highlight ? `text-[${card.accentColor}]` : 'text-neutral-300'} style={info.highlight ? { color: card.accentColor } : {}}>
                {info.value}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
          <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
            Licensed to HUIX-2099 TECH · Monrovia, Liberia
          </div>
        </div>
      </div>

      {/* Main Wallet Body */}
      <div 
        className={`absolute inset-0 rounded-xl transition-transform duration-300 ${isHovered ? '-translate-y-4' : ''}`}
        style={{ 
          backgroundColor: '#1a1a1a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
        }}
      />

      {/* Gray Card - Peeking from top */}
      <div 
        className={`absolute -top-6 left-3 right-3 h-24 rounded-lg transition-transform duration-300 ${isHovered ? '-translate-y-6' : ''}`}
        style={{ backgroundColor: '#2a2a2a' }}
      >
        <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
          {card.codes.topLeft.map((code, i) => (
            <div key={i}>{code}</div>
          ))}
        </div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
          ○ READY
        </div>
        <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
          {card.codes.topRight.map((code, i) => (
            <div key={i} className={`text-lg font-bold ${i === 0 ? 'text-neutral-400' : 'text-neutral-500'}`}>{code}</div>
          ))}
        </div>
      </div>

      {/* Main Accent Card */}
      <div 
        className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${isHovered ? '-translate-y-5' : ''}`}
        style={{ backgroundColor: card.accentColor }}
      >
        {/* Semi-circular cutout */}
        <div 
          className="absolute -bottom-px left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full"
          style={{ backgroundColor: '#1a1a1a' }}
        />
        
        <div className="relative p-4">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} />
            <span className="text-[7px]" style={{ fontFamily: monoFont, color: 'rgba(0,0,0,0.5)' }}>
              © HUIX 2025
            </span>
          </div>
          <div 
            className="text-4xl font-bold leading-none tracking-[0.1em]" 
            style={{ fontFamily: 'Mohican, sans-serif', color: card.accentColor === '#ffffff' ? '#000' : '#000' }}
          >
            {card.mainText}
          </div>
          <div 
            className="text-3xl font-bold leading-none tracking-[0.08em]" 
            style={{ fontFamily: 'Mohican, sans-serif', color: card.accentColor === '#ffffff' ? '#000' : '#000' }}
          >
            {card.subText}
          </div>
          <div className="absolute top-4 right-4 text-right text-[7px]" style={{ fontFamily: monoFont, color: 'rgba(0,0,0,0.6)' }}>
            {card.codes.bottomCodes.map((code, i) => (
              <div key={i}>{code}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Accent Tab */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${isHovered ? '-translate-y-8' : '-translate-y-1/2'}`}
        style={{ backgroundColor: card.accentColor }} 
      />

      {/* Keychain — hidden on narrow screens (was causing horizontal overflow / layout shift) */}
      <div className={`absolute -right-12 top-1/3 hidden transition-transform duration-300 sm:block ${isHovered ? '-translate-y-3' : ''}`}>
        <div className="w-3 h-6 bg-neutral-700 rounded-sm" />
        <div className="w-2 h-12 bg-neutral-800 rounded-sm mx-auto" />
        <div className="w-6 h-6 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
      </div>
    </div>
  )
}

export default function AboutPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>("huix-2099")
  const [isCardHovered, setIsCardHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
  
  const activeContent = tabsContent.find(tab => tab.id === activeTab) || tabsContent[0]

  return (
    <>
      <Navbar />

      {/* Main Content Area */}
      <div className="min-h-screen overflow-x-hidden bg-background">


        {/* Header with Tab Switcher */}
        <header className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 xl:ml-24">
            {/* Top Meta */}
            <div 
              className="flex items-center justify-between py-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
              style={{ fontFamily: monoFont }}
            >
              <span>FROM START TO FINISH</span>
              <span>ABOUT · {activeContent.shortLabel}</span>
            </div>

            {/* Tab Switcher */}
            <div className="py-6 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {tabsContent.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                      activeTab === tab.id 
                        ? 'text-background' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    style={{ fontFamily: monoFont }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="aboutTabHighlight"
                        className="absolute inset-0 bg-foreground"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Cardholder Section */}
            <section id="our-story" className="scroll-mt-24 py-12 bg-[#202020]">
              <div className="max-w-6xl mx-auto px-4 lg:px-8 xl:ml-24">
                <div className="grid lg:grid-cols-2 gap-8 items-center justify-items-center lg:justify-items-stretch">
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="cursor-pointer"
                    onMouseEnter={() => setIsCardHovered(true)}
                    onMouseLeave={() => setIsCardHovered(false)}
                    onTouchStart={() => setIsCardHovered(true)}
                    onTouchEnd={() => setIsCardHovered(false)}
                  >
                    <CardholderDesign card={activeContent.card} isHovered={isCardHovered} />
                    <div className="text-center mt-4">
                      <span className="text-[9px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                        {isCardHovered ? 'Release to close' : 'Hover to reveal'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Quick Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                      {activeContent.shortLabel} · Overview
                    </div>
                    <h2 
                      className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide"
                      style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                    >
                      {activeContent.label}
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                      {activeContent.sections[0].content[0].substring(0, 200)}...
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {activeContent.card.systemInfo.slice(0, 3).map((info, i) => (
                        <div key={i} className="px-3 py-2 bg-neutral-800/50 border border-neutral-700 text-[10px]" style={{ fontFamily: monoFont }}>
                          <span className="text-neutral-500">{info.label}:</span>{' '}
                          <span className="text-neutral-300">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            {activeContent.sections.map((section, sectionIndex) => (
              <section 
                key={section.number} 
                className={`py-16 lg:py-24 border-b border-border ${sectionIndex % 2 === 1 ? 'bg-card/30' : ''}`}
              >
                <div className="max-w-6xl mx-auto px-4 lg:px-8 xl:ml-24">
                  <div className="grid lg:grid-cols-[140px_280px_1fr] gap-8 lg:gap-12">
                    {/* Large Number */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[clamp(3.25rem,22vw,7.5rem)] font-bold leading-[0.85] text-foreground lg:text-[160px]"
                        style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
                      >
                        {section.number}
                      </motion.div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="lg:pt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h2 
                          className="text-2xl lg:text-3xl font-bold leading-tight mb-3"
                          style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.08em' }}
                        >
                          {section.title}
                        </h2>
                        <div 
                          className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                          style={{ fontFamily: monoFont }}
                        >
                          {section.subtitle}
                        </div>
                      </motion.div>
                    </div>

                    {/* Two-Column Content */}
                    <div className="lg:pt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="columns-1 md:columns-2 gap-8 text-[14px] leading-relaxed text-muted-foreground"
                      >
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4 break-inside-avoid">
                            {paragraph}
                          </p>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* CTA Section */}
            <section className="py-16 lg:py-20">
              <div className="max-w-6xl mx-auto px-4 lg:px-8 xl:ml-24">
                <div className="grid lg:grid-cols-[140px_1fr] gap-8 lg:gap-12">
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-6xl lg:text-7xl font-bold text-foreground/10"
                      style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
                    >
                      →
                    </motion.div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 
                        className="text-2xl font-bold mb-2"
                        style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.08em' }}
                      >
                        {activeTab === "huix-2099" && "Ready to build the future?"}
                        {activeTab === "huix-or" && "Try HUIXOR"}
                        {activeTab === "monrovia-hustle" && "Explore Monrovia Hustle 3D"}
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-md">
                        {activeTab === "huix-2099" && "Get in touch to discuss how HUIX-2099 can help bring your vision to life."}
                        {activeTab === "huix-or" && "Download HUIXOR, browse screenshots, and see how the dev browser fits your workflow."}
                        {activeTab === "monrovia-hustle" && "Franchise hub, Concept 01 dossier, trailer, cast, and the Windows build drop."}
                      </p>
                    </div>
                    <Link href={activeTab === "huix-2099" ? "/contact" : activeTab === "huix-or" ? "/products/huixor" : "/products/monrovia-hustle/concept"}>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 px-6 py-3 bg-foreground text-background text-[11px] uppercase tracking-[0.12em]"
                        style={{ fontFamily: monoFont }}
                      >
                        <span>{activeTab === "huix-2099" ? "Contact Us" : "Learn More"}</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>

        {/* Footer Meta */}
        <section className="py-6 px-4 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 xl:ml-24">
            <div 
              className="flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-muted-foreground/40"
              style={{ fontFamily: monoFont }}
            >
              <div className="flex items-center gap-3">
                <span>HUIX-2099</span>
                <span className="h-px w-4 bg-border/50" />
                <span>ABOUT</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{activeContent.shortLabel}</span>
                <span className="h-px w-4 bg-border/50" />
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section id="mission-and-values" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 sm:mb-8 border-b border-border/70 pb-3 sm:pb-4 flex items-end justify-between">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>02</div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.18em] mb-1">Mission & Values</div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-[0.08em] sm:tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>MISSION & VALUES</h2>
                  </div>
                </div>
                <div className="hidden md:block text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">Series / 02 · v1</div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'INNOVATION', desc: "Constantly challenging the boundaries of what is possible in technology" },
                { title: 'CREATIVITY', desc: 'Where art and science coexist in perfect harmony for extraordinary solutions' },
                { title: 'INTEGRITY', desc: 'Operating with honesty, responsibility, and transparency always' },
                { title: 'COLLABORATION', desc: 'True innovation happens through collective intelligence and teamwork' },
                { title: 'EXCELLENCE', desc: 'Continuous improvement and technical mastery in every project' },
                { title: 'EMPOWERMENT', desc: 'Inspiring the next generation of African innovators and leaders' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]"
                      style={{ fontFamily: monoFont }}
                    >
                      Value
                    </div>
                    <div 
                      className="text-sm text-muted-foreground tabular-nums"
                      style={{ fontFamily: monoFont }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="h-px w-full bg-border mb-4" />
                  <h3 
                    className="text-lg font-bold text-foreground mb-2 uppercase tracking-[0.06em]"
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-muted-foreground leading-relaxed text-sm"
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
