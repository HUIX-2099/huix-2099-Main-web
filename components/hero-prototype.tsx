"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"

interface HeroPrototypeProps {
  type: "video" | "image"
  src?: string
  fallbackSrc?: string
  className?: string
  children?: React.ReactNode
}

export function HeroPrototype({ 
  type, 
  src, 
  fallbackSrc, 
  className = "", 
  children 
}: HeroPrototypeProps) {
  const { theme } = useTheme()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)

  const defaultImageSrc = 
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20dark%20logo%20jpg-hsTGc84LzW8UXZuWwFFWi2KEDNl22K.jpg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HUIX%202099%20white%20logo%20jpg-l8PO2vmS2QGLye3u4EgPMgyDDxU3jy.jpg"

  const finalSrc = src || (type === "image" ? defaultImageSrc : "")
  const finalFallbackSrc = fallbackSrc || defaultImageSrc

  useEffect(() => {
    if (type === "video") {
      setIsVideoLoaded(false)
      setHasVideoError(false)
    }
  }, [type, src])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setHasVideoError(true)
  }

  return (
    <div className={`relative h-screen w-full overflow-hidden ${className}`}>
      {type === "video" && finalSrc && !hasVideoError ? (
        <>
          {finalSrc.includes('drive.google.com') ? (
            <>
              <iframe
                src="https://drive.google.com/file/d/1gkMQ2I1oP-_BG66zr152D-Vf8iE3l1xA/preview"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay"
                onLoad={handleVideoLoad}
                onError={handleVideoError}
              />
              <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/40" : "bg-white/30"}`} />
            </>
          ) : (
            <>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
              >
                <source src={finalSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/40" : "bg-white/30"}`} />
            </>
          )}
          {/* Fade in effect when video loads */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVideoLoaded ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      ) : (
        <>
          {/* Fallback to image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${hasVideoError ? finalFallbackSrc : finalSrc}')`,
            }}
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/30" : "bg-white/20"}`} />
        </>
      )}

      {/* Content overlay */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

// Preset configurations for common use cases
export const HeroPrototypeWithVideo = (props: Omit<HeroPrototypeProps, "type">) => (
  <HeroPrototype type="video" {...props} />
)

export const HeroPrototypeWithImage = (props: Omit<HeroPrototypeProps, "type">) => (
  <HeroPrototype type="image" {...props} />
)
