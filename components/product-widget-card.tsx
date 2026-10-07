"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react"
import { GoogleDiscoveryIconButton } from "@/components/google-discovery"

const neon = ["#39ff6a", "#e6ff2a", "#ff5a1f", "#ff2d6f", "#2af0ff", "#ffd400", "#b26bff"]

export interface ProductWidgetData {
  id: number
  title: string
  category: string
  platform: string
  description: string
  image?: string
  year: string
  status: string
  technologies: string[]
  openSource?: boolean
  link?: string
  googleLabel: string
  googleQuery: string
}

const roundButton =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-0 bg-neutral-100 text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_6px_rgba(0,0,0,0.12)] transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.6)] dark:hover:bg-neutral-700"

export function ProductWidgetCard({
  product,
  index,
  onSelect,
  onHoverChange,
}: {
  product: ProductWidgetData
  index: number
  onSelect: () => void
  onHoverChange: (hovering: boolean) => void
}) {
  const color = neon[(product.id - 1) % neon.length]
  const idx = String(product.id).padStart(2, "0")
  const steps = (product.technologies.length ? product.technologies : [product.category, product.platform]).slice(0, 3)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      viewport={{ once: true }}
      onClick={onSelect}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className="group relative h-full cursor-pointer pt-5 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Folder tab */}
      <div className="absolute right-0 top-0 flex h-9 w-[42%] justify-end rounded-t-[22px] bg-white px-5 pt-1 dark:bg-[#161616]">
        <span className="text-base font-bold leading-none tracking-[0.2em] text-neutral-400 dark:text-neutral-500">•••</span>
      </div>
      {/* Concave fillet where the tab meets the body */}
      <span
        aria-hidden
        className="absolute right-[42%] top-[6px] h-[14px] w-[14px] bg-[radial-gradient(circle_at_0_0,transparent_14px,#fff_14.5px)] dark:bg-[radial-gradient(circle_at_0_0,transparent_14px,#161616_14.5px)]"
      />

      <div className="relative flex h-full flex-col rounded-[28px] rounded-tr-none bg-white p-5 text-neutral-900 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)] dark:bg-[#161616] dark:text-neutral-100 dark:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)]">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            {product.image ? (
              <img src={product.image} alt="" className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs font-semibold text-neutral-500">{idx}</span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-medium leading-tight">{product.title}</h3>
            <div className="truncate text-[11px] text-neutral-500">
              {product.category} · {product.platform}
            </div>
          </div>
        </div>

        {/* Big readout */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="text-6xl font-extralight leading-none tracking-tight tabular-nums">
            {product.year}
            <sup className="ml-1 align-top text-base font-light text-neutral-500">{idx}</sup>
          </div>
          <div className="flex flex-col items-end gap-1.5 pt-1">
            <span className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-neutral-950" style={{ background: color }}>
              {product.status}
            </span>
            {product.openSource && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-neutral-500">
                <Sparkles className="h-3 w-3" style={{ color }} />
                Open source
              </span>
            )}
          </div>
        </div>

        {/* Neon band */}
        <div
          className="mt-4 rounded-2xl px-3.5 pb-3 pt-2.5 text-neutral-950 transition-shadow duration-300"
          style={{ background: color, boxShadow: `0 12px 36px -12px ${color}` }}
        >
          <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-wide">
            <span>Build track</span>
            <span>{product.platform}</span>
          </div>
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((step, i) => (
              <div key={step} className="min-w-0">
                <div className="truncate text-[10px] font-semibold">{step}</div>
                <div className="mt-1 h-1 rounded-full bg-neutral-950" />
                <div className="mt-1 text-[8px] font-semibold uppercase opacity-70">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-neutral-500">{product.description}</p>

        {/* Controls */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <GoogleDiscoveryIconButton className={roundButton} googleQuery={product.googleQuery} title={product.googleLabel} />
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Open"
                className={roundButton}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <span
            className={`${roundButton} group-hover:scale-110 group-hover:bg-[var(--neon)] group-hover:text-neutral-950 dark:group-hover:bg-[var(--neon)]`}
            style={{ ["--neon" as string]: color }}
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
