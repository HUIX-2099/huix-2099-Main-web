"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

export default function PolicyPage() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Privacy Policy</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                HUIX-2099 ("we", "us", "our", or "Company") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect information about you in various ways. The information we may collect on the Site
                includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>Personal Data: Name, email address, phone number</li>
                <li>Technical Data: IP address, browser type, pages visited</li>
                <li>Behavioral Data: Information about how you interact with our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. We may use information collected about you via the Site to generate anonymous statistical
                data and to provide, operate, and improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed when required by law or when we believe in good faith that disclosure is necessary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at: contact@huix2099.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 HUIX-2099. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
