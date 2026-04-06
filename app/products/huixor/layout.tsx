import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Huixor",
  description:
    "Huixor is a professional Windows desktop app for multi-device web preview — phones, tablets, watches, multi-monitor desktop, and VR — using WPF, .NET 8, and WebView2 (Chrome DevTools Protocol). Portable single .exe.",
  openGraph: {
    title: "Huixor | HUIX-2099",
    description:
      "Professional multi-device web preview. Up to 8 panels, synced scroll, VR scene, portable Windows .exe.",
  },
}

export default function HuixorLayout({ children }: { children: ReactNode }) {
  return children
}
