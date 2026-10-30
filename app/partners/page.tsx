import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, H2, PageHero, SectionHead, WRAP } from "@/components/clean-ui"

const CONTACT_EMAIL = "huixtech2099@gmail.com"
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "HUIX-2099 — Partnership inquiry",
)}&body=${encodeURIComponent(
  "Hi HUIX-2099 team,\n\nWe'd like to explore a partnership. Here are some details:\n\n- Organization:\n- Partnership type:\n- What we're proposing:\n\nThanks!",
)}`

export const metadata: Metadata = {
  title: "Partners — HUIX-2099",
  description:
    "Media, technology, education, and enterprise partners building immersive work with HUIX-2099 in Monrovia, Liberia.",
}

const partnershipTypes = [
  {
    id: "01",
    title: "Media & press",
    desc: "Coverage, storytelling, and bringing African tech and culture to wider audiences.",
  },
  {
    id: "02",
    title: "Technology",
    desc: "Joint builds, integrations, and shared engineering across XR, AI, and 3D tooling.",
  },
  {
    id: "03",
    title: "Education & research",
    desc: "Universities and institutions exploring immersive heritage, learning, and digital skills.",
  },
  {
    id: "04",
    title: "Enterprise & government",
    desc: "Organizations adopting immersive and digital systems across West Africa.",
  },
]

const benefits = [
  "Co-built immersive and digital products",
  "Access to a Liberia-based engineering team",
  "Shared visibility across HUIX-2099 channels",
  "Heritage and culture-driven collaboration",
  "Long-term, outcomes-focused partnerships",
]

export default function PartnersPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Partners · Building together"
        title={
          <>
            Good work is
            <br />
            <span className="text-muted-foreground">rarely done alone.</span>
          </>
        }
        description="We collaborate with media, technology, education, and enterprise partners to move immersive work forward across Africa and beyond."
        aside={
          <div className="rounded-[24px] bg-foreground p-7 text-background">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">
              Open for 2026
            </p>
            <p className="mt-4 text-[20px] font-medium leading-snug tracking-[-0.02em]">
              Looking for a build partner in West Africa?
            </p>
            <a
              href={MAILTO}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-[13px] font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <SectionHead eyebrow="Current partners" title="Who we build with." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border border-border bg-card p-7 lg:col-span-2">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-foreground text-[18px] font-semibold tracking-[-0.02em] text-background">
                  LDI
                </div>
                <div>
                  <p className={EYEBROW}>Media partner · Since 2024</p>
                  <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em]">
                    Liberia Digital Insights
                  </h3>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    A Liberia-based media company covering technology, business, and culture — helping
                    local innovation reach the audience it belongs to.
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-dashed border-border p-7">
            <div>
              <p className={EYEBROW}>Next</p>
              <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-[-0.02em]">
                Your organization here.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                We keep the partner list short and the work close. Tell us what you are building.
              </p>
            </div>
            <a
              href={MAILTO}
              className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium"
            >
              Become a partner
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className={`${WRAP} py-14 lg:py-20`}>
          <SectionHead
            eyebrow="Ways to partner"
            title="Four ways in."
            description="Most partnerships start as one project and grow from there."
          />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {partnershipTypes.map((type) => (
              <div key={type.id} className="grid gap-3 py-7 sm:grid-cols-[64px_220px_1fr] sm:items-baseline sm:gap-6">
                <span className="text-[11px] font-medium tabular-nums text-muted-foreground/60">{type.id}</span>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{type.title}</h3>
                <p className="max-w-xl text-[14px] leading-relaxed text-muted-foreground">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={EYEBROW}>Why work with us</p>
            <h2 className={`mt-3 ${H2}`}>Small enough to care. Serious enough to ship.</h2>
          </div>
          <ul className="lg:col-span-7">
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="flex items-baseline gap-5 border-b border-border py-5 first:border-t first:border-border lg:first:border-t-0 lg:first:pt-0"
              >
                <span className="w-6 shrink-0 text-[11px] tabular-nums text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Partnership"
        title="Let's build something that lasts."
        body="Send a short note about your organization and what you have in mind. We reply within 24–48 hours."
        primary={{ label: "Email HUIX-2099", href: MAILTO }}
        secondary={{ label: "Contact page", href: "/contact" }}
      />

      <Footer />
    </>
  )
}
