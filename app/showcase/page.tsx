import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, PageHero, WRAP } from "@/components/clean-ui"

export const metadata: Metadata = {
  title: "Showcase — HUIX-2099",
  description:
    "Selected work from HUIX-2099 — games, software, developer tools, and immersive experiences built in Monrovia, Liberia.",
}

type ShowcaseItem = {
  title: string
  category: string
  description: string
  href: string
  img: string
  fit: "cover" | "contain"
  year: string
}

const items: ShowcaseItem[] = [
  {
    title: "Monrovia Hustle 3D",
    category: "Game · 3D narrative",
    description:
      "A Liberian narrative game with a local voice cast and an open, lived-in Monrovia. Currently in development as a playable slice.",
    href: "/products/monrovia-hustle",
    img: "/products/monrovia-hustle/cover/monrovia-hustle-cover.jpg",
    fit: "cover",
    year: "2026",
  },
  {
    title: "HUIXOR",
    category: "Software · Developer tool",
    description:
      "Preview a site across eight devices in one window — synced scroll, VR stage, and Chrome DevTools emulation. Built in WPF.",
    href: "/products/huixor",
    img: "/products/huixor/screenshorts/Screenshot 2026-04-05 111541.png",
    fit: "cover",
    year: "2026",
  },
  {
    title: "HUIX-THEME",
    category: "Theme · VS Code",
    description:
      "A dark VS Code theme with satellite hardware imagery and neon syntax colors — designed for long, focused sessions.",
    href: "/products/huix-theme",
    img: "/products/huix-theme/Media/logo.png",
    fit: "contain",
    year: "2024",
  },
]

export default function ShowcasePage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Showcase · Selected work"
        title={
          <>
            Things we have
            <br />
            <span className="text-muted-foreground">actually shipped.</span>
          </>
        }
        description="Products, prototypes, and immersive experiences made with a small team and a long attention span — from games and desktop software to developer tools."
        aside={
          <div className="flex items-end justify-between gap-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <div>
              <p className="text-[56px] font-semibold leading-none tracking-[-0.05em]">03</p>
              <p className="mt-2 text-[12px] text-muted-foreground">Featured projects</p>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[13px] font-medium"
            >
              All work
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-border bg-secondary">
                {item.fit === "cover" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 m-auto max-h-[62%] max-w-[62%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                  {item.year}
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className={EYEBROW}>{item.category}</p>
                  <h2 className="mt-2 flex items-center gap-2 text-[24px] font-semibold tracking-[-0.03em]">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </h2>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Next project"
        title="Your idea could be on this page."
        body="We take on a small number of builds each year — games, products, and immersive experiences with a reason to exist."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Browse products", href: "/products" }}
      />

      <Footer />
    </>
  )
}
