"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HuixHorizonWhitepaperPage() {
  const mono = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

  const sections = [
    {
      id: "introduction",
      number: "01",
      title: "Introduction",
      subtitle: "Platform Overview",
      content: [
        "HUIX Horizon (also referred to as HUIX‑HORIZEN) is a next‑generation phone‑based immersive reality platform developed under HUIX‑2099, a Liberian‑built technology company focused on virtual reality, animation, artificial intelligence, and immersive software systems.",
        "HUIX Horizon is designed to transform smartphones into practical tools for Virtual Reality (VR), Augmented Reality (AR), and Architectural & Engineering Simulation—without requiring expensive headsets.",
        "The system is in active research and development, and is ready for early testing, prototyping, and experimentation. The long‑term vision is to make immersive technology accessible, meaningful, culturally relevant, and professionally useful for education, construction, and design."
      ],
    },
    {
      id: "why",
      number: "02",
      title: "Why HUIX Horizon Exists",
      subtitle: "Problem Statement",
      content: [
        "Phone‑based VR showed early promise through platforms like Google Cardboard and Google Daydream, but the ecosystem collapsed due to weak interaction models, limited hardware design, uneven software quality, and lack of sustained vision.",
        "Smartphones today are significantly more capable, with high‑resolution displays, stronger GPUs, advanced sensors, and on‑device AI.",
        "HUIX Horizon exists to answer: What if phone VR was done properly—with correct optics, real stereo rendering, modern UI design, spatial audio, and professional‑grade use cases?"
      ],
    },
    {
      id: "inspiration",
      number: "03",
      title: "Industry Inspiration",
      subtitle: "Relationship to Google VR & Standards",
      content: [
        "HUIX Horizon acknowledges inspiration from Google Daydream (clean stereo rendering and simplicity), Google VR research in mobile immersion, Apple Vision Pro (spatial UI philosophy), and modern Unity XR / OpenXR standards.",
        "HUIX Horizon is not dependent on the deprecated Cardboard SDK. Core VR principles are implemented from the ground up using modern Unity pipelines, custom camera systems, and modular components.",
        "The goal is to revive the spirit of accessible VR and extend it beyond entertainment into architecture, engineering, culture, and national development."
      ],
    },
    {
      id: "architecture",
      number: "04",
      title: "Core System Architecture",
      subtitle: "Stereo, Sensors, Interaction",
      content: [
        "Stereo Rendering Engine: Independent left and right eye cameras, correct IPD spacing, adjustable field of view (~60–70°), lens distortion correction, and vignette control for comfort. This avoids “fake split screen” and preserves depth perception.",
        "Motion & Sensor Integration: Uses the phone’s gyroscope and accelerometer (magnetometer optional) with sensor fusion to deliver stable, low‑latency 3DOF head tracking. Research continues on filtering and predictive smoothing for comfort.",
        "Interaction Model: Designed to work without controllers by default—gaze selection, head‑based cursor, voice commands (e.g., “Menu open”, “Close app”, “Next”), with optional Bluetooth controller support."
      ],
    },
    {
      id: "os",
      number: "05",
      title: "HUIX Horizon OS",
      subtitle: "Immersive UI Layer",
      content: [
        "HUIX Horizon includes a lightweight OS‑style interface for immersive navigation: floating 3D panels, depth‑aware windows, smooth transitions, and a minimalist futuristic design.",
        "The OS flow follows: Start Environment → System Menu → Application Space → Exit / Return.",
        "The UI is designed as a spatial interface rather than a flat mobile UI, helping users feel “inside” a digital environment."
      ],
    },
    {
      id: "audio",
      number: "06",
      title: "Audio Design Philosophy",
      subtitle: "Spatial Sound",
      content: [
        "Audio is treated as a first‑class system component: spatial positioning, ambient layers, environmental realism, and non‑intrusive UI sounds.",
        "During prototyping, AI‑assisted tools may be used to quickly iterate on soundscapes for different environments."
      ],
    },
    {
      id: "arch-sim",
      number: "07",
      title: "Architectural & Engineering Simulation",
      subtitle: "Primary Use Case",
      content: [
        "Architectural Visualization: Enables walkthroughs before construction, interior/exterior scale visualization, lighting perception, and real‑world scale accuracy—useful for architects, urban planners, clients, and students.",
        "Construction Engineering Simulation (planned): Construction phase visualization, structural layout understanding, safety training simulations, and material placement previews—helping teams experience a building before it exists.",
        "AR Integration (future direction): Research includes AR‑VR hybrid workflows—overlaying 3D models on real sites, comparing planned vs actual structures, and phone‑based AR previews for field use."
      ],
    },
    {
      id: "sdk",
      number: "08",
      title: "Unity Plugin System",
      subtitle: "Developer Platform",
      content: [
        "HUIX Horizon is being developed as a modular plugin system for Unity: custom stereo camera prefab, phone sensor input module, UI interaction framework, and audio spatialization helpers.",
        "Developers can import the HUIX Horizon SDK, build phone‑VR apps without Cardboard, target Android devices, and customize optics and UI—lowering the barrier for African and global developers to build immersive apps."
      ],
    },
    {
      id: "projects",
      number: "09",
      title: "Cultural & Educational Projects",
      subtitle: "Flagship Direction",
      content: [
        "Virtual Past Liberia is a flagship example: historical environments, cultural storytelling, educational immersion, and national digital preservation—users can stand inside history rather than only read it.",
        "Education & Training: Supports virtual classrooms, science simulations, technical training, and skill development, especially where physical resources are limited."
      ],
    },
    {
      id: "status",
      number: "10",
      title: "Research & Development Status",
      subtitle: "Where We Are Now",
      content: [
        "HUIX Horizon is in active research and development and undergoing prototype testing. It is ready for controlled testing, pilot projects, and demonstrations.",
        "Key research areas include comfort optimization, UI usability, performance on low‑end phones, and lens/frame design."
      ],
    },
    {
      id: "built-in-liberia",
      number: "11",
      title: "Built in Liberia, For the World",
      subtitle: "Positioning",
      content: [
        "HUIX Horizon is proudly built in Liberia. It represents African innovation, local problem‑solving, and global‑level ambition.",
        "The project demonstrates that advanced immersive systems can be built outside traditional tech centers—grounded in local context but designed for global standards."
      ],
    },
    {
      id: "conclusion",
      number: "12",
      title: "Conclusion",
      subtitle: "Vision",
      content: [
        "HUIX Horizon is not just a VR project. It is a technological statement, a cultural tool, an educational platform, and a professional simulation system.",
        "Still in development, but already meaningful—HUIX Horizon aims to prove immersive reality can be affordable, powerful, and built in Liberia for the future of the world.",
        "© HUIX‑2099 — All Rights Reserved"
      ],
    },
  ]

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-16">
        <section className="px-4 lg:px-8 py-14 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: mono }}>
                  Document · Whitepaper
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mt-3" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.08em" }}>
                  Huix Horizon — Vision, Architecture & Development Whitepaper
                </h1>
                <p className="text-sm text-muted-foreground mt-4 max-w-3xl leading-relaxed">
                  A phone‑based immersive reality platform for VR, AR, and architectural & engineering simulation.
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70" style={{ fontFamily: mono }}>
                <span>HUIX‑2099</span>
                <span>Monrovia, Liberia</span>
              </div>
            </div>

            <div className="mt-8 border border-border bg-card/30">
              <div className="px-4 py-3 border-b border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: mono }}>
                Contents
              </div>
              <div className="p-4 grid sm:grid-cols-2 gap-2">
                {sections.map((s) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center justify-between gap-3 py-2 px-3 border border-border/60 bg-background/40 hover:bg-background/70 transition-colors"
                    style={{ fontFamily: mono }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
                      [{s.number}] {s.title}
                    </span>
                    <span className="text-[9px] text-muted-foreground/60">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {sections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`px-4 lg:px-8 py-16 border-b border-border ${idx % 2 === 1 ? "bg-card/20" : ""}`}
          >
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[140px_1fr] gap-10">
              <div>
                <div
                  className="text-[96px] md:text-[120px] font-bold leading-[0.85] text-foreground/10"
                  style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.08em" }}
                >
                  {section.number}
                </div>
              </div>
              <div>
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: mono }}>
                      {section.subtitle}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.06em" }}>
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60" style={{ fontFamily: mono }}>
                    [{section.number}]
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm">
                  {section.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="px-4 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: mono }}>
                Next
              </div>
              <div className="text-lg font-semibold mt-1">Explore the platform page</div>
              <div className="text-sm text-muted-foreground mt-1">Capabilities, specs, and application areas.</div>
            </div>
            <Link
              href="/huix-horizen"
              className="px-4 py-2 border border-border bg-card/40 hover:bg-card/70 transition-colors text-[11px] uppercase tracking-[0.14em]"
              style={{ fontFamily: mono }}
            >
              View HUIX‑HORIZEN →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


