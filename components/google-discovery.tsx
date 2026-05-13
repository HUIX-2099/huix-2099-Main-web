"use client"

import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function googleSearchHref(query: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`
}

/** Multicolor Google “G” (aligned with `components/navbar` treatment). */
export function GoogleIconMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export function GoogleDiscoveryRow({
  googleQuery,
  googleLabel,
  ariaLabel,
  className,
}: {
  googleQuery: string
  googleLabel: string
  ariaLabel?: string
  className?: string
}) {
  return (
    <a
      href={googleSearchHref(googleQuery)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative z-20 flex min-w-0 items-center gap-2.5 border-t border-border/70 bg-muted/20 px-3 py-2.5 transition hover:border-[#4285F4]/35 hover:bg-muted/40 dark:hover:border-[#4285F4]/30",
        className,
      )}
      aria-label={ariaLabel ?? `Google search: ${googleLabel}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background shadow-sm"
        aria-hidden
      >
        <GoogleIconMark className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Google</span>
        <span className="mt-0.5 block text-[11px] font-semibold leading-snug text-foreground sm:text-xs">{googleLabel}</span>
      </span>
      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-70" aria-hidden />
    </a>
  )
}

/** Compact control for dense rows (e.g. products list view). */
export function GoogleDiscoveryIconButton({
  googleQuery,
  title,
  className,
}: {
  googleQuery: string
  title: string
  className?: string
}) {
  return (
    <a
      href={googleSearchHref(googleQuery)}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={`Google search: ${title}`}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/80 bg-background text-foreground shadow-sm transition hover:border-[#4285F4]/45 hover:bg-muted/50",
        className,
      )}
    >
      <GoogleIconMark className="h-[18px] w-[18px]" />
    </a>
  )
}
