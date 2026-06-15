"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { ConceptDownloadButton } from "@/components/monrovia-hustle/concept-download-button"
import { MonroviaMatureSticker } from "@/components/monrovia-hustle/monrovia-mature-sticker"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

const SLICE_FEATURES = [
  "Menu path: rating slides → intro comic → Jboy's bedroom hub → the Street",
  "Street loop hustles paying LD with interaction prompts and UI hints",
  "Tenneh phone mission chain — Trapper, Blamo, DC Young, voiced waypoint beats",
  "Story menu jumps episodes (comic, room, street, club, office) — not one straight line",
  "Keyboard / mouse on Windows — Godot vertical slice",
] as const

const ROADMAP_ITEMS = [
  "Mobile-capable build and performance pass",
  "More chapters and clearer signposting between modes",
  "Polish passes on club · office · street transitions",
] as const

type SliceToggle = {
  id: string
  label: string
  included: boolean
}

const SLICE_TOGGLES: SliceToggle[] = [
  { id: "comic", label: "Intro comic & content-warning slides", included: true },
  { id: "bedroom", label: "Jboy bedroom hub (phone, key, story beats)", included: true },
  { id: "street", label: "Open-street third-person block", included: true },
  { id: "voice", label: "Liberian voice cast in-engine", included: true },
  { id: "mobile", label: "Mobile / touch performance target", included: false },
]

export type MonroviaConceptSpecCardProps = {
  hubHref?: string
  className?: string
}

export function MonroviaConceptSpecCard({
  hubHref = "/products/monrovia-hustle",
  className,
}: MonroviaConceptSpecCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className={`group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-12 ${className ?? ""}`}
      aria-labelledby="concept-spec-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#002868]/[0.06] via-transparent to-[#BF0A30]/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/45 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            style={{ fontFamily: MONO }}
          >
            Concept 01 · Spec sheet
          </div>
          <h2
            id="concept-spec-title"
            className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
            style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.04em" }}
          >
            What this vertical slice is — and is not
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Treat this build as a <strong className="font-medium text-foreground">concept / early prototype</strong>, not a finished boxed product. A
            Liberian urban hustle drama in Godot on Windows — comic sequences, a small 3D hub, and an open-street block stitched as one honest slice. The{" "}
            <Link
              href={hubHref}
              className="font-medium text-[#002868] underline decoration-[#002868]/35 underline-offset-2 dark:text-[#89b8ff] dark:decoration-[#89b8ff]/40"
            >
              public hub
            </Link>{" "}
            stays lighter on spoilers.
          </p>
        </div>
        <div className="shrink-0">
          <Badge className="rounded-full border border-[#BF0A30]/35 bg-[#BF0A30]/10 px-4 py-2 text-[#BF0A30] transition-colors duration-300 hover:border-[#BF0A30]/50 hover:bg-[#BF0A30]/15 dark:text-[#ff6b6b]">
            Prototype
          </Badge>
        </div>
      </div>

      <ConceptDownloadButton variant="card" className="mb-8" />

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h3 className="text-sm font-medium text-foreground">Platform &amp; genre</h3>
            <p className="mb-4 text-xs text-muted-foreground">Hard facts for this drop — not retail spec fiction.</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">Engine</Label>
                <p>Godot · Windows 10/11 (64-bit)</p>
              </div>
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">Genre lane</Label>
                <p>
                  Story-led third-person life / hustle sim — open(ish) street plus scripted mission chain, light LD economy, branching narrative.
                </p>
              </div>
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">Honest read</Label>
                <p className="text-xs leading-relaxed">
                  Jumping between comic, bedroom hub, street, and later club / office beats can feel like many demos in one — normal for a vertical slice,
                  not a logic failure.
                </p>
              </div>
              <div className="space-y-3 border-t border-border/60 pt-5">
                <Label className="text-sm font-medium text-foreground">Content rating</Label>
                <MonroviaMatureSticker size="md" className="max-w-none sm:max-w-[280px]" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h3 className="text-sm font-medium text-foreground">Modes in this drop</h3>
            <p className="mb-4 text-xs text-muted-foreground">Green = in the slice today. Grey = roadmap, not promised here.</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              {SLICE_TOGGLES.map((toggle) => (
                <label
                  key={toggle.id}
                  className="flex cursor-default items-center justify-between gap-3"
                >
                  <span className={toggle.included ? "text-foreground/90" : "text-muted-foreground"}>{toggle.label}</span>
                  <Switch checked={toggle.included} disabled aria-readonly />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-medium text-foreground">What&apos;s in this build</h3>
                <p className="text-xs text-muted-foreground">Play path, loops, and mission spine at concept fidelity.</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-semibold text-foreground">01</span>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: MONO }}>
                  vertical slice
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              {SLICE_FEATURES.map((feature) => (
                <p key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#002868]/25 bg-[#002868]/10 text-[#002868] dark:border-[#89b8ff]/30 dark:bg-[#10223a]/80 dark:text-[#89b8ff]">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 leading-relaxed">{feature}</span>
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                asChild
                className="flex-1 rounded-full border-border/60 bg-background/45 px-6 py-3 text-sm text-muted-foreground hover:border-[#002868]/40 hover:text-[#002868] dark:hover:text-[#89b8ff]"
              >
                <Link href={hubHref}>Public hub</Link>
              </Button>
              <Button
                type="button"
                asChild
                className="flex-1 rounded-full border-0 bg-[#BF0A30] px-6 py-3 text-white shadow-[0_20px_60px_-30px_rgba(191,10,48,0.55)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#a00828]"
              >
                <a href="#voice-actors">Voice cast</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h3 className="text-sm font-medium text-foreground">Roadmap · what&apos;s next</h3>
            <p className="mb-4 text-xs text-muted-foreground">Only items we intend to keep chipping at — not a hype list.</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {ROADMAP_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#BF0A30]" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
