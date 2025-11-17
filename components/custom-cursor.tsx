"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button, a")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          border: `2px solid ${isHovering ? "#999" : "#666"}`,
          borderRadius: "50%",
          transform: `scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 1 : 0.7,
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        }}
      />
      
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          backgroundColor: "#666",
          borderRadius: "50%",
          transform: `scale(${isHovering ? 0.5 : 1})`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </>
  )
}
