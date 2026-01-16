"use client"

import { useState, useEffect, useCallback } from "react"

export type XRDeviceType = "meta-quest" | "pico" | "vive" | "valve-index" | "windows-mr" | "phone-vr" | "unknown-vr" | null

export interface WebXRState {
  isVRSupported: boolean
  isARSupported: boolean
  isInVR: boolean
  isInAR: boolean
  isActualVRHeadset: boolean // True only for real VR headsets, not laptops/phones/TVs
  deviceType: XRDeviceType
  deviceName: string
  session: XRSession | null
  enterVR: () => Promise<void>
  exitVR: () => Promise<void>
  enterAR: () => Promise<void>
  exitAR: () => Promise<void>
}

// Detect if device is a regular laptop, phone, TV, or desktop (not VR)
function isRegularDevice(): boolean {
  if (typeof navigator === "undefined") return true
  
  const ua = navigator.userAgent.toLowerCase()
  
  // Check for VR headset user agents first - these are NOT regular devices
  const vrIndicators = [
    "quest", "oculus", "pico", "vive", "index", "mixed reality", "wmr",
    "wolvic", "firefox reality", "oculusbrowser", "mobile vr"
  ]
  
  for (const indicator of vrIndicators) {
    if (ua.includes(indicator)) return false
  }
  
  // Regular devices: laptops, desktops, phones, tablets, TVs
  const regularDeviceIndicators = [
    "windows nt", // Windows desktop/laptop
    "macintosh", "mac os", // Mac desktop/laptop  
    "linux", // Linux desktop (not Android)
    "cros", // ChromeOS
    "iphone", "ipad", "ipod", // iOS devices (unless in VR browser)
    "android", // Android phones/tablets (unless in VR browser)
    "smart-tv", "smarttv", "tv", "webos", "tizen", "roku", // Smart TVs
    "playstation", "xbox", "nintendo" // Gaming consoles
  ]
  
  for (const indicator of regularDeviceIndicators) {
    if (ua.includes(indicator)) return true
  }
  
  return true // Default to regular device
}

// Detect VR device type from user agent and WebXR
function detectVRDevice(): { type: XRDeviceType; name: string; isActualVRHeadset: boolean } {
  if (typeof navigator === "undefined") return { type: null, name: "", isActualVRHeadset: false }
  
  const ua = navigator.userAgent.toLowerCase()
  
  // Meta Quest devices
  if (ua.includes("quest") || ua.includes("oculus") || ua.includes("oculusbrowser")) {
    if (ua.includes("quest 3")) return { type: "meta-quest", name: "Meta Quest 3", isActualVRHeadset: true }
    if (ua.includes("quest pro")) return { type: "meta-quest", name: "Meta Quest Pro", isActualVRHeadset: true }
    if (ua.includes("quest 2")) return { type: "meta-quest", name: "Meta Quest 2", isActualVRHeadset: true }
    return { type: "meta-quest", name: "Meta Quest", isActualVRHeadset: true }
  }
  
  // Pico devices
  if (ua.includes("pico")) {
    if (ua.includes("pico 4")) return { type: "pico", name: "Pico 4", isActualVRHeadset: true }
    if (ua.includes("pico neo")) return { type: "pico", name: "Pico Neo", isActualVRHeadset: true }
    return { type: "pico", name: "Pico VR", isActualVRHeadset: true }
  }
  
  // HTC Vive (PC VR but accessed through VR browser)
  if (ua.includes("vive")) {
    return { type: "vive", name: "HTC Vive", isActualVRHeadset: true }
  }
  
  // Valve Index
  if (ua.includes("index") && ua.includes("valve")) {
    return { type: "valve-index", name: "Valve Index", isActualVRHeadset: true }
  }
  
  // Windows Mixed Reality
  if (ua.includes("mixed reality") || ua.includes("wmr")) {
    return { type: "windows-mr", name: "Windows Mixed Reality", isActualVRHeadset: true }
  }
  
  // Wolvic / Firefox Reality VR browser
  if (ua.includes("wolvic") || ua.includes("firefox reality")) {
    return { type: "unknown-vr", name: "VR Browser", isActualVRHeadset: true }
  }
  
  // Phone VR - ONLY detect if explicitly in a VR mode (not regular phone browsing)
  // We check for specific phone VR indicators, not just mobile device
  if (ua.includes("mobile vr") || ua.includes("cardboard") || ua.includes("daydream")) {
    return { type: "phone-vr", name: "Mobile VR", isActualVRHeadset: true }
  }
  
  // Not a VR headset
  return { type: null, name: "", isActualVRHeadset: false }
}

