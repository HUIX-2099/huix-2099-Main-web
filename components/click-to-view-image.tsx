"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Expand } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ClickToViewImageProps = {
  /** Full-size image URL (same as thumbnail is fine). */
  src: string
  alt: string
  children: ReactNode
  /** Classes on the clickable trigger (usually size/position so children fill the tap target). */
  triggerClassName?: string
  /** Optional hint badge (e.g. workspace cards). */
  showViewHint?: boolean
  /** Where the hover "View" chip sits (workspace cards use bottom-right to stay clear of labels). */
  viewHintPlacement?: "top" | "bottom"
}

/**
 * Wraps any inline image block so users can open a full-size lightbox without a dedicated gallery section.
 */
export function ClickToViewImage({
  src,
  alt,
  children,
  triggerClassName,
  showViewHint = true,
  viewHintPlacement = "top",
}: ClickToViewImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "group group/trigger relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left outline-none",
            "ring-offset-background focus-visible:ring-2 focus-visible:ring-[#002868] focus-visible:ring-offset-2 dark:focus-visible:ring-[#7eb3ff]",
            triggerClassName,
          )}
          aria-label={`View full size: ${alt}`}
        >
          {children}
          {showViewHint && (
            <span
              className={cn(
                "pointer-events-none absolute right-2 z-20 flex items-center gap-1 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 shadow backdrop-blur-sm transition-opacity duration-200 group-hover/trigger:opacity-100 sm:right-2.5 sm:text-[11px]",
                viewHintPlacement === "top" && "top-2 sm:top-2.5",
                viewHintPlacement === "bottom" && "bottom-3 top-auto sm:bottom-3.5",
              )}
              aria-hidden
            >
              <Expand className="size-3.5 shrink-0 opacity-90" />
              View
            </span>
          )}
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton
        className="max-h-[min(92vh,1000px)] max-w-[min(96vw,1400px)] border border-border/40 bg-neutral-950 p-2 shadow-2xl sm:p-4"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative flex max-h-[85vh] w-full items-center justify-center overflow-hidden rounded-md bg-black/40">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
            sizes="96vw"
            priority={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
