"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Globe, Smartphone, Layers, Monitor, Film, Users } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

// Google Cardboard VR icon for articulated visualization (VR & AR)
function CardboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M10 18h4" />
      <path d="M12 6v-2" />
    </svg>
  )
}

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  monitor: Monitor,
  cardboard: CardboardIcon,
  film: Film,
  users: Users,
} as const

const pricingPlans = [
  { id: "01", title: "Website Development", iconKey: "globe" as const, items: [
    { name: "Static website", price: 500, note: "USD" },
    { name: "Dynamic (system included)", price: 1500, note: "USD" },
  ]},
  { id: "02", title: "App", iconKey: "smartphone" as const, items: [
    { name: "Static app", price: 600, note: "USD" },
    { name: "Dynamic (system included)", price: 2000, note: "USD" },
  ]},
  { id: "03", title: "PWA & Full Stack", iconKey: "layers" as const, items: [
    { name: "PWA or full project (all-in)", price: 3000, note: "USD" },
  ]},
  { id: "04", title: "Native Software", iconKey: "monitor" as const, items: [
    { name: "Windows or other desktop OS", price: 1000, note: "USD" },
  ]},
  { id: "05", title: "XR · VR · AR", iconKey: "cardboard" as const, items: [
    { name: "Articulated visualization (VR & AR)", price: 200, note: "USD" },
  ]},
  { id: "06", title: "Animation", iconKey: "film" as const, items: [
    { name: "Simple animation", price: 300, note: "USD" },
  ]},
  { id: "07", title: "Open Source & Collaboration", iconKey: "users" as const, items: [
    { name: "Developer & engineer collaboration", price: null, note: "Free" },
  ]},
]

export default function PricingPage() {
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
              <span>PRICING</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · PRC-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>ALL USD</span>
            </div>
          </div>
          <div className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[160px] lg:text-[220px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
              >
                P
              </motion.div>
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                    style={{ fontFamily: monoFont }}
                  >
                    [PRICING] PLANS
                  </div>
                  <h1
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}
                  >
                    PRICING
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-6" />
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    Transparent rates for website development, apps, PWA, native software, VR/AR
                    visualization, and animation. All prices in USD. Open source collaboration free.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-8"
            style={{ fontFamily: monoFont }}
          >
            [01] PLANS BY CATEGORY
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, planIndex) => {
              const IconComponent = iconMap[plan.iconKey]
              return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: planIndex * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="border border-border rounded-lg overflow-hidden flex flex-col bg-[#1a1a1a]"
              >
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div
                    className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground flex items-center justify-between flex-1 min-w-0"
                    style={{ fontFamily: monoFont }}
                  >
                    <span>[{plan.id}]</span>
                    <span className="truncate">{plan.title}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  {plan.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 py-2 border-b border-white/10 last:border-b-0 last:pb-0"
                      style={{ fontFamily: monoFont }}
                    >
                      <span className="text-sm text-neutral-200 flex-1 min-w-0">
                        <span className="text-neutral-500 text-[10px] mr-2">
                          [{String(i + 1).padStart(2, "0")}]
                        </span>
                        {item.name}
                      </span>
                      <span className="text-sm font-medium text-white shrink-0">
                        {item.price != null
                          ? `$${item.price.toLocaleString()} ${item.note}`
                          : item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary strip */}
      <section className="py-10 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-4"
            style={{ fontFamily: monoFont }}
          >
            [02] NOTES
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
