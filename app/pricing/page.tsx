"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { TiltCard } from "@/components/tilt-card"
import {
  Check,
  Mail,
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Monitor,
  Boxes,
  Clapperboard,
  GitBranch,
  type LucideIcon,
} from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const CONTACT_EMAIL = "huixtech2099@gmail.com"

type Plan = {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: LucideIcon
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "01",
    title: "Website Development",
    subtitle: "Webseitenentwicklung",
    description: "Fast, clean marketing sites and full dynamic platforms with CMS, auth, and databases.",
    icon: Globe,
    features: [
      "Landing pages & portfolios",
      "CMS & content management",
      "Authentication & database",
      "SEO-optimized & responsive",
      "Analytics & performance tuning",
    ],
  },
  {
    id: "02",
    title: "App Development",
    subtitle: "Anwendungsentwicklung",
    description: "Cross-platform mobile apps with full backend services and real-time features.",
    icon: Smartphone,
    features: [
      "iOS & Android",
      "Full backend services",
      "Real-time & push notifications",
      "Offline support",
      "App store deployment",
    ],
    popular: true,
  },
  {
    id: "03",
    title: "PWA & Full Stack",
    subtitle: "Vollständige Lösung",
    description: "End-to-end progressive web applications built to scale from day one.",
    icon: Layers,
    features: [
      "Offline-first PWA",
      "Full-stack architecture",
      "Scalable cloud backend",
      "API design & integration",
      "Ongoing maintenance",
    ],
  },
  {
    id: "04",
    title: "Native Software",
    subtitle: "Desktop Software",
    description: "High-performance native desktop applications for Windows, macOS, and Linux.",
    icon: Monitor,
    features: [
      "Cross-platform desktop",
      "Native performance",
      "Auto-updates",
      "System & hardware integration",
    ],
  },
  {
    id: "05",
    title: "XR · VR · AR",
    subtitle: "Immersive Erlebnisse",
    description: "Spatial, immersive experiences and 3D visualization for the web and headsets.",
    icon: Boxes,
    features: [
      "3D scenes & spatial UX",
      "VR & AR visualization",
      "WebXR experiences",
      "Interactive walkthroughs",
    ],
  },
  {
    id: "06",
    title: "Animation & Motion",
    subtitle: "Bewegtbild",
    description: "Motion graphics, animated brand content, and explainer videos.",
    icon: Clapperboard,
    features: [
      "Motion graphics",
      "Animated brand content",
      "Explainer videos",
      "UI micro-interactions",
    ],
  },
]

