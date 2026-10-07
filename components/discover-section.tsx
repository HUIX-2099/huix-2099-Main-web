"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Asterisk, Briefcase, Box, Check, Glasses, GraduationCap, Landmark, Languages, Radio } from "lucide-react";

const ORANGE = "#ff3b1f";

function ArrowDot({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors group-hover:border-[#ff3b1f] group-hover:bg-[#ff3b1f] group-hover:text-neutral-950 ${
        dark ? "border-white/30" : "border-neutral-300 dark:border-white/20"
      }`}
    >
      <ArrowDownRight className="h-3.5 w-3.5" />
    </span>
  );
}

function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.08em] ${
        dark ? "border-white/30 text-white/90" : "border-neutral-300 dark:border-white/20"
      }`}
    >
      {children}
    </span>
  );
}

function PageFooter({ page, dark = false }: { page: number; dark?: boolean }) {
  return (
    <div className={`mt-auto flex items-center justify-between pt-5 text-[9px] ${dark ? "text-white/50" : "text-neutral-400 dark:text-neutral-500"}`}>
      <span className="flex items-center gap-1.5">
        <Asterisk className="h-3.5 w-3.5" />
        <span className={dark ? "text-white/80" : "text-neutral-700 dark:text-neutral-300"}>HUIX-2099</span>
        All rights reserved
      </span>
      <span>P.{String(page).padStart(2, "0")}</span>
    </div>
  );
}

