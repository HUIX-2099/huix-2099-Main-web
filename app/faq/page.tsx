"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does HUIX-2099 offer?",
      answer:
        "HUIX-2099 specializes in Virtual Reality, Augmented Reality, Extended Reality, 3D visualization, AI/Machine Learning integration, app development, animation, and web engineering. We create comprehensive digital solutions for enterprise and consumer applications.",
    },
    {
      question: "Where is HUIX-2099 located?",
      answer:
        "We are based in Monrovia, Liberia, and serve clients globally. Our strategic location in West Africa allows us to bridge African innovation with global markets.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Contact us through our contact form or email huixtech2099@gmail.com with your project requirements. Our team will schedule a consultation to understand your vision and create a tailored solution.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger enterprise solutions may take 3-6 months. We'll provide a detailed timeline after the initial consultation.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance, support, and updates for all deployed projects. We offer flexible support packages tailored to your needs.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely. We specialize in integrating with existing infrastructure and legacy systems. Our team assesses your current setup and creates seamless integration solutions.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with cutting-edge technologies including React, Next.js, Three.js, Babylon.js, Python, Node.js, TensorFlow, and various cloud platforms. Our tech stack is tailored to each project's requirements.",
    },
    {
      question: "Do you offer training for deployed solutions?",
      answer:
        "Yes, comprehensive training and documentation are included with all projects. We ensure your team is fully equipped to use and maintain the solution.",
    },
  ]

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Help Center
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-secondary transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-4 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-background border-t border-border text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 bg-card border border-border rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">Didn't find your answer?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our team directly for more detailed information about our services.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2.5 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
