"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Play, ShieldAlert, Monitor, Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

export default function MonroviaHustlePage() {
  const containerRef = useRef<HTMLElement>(null)
  
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Scroll Parallax Effects
  const yTextBack = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const yTextFront = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const ySpotlight = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  // Note: overflow-clip allows sticky elements inside the body to still work correctly,
  // unlike overflow-hidden which breaks the scrolling context layout.
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-clip selection:bg-[#002868] selection:text-white">
      <Navbar />
      
      <main className="flex-1 relative pt-20">
        {/* HERO SECTION */}
        <section 
          ref={containerRef}
          className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 overflow-visible"
        >
          
          {/* Background Typography Effects - Dignitas Style */}
          <motion.div 
            style={{ y: yTextBack }}
            className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none z-0"
          >
             <h1 
               className="text-[8rem] md:text-[15rem] lg:text-[22rem] font-black italic text-transparent whitespace-nowrap tracking-tighter" 
               style={{ 
                 WebkitTextStroke: '2px hsl(var(--foreground) / 0.5)', 
                 transform: 'rotate(-3deg) translateY(-10%) scale(1.1)',
               }}
             >
               MONROVIA
             </h1>
          </motion.div>

          <motion.div 
            style={{ y: yTextFront }}
            className="absolute top-1/2 left-1/2 w-full max-w-[100vw] flex justify-center -translate-x-1/2 -translate-y-1/2 z-0 opacity-15 dark:opacity-20 pointer-events-none select-none"
          >
             <h2 
               className="text-[10rem] md:text-[18rem] lg:text-[25rem] font-black italic text-[#BF0A30] whitespace-nowrap tracking-tighter" 
               style={{ 
                 transform: 'rotate(-3deg) translateY(15%) scale(1.2)', 
                 filter: 'blur(2px)'
               }}
             >
               HUSTLE
             </h2>
          </motion.div>

          {/* Seamless Gradients adapting to theme */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none"></div>

          {/* Glowing backdrop spotlight */}
          <motion.div 
            style={{ y: ySpotlight }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] bg-[#002868] blur-[150px] rounded-full opacity-[0.25] pointer-events-none z-10"
          ></motion.div>

          {/* Content Container */}
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col items-center justify-start flex-grow">
            
            {/* Top Header Labels */}
            <div className="w-full max-w-6xl flex justify-between items-start mb-4 lg:mb-0 z-30">
               <div className="bg-[#002868] text-white font-bold px-4 py-1.5 flex items-center gap-2 uppercase tracking-tight text-xs sm:text-sm transform -skew-x-12 translate-x-2 shadow-sm">
                 <span className="skew-x-12 inline-flex items-center gap-2">
                   <Monitor className="w-4 h-4" />
                   Official Demo Campaign
                 </span>
               </div>
               <div className="text-white font-mono text-xs sm:text-sm border border-white/20 px-4 py-1.5 flex items-center gap-2 bg-[#BF0A30]/90 backdrop-blur-md shadow-sm">
                 <span className="w-2 h-2 rounded-full bg-white animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                 CAMPAIGN LIVE
               </div>
            </div>

            {/* Central Subject / Provided Image */}
            <motion.div 
              style={{ y: yImage }}
              className="relative w-full max-w-5xl mx-auto flex items-center justify-center flex-grow mt-6 lg:mt-0 transition-transform duration-700 ease-out hover:scale-[1.01]"
            >
              <Image 
                src="/products/Monrovia_hustle_Demo_Campane/herosection.png"
                alt="Monrovia Hustle Hero Artwork"
                width={1920}
                height={1080}
                className="w-full max-h-[65vh] object-contain relative z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </motion.div>

            {/* Bottom Stats / Glass UI Cards (Dignitas Inspired) */}
            <motion.div 
              style={{ y: yCards }}
              className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-30"
            >
              
              {/* INFO CARD 1 */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#002868]/50 cursor-default group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#002868]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <Gamepad2 className="w-4 h-4 text-[#BF0A30]" /> Game Details
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-6 group-hover:text-[#002868] transition-colors duration-300">
                   Survival<br/>Action RPG
                 </div>
                 <div className="mt-auto pt-4 border-t border-border flex justify-between w-full text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                   <span>Platform <span className="text-foreground ml-1 text-sm font-sans font-bold">PC</span></span>
                   <span>Engine <span className="text-foreground ml-1 text-sm font-sans font-bold">Godot</span></span>
                 </div>
              </div>

              {/* PRIMARY CALL TO ACTION CARD */}
              <div className="bg-background backdrop-blur-xl border border-[#BF0A30]/50 p-6 flex flex-col justify-between group transform md:-translate-y-6 hover:-translate-y-8 transition-transform duration-500 relative shadow-[0_10px_40px_rgba(191,10,48,0.15)] hover:shadow-[0_15px_60px_rgba(191,10,48,0.25)]">
                 <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card z-0"></div>
                 <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                    <ShieldAlert className="w-5 h-5 text-[#BF0A30]" />
                 </div>
                 <div className="text-[#002868] dark:text-[#5c89d6] font-bold font-mono text-xs mb-2 uppercase tracking-[0.2em] z-10">
                   Access Granted
                 </div>
                 <div className="text-3xl sm:text-4xl font-black text-foreground italic tracking-tighter uppercase leading-none z-10">
                   Play The<br/>Demo Now
                 </div>
                 
                 <div className="mt-8 space-y-3 relative z-10">
                   <Link href="#download">
                     <button className="w-full bg-[#BF0A30] hover:bg-red-800 text-white font-black uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(191,10,48,0.3)]">
                       <Play className="w-5 h-5 fill-white" />
                       Download Game
                     </button>
                   </Link>
                   <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                     Supports Windows 10/11
                   </p>
                 </div>
              </div>

              {/* INFO CARD 3 */}
              <div className="bg-background/80 backdrop-blur-xl border border-border p-6 flex flex-col transition-all duration-300 hover:bg-card hover:border-[#BF0A30]/50 cursor-default group overflow-hidden relative shadow-lg">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#BF0A30]/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                 <div className="text-foreground/80 font-mono text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                   <ArrowRight className="w-4 h-4 text-[#002868]" /> Next Steps
                 </div>
                 <div className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter uppercase mb-6 group-hover:text-[#BF0A30] transition-colors duration-300">
                   Support<br/>The Campaign
                 </div>
                 <div className="mt-auto pt-4 border-t border-border flex justify-between w-full text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                   <span>Goal <span className="text-foreground ml-1 text-sm font-sans font-bold">$10K</span></span>
                   <span>Developer <span className="text-foreground ml-1 text-sm font-sans font-bold underline decoration-[#002868]/70">HUIX-2099</span></span>
                 </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Design Brief / Descriptive Content Section */}
        <section className="w-full bg-background py-20 lg:py-32 border-t border-border mt-12 bg-[#fafafa] dark:bg-background text-foreground transition-colors duration-300">
           <div className="container max-w-4xl mx-auto px-6 lg:px-8 font-sans">
             
             {/* Header */}
             <div className="flex justify-between items-center mb-16 text-xs font-bold uppercase tracking-widest text-muted-foreground/70 h-8">
                <div>brandbrief ™ &nbsp;&nbsp;&nbsp; WEEKLY DESIGN BRIEF</div>
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded">
                  {mounted && (
                    <Image
                      src={resolvedTheme === 'dark' ? '/products/Monrovia_hustle_Demo_Campane/darkicon.png' : '/products/Monrovia_hustle_Demo_Campane/lighticon.png'}
                      alt="Monrovia Hustle Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
             </div>
             
             <h3 className="text-5xl sm:text-6xl md:text-7xl font-black mb-12 tracking-tighter text-foreground" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
               Design Brief
             </h3>

             {/* Brief Content */}
             <div className="space-y-8 text-foreground/85 leading-[1.8] text-[15px] sm:text-base font-medium">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">The Brief</h4>
                <p>
                  Cozy is a home textile brand dedicated to creating warm, inviting spaces with premium-quality fabrics. Specializing in cozy, luxurious products such as bed linens, throw blankets, and decorative cushions, Cozy brings comfort and elegance into every corner of your home.
                </p>
                <p>
                  The brand's philosophy revolves around blending exceptional craftsmanship with timeless style, offering products that feel as good as they look. Perfect for those who value softness, durability, and a touch of indulgence, Cozy is the go-to choice for transforming bedrooms and living spaces into personal sanctuaries.
                </p>
                <p>
                  The goal is to create a brand identity that embodies the feeling of relaxation and comfort, with a modern twist that appeals to style-conscious homeowners. Think warm, neutral tones, elegant typography, and packaging that's as thoughtful as the products themselves.
                </p>
             </div>

             {/* 3-Column Info */}
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-[15px]">
                <div>
                  <h5 className="font-bold mb-3 text-sm">Business Name</h5>
                  <p className="font-semibold text-lg">cozy</p>
                </div>
                <div>
                  <h5 className="font-bold mb-3 text-sm">Deliverables</h5>
                  <p className="font-semibold leading-relaxed">Brand Identity,<br/>Packaging Design &<br/>Product Tags</p>
                </div>
                <div>
                  <h5 className="font-bold mb-3 text-sm">Keywords</h5>
                  <p className="font-semibold leading-relaxed">Warm, Luxurious, Soft,<br/>Minimal, Inviting</p>
                </div>
             </div>

             {/* Callout Box */}
             <div className="border-2 border-foreground/10 rounded-3xl p-8 sm:p-12 mt-16 flex flex-col gap-6 text-[15px] bg-foreground/[0.02]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-20">
                  <div className="text-muted-foreground w-32">Deadline</div>
                  <div className="font-bold">December 03 - 09 am CET</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-20">
                  <div className="text-muted-foreground w-32">Use this hashtag</div>
                  <div className="font-bold">#brandbriefcozy</div>
                </div>
                <div className="mt-4 text-muted-foreground pt-6 border-t border-border/50">
                  Follow and tag @brand.brief and use the hashtag.
                </div>
             </div>

             {/* Footer line */}
             <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t-2 border-foreground/5 text-xs font-semibold text-muted-foreground uppercase tracking-widest gap-4 sm:gap-0">
                <div>Level up your business, skills and templates, visit our website</div>
                <div className="text-foreground">www.brandbrief.io</div>
             </div>

           </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}
