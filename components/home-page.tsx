"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomeClean } from "@/components/home-clean";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HomeClean />
      <Footer />
    </div>
  );
}
