"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Search, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { teamMembers } from "./data"
import { QRCode } from "@/components/qr-code"
import { Barcode } from "@/components/barcode"

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMembers = teamMembers.filter((member) => {
    const term = searchQuery.toLowerCase()
    return (
      member.name.toLowerCase().includes(term) ||
      member.role.toLowerCase().includes(term) ||
      member.focus.toLowerCase().includes(term)
    )
  })

  return (
    <>
      <Navbar />

      <section className="py-20 px-4 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Series Header */}
          <div className="mb-12 border-b border-border/70">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 gap-6">
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-8xl lg:text-9xl font-bold text-foreground/10 leading-none" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>01</div>
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">Team</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.25em' }}>TEAM</h1>
                </div>
              </div>

              {/* Smart Search Bar */}
              <div className="relative w-full md:w-auto md:max-w-xs lg:max-w-md flex-1 mb-2">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search team by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card/50 border border-border/60 text-foreground text-sm rounded-full pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all backdrop-blur-sm shadow-sm"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredMembers.map((member, index) => {

              const TextContent = () => (
                <div className="flex flex-col p-6 sm:p-8 flex-1 bg-card min-h-[250px] justify-between z-10 w-full relative">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight tracking-tight truncate">
                          {member.name}
                        </h3>
                        <span className="shrink-0 px-3 py-1 rounded-full border border-border text-xs font-medium text-foreground tracking-wider bg-background/50 backdrop-blur-sm">
                          {member.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium mb-2">
                        {member.location} • {member.role.split('&')[0].trim()}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {member.tagline}
                      </p>
                    </div>
                    <div className="shrink-0 p-1.5 border border-border/80 bg-background shadow-sm">
                      <QRCode value={`https://huix.amaratech.io/team/${member.id}`} size={56} className="rounded-none opacity-90" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-6 border-t border-border/40">
                    <div className="flex flex-col gap-3 min-w-0 pr-4">
                      <div className="flex items-center gap-3 relative before:absolute before:inset-y-0 before:-left-3 before:w-1 before:bg-foreground/20">
                        <div className="flex flex-col">
                          <Barcode value={`HUIX-${member.id.toUpperCase()}`} className="h-6 max-w-[100px] opacity-80 mix-blend-multiply dark:mix-blend-lighten grayscale" />
                          <div className="text-[10px] font-mono text-muted-foreground/70 mt-1.5 tracking-[0.2em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse"></span>
                            ID-VERIFIED
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-foreground truncate mt-1">
                        {member.email}
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 bg-foreground text-background pl-4 pr-1.5 py-1.5 rounded-full hover:bg-foreground/90 transition-colors shadow-md group-hover:bg-primary group-hover:text-primary-foreground">
                      <span className="text-sm font-semibold">View</span>
                      <div className="w-7 h-7 rounded-full bg-background flex items-center justify-center group-hover:bg-primary-foreground">
                        <ArrowUpRight className="w-3.5 h-3.5 text-foreground group-hover:text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              );

              const ImageContent = () => (
                <div className="relative h-[280px] sm:h-[320px] w-full shrink-0 overflow-hidden bg-muted">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Focus Tags Overlay */}
                  <div className={`absolute inset-x-4 flex justify-between items-start z-10 ${index % 2 === 0 ? 'bottom-4' : 'top-4'}`}>
                    <div className="flex gap-2 flex-wrap">
                      {member.focus.split('·').slice(0, 2).map((cat, i) => (
                        <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white/90 border border-white/20 shadow-sm uppercase tracking-wider font-medium">
                          {cat.trim()}
                        </span>
                      ))}
                    </div>
                    <span className="text-white text-xs font-bold flex items-center gap-1 shrink-0 drop-shadow-lg px-2 py-1 bg-black/40 rounded-md backdrop-blur-sm">
                      ★ {member.id === 'victor' ? '5.0' : '4.8'}
                    </span>
                  </div>

                  <div className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 ${index % 2 === 0 ? 'top-4' : 'bottom-4'} bg-black/30 px-2 py-1 rounded-full backdrop-blur-md`}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full bg-white ${i === 0 ? 'opacity-100' : 'opacity-50'}`} />
                    ))}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/team/${member.id}`}
                    className="group flex flex-col rounded-[24px] sm:rounded-[32px] bg-card border border-border/60 hover:border-foreground/20 overflow-hidden shadow-sm hover:shadow-xl transition-all w-full cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-foreground/20 h-full"
                  >
                    {index % 2 === 0 ? (
                      <>
                        <TextContent />
                        <ImageContent />
                      </>
                    ) : (
                      <>
                        <ImageContent />
                        <TextContent />
                      </>
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {filteredMembers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-24 border border-dashed border-border rounded-xl bg-card/10"
              >
                <p className="text-muted-foreground text-sm uppercase tracking-widest">No team members match your query.</p>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
