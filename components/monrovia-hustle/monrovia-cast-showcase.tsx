"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"
import { GoogleIconMark, googleSearchHref } from "@/components/google-discovery"

export type MonroviaCastMember = {
  id: string
  name: string
  role: string
  epithet: string
  imageSrc: string
  imageAlt: string
  hoverImageSrc?: string
  hoverImageAlt?: string
  href: string
  googleQuery: string
  googleLabel: string
  /** Voice cast vs technical audio — tweaks accent color in the list */
  lane?: "voice" | "audio"
}

type MonroviaCastShowcaseProps = {
  members: MonroviaCastMember[]
  /** Shown in the member list before the first `lane: "audio"` entry */
  audioIntro?: {
    id?: string
    title: string
    description: string
  }
  className?: string
}

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

export function MonroviaCastShowcase({ members, audioIntro, className }: MonroviaCastShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const col1 = members.filter((_, i) => i % 3 === 0)
  const col2 = members.filter((_, i) => i % 3 === 1)
  const col3 = members.filter((_, i) => i % 3 === 2)

  const firstAudioIndex = members.findIndex((m) => m.lane === "audio")

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl select-none flex-col items-center gap-10 py-4 md:flex-row md:items-start md:gap-10 lg:gap-14",
        className,
      )}
    >
      {/* Staggered photo grid */}
      <div className="w-full shrink-0 md:w-auto">
        <div className="mx-auto flex w-fit max-w-full justify-center gap-2 md:gap-3">
          <div className="flex flex-col gap-2 md:gap-3">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="h-[120px] w-[110px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="mt-[48px] flex flex-col gap-2 sm:mt-[56px] md:mt-[68px] md:gap-3">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="h-[132px] w-[122px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="mt-[22px] flex flex-col gap-2 sm:mt-[26px] md:mt-[32px] md:gap-3">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="h-[125px] w-[115px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Member list — synced hover */}
      <div className="grid w-full flex-1 grid-cols-1 gap-4 pt-0 sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {members.map((member, index) => (
          <div key={member.id}>
            {audioIntro && index === firstAudioIndex && firstAudioIndex >= 0 && (
              <div
                id={audioIntro.id ?? "sound-audio"}
                className="mb-5 scroll-mt-28 border-t border-border pt-8 md:col-span-1 md:mb-6"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <Headphones className="h-4 w-4 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#002868] dark:text-[#89b8ff]"
                    style={{ fontFamily: MONO }}
                  >
                    {audioIntro.title}
                  </p>
                </div>
                <p className="text-[13px] leading-[1.75] text-muted-foreground md:text-[14px]">{audioIntro.description}</p>
              </div>
            )}
            <MemberRow member={member} hoveredId={hoveredId} onHover={setHoveredId} />
          </div>
        ))}
      </div>
    </div>
  )
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: MonroviaCastMember
  className: string
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive
  const isAudio = member.lane === "audio"
  const showCharacter = isActive && Boolean(member.hoverImageSrc)
  const displaySrc = showCharacter ? member.hoverImageSrc! : member.imageSrc
  const displayAlt = showCharacter ? member.hoverImageAlt ?? member.name : member.imageAlt

  return (
    <Link
      href={member.href}
      className={cn(
        "relative block flex-shrink-0 overflow-hidden rounded-xl transition-opacity duration-[400ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
        isDimmed ? "opacity-60" : "opacity-100",
        isAudio && isActive && "ring-2 ring-[#002868]/40 dark:ring-[#89b8ff]/40",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      aria-label={`${member.name} — view profile`}
    >
      <img
        src={displaySrc}
        alt={displayAlt}
        className="size-full object-cover object-top transition-[filter,transform] duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
          transform: isActive ? "scale(1.03)" : "scale(1)",
        }}
      />
      {showCharacter && (
        <span
          className="pointer-events-none absolute bottom-2 left-2 rounded-sm bg-black/55 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
          style={{ fontFamily: MONO }}
        >
          In-game
        </span>
      )}
      {isAudio && isActive && !showCharacter && (
        <span
          className="pointer-events-none absolute bottom-2 left-2 rounded-sm bg-[#002868]/80 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-sm dark:bg-[#10223a]/90"
          style={{ fontFamily: MONO }}
        >
          Sound
        </span>
      )}
    </Link>
  )
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: MonroviaCastMember
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive
  const isAudio = member.lane === "audio"
  const accentActive = isAudio ? "bg-[#002868] dark:bg-[#89b8ff]" : "bg-[#BF0A30]"

  return (
    <div
      className={cn("transition-opacity duration-300", isDimmed ? "opacity-50" : "opacity-100")}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-3 w-4 flex-shrink-0 rounded-[5px] transition-all duration-300",
            isActive ? cn("w-5", accentActive) : "bg-foreground/25",
          )}
          aria-hidden
        />
        <Link
          href={member.href}
          className={cn(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 hover:text-[#002868] dark:hover:text-[#89b8ff] md:text-[18px]",
            isActive ? "text-foreground" : "text-foreground/80",
          )}
        >
          {member.name}
        </Link>

        <div
          className={cn(
            "ml-0.5 flex items-center gap-1.5 transition-all duration-200",
            isActive ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0",
          )}
        >
          <a
            href={googleSearchHref(member.googleQuery)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded p-1 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-foreground/10 hover:text-foreground"
            title={`Google: ${member.googleLabel}`}
            aria-label={`Google search: ${member.googleLabel}`}
          >
            <GoogleIconMark className="h-3 w-3" />
          </a>
          <Link
            href={member.href}
            onClick={(e) => e.stopPropagation()}
            className="rounded p-1 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-foreground/10 hover:text-foreground"
            title="View profile"
            aria-label={`View profile: ${member.name}`}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <p
        className="mt-1.5 pl-[27px] text-[7px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[10px]"
        style={{ fontFamily: MONO }}
      >
        {member.role}
      </p>

      <p
        className={cn(
          "mt-1 pl-[27px] text-[11px] italic leading-snug text-muted-foreground transition-all duration-300 md:text-xs",
          isActive ? "max-h-16 opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        &ldquo;{member.epithet}&rdquo;
      </p>
    </div>
  )
}
