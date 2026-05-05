"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import { ChevronDown, Menu, X, Wifi, Smartphone, Search, Terminal, ArrowRight, Home, Info, Building2, Phone, MessageSquare, Facebook } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useWebXR } from "@/hooks/use-webxr"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [deviceType, setDeviceType] = useState("DSK")
  const [platform, setPlatform] = useState<"windows" | "win11" | "mac" | "linux" | "android" | "ios" | "unknown">("unknown")
  const [online, setOnline] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState("--:--")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const { isVRSupported, isActualVRHeadset, deviceType: vrDeviceType, deviceName, enterVR, isInVR } = useWebXR()

  // Google Cardboard VR Icon
  const CardboardIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M10 18h4" />
      <path d="M12 6v-2" />
    </svg>
  )

  const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )

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
    const checkOS = async () => {
      let detectedOS: "windows" | "win11" | "mac" | "linux" | "android" | "ios" | "unknown" = "unknown"
      if (/Android/i.test(ua)) detectedOS = "android"
      else if (/iPhone|iPad|iPod/i.test(ua)) detectedOS = "ios"
      else if (/Mac/i.test(ua)) detectedOS = "mac"
      else if (/Linux/i.test(ua)) detectedOS = "linux"
      else if (/Win/i.test(ua)) {
        detectedOS = "windows";
        // Attempt Windows 11 detection
        if ('userAgentData' in navigator) {
          try {
            const uaData = await (navigator as any).userAgentData.getHighEntropyValues(['platformVersion']);
            if (uaData && uaData.platformVersion) {
              const majorVersion = parseInt(uaData.platformVersion.split('.')[0]);
              if (majorVersion >= 13) {
                detectedOS = "win11";
              }
            }
          } catch (e) {
            // fallback to "windows"
          }
        }
      }
      setPlatform(detectedOS)
    }
    checkOS()

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
    setOpenDropdown(null)
    setShowSearch(false)
  }, [pathname])

  const navItems = [
    {
      id: "home",
      label: "HOME",
      href: "/",
      index: "00",
      icon: Home,
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
      icon: Info,
      dropdown: [
        { label: "OUR STORY", href: "/about#our-story", index: "01" },
        { label: "TEAM", href: "/team", index: "02" },
        { label: "MISSION & VALUES", href: "/about#mission-and-values", index: "03" },
      ]
    },
    {
      id: "company",
      label: "COMPANY",
      href: "#",
      index: "02",
      icon: Building2,
      mega: true,
    },
    {
      id: "contact",
      label: "CONTACT",
      href: "/contact",
      index: "03",
      icon: Phone,
    },
  ]


  // Company mega dropdown: Products, Projects, Pricing (with sub-links)
  const companySections = [
    {
      label: "PRODUCTS",
      href: "/products",
      links: [
        { label: "ALL PRODUCTS", href: "/products", index: "01" },
        { label: "SOFTWARE", href: "/products#Software", index: "02" },
        { label: "WEBSITES", href: "/products#Website", index: "03" },
        { label: "APPS", href: "/products#App", index: "04" },
        { label: "GAMES", href: "/products#Game", index: "05", featured: true },
      ],
    },

    {
      label: "PRICING",
      href: "/pricing",
      links: [{ label: "PRICING", href: "/pricing", index: "01" }],
    },
  ]

  const searchResults = searchQuery.toLowerCase().trim()
    ? [
        { name: "Products", url: "/products", cat: "PRD" },
        { name: "HUIX-THEME", url: "/products/huix-theme", cat: "PRD" },
        { name: "Huixor", url: "/products/huixor", cat: "PRD" },
        { name: "Software Products", url: "/products#Software", cat: "PRD" },
        { name: "Website Products", url: "/products#Website", cat: "PRD" },
        { name: "App Products", url: "/products#App", cat: "PRD" },
        { name: "Game Products", url: "/products#Game", cat: "PRD" },
        { name: "About", url: "/about", cat: "DOC" },
        { name: "Pricing", url: "/pricing", cat: "DOC" },
        { name: "Contact", url: "/contact", cat: "DOC" },
      ].filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  // Platform icons (tiny, no bg)
  const PlatformIcon = () => {
    const iconClass = "h-3 w-3 opacity-70"
    switch (platform) {
      case "win11":
      case "windows":
        return (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 opacity-90">
            <path d="M2.5 2.5H11.5V11.5H2.5V2.5Z" fill="#0078D4"/>
            <path d="M12.5 2.5H21.5V11.5H12.5V2.5Z" fill="#0078D4"/>
            <path d="M2.5 12.5H11.5V21.5H2.5V12.5Z" fill="#0078D4"/>
            <path d="M12.5 12.5H21.5V21.5H12.5V12.5Z" fill="#0078D4"/>
          </svg>
        )
      case "mac":
        return (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 opacity-90" fill="#A3AAAE">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      case "linux":
        return (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 opacity-90" fill="#FCC624">
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.468v.018c.002.135.028.267.076.399.05.117.109.232.18.332-.02.045-.037.088-.064.132-.027.044-.06.09-.086.135a.606.606 0 01-.12-.27.94.94 0 01-.025-.2v-.033c-.002-.073-.002-.129-.002-.2v-.067l.002-.052v-.138a1.82 1.82 0 01.145-.675c.103-.199.254-.467.47-.602.116-.07.235-.133.402-.133zm-2.027.21a1.2 1.2 0 01.49.098.654.654 0 01.147.053c.051.036.1.073.146.114.1.102.17.241.232.4.063.202.093.4.093.598v.2c-.004.133-.03.266-.07.4-.039.133-.1.266-.18.399l-.053.066a.67.67 0 00-.067.063c-.006.004-.014.006-.016.014h-.013a.78.78 0 00-.18.048c.024-.065.04-.135.06-.201.033-.135.04-.266.04-.4v-.266a1.78 1.78 0 00-.073-.4c-.04-.13-.09-.203-.168-.333a.593.593 0 00-.241-.135.468.468 0 00-.193-.032c-.18 0-.34.134-.433.27-.093.132-.133.266-.173.4-.036.133-.066.266-.066.399v.465c0 .066.003.133.006.2a.74.74 0 00.02.133c-.1-.067-.134-.133-.2-.2-.066-.066-.1-.133-.133-.2a.96.96 0 01-.133-.4c-.006-.133-.006-.266.027-.4.04-.132.09-.332.203-.465a.86.86 0 01.406-.333 1.42 1.42 0 01.49-.098z"/>
          </svg>
        )
      case "android":
        return (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 opacity-90" fill="#3DDC84">
            <path d="M17.523 15.341c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906zm-11.046 0c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906zm11.398-5.789l1.997-3.458a.416.416 0 00-.152-.567.416.416 0 00-.567.152l-2.022 3.502A12.216 12.216 0 0012 8.421c-1.823 0-3.541.406-5.131 1.12L4.847 6.039a.416.416 0 00-.567-.152.416.416 0 00-.152.567l1.997 3.458C2.688 12.07.5 15.994.5 20.5h23c0-4.506-2.188-8.43-5.625-10.588z"/>
          </svg>
        )
      case "ios":
        return (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 opacity-90" fill="#A3AAAE">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      default:
        return <Terminal className="h-3 w-3 opacity-70" />
    }
  }

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/98 backdrop-blur-md shadow-sm' : 'bg-background/95 backdrop-blur'}`}>
        {/* Main Nav - onMouseLeave here so Company mega dropdown stays open when moving from link to panel */}
      <div className="border-b border-border relative" onMouseLeave={() => setOpenDropdown(null)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="flex items-center gap-2">
                <div
                  className="whitespace-nowrap leading-none text-sm sm:text-base font-bold transition-all duration-300"
                  style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.15em' }}
                >
                  HUIX-2099
                </div>
              </div>
              {/* Dynamic Tagline or Logo */}
              {pathname === "/products/monrovia-hustle" && mounted ? (
                <>
                  <div className="flex h-3 sm:h-4 w-px bg-border" />
                  <div className="flex text-[9px] uppercase tracking-[0.1em] text-muted-foreground flex-shrink-0" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    <div className="relative w-24 sm:w-28 h-5 sm:h-6 flex items-center">
                      <Image
                        src={resolvedTheme === 'dark' ? '/products/Monrovia_hustle_Demo_Campane/dark_mode_logo.png' : '/products/Monrovia_hustle_Demo_Campane/light_mode_logo.png'}
                        alt="Monrovia Hustle 3D"
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden sm:block h-4 w-px bg-border" />
                  <div className="hidden sm:block text-[9px] uppercase tracking-[0.1em] text-muted-foreground flex-shrink-0" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
                    <span>TECH · LBR</span>
                  </div>
                </>
              )}
            </Link>

            {/* Desktop Nav Links - onMouseLeave is on parent (border-b) so Company mega stays open when hovering dropdown */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => (item.dropdown || item.mega) && setOpenDropdown(item.id)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.mega) e.preventDefault()
                    }}
                    className={`font-bold flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 xl:px-4 py-2 text-[10px] lg:text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.14em] transition-colors group ${
                      pathname === item.href || (item.href !== "#" && pathname.startsWith(item.href + "/"))
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}
                  >
                    <span className="text-[8px] lg:text-[9px] opacity-50 hidden xl:inline">[{item.index}]</span>
                    {item.icon && <item.icon className="w-3.5 h-3.5 opacity-80" />}
                    <span>{item.label}</span>
                    {(item.dropdown || item.mega) && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown (regular items only) */}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-0 w-64 bg-background border border-border shadow-lg"
                      >
                        <div className="px-4 py-2 border-b border-border bg-card/50">
                          <div className="flex items-center justify-between" style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}>
                            <span className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                              {item.label} · INDEX
                            </span>
                            <span className="text-[9px] text-muted-foreground/60">
                              {item.dropdown.length} ITEMS
                            </span>
                          </div>
                        </div>
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIdx) => (
                            <motion.div
                              key={subItem.href + subItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.03 }}
                            >
                              <Link
                                href={subItem.href}
                                className={`flex items-center justify-between px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] transition-all group hover:bg-card ${
                                  (subItem as any).featured ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                                style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="text-[9px] opacity-40">[{subItem.index}]</span>
                                  <span>{subItem.label}</span>
                                  {(subItem as any).featured && (
                                    <span className="px-1.5 py-0.5 text-[8px] bg-foreground/10 rounded">★</span>
                                  )}
                                </span>
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-4 py-2 border-t border-border bg-card/30">
                          <div className="flex items-center justify-between text-[8px] text-muted-foreground/50 uppercase tracking-[0.1em]" style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}>
                            <span>NAV · {item.id.toUpperCase()}</span>
                            <span>→</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="h-4 w-px bg-border mx-1 lg:mx-2" />
              
              {/* Google Link */}
              <Link
                href="https://www.google.com/search?q=HUIX+2099&sca_esv=1f81df499d5b0247&biw=1024&bih=1111&sxsrf=ANbL-n4slGxCE_C-rtdNLJOQeKt7-h7GlA%3A1774305642356&ei=asHBaY2yFZijhbIPmP-z-AI&ved=0ahUKEwiNj6TMi7eTAxWYUUEAHZj_DC8Q4dUDCBE&uact=5&oq=HUIX+2099&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIglIVUlYIDIwOTkyBBAjGCcyBBAjGCcyBBAjGCcyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSOMcUABY8xpwAHgAkAEAmAH-A6AB0hqqAQU0LTUuMrgBA8gBAPgBAZgCB6ACmhvCAgoQIxiABBgnGIoFwgILEAAYgAQYkQIYigXCAhEQLhiABBixAxjRAxiDARjHAcICDhAuGIAEGLEDGNEDGMcBwgIIEC4YgAQYsQPCAgsQABiABBixAxiDAcICCxAuGIAEGJECGIoFwgIKEC4YgAQYQxiKBcICChAAGIAEGEMYigXCAg4QLhiABBixAxiDARiKBcICERAAGIAEGJECGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgUQLhiABMICCBAAGIAEGIsDwgIREC4YgAQYogUYqAMYiwMYnQPCAgwQABiABBixAxgKGAvCAgkQABiABBgKGAvCAgwQLhiABBjlBBgKGAuYAwCSBwM0LTegB6JusgcDNC03uAeaG8IHBzAuMS4zLjPIBzyACAA&sclient=gws-wiz-serp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 py-1.5 text-[9px] lg:text-[10px] uppercase tracking-[0.1em] lg:tracking-[0.12em] text-muted-foreground hover:text-foreground border border-border/50 hover:border-border rounded transition-all group"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                <GoogleIcon className="h-3 w-3" />
                <span className="hidden xl:inline">FIND ON GOOGLE</span>
                <span className="xl:hidden">GOOGLE</span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Search */}
              <div className="relative hidden lg:block">
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

              {/* VR Button - Shows ONLY on actual VR headsets (not laptops, phones, TVs) */}
              {mounted && isActualVRHeadset && isVRSupported && (
                <button
                  onClick={enterVR}
                  className={`flex items-center gap-1.5 px-2 py-1.5 text-[9px] border rounded transition-all ${
                    isInVR 
                      ? 'bg-foreground text-background border-foreground' 
                      : 'text-muted-foreground border-border/50 bg-card/50 hover:border-foreground/50 hover:text-foreground'
                  }`}
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                  title={deviceName || "Enter VR Mode"}
                >
                  <CardboardIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline uppercase tracking-wider">
                    {isInVR ? 'IN VR' : 'VR'}
                  </span>
                  {vrDeviceType && (
                    <span className={`inline-block h-2 w-2 rounded-full ${isInVR ? 'bg-background animate-pulse' : 'bg-green-500'}`} />
                  )}
                </button>
              )}

              {/* Theme Switcher */}
              <div suppressHydrationWarning>
                <ThemeSwitcher />
              </div>

            </div>
          </div>
        </div>

        {/* Company mega dropdown - full navbar width, logo left / links right */}
        <AnimatePresence>
          {openDropdown === "company" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full -mt-px z-50 bg-background border-x border-b border-border shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center lg:justify-start">
                {/* Right: Products, Projects, Pricing sections */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl">
                  {companySections.map((section) => (
                    <div key={section.label}>
                      <Link
                        href={section.href}
                        className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground border-b border-border pb-1.5 mb-3 inline-block"
                        style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}
                      >
                        {section.label}
                      </Link>
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              href={link.href}
                              className={`flex items-center gap-2 py-1.5 text-[11px] uppercase tracking-[0.1em] transition-colors hover:text-foreground ${
                                link.featured ? "text-foreground" : "text-muted-foreground"
                              }`}
                              style={{ fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace" }}
                            >
                              <span className="text-[9px] opacity-50">[{link.index}]</span>
                              <span>{link.label}</span>
                              {link.featured && (
                                <span className="px-1 py-0.5 text-[7px] bg-foreground/10 rounded">★</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>

    {/* Mobile Bottom Tab Bar (lg:hidden) */}
    <div
      className="mobile-bottom-tab-bar lg:hidden fixed z-[110] max-w-md rounded-2xl border border-border/40 bg-gradient-to-b from-card/40 to-background/90 shadow-2xl backdrop-blur-2xl overflow-hidden"
      style={{
        left: "max(1rem, env(safe-area-inset-left, 0px))",
        right: "max(1rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="flex items-stretch justify-between gap-0 px-0.5 py-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "#" && pathname.startsWith(item.href + "/"));
          return (
              <Link 
                key={item.id} 
                href={item.href}
                className={`flex flex-1 flex-col items-center justify-center min-w-0 px-0.5 py-1 transition-all duration-300 relative ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="mobileDockTabGlow"
                    className="absolute inset-[2px] bg-foreground/5 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              {item.icon && (
                <motion.div
                  animate={isActive ? { y: -1, scale: 1.1 } : { y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <item.icon className="h-5 w-5 mb-1.5" />
                </motion.div>
              )}
              <span
                className="w-full max-w-full truncate text-center text-[7px] font-bold uppercase tracking-wider xs:text-[8px]"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </>
  )
}
