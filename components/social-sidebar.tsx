"use client"

import { Twitter, Instagram, Facebook, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Twitter, url: "https://x.com/Huix2099", label: "Twitter" },
  { icon: Instagram, url: "https://www.instagram.com/huix.2099/", label: "Instagram" },
  { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61572485499528", label: "Facebook" },
  { icon: Youtube, url: "https://www.youtube.com/@HUIX-2099", label: "YouTube" },
]

export function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="w-px h-12 bg-border" />
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-4 w-4" />
        </a>
      ))}
      <div className="w-px h-12 bg-border" />
    </div>
  )
}
