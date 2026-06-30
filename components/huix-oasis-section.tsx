"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ParallaxReveal } from "@/components/parallax"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const
const OASIS_IMAGE = `/Huix-Oasis/${encodeURIComponent("Huix - Oasis.png")}`

export function HuixOasisSection() {
  return (
    <ParallaxReveal direction="up" delay={0.2}>
      <section className="mt-12 w-full overflow-hidden rounded-[32px] border border-border/50 bg-card/40">
        <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 lg:p-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-lg ring-1 ring-black/[0.04] dark:ring-white/[0.06]"
          >
            <Image
              src={OASIS_IMAGE}
              alt="HUIX Oasis — experimental virtual overlay research platform"
              width={1200}
              height={675}
              className="aspect-[16/10] h-full w-full object-cover object-center lg:aspect-auto lg:min-h-[280px]"
              priority={false}
            />
          </motion.div>

          <div className="flex min-w-0 flex-col justify-center text-left">
            <p
              className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
              style={{ fontFamily: MONO }}
            >
              HUIX-2099 · Flagship research
            </p>
            <h2
              className="text-3xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-4xl"
              style={{ fontFamily: "Mohican, sans-serif" }}
            >
              HUIX Oasis
            </h2>
            <p className="mt-2 text-sm font-medium text-[#002868] dark:text-[#89b8ff] sm:text-base">
              An Experimental Research Platform
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.7]">
              HUIX Oasis is the flagship research initiative of HUIX-2099 — an experimental virtual overlay
              operating system that transforms Android smartphones into immersive spatial computing devices.
              Instead of replacing Android, Oasis operates as a virtual layer for apps, services, and digital
              spaces inside an interactive VR environment.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
              HUIX Oasis is being developed as a long-term research project exploring the future of mobile
              computing.
            </p>
            <Link href="/huix-oasis" className="mt-6 inline-flex w-fit">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-background transition-shadow hover:shadow-lg hover:shadow-foreground/20 sm:px-8 sm:py-3.5 sm:text-sm"
              >
                Explore HUIX Oasis
                <ArrowRight className="h-4 w-4" aria-hidden />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
    </ParallaxReveal>
  )
}
