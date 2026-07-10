"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Box, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  HCM_FEATURES,
  HCM_HERO_VIDEO,
  HCM_LOGO,
  HCM_QUICK_FACTS,
  HCM_REQUIREMENTS,
  HCM_STEPS,
} from "@/lib/huix-character-motion"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const
const GRAFFITI = "Mohican, Impact, Haettenschweiler, sans-serif" as const
const RED = "#E63946"
const ORANGE = "#F97316"

function GraffitiButton({
  href,
  children,
  variant = "light",
}: {
  href: string
  children: ReactNode
  variant?: "light" | "red"
}) {
  return (
    <Link
      href={href}
      className={
        variant === "red"
          ? "inline-block border-2 border-[#E63946] bg-[#E63946] px-8 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
          : "inline-block border-2 border-white bg-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-[4px_4px_0_#E63946] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#E63946]"
      }
      style={{ fontFamily: MONO }}
    >
      {children}
    </Link>
  )
}

export default function HuixCharacterMotionPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#E63946] selection:text-white">
      <Navbar />

      {/* Hero — video bg, graffiti poster */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HCM_HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div className="relative z-10 flex min-h-screen flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-10">
          <nav
            className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-[11px]"
            style={{ fontFamily: MONO }}
          >
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how" className="transition hover:text-white">
              How it works
            </a>
            <a href="#support" className="transition hover:text-white">
              Support
            </a>
            <span className="text-white/40">Blender addon</span>
          </nav>

          <div className="mx-auto mt-10 flex flex-1 flex-col items-center justify-center text-center sm:mt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 w-full max-w-md sm:max-w-lg"
            >
              <Image
                src={HCM_LOGO}
                alt="HUIX Character Motion Plugin — Monrovia Hustle Edition"
                width={800}
                height={400}
                className="h-auto w-full drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-[10px] font-bold uppercase tracking-[0.35em] sm:text-[11px]"
              style={{ fontFamily: MONO, color: ORANGE }}
            >
              Monrovia Hustle Edition · Blender addon
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-3xl text-2xl font-black uppercase leading-[1.1] tracking-wide sm:text-4xl lg:text-5xl"
              style={{ fontFamily: GRAFFITI, letterSpacing: "0.04em" }}
            >
              Animation Studio for Blender
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg"
            >
              Type what you want. Your character performs it.{" "}
              <span className="text-white">No motion capture suit needed.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <GraffitiButton href="#features">See features</GraffitiButton>
              <GraffitiButton href="#support" variant="red">
                Donate
              </GraffitiButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About — split collage style */}
      <section className="border-y border-white/10 bg-[#111] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-full w-[88%] border-2 border-[#E63946]/40" aria-hidden />
            <div className="relative border border-white/15 bg-[#0a0a0a] p-4">
              <Image
                src={HCM_LOGO}
                alt=""
                width={600}
                height={360}
                className="w-full object-contain opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 hidden h-24 w-32 border-2 border-white/20 bg-[#1a1a1a] sm:block" aria-hidden />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ fontFamily: MONO, color: ORANGE }}>
              About
            </p>
            <h2
              className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl"
              style={{ fontFamily: GRAFFITI }}
            >
              Prompt to performance
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-white/70">
              Monrovia Hustle Edition is a <strong className="text-white">Blender addon</strong> that brings Avaturn
              and Mixamo-style characters to life with one click — or one sentence. Type a prompt like &ldquo;enter keke
              to drive&rdquo;, &ldquo;happy win&rdquo;, or &ldquo;sad slow walk&rdquo; and the addon generates full-body
              animation instantly: legs, spine, head, and every finger.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-white/55">
              Built for game developers, filmmakers, and creators who need real human motion without the cost of a mocap
              studio.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-wider text-white/60">
              <Box className="h-3.5 w-3.5" style={{ color: ORANGE }} aria-hidden />
              <span style={{ fontFamily: MONO }}>Plugin · not a standalone app</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed feature band */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src={HCM_HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden />
        <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
          <h2 className="text-3xl font-black uppercase sm:text-5xl" style={{ fontFamily: GRAFFITI }}>
            Your phone is the studio
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Video-to-animation beta turns any clip of a person into keyframes on your rig. Combined with 51+ procedural
            clips and prompt-driven scenes, HUIX Character Motion is animation infrastructure for the Monrovia Hustle
            pipeline — and your project.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 bg-[#0a0a0a] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40" style={{ fontFamily: MONO }}>
            ✦ Key Features
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
          {HCM_FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-white/10 bg-[#111] p-6 transition hover:border-[#E63946]/40"
            >
              <span className="text-2xl" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-24 border-t border-white/10 bg-[#111] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40" style={{ fontFamily: MONO }}>
            ✦ How It Works
          </p>
          <ol className="mt-10 space-y-4 text-left">
            {HCM_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 border-l-2 border-[#E63946] py-2 pl-5 text-[15px] text-white/80"
              >
                <span className="shrink-0 font-bold text-[#E63946]" style={{ fontFamily: MONO }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-white/40" style={{ fontFamily: MONO }}>
            ✦ Requirements
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/65">
            {HCM_REQUIREMENTS.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-[#E63946]">—</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support — graffiti CTA */}
      <section id="support" className="scroll-mt-24 relative overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-6 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(-12deg, transparent, transparent 40px, ${RED} 40px, ${RED} 41px)`,
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Heart className="mx-auto h-10 w-10 text-[#E63946]" aria-hidden />
          <h2
            className="mt-6 text-4xl font-black uppercase tracking-wide sm:text-5xl"
            style={{ fontFamily: GRAFFITI, color: RED }}
          >
            Support the project
          </h2>
          <p className="mt-6 text-[15px] leading-[1.85] text-white/70">
            Monrovia Hustle Edition is built by an independent developer from the Monrovia Hustle game project — a
            Liberian story about a keke driver who dreams bigger. This plugin is a work in progress with a big roadmap:
            more animations, smoother video capture, facial animation, two-character interactions, and a full animation
            marketplace.
          </p>
          <p className="mt-4 text-sm text-white/50">
            Every donation goes directly into development time. Even $1 helps — donors get their name in the credits and
            a vote on which animations get built next.
          </p>
          <div className="mt-10">
            <a
              href="mailto:huixtech2099@gmail.com?subject=HUIX%20Character%20Motion%20Plugin%20Donation"
              className="inline-block border-2 border-white bg-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-[5px_5px_0_#E63946] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#E63946]"
              style={{ fontFamily: MONO }}
            >
              💛 Donate — help complete this plugin
            </a>
            <p className="mt-4 text-[10px] text-white/35" style={{ fontFamily: MONO }}>
              Ko-fi / PayPal link coming soon · email us to contribute now
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="border-t border-white/10 bg-[#111] px-4 py-8">
        <div
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.14em] text-white/50 sm:text-[10px]"
          style={{ fontFamily: MONO }}
        >
          {HCM_QUICK_FACTS.map((fact, i) => (
            <span key={fact} className="flex items-center gap-4">
              {i > 0 && <span className="hidden text-white/20 sm:inline">|</span>}
              {fact}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-8 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All products
        </Link>
      </section>

      <Footer />
    </div>
  )
}
