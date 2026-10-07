"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
const red = "#ff3b1f";

// "H" glyph for the dot-matrix: 1 = dot, 0 = gap.
const dotMatrix = ["10001", "10001", "10001", "11111", "11111", "10001", "10001", "10001"];

const stats = [
  { value: "2024", lead: "Founded in", tag: "Monrovia", meta: "Liberia", when: "HQ" },
  { value: "07", lead: "Projects", tag: "Built", meta: "Software · Games · XR", when: "Fig. 01" },
];

const credits = [
  ["Founded", "2024"],
  ["Headquarters", "Monrovia, Liberia"],
  ["Discipline", "Software · 3D · Immersive"],
];

const projects = [
  { name: "HUIX-THEME", year: "2024", status: "Live", cell: [2, 3] },
  { name: "HUIXOR", year: "2026", status: "Dev", cell: [5, 1] },
  { name: "Monrovia Hustle 3D", year: "2026", status: "Dev", cell: [8, 4] },
  { name: "MH · Independence Day", year: "2026", status: "Dev", cell: [11, 2] },
  { name: "HUIX Character Motion", year: "2026", status: "Dev", cell: [13, 5] },
  { name: "HUIX Market Liberia", year: "2026", status: "Live", cell: [16, 0] },
  { name: "Virtual Past Liberia", year: "2026", status: "Concept", cell: [18, 3] },
];

const WEEKS = 20;
const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const levelOpacity = [0, 0.22, 0.45, 0.7, 1];

function activityLevel(week: number, day: number) {
  const x = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const f = x - Math.floor(x);
  return f < 0.3 ? 0 : f < 0.55 ? 1 : f < 0.78 ? 2 : f < 0.93 ? 3 : 4;
}

