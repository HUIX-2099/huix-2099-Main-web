"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeSwitcher } from "./theme-switcher"
import { ChevronDown, Menu, X, Wifi, Smartphone, Search, Terminal, ArrowRight } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [deviceType, setDeviceType] = useState("DSK")
  const [online, setOnline] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    window.addEventListener("scroll", handleScroll)

    const ua = navigator.userAgent
    if (/mobile/i.test(ua)) setDeviceType("MBL")
    else if (/tablet/i.test(ua)) setDeviceType("TBL")

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setShowSearch(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const navItems = [
    {
      id: "home",
      label: "INDEX",
      href: "/",
      index: "00",
      dropdown: [
        { label: "FAQ", href: "/#faq", index: "01" },
        { label: "WHY CHOOSE US", href: "/#why-choose-us", index: "02" },
        { label: "DOCUMENTATION", href: "/#documentation", index: "03" },
      ]
    },
    {
      id: "about",
      label: "ABOUT",
      href: "/about",
      index: "01",
      dropdown: [
        { label: "OUR STORY", href: "/about#our-story", index: "01" },
        { label: "TEAM", href: "/team", index: "02" },
        { label: "MISSION & VALUES", href: "/about#mission-and-values", index: "03" },
      ]
    },
    {
      id: "projects",
      label: "PROJECTS",
      href: "/projects",
      index: "02",
      dropdown: [
        { label: "ALL PROJECTS", href: "/projects", index: "01" },
        { label: "HUIX-HORIZEN", href: "/huix-horizen", index: "02", featured: true },
        { label: "VIRTUAL PAST LIBERIA", href: "/virtual-past-liberia", index: "03", featured: true },
        { label: "PROTOTYPES", href: "/prototypes", index: "04" },
        { label: "GALLERY", href: "/gallery", index: "05" },
      ]
    },
    {
      id: "contact",
      label: "CONTACT",
      href: "/contact",
      index: "03",
    },
  ]

  const searchResults = searchQuery.toLowerCase().trim()
    ? [
        { name: "HUIX-HORIZEN", url: "/huix-horizen", cat: "PRJ" },
        { name: "Virtual Past Liberia", url: "/virtual-past-liberia", cat: "PRJ" },
        { name: "Prototypes", url: "/prototypes", cat: "PRJ" },
        { name: "About", url: "/about", cat: "DOC" },
        { name: "Contact", url: "/contact", cat: "DOC" },
      ].filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  const currentYear = new Date().getFullYear()
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/98 backdrop-blur-md shadow-sm' : 'bg-background/95 backdrop-blur'}`}>
      {/* Top Meta Strip */}
      <div className="hidden lg:block border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-7 text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
            <div className="flex items-center gap-4">
              <span>HUIX-2099 · NAV</span>
              <span className="inline-block h-[1px] w-4 bg-border" />
              <span>SYS {currentYear}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${online ? 'bg-green-500' : 'bg-red-500'}`} />
                {online ? 'ONLINE' : 'OFFLINE'}
              </span>
              <span className="inline-block h-[1px] w-4 bg-border" />
              <span>{deviceType}</span>
              <span className="inline-block h-[1px] w-4 bg-border" />
              <span>{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                <div className="text-[10px] text-muted-foreground tracking-[0.12em] opacity-60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>[00]</div>
                <div
                  className="whitespace-nowrap leading-none text-sm sm:text-base tracking-[0.2em] font-bold group-hover:tracking-[0.25em] transition-all duration-300"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  HUIX-2099
                </div>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="hidden sm:block text-[9px] uppercase tracking-[0.1em] text-muted-foreground" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                TECH · LBR
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center">
              {navItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.14em] transition-colors group ${
                      pathname === item.href || pathname.startsWith(item.href + '/') 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  >
                    <span className="text-[9px] opacity-50">[{item.index}]</span>
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-0 w-64 bg-background border border-border shadow-lg"
                      >
                        {/* Dropdown Header */}
                        <div className="px-4 py-2 border-b border-border bg-card/50">
                          <div className="flex items-center justify-between" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                            <span className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                              {item.label} · INDEX
                            </span>
                            <span className="text-[9px] text-muted-foreground/60">
                              {item.dropdown.length} ITEMS
                            </span>
                          </div>
                        </div>
                        
                        {/* Dropdown Items */}
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIdx) => (
                            <motion.div
                              key={subItem.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.03 }}
                            >
                              <Link
                                href={subItem.href}
                                className={`flex items-center justify-between px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] transition-all group hover:bg-card ${
                                  subItem.featured ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="text-[9px] opacity-40">[{subItem.index}]</span>
                                  <span>{subItem.label}</span>
                                  {subItem.featured && (
                                    <span className="px-1.5 py-0.5 text-[8px] bg-foreground/10 rounded">★</span>
                                  )}
                                </span>
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Dropdown Footer */}
                        <div className="px-4 py-2 border-t border-border bg-card/30">
                          <div className="flex items-center justify-between text-[8px] text-muted-foreground/50 uppercase tracking-[0.1em]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                            <span>NAV · {item.id.toUpperCase()}</span>
                            <span>→</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="h-4 w-px bg-border mx-2" />
              
              {/* Assistant Link */}
              <Link
                href="/huix-assistant"
                className="flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground border border-border/50 hover:border-border rounded transition-all group"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <Terminal className="h-3 w-3" />
                <span>ASSISTANT</span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-2 transition-all rounded ${showSearch ? 'bg-foreground text-background' : 'hover:bg-card text-muted-foreground hover:text-foreground'}`}
                  aria-label="Toggle search"
                >
                  <Search className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {showSearch && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-80 bg-background border border-border shadow-lg"
                    >
                      <div className="p-3 border-b border-border">
                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                          <Search className="h-3 w-3" />
                          <span>SEARCH · GLOBAL</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter query..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          className="w-full px-3 py-2 bg-card border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30"
                          style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                        />
                      </div>
                      
                      {searchResults.length > 0 && (
                        <div className="py-2 max-h-64 overflow-y-auto">
                          {searchResults.map((result, idx) => (
                            <Link
                              key={result.url}
                              href={result.url}
                              className="flex items-center justify-between px-4 py-2.5 text-[11px] hover:bg-card transition-colors group"
                              style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                              onClick={() => setShowSearch(false)}
                            >
                              <span className="flex items-center gap-3">
                                <span className="text-[9px] text-muted-foreground/50">[{String(idx + 1).padStart(2, '0')}]</span>
                                <span className="uppercase tracking-[0.1em]">{result.name}</span>
                              </span>
                              <span className="text-[8px] text-muted-foreground/50 px-1.5 py-0.5 bg-card rounded">{result.cat}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                      
                      <div className="px-4 py-2 border-t border-border bg-card/30">
                        <div className="text-[8px] text-muted-foreground/50 uppercase tracking-[0.1em]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                          {searchResults.length} RESULTS · ESC TO CLOSE
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status Indicator - Desktop */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] text-muted-foreground border border-border/50 bg-card/30" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                <Smartphone className="h-3 w-3" />
                <span>{deviceType}</span>
                <span className="inline-block h-[1px] w-2 bg-border" />
                <Wifi className={`h-3 w-3 ${online ? "text-green-500" : "text-red-500"}`} />
                <span>{online ? 'ON' : 'OFF'}</span>
              </div>

              {/* Theme Switcher */}
              <div suppressHydrationWarning>
                <ThemeSwitcher />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 hover:bg-card rounded transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-muted-foreground mb-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <Search className="h-3 w-3" />
                  <span>SEARCH</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter query..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-card border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                />
                {searchResults.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {searchResults.map((result, idx) => (
                      <Link
                        key={result.url}
                        href={result.url}
                        className="flex items-center justify-between px-3 py-2 text-[11px] hover:bg-card transition-colors"
                        style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[9px] text-muted-foreground/50">[{String(idx + 1).padStart(2, '0')}]</span>
                          <span className="uppercase tracking-[0.1em]">{result.name}</span>
                        </span>
                        <span className="text-[8px] text-muted-foreground/50">{result.cat}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex-1 flex items-center gap-2 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] ${
                        pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                      onClick={() => !item.dropdown && setMobileOpen(false)}
                    >
                      <span className="text-[9px] opacity-50">[{item.index}]</span>
                      <span>{item.label}</span>
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                        className="p-2 text-muted-foreground"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden ml-6 border-l border-border"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                            style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-[8px] opacity-40">[{subItem.index}]</span>
                            <span>{subItem.label}</span>
                            {subItem.featured && (
                              <span className="px-1 py-0.5 text-[7px] bg-foreground/10 rounded">★</span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Assistant Link */}
              <Link
                href="/huix-assistant"
                className="flex items-center gap-2 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                onClick={() => setMobileOpen(false)}
              >
                <Terminal className="h-3 w-3" />
                <span>ASSISTANT</span>
              </Link>
              
              {/* Mobile Footer Meta */}
              <div className="pt-4 mt-4 border-t border-border">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.1em] text-muted-foreground/60" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${online ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span>{online ? 'ONLINE' : 'OFFLINE'}</span>
                    <span>·</span>
                    <span>{deviceType}</span>
                  </div>
                  <span>NAV · v1</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
