import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HuixTestimonialsSection } from "@/components/huix-testimonials"

export const metadata: Metadata = {
  title: "What people are saying — HUIX-2099",
  description:
    "Early reactions from playtesters, builders, and friends around HUIX-2099 — the Liberia-based startup building software, games, and immersive technology.",
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <HuixTestimonialsSection className="border-t-0" />
      </main>
      <Footer />
    </>
  )
}
