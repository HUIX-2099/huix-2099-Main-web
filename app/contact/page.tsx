"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { useState } from "react"
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react"
import { ParallaxReveal, ParallaxText, ParallaxFloat } from "@/components/parallax"

export default function ContactPage() {
  const { resolvedTheme } = useTheme()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const logoUrl =
    resolvedTheme === "dark" ? "/images/huix-202099-20dark-20logo-20jpg.jpg" : "/images/huix-202099-20white-20logo-20jpg.jpg"

  const socialLinks = [
    { icon: Twitter, url: "https://x.com/Huix2099", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/huix.2099/", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61572485499528", label: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@HUIX-2099", label: "YouTube" },
  ]

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-background flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <ParallaxReveal direction="up">
            <div className="mb-12 border-b border-border/70">
              <div className="flex items-end justify-between pb-6">
                <div className="flex items-center gap-6">
                  <ParallaxText speed={0.3} direction="up">
                    <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>04</div>
                  </ParallaxText>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Contact</div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>G E T  ·  I N  ·  T O U C H</h1>
                  </div>
                </div>
                <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 04 · v1</div>
              </div>
            </div>
          </ParallaxReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Logo & Company Info */}
            <ParallaxReveal direction="left">
              <ParallaxFloat intensity={15}>
                <img src={logoUrl || "/placeholder.svg"} alt="HUIX-2099" className="h-48 w-auto mb-8 object-contain" />
              </ParallaxFloat>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have a project in mind? Let's collaborate and bring your vision to life with cutting-edge technology
                    and innovative solutions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Email</h3>
                    <p className="text-foreground">huixtech2099@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Phone</h3>
                    <p className="text-foreground">+231776800064</p>
                    <p className="text-foreground">+231770499140</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Location</h3>
                    <p className="text-foreground">Monrovia, Liberia</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Business Hours</h3>
                    <p className="text-foreground">Monday - Friday, 9AM - 6PM WAT</p>
                  </div>
                </div>

                <div className="space-y-2 pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ParallaxReveal>

            {/* Right: Contact Form */}
            <ParallaxReveal direction="right" delay={0.1}>
              <ParallaxFloat intensity={8}>
                <div className="bg-card border border-border rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </motion.button>
              </form>
                </div>
              </ParallaxFloat>
            </ParallaxReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
