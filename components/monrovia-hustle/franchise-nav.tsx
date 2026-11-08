"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MH_BASE, MH_NAV } from "@/lib/monrovia-hustle/franchise"

const LINKS = [{ label: "Overview", href: MH_BASE }, ...MH_NAV]

export function FranchiseNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Monrovia Hustle sections" className="border-b border-border">
      <div className="mx-auto flex max-w-[1320px] items-center overflow-x-auto px-5 sm:px-8 lg:px-16">
        <ul className="flex items-center whitespace-nowrap">
          {LINKS.map((item) => {
            const active = item.href === MH_BASE ? pathname === MH_BASE : pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex border-b-2 px-3 py-3 text-[12px] transition-colors first:pl-0 ${
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
