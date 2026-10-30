import type { Metadata } from "next"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { FranchiseShell, PageHero } from "@/components/monrovia-hustle/franchise-shell"
import { franchiseMetadata, MH_EMAIL, MH_PHONE, MH_SOCIALS } from "@/lib/monrovia-hustle/franchise"

export const metadata: Metadata = franchiseMetadata(
  "Contact and Community",
  "Contact the Monrovia Hustle team for franchise inquiries, feedback, and collaboration opportunities, or follow HUIX-2099 through its official social channels.",
  "/contact",
)

const INQUIRIES = [
  { label: "General inquiry", subject: "Monrovia Hustle — General inquiry", note: "Questions about the game" },
  { label: "Feedback", subject: "Monrovia Hustle — Feedback", note: "Thoughts from the community" },
  { label: "Collaboration", subject: "Monrovia Hustle — Collaboration opportunity", note: "Partnerships and press" },
]

export default function MonroviaHustleContactPage() {
  return (
    <FranchiseShell>
      <PageHero
        eyebrow="Contact"
        title="Connect with Monrovia Hustle."
        description="For game inquiries, feedback, collaboration opportunities, and official communication, contact HUIX-2099 directly or use our maintained social channels."
      />

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Direct contact</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              Start a conversation.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-muted-foreground">
              Choose the inquiry that best matches your message. Your email application will open with the subject
              already prepared.
            </p>
            <div className="mt-8 space-y-4 border-t border-border pt-6 text-[13px] text-muted-foreground">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-foreground" />
                Monrovia, Liberia
              </p>
              <a href={`mailto:${MH_EMAIL}`} className="flex items-center gap-3 break-all transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0 text-foreground" />
                {MH_EMAIL}
              </a>
              <a href="tel:+231776800064" className="flex items-center gap-3 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-foreground" />
                {MH_PHONE}
              </a>
            </div>
          </div>

          <div className="grid content-start gap-4 self-start sm:grid-cols-3">
            {INQUIRIES.map((inquiry) => (
              <a
                key={inquiry.label}
                href={`mailto:${MH_EMAIL}?subject=${encodeURIComponent(inquiry.subject)}`}
                className="group flex flex-col gap-10 rounded-2xl border border-border p-5 transition-colors hover:bg-secondary"
              >
                <div className="flex items-start justify-between">
                  <Mail className="h-4 w-4 text-muted-foreground" strokeWidth={1.7} />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <div>
                  <h2 className="text-[14px] font-semibold leading-tight">{inquiry.label}</h2>
                  <p className="mt-1.5 text-[12px] leading-5 text-muted-foreground">{inquiry.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Official channels</p>
          <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Follow the development journey.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {MH_SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-[13px] font-medium transition-colors hover:bg-secondary"
              >
                {social.label}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </FranchiseShell>
  )
}
