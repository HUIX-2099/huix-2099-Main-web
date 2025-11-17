"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span
        className="inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-foreground text-background transition-transform"
        style={{
          transform: theme === "dark" ? "translateX(1.75rem)" : "translateX(0.25rem)",
        }}
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  )
}
