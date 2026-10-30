import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  CTASection,
  EYEBROW,
  HEADING,
  H2,
  PageHero,
  SectionHead,
  TextLink,
  WRAP,
} from "@/components/clean-ui"

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Monrovia, Liberia" },
  { label: "Focus", value: "VR · Games · Software · AI" },
  { label: "Team", value: "Small, senior, local" },
]

const projects = [
  {
    name: "HUIX-2099",
    kind: "Studio & identity",
    body: "Immersive technology, 3D visualisation and software built from Monrovia for a global stage.",
    href: "/huix-2099",
  },
  {
    name: "HUIXOR",
    kind: "Desktop dev browser",
    body: "Inspect responsive layouts, device presets and VR-ready previews in a single window.",
    href: "/products/huixor",
  },
  {
    name: "Monrovia Hustle 3D",
    kind: "Narrative game",
    body: "A Liberian-led urban drama with a playable Concept 01 slice, voice cast and street loop.",
    href: "/products/monrovia-hustle",
  },
  {
    name: "Virtual Past Liberia",
    kind: "Heritage & XR",
    body: "Community-curated reconstructions of Liberian memory, built for low-bandwidth devices.",
    href: "/virtual-past-liberia",
  },
]

const values = [
  {
    title: "Innovation",
    body: "Challenging the boundaries of what is possible in technology.",
  },
  {
    title: "Creativity",
    body: "Where art and science coexist in the same solution.",
  },
  {
    title: "Integrity",
    body: "Operating with honesty, responsibility and transparency.",
  },
  {
    title: "Collaboration",
    body: "Better work happens through collective intelligence and teamwork.",
  },
  {
    title: "Excellence",
    body: "Continuous improvement and technical mastery in every project.",
  },
  {
    title: "Empowerment",
    body: "Inspiring the next generation of African innovators and leaders.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <PageHero
          eyebrow="About · From start to finish"
          title={
            <>
              Building the digital
              <br />
              future of Africa.
            </>
          }
          description="Founded in 2024, HUIX-2099 works across immersive technology, 3D visualisation, games and software — bringing African stories and engineering to a global stage."
          aside={
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 rounded-[24px] bg-secondary p-6 sm:p-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-medium leading-snug text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          }
        />

        {/* Story */}
        <section id="our-story" className="scroll-mt-24 border-b border-border">
          <div className={WRAP}>
            <div className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
              <div className="lg:col-span-5">
                <p className={EYEBROW}>Our story</p>
                <h2 className={`mt-3 ${H2}`}>
                  From Monrovia,
                  <br />
                  for the world.
                </h2>
              </div>
              <div className="space-y-5 lg:col-span-7">
                <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-[16px]">
                  HUIX-2099 is a technology company founded in Monrovia, Liberia, dedicated
                  to building the digital future of Africa. We specialise in immersive
                  technologies, 3D visualisation and software that bridge creativity with
                  cutting-edge engineering.
                </p>
                <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  Our mission is to empower Africa&apos;s next generation of innovators by
                  designing smart systems and immersive experiences that merge creativity,
                  culture and commerce. We believe the future belongs to those who dare to
                  imagine differently.
                </p>
                <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  From our base in Liberia we serve clients globally, bringing African
                  innovation to the world stage while creating opportunities for local
                  talent to thrive.
                </p>
              </div>
            </div>

            <div className="grid gap-10 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
              <div className="lg:col-span-7">
                <p className={EYEBROW}>Field notes</p>
                <blockquote className="mt-4 max-w-2xl text-[24px] font-medium leading-[1.25] tracking-[-0.03em] sm:text-[28px]">
                  &ldquo;The build only makes sense when someone puts the headset on and forgets the
                  room.&rdquo;
                </blockquote>
                <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                  Every prototype leaves the studio. We test in classrooms, halls, and offices around
                  Monrovia — on the laptops people actually own, with the headsets they can borrow.
                </p>
                <Link
                  href="/virtual-past-liberia"
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-foreground"
                >
                  Read the Virtual Past Liberia field notes
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <dl className="grid grid-cols-2 content-start gap-x-6 gap-y-7 self-start border-t border-border pt-7 lg:col-span-5 lg:border-t-0 lg:pt-0">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Programme</dt>
                  <dd className="mt-1.5 text-[13px] font-medium">Virtual Past Liberia</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Testing</dt>
                  <dd className="mt-1.5 text-[13px] font-medium">Quest 2 · laptop</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Setting</dt>
                  <dd className="mt-1.5 text-[13px] font-medium">Monrovia, LR</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Year</dt>
                  <dd className="mt-1.5 text-[13px] font-medium">2026</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="border-b border-border">
          <div className={WRAP}>
            <div className="py-16 lg:py-24">
              <SectionHead
                eyebrow="What we build"
                title="Four lines, one studio."
                description="Products, tools and worlds that share the same team, pipeline and standards."
                action={<TextLink href="/products">All products</TextLink>}
              />
              <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    className="group border-t border-border pt-5"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[18px] font-medium tracking-[-0.015em] text-foreground">
                        {project.name}
                      </h3>
                      <span className="text-[11px] tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {project.kind}
                    </p>
                    <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                      {project.body}
                    </p>
                    <div className="mt-5">
                      <TextLink href={project.href}>Explore</TextLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & values */}
        <section id="mission-and-values" className="scroll-mt-24 border-b border-border">
          <div className={WRAP}>
            <div className="py-16 lg:py-24">
              <SectionHead
                eyebrow="Mission & values"
                title={
                  <>
                    Six things
                    <br />
                    we do not trade.
                  </>
                }
                description="Technology is not just a tool — it is an evolving language of human creativity. These principles guide every project and relationship."
              />

              <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                {values.map((value, index) => (
                  <div key={value.title} className="border-t border-border pt-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-[16px] font-medium text-foreground">
                        {value.title}
                      </h3>
                      <span className="text-[11px] tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-14 rounded-[24px] bg-secondary p-7 sm:p-10">
                <p className={`max-w-3xl text-[clamp(1.25rem,2.4vw,1.7rem)] leading-[1.4] ${HEADING}`}>
                  &ldquo;We are committed to technology that is accessible, meaningful and
                  transformative — technology that does not just solve problems, but opens
                  new possibilities for how we live, work and connect.&rdquo;
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  HUIX-2099 · Monrovia, Liberia
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title={
            <>
              Ready to build
              <br />
              the future?
            </>
          }
          body="Tell us what you are imagining. We will reply with an honest view of scope, timeline and fit."
          secondary={{ label: "See our work", href: "/products" }}
        />
      </main>
      <Footer />
    </>
  )
}
