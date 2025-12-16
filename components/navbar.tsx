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
  const [platform, setPlatform] = useState<"windows" | "mac" | "linux" | "android" | "ios" | "unknown">("unknown")
  const [online, setOnline] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState("--:--")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    window.addEventListener("scroll", handleScroll)

    const ua = navigator.userAgent
    if (/mobile/i.test(ua)) setDeviceType("MBL")
    else if (/tablet/i.test(ua)) setDeviceType("TBL")

    // Detect platform/OS
    if (/Android/i.test(ua)) setPlatform("android")
    else if (/iPhone|iPad|iPod/i.test(ua)) setPlatform("ios")
    else if (/Win/i.test(ua)) setPlatform("windows")
    else if (/Mac/i.test(ua)) setPlatform("mac")
    else if (/Linux/i.test(ua)) setPlatform("linux")
    else setPlatform("unknown")

    // Update time every minute
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }
    updateTime()
    const timeInterval = setInterval(updateTime, 60000)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval)
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
        { label: "HUIX HORIZON WHITEPAPER", href: "/huix-horizen/whitepaper", index: "02A", featured: true },
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
        { name: "HUIX Horizon Whitepaper", url: "/huix-horizen/whitepaper", cat: "DOC" },
        { name: "Virtual Past Liberia", url: "/virtual-past-liberia", cat: "PRJ" },
        { name: "Prototypes", url: "/prototypes", cat: "PRJ" },
        { name: "About", url: "/about", cat: "DOC" },
        { name: "Contact", url: "/contact", cat: "DOC" },
      ].filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  const currentYear = new Date().getFullYear()

  // Platform icons (tiny, no bg)
  const PlatformIcon = () => {
    const iconClass = "h-3 w-3 opacity-70"
    switch (platform) {
      case "windows":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
        )
      case "mac":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      case "linux":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.468v.018c.002.135.028.267.076.399.05.117.109.232.18.332-.02.045-.037.088-.064.132-.027.044-.06.09-.086.135a.606.606 0 01-.12-.27.94.94 0 01-.025-.2v-.033c-.002-.073-.002-.129-.002-.2v-.067l.002-.052v-.138a1.82 1.82 0 01.145-.675c.103-.199.254-.467.47-.602.116-.07.235-.133.402-.133zm-2.027.21a1.2 1.2 0 01.49.098.654.654 0 01.147.053c.051.036.1.073.146.114.1.102.17.241.232.4.063.202.093.4.093.598v.2c-.004.133-.03.266-.07.4-.039.133-.1.266-.18.399l-.053.066a.67.67 0 00-.067.063c-.006.004-.014.006-.016.014h-.013a.78.78 0 00-.18.048c.024-.065.04-.135.06-.201.033-.135.04-.266.04-.4v-.266a1.78 1.78 0 00-.073-.4c-.04-.13-.09-.203-.168-.333a.593.593 0 00-.241-.135.468.468 0 00-.193-.032c-.18 0-.34.134-.433.27-.093.132-.133.266-.173.4-.036.133-.066.266-.066.399v.465c0 .066.003.133.006.2a.74.74 0 00.02.133c-.1-.067-.134-.133-.2-.2-.066-.066-.1-.133-.133-.2a.96.96 0 01-.133-.4c-.006-.133-.006-.266.027-.4.04-.132.09-.332.203-.465a.86.86 0 01.406-.333 1.42 1.42 0 01.49-.098z"/>
          </svg>
        )
      case "android":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M17.523 15.341c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906zm-11.046 0c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906zm11.398-5.789l1.997-3.458a.416.416 0 00-.152-.567.416.416 0 00-.567.152l-2.022 3.502A12.216 12.216 0 0012 8.421c-1.823 0-3.541.406-5.131 1.12L4.847 6.039a.416.416 0 00-.567-.152.416.416 0 00-.152.567l1.997 3.458C2.688 12.07.5 15.994.5 20.5h23c0-4.506-2.188-8.43-5.625-10.588z"/>
          </svg>
        )
      case "ios":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      default:
        return <Terminal className="h-3 w-3 opacity-70" />
    }
  }

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
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${mounted && online ? 'bg-green-500' : mounted ? 'bg-red-500' : 'bg-muted-foreground'}`} />
                {mounted ? (online ? 'ONLINE' : 'OFFLINE') : '---'}
              </span>
              <span className="inline-block h-[1px] w-4 bg-border" />
              <span className="flex items-center gap-1.5">
                {mounted && <PlatformIcon />}
                <span>{mounted ? deviceType : '---'}</span>
              </span>
              <span className="inline-block h-[1px] w-4 bg-border" />
              <span suppressHydrationWarning>{currentTime}</span>
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
                  className="whitespace-nowrap leading-none text-sm sm:text-base font-bold transition-all duration-300"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}
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

              {/* OS Status Indicator - All Screens */}
              <div className="flex items-center gap-1.5 px-2 py-1.5 text-[9px] text-muted-foreground border border-border/50 bg-card/50 rounded" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                {mounted ? <PlatformIcon /> : <Smartphone className="h-3 w-3 opacity-50" />}
                <span className="hidden sm:inline">{mounted ? deviceType : '---'}</span>
                <span className={`inline-block h-2 w-2 rounded-full ${mounted && online ? 'bg-green-500' : mounted ? 'bg-red-500' : 'bg-muted-foreground/50'}`} />
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
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${mounted && online ? 'bg-green-500' : mounted ? 'bg-red-500' : 'bg-muted-foreground'}`} />
                    <span>{mounted ? (online ? 'ONLINE' : 'OFFLINE') : '---'}</span>
                    <span>·</span>
                    {mounted && <PlatformIcon />}
                    <span>{mounted ? deviceType : '---'}</span>
                  </div>
                  <span suppressHydrationWarning>{currentTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
