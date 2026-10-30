import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EYEBROW, PageHero, WRAP } from "@/components/clean-ui"

export const metadata: Metadata = {
  title: "Privacy policy — HUIX-2099",
  description: "How HUIX-2099 collects, uses, and protects your information.",
}

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "HUIX-2099 (\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) is a studio based in Monrovia, Liberia. This policy explains what information we collect through this website, why we collect it, and how we protect it.",
      "By using this site you agree to the practices described here. If you do not agree, please stop using the site.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      "We collect only what we need to operate the site and respond to you.",
    ],
    list: [
      "Information you send us: your name, email address, phone number, and the content of messages you send through email or contact links.",
      "Technical information: IP address, browser type, device type, referring pages, and pages visited.",
      "Usage information: aggregated, non-identifying statistics about how visitors use the site.",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: [
      "We use your information to reply to enquiries, prepare proposals, deliver and improve our services, keep the site secure, and understand which parts of the site are useful.",
      "We do not sell your personal information, and we do not use it for advertising profiles.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing information",
    body: [
      "We share information only with service providers that help us run the site and our business — for example hosting, email, and analytics providers — and only to the extent needed for them to perform those services.",
      "We may also disclose information when required by law or when we believe in good faith that disclosure is necessary to protect our rights, users, or the public.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: [
      "This site uses a small amount of local storage to remember your theme and cookie preference. We may use privacy-respecting analytics to understand aggregate traffic.",
      "You can clear cookies and local storage at any time through your browser settings. Blocking them may affect some site preferences.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    body: [
      "We keep correspondence for as long as needed to answer your enquiry and maintain our business records, then delete or anonymise it when it is no longer required.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices",
    body: [
      "You can ask us what personal information we hold about you, request a correction, or ask us to delete it. Email us and we will respond within a reasonable period.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about this policy can be sent to huixtech2099@gmail.com or by post to HUIX-2099, Monrovia, Liberia.",
    ],
  },
]

export default function PolicyPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Legal · Privacy"
        title={
          <>
            Privacy
            <br />
            <span className="text-muted-foreground">policy.</span>
          </>
        }
        description="A short, readable account of what this website collects and what we do with it."
        aside={
          <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <p className={EYEBROW}>Last updated</p>
            <p className="mt-3 text-[15px] font-medium">October 2026</p>
            <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
              This policy applies to huix.amaratech.io and related HUIX-2099 pages.
            </p>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="Policy sections" className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className={EYEBROW}>Contents</p>
              <ul className="mt-4 space-y-2.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-3 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="w-5 shrink-0 tabular-nums text-muted-foreground/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tabular-nums text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[22px] font-semibold tracking-[-0.025em] sm:text-[24px]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-4 pl-0 sm:pl-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-[14px] leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {section.list ? (
                      <ul className="space-y-2.5 pt-1">
                        {section.list.map((item) => (
                          <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-14 border-t border-border pt-6 text-[12px] text-muted-foreground">
              Questions about this policy? Write to{" "}
              <a href="mailto:huixtech2099@gmail.com" className="underline decoration-border underline-offset-4 hover:decoration-foreground">
                huixtech2099@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
