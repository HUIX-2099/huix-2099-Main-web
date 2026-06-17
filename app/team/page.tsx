"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { teamMembers, HUIX_COMPANY_TEAM_IDS } from "./data"
import { TeamProfileCard } from "@/components/team-profile-card"

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const visibleMembers = teamMembers.filter((member) =>
    HUIX_COMPANY_TEAM_IDS.includes(member.id as (typeof HUIX_COMPANY_TEAM_IDS)[number]),
  )

  const filteredMembers = visibleMembers.filter((member) => {
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

      <section className="min-h-screen bg-background px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Series Header */}
          <div className="mb-12 border-b border-border/70">
            <div className="flex flex-col justify-between gap-6 pb-6 md:flex-row md:items-end">
              <div className="flex shrink-0 items-center gap-6">
                <div className="text-8xl font-bold leading-none text-foreground/10 lg:text-9xl" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.1em" }}>
                  01
                </div>
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">HUIX-2099 · Company</div>
                  <h1 className="text-2xl font-bold text-foreground md:text-3xl" style={{ fontFamily: "Mohican, sans-serif", letterSpacing: "0.25em" }}>
                    HUIX TEAM
                  </h1>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">Studio leadership — Liberia-based company team only.</p>
                </div>
              </div>

              {/* Smart Search Bar */}
              <div className="relative mb-2 w-full flex-1 md:w-auto md:max-w-xs lg:max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search team by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border/60 bg-card/50 py-4 pl-12 pr-6 text-sm text-foreground shadow-sm backdrop-blur-sm transition-all focus:border-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-6 sm:gap-8 md:grid-cols-2">
            {filteredMembers.map((member, index) => (
              <TeamProfileCard key={member.id} variant="member" member={member} index={index} />
            ))}

            {filteredMembers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full rounded-xl border border-dashed border-border bg-card/10 py-24 text-center"
              >
                <p className="text-sm uppercase tracking-widest text-muted-foreground">No team members match your query.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
