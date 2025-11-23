"use client"

import { useTheme } from "./theme-provider"
import Link from "next/link"
import { Twitter, Youtube, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const { theme } = useTheme()

  const socialLinks = [
    { icon: Twitter, url: "https://x.com/Huix2099", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/huix.2099/", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61572485499528", label: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@HUIX-2099", label: "YouTube" },
  ]

  return (
    <footer className="py-16 px-4 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Series Header */}
        <div className="mb-12 border-b border-border/70">
          <div className="flex items-end justify-between pb-6">
            <div className="flex items-center gap-6">
              <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Footer</div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>H U I X - 2 0 9 9</h2>
              </div>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 01 · v1</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">HUIX-2099</h3>
            <p className="text-sm text-muted-foreground">
              Building the digital future of Africa through VR, XR, AR, and AI innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/huix-horizen" className="hover:text-foreground transition-colors font-semibold">
                  ✦ HUIX-HORIZEN
                </Link>
              </li>
              <li>
                <Link href="/virtual-past-liberia" className="hover:text-foreground transition-colors font-semibold">
                  ✦ Virtual Past Liberia
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about?section=team" className="hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-foreground transition-colors">
                  Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 HUIX-2099. All rights reserved. | Designed & Built in Monrovia, Liberia</p>
          <p className="mt-1">Designed and Engineered by Victor E. Coleman</p>
          <p className="mt-1">
            <a href="mailto:huixtech2099@gmail.com" className="underline hover:text-foreground">huixtech2099@gmail.com</a>
            {" · "}
            <a href="tel:+231776800064" className="underline hover:text-foreground">+231776800064</a>
            {" · "}
            <a href="tel:+231770499140" className="underline hover:text-foreground">+231770499140</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
