import Link from "next/link"
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero, WRAP } from "@/components/clean-ui"

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "huixtech2099@gmail.com",
    href: "mailto:huixtech2099@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+231 776 800 064",
    href: "tel:+231776800064",
  },
  {
    icon: Phone,
    label: "Alternate phone",
    value: "+231 770 499 140",
    href: "tel:+231770499140",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Monrovia, Liberia",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9:00–18:00 WAT",
  },
]

const socials = [
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/Huix2099" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/huix.2099/" },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572485499528",
  },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@HUIX-2099" },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <PageHero
          eyebrow="Contact · Get in touch"
          title={
            <>
              Let&apos;s talk
              <br />
              about the idea.
            </>
          }
          description="Have a project in mind? Tell us what you are building and we will reply with an honest view of scope, timeline and fit. We usually answer within one business day."
          aside={
            <div className="rounded-[24px] bg-secondary p-6 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Direct line
              </p>
              <a
                href="mailto:huixtech2099@gmail.com"
                className="mt-3 inline-flex break-all text-[16px] font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                huixtech2099@gmail.com
              </a>
              <p className="mt-5 flex items-center gap-2 text-[12px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open for new projects
              </p>
            </div>
          }
        />

        <section>
          <div className={WRAP}>
            <div className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
              {/* Email CTA */}
              <div className="lg:col-span-7">
                <div className="flex h-full flex-col justify-between rounded-[28px] border border-border p-7 sm:p-10">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Start a project
                    </p>
                    <h2 className="mt-4 max-w-md text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                      One email is
                      <br />
                      enough to begin.
                    </h2>
                    <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                      Tell us who you are, what you want to build, and when you need it.
                      Links, sketches and references are welcome.
                    </p>
                  </div>

                  <a
                    href="mailto:huixtech2099@gmail.com?subject=Project%20enquiry"
                    className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Email the studio
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-5">
                <div className="rounded-[28px] bg-secondary p-7 sm:p-8">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Contact details
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {details.map((item) => {
                      const Icon = item.icon
                      const content = (
                        <>
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                          <span>
                            <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[13px] text-foreground">
                              {item.value}
                            </span>
                          </span>
                        </>
                      )
                      return (
                        <li key={item.label}>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="flex items-start gap-3 transition-opacity hover:opacity-70"
                            >
                              {content}
                            </a>
                          ) : (
                            <span className="flex items-start gap-3">{content}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-8 border-t border-border pt-6">
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Follow
                    </h3>
                    <div className="mt-4 flex items-center gap-2">
                      {socials.map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <p className="mt-5 px-2 text-[12px] leading-relaxed text-muted-foreground">
                  For urgent enquiries, call during business hours. We are based in
                  Monrovia (WAT) and work with clients across time zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className={WRAP}>
            <div className="flex flex-wrap items-center justify-between gap-4 py-8">
              <p className="max-w-md text-[13px] leading-relaxed text-muted-foreground">
                Prefer to see the work first? Browse the product index, or read how the
                studio is set up.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[12px] font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  See our work
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[12px] font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  About us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
