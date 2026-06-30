"use client"

import { OASIS_CONTROLLER_OPS } from "@/lib/huix-oasis"

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

function QuestController({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden>
      <path
        d="M50 8 C32 8 22 24 22 40 V96 C22 112 32 128 50 128 C68 128 78 112 78 96 V40 C78 24 68 8 50 8 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="38" cy="58" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="62" cy="72" r="9" stroke="currentColor" strokeWidth="1.5" />
      <rect x="46" y="98" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M42 28 H58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ControllerOpCard({
  op,
}: {
  op: (typeof OASIS_CONTROLLER_OPS)[number]
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex min-h-[4.5rem] flex-col items-center justify-end">
        <div
          className="mb-2 rounded border border-white/20 bg-white/[0.04] px-3 py-2 text-[10px] leading-tight text-white/80"
          style={{ fontFamily: MONO }}
        >
          <span className="block font-medium text-white">{op.uiEn}</span>
          <span className="block text-white/50">{op.uiZh}</span>
        </div>
        {op.uiIcon === "rotate" && (
          <svg viewBox="0 0 48 24" className="h-6 w-12 text-white/70" aria-hidden>
            <path d="M8 12 H40 M34 7 L40 12 L34 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M14 7 L8 12 L14 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        )}
        {op.uiIcon === "walk" && (
          <svg viewBox="0 0 32 32" className="h-8 w-8 text-white/70" aria-hidden>
            <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 11 V22 M12 16 L16 11 L20 16 M10 26 L16 22 L22 26" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
        {op.uiIcon === "grab" && (
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 border border-[#ff6b4a]/80 bg-[#ff6b4a]/20" />
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/70" aria-hidden>
              <path
                d="M8 12 C8 10 10 8 12 8 C13 8 14 9 14 10 V14 C14 12 15 11 16 11 C18 11 19 13 19 15 V18"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        )}
        {op.uiIcon === "click" && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#5eb3ff]/60 bg-[#5eb3ff]/15 text-[10px] text-[#5eb3ff]">
            ●
          </div>
        )}
      </div>

      <div className="relative">
        <QuestController className="h-36 w-24 text-white/85" />
        <span
          className="absolute rounded-full"
          style={{
            backgroundColor: op.highlight,
            boxShadow: `0 0 16px ${op.highlight}, 0 0 4px ${op.highlight}`,
            width: op.highlightSize,
            height: op.highlightSize,
            top: op.highlightTop,
            left: op.highlightLeft,
          }}
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium tracking-wide text-white">{op.labelEn}</p>
        <p className="mt-0.5 text-xs text-white/45">{op.labelZh}</p>
      </div>
    </div>
  )
}

export function OasisControllerSection() {
  return (
    <section className="bg-[#050A14] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-lg text-center">
        <h2
          className="text-[clamp(2rem,8vw,3.25rem)] font-normal uppercase leading-[0.95] tracking-[0.06em] text-white"
          style={{ fontFamily: MONO }}
        >
          Controller
          <br />
          Operation
        </h2>
        <p className="mt-3 text-sm text-white/45">手柄操作方式</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-12 sm:gap-y-16">
        {OASIS_CONTROLLER_OPS.map((op) => (
          <ControllerOpCard key={op.id} op={op} />
        ))}
      </div>
    </section>
  )
}
