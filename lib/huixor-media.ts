/** Shared Huixor public asset paths (encode segments for spaces). */
export function huixorPath(...segments: string[]) {
  return `/products/huixor/${segments.map((s) => encodeURIComponent(s)).join("/")}`
}

export const HUIXOR_EXE = "/products/huixor/Huixor.exe"
export const HUIXOR_ICO = huixorPath("Huixor.ico")
export const HUIXOR_LIGHTMODE_JPG = huixorPath("lightmode.jpg")
export const HUIXOR_VR_VIDEO = huixorPath("vr video.mp4")

export const HUIXOR_APP_ICON_DARK = huixorPath("RemoveBG_app_v", "darkmode app icon.png")
export const HUIXOR_APP_ICON_LIGHT = huixorPath("RemoveBG_app_v", "lightmode app icon.png")

export const removeBgAssets = [
  { label: "Light mode window (cutout)", src: huixorPath("RemoveBG", "lightmode-removebg-preview.png") },
  {
    label: "Taskbar / left nav icon",
    src: huixorPath("RemoveBG", "Taskbar_bariocn_leftnavicon-removebg-preview.png"),
  },
] as const

const screenshotFiles = [
  "Screenshot 2026-04-05 103553.png",
  "Screenshot 2026-04-05 103604.png",
  "Screenshot 2026-04-05 103622.png",
  "Screenshot 2026-04-05 111249.png",
  "Screenshot 2026-04-05 111318.png",
  "Screenshot 2026-04-05 111355.png",
  "Screenshot 2026-04-05 111431.png",
  "Screenshot 2026-04-05 111448.png",
  "Screenshot 2026-04-05 111516.png",
  "Screenshot 2026-04-05 111541.png",
  "Screenshot 2026-04-05 111551.png",
  "Screenshot 2026-04-05 111613.png",
  "Screenshot 2026-04-05 111625.png",
  "Screenshot 2026-04-05 111650.png",
  "Screenshot 2026-04-05 111705.png",
  "Screenshot 2026-04-05 111738.png",
] as const

export type HuixorShotGroup = "all" | "general" | "chrome" | "mobile" | "desktop" | "vr"

/** Labels mirror major Huixor UI regions (title bar, URL bar, tabs, device panels, etc.). */
export const huixorScreenshotCatalog: {
  file: (typeof screenshotFiles)[number]
  num: string
  title: string
  caption: string
  group: Exclude<HuixorShotGroup, "all">
}[] = [
  {
    file: screenshotFiles[0],
    num: "01",
    title: "Shell — first run",
    caption: "Overall window chrome: title band, content region, status strip.",
    group: "general",
  },
  {
    file: screenshotFiles[1],
    num: "02",
    title: "ROW 0 · Title bar",
    caption: "Logo, version, Mobile / Desktop / VR / About tabs, social, theme, RAM, window controls.",
    group: "chrome",
  },
  {
    file: screenshotFiles[2],
    num: "03",
    title: "ROW 1 · URL bar (compact)",
    caption: "Navigation placeholders, lock, URL field, Search, Grid / Single view, scroll sync toggles.",
    group: "chrome",
  },
  {
    file: screenshotFiles[3],
    num: "04",
    title: "Mobile tab · Grid overview",
    caption: "Multi-device canvas — phone, Android, tablet, watch columns side by side.",
    group: "mobile",
  },
  {
    file: screenshotFiles[4],
    num: "05",
    title: "Device panels · Frames",
    caption: "Per-panel device selector, status dot, WebView2 viewport, spec readouts.",
    group: "mobile",
  },
  {
    file: screenshotFiles[5],
    num: "06",
    title: "Responsiveness readout",
    caption: "Automated viewport / media-query / overflow hints under a device frame.",
    group: "mobile",
  },
  {
    file: screenshotFiles[6],
    num: "07",
    title: "View mode · Single vs Grid",
    caption: "Switching between stacked single view and four-across grid (UI state).",
    group: "mobile",
  },
  {
    file: screenshotFiles[7],
    num: "08",
    title: "Tablet & watch emphasis",
    caption: "Wider tablet frame plus narrow watch preview in the mobile workspace.",
    group: "mobile",
  },
  {
    file: screenshotFiles[8],
    num: "09",
    title: "Desktop tab · Single monitor",
    caption: "One large monitor preset for desktop breakpoint testing.",
    group: "desktop",
  },
  {
    file: screenshotFiles[9],
    num: "10",
    title: "Desktop · Dual layout",
    caption: "Landscape + portrait monitor pair (developer dual-screen simulation).",
    group: "desktop",
  },
  {
    file: screenshotFiles[10],
    num: "11",
    title: "Desktop · Triple layout",
    caption: "Three-monitor workstation arrangement preview.",
    group: "desktop",
  },
  {
    file: screenshotFiles[11],
    num: "12",
    title: "VR tab · Stage entry",
    caption: "A-Frame scene shell: orbit controls, zoom, themed 3D environment.",
    group: "vr",
  },
  {
    file: screenshotFiles[12],
    num: "13",
    title: "VR · Virtual screens",
    caption: "Site texture on floating displays inside the WebGL scene.",
    group: "vr",
  },
  {
    file: screenshotFiles[13],
    num: "14",
    title: "VR · Theme sync",
    caption: "Dark / light native theme propagated into the VR environment.",
    group: "vr",
  },
  {
    file: screenshotFiles[14],
    num: "15",
    title: "About / editorial surface",
    caption: "In-app document-style About sections and metadata presentation.",
    group: "general",
  },
  {
    file: screenshotFiles[15],
    num: "16",
    title: "Status & branding",
    caption: "ROW 3 status: HUIX 2099 line, creator credit, version label.",
    group: "chrome",
  },
]

export function shotSrc(file: (typeof screenshotFiles)[number]) {
  return huixorPath("screenshorts", file)
}

export const huixorScreenshotUrls = huixorScreenshotCatalog.map((s) => shotSrc(s.file))
