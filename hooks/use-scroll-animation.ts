"use client"

import { useScroll, useTransform } from "framer-motion"

export function useScrollAnimation() {
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])
  const y = useTransform(scrollY, [0, 300], [0, 50])

  return { scrollY, opacity, y }
}
