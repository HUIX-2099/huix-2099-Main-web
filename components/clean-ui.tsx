import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const WRAP = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16"
export const EYEBROW =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
export const HEADING = "font-semibold tracking-[-0.035em]"
export const H1 = "text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[0.98] font-semibold tracking-[-0.045em]"
export const H2 = "text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.035em]"

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  aside?: ReactNode
}) {
  return (
    <section className="border-b border-border">
      <div className={WRAP}>
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-24">
          <div className={aside ? "lg:col-span-8" : "lg:col-span-10"}>
            <p className={EYEBROW}>{eyebrow}</p>
            <h1 className={`mt-5 ${H1}`}>{title}</h1>
            {description ? (
              <div className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                {description}
              </div>
            ) : null}
          </div>
          {aside ? <div className="lg:col-span-4">{aside}</div> : null}
        </div>
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow ? <p className={EYEBROW}>{eyebrow}</p> : null}
        <h2 className={`mt-3 ${H2}`}>{title}</h2>
        {description ? (
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const className =
    "group inline-flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors"
  const content = (
    <>
      {children}
      {external ? (
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      ) : (
        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
      )}
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}

export function CTASection({
  eyebrow = "Start something",
  title,
  body,
  primary = { label: "Start a project", href: "/contact" },
  secondary,
}: {
  eyebrow?: string
  title: ReactNode
  body?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="pb-16 lg:pb-24">
      <div className={WRAP}>
        <div className="rounded-[32px] bg-foreground px-6 py-12 text-background sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">
                {eyebrow}
              </p>
              <h2
                className={`mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1] ${HEADING}`}
              >
                {title}
              </h2>
            </div>
            <div className="lg:pb-1">
              {body ? (
                <p className="max-w-md text-[14px] leading-relaxed text-background/60">
                  {body}
                </p>
              ) : null}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primary.href}
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-background px-6 py-3.5 text-[13px] font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {primary.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                {secondary ? (
                  <Link
                    href={secondary.href}
                    className="inline-flex items-center justify-between gap-3 rounded-full px-6 py-3.5 text-[13px] font-medium text-background ring-1 ring-background/30 transition-colors hover:bg-background/10"
                  >
                    {secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
