"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react"
import { useTheme } from "./theme-provider"
import { CommandMenu } from "./command-menu"
import { HuixBarcode, HuixWordmark } from "./brand/huix-logo"

const WRAP = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16"

const PRODUCTS = [
  { label: "Virtual Past Liberia", href: "/virtual-past-liberia", note: "Heritage archive" },
  { label: "Monrovia Hustle", href: "/products/monrovia-hustle", note: "Game franchise" },
]

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
]

const MORE = [
  { label: "Team", href: "/team", note: "The people" },
  { label: "Pricing", href: "/pricing", note: "Engagements" },
  { label: "Partners", href: "/partners", note: "Who we work with" },
  { label: "Showcase", href: "/showcase", note: "Selected work" },
  { label: "FAQ", href: "/faq", note: "Common questions" },
]

export function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [shortcut, setShortcut] = useState("⌘K")
  const productsRef = useRef<HTMLLIElement>(null)
  const moreRef = useRef<HTMLLIElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setMounted(true)
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
    setShortcut(isMac ? "⌘K" : "Ctrl K")
  }, [])

  // Direction-aware scroll: hide on the way down, reveal on the way up.
  useEffect(() => {
    let last = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight

      setScrolled(y > 8)
      if (progressRef.current) {
        const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
        progressRef.current.style.transform = `scaleX(${ratio})`
      }

      const delta = y - last
      if (y < 160) {
        setHidden(false)
      } else if (delta > 6) {
        setHidden(true)
      } else if (delta < -6) {
        setHidden(false)
      }
      last = y
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
    setMoreOpen(false)
    setSearchOpen(false)
    setHidden(false)
  }, [pathname])

  useEffect(() => {
    if (!productsOpen) return
    const onPointer = (event: PointerEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    window.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      window.removeEventListener("keydown", onKey)
    }
  }, [productsOpen])

  useEffect(() => {
    if (!moreOpen) return
    const onPointer = (event: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    window.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      window.removeEventListener("keydown", onKey)
    }
  }, [moreOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    // Lock the root element so the sticky header (and the sheet it anchors) holds still.
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    const previousPadding = root.style.paddingRight
    const scrollbar = window.innerWidth - root.clientWidth
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`
    root.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      root.style.overflow = previousOverflow
      root.style.paddingRight = previousPadding
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)")
    const onChange = () => {
      if (query.matches) setMenuOpen(false)
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  // Keep the bar visible whenever a surface depends on it.
  useEffect(() => {
    if (menuOpen || searchOpen || moreOpen || productsOpen) setHidden(false)
  }, [menuOpen, searchOpen, moreOpen, productsOpen])

  const openSearch = useCallback(() => {
    setMenuOpen(false)
    setProductsOpen(false)
    setMoreOpen(false)
    setHidden(false)
    setSearchOpen(true)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable === true

      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen((open) => !open)
        setMenuOpen(false)
        setHidden(false)
      } else if (event.key === "/" && !typing && !searchOpen) {
        event.preventDefault()
        openSearch()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [searchOpen, openSearch])

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

  const productsActive = PRODUCTS.some((link) => isActive(link.href))
  const moreActive = MORE.some((link) => isActive(link.href))
  const dark = mounted && resolvedTheme === "dark"

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-[transform,background-color,border-color] duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || menuOpen || searchOpen
            ? "border-border bg-background/90 backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className={WRAP}>
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-6">
            {/* Identity */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2.5"
              aria-label="HUIX-2099 home"
            >
              <HuixBarcode className="h-8 text-foreground" />
              <HuixWordmark className="h-[18px] text-foreground" />
              <span className="ml-1 hidden text-[11px] font-normal tracking-[0.01em] text-muted-foreground xl:inline">
                Monrovia · Liberia
              </span>
            </Link>

            {/* Desktop links */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {/* Products dropdown */}
                <li
                  className="relative"
                  ref={productsRef}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setProductsOpen((open) => !open)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    aria-controls="products-menu"
                    className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] transition-colors ${
                      productsOpen || productsActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {productsActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-secondary"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    Products
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        id="products-menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-background p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
                      >
                        {PRODUCTS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                          >
                            <span>
                              <span className="block text-[13px] font-medium text-foreground">
                                {link.label}
                              </span>
                              <span className="block text-[11px] text-muted-foreground">
                                {link.note}
                              </span>
                            </span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                        <div className="my-1 h-px bg-border" />
                        <Link
                          href="/products"
                          className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                        >
                          <span className="text-[13px] font-medium text-foreground">
                            All products
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {LINKS.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative inline-flex items-center rounded-full px-3 py-2 text-[13px] transition-colors ${
                          active
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 -z-10 rounded-full bg-secondary"
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          />
                        )}
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="relative" ref={moreRef}>
                  <button
                    type="button"
                    onClick={() => setMoreOpen((open) => !open)}
                    aria-expanded={moreOpen}
                    aria-haspopup="true"
                    aria-controls="more-menu"
                    className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] transition-colors ${
                      moreOpen || moreActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {moreActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-secondary"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    More
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        moreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        id="more-menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-background p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
                      >
                        {MORE.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                          >
                            <span>
                              <span className="block text-[13px] font-medium text-foreground">
                                {link.label}
                              </span>
                              <span className="block text-[11px] text-muted-foreground">
                                {link.note}
                              </span>
                            </span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search the site"
                aria-keyshortcuts="Control+K Meta+K"
                className="group inline-flex h-9 items-center gap-2 rounded-full border border-border px-2.5 text-[12px] text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                <Search className="h-3.5 w-3.5" aria-hidden />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden rounded border border-border bg-secondary/60 px-1.5 py-0.5 text-[9px] font-medium tracking-[0.04em] text-muted-foreground xl:inline">
                  {shortcut}
                </kbd>
              </button>

              <button
                type="button"
                onClick={() => setTheme(dark ? "light" : "dark")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                aria-pressed={dark}
              >
                <span suppressHydrationWarning className="inline-flex">
                  {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </span>
              </button>

              <Link
                href="/contact"
                className="group hidden items-center gap-2 rounded-full bg-foreground py-2.5 pl-5 pr-4 text-[13px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px">
          <span
            ref={progressRef}
            className="block h-full w-full origin-left scale-x-0 bg-foreground/45"
          />
        </div>

        {/* Mobile / tablet sheet */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="site-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
            >
              <div className={`${WRAP} flex min-h-full flex-col pb-10 pt-6`}>
                <button
                  type="button"
                  onClick={openSearch}
                  className="flex w-full items-center gap-2.5 rounded-full border border-border px-4 py-3 text-left text-[13px] text-muted-foreground"
                >
                  <Search className="h-4 w-4 shrink-0" aria-hidden />
                  Search the site
                  <kbd className="ml-auto rounded border border-border px-1.5 py-0.5 text-[9px] font-medium tracking-[0.04em]">
                    {shortcut}
                  </kbd>
                </button>

                {/* Mobile products */}
                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Products
                  </p>
                  <div className="grid gap-2">
                    {PRODUCTS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between rounded-xl border border-border px-4 py-3 transition-colors hover:bg-secondary"
                      >
                        <span>
                          <span className="block text-[15px] font-medium text-foreground">
                            {link.label}
                          </span>
                          <span className="block text-[11px] text-muted-foreground">
                            {link.note}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      View all products →
                    </Link>
                  </div>
                </div>

                <nav aria-label="Mobile" className="mt-8 flex flex-col">
                  {LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between border-b border-border py-4 text-[26px] font-semibold tracking-[-0.03em] ${
                          isActive(link.href) ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    More
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {MORE.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-between rounded-full bg-foreground px-6 py-4 text-[14px] font-medium text-background"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground">
                    <a href="mailto:huixtech2099@gmail.com" className="hover:text-foreground">
                      huixtech2099@gmail.com
                    </a>
                    <span>Monrovia, LR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CommandMenu open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
