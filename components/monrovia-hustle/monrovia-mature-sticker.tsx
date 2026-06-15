import Image from "next/image"
import { cn } from "@/lib/utils"

export const MH_MATURE_STICKER_SRC = `/products/${encodeURIComponent("GAMES STICKERS")}/MATURE.png`

/** Matches text printed on the HUIX MATURE.png asset */
export const MH_MATURE_RATING_COPY = {
  rating: "Mature",
  descriptors: ["Violence", "Strong language", "Suggestive themes"] as const,
  summary:
    "Monrovia Hustle 3D is labeled Mature — not for children. The slice includes street conflict, strong language, and adult themes.",
}

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' as const

type MonroviaMatureStickerProps = {
  className?: string
  /** badge = image only; full = image + content-rating caption */
  variant?: "badge" | "full"
  /** Wide label — use width so the full sticker (M + descriptors) stays readable */
  size?: "sm" | "md" | "lg"
}

const widthClass = {
  sm: "max-w-[200px] sm:max-w-[220px]",
  md: "max-w-[240px] sm:max-w-[280px]",
  lg: "max-w-[280px] sm:max-w-[320px]",
} as const

export function MonroviaMatureSticker({
  className,
  variant = "full",
  size = "md",
}: MonroviaMatureStickerProps) {
  const { rating, descriptors, summary } = MH_MATURE_RATING_COPY

  const image = (
    <Image
      src={MH_MATURE_STICKER_SRC}
      alt={`${rating} content rating — ${descriptors.join(", ")}. HUIX-2099.`}
      width={640}
      height={320}
      className={cn("h-auto w-full object-contain drop-shadow-md", widthClass[size])}
      sizes="(max-width:640px) 200px, 280px"
    />
  )

  if (variant === "badge") {
    return <div className={cn("shrink-0", className)}>{image}</div>
  }

  return (
    <figure
      className={cn("flex flex-col gap-2", widthClass[size], className)}
      aria-labelledby="mh-content-rating-label"
    >
      {image}
      <figcaption className="space-y-1 text-left">
        <p
          id="mh-content-rating-label"
          className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground"
          style={{ fontFamily: MONO }}
        >
          Content rating · {rating}
        </p>
        <p className="text-[11px] leading-snug text-muted-foreground sm:text-xs">
          {descriptors.join(" · ")}
        </p>
        <p className="text-[10px] leading-relaxed text-muted-foreground/90">{summary}</p>
      </figcaption>
    </figure>
  )
}