function BuildLog() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative flex min-h-[420px] flex-col overflow-hidden bg-neutral-200 p-4 lg:col-span-3 lg:min-h-0 dark:bg-[#0d0f12]">
      <div className="flex items-start justify-between">
        <span
          className="bg-neutral-900/80 px-2 py-1 text-[9px] uppercase tracking-[0.15em] text-white/90 dark:bg-white/10"
          style={{ fontFamily: monoFont }}
        >
          [01] · Build log
        </span>
        <span
          className="px-2 py-1 text-[9px] uppercase tracking-[0.15em] text-neutral-950"
          style={{ fontFamily: monoFont, background: red }}
        >
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center rounded-2xl border border-neutral-300 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] dark:border-white/5 dark:bg-[#121418] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-end gap-3">
          <span className="text-5xl font-light leading-none tracking-tight tabular-nums xl:text-6xl">
            {String(projects.length).padStart(2, "0")}
          </span>
          <span className="pb-1 text-[10px] uppercase leading-tight text-neutral-500 dark:text-neutral-400">
            Projects shipped
            <br />& in build
          </span>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 grid text-[9px] text-neutral-500 dark:text-neutral-400" style={{ gridTemplateColumns: `repeat(${months.length}, 1fr)` }}>
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }} role="img" aria-label={`HUIX-2099 build activity — ${projects.length} projects`}>
            {Array.from({ length: WEEKS }).map((_, w) => (
              <div key={w} className="grid gap-[3px]">
                {Array.from({ length: 7 }).map((_, d) => {
                  const pi = projects.findIndex((p) => p.cell[0] === w && p.cell[1] === d);
                  const isProject = pi !== -1;
                  const highlighted = isProject && active === pi;
                  const level = isProject ? 4 : activityLevel(w, d);
                  return (
                    <span
                      key={d}
                      title={isProject ? `${projects[pi].name} · ${projects[pi].year}` : undefined}
                      onMouseEnter={isProject ? () => setActive(pi) : undefined}
                      onMouseLeave={isProject ? () => setActive(null) : undefined}
                      className={`aspect-square rounded-[3px] transition-transform duration-200 ${
                        level === 0 ? "bg-neutral-200 dark:bg-white/[0.06]" : ""
                      } ${isProject ? "cursor-pointer ring-1 ring-neutral-900/40 dark:ring-white/60" : ""} ${
                        highlighted ? "scale-150 ring-2" : ""
                      }`}
                      style={level > 0 ? { background: red, opacity: levelOpacity[level] } : undefined}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-[9px] text-neutral-500 dark:text-neutral-400">
            <span style={{ fontFamily: monoFont }}>2026 build cycle</span>
            <span className="flex items-center gap-1">
              Less
              {levelOpacity.map((o, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-[2px] ${i === 0 ? "bg-neutral-200 dark:bg-white/[0.06]" : ""}`}
                  style={i > 0 ? { background: red, opacity: o } : undefined}
                />
              ))}
              More
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-1">
          {projects.map((p, i) => (
            <li
              key={p.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`flex items-center gap-2 rounded px-1.5 py-1 text-[10px] transition-colors ${
                active === i ? "bg-neutral-100 dark:bg-white/[0.06]" : ""
              }`}
            >
              <span className="h-2 w-2 shrink-0 rounded-[2px]" style={{ background: red }} />
              <span className="flex-1 truncate font-semibold">{p.name}</span>
              <span className="text-neutral-500 dark:text-neutral-400" style={{ fontFamily: monoFont }}>
                {p.status} · {p.year}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/products"
        className="group mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:text-[#ff3b1f] dark:text-neutral-400"
        style={{ fontFamily: monoFont }}
      >
        <span>Fig. 01</span>
        <span className="mx-3 h-px flex-1 bg-neutral-400 dark:bg-white/20" />
        <span className="flex items-center gap-1">
          All projects
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}

export function AboutPosterSection() {
  return (
    <section className="flex flex-col border-y border-neutral-300 bg-neutral-100 text-neutral-900 lg:h-[calc(100svh-6rem)] lg:min-h-[560px] dark:border-neutral-800 dark:bg-[#262626] dark:text-neutral-100">
      {/* Header bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-neutral-300 bg-white px-4 py-2 text-neutral-900 sm:px-6 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: red }} />
          <span className="text-[10px] font-semibold leading-tight">
            HUIX-2099
            <br />
            <span className="font-normal">Monrovia 2024</span>
          </span>
        </div>
        <nav className="hidden items-center gap-5 text-[11px] sm:flex">
          {[
            ["About", "/about"],
            ["Team", "/team"],
            ["Research", "/research"],
            ["Products", "/products"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-[#ff3b1f]">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Landscape body */}
      <div className="grid min-h-0 flex-1 lg:grid-cols-12">
        {/* Title column */}
        <div className="flex min-h-0 flex-col lg:col-span-5">
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden px-5 py-6 sm:px-8 lg:py-8 lg:pl-20" style={{ background: red }}>
            <span
              className="absolute right-4 top-3 text-[10px] uppercase tracking-[0.14em] text-neutral-950/70"
              style={{ fontFamily: monoFont }}
            >
              [01]
            </span>
            <div>
              <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-neutral-950 xl:text-7xl">
                About
                <br />
                HUIX-2099
              </h2>
              <p className="mt-5 text-2xl font-semibold uppercase leading-[0.95] tracking-tight text-neutral-950 xl:text-3xl">
                XR · VR · AR
                <br />
                Liberia
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.14em] text-neutral-950/70" style={{ fontFamily: monoFont }}>
                Est. 2024 · ABT-01
              </span>
              <div className="grid grid-cols-5 gap-1" aria-hidden>
                {dotMatrix.flatMap((row, r) =>
                  row.split("").map((cell, c) => (
                    <span
                      key={`${r}-${c}`}
                      className={`h-3 w-3 rounded-full xl:h-4 xl:w-4 ${cell === "1" ? "bg-neutral-950" : ""}`}
                    />
                  )),
                )}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 bg-neutral-300 px-5 py-3 text-[10px] uppercase text-neutral-900 sm:px-8 lg:pl-20 dark:bg-neutral-400">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-800" />
              <span className="leading-tight">
                Next-gen technology
                <br />
                startup explained
              </span>
            </div>
            <div className="leading-tight" style={{ fontFamily: monoFont }}>
              S. → XR · VR · AR
              <br />
              E. → 07 <sup>[PROJECTS]</sup>
            </div>
          </div>
        </div>

        {/* Build log column */}
        <BuildLog />

        {/* Info column */}
        <div className="flex min-h-0 flex-col justify-between gap-6 px-5 py-6 sm:px-8 lg:col-span-4 lg:py-8">
          <div className="grid grid-cols-3 gap-3 text-[10px] uppercase">
            {credits.map(([k, v]) => (
              <div key={k}>
                <div className="text-neutral-500 dark:text-neutral-400">{k}</div>
                <div className="mt-0.5 border-b border-neutral-400 pb-1.5 font-semibold dark:border-neutral-500">{v}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-light leading-none tracking-tight xl:text-5xl">{s.value}</div>
                <div className="mt-1 flex items-center gap-2 text-[10px] uppercase">
                  <span className="whitespace-nowrap">
                    {s.lead}{" "}
                    <span className="px-1 text-neutral-950" style={{ background: red }}>
                      {s.tag}
                    </span>
                  </span>
                  <span className="h-px flex-1 border-t border-dotted border-neutral-400 dark:border-neutral-500" />
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-neutral-500 dark:border-neutral-400">
                    <ArrowRight className="h-2 w-2" />
                  </span>
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
                  <span>{s.meta}</span>
                  <span>{s.when}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Founded in 2024, HUIX-2099 is a Liberia-based next-generation technology company pioneering the future of
            software development, 3D prototyping, and immersive digital engineering. We operate at the intersection of
            imagination and technology — where creative vision evolves into real-world innovation.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/about">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-950"
                  style={{ background: red }}
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <Link
                href="/about"
                className="group flex items-center gap-1.5 text-[10px] font-semibold uppercase transition-colors hover:text-[#ff3b1f]"
              >
                Full story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <span className="text-[10px] uppercase tracking-[0.14em] text-neutral-500" style={{ fontFamily: monoFont }}>
              ↑ You should try clicking this to learn more
            </span>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex shrink-0 items-center justify-between border-t border-neutral-300 px-4 py-2 text-[10px] sm:px-6 dark:border-neutral-700">
        <span className="flex items-center gap-1.5 font-semibold" style={{ color: red }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: red }} />
          HUIX-2099
        </span>
        <span style={{ color: red }}>HUIX-2099™ · ABT-01 · Monrovia · Liberia</span>
      </div>
    </section>
  );
}
