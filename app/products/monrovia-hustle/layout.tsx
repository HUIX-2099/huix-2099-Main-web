import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Monrovia Hustle — Demo & Funding Campaign",
  description:
    "Street life. Ambition. Survival. A Liberian-built game demo — Windows. Support the campaign to build a stronger version. Developed by Victor Edet Coleman · HUIX-2099.",
  openGraph: {
    title: "Monrovia Hustle | HUIX-2099",
    description: "Fund the future of Monrovia Hustle — demo available for Windows.",
  },
}

export default function MonroviaHustleLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>
}
