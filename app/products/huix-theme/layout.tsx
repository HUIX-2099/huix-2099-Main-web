import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "HUIX-THEME — VS Code extension | Victor Edet Coleman · HUIX-2099 Liberia",
  },
  description:
    "HUIX-THEME: premium dark VS Code extension by Victor Edet Coleman (Founder & CTO, HUIX-2099) — satellite hardware aesthetic, neon syntax, Liberia / Monrovia studio. Install from the VS Code Marketplace.",
  keywords: [
    "HUIX-THEME",
    "HUIX THEME",
    "HUIX-THEME VS Code extension",
    "Victor Edet Coleman VS Code theme",
    "HUIX-2099",
    "Liberia VS Code theme",
    "Monrovia developer",
  ],
  alternates: { canonical: `${SITE_URL}/products/huix-theme` },
  openGraph: {
    title: "HUIX-THEME | VS Code extension — HUIX-2099",
    description:
      "Premium dark VS Code theme by Victor Edet Coleman — HUIX-2099, Liberia.",
    url: `${SITE_URL}/products/huix-theme`,
    type: "website",
    siteName: "HUIX-2099",
  },
  twitter: {
    card: "summary_large_image",
    title: "HUIX-THEME | VS Code — HUIX-2099",
    description: "VS Code theme by Victor Edet Coleman — HUIX-2099, Liberia.",
  },
}

export default function HuixThemeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
