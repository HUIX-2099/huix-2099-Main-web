"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage?: string
  backgroundColor?: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
  className?: string
  minHeight?: string
}

interface ParallaxTextProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  scale?: boolean
}

// Basic parallax wrapper - moves content based on scroll
export function Parallax({ children, offset = 50, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

// Parallax section with background image
export function ParallaxSection({
  children,
  backgroundImage,
  backgroundColor,
  overlayColor = "black",
  overlayOpacity = 0.4,
  speed = 0.5,
  className = "",
  minHeight = "100vh"
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight, backgroundColor }}
    >
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY
          }}
        />
      )}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

// Parallax text - moves text at different speeds
export function ParallaxText({
  children,
  speed = 0.3,
  direction = "up",
  className = ""
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const offset = 100 * speed

  const transforms: Record<string, MotionValue<string>> = {
    up: useTransform(scrollYProgress, [0, 1], [`${offset}px`, `-${offset}px`]),
    down: useTransform(scrollYProgress, [0, 1], [`-${offset}px`, `${offset}px`]),
    left: useTransform(scrollYProgress, [0, 1], [`${offset}px`, `-${offset}px`]),
    right: useTransform(scrollYProgress, [0, 1], [`-${offset}px`, `${offset}px`])
  }

  const isHorizontal = direction === "left" || direction === "right"
  const transform = transforms[direction]

  return (
    <div ref={ref} className={`overflow-visible ${className}`}>
      <motion.div
        style={isHorizontal ? { x: transform } : { y: transform }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Parallax image with optional scale effect
export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  scale = true
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, scale ? 1.1 : 1, 1])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y, scale: scaleValue }}
      />
    </div>
  )
}

// Floating element with parallax
export function ParallaxFloat({
  children,
  intensity = 20,
  className = ""
}: {
  children: ReactNode
  intensity?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [intensity, 0, -intensity])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, rotate }}>
        {children}
      </motion.div>
    </div>
  )
}

// Staggered parallax for lists/grids
export function ParallaxStagger({
  children,
  staggerDelay = 0.1,
  className = ""
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function ParallaxStaggerItem({
  children,
  className = ""
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Reveal on scroll with parallax
export function ParallaxReveal({
  children,
  direction = "up",
  delay = 0,
  className = ""
}: {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: directionOffset[direction].y,
        x: directionOffset[direction].x
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Zoom on scroll
export function ParallaxZoom({
  children,
  scale = 0.8,
  className = ""
}: {
  children: ReactNode
  scale?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scaleValue = useTransform(scrollYProgress, [0, 1], [scale, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale: scaleValue, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}

