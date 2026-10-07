"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ParallaxReveal } from "@/components/parallax";
import { BoardingPass } from "@/components/boarding-pass";
import { HuixTestimonialsSection } from "@/components/huix-testimonials";
import { ProductsMonitorSection } from "@/components/products-monitor-section";
import { AboutPosterSection } from "@/components/about-poster-section";
import { DiscoverSection } from "@/components/discover-section";

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';


export function HomePage() {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      <AboutPosterSection />

      <ProductsMonitorSection />

      <HuixTestimonialsSection compact />

      <DiscoverSection />

      {/* CTA Section - Editorial Document Style */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left - Boarding pass to the future */}
            <ParallaxReveal direction="up">
              <BoardingPass
                href="/contact"
                tone="invert"
                airline="HUIX-2099 · BOARDING PASS"
                flight="DEST · 2099"
                from={{ code: "NOW", label: "present day" }}
                to={{ code: "2099", label: "the future" }}
                rows={[
                  { label: "Gate", value: "A-01" },
                  { label: "Seat", value: "YOU" },
                  { label: "Status", value: "Boarding" },
                ]}
                id="HX-2099-FUTURE-BRD"
                cta="Board now"
              />
            </ParallaxReveal>

            {/* Right - Content */}
            <ParallaxReveal direction="right">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  SECTION · 06 — CONTACT
                </div>
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  READY TO BUILD<br />THE FUTURE?
                </h2>
                <div className="h-px w-24 bg-foreground/20 mb-6" />
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  Join us in creating next-generation digital experiences that transform how people interact with
                  technology. Let's pioneer the future together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 px-6 py-4 bg-foreground text-background text-sm uppercase tracking-[0.15em]"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Get Started</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 px-6 py-4 border border-border text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                      style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                </div>

                {/* Bottom Meta */}
                <div
                  className="mt-10 pt-4 border-t border-border/50 flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
                >
                  <span>HUIX-2099</span>
                  <span className="h-px flex-1 bg-border/50" />
                  <span>MONROVIA · LIBERIA</span>
                  <span className="h-px w-4 bg-border/50" />
                  <span>2024</span>
                </div>
              </div>
            </ParallaxReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
