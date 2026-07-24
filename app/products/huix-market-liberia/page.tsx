"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Store, Users, Truck, CheckCircle, ExternalLink, Globe } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

const features = [
  { icon: Store, label: "Verified merchants", detail: "Trusted sellers vetted and onboarded by our team" },
  { icon: Users, label: "Buyer protection", detail: "Secure transactions with verified payment methods" },
  { icon: Truck, label: "Integrated logistics", detail: "Seamless delivery networks across Liberia" },
  { icon: Globe, label: "Pan-African reach", detail: "Connect with buyers and sellers across the region" },
  { icon: CheckCircle, label: "Quality assurance", detail: "Every transaction meets our standards" },
]

const stats = [
  { label: "Active Sellers", value: "100+", detail: "Verified merchants" },
  { label: "Product Categories", value: "50+", detail: "Shopping selections" },
  { label: "Monthly Users", value: "10K+", detail: "Growing community" },
]

const howItWorks = [
  { num: "01", title: "Sellers", desc: "Merchants apply, get verified by our team, and launch their store with inventory management tools, analytics, and integrated payments." },
  { num: "02", title: "Buyers", desc: "Browse verified products, compare prices, and shop with confidence. Our buyer protection ensures safe transactions." },
  { num: "03", title: "Delivery", desc: "Orders are fulfilled through our logistics partners. Track shipments in real-time from store to doorstep." },
]

export default function HuixMarketLiberiPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Top Meta Strip */}
          <div
            className="flex items-center justify-between border-b border-border/50 py-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>HUIX MARKET LIBERIA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">PRODUCT · PRD-006</span>
              <span className="hidden sm:inline h-px w-4 bg-border/50" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-10 lg:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden text-[200px] font-bold leading-[0.75] text-foreground/[0.04] select-none lg:block"
                style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}
              >
                M
              </motion.div>

              {/* Right - Content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div
                    className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
                    style={{ fontFamily: monoFont }}
                  >
                    [06] E-COMMERCE PLATFORM
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                    HUIX Market
                    <br />
                    Liberia
                  </h1>
                  <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl">
                    Premium commerce for Liberia and beyond. Connect with verified sellers, browse trusted products, and enjoy seamless delivery across the region.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <a
                      href="https://huix-market.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Visit Platform
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-foreground/5 transition-colors"
                    >
                      Back to Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
              style={{ fontFamily: monoFont }}
            >
              PLATFORM FEATURES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Choose HUIX Market</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col p-6 rounded-lg border border-border bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors"
                >
                  <Icon className="h-8 w-8 mb-4 text-foreground/60" />
                  <h3 className="font-semibold mb-2">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground">{feature.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-b border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
              style={{ fontFamily: monoFont }}
            >
              PLATFORM FLOW
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">How HUIX Market Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div
                  className="text-6xl font-bold mb-4 text-foreground/10"
                  style={{ fontFamily: monoFont }}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
              style={{ fontFamily: monoFont }}
            >
              TECHNOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Built With</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "E-Commerce"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-3 rounded-lg border border-border bg-foreground/[0.02] text-center text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="border-b border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Shop or Sell?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of Liberian merchants and shoppers on HUIX Market. Start your journey today.
            </p>
            <a
              href="https://huix-market.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Visit HUIX Market Liberia
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
