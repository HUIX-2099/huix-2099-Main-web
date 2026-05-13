import type { Metadata } from "next"
import { teamMembers } from "../data"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/site"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronLeft, Headphones, Mic2, Volume2 } from "lucide-react"

export function generateStaticParams() {
    return teamMembers.map((member) => ({
        id: member.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const member = teamMembers.find((m) => m.id === id)
    if (!member) {
        return { title: { absolute: "Team | HUIX-2099" } }
    }

    const canonical = `${SITE_URL}/team/${member.id}`
    const voiceTitle = member.voiceProfile
        ? `${member.name} — Monrovia Hustle 3D voice cast · ${member.role} | HUIX-2099 Liberia`
        : `${member.name} — ${member.role} | HUIX-2099 Liberia`

    const rawDesc = member.voiceProfile
        ? `${member.name} is on the Monrovia Hustle 3D voice cast (${member.role}). ${member.tagline} HUIX-2099, Monrovia, Liberia — led by Victor Edet Coleman, Founder & CTO.`
        : `${member.name}, ${member.role} at HUIX-2099. ${member.tagline} ${member.location}.`

    const description = rawDesc.length > 165 ? `${rawDesc.slice(0, 162)}…` : rawDesc

    const keywords = [
        member.name,
        "HUIX-2099",
        "Victor Edet Coleman",
        "Liberia",
        "Monrovia",
        "Monrovia Hustle 3D",
        member.role,
        member.focus,
        ...(member.voiceProfile ? ["Monrovia Hustle voice cast", "Liberian voice actor", "HUIX voice cast"] : []),
    ]

    return {
        title: {
            absolute: voiceTitle,
        },
        description,
        keywords,
        alternates: { canonical },
        openGraph: {
            title: member.voiceProfile ? `${member.name} · Monrovia Hustle 3D voice` : member.name,
            description: member.tagline,
            url: canonical,
            type: "profile",
            siteName: "HUIX-2099",
        },
        twitter: {
            card: "summary_large_image",
            title: member.name,
            description: member.tagline,
        },
    }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const member = teamMembers.find((m) => m.id === id)

    if (!member) {
        notFound()
    }

    const voiceCastSectionHref = "/products/monrovia-hustle/concept#voice-actors"
    const backHref = member.voiceProfile ? voiceCastSectionHref : "/team"
    const backLabel = member.voiceProfile ? "Back to Voice Cast" : "Back to Team"

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 px-4 bg-background selection:bg-foreground selection:text-background">
                <div className="max-w-4xl mx-auto">
                    <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> {backLabel}
                    </Link>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12">
                        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border border-border bg-muted relative">
                            <img src={member.image} alt={`${member.name} — HUIX-2099 · ${member.role}`} className="w-full h-full object-cover object-top" />
                            <div className="absolute inset-0 border border-foreground/10 rounded-2xl pointer-events-none" />
                            {member.voiceProfile && (
                                <div
                                    className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/95 text-[#BF0A30] shadow-md dark:bg-background/90"
                                    title="Voice cast — Monrovia Hustle 3D"
                                    aria-hidden
                                >
                                    <Volume2 className="h-5 w-5" strokeWidth={2.25} />
                                </div>
                            )}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>
                                {member.name}
                            </h1>
                            <p className="text-sm font-medium text-muted-foreground mb-3 md:mb-4">
                                <span className="font-semibold text-foreground/90">HUIX-2099</span>
                                {" · "}
                                {member.role}
                                {" · "}
                                {member.location}
                            </p>
                            {member.voiceProfile && (
                                <p className="mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                                        <Volume2 className="h-3.5 w-3.5 shrink-0 text-[#BF0A30]" aria-hidden />
                                        Monrovia Hustle 3D · Voice cast
                                    </span>
                                </p>
                            )}
                            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 max-w-2xl">{member.tagline}</p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                                {/* Google Search Link */}
                                {member.googleSearch && (
                                    <a href={member.googleSearch} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors text-sm font-medium shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" className="shrink-0"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                                        Google Details
                                    </a>
                                )}

                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors text-sm font-medium shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        LinkedIn
                                    </a>
                                )}

                                {member.facebook && (
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors text-sm font-medium shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                        Facebook
                                    </a>
                                )}

                                {member.phone && (
                                    <a href={`tel:${member.phone.split(',')[0].trim()}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors text-sm font-medium shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        {member.phone}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-foreground font-sans">Mission</h2>
                        <p className="text-foreground/90 leading-relaxed text-lg mb-10 max-w-3xl">
                            {member.bio}
                        </p>

                        {member.voiceProfile && (
                            <div className="mb-10 rounded-2xl border border-border/80 bg-gradient-to-b from-muted/35 to-muted/15 p-6 md:p-8 dark:from-muted/25 dark:to-muted/10">
                                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-[#BF0A30] shadow-sm dark:bg-card/80">
                                            <Volume2 className="h-6 w-6" strokeWidth={2} aria-hidden />
                                        </span>
                                        <div>
                                            <h2 className="text-xl font-bold text-foreground font-sans">Voice design</h2>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                                                Direction · tone · mix
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6 md:grid-cols-1 md:gap-8">
                                    <div>
                                        <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#002868] dark:text-[#89b8ff]">
                                            <Mic2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                            Direction &amp; character
                                        </h3>
                                        <p className="text-[15px] leading-[1.75] text-foreground/90 md:text-base">
                                            {member.voiceProfile.design}
                                        </p>
                                    </div>
                                    {member.voiceProfile.tone && (
                                        <div className="rounded-xl border border-border/60 bg-background/40 p-4 dark:bg-background/20">
                                            <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                                                <Volume2 className="h-3.5 w-3.5 shrink-0 text-[#BF0A30]" aria-hidden />
                                                Tone palette
                                            </h3>
                                            <p className="text-[15px] leading-[1.75] text-foreground/90 md:text-base">{member.voiceProfile.tone}</p>
                                        </div>
                                    )}
                                    {member.voiceProfile.pipeline && (
                                        <div className="rounded-xl border border-border/60 bg-background/40 p-4 dark:bg-background/20">
                                            <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                                                <Headphones className="h-3.5 w-3.5 shrink-0 text-[#002868] dark:text-[#89b8ff]" aria-hidden />
                                                Capture &amp; in-engine mix
                                            </h3>
                                            <p className="text-[15px] leading-[1.75] text-foreground/90 md:text-base">{member.voiceProfile.pipeline}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {member.photos.length > 1 && (
                            <div className="mb-12">
                                <h3 className="text-xl font-bold mb-6 text-foreground">Gallery</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {member.photos.map((photo) => (
                                        <div key={photo.id} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted group">
                                            <img src={photo.image} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                                <p className="text-white text-xs font-bold uppercase tracking-widest">{photo.caption}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50">
                                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-2">Focus Area</div>
                                <div className="text-sm font-medium">{member.focus}</div>
                            </div>

                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50">
                                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-2">Location</div>
                                <div className="text-sm font-medium">{member.location}</div>
                            </div>

                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50">
                                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-2">Contact</div>
                                <div className="text-sm font-medium break-all">{member.email}</div>
                            </div>

                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50">
                                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-2">Current Status</div>
                                <div className="text-sm font-medium">{member.status}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
