import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Newspaper } from "lucide-react"
import { FranchiseShell, PageHero } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata, MH_BASE } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "News and Updates",
  "The official source for confirmed Monrovia Hustle announcements, development milestones, feature highlights, release news, and community updates.",
  "/news",
)

const CATEGORIES = ["Official announcements", "Development updates", "Feature highlights", "Release announcements", "Community news"]

export default function MonroviaHustleNewsPage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="News"
        title="Official franchise news, all in one place."
        description="Follow confirmed announcements, development milestones, and important updates as Monrovia Hustle continues to develop."
      />

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground">
              <Newspaper className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h2 className="mt-6 text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              No public announcements yet.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-muted-foreground">
              Development is ongoing. When HUIX-2099 confirms franchise news, it will be published here without
              unverified release dates or unconfirmed feature promises.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">What to expect</p>
            <ul className="mt-6 border-t border-border">
              {CATEGORIES.map((category) => (
                <li key={category} className="flex items-center justify-between gap-4 border-b border-border py-4">
                  <span className="text-[14px]">{category}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Soon</span>
                </li>
              ))}
            </ul>

            <Link
              href={`${MH_BASE}/contact`}
              className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
            >
              Press and community inquiries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </FranchiseShell>
  )
}
