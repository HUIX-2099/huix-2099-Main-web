import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Smartphone, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate — Monrovia Hustle 3D | HUIX-2099",
  description:
    "Support Monrovia Hustle 3D with Mobile Money or Orange Money. Your donation helps HUIX-2099 finish this Liberian narrative RPG.",
}

const DONATION_MSISDN_DISPLAY = "0776800064"
const DONATION_MSISDN_TEL = "+231776800064"

export default function MonroviaHustleDonatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <Link
            href="/products/monrovia-hustle"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Monrovia Hustle hub
          </Link>

          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-[#002868]/30 bg-[#002868]/5 p-6 dark:bg-[#002868]/10 sm:p-8">
            <HeartHandshake className="mt-0.5 h-10 w-10 shrink-0 text-[#BF0A30]" aria-hidden />
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#002868] dark:text-[#7eb3ff]">
                Support the campaign
              </p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl">
                Donate to Monrovia Hustle 3D
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                Your donation helps us get the resources needed to complete the game and more — from tooling and audio to polish and
                distribution. Every contribution goes directly toward shipping this Liberian-led project.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">Send via</h2>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002868]/15 dark:bg-[#002868]/25">
                  <Smartphone className="h-6 w-6 text-[#002868] dark:text-[#7eb3ff]" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground">Mobile Money</h3>
                  <p className="text-sm text-muted-foreground">Use the number below in your mobile money app.</p>
                </div>
              </div>
              <p className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{DONATION_MSISDN_DISPLAY}</p>
              <a
                href={`tel:${DONATION_MSISDN_TEL}`}
                className="mt-4 inline-flex text-sm font-semibold text-[#002868] underline underline-offset-2 dark:text-[#7eb3ff]"
              >
                Tap to call (save to contacts)
              </a>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BF0A30]/15 dark:bg-[#BF0A30]/20">
                  <Smartphone className="h-6 w-6 text-[#BF0A30]" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground">Orange Money</h3>
                  <p className="text-sm text-muted-foreground">Send to this Orange Money wallet.</p>
                </div>
              </div>
              <p className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{DONATION_MSISDN_DISPLAY}</p>
              <a
                href={`tel:${DONATION_MSISDN_TEL}`}
                className="mt-4 inline-flex text-sm font-semibold text-[#BF0A30] underline underline-offset-2"
              >
                Tap to call (save to contacts)
              </a>
            </article>
          </div>

          <p className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 p-5 text-center text-sm leading-relaxed text-muted-foreground">
            HUIX-2099 thanks everyone backing <span className="font-semibold text-foreground">Monrovia Hustle 3D</span>. Include a note with
            your gamer tag or email if you&apos;d like a shout-out in credits when the full release ships.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
