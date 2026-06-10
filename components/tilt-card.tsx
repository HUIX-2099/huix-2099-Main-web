"use client"

import { useRef, type ReactNode } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"

type TiltCardProps = {
  children: ReactNode
  className?: string
  /** Max tilt in degrees. */
  max?: number
  /** Hover scale. */
  scale?: number
  /** Subtle glare highlight that follows the cursor. */
  glare?: boolean
}

export function TiltCard({
  children,
  className = "",
  max = 8,
  scale = 1.03,
  glare = false,
}: TiltCardProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(py, { stiffness: 220, damping: 18, mass: 0.4 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [`${max}deg`, `${-max}deg`])
  const rotateY = useTransform(sx, [-0.5, 0.5], [`${-max}deg`, `${max}deg`])
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"])
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 45%)`,
  )

  if (reduce) {
    return <div className={`h-full ${className}`}>{children}</div>
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    px.set(0)
    py.set(0)
  }

  return (
    <div className={`h-full [perspective:1100px] ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ scale }}
        transition={{ scale: { type: "spring", stiffness: 260, damping: 20 } }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full [will-change:transform]"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBackground }}
          />
        )}
      </motion.div>
    </div>
  )
}
