"use client"

import { useLayoutEffect, useState, type FormEvent, type ReactNode } from "react"
import Image from "next/image"
import { Lock } from "lucide-react"

const PASS = process.env.NEXT_PUBLIC_MONROVIA_HUSTLE_PASS ?? "0776800064"
const STORAGE_KEY = "mh_page_unlock_v1"
const mono = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

type Props = { children: ReactNode; logoSrc: string; logoAlt?: string }

export function MonroviaPassGate({ children, logoSrc, logoAlt = "Monrovia Hustle" }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [pin, setPin] = useState("")
  const [err, setErr] = useState("")

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true)
      }
    } catch {
      // sessionStorage may be blocked
    }
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (pin.trim() === PASS) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {
        // still unlock in memory
      }
      setUnlocked(true)
      setErr("")
      setPin("")
    } else {
      setErr("That passcode did not work.")
    }
  }

  return (
    <div className="relative min-h-0">
      <div
        className={!unlocked ? "pointer-events-none select-none [filter:blur(14px)_brightness(0.92)]" : undefined}
        aria-hidden={!unlocked}
      >
        {children}
      </div>
      {!unlocked ? (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-background/40 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] backdrop-blur-md pt-[max(1rem,env(safe-area-inset-top,0px))]"
          role="dialog"
          aria-modal="true"
          aria-label="Page access"
        >
          <form
            onSubmit={onSubmit}
            className="w-full max-w-sm border border-border/80 bg-card/75 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-border/60 bg-muted/30 p-1">
              <Image src={logoSrc} alt="" width={64} height={64} className="object-contain" unoptimized />
            </div>
            <h2
              className="text-center text-base font-bold uppercase tracking-[0.12em] text-foreground"
              style={{ fontFamily: "Mohican, sans-serif" }}
            >
              {logoAlt}
            </h2>
            <p className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: mono }}>
              Passcode to view
            </p>
            <label htmlFor="mh-pass" className="mt-4 block text-[10px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: mono }}>
              Passcode
            </label>
            <input
              id="mh-pass"
              name="passcode"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value)
                setErr("")
              }}
              type="password"
              autoComplete="off"
              className="mt-1.5 w-full border border-border bg-background/80 px-3 py-2.5 text-sm outline-none ring-0 focus:border-foreground/40"
              style={{ fontFamily: mono }}
            />
            {err ? <p className="mt-2 text-xs text-destructive">{err}</p> : null}
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 border border-foreground bg-foreground py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-background transition hover:opacity-90"
              style={{ fontFamily: mono }}
            >
              <Lock className="h-3.5 w-3.5" />
              View page
            </button>
            <p className="mt-3 text-center text-[9px] text-muted-foreground/80" style={{ fontFamily: mono }}>
              Stays open for this browser session only.
            </p>
          </form>
        </div>
      ) : null}
    </div>
  )
}
