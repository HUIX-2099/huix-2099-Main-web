"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2, Eye } from "lucide-react"
import { useWebXR, XRDeviceType } from "@/hooks/use-webxr"

// Google Cardboard VR Icon component
const CardboardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="7" cy="12" r="2.5" />
    <circle cx="17" cy="12" r="2.5" />
    <path d="M9.5 18h5" />
    <path d="M12 6v-2" />
  </svg>
)

const deviceIcons: Record<string, React.ReactNode> = {
  "meta-quest": <CardboardIcon className="h-8 w-8" />,
  "pico": <CardboardIcon className="h-8 w-8" />,
  "vive": <CardboardIcon className="h-8 w-8" />,
  "valve-index": <CardboardIcon className="h-8 w-8" />,
  "windows-mr": <CardboardIcon className="h-8 w-8" />,
  "phone-vr": <CardboardIcon className="h-8 w-8" />,
  "unknown-vr": <CardboardIcon className="h-8 w-8" />,
}

export function VRImmersePrompt() {
  const { isVRSupported, isARSupported, isActualVRHeadset, deviceType, deviceName, enterVR, enterAR, isInVR, isInAR } = useWebXR()
  const [showPrompt, setShowPrompt] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user has previously dismissed
    const wasDismissed = sessionStorage.getItem("vr-prompt-dismissed")
    if (wasDismissed) {
      setDismissed(true)
      return
    }

    // Show prompt ONLY on actual VR headsets (not laptops, phones, TVs)
    if (isActualVRHeadset && isVRSupported && deviceType) {
      const timer = setTimeout(() => {
        setShowPrompt(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isVRSupported, isActualVRHeadset, deviceType])

  const handleDismiss = () => {
    setShowPrompt(false)
    setDismissed(true)
    sessionStorage.setItem("vr-prompt-dismissed", "true")
  }

  const handleEnterVR = async () => {
    setShowPrompt(false)
    await enterVR()
  }

  const handleEnterAR = async () => {
    setShowPrompt(false)
    await enterAR()
  }

  // Only show on actual VR headsets
  if (!mounted || !isActualVRHeadset || !isVRSupported || dismissed || isInVR || isInAR) return null

  const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

  return (
    <AnimatePresence>
      {showPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleDismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-md"
          >
            <div className="bg-background border border-border shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="text-foreground">
                    {deviceIcons[deviceType || "unknown-vr"]}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: monoFont }}>
                      XR DEVICE DETECTED
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {deviceName || "VR Headset"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-card rounded transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}>
                    ENTER IMMERSIVE MODE
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Experience HUIX-2099 in full virtual reality. Explore our projects and technology in an immersive 3D environment.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center" style={{ fontFamily: monoFont }}>
                  <div className="p-3 bg-card border border-border">
                    <div className="text-lg font-bold text-foreground">360°</div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">VIEW</div>
                  </div>
                  <div className="p-3 bg-card border border-border">
                    <div className="text-lg font-bold text-foreground">3D</div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">SPACE</div>
                  </div>
                  <div className="p-3 bg-card border border-border">
                    <div className="text-lg font-bold text-foreground">∞</div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">EXPLORE</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={handleEnterVR}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background font-medium text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
                    style={{ fontFamily: monoFont }}
                  >
                    <Maximize2 className="h-5 w-5" />
                    <span>ENTER VR MODE — 100% IMMERSION</span>
                  </button>

                  {isARSupported && (
                    <button
                      onClick={handleEnterAR}
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-border text-foreground font-medium text-sm uppercase tracking-[0.1em] hover:bg-card transition-colors"
                      style={{ fontFamily: monoFont }}
                    >
                      <Eye className="h-4 w-4" />
                      <span>ENTER AR MODE</span>
                    </button>
                  )}

                  <button
                    onClick={handleDismiss}
                    className="w-full px-6 py-2 text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                    style={{ fontFamily: monoFont }}
                  >
                    CONTINUE IN 2D MODE
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-border bg-card/50">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60" style={{ fontFamily: monoFont }}>
                  <span>HUIX-2099 · XR EXPERIENCE</span>
                  <span>WEBXR ENABLED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
