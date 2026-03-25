"use client"

import { useTheme } from "./theme-provider"
import Link from "next/link"
import { Twitter, Youtube, Instagram, Facebook } from "lucide-react"
import { ParallaxReveal, ParallaxText, ParallaxStagger, ParallaxStaggerItem } from "./parallax"

export function Footer() {
  const { resolvedTheme } = useTheme()

  const socialLinks = [
    { icon: Twitter, url: "https://x.com/Huix2099", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/huix.2099/", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61572485499528", label: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@HUIX-2099", label: "YouTube" },
  ]

  const sansFont = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#111] border-t border-white/5" style={{ fontFamily: sansFont }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-8 pb-4">
        
        {/* Logo/Brand */}
        <div className="mb-8 text-2xl font-bold tracking-[0.15em] text-white uppercase text-center" style={{ fontFamily: 'Mohican, sans-serif' }}>
          HUIX-2099
          <div className="text-[6px] text-white/50 tracking-[0.3em] mt-1 font-mono">OFFICIAL WEBSITE</div>
        </div>
        
        {/* Horizontal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-8 text-xs font-semibold uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/showcase" className="hover:text-white transition-colors">Showcase</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a 
              key={social.label} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-white/30 text-center max-w-2xl mx-auto tracking-wider leading-relaxed">
          Designed & Engineered by Victor E. Coleman. All Rights Reserved.<br />
          HUIX-2099, Monrovia, Liberia. Email: huixtech2099@gmail.com Call Us Now: +231 776 800 064
        </div>
        
      </div>
    </footer>
  )
}
