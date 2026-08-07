import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Virtual Past Liberia — HUIX-2099",
  description:
    "Virtual Past Liberia — immersive heritage reconstruction, community curation, and platform research from HUIX-2099.",
}

export default function VirtualPastLiberiaPage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Project · Initiative</div>
          <h1 className="text-4xl font-bold mb-4">V i r t u a l  ·  P a s t  ·  L i b e r i a</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            An HUIX-2099 initiative to reconstruct and preserve Liberian heritage through immersive 3D
            storytelling, low-bandwidth XR experiences, and community-led curation.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Virtual Past Liberia explores historical reconstruction, architecture, and oral histories
              using accessible XR modules. The program emphasises local collaboration, ethical
              stewardship, and offline-capable experiences for low-spec devices.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Medical & Social Implications</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Carefully designed immersive content can support health education, mental-wellness
              interventions, and training scenarios — while requiring safeguards for motion sickness,
              privacy, and equitable access.
            </p>
            <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
              <li>Health education through culturally-grounded narratives.</li>
              <li>Low-bandwidth XR modules for clinics and schools.</li>
              <li>Community review processes for culturally sensitive content.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Platform & Program</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Built on the HUIX-HORIZEN platform, the program focuses on modular scenes, avatars,
              and multi-user sessions with privacy-first telemetry and partner integrations.
            </p>
            <p className="text-sm text-muted-foreground">
              Learn more on the <Link href="/research">Research</Link> page or view related prototypes
              in the showcase below.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Prototypes & Resources</h2>
            <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
              <li>
                <Link href="/prototypes">Prototypes Showcase</Link> — early video and image prototypes.
              </li>
              <li>
                Project code & asset references: <span className="font-mono">VPL-001</span> and related
                artifacts.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
