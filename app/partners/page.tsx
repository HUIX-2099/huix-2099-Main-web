"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Handshake, Megaphone, Code2, GraduationCap, Building2, Mail } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
const CONTACT_EMAIL = "huixtech2099@gmail.com"

const partners = [
  {
    name: "Liberia Digital Insights",
    type: "Media Partner",
    description: "Liberia-based media company providing digital insights and news coverage.",
    since: "2024",
    logo: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/472668615_122151560240327586_8550086386214923478_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SF3lOYooPasQ7kNvwHETaZD&_nc_oc=Adlnny_O4VfMaY4oSmnRImePSdQmTN96-O1O__70etDyi11M6g5oTLH9VGj3toQ6Nn767nX42Gdv1CW9nWJ8kHl-&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=P9zSunhwMw2iQdBnCiPp7w&oh=00_Afg7kzaGkGYB0HoqaKJ0M1HAvm205lSlte8ifArQM5KXvg&oe=691FFB6D",
  },
]

const partnershipTypes = [
  {
    icon: Megaphone,
    title: "Media & Press",
    desc: "Coverage, storytelling, and amplifying African tech innovation to wider audiences.",
  },
  {
    icon: Code2,
    title: "Technology",
    desc: "Joint builds, integrations, and shared engineering on VR/XR, AI, and 3D platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education & Research",
    desc: "Universities and institutions exploring immersive tech, heritage, and digital skills.",
  },
  {
    icon: Building2,
    title: "Enterprise & Government",
    desc: "Organizations adopting immersive and digital solutions across West Africa.",
  },
]

const benefits = [
  "Co-built immersive and digital products",
  "Access to a Liberia-based engineering team",
  "Shared visibility across HUIX-2099 channels",
  "Heritage and culture-driven collaboration",
  "Long-term, outcomes-focused partnerships",
]

export default function PartnersPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "HUIX-2099 — Partnership inquiry",
  )}&body=${encodeURIComponent(
    "Hi HUIX-2099 team,\n\nWe'd like to explore a partnership. Here are some details:\n\n- Organization:\n- Partnership type:\n- What we're proposing:\n\nThanks!",
  )}`

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>P A R T N E R S</span>
            </div>
            <span>CAT NO · PTR-001</span>
          </div>
          <div className="py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4" style={{ fontFamily: monoFont }}>
                [PARTNERS] BUILDING TOGETHER
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[0.9]" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}>
                Partnerships
              </h1>
              <div className="h-px w-20 bg-foreground/20 mb-6" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                We collaborate with media, technology, education, and enterprise partners to drive
                immersive innovation across Africa and beyond.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:flex justify-end">
              <Handshake className="h-40 w-40 text-foreground/[0.06]" strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10" style={{ fontFamily: monoFont }}>
            [0 1] CURRENT PARTNERS
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all"
              >
                {partner.logo && (
                  <div className="mb-5 flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-auto rounded-md object-contain" />
                  </div>
                )}
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-2" style={{ fontFamily: monoFont }}>
                  {partner.type}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{partner.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{partner.description}</p>
                <div className="pt-4 border-t border-border text-xs text-muted-foreground" style={{ fontFamily: monoFont }}>
                  Partnership since {partner.since}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10" style={{ fontFamily: monoFont }}>
            [0 2] WAYS TO PARTNER
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTypes.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card/40 p-6 hover:bg-card transition-colors"
              >
                <t.icon className="h-7 w-7 text-foreground mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.05em" }}>
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-6" style={{ fontFamily: monoFont }}>
              [0 3] WHY PARTNER WITH US
            </div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}>
              Become a Partner
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Interested in collaborating with HUIX-2099? We&apos;re always looking for innovative
              partners to grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-full text-xs uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
                style={{ fontFamily: monoFont }}
              >
                <Mail className="h-4 w-4" />
                Email for info
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border rounded-full text-xs uppercase tracking-[0.12em] hover:bg-background transition-colors"
                style={{ fontFamily: monoFont }}
              >
                Contact page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
