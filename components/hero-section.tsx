"use client"

import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"

export function HeroSection() {
  const { theme } = useTheme()

  const bgImage =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20dark%20logo%20jpg-hsTGc84LzW8UXZuWwFFWi2KEDNl22K.jpg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20white%20logo%20jpg-l8PO2vmS2QGLye3u4EgPMgyDDxU3jy.jpg"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/30" : "bg-white/20"}`} />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-[calc(100vh-200px)]">
          {/* Left Text Section - Added px-4 lg:px-8 padding to text only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 px-4 lg:px-8"
          >
            <motion.div variants={itemVariants}>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
               <b>01</b> The Hyper Definition
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 leading-tight tracking-wider" style={{ fontFamily: 'Mohican, sans-serif', color: theme === 'dark' ? '#ffffff' : '#666666' }}>
               <small> H = H y p e r</small>
                <small><br />U = U n i f i e d</small>
                <small><br />I = I n t e l l i g e n t</small>
                <small><br />X = e X p e r i e n c e</small>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-muted-foreground leading-relaxed pt-2">
              <b><span style={{fontSize: '1rem'}}>02</span>&nbsp;</b>Merging human creativity with digital innovation to create seamless ecosystems.
            </motion.p>
          </motion.div>

          <div className="flex items-center justify-center" />

          {/* Right Text Section - Added px-4 lg:px-8 padding to text only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 px-4 lg:px-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Unified Reality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                HUIX-2099 merges VR, XR, AR, AI, and 3D visualization into one living ecosystem. We build worlds, not
                just products—digital universes powered by the next generation of technology.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Explore Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
