import type { ReactNode } from "react"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Huixor — multi-device web preview for Windows | HUIX-2099 Liberia",
  },
  description:
    "Huixor: professional Windows desktop app for multi-device web preview (phones, tablets, watches, multi-monitor, VR) — WPF, .NET 8, WebView2. From HUIX-2099, Monrovia, Liberia — Victor Edet Coleman.",
  keywords: ["Huixor", "HUIX-2099", "Victor Edet Coleman", "web preview Windows", "Liberia software", "WebView2"],
  alternates: { canonical: `${SITE_URL}/products/huixor` },
  openGraph: {
    title: "Huixor | HUIX-2099",
    description:
      "Multi-device web preview for Windows — HUIX-2099, Liberia.",
    url: `${SITE_URL}/products/huixor`,
    type: "website",
    siteName: "HUIX-2099",
  },
}

export default function HuixorLayout({ children }: { children: ReactNode }) {
  return children
}
