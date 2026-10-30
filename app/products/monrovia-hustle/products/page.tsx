import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FranchiseShell, PageHero, StatusBadge } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata, MH_BASE } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "Franchise Products",
  "Understand the Monrovia Hustle product ecosystem: its core experience, gameplay systems, ongoing development, and approach to future releases.",
  "/products",
)

const PRODUCT_AREAS = [
  {
    index: "01",
    title: "The game",
    body: "Monrovia Hustle is the core experience: an explorable city shaped by Monrovia, Liberia, and the life within it.",
  },
  {
    index: "02",
    title: "The world",
    body: "The franchise is built around a recognizable place. Its identity can carry new stories, locations, and experiences over time.",
  },
  {
    index: "03",
    title: "What comes next",
    body: "Future releases and expansions will only be listed once they are officially confirmed. Nothing is promised early.",
  },
]

export default function FranchiseProductsPage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="Products"
        title="One game. One clear identity."
        description="Monrovia Hustle is the franchise. The game, its world, and anything that follows all share the same Liberian foundation."
      >
        <StatusBadge>In development</StatusBadge>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Overview</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              A franchise built around a place.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Monrovia Hustle is developed by HUIX-2099 as a long-term game franchise. This page describes the whole,
              without turning work in progress into product announcements.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {PRODUCT_AREAS.map((area) => (
              <article key={area.title} className="group">
                <p
                  aria-hidden
                  className="text-[clamp(3rem,5vw,4.4rem)] font-semibold leading-none tracking-[-0.06em] text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40"
                >
                  {area.index}
                </p>
                <h3 className="mt-5 text-[16px] font-semibold">{area.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Release policy</p>
              <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                Confirmed means confirmed.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[13px] leading-6 text-muted-foreground">
                No separate public release, expansion, or launch date is being announced here. Official details will be
                added when a product is ready to be presented.
              </p>
              <Link
                href={`${MH_BASE}/news`}
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
              >
                News and updates
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FranchiseShell>
  )
}
