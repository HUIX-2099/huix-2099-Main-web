"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

const pricingPlans = [
  {
    id: "0 1", title: "Website Development", subtitle: "Webseitenentwicklung", items: [
      { name: "Static website", price: 500, desc: "Fast, clean landing pages and portfolios" },
      { name: "Dynamic (system included)", price: 1500, desc: "Full CMS, auth, and database integration" },
    ]
  },
  {
    id: "0 2", title: "App", subtitle: "Anwendungsentwicklung", items: [
      { name: "Static app", price: 600, desc: "Lightweight mobile applications" },
      { name: "Dynamic (system included)", price: 2000, desc: "Full-featured with backend services" },
    ]
  },
  {
    id: "0 3", title: "PWA & Full Stack", subtitle: "Vollständige Lösung", items: [
      { name: "PWA or full project (all-in)", price: 3000, desc: "End-to-end progressive web application" },
    ]
  },
  {
    id: "0 4", title: "Native Software", subtitle: "Desktop Software", items: [
      { name: "Windows or other desktop OS", price: 1000, desc: "Native desktop application development" },
    ]
  },
  {
    id: "0 5", title: "XR · VR · AR", subtitle: "Immersive Erlebnisse", items: [
      { name: "Articulated visualization (VR & AR)", price: 200, desc: "3D scenes and spatial experiences" },
    ]
  },
  {
    id: "0 6", title: "Animation", subtitle: "Bewegtbild", items: [
      { name: "Simple animation", price: 300, desc: "Motion graphics and animated content" },
    ]
  },
  {
    id: "0 7", title: "Open Source & Collaboration", subtitle: "Zusammenarbeit", items: [
      { name: "Developer & engineer collaboration", price: null, desc: "Free for open source contributors" },
    ]
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* Hero — Editorial Style */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>P R I C I N G</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · PRC-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>ALL USD</span>
            </div>
          </div>
          <div className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                  style={{ fontFamily: monoFont }}
                >
                  [PRICING] TRANSPARENT RATES
                </div>
                <h1
                  className="text-5xl lg:text-7xl font-bold mb-6 leading-[0.9]"
                  style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
                >
                  P r i c i n g
                </h1>
                <div className="h-px w-20 bg-foreground/20 mb-6" />
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                  Transparent rates for website development, apps, PWA, native software, VR/AR
                  visualization, and animation. All prices in USD.
                </p>
              </motion.div>
              {/* Right — Large decorative numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block text-right"
              >
                <div className="text-[180px] font-bold leading-[0.8] text-foreground/[0.04] select-none" style={{ fontFamily: "Mohican, sans-serif" }}>
                  0 7
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 mt-2" style={{ fontFamily: monoFont }}>
                  Service Categories
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — Editorial Magazine Layout */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-16"
            style={{ fontFamily: monoFont }}
          >
            [0 1] PLANS BY CATEGORY
          </div>

          {/* Editorial Grid — Scattered big-number layout inspired by magazine contents */}
          <div className="space-y-0">
            {pricingPlans.map((plan, planIndex) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: planIndex * 0.05 }}
                className="group border-b border-border/50 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-4 lg:gap-8 py-8 lg:py-12 items-start">
                  {/* Large number */}
                  <div>
                    <div
                      className="text-[80px] lg:text-[100px] font-bold leading-[0.85] text-foreground/80 group-hover:text-foreground transition-colors"
                      style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.02em" }}
                    >
                      {plan.id}
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <div className="lg:pt-4">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-1 uppercase tracking-wide"
                      style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.08em" }}
                    >
                      {plan.title}
                    </h3>
                    <div
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 mb-4"
                      style={{ fontFamily: monoFont }}
                    >
                      {plan.subtitle}
                    </div>
                    <div className="h-px w-12 bg-border mb-4" />
                  </div>

                  {/* Items / Prices */}
                  <div className="lg:pt-4 space-y-4">
                    {plan.items.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-[9px] text-muted-foreground/40"
                              style={{ fontFamily: monoFont }}
                            >
                              [{String(i + 1).padStart(2, "0")}]
                            </span>
                            <span className="text-sm text-foreground font-medium">{item.name}</span>
                          </div>
                          <p className="text-[12px] text-muted-foreground/60 leading-relaxed pl-7" style={{ fontFamily: monoFont }}>
                            {item.desc}
                          </p>
                        </div>
                        <div
                          className="text-2xl lg:text-3xl font-bold text-foreground shrink-0 tabular-nums"
                          style={{ fontFamily: "Mohican, sans-serif" }}
                        >
                          {item.price != null ? (
                            <>
                              <span className="text-sm text-muted-foreground/50 mr-1">$</span>
                              {item.price.toLocaleString()}
                            </>
                          ) : (
                            <span className="text-lg text-muted-foreground/60">Free</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-10 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-4"
            style={{ fontFamily: monoFont }}
          >
            [0 2] NOTES
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
            <li className="flex gap-3">
              <span className="text-foreground/50">·</span>
              All listed prices are in USD unless noted.
            </li>
            <li className="flex gap-3">
              <span className="text-foreground/50">·</span>
              PWA = Progressive Web App; full project scope can be quoted.
            </li>
            <li className="flex gap-3">
              <span className="text-foreground/50">·</span>
              Native software: Windows, macOS, Linux, or other desktop OS.
            </li>
            <li className="flex gap-3">
              <span className="text-foreground/50">·</span>
              Open source collaboration for developers and engineers: free.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-border rounded-lg bg-card">
            <div>
              <h2
                className="text-xl font-bold uppercase tracking-wide mb-2"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                Ready to start a project?
              </h2>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: monoFont }}>
                Contact us for a custom quote or to discuss scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity shrink-0"
              style={{ fontFamily: monoFont }}
            >
              <ExternalLink className="h-5 w-5" />
              Contact
            </Link>
          </div>
          <div
            className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/40"
            style={{ fontFamily: monoFont }}
          >
            <Link href="/" className="hover:text-foreground/60 transition-colors">
              ← Home
            </Link>
            <span>PRICING · HUIX-2099</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
