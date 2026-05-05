import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Monrovia Hustle 3D — Liberian narrative RPG hub",
  description:
    "HUIX-2099's public hub for Monrovia Hustle 3D: a Liberian-led slice-of-life narrative urban RPG set in Monrovia — School on pause. Hustle on the street. Lead developer: Victor Edet Coleman.",
  openGraph: {
    title: "Monrovia Hustle 3D | HUIX-2099",
    description:
      "Explore the story, features, and vision — authentic Monrovia streets, branching hustle, comic-book narrative. Built in Liberia.",
  },
}

export default function MonroviaHustleLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>
}
