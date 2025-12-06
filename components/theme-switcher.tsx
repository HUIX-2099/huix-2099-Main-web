"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="relative inline-flex h-8 items-center rounded-full bg-muted p-1 gap-0.5"
      role="radiogroup"
      aria-label="Theme selector"
    >
      <button
        onClick={() => setTheme("light")}
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-all ${
          theme === "light" 
            ? "bg-foreground text-background" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light theme"
        aria-checked={theme === "light"}
        role="radio"
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-all ${
          theme === "system" 
            ? "bg-foreground text-background" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="System theme"
        aria-checked={theme === "system"}
        role="radio"
      >
        <Monitor className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-all ${
          theme === "dark" 
            ? "bg-foreground text-background" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark theme"
        aria-checked={theme === "dark"}
        role="radio"
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
