"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      

      {/* About Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Futuristic Number */}
            <div className="text-8xl lg:text-9xl font-bold text-foreground/10">
              01
            </div>
            
            {/* Right: Title and Description */}
            <div className="relative">
              <div className="relative inline-block">
                <h2 
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6 cursor-pointer" 
                  style={{ fontFamily: 'Mohican, sans-serif' }}
                >
                  A b o u t  &nbsp;&nbsp; H U I X - 2 0 9 9
                </h2>
                
                {/* Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full mt-2 text-sm text-muted-foreground whitespace-nowrap pointer-events-none"
                >
                  You should try click the about us button to learn more
                </motion.div>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
                Founded in 2024, HUIX-2099 is a Liberia-based next-generation technology company pioneering the future of
                software development, 3D prototyping, and immersive digital engineering. We operate at the intersection of
                imagination and technology — where creative vision evolves into real-world innovation.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Virtual Reality", desc: "Immersive digital environments for exploration and training" },
              { title: "AI & Machine Learning", desc: "Intelligent systems that learn and adapt" },
              { title: "App Development", desc: "Powerful mobile and desktop applications" },
              { title: "Web Development", desc: "Modern web applications with cutting-edge technologies" },
              { title: "3D Modeling", desc: "Stunning 3D models and visualizations" },
              { title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section with Image */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/other-images/download (38).jpg"
                alt="Innovation in Motion"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Right: Content */}
            <div>
              <div className="text-6xl lg:text-8xl font-bold text-foreground/10 mb-6" style={{ fontFamily: 'Mohican, sans-serif' }}>
                02
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                INNOVATION IN MOTION
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pushing the boundaries of digital experiences through cutting-edge technology and creative vision. 
                We transform ideas into immersive realities that inspire and engage audiences worldwide.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Creative Vision", desc: "Transforming bold ideas into digital masterpieces" },
                  { title: "Technical Excellence", desc: "Advanced engineering meets artistic innovation" },
                  { title: "Future Forward", desc: "Pioneering tomorrow's digital experiences today" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 border rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prototypes Preview Section */}
      <section className="py-20 px-4 lg:px-8 bg-background relative overflow-hidden">
        {/* Background Image within section only */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/ef/42/ac/ef42ac1d7e25f26fc81509cd0220e068.jpg"
            alt="Prototypes Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Futuristic Number */}
            <div className="text-8xl lg:text-9xl font-bold text-foreground/10 mb-8">
              02
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Prototypes</h2>
              <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>
                Explore our innovative prototypes showcasing cutting-edge technology and creative solutions. Discover how we push boundaries with immersive digital experiences, advanced 3D programming, and virtual heritage reconstructions that bring history to life.
              </p>
              <Link href="/prototypes">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
                >
                  View All Prototypes
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Build the Future?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating next-generation digital experiences that transform how people interact with
              technology.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
