"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background cursor-none flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 relative overflow-hidden mt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl border border-border/50 bg-card/30 p-12 sm:p-20 rounded-[32px] backdrop-blur-sm"
        >
          <div 
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-mono"
          >
            SYSTEM STATUS · IN DEVELOPMENT
          </div>

          <h1 
            className="text-5xl sm:text-7xl lg:text-7xl font-bold text-foreground mb-6 uppercase tracking-[0.05em] leading-tight"
            style={{ fontFamily: 'Mohican, sans-serif' }}
          >
            Showcase<br/>Coming Soon
          </h1>

          <div className="h-px w-24 bg-foreground/20 mb-8 mx-auto" />

          <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
            We are currently compiling our latest prototypes and digital experiences. 
            The full showcase will be available online shortly.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-full font-semibold uppercase tracking-widest text-sm flex items-center gap-3 transition-shadow hover:shadow-lg hover:shadow-foreground/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <span>Return Home</span>
            </motion.button>
          </Link>
          
          <div 
            className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.15em] text-muted-foreground/40 font-mono hidden sm:block"
          >
            REF · 04 · SHOWCASE
          </div>
          <div 
            className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.15em] text-muted-foreground/40 font-mono hidden sm:block"
          >
            HUIX-2099
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
