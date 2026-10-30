import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, H2, PageHero, WRAP } from "@/components/clean-ui"

export const metadata: Metadata = {
  title: "HUIX-2099 — About the startup",
  description:
    "HUIX-2099 is a Liberia-based studio building XR, AI, games, and 3D experiences from Monrovia.",
}

const builds = [
  {
    name: "HUIX-HORIZEN",
    type: "Platform",
    copy: "A modular XR platform for spatial visualisation and collaboration.",
    href: "/research",
  },
  {
    name: "HUIXOR",
    type: "Software",
    copy: "A dev-focused browser and VR preview shell for designers and engineers.",
    href: "/products/huixor",
  },
  {
    name: "Monrovia Hustle 3D",
    type: "Game",
    copy: "A Liberian-led narrative game franchise and cultural project.",
    href: "/products/monrovia-hustle",
  },
  {
    name: "Virtual Past Liberia",
    type: "Immersive",
    copy: "Heritage preservation through immersive reconstruction and storytelling.",
    href: "/virtual-past-liberia",
  },
]

export default function Huix2099Page() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Studio · About"
        title={
          <>
            HUIX-2099.
            <br />
            <span className="text-muted-foreground">Building the digital future.</span>
          </>
        }
        description="A Liberia-based technology studio founded in Monrovia in 2024. We design and build immersive XR, AI, games, and 3D experiences that celebrate African creativity while solving practical problems."
        aside={
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 rounded-[24px] bg-secondary p-6 sm:p-7">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Founded</dt>
              <dd className="mt-1.5 text-[13px] font-medium">2024</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Base</dt>
              <dd className="mt-1.5 text-[13px] font-medium">Monrovia, Liberia</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Focus</dt>
              <dd className="mt-1.5 text-[13px] font-medium">XR · Games · Software</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Team</dt>
              <dd className="mt-1.5 text-[13px] font-medium">Small, senior, local</dd>
            </div>
          </dl>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={EYEBROW}>Mission</p>
            <h2 className={`mt-3 ${H2}`}>Local roots, global standards.</h2>
          </div>
          <div className="space-y-5 lg:col-span-7">
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              We empower the next generation of African technologists through practical tools, local
              partnerships, and culturally rooted immersive experiences that create economic and
              educational opportunity.
            </p>
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              The work spans research prototypes and shipped products — always with the same standard:
              it should hold up next to anything made anywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className={`${WRAP} py-14 lg:py-20`}>
          <p className={EYEBROW}>What we build</p>
          <h2 className={`mt-3 ${H2}`}>Four lines of work.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {builds.map((build) => (
              <Link
                key={build.name}
                href={build.href}
                className="group grid gap-2 py-6 sm:grid-cols-[180px_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {build.type}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{build.name}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{build.copy}</p>
                </div>
                <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={EYEBROW}>Contact &amp; partnerships</p>
            <h2 className={`mt-3 ${H2}`}>Work with the studio.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Interested in partnering or commissioning work? We collaborate with museums, educational
              institutions, and local creators. Reach out for briefs, research collaborations, and pilot
              projects.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Contact the studio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next"
        title="The future is being built here."
        body="Follow the work, partner with the studio, or start a project of your own."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See the work", href: "/products" }}
      />

      <Footer />
    </>
  )
}