function Card({
  href,
  dark = false,
  index,
  children,
}: {
  href: string;
  dark?: boolean;
  index: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <Link
        href={href}
        className={`group flex h-full min-h-[360px] flex-col rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-1 ${
          dark
            ? "bg-neutral-950 text-white ring-1 ring-white/5"
            : "bg-white text-neutral-900 dark:bg-[#1a1a1a] dark:text-neutral-100"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

const grey = "text-neutral-400 dark:text-neutral-500";

export function DiscoverSection() {
  return (
    <section className="border-t border-border bg-neutral-200/70 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 dark:bg-[#0e0e0e]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
              Section · 05 — Explore
            </div>
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tight lg:text-6xl">
              Discover HUIX-2099.
              <br />
              <span className={grey}>Story, people, and work.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            The story, people, research, and work behind a Liberia-based startup building the digital future of Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* P.01 — Cover */}
          <Card href="/about" dark index={0}>
            <div className="flex items-start justify-between">
              <Pill dark>Section 05</Pill>
              <span className="text-7xl font-light leading-[0.8] tracking-tight">05</span>
            </div>
            <p className="mt-6 max-w-[11rem] text-[11px] leading-relaxed text-white/60">
              Set the stage: who we are, what we build, and where HUIX-2099 is headed from Monrovia.
            </p>
            <div className="mt-auto flex items-end justify-between gap-3 pt-10">
              <h3 className="text-4xl font-light leading-[0.95] tracking-tight xl:text-[2.75rem]">
                Discover
                <br />
                HUIX<span style={{ color: ORANGE }}>-</span>2099
              </h3>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-[#ff3b1f] group-hover:bg-[#ff3b1f] group-hover:text-neutral-950">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Card>

          {/* P.02 — Our story */}
          <Card href="/about#our-story" index={1}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Our story</Pill>
            </div>
            <h3 className="mt-5 text-2xl font-medium leading-[1.1] tracking-tight">
              How HUIX-2099 began in Monrovia, <span className={grey}>and where we&apos;re headed.</span>
            </h3>
            <p className="mt-4 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              A Liberian startup founded to build software, games, and immersive technology for Africa and the world.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-neutral-100 p-3 dark:bg-white/5">
                <div className="flex items-center justify-between text-[10px]">
                  Founded
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                </div>
                <div className="mt-3 rounded-lg bg-white px-2 py-1.5 text-sm font-semibold dark:bg-white/10">2024</div>
              </div>
              <div className="rounded-xl bg-neutral-300 p-3 dark:bg-white/15">
                <div className="flex items-center justify-between text-[10px]">
                  Based in
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-neutral-900">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                </div>
                <div className="mt-3 rounded-lg bg-white px-2 py-1.5 text-sm font-semibold dark:bg-white/10">Monrovia</div>
              </div>
            </div>
            <PageFooter page={2} />
          </Card>

          {/* P.03 — Mission & vision */}
          <Card href="/about#mission-and-values" index={2}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Mission & vision</Pill>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Mission", "Empower Africa's next generation of innovators with smart systems and immersive tech."],
                ["Vision", "Digital futures where African creativity leads global conversations."],
              ].map(([k, v]) => (
                <div key={k}>
                  <span className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-[10px] text-white dark:bg-white dark:text-neutral-900">{k}</span>
                  <p className="mt-2 text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 text-5xl font-light leading-[0.9] tracking-tight xl:text-6xl">
              We build
              <br />
              <span className={grey}>the future.</span>
            </p>
            <PageFooter page={3} />
          </Card>

          {/* P.04 — Team */}
          <Card href="/team" index={3}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Team</Pill>
            </div>
            <h3 className="mt-5 text-2xl font-medium leading-[1.1] tracking-tight">
              The people behind HUIX-2099. <span className={grey}>Leadership & voice cast.</span>
            </h3>
            <p className="mt-3 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Builders, artists, and voices shaping every product.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
              {["/vpl/Team/Victor.jpg", "/images/22.jpg"].map((src) => (
                <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image src={src} alt="" fill sizes="160px" className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
              ))}
            </div>
            <PageFooter page={4} />
          </Card>

          {/* P.05 — Research */}
          <Card href="/research" dark index={4}>
            <div className="flex items-center gap-2">
              <ArrowDot dark />
              <Pill dark>Research</Pill>
            </div>
            <div className="mt-5 space-y-2.5">
              {[
                { icon: Glasses, title: "HUIX-HORIZEN", body: "Modular immersive platform for XR scenes and sessions." },
                { icon: Landmark, title: "Virtual Past Liberia", body: "Liberian heritage rebuilt in VR, games, and emulation." },
                { icon: Languages, title: "LLM Liberia", body: "A language model for Liberian English and local languages." },
              ].map((r) => (
                <div key={r.title} className="rounded-xl bg-white/[0.06] p-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
                      <r.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{r.title}</span>
                  </div>
                  <p className="mt-2 pl-1 text-[10px] leading-relaxed text-white/55">• {r.body}</p>
                </div>
              ))}
            </div>
            <PageFooter page={5} dark />
          </Card>

          {/* P.06 — Partners */}
          <Card href="/partners" index={5}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Partners</Pill>
            </div>
            <div className="mt-5 space-y-2.5">
              {[
                { icon: Radio, title: "Media & culture", body: "Music, film, and storytelling collaborations." },
                { icon: GraduationCap, title: "Education & research", body: "Schools, universities, and heritage institutions." },
                { icon: Briefcase, title: "Government & enterprise", body: "Tourism, public programmes, and business tools." },
              ].map((v) => (
                <div key={v.title} className="rounded-xl bg-neutral-100 p-3 dark:bg-white/5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                      <v.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{v.title}</span>
                  </div>
                  <p className="mt-2 pl-1 text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400">• {v.body}</p>
                </div>
              ))}
            </div>
            <PageFooter page={6} />
          </Card>

          {/* P.07 — Showcase */}
          <Card href="/showcase" index={6}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Showcase</Pill>
            </div>
            <h3 className="mt-5 text-2xl font-medium leading-[1.1] tracking-tight">
              Selected products & prototypes. <span className={grey}>Games, apps, tools, and immersive worlds.</span>
            </h3>
            <div className="mt-auto grid grid-cols-3 border-t border-neutral-200 pt-4 dark:border-white/10">
              {[
                ["projects", "07"],
                ["categories", "06"],
                ["since", "2024"],
              ].map(([k, v], i) => (
                <div key={k} className={i > 0 ? "border-l border-neutral-200 pl-3 dark:border-white/10" : ""}>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400">{k}</div>
                  <div className="mt-6 text-3xl font-light tracking-tight xl:text-4xl">{v}</div>
                </div>
              ))}
            </div>
            <PageFooter page={7} />
          </Card>

          {/* P.08 — Contact */}
          <Card href="/contact" index={7}>
            <div className="flex items-center gap-2">
              <ArrowDot />
              <Pill>Let&apos;s talk</Pill>
            </div>
            <p className="mt-5 text-5xl font-light leading-[0.9] tracking-tight xl:text-6xl">
              Build
              <br />
              <span className={grey}>with us.</span>
            </p>
            <div className="mt-auto flex items-end pt-6">
              {[
                { label: "AR", size: "h-11 w-11", cls: "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400" },
                { label: "AI", size: "h-14 w-14", cls: "bg-neutral-200 text-neutral-600 dark:bg-white/10 dark:text-neutral-300" },
                { label: "3D", size: "h-16 w-16", cls: "bg-neutral-400 text-white dark:bg-white/25" },
                { label: "VR", size: "h-20 w-20", cls: "text-neutral-950" },
              ].map((c, i) => (
                <span
                  key={c.label}
                  className={`${c.size} ${c.cls} -ml-2 flex shrink-0 items-center justify-center rounded-full text-sm font-semibold first:ml-0`}
                  style={i === 3 ? { background: ORANGE } : undefined}
                >
                  {c.label}
                </span>
              ))}
              <Box className="ml-auto h-4 w-4 text-neutral-400" />
            </div>
            <p className="mt-3 text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Software, games, and immersive experiences — tell us what you want to build.
            </p>
            <PageFooter page={8} />
          </Card>
        </div>
      </div>
    </section>
  );
}
