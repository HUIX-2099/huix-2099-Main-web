"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OasisControllerSection } from "@/components/huix-oasis/oasis-controller-section"
import { OASIS_HERO_IMAGE } from "@/lib/huix-oasis"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export default function HuixOasisPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white selection:bg-[#002868] selection:text-white">
      <Navbar />

      <main className="pt-[var(--navbar-height,5rem)]">
        {/* Poster hero — Oasis image full-bleed background */}
        <section className="relative min-h-[88vh] w-full overflow-hidden">
          <Image
            src={OASIS_HERO_IMAGE}
            alt="HUIX Oasis — spatial computing and augmented reality research"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050A14]/55 via-[#050A14]/25 to-[#050A14]/85"
            aria-hidden
          />

          {/* Title overlay — top center like reference */}
          <div className="relative z-10 flex min-h-[88vh] flex-col items-center px-4 pt-10 text-center sm:pt-14">
            <h1
              className="text-[clamp(1.75rem,5.5vw,3.5rem)] font-extralight uppercase tracking-[0.28em] text-white sm:tracking-[0.38em]"
              style={{ fontFamily: MONO }}
            >
              H&nbsp;U&nbsp;I&nbsp;X&nbsp;&nbsp;-&nbsp;&nbsp;O&nbsp;A&nbsp;S&nbsp;I&nbsp;S
            </h1>
            <p className="mt-5 text-sm font-light text-white/75 sm:text-base">实验性虚拟叠加操作系统</p>
            <p className="mt-1 text-sm font-light text-white/60">Experimental virtual overlay OS</p>
          </div>
        </section>

        {/* Info block — centered poster copy */}
        <section className="bg-[#050A14] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-light leading-[1.95] text-white/55 sm:text-[15px]">
              HUIX Oasis 是 HUIX-2099
              的旗舰研究计划——一款实验性虚拟叠加操作系统，将 Android 智能手机转化为沉浸式空间计算设备。
            </p>
            <p className="mt-8 text-sm font-light leading-[1.95] text-white/80 sm:text-[15px]">
              HUIX Oasis is the flagship research initiative of HUIX-2099 — an experimental virtual overlay
              operating system that transforms Android smartphones into immersive spatial computing devices.
              Instead of replacing Android, Oasis operates as a virtual layer for apps, services, and digital
              spaces inside an interactive VR environment.
            </p>

            <div
              className="mx-auto mt-12 max-w-md space-y-2 border-t border-white/[0.08] pt-8 text-left text-[13px] font-light text-white/55"
              style={{ fontFamily: MONO }}
            >
              <p>
                <span className="text-white/35">Initiative · </span>
                HUIX Oasis Research Lab
              </p>
              <p>
                <span className="text-white/35">Studio · </span>
                HUIX-2099 · Monrovia, Liberia
              </p>
              <p>
                <span className="text-white/35">Focus · </span>
                Virtual overlay OS, spatial UI, mobile VR
              </p>
            </div>

            <p className="mx-auto mt-10 max-w-lg text-sm font-light italic leading-relaxed text-white/45">
              &ldquo;What if your smartphone became your virtual computer?&rdquo;
            </p>
          </div>
        </section>

        <OasisControllerSection />

        <section className="border-t border-white/[0.06] bg-[#050A14] px-4 py-12 text-center sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to HUIX-2099
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
