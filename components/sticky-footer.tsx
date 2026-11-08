import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUp, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { HuixBarcode, HuixWordmark } from "./brand/huix-logo"

const STUDIO_EMAIL = "huixtech2099@gmail.com"
const STUDIO_PHONE = "+231 776 800 064"

const socialLinks = [
  { title: "X / Twitter", href: "https://x.com/Huix2099", icon: Twitter },
  { title: "Instagram", href: "https://www.instagram.com/huix.2099/", icon: Instagram },
  { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61572485499528", icon: Facebook },
  { title: "YouTube", href: "https://www.youtube.com/@HUIX-2099", icon: Youtube },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    icon: Linkedin,
  },
] as const

const groups = [
  {
    label: "Work",
    links: [
      { title: "All products", href: "/products" },
      { title: "Virtual Past Liberia", href: "/virtual-past-liberia" },
      { title: "Monrovia Hustle 3D", href: "/products/monrovia-hustle" },
      { title: "HUIXOR", href: "/products/huixor" },
      { title: "HUIX-THEME", href: "/products/huix-theme" },
    ],
  },
  {
    label: "Studio",
    links: [
      { title: "About", href: "/about" },
      { title: "Team", href: "/team" },
      { title: "Research", href: "/research" },
      { title: "Showcase", href: "/showcase" },
      { title: "Partners", href: "/partners" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
      { title: "Privacy policy", href: "/policy" },
      { title: "Find us on Google", href: "https://www.google.com/search?q=HUIX+2099", external: true },
    ],
  },
]

type StickyFooterProps = React.ComponentProps<"footer">

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer className={cn("w-full border-t border-border bg-background", className)} {...props}>
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16">
        <div className="grid gap-12 pb-12 pt-14 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-20">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="HUIX-2099 home">
              <HuixBarcode variant="centre" scan="hover" className="h-[22px] text-foreground" />
              <span
                className="text-[15px] font-semibold leading-none text-foreground"
                style={{ fontFamily: "Mohican, sans-serif" }}
              >
                HUIX-2099
              </span>
            </Link>

            <p className="mt-7 max-w-[22rem] text-[clamp(1.7rem,3vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-foreground">
              Worlds, games and tools made in Monrovia.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-5 pr-4 text-[12px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Open for 2026
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-1.5 text-[12px] text-muted-foreground">
              <a href={`mailto:${STUDIO_EMAIL}`} className="w-fit transition-colors hover:text-foreground">
                {STUDIO_EMAIL}
              </a>
              <a
                href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`}
                className="w-fit transition-colors hover:text-foreground"
              >
                {STUDIO_PHONE}
              </a>
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:pt-1">
            {groups.map((group) => (
              <div key={group.label}>
                <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {group.label}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] text-foreground/75 transition-colors hover:text-foreground"
                        >
                          {link.title}
                          <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] text-foreground/75 transition-colors hover:text-foreground"
                        >
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Signature: the horizontal lockup, faint until hovered, then scanned */}
        <div className="flex items-end justify-between gap-6 border-t border-border pb-4 pt-7">
          <div
            aria-hidden
            className="group flex min-w-0 flex-1 select-none items-center gap-[clamp(1rem,4.5vw,4.5rem)] text-foreground/10 transition-colors duration-500 hover:text-foreground/25"
          >
            <HuixBarcode scan="hover" className="hidden h-[clamp(5rem,14vw,12.5rem)] sm:block" />
            <HuixWordmark className="w-full max-w-[44rem] sm:h-[clamp(2.1rem,5.8vw,5.2rem)] sm:w-auto" />
          </div>
          <a
            href="#"
            aria-label="Back to top"
            className="group mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} HUIX-2099 · Monrovia, Liberia
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:block">
            6.3156° N · 10.8074° W
          </p>
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