function mailtoFor(planTitle: string) {
  const subject = encodeURIComponent(`HUIX-2099 — Inquiry: ${planTitle}`)
  const body = encodeURIComponent(
    `Hi HUIX-2099 team,\n\nI'm interested in your "${planTitle}" service. Here are some details about my project:\n\n- Overview:\n- Goals:\n- Timeline:\n- Budget range:\n\nLooking forward to hearing from you.`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-foreground/[0.05] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
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
              <span>CUSTOM QUOTES</span>
            </div>
          </div>
          <div className="py-16 lg:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8"
                style={{ fontFamily: monoFont }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                Tailored to your project
              </div>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}
              >
                PRICING
              </h1>
              <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
                Every project is unique, so we quote each one individually. Pick the service that
                fits, send us the details, and we&apos;ll reply with a tailored proposal.
              </p>
              <a
                href={mailtoFor("General inquiry")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.12em] text-background hover:opacity-90 transition-opacity"
                style={{ fontFamily: monoFont }}
              >
                <Mail className="h-4 w-4" />
                Email for info
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-12 text-center"
            style={{ fontFamily: monoFont }}
          >
            [0 1] SERVICES BY CATEGORY
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => {
              const Icon = plan.icon
              return (
                <TiltCard key={plan.id} max={6} className={`h-full ${plan.popular ? "lg:-translate-y-3" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ${
                    plan.popular
                      ? "bg-foreground text-background shadow-2xl ring-1 ring-foreground"
                      : "border border-border bg-card/40 hover:border-foreground/30 hover:bg-card"
                  }`}
                >
                  {/* hover sheen (non-featured) */}
                  {!plan.popular && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}

                  {plan.popular && (
                    <span
                      className="absolute right-6 top-6 rounded-full bg-background px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
                      style={{ fontFamily: monoFont }}
                    >
                      Most Requested
                    </span>
                  )}

                  <div className="relative">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        plan.popular ? "border-background/20 bg-background/10" : "border-border bg-background/40"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>

                    <div
                      className={`mt-5 text-[10px] uppercase tracking-[0.15em] ${
                        plan.popular ? "text-background/60" : "text-muted-foreground/60"
                      }`}
                      style={{ fontFamily: monoFont }}
                    >
                      {plan.subtitle}
                    </div>
                    <h3
                      className="mt-1 text-2xl font-bold uppercase tracking-wide"
                      style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
                    >
                      {plan.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>

                    <div className={`my-6 h-px w-full ${plan.popular ? "bg-background/15" : "bg-border"}`} />

                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular ? "bg-background/15" : "bg-foreground/10"
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          <span className={plan.popular ? "text-background/90" : "text-foreground/90"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-8 pt-2">
                    <a
                      href={mailtoFor(plan.title)}
                      className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs uppercase tracking-[0.12em] transition-all ${
                        plan.popular
                          ? "bg-background text-foreground hover:opacity-90"
                          : "border border-border text-foreground hover:bg-foreground hover:text-background"
                      }`}
                      style={{ fontFamily: monoFont }}
                    >
                      <Mail className="h-4 w-4" />
                      Email for info
                    </a>
                  </div>
                </motion.div>
                </TiltCard>
              )
            })}
          </div>

          {/* Open source / collaboration banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative mt-6 flex flex-col gap-6 overflow-hidden rounded-3xl border border-dashed border-border bg-card/30 p-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/40">
                <GitBranch className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
                >
                  Open Source & Collaboration
                </h3>
                <p className="mt-1.5 max-w-xl text-sm text-muted-foreground leading-relaxed">
                  Building something open or want to collaborate as a developer or engineer? We work
                  with the community — reach out and let&apos;s create together.
                </p>
              </div>
            </div>
            <a
              href={mailtoFor("Open Source & Collaboration")}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-7 py-3.5 text-xs uppercase tracking-[0.12em] text-foreground transition-all hover:bg-foreground hover:text-background"
              style={{ fontFamily: monoFont }}
            >
              Let&apos;s collaborate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-6"
            style={{ fontFamily: monoFont }}
          >
            [0 2] HOW PRICING WORKS
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Every project is quoted individually based on scope and complexity.",
              "Email us the service you need and we'll send a tailored proposal.",
              "PWA = Progressive Web App; full project scope can be quoted end-to-end.",
              "Open source collaboration for developers and engineers is welcome.",
            ].map((note, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-2xl border border-border bg-background/40 p-5 text-sm text-muted-foreground"
              >
                <span
                  className="text-[10px] text-muted-foreground/50 pt-0.5"
                  style={{ fontFamily: monoFont }}
                >
                  0{i + 1}
                </span>
                <span style={{ fontFamily: monoFont }}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 lg:p-14 text-center">
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-foreground/[0.05] blur-[100px]" />
            <div className="relative">
              <h2
                className="text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
              >
                Ready to start a project?
              </h2>
              <p className="mx-auto max-w-md text-sm text-muted-foreground mb-8" style={{ fontFamily: monoFont }}>
                Email us for a custom quote or to discuss scope — we reply within 24–48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={mailtoFor("General inquiry")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm uppercase tracking-[0.12em] text-background hover:opacity-90 transition-opacity"
                  style={{ fontFamily: monoFont }}
                >
                  <Mail className="h-5 w-5" />
                  Email for info
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm uppercase tracking-[0.12em] hover:bg-background transition-colors"
                  style={{ fontFamily: monoFont }}
                >
                  Contact page
                </Link>
              </div>
            </div>
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
