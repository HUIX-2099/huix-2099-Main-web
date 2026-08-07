import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "HUIX-2099 — About the Studio",
  description: "HUIX-2099 — Liberia-based studio building XR, AI, and 3D experiences from Monrovia.",
}

export default function Huix2099Page() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Studio · About</div>
          <h1 className="text-4xl font-bold mb-4">HUIX-2099 — Building the Digital Future</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            HUIX-2099 is a Liberia-based technology studio founded in Monrovia in 2024. We design and
            build immersive XR, AI, and 3D visualization projects that celebrate African creativity
            while solving real-world problems through accessible, research-driven software.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empower the next generation of African technologists through practical tools, local
              partnerships, and culturally-rooted immersive experiences that create economic and
              educational opportunities across the continent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What We Build</h2>
            <ul className="list-disc pl-5 text-sm text-foreground space-y-2">
              <li>HUIX-HORIZEN — modular XR platform for collaborative 3D experiences.</li>
              <li>HUIXOR — a dev-focused browser and VR preview shell for designers and engineers.</li>
              <li>Monrovia Hustle 3D — a Liberian-led narrative game franchise and cultural project.</li>
              <li>Virtual Past Liberia — heritage preservation using immersive storytelling.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Contact & Partnerships</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Interested in partnering or commissioning work? We collaborate with museums, educational
              institutions, and local creators. Reach out for briefs, research collaborations, and
              pilot projects.
            </p>
            <Link href="/contact">
              <a className="inline-block px-4 py-2 bg-foreground text-background">Contact Us</a>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
