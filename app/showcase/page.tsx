"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BoardingPass } from "@/components/boarding-pass"
import { TiltCard } from "@/components/tilt-card"
import { Mail } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const CONTACT_EMAIL = "huixtech2099@gmail.com"

type ShowcaseItem = {
  title: string
  category: string
  description: string
  href: string
  img?: string
  year: string
}

const items: ShowcaseItem[] = [
  {
    title: "Monrovia Hustle 3D",
    category: "Game · 3D",
    description: "A Liberian narrative game with a fully local voice cast and immersive 3D world.",
    href: "/products/monrovia-hustle",
    img: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    year: "2025",
  },
  {
    title: "Huixor",
    category: "App · Immersive",
    description: "An immersive desktop application blending creativity, tools, and experience.",
    href: "/products/huixor",
    img: "/products/huixor/lightmode.jpg",
    year: "2025",
  },
  {
    title: "HUIX-THEME",
    category: "Developer Tool",
    description: "A refined VS Code theme crafted for focus, clarity, and long coding sessions.",
    href: "/products/huix-theme",
    year: "2024",
  },
  {
    title: "Typelr",
    category: "Software · Productivity",
    description: "A typing and productivity tool engineered for speed and flow.",
    href: "/products/typelr",
    year: "2025",
  },
]

export default function ShowcasePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>S H O W C A S E</span>
            </div>
            <span>REF · 04 · SHOWCASE</span>
          </div>
          <div className="py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4" style={{ fontFamily: monoFont }}>
                [SHOWCASE] SELECTED WORK
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[0.9]" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}>
                Showcase
              </h1>
              <div className="h-px w-20 bg-foreground/20 mb-6" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                A selection of products, prototypes, and immersive experiences built by HUIX-2099 —
                from games and apps to developer tools.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block text-right">
              <div className="text-[180px] font-bold leading-[0.8] text-foreground/[0.04] select-none" style={{ fontFamily: "Mohican, sans-serif" }}>
                0 4
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 mt-2" style={{ fontFamily: monoFont }}>
                Featured Projects
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10" style={{ fontFamily: monoFont }}>
            [0 1] PROJECTS
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <TiltCard max={5} scale={1.02}>
                <BoardingPass
                  href={item.href}
                  tone={i % 2 === 1 ? "invert" : "default"}
                  airline="HUIX-2099 · SHOWCASE"
                  flight={`RUN-0${i + 1}`}
                  image={item.img}
                  from={{ code: "IDEA", label: "concept" }}
                  to={{ code: "LIVE", label: item.year }}
                  rows={[
                    { label: "Project", value: item.title },
                    { label: "Type", value: item.category },
                    { label: "Year", value: item.year },
                  ]}
                  id={`HX-${item.title.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(0, 8)}-${item.year}`}
                  cta="View"
                />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-border rounded-lg bg-card">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "Mohican, sans-serif" }}>
                Have a project in mind?
              </h2>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
                Let&apos;s build something immersive together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("HUIX-2099 — Project inquiry")}`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
                style={{ fontFamily: monoFont }}
              >
                <Mail className="h-5 w-5" />
                Email for info
              </a>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-sm uppercase tracking-[0.12em] hover:bg-card transition-colors"
                style={{ fontFamily: monoFont }}
              >
                All products
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
            <Link href="/" className="hover:text-foreground/60 transition-colors">← Home</Link>
            <span>SHOWCASE · HUIX-2099</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
