"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { useState } from "react"
import { Twitter, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M1.636 21H5.455V11.73L0 7.64v11.726A1.636 1.636 0 0 0 1.636 21z" fill="#4285F4"/>
    <path d="M22.364 21H18.545V11.73l5.455-4.09v11.726A1.636 1.636 0 0 1 22.364 21z" fill="#34A853"/>
    <path d="M18.545 4.64v7.09L24 7.64V5.457c0-2.023-2.309-3.178-3.927-1.964L18.545 4.64zM5.455 11.73V4.64L3.927 3.493C2.309 2.279 0 3.434 0 5.457v2.183l5.455 4.09z" fill="#EA4335"/>
    <path d="M12 16.64L18.545 11.73V4.64L12 9.548 5.455 4.64v7.09L12 16.64z" fill="#FBBC05"/>
  </svg>
)

export default function ContactPage() {
  const { resolvedTheme } = useTheme()
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isCardHovered, setIsCardHovered] = useState(false)

  const logoUrl =
    resolvedTheme === "dark" ? "/images/huix-202099-20dark-20logo-20jpg.jpg" : "/images/huix-202099-20white-20logo-20jpg.jpg"

  const socialLinks = [
    { icon: Twitter, url: "https://x.com/Huix2099", label: "X / Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/huix.2099/", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61572485499528", label: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@HUIX-2099", label: "YouTube" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "huixtech2099@gmail.com", href: "mailto:huixtech2099@gmail.com" },
    { icon: Phone, label: "Phone", value: "+231 776 800 064", href: "tel:+231776800064" },
    { icon: Phone, label: "Alt Phone", value: "+231 770 499 140", href: "tel:+231770499140" },
    { icon: MapPin, label: "Location", value: "Monrovia, Liberia", href: null },
    { icon: Clock, label: "Hours", value: "Mon-Fri, 9AM-6PM WAT", href: null },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Top Meta Strip */}
          <div 
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>CONTACT</span>
            </div>
            <div className="flex items-center gap-3">
              <span>CAT NO · CNT-001</span>
              <span className="h-px w-4 bg-border/50" />
              <span>CONNECT</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[160px] lg:text-[220px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
              >
                C
              </motion.div>

              {/* Right - Content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div 
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                    style={{ fontFamily: monoFont }}
                  >
                    [04] GET IN TOUCH
                  </div>
                  <h1 
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    CONTACT
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-6" />
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    Have a project in mind? Let's collaborate and bring your vision to life 
                    with cutting-edge technology and innovative solutions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardholder Section */}
      <section className="py-12 bg-[#202020]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Card Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="relative w-full max-w-[360px] h-[280px] mx-auto">
                {/* Hidden Info */}
                <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${isCardHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
                    Contact Info
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
                    <div className="flex justify-between"><span>Email</span><span className="text-neutral-300">huixtech2099@gmail.com</span></div>
                    <div className="flex justify-between"><span>Phone</span><span className="text-neutral-300">+231 776 800 064</span></div>
                    <div className="flex justify-between"><span>Location</span><span className="text-neutral-300">Monrovia, LBR</span></div>
                    <div className="flex justify-between"><span>Response</span><span className="text-green-400">24-48 hrs</span></div>
                    <div className="flex justify-between"><span>Status</span><span className="text-green-400">Open</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
                    <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
                      HUIX-2099 · Contact Center
                    </div>
                  </div>
                </div>

                {/* Wallet Body */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-transform duration-300 ${isCardHovered ? '-translate-y-4' : ''}`}
                  style={{ backgroundColor: '#1a1a1a', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                />

                {/* Gray Card */}
                <div 
                  className={`absolute -top-6 left-3 right-3 h-20 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-6' : ''}`}
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <div>SN-CNT-2024</div>
                    <div>REV-A1</div>
                    <div>COM-LBR-001</div>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    ○ OPEN
                  </div>
                  <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
                    <div className="text-lg font-bold text-neutral-400">24</div>
                    <div className="text-lg font-bold text-neutral-500">HRS</div>
                  </div>
                </div>

                {/* Green Accent Card */}
                <div 
                  className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-5' : ''}`}
                  style={{ backgroundColor: '#22c55e' }}
                >
                  <div 
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full"
                    style={{ backgroundColor: '#1a1a1a' }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                      <span className="text-[7px] text-black/50" style={{ fontFamily: monoFont }}>© HUIX 2025</span>
                    </div>
                    <div className="text-4xl font-bold text-black leading-none tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      GET IN
                    </div>
                    <div className="text-3xl font-bold text-black leading-none tracking-[0.08em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      TOUCH
                    </div>
                    <div className="absolute top-4 right-4 text-right text-[7px] text-black/60" style={{ fontFamily: monoFont }}>
                      <div>EMAIL · CALL</div>
                      <div>CONNECT</div>
                      <div className="mt-1">v1.0</div>
                    </div>
                  </div>
                </div>

                {/* Accent Tab */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${isCardHovered ? '-translate-y-8' : '-translate-y-1/2'}`}
                  style={{ backgroundColor: '#22c55e' }} 
                />

                {/* Keychain */}
                <div className={`absolute -right-12 top-1/3 transition-transform duration-300 ${isCardHovered ? '-translate-y-3' : ''}`}>
                  <div className="w-3 h-6 bg-neutral-700 rounded-sm" />
                  <div className="w-2 h-12 bg-neutral-800 rounded-sm mx-auto" />
                  <div className="w-6 h-6 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider" style={{ fontFamily: monoFont }}>
                  {isCardHovered ? 'Release to close' : 'Hover to reveal'}
                </span>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                Connect · Collaborate
              </div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                LET'S TALK
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                Ready to start your next project? We're here to help bring your ideas to life. 
                Reach out and let's create something extraordinary together.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "RESPONSE", value: "24-48h" },
                  { label: "TIMEZONE", value: "WAT" },
                  { label: "STATUS", value: "OPEN" },
                ].map((stat) => (
                  <div key={stat.label} className="px-3 py-2 bg-neutral-800/50 border border-neutral-700 text-[10px]" style={{ fontFamily: monoFont }}>
                    <span className="text-neutral-500">{stat.label}:</span>{' '}
                    <span className="text-green-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Left: Gmail Link Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-card border border-border p-12 text-center h-full"
            >
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-8 shadow-sm">
                <GmailIcon className="w-20 h-20" />
              </div>
              <h3 
                className="text-4xl font-bold mb-4 uppercase" 
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                Direct Email
              </h3>
              <p className="text-muted-foreground mb-10 max-w-md leading-relaxed text-lg">
                We've streamlined our communication. Click the button below to open your email client and send us a message directly to <strong className="text-foreground">huixtech2099@gmail.com</strong>.
              </p>
              <a 
                href="mailto:huixtech2099@gmail.com"
                className="group px-10 py-5 bg-foreground text-background text-base uppercase tracking-wider flex items-center gap-3 hover:bg-foreground/90 hover:scale-105 transition-all font-bold rounded-lg shadow-xl"
                style={{ fontFamily: monoFont }}
              >
                Click to Contact
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="border border-border">
                <div className="px-5 py-3 bg-card/50 border-b border-border">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: monoFont }}>
                    Contact Details
                  </div>
                </div>
                <div className="divide-y divide-border/50">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="p-4 hover:bg-card/30 transition-colors"
                    >
                      {item.href ? (
                        <a href={item.href} className="flex items-start gap-3 group">
                          <item.icon className="w-4 h-4 text-muted-foreground/50 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-1" style={{ fontFamily: monoFont }}>
                              {item.label}
                            </div>
                            <div className="text-sm text-foreground group-hover:text-foreground/80 transition-colors">
                              {item.value}
                            </div>
                          </div>
                          <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-foreground transition-colors" />
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">
                          <item.icon className="w-4 h-4 text-muted-foreground/50 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-1" style={{ fontFamily: monoFont }}>
                              {item.label}
                            </div>
                            <div className="text-sm text-foreground">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="border border-border">
                <div className="px-5 py-3 bg-card/50 border-b border-border">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: monoFont }}>
                    Follow Us
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 border border-border/50 hover:border-foreground/30 hover:bg-card/50 transition-all"
                      >
                        <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors" style={{ fontFamily: monoFont }}>
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="border border-border p-5 bg-card/30">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 animate-pulse" />
                  <div>
                    <div className="text-sm font-medium mb-1">Quick Response</div>
                    <div className="text-[10px] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      We typically respond within 24-48 hours
                    </div>
                  </div>
                </div>
                <div className="h-px bg-border mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For urgent inquiries, feel free to call us directly during business hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Meta Strip */}
      <section className="border-t border-border py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
            <div className="flex items-center gap-6">
              <span>HUIX-2099</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>CAT NO · CNT-001</span>
            </div>
            <div className="flex items-center gap-6">
              <span>REV A</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>2025</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
