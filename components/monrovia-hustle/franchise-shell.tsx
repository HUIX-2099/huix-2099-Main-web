import type { ReactNode } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FranchiseNav } from "@/components/monrovia-hustle/franchise-nav"
import { MH_LOGO_BLACK } from "@/lib/monrovia-hustle/franchise"
import { cn } from "@/lib/utils"

/**
 * Theme-aware transparent wordmark: the supplied black logo is inverted in dark
 * mode, so the franchise branding always sits on the site's own background.
 */
export function FranchiseLogo({ className }: { className?: string }) {
  return (
    <Image
      src={MH_LOGO_BLACK}
      alt="Monrovia Hustle"
      width={3840}
      height={399}
      priority
      className={cn("h-auto w-full dark:invert", className)}
    />
  )
}

/**
 * Monrovia Hustle pages sit inside the main HUIX-2099 navigation and footer so
 * the franchise keeps the studio's own theme rather than a separate skin.
 */
export function FranchiseShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="min-w-0 flex-1 bg-background">
        <FranchiseNav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-12 sm:px-8 lg:px-16 lg:pb-20 lg:pt-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Monrovia Hustle / {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,4.8vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">{description}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.04em]">{title}</h2>
      {description ? <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "current" | "planned" | "neutral" }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]",
        tone === "current" && "border-foreground/25 bg-secondary text-foreground",
        tone === "planned" && "border-border text-muted-foreground",
        tone === "neutral" && "border-foreground/25 text-foreground",
      )}
    >
      {children}
    </span>
  )
}
