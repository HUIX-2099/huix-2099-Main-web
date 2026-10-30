import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, H2, PageHero, WRAP } from "@/components/clean-ui"
import { teamMembers, HUIX_COMPANY_TEAM_IDS } from "./data"

const leaders = teamMembers.filter((member) =>
  HUIX_COMPANY_TEAM_IDS.includes(member.id as (typeof HUIX_COMPANY_TEAM_IDS)[number]),
)

const collaborators = teamMembers.filter(
  (member) => !HUIX_COMPANY_TEAM_IDS.includes(member.id as (typeof HUIX_COMPANY_TEAM_IDS)[number]),
)

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Studio · Monrovia, Liberia"
        title={
          <>
            A small team,
            <br />
            <span className="text-muted-foreground">a long horizon.</span>
          </>
        }
        description="HUIX-2099 is led from Monrovia and built with a tight circle of engineers, artists, and voices. Everyone here works on the same thing: making local stories and tools stand at global quality."
        aside={
          <div className="rounded-[24px] border border-border bg-secondary/60 p-6">
            <p className={EYEBROW}>At a glance</p>
            <dl className="mt-5 space-y-4 text-[14px]">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-foreground">Founded</dt>
                <dd className="font-medium">2024</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-foreground">Leadership</dt>
                <dd className="font-medium">02</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-foreground">Collaborators</dt>
                <dd className="font-medium">{String(collaborators.length).padStart(2, "0")}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-foreground">Base</dt>
                <dd className="font-medium">Monrovia, LR</dd>
              </div>
            </dl>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <p className={EYEBROW}>Leadership</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {leaders.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="group grid gap-5 rounded-[28px] border border-border bg-card p-4 transition-colors hover:border-foreground/25 sm:grid-cols-[220px_1fr] sm:p-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-secondary sm:aspect-auto sm:h-full sm:min-h-[280px]">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 text-white">
                    <span className="text-[64px] font-semibold leading-none tracking-[-0.06em]">
                      {initials(member.name)}
                    </span>
                    <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
                      HUIX-2099 · Monrovia
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between py-1 sm:py-2 sm:pr-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {member.role}
                  </p>
                  <h2 className="mt-3 text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[28px]">
                    {member.name}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{member.tagline}</p>
                </div>
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {member.focus.split("·").map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium">
                    View profile
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className={`${WRAP} py-14 lg:py-20`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className={EYEBROW}>Collaborators</p>
              <h2 className={`mt-3 ${H2}`}>The people behind the work.</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Voice talent, sound, and friends who build with us — including the Monrovia Hustle 3D cast.
              </p>
            </div>
            <Link
              href="/products/monrovia-hustle"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Monrovia Hustle 3D
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {collaborators.map((member) => {
              const hasPhoto = !("hidePhoto" in member && member.hidePhoto === true) && Boolean(member.image)
              return (
                <Link key={member.id} href={`/team/${member.id}`} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-[18px] bg-secondary">
                    {hasPhoto ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary text-[22px] font-semibold tracking-[-0.02em] text-muted-foreground">
                        {initials(member.name)}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-[14px] font-medium leading-tight">{member.name}</p>
                  <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{member.role}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join us"
        title="Build the next one with us."
        body="We work with engineers, 3D artists, and voices across Liberia and the diaspora. If the work speaks to you, send a note."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See our work", href: "/products" }}
      />

      <Footer />
    </>
  )
}
