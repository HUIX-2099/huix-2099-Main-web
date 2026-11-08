import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUp, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { HuixBarcode, HuixWordmark } from "./brand/huix-logo"

const STUDIO_EMAIL = "huixtech2099@gmail.com"
const STUDIO_PHONE = "+231 776 800 064"

/** Platform marks lucide doesn't ship (paths from Simple Icons, CC0), drawn like a lucide icon. */
function brandIcon(d: string) {
  return function BrandIcon({ className }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d={d} />
      </svg>
    )
  }
}

const TikTok = brandIcon(
  "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
)
const Pinterest = brandIcon(
  "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
)
const WhatsApp = brandIcon(
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
)

// The same HUIX-2099 accounts Monrovia Hustle links to; Facebook stays the studio's own page.
const socialLinks = [
  { title: "X / Twitter", href: "https://x.com/Huix2099", icon: Twitter },
  { title: "Instagram", href: "https://www.instagram.com/huix2099/", icon: Instagram },
  { title: "TikTok", href: "https://www.tiktok.com/@huix2099", icon: TikTok },
  { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61572485499528", icon: Facebook },
  { title: "YouTube", href: "https://www.youtube.com/@HUIX-2099", icon: Youtube },
  { title: "Pinterest", href: "https://pin.it/OjZlOUCm6", icon: Pinterest },
  { title: "WhatsApp community", href: "https://chat.whatsapp.com/IzrsbvLapPLCj48aCzo23O", icon: WhatsApp },
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
              <HuixBarcode className="h-8 text-foreground" />
              <HuixWordmark className="h-[18px] text-foreground" />
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
