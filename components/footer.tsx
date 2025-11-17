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
        </div>
      </div>
    </footer>
  )
}
