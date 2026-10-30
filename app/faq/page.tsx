"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection, EYEBROW, PageHero, WRAP } from "@/components/clean-ui"

const faqs = [
  {
    question: "What does HUIX-2099 do?",
    answer:
      "We are an independent studio in Monrovia building VR, AR, and 3D experiences, games, software, and web platforms. Most of our work combines storytelling with engineering — from Virtual Past Liberia to the Monrovia Hustle game series.",
  },
  {
    question: "Where are you based?",
    answer:
      "Monrovia, Liberia. We work with clients and collaborators across West Africa and the diaspora, and we build for global audiences from here.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Email huixtech2099@gmail.com with a short description of what you want to build, your timeline, and a rough budget. We reply within 24–48 hours and usually start with a short call to scope the work.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Small sites and tools typically take 4–8 weeks. Larger platforms, games, and immersive builds run 3–6 months. You get a detailed timeline after the first conversation, not before.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes. We support everything we ship, with flexible monthly arrangements for updates, hosting, and ongoing development.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Yes. We integrate with existing infrastructure, design systems, APIs, and legacy databases. We assess what is already there before proposing a rebuild.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "React, Next.js, TypeScript, Three.js, WebXR, .NET and WPF, Python, and modern cloud platforms. The stack follows the project rather than the other way around.",
  },
  {
    question: "Do you provide training and documentation?",
    answer:
      "Every handover includes documentation and a walkthrough for your team. For larger systems we can run structured training sessions.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="FAQ · Help centre"
        title={
          <>
            Questions,
            <br />
            <span className="text-muted-foreground">answered plainly.</span>
          </>
        }
        description="How we work, what we build, and what to expect when you start a project with HUIX-2099."
        aside={
          <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <p className={EYEBROW}>Still stuck?</p>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              Write to us directly and a person — not a bot — will answer.
            </p>
            <a
              href="mailto:huixtech2099@gmail.com"
              className="mt-4 inline-block text-[14px] font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              huixtech2099@gmail.com
            </a>
          </div>
        }
      />

      <section className={`${WRAP} py-14 lg:py-20`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className={EYEBROW}>08 questions</p>
            <h2 className="mt-3 max-w-xs text-[26px] font-semibold leading-tight tracking-[-0.03em]">
              The things people ask before we start.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {faqs.map((faq, index) => {
                const open = openIndex === index
                return (
                  <div key={faq.question} className="border-b border-border">
                    <button
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[16px] font-medium leading-snug tracking-[-0.01em] sm:text-[17px]">
                        {faq.question}
                      </span>
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border">
                        <Plus
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 pr-10 text-[14px] leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="One more thing"
        title="Ask us anything else."
        body="If your question is not here, email us. We answer every serious note within 24–48 hours."
        primary={{ label: "Email HUIX-2099", href: "mailto:huixtech2099@gmail.com" }}
        secondary={{ label: "Contact page", href: "/contact" }}
      />

      <Footer />
    </>
  )
}
