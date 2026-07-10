"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterLink {
  title: string
  href: string
  external?: boolean
}

interface FooterLinkGroup {
  label: string
  links: FooterLink[]
}

const STUDIO_EMAIL = "huixtech2099@gmail.com"
const STUDIO_PHONE = "+231 776 800 064"

const socialLinks = [
  { title: "X / Twitter", href: "https://x.com/Huix2099", icon: Twitter },
  { title: "Instagram", href: "https://www.instagram.com/huix.2099/", icon: Instagram },
  { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61572485499528", icon: Facebook },
  { title: "YouTube", href: "https://www.youtube.com/@HUIX-2099", icon: Youtube },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
    icon: Linkedin,
  },
] as const

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Products",
    links: [
      { title: "All products", href: "/products" },
      { title: "HUIXOR", href: "/products/huixor" },
      { title: "HUIX-THEME", href: "/products/huix-theme" },
      { title: "Monrovia Hustle 3D", href: "/products/monrovia-hustle" },
      { title: "Monrovia Hustle · Independence Day", href: "/products/monrovia-hustle-independence-day" },
      { title: "Monrovia Hustle · Concept", href: "/products/monrovia-hustle/concept" },
      { title: "HUIX Character Motion", href: "/products/huix-character-motion" },
      { title: "Typelr", href: "/products/typelr" },
    ],
  },
  {
    label: "Studio",
    links: [
      { title: "About HUIX-2099", href: "/about" },
      { title: "Team", href: "/team" },
      { title: "Showcase", href: "/showcase" },
      { title: "Research", href: "/research" },
      { title: "Partners", href: "/partners" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Support",
    links: [
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
      { title: "Email studio", href: `mailto:${STUDIO_EMAIL}`, external: true },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy policy", href: "/policy" },
      { title: "Victor Edet Coleman", href: "/team/victor" },
      { title: "HUIX-2099 on Google", href: "https://www.google.com/search?q=HUIX+2099", external: true },
    ],
  },
]

type StickyFooterProps = React.ComponentProps<"footer">

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[720px] w-full bg-background", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[720px] w-full bg-background">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 border-t border-border bg-background px-4 py-8 md:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 isolate z-0 contain-strict">
              <div className="absolute top-0 left-0 h-80 w-140 -translate-y-[87.5%] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(var(--foreground)/0.06)_0,hsl(var(--foreground)/0.02)_50%,hsl(var(--foreground)/0.01)_80%)]" />
              <div className="absolute top-0 left-0 h-80 w-60 -translate-y-[87.5%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)] [translate:5%_-50%]" />
              <div className="absolute top-0 left-0 h-80 w-60 -translate-y-[87.5%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)]" />
            </div>

            <div className="relative z-10 mt-10 flex flex-col gap-10 md:flex-row xl:mt-0">
              <AnimatedContainer className="min-w-2xs w-full max-w-sm space-y-4">
                <Link href="/" className="inline-flex items-center gap-2.5">
                  <img
                    src="/icons/browser-icon.png"
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 rounded-md object-contain"
                  />
                  <span
                    className="text-lg font-bold uppercase tracking-[0.12em] text-foreground"
                    style={{ fontFamily: "Mohican, sans-serif" }}
                  >
                    HUIX-2099
                  </span>
                </Link>
                <p className="text-sm leading-relaxed text-muted-foreground md:mt-0">
                  Liberia-based studio building VR, XR, AR, AI, and immersive software — from Monrovia Hustle 3D and HUIXOR to
                  themes, tools, and narrative worlds for Africa&apos;s digital future.
                </p>
                <p className="text-xs text-muted-foreground">
                  <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-foreground transition-colors">
                    {STUDIO_EMAIL}
                  </a>
                  <span className="mx-1.5 text-border">·</span>
                  <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                    {STUDIO_PHONE}
                  </a>
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Button
                        key={link.title}
                        size="icon"
                        variant="outline"
                        className="size-8 border-border/60"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.title}
                        >
                          <Icon className="size-4" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full min-w-0 md:max-w-[11rem] lg:max-w-none">
                  <div className="mb-6 md:mb-0">
                    <h3
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      {group.label}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                              className="inline-flex items-center transition-all duration-300 hover:text-foreground"
                            >
                              {link.title}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="inline-flex items-center transition-all duration-300 hover:text-foreground"
                            >
                              {link.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-sm text-muted-foreground md:flex-row">
              <p>© {new Date().getFullYear()} HUIX-2099 · Victor Edet Coleman · Monrovia, Liberia</p>
              <p className="text-xs uppercase tracking-wider">Designed &amp; engineered at HUIX-2099</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode
  delay?: number
}

function AnimatedContainer({ delay = 0.1, children, className, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
