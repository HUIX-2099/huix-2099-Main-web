"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MH_BASE, MH_NAV } from "@/lib/monrovia-hustle/franchise"

const LINKS = [{ label: "Overview", href: MH_BASE }, ...MH_NAV]

export function FranchiseNav() {
  const pathname = usePathname()
  const scrollerRef = useRef<HTMLDivElement>(null)
  // Which ends of the row have more links past them, so those edges can fade.
  const [more, setMore] = useState({ left: false, right: false })

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const measure = () => {
      const max = scroller.scrollWidth - scroller.clientWidth
      setMore({ left: scroller.scrollLeft > 4, right: scroller.scrollLeft < max - 4 })
    }

    // On a narrow screen the current section may sit past the edge: bring it
    // into view without scrolling the page itself.
    const active = scroller.querySelector<HTMLElement>('[aria-current="page"]')
    if (active) scroller.scrollLeft = Math.max(0, active.offsetLeft - 20)
    measure()

    scroller.addEventListener("scroll", measure, { passive: true })
    window.addEventListener("resize", measure)
    return () => {
      scroller.removeEventListener("scroll", measure)
      window.removeEventListener("resize", measure)
    }
  }, [pathname])

  // The row scrolls sideways on small screens with no scrollbar showing;
  // the faded edge is what says there is more.
  const fade = `linear-gradient(to right, ${more.left ? "transparent" : "#000"} 0, #000 28px, #000 calc(100% - 40px), ${
    more.right ? "transparent" : "#000"
  } 100%)`

  return (
    <nav aria-label="Monrovia Hustle sections" className="border-b border-border">
      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-[1320px] items-center overflow-x-auto overscroll-x-contain px-5 [scrollbar-width:none] sm:px-8 lg:px-16 [&::-webkit-scrollbar]:hidden"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        <ul className="flex items-center whitespace-nowrap">
          {LINKS.map((item, i) => {
            const active = item.href === MH_BASE ? pathname === MH_BASE : pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex border-b-2 py-3 text-[12px] transition-colors ${i === LINKS.length - 1 ? "pr-0" : "mr-6"} ${
                    active
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