export function useWebXR(): WebXRState {
  const [isVRSupported, setIsVRSupported] = useState(false)
  const [isARSupported, setIsARSupported] = useState(false)
  const [isInVR, setIsInVR] = useState(false)
  const [isInAR, setIsInAR] = useState(false)
  const [isActualVRHeadset, setIsActualVRHeadset] = useState(false)
  const [session, setSession] = useState<XRSession | null>(null)
  const [deviceType, setDeviceType] = useState<XRDeviceType>(null)
  const [deviceName, setDeviceName] = useState("")

  useEffect(() => {
    async function checkXRSupport() {
      // First check if this is a regular device (laptop, phone, TV)
      // If so, don't show VR features even if WebXR is technically available
      if (isRegularDevice()) {
        setIsActualVRHeadset(false)
        return
      }

      // Check for VR headset by user agent
      const device = detectVRDevice()
      setDeviceType(device.type)
      setDeviceName(device.name)
      setIsActualVRHeadset(device.isActualVRHeadset)

      if (!device.isActualVRHeadset) {
        return // Not a real VR headset, don't enable VR features
      }

      if (typeof navigator === "undefined" || !navigator.xr) {
        // VR headset detected but no WebXR API
        if (device.type === "phone-vr") {
          setIsVRSupported(true) // Phone VR uses polyfill or basic orientation
        }
        return
      }

      try {
        // Check VR support
        const vrSupported = await navigator.xr.isSessionSupported("immersive-vr")
        setIsVRSupported(vrSupported)

        // Check AR support
        const arSupported = await navigator.xr.isSessionSupported("immersive-ar")
        setIsARSupported(arSupported)

        // If VR is supported but no specific device detected, mark as unknown VR
        if (vrSupported && !device.type) {
          setDeviceType("unknown-vr")
          setDeviceName("VR Headset")
        }
      } catch (error) {
        console.log("WebXR not available:", error)
      }
    }

    checkXRSupport()
  }, [])

  const enterVR = useCallback(async () => {
    if (!navigator.xr) return

    try {
      const xrSession = await navigator.xr.requestSession("immersive-vr", {
        requiredFeatures: ["local-floor"],
        optionalFeatures: ["bounded-floor", "hand-tracking", "layers"]
      })

      xrSession.addEventListener("end", () => {
        setIsInVR(false)
        setSession(null)
      })

      setSession(xrSession)
      setIsInVR(true)
    } catch (error) {
      console.error("Failed to enter VR:", error)
    }
  }, [])

  const exitVR = useCallback(async () => {
    if (session) {
      await session.end()
      setSession(null)
      setIsInVR(false)
    }
  }, [session])

  const enterAR = useCallback(async () => {
    if (!navigator.xr) return

    try {
      const xrSession = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test", "local-floor"],
        optionalFeatures: ["hand-tracking", "dom-overlay"]
      })

      xrSession.addEventListener("end", () => {
        setIsInAR(false)
        setSession(null)
      })

      setSession(xrSession)
      setIsInAR(true)
    } catch (error) {
      console.error("Failed to enter AR:", error)
    }
  }, [])

  const exitAR = useCallback(async () => {
    if (session) {
      await session.end()
      setSession(null)
      setIsInAR(false)
    }
  }, [session])

  return {
    isVRSupported,
    isARSupported,
    isInVR,
    isInAR,
    isActualVRHeadset,
    deviceType,
    deviceName,
    session,
    enterVR,
    exitVR,
    enterAR,
    exitAR
  }
}
