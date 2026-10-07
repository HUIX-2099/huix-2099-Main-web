import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VplPage } from "@/components/vpl/vpl-page"

export const metadata: Metadata = {
  title: "Virtual Past Liberia — HUIX-2099",
  description:
    "Virtual Past Liberia by HUIX-2099 — Liberia's historical artifacts, places, and stories rebuilt in VR, games, historical emulation, and AI guides for tourists, students, citizens, and the diaspora.",
}

export default function VirtualPastLiberiaPage() {
  return (
    <>
      <Navbar />
      <VplPage />
      <Footer />
    </>
  )
}
