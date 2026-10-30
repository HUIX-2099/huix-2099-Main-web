import Link from "next/link"
import { ArrowUpRight, Check, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  CTASection,
  EYEBROW,
  PageHero,
  SectionHead,
  WRAP,
} from "@/components/clean-ui"

const CONTACT_EMAIL = "huixtech2099@gmail.com"

type Plan = {
  id: string
  title: string
  kicker: string
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "01",
    title: "Website Development",
    kicker: "Websites",
    description:
      "Fast, clean marketing sites and full dynamic platforms with CMS, authentication and databases.",
    features: [
      "Landing pages & portfolios",
      "CMS & content management",
      "Authentication & database",
      "SEO-optimised & responsive",
      "Analytics & performance tuning",
    ],
  },
  {
    id: "02",
    title: "App Development",
    kicker: "Mobile apps",
    description:
      "Cross-platform mobile apps with full backend services and real-time features.",
    features: [
      "iOS & Android",
      "Full backend services",
      "Real-time & push notifications",
      "Offline support",
      "App store deployment",
    ],
    popular: true,
  },
  {
    id: "03",
    title: "PWA & Full Stack",
    kicker: "Progressive web apps",
    description:
      "End-to-end progressive web applications built to scale from day one.",
    features: [
      "Offline-first PWA",
      "Full-stack architecture",
      "Scalable cloud backend",
      "API design & integration",
      "Ongoing maintenance",
    ],
  },
  {
    id: "04",
    title: "Native Software",
    kicker: "Desktop apps",
    description:
      "High-performance native desktop applications for Windows, macOS and Linux.",
    features: [
      "Cross-platform desktop",
      "Native performance",
      "Auto-updates",
      "System & hardware integration",
    ],
  },
  {
    id: "05",
    title: "XR · VR · AR",
    kicker: "Immersive",
    description:
      "Spatial experiences and 3D visualisation for the web and headsets.",
    features: [
      "3D scenes & spatial UX",
      "VR & AR visualisation",
      "WebXR experiences",
      "Interactive walkthroughs",
    ],
  },
  {
    id: "06",
    title: "Animation & Motion",
    kicker: "Motion",
    description:
      "Motion graphics, animated brand content and explainer videos.",
    features: [
      "Motion graphics",
      "Animated brand content",
      "Explainer videos",
      "UI micro-interactions",
    ],
  },
]

function mailtoFor(planTitle: string) {
  const subject = encodeURIComponent(`HUIX-2099 — Enquiry: ${planTitle}`)
  const body = encodeURIComponent(
    `Hi HUIX-2099 team,\n\nI'm interested in "${planTitle}". Here are some details about my project:\n\n- Overview:\n- Goals:\n- Timeline:\n- Budget range:\n\nLooking forward to hearing from you.`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

const notes = [
  "Every project is quoted individually based on scope, complexity and timeline.",
  "Email the service you need and we will send a tailored proposal.",
  "PWA stands for Progressive Web App; full project scope can be quoted end-to-end.",
  "Open-source collaboration with developers and engineers is always welcome.",
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <PageHero
          eyebrow="Pricing · Custom quotes"
          title={
            <>
              Pricing that starts
              <br />
              with a conversation.
            </>
          }
          description="Every project is different, so we quote each one individually. Pick the service that fits, send the details, and we will reply with a tailored proposal."
          aside={
            <div className="rounded-[24px] bg-secondary p-6 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                How it works
              </p>
              <ol className="mt-4 space-y-3 text-[13px] leading-relaxed text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-[11px] tabular-nums text-muted-foreground">01</span>
                  Tell us the service and the shape of the project.
                </li>
                <li className="flex gap-3">
                  <span className="text-[11px] tabular-nums text-muted-foreground">02</span>
                  We reply with scope, timeline and a fixed quote.
                </li>
                <li className="flex gap-3">
                  <span className="text-[11px] tabular-nums text-muted-foreground">03</span>
                  We start once the scope is signed off.
                </li>
              </ol>
            </div>
          }
        />

        {/* Services */}
        <section>
          <div className={WRAP}>
            <div className="py-16 lg:py-24">
              <SectionHead
                eyebrow="Services"
                title="What we quote."
                description="Six areas of work. Most projects combine two or three of them."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
                {plans.map((plan) => (
                  <article
                    key={plan.id}
                    className={`relative flex h-full flex-col rounded-[24px] p-6 sm:p-7 ${
                      plan.popular
                        ? "bg-foreground text-background"
                        : "border border-border bg-background"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p
                        className={`text-[10px] uppercase tracking-[0.14em] ${
                          plan.popular ? "text-background/50" : "text-muted-foreground"
                        }`}
                      >
                        {plan.kicker}
                      </p>
                      <span
                        className={`text-[11px] tabular-nums ${
                          plan.popular ? "text-background/40" : "text-muted-foreground/70"
                        }`}
                      >
                        {plan.id}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[19px] font-medium tracking-[-0.02em]">
                      {plan.title}
                    </h3>
                    <p
                      className={`mt-3 text-[13px] leading-relaxed ${
                        plan.popular ? "text-background/65" : "text-muted-foreground"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <ul
                      className={`mt-6 space-y-2.5 border-t pt-5 ${
                        plan.popular ? "border-background/15" : "border-border"
                      }`}
                    >
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[12.5px]">
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                              plan.popular ? "text-background/70" : "text-foreground/60"
                            }`}
                          />
                          <span className={plan.popular ? "text-background/85" : "text-foreground/80"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <a
                        href={mailtoFor(plan.title)}
                        className={`group inline-flex w-full items-center justify-between gap-2 rounded-full px-5 py-3 text-[12px] font-medium transition-colors ${
                          plan.popular
                            ? "bg-background text-foreground hover:bg-background/90"
                            : "border border-border text-foreground hover:bg-secondary"
                        }`}
                      >
                        Email for a quote
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-5 rounded-[24px] border border-border p-6 sm:flex-row sm:items-center sm:justify-between lg:p-7">
                <div>
                  <p className={EYEBROW}>Open source & collaboration</p>
                  <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
                    Building something open, or want to collaborate as a developer or
                    engineer? We work with the community — reach out and let&apos;s create
                    together.
                  </p>
                </div>
                <a
                  href={mailtoFor("Open source & collaboration")}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-[12px] font-medium text-background"
                >
                  Let&apos;s collaborate
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="border-t border-border">
          <div className={WRAP}>
            <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
              <div className="lg:col-span-4">
                <p className={EYEBROW}>How pricing works</p>
                <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                  No packages.
                  <br />
                  Just scope.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ul className="border-t border-border">
                  {notes.map((note, index) => (
                    <li
                      key={note}
                      className="flex gap-5 border-b border-border py-4 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span className="text-[11px] tabular-nums text-muted-foreground/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-border">
          <CTASection
            title={
              <>
                Ready to
                <br />
                start?
              </>
            }
            body="Email us for a custom quote or to discuss scope. We reply within one business day."
            primary={{ label: "Email the studio", href: mailtoFor("General enquiry") }}
            secondary={{ label: "Contact page", href: "/contact" }}
          />
        </div>

        <div className={WRAP}>
          <div className="flex items-center justify-between border-t border-border py-6 text-[11px] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              ← Home
            </Link>
            <span>Pricing · HUIX-2099</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
