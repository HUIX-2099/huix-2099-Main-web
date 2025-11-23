"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeSwitcher } from "./theme-switcher"
import { ChevronDown, Menu, X, Wifi, Smartphone, Search, Usb } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [deviceType, setDeviceType] = useState("desktop")
  const [online, setOnline] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [usbConnected, setUsbConnected] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    const handleUSBConnect = () => setUsbConnected(true)
    const handleUSBDisconnect = () => setUsbConnected(false)
    window.addEventListener("connect", handleUSBConnect)
    window.addEventListener("disconnect", handleUSBDisconnect)

    const ua = navigator.userAgent
    if (/mobile/i.test(ua)) setDeviceType("mobile")
    else if (/tablet/i.test(ua)) setDeviceType("tablet")

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("connect", handleUSBConnect)
      window.removeEventListener("disconnect", handleUSBDisconnect)
    }
  }, [])

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setShowSearch(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const dropdowns = {
    home: ["FAQ", "Why Choose Us", "Documentation"],
    projects: ["Gallery", "Case Studies", "Technologies"],
    about: ["Our Story", "Team", "Mission & Values"],
  }

  const searchResults = searchQuery.toLowerCase().trim()
    ? [
        { name: "HUIX-HORIZEN", url: "/huix-horizen" },
        { name: "Virtual Past Liberia", url: "/virtual-past-liberia" },
      ].filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="whitespace-nowrap flex-shrink-0 leading-none text-sm sm:text-base md:text-lg tracking-[0.18em] sm:tracking-[0.24em] max-w-[50vw] truncate"
              style={{ fontFamily: 'Mohican, sans-serif', color: theme === 'dark' ? '#e5e5e5' : '#333333' }}
            >
              H U I X - 2 0 9 9
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("home")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors" aria-expanded={openDropdown === "home"}
              >
                Home
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "home" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "home" && (
                <div className="absolute left-0 mt-0 w-56 bg-background border-l border-r border-b border-border py-3 px-4 shadow-lg">
                  {dropdowns.home.map((item, idx) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {`${String(idx + 1).padStart(2, "0")} · ${item}`}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors" aria-expanded={openDropdown === "about"}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "about" && (
                <div className="absolute left-0 mt-0 w-56 bg-background border-l border-r border-b border-border py-3 px-4 shadow-lg">
                  <Link
                    href="/team"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    00 · Team
                  </Link>
                  {dropdowns.about.map((item, idx) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={`/about#${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                        className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {`${String(idx + 1).padStart(2, "0")} · ${item}`}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("projects")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors" aria-expanded={openDropdown === "projects"}
              >
                Projects
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "projects" && (
                <div className="absolute left-0 mt-0 w-56 bg-background border-l border-r border-b border-border py-3 px-4 shadow-lg">
                  <Link
                    href="/projects"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    01 · Projects
                  </Link>
                  <Link
                    href="/huix-horizen"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    02 · HUIX-HORIZEN
                  </Link>
                  <Link
                    href="/virtual-past-liberia"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    03 · Virtual Past Liberia
                  </Link>
                  <Link
                    href="/prototypes"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    04 · Prototypes
                  </Link>
                  <Link
                    href="http://localhost:3000/gallery"
                    className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-border pb-2 mb-2"
                  >
                    05 · Gallery
                  </Link>
                  {dropdowns.projects.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={`/projects?type=${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/huix-assistant"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              HUIX Assistant
            </Link>
            <div className="w-px h-6 bg-border"></div>
            <Link
              href="/prototypes"
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Prototypes
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle search"
                aria-expanded={showSearch}
              >
                <Search className="h-5 w-5" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-3">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full px-3 py-2 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50"
                  />
                  {searchResults.length > 0 && (
                    <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                      {searchResults.map((result) => (
                        <Link
                          key={result.url}
                          href={result.url}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded transition-colors"
                          onClick={() => setShowSearch(false)}
                        >
                          {result.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5">
              <Smartphone className="h-3.5 w-3.5" />
              <span className="capitalize">{deviceType}</span>
              <div className="w-px h-3 bg-border" />
              <Wifi className={`h-3.5 w-3.5 ${online ? "text-green-500" : "text-red-500"}`} />
              {usbConnected && (
                <>
                  <div className="w-px h-3 bg-border" />
                  <Usb className="h-3.5 w-3.5 text-blue-500" aria-label="USB Connected" />
                </>
              )}
            </div>

            <div className="flex md:hidden items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-2 py-1">
              <Smartphone className="h-3 w-3" />
              <span className="capitalize">{deviceType.charAt(0)}</span>
              <Wifi className={`h-3 w-3 ${online ? "text-green-500" : "text-red-500"}`} />
              {usbConnected && <Usb className="h-3 w-3 text-blue-500" />}
            </div>

            <div suppressHydrationWarning>
              <ThemeSwitcher />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            <div className="pt-4 space-y-3">
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50"
                />
                {searchResults.length > 0 && (
                  <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                    {searchResults.map((result) => (
                      <Link
                        key={result.url}
                        href={result.url}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {result.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Home
              </Link>
              
              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors w-full"
                  aria-expanded={openDropdown === "about"}
                >
                  About Us
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "about" && (
                  <div className="pl-8 space-y-1">
                    <Link
                      href="/team"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      00 · Team
                    </Link>
                    {dropdowns.about.map((item, idx) => (
                      <Link
                        key={item}
                        href={`/about#${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                        className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {`${String(idx + 1).padStart(2, "0")} · ${item}`}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Projects Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "projects" ? null : "projects")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors w-full"
                  aria-expanded={openDropdown === "projects"}
                >
                  Projects
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "projects" && (
                  <div className="pl-8 space-y-1">
                    <Link
                      href="/projects"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      01 · Projects
                    </Link>
                    <Link
                      href="/huix-horizen"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      02 · HUIX-HORIZEN
                    </Link>
                    <Link
                      href="/virtual-past-liberia"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      03 · Virtual Past Liberia
                    </Link>
                    <Link
                      href="/prototypes"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      04 · Prototypes
                    </Link>
                    <Link
                      href="http://localhost:3000/gallery"
                      className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                    >
                      05 · Gallery
                    </Link>
                    {dropdowns.projects.map((item) => (
                      <Link
                        key={item}
                        href={`/projects?type=${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-xs text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/huix-assistant"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                HUIX Assistant
              </Link>
              
              <Link
                href="/prototypes"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Prototypes
              </Link>
              
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
