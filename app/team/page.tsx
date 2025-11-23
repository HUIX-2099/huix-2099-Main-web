"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function TeamPage() {
  const headshot = "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/558881686_787057407650313_2763870488666293635_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHPkhB-RX6-ouW-P271Z-gVF-L79RMvP5MX4vv1Ey8_k1P4l9hieOMaPHSExtkD3gIESbN9R-VO5_yfBeP8d8nz&_nc_ohc=dpYPenuxOjQQ7kNvwH9shoe&_nc_oc=Adnln5c_nrHUs2zcNwH19p6hZNmvR2dnZ9s4aEeLWsqD_I-85P8toDQkzJ70-iF_zeI&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=_bD84OyyzvL6Myz74QvY6w&oh=00_AfjlrIYc21uHKU3I-RJihRLTUYaHCAOf-F1vfIeYqdKMeA&oe=69266FC7"

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Series Header */}
          <div className="mb-12 border-b border-border/70">
            <div className="flex items-end justify-between pb-6">
              <div className="flex items-center gap-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">Team</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif' }}>T E A M</h1>
                </div>
              </div>
              <div className="hidden md:block text-xs text-muted-foreground tracking-widest uppercase">Series / 01 · v1</div>
            </div>
          </div>

          {/* Member Card */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-border bg-card"
            >
              <img src={headshot} alt="Victor Edet Coleman" className="w-full h-auto object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">Founder</div>
                <div className="text-sm text-muted-foreground tabular-nums" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
              </div>
              <div className="h-px w-full bg-border" />
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Mohican, sans-serif' }}>V i c t o r  ·  E d e t  ·  C o l e m a n</h2>
              <p className="text-muted-foreground">3D Software Engineer · Founder of HUIX-2099</p>

              {/* Spec Panel */}
              <div className="mt-4 border border-border rounded-lg p-4 bg-background">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
                  <div>
                    <div className="uppercase tracking-[0.12em]">Focus</div>
                    <div className="text-foreground">XR · 3D Visualization · Systems</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Location</div>
                    <div className="text-foreground">Monrovia, Liberia</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Email</div>
                    <div className="text-foreground">huixtech2099@gmail.com</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-[0.12em]">Status</div>
                    <div className="text-foreground">Funding · Concept Stage · Experimental</div>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">
                Building HUIX-HORIZEN and Virtual Past Liberia—architectural and cultural visualization platforms designed
                to enable Liberia and the region to imagine, prototype, and build the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
