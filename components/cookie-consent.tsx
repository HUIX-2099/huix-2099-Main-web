"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("huix-cookie-consent")
    if (!consent) {
      setTimeout(() => setShow(true), 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("huix-cookie-consent", "true")
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem("huix-cookie-consent", "false")
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[420px] z-[100] bg-card border border-border rounded-xl shadow-2xl p-6"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground">
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>
                Cookie Settings
              </h3>
            </div>
            <button onClick={decline} className="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="Close text">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our Privacy Policy.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={decline} 
              className="flex-1 px-4 py-2.5 border border-border bg-card hover:bg-muted text-foreground transition-colors rounded-md text-sm font-medium"
            >
              Decline
            </button>
            <button 
              onClick={accept} 
              className="flex-1 px-4 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md text-xs font-bold uppercase tracking-wider"
              style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
