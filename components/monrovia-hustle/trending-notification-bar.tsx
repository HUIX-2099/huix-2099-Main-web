"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const
export const MH_IDE_HREF = "/products/monrovia-hustle-independence-day"

const MH_LOGO_LIGHT = "/products/Monrovia_hustle_Demo_Campane/light_mode_logo.png"
const MH_LOGO_DARK = "/products/Monrovia_hustle_Demo_Campane/dark_mode_logo.png"

const TICKER =
  "TRENDING · Monrovia Hustle Independence Day Edition 2026 by Victor Edet Coleman · Join WhatsApp to get the game · Unlocks 26 July 2026 · Click to open"

export function TrendingNotificationBar({ className }: { className?: string }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (pathname === MH_IDE_HREF) return null

  const logoSrc = mounted && resolvedTheme === "dark" ? MH_LOGO_DARK : MH_LOGO_LIGHT
  const items = [TICKER, TICKER, TICKER, TICKER]

  return (
    <motion.div
      initial={reduceMotion ? false : { x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.85 }}
      className={cn(
        "relative w-full overflow-hidden border-b border-border/80 bg-muted/90 text-foreground backdrop-blur-sm dark:bg-muted/35",
        className,
      )}
      style={{ height: "var(--trending-bar-height, 2rem)" }}
    >
      <Link
        href={MH_IDE_HREF}
        className="group flex h-full min-h-0 min-w-0 w-full items-center gap-2.5 px-2 sm:gap-3 sm:px-3"
        aria-label="Trending: Monrovia Hustle Independence Day Edition — open page"
      >
        <span className="relative z-10 flex shrink-0 items-center gap-2 rounded-sm border border-border/60 bg-background/60 px-1.5 py-0.5 sm:px-2">
          <span className="relative h-4 w-[4.5rem] shrink-0 sm:h-[1.125rem] sm:w-[5rem]">
            {mounted ? (
              <Image
                src={logoSrc}
                alt="Monrovia Hustle 3D"
                fill
                className="object-contain object-left"
                sizes="80px"
                priority
              />
            ) : (
              <span className="block h-full w-full rounded-sm bg-muted-foreground/15" aria-hidden />
            )}
          </span>
          <span
            className="hidden text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground xs:inline sm:text-[9px]"
            style={{ fontFamily: MONO }}
          >
            Trending
          </span>
        </span>

        <div className="relative min-w-0 flex-1 overflow-hidden mask-fade-x">
          <div
            className={cn(
              "flex w-max items-center gap-8 whitespace-nowrap text-muted-foreground",
              !reduceMotion && "animate-huix-marquee-ltr",
            )}
            style={{ fontFamily: MONO }}
          >
            {items.map((text, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.14em]"
              >
                {text}
                <ArrowRight className="size-3 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
