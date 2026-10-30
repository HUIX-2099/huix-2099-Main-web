"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CornerDownLeft, Search } from "lucide-react"

type CommandItem = {
  label: string
  href: string
  group: "Pages" | "Work"
  note?: string
  keywords?: string
}

const ITEMS: CommandItem[] = [
  { label: "Home", href: "/", group: "Pages", note: "Studio overview", keywords: "index start" },
  { label: "About", href: "/about", group: "Pages", note: "Who we are", keywords: "studio company" },
  { label: "Team", href: "/team", group: "Pages", note: "The people", keywords: "founders leadership" },
  { label: "Research", href: "/research", group: "Pages", note: "How the work stays honest", keywords: "xr vr ai study" },
  { label: "Contact", href: "/contact", group: "Pages", note: "Start a project", keywords: "email phone brief" },
  { label: "Pricing", href: "/pricing", group: "Pages", note: "Engagements", keywords: "cost budget packages" },
  { label: "FAQ", href: "/faq", group: "Pages", note: "Common questions", keywords: "help answers" },
  { label: "Privacy policy", href: "/policy", group: "Pages", note: "How we handle data", keywords: "legal" },
  { label: "All products", href: "/products", group: "Work", note: "Six builds, one pipeline", keywords: "work portfolio" },
  { label: "Virtual Past Liberia", href: "/virtual-past-liberia", group: "Work", note: "VR heritage", keywords: "museum xr history" },
  { label: "Monrovia Hustle", href: "/products/monrovia-hustle", group: "Work", note: "3D game for Liberia", keywords: "game rpg liberia huix" },
  { label: "Monrovia Hustle prototypes", href: "/products/monrovia-hustle/prototype", group: "Work", note: "Two experimental versions", keywords: "game prototype independence day racing" },
  { label: "HUIXOR", href: "/products/huixor", group: "Work", note: "Device preview software", keywords: "desktop responsive screens" },
  { label: "HUIX-THEME", href: "/products/huix-theme", group: "Work", note: "Editor theme", keywords: "vscode extension" },
  { label: "Showcase", href: "/showcase", group: "Work", note: "Things we have shipped", keywords: "gallery projects" },
  { label: "Partners", href: "/partners", group: "Pages", note: "Good work is rarely done alone", keywords: "collaboration media" },
]

export function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ITEMS
    return ITEMS.filter((item) =>
      `${item.label} ${item.note ?? ""} ${item.keywords ?? ""}`.toLowerCase().includes(q)
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    // Lock the document root, not <body>: a body-level lock turns <body> into a
    // scroll container and makes the sticky header jump out of view. Pad for the
    // removed scrollbar so the page behind does not shift.
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    const previousPadding = root.style.paddingRight
    const scrollbar = window.innerWidth - root.clientWidth
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`
    root.style.overflow = "hidden"
    setQuery("")
    setActive(0)
    const focus = window.setTimeout(() => inputRef.current?.focus(), 50)
    return () => {
      window.clearTimeout(focus)
      root.style.overflow = previousOverflow
      root.style.paddingRight = previousPadding
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    if (active > results.length - 1) setActive(Math.max(0, results.length - 1))
  }, [results.length, active])

  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>('[data-active="true"]')
    node?.scrollIntoView({ block: "nearest" })
  }, [active])

  const go = (href: string) => {
    onClose()
    router.push(href)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((index) => Math.min(index + 1, results.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((index) => Math.max(index - 1, 0))
    } else if (event.key === "Enter") {
      event.preventDefault()
      const item = results[active]
      if (item) go(item.href)
    } else if (event.key === "Escape") {
      event.preventDefault()
      onClose()
    } else if (event.key === "Tab") {
      // Options are reached with the arrow keys; keep focus in the field.
      event.preventDefault()
      inputRef.current?.focus()
    }
  }

  let lastGroup = ""

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]"
        >
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm dark:bg-black/60"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search HUIX-2099"
            initial={{ opacity: 0, y: -8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background shadow-[0_32px_90px_-24px_rgba(0,0,0,0.45)]"
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages, work and studio"
                aria-label="Search pages"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-results"
                aria-activedescendant={results[active] ? `command-option-${active}` : undefined}
                aria-autocomplete="list"
                autoComplete="off"
                className="h-14 min-w-0 flex-1 bg-transparent text-[16px] text-foreground outline-none placeholder:text-muted-foreground sm:text-[14px]"
              />
              <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.08em] text-muted-foreground sm:block">
                Esc
              </kbd>
            </div>

            <div
              id="command-results"
              ref={listRef}
              role="listbox"
              aria-label="Results"
              className="max-h-[54vh] overflow-y-auto p-2"
            >
              {results.length === 0 ? (
                <p className="px-3 py-10 text-center text-[13px] text-muted-foreground">
                  No results for “{query}”.
                </p>
              ) : (
                results.map((item, index) => {
                  const showGroup = item.group !== lastGroup
                  lastGroup = item.group
                  const isActive = index === active
                  return (
                    <div key={item.href}>
                      {showGroup && (
                        <p className="px-3 pb-1.5 pt-3 text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          {item.group}
                        </p>
                      )}
                      <button
                        type="button"
                        id={`command-option-${index}`}
                        role="option"
                        tabIndex={-1}
                        aria-selected={isActive}
                        data-active={isActive}
                        onMouseEnter={() => setActive(index)}
                        onClick={() => go(item.href)}
                        className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors ${
                          isActive ? "bg-secondary" : "hover:bg-secondary/60"
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[13px] font-medium text-foreground">
                            {item.label}
                          </span>
                          <span className="block truncate text-[11px] text-muted-foreground">
                            {item.note}
                          </span>
                        </span>
                        {isActive ? (
                          <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
                        ) : (
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden />
                        )}
                      </button>
                    </div>
                  )
                })
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-2.5 text-[10px] text-muted-foreground">
              <span className="hidden sm:inline">↑↓ navigate · ↵ open</span>
              <span className="sm:hidden">Tap to open</span>
              <span>
                {results.length} {results.length === 1 ? "result" : "results"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
