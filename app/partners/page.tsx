"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PartnersPage() {
  const partners = [
    {
      name: "Liberia Digital Insights",
      type: "Media Partner",
      description: "Liberia-based media company providing digital insights and news coverage.",
      since: "2024",
      logo: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/472668615_122151560240327586_8550086386214923478_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SF3lOYooPasQ7kNvwHETaZD&_nc_oc=Adlnny_O4VfMaY4oSmnRImePSdQmTN96-O1O__70etDyi11M6g5oTLH9VGj3toQ6Nn767nX42Gdv1CW9nWJ8kHl-&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=P9zSunhwMw2iQdBnCiPp7w&oh=00_Afg7kzaGkGYB0HoqaKJ0M1HAvm205lSlte8ifArQM5KXvg&oe=691FFB6D",
    },
  ]

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Partners</div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Strategic Partnerships</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We collaborate with industry leaders to deliver exceptional solutions and drive innovation across Africa
              and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all hover:shadow-sm"
              >
                {partner.logo && (
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                )}
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  {partner.type}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{partner.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{partner.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Partnership Since: {partner.since}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-12 rounded-lg bg-card border border-border text-center"
          >
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-4">Template Ready</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">Become a Partner</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in collaborating with HUIX-2099? We're always looking for innovative partners to grow together
              and drive mutual success.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
