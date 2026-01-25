import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HUIX-THEME | VS Code Theme",
  description:
    "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors. By Victor Edet Coleman for HUIX-2099. Install from VS Code Marketplace.",
  openGraph: {
    title: "HUIX-THEME | VS Code Theme — HUIX-2099",
    description:
      "Premium dark VS Code theme with satellite hardware background and ultra-sharp neon syntax colors. Monrovia, Liberia.",
    url: "https://huix-2099.vercel.app/products/huix-theme",
  },
}

export default function HuixThemeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
