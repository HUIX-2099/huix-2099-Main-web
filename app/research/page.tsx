import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, H2, PageHero, SectionHead, WRAP } from "@/components/clean-ui"

export const metadata: Metadata = {
  title: "Research — HUIX-2099",
  description:
    "HUIX-2099 research in real-time 3D, spatial computing, heritage reconstruction, and Liberian language technology.",
}

const focusAreas = [
  {
    id: "01",
    title: "Real-time 3D & XR",
    desc: "Prototyping spatial interfaces, rendering pipelines, and experiences that run well on modest hardware.",
  },
  {
    id: "02",
    title: "Procedural worlds",
    desc: "Tools and workflows for building dense, believable environments without a large art team.",
  },
  {
    id: "03",
    title: "Cultural visualisation",
    desc: "Reconstructing architecture and place from archives, photography, and community memory.",
  },
  {
    id: "04",
    title: "Immersive interaction",
    desc: "How people move, learn, and collaborate inside spatial systems — including accessibility and comfort.",
  },
]

const positives = [
  "Culturally grounded, immersive storytelling to improve health education and retention.",
  "Low-bandwidth XR modules for remote wellness outreach in clinics and schools.",
  "Restorative historical spaces that support stress reduction and mental wellbeing.",
  "Training scenarios for public-health response and emergency drills.",
]

const risks = [
  "Motion sickness and eye strain from prolonged XR use without guidance.",
  "Access inequity where devices and connectivity are limited in rural areas.",
  "Cultural misinterpretation when historical content lacks community review.",
  "Data privacy concerns around biometrics and learning analytics.",
]

const impacts = [
  {
    title: "Economic & creative industries",
    body: "Catalyse local jobs in 3D, XR, and cultural content production. Enable micro-entrepreneurship around digital heritage, experiential tourism, and education partnerships.",
  },
  {
    title: "Cultural preservation & education",
    body: "Preserve artefacts, architecture, and oral histories in accessible formats. Augment classrooms with interactive lessons that connect young people to heritage and STEM pathways.",
  },
]

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Research · Studio notes"
        title={
          <>
            Research is how
            <br />
            <span className="text-muted-foreground">the work stays honest.</span>
          </>
        }
        description="We study real-time 3D, spatial computing, and cultural technology — then put what we learn directly into products and stories built in Monrovia."
        aside={
          <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <p className={EYEBROW}>Focus</p>
            <p className="mt-3 text-[15px] leading-relaxed">
              Real-time systems, heritage, and Liberian language technology.
            </p>
            <p className="mt-6 text-[12px] leading-relaxed text-muted-foreground">
              Working notes, updated as projects move.
            </p>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={EYEBROW}>Mission</p>
            <h2 className={`mt-3 ${H2}`}>
              Build the tools, then tell the story properly.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              Our research sits between engineering and culture. We advance real-time visualisation,
              spatial computing, and interactive systems — with a particular interest in what those
              tools can do for places that are usually described from the outside.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
              The output is practical: faster pipelines, more credible worlds, and interfaces that
              people can actually use. Findings go straight into HUIX-HORIZEN, Virtual Past Liberia,
              and the Monrovia Hustle series.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className={`${WRAP} py-14 lg:py-20`}>
          <SectionHead eyebrow="Focus areas" title="What we are looking at." />
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.id} className="border-t border-border pt-5">
                <span className="text-[11px] tabular-nums text-muted-foreground/60">{area.id}</span>
                <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.02em]">{area.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${WRAP} py-14 lg:py-20`}>
        <SectionHead
          eyebrow="Initiatives"
          title="Where the research lands."
          action={
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[13px] font-medium"
            >
              All products
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-[28px] border border-border bg-card p-7 sm:p-9">
            <div>
              <p className={EYEBROW}>Platform · Experimental</p>
              <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.03em]">HUIX-HORIZEN</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                A modular XR platform for spatial visualisation and collaboration — scenes, avatars, and
                multi-user sessions, with privacy-first research tooling underneath.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-[13px] text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                Scalable modules for 3D scenes, avatars, and shared sessions.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                Research dashboards, consent flows, and minimal telemetry.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                Integrations for education partners and local content pipelines.
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] bg-foreground p-7 text-background sm:p-9">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">
              Joint interest · Concept
            </p>
            <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.03em]">
              Virtual Past Liberia × LLM Liberia
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-background/60">
              Two projects, one mission: reconstruct Liberian history in immersive 3D, and build a
              language model that understands Liberian English and local languages.
            </p>
            <div className="mt-8 grid gap-3">
              <Link
                href="/virtual-past-liberia"
                className="group flex items-center justify-between rounded-2xl bg-background/10 px-4 py-3.5 transition-colors hover:bg-background/15"
              >
                <span className="text-[13px] font-medium">Virtual Past Liberia</span>
                <ArrowUpRight className="h-4 w-4 text-background/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://liberia-language-lm.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-background/10 px-4 py-3.5 transition-colors hover:bg-background/15"
              >
                <span className="text-[13px] font-medium">LLM Liberia</span>
                <ArrowUpRight className="h-4 w-4 text-background/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            Field sessions across Monrovia — headsets, borrowed laptops, real rooms — shaped this
            research build.
          </p>
          <Link
            href="/virtual-past-liberia"
            className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium"
          >
            Virtual Past Liberia
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div className={`${WRAP} py-14 lg:py-20`}>
          <SectionHead
            eyebrow="Health review"
            title="Immersive heritage, considered carefully."
            description="Virtual Past Liberia is a cultural project, but immersive media has health implications. We keep both sides visible."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[24px] border border-border p-6 sm:p-7">
              <p className={EYEBROW}>Positives</p>
              <ul className="mt-5 space-y-3.5">
                {positives.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-border p-6 sm:p-7">
              <p className={EYEBROW}>Risks</p>
              <ul className="mt-5 space-y-3.5">
                {risks.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${WRAP} py-14 lg:py-20`}>
        <SectionHead eyebrow="Impact" title="Two things we want this to change." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {impacts.map((impact) => (
            <div key={impact.title} className="rounded-[24px] bg-secondary/60 p-7 sm:p-9">
              <h3 className="text-[20px] font-semibold tracking-[-0.025em]">{impact.title}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{impact.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Collaborate"
        title="Research is better with company."
        body="We are open to research partnerships with universities, museums, clinics, and cultural custodians in Liberia and beyond."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See Virtual Past", href: "/virtual-past-liberia" }}
      />

      <Footer />
    </>
  )
}
