"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { TeamMember } from "@/app/team/data"
import { QRCode } from "@/components/qr-code"
import { Barcode } from "@/components/barcode"

const cardClassName =
  "group flex flex-col rounded-[24px] sm:rounded-[32px] bg-card border border-border/60 hover:border-foreground/20 overflow-hidden shadow-sm hover:shadow-xl transition-all w-full cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-foreground/20 h-full"

type MemberCardProps = {
  variant: "member"
  member: TeamMember
  index: number
  /** e.g. Monrovia Hustle creator line */
  taglineOverride?: string
  /** Use · separators — first two segments show on photo overlay */
  focusOverride?: string
}

type FundersCardProps = {
  variant: "funders"
  index: number
  title: string
  badge: string
  locationLine: string
  tagline: string
  email: string
  qrValue: string
  barcodeValue: string
  href: string
  ctaLabel: string
  focusTags: string[]
  imageSrc: string
  imageAlt: string
}

export type TeamProfileCardProps = MemberCardProps | FundersCardProps

export function TeamProfileCard(props: TeamProfileCardProps) {
  const { index } = props
  const imageFirst = index % 2 !== 0

  if (props.variant === "member") {
    const { member, taglineOverride, focusOverride } = props
    const tagline = taglineOverride ?? member.tagline
    const focusStr = focusOverride ?? member.focus
    const focusParts = focusStr.split("·").map((s) => s.trim())

    const TextContent = () => (
      <div className="relative z-10 flex min-h-[250px] w-full flex-1 flex-col justify-between bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="truncate text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">{member.name}</h3>
              <span className="shrink-0 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium tracking-wider text-foreground backdrop-blur-sm">
                {member.badge}
              </span>
            </div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {member.location} • {member.role}
            </p>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{tagline}</p>
          </div>
          <div className="shrink-0 border border-border/80 bg-background p-1.5 shadow-sm">
            <QRCode value={`https://huix.amaratech.io/team/${member.id}`} size={56} className="rounded-none opacity-90" />
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-border/40 pt-6">
          <div className="flex min-w-0 flex-col gap-3 pr-4">
            <div className="relative flex items-center gap-3 before:absolute before:inset-y-0 before:-left-3 before:w-1 before:bg-foreground/20">
              <div className="flex flex-col">
                <Barcode value={`HUIX-${member.id.toUpperCase()}`} className="h-6 max-w-[100px] opacity-80 mix-blend-multiply grayscale dark:mix-blend-lighten" />
                <div className="mt-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500/70" />
                  ID-VERIFIED
                </div>
              </div>
            </div>
            <div className="mt-1 truncate text-sm font-semibold text-foreground">{member.email}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full bg-foreground py-1.5 pl-4 pr-1.5 text-background shadow-md transition-colors hover:bg-foreground/90 group-hover:bg-primary group-hover:text-primary-foreground">
            <span className="text-sm font-semibold">View</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background group-hover:bg-primary-foreground">
              <ArrowUpRight className="h-3.5 w-3.5 text-foreground group-hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    )

    const ImageContent = () => (
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-muted sm:h-[320px]">
        <motion.img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className={`absolute inset-x-4 z-10 flex items-start justify-between ${index % 2 === 0 ? "bottom-4" : "top-4"}`}>
          <div className="flex flex-wrap gap-2">
            {focusParts.slice(0, 2).map((cat, i) => (
              <span
                key={i}
                className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 shadow-sm backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-black/40 px-2 py-1 text-xs font-bold text-white drop-shadow-lg backdrop-blur-sm">
            ★ {member.id === "victor" ? "5.0" : "4.8"}
          </span>
        </div>

        <div
          className={`absolute left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-md ${index % 2 === 0 ? "top-4" : "bottom-4"}`}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full bg-white ${i === 0 ? "opacity-100" : "opacity-50"}`} />
          ))}
        </div>
      </div>
    )

    return (
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
        <Link href={`/team/${member.id}`} className={cardClassName}>
          {imageFirst ? (
            <>
              <ImageContent />
              <TextContent />
            </>
          ) : (
            <>
              <TextContent />
              <ImageContent />
            </>
          )}
        </Link>
      </motion.div>
    )
  }

  const f = props
  const TextContent = () => (
    <div className="relative z-10 flex min-h-[250px] w-full flex-1 flex-col justify-between bg-card p-6 sm:p-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">{f.title}</h3>
            <span className="shrink-0 rounded-full border border-[#bf0d3e]/40 bg-[#bf0d3e]/10 px-3 py-1 text-xs font-medium tracking-wider text-[#a30d35] dark:text-[#fca5a5]">
              {f.badge}
            </span>
          </div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">{f.locationLine}</p>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
        </div>
        <div className="shrink-0 border border-border/80 bg-background p-1.5 shadow-sm">
          <QRCode value={f.qrValue} size={56} className="rounded-none opacity-90" />
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between border-t border-border/40 pt-6">
        <div className="flex min-w-0 flex-col gap-3 pr-4">
          <div className="relative flex items-center gap-3 before:absolute before:inset-y-0 before:-left-3 before:w-1 before:bg-[#bf0d3e]/40">
            <div className="flex flex-col">
              <Barcode value={f.barcodeValue} className="h-6 max-w-[120px] opacity-80 mix-blend-multiply grayscale dark:mix-blend-lighten" />
              <div className="mt-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500/80" />
                SEEKING
              </div>
            </div>
          </div>
          <div className="mt-1 truncate text-sm font-semibold text-foreground">{f.email}</div>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full bg-foreground py-1.5 pl-4 pr-1.5 text-background shadow-md transition-colors hover:bg-foreground/90 group-hover:bg-primary group-hover:text-primary-foreground">
          <span className="text-sm font-semibold">{f.ctaLabel}</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background group-hover:bg-primary-foreground">
            <ArrowUpRight className="h-3.5 w-3.5 text-foreground group-hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  )

  const ImageContent = () => (
    <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-muted sm:h-[320px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/30 via-muted to-[#bf0d3e]/15 dark:from-[#1e3a5f]/40 dark:to-[#1a0508]/40" />
      <motion.img
        src={f.imageSrc}
        alt={f.imageAlt}
        className="absolute left-1/2 top-1/2 max-h-[55%] max-w-[72%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-95 transition-transform duration-700 ease-out hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className={`absolute inset-x-4 z-10 flex items-start justify-between ${index % 2 === 0 ? "bottom-4" : "top-4"}`}>
        <div className="flex flex-wrap gap-2">
          {f.focusTags.slice(0, 2).map((cat, i) => (
            <span
              key={i}
              className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 shadow-sm backdrop-blur-md"
            >
              {cat}
            </span>
          ))}
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-md bg-black/40 px-2 py-1 text-xs font-bold text-white drop-shadow-lg backdrop-blur-sm">
          ◆ OPEN
        </span>
      </div>

      <div
        className={`absolute left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-md ${index % 2 === 0 ? "top-4" : "bottom-4"}`}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full bg-white ${i === 0 ? "opacity-100" : "opacity-50"}`} />
        ))}
      </div>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
      <a href={f.href} className={cardClassName}>
        {imageFirst ? (
          <>
            <ImageContent />
            <TextContent />
          </>
        ) : (
          <>
            <TextContent />
            <ImageContent />
          </>
        )}
      </a>
    </motion.div>
  )
}
