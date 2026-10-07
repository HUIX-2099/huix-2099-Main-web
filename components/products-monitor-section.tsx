"use client";

import Link from "next/link";
import { ArrowRight, Crosshair, Radio, ScanLine, Sparkles } from "lucide-react";
import { ParallaxReveal } from "@/components/parallax";
import { IndexMonitor } from "@/components/index-monitor";

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

export function ProductsMonitorSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 top-4 select-none text-[160px] font-bold leading-none text-foreground/[0.05] sm:text-[240px] lg:text-[320px]"
        style={{ fontFamily: "Mohican, sans-serif" }}
      >
        03
      </div>

      <div className="relative mx-auto max-w-6xl">
        <ParallaxReveal direction="up" delay={0.05}>
          <div
            className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70"
            style={{ fontFamily: monoFont }}
          >
            <span>[03] Products</span>
            <span className="hidden sm:inline">CAT NO · PRD-IDX</span>
          </div>
        </ParallaxReveal>

        <ParallaxReveal direction="up" delay={0.1}>
          <Link
            href="/products"
            aria-label="View all HUIX-2099 products"
            className="group block rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <IndexMonitor
              interactive
              heading={
                <h2
                  className="text-2xl font-bold uppercase leading-[1.05] tracking-[0.06em] sm:text-3xl"
                  style={{ fontFamily: "Mohican, sans-serif" }}
                >
                  Our
                  <br />
                  Products
                </h2>
              }
              stats={[
                { value: "07", label: "Active builds", icon: ScanLine },
                { value: "06", label: "Categories", icon: Sparkles },
                { value: "2026", label: "Current cycle", icon: Radio },
              ]}
              action={
                <span
                  className="flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-orange-400 transition-colors group-hover:bg-neutral-800"
                  style={{ fontFamily: monoFont }}
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              }
              bigValue="07"
              bigCaption={
                <>
                  Software · Games
                  <br />
                  Tools · XR · AI
                  <Crosshair className="mt-2 h-4 w-4" strokeWidth={1.5} />
                </>
              }
              description="Tools, games, and software built by HUIX-2099 in Monrovia, Liberia. Open the full index to explore every build."
            />
          </Link>
        </ParallaxReveal>
      </div>
    </section>
  );
}
