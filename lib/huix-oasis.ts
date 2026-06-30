export const OASIS_IMAGE = `/Huix-Oasis/${encodeURIComponent("Huix - Oasis.png")}`

export const OASIS_HERO_IMAGE = `/Huix-Oasis/${encodeURIComponent(
  "What is Industrial Augmented Reality (IAR)_ _ PTC.jpg",
)}`

export const OASIS_RESEARCH_AREAS = [
  "Mobile Virtual Reality",
  "Spatial User Interfaces",
  "Virtual Operating Systems",
  "Digital Commerce",
  "Social Virtual Spaces",
  "Multiplayer Experiences",
  "Game Technologies",
  "Architecture Visualization",
  "AI-assisted Experiences",
  "3D User Interfaces",
  "Digital Marketplaces",
  "Creator Economy Tools",
] as const

export const OASIS_EXPERIENCES = [
  {
    id: "marketplace",
    title: "Marketplace",
    titleZh: "虚拟市场",
    description:
      "A virtual marketplace where businesses and creators showcase products using traditional images, interactive 3D models, and immersive VR experiences.",
  },
  {
    id: "social",
    title: "Social",
    titleZh: "社交空间",
    description:
      "Communicate, explore virtual spaces, attend events, and collaborate with others inside immersive environments.",
  },
  {
    id: "gaming",
    title: "Gaming",
    titleZh: "沉浸式游戏",
    description:
      "Interactive games built for immersive mobile VR — entertainment that exists naturally within the Oasis ecosystem.",
  },
  {
    id: "architecture",
    title: "Architecture",
    titleZh: "建筑可视化",
    description:
      "Architectural experiences powered by HUIX Horizon — explore buildings and designs before construction.",
  },
] as const

export const OASIS_SPATIAL_CONTROLS = [
  {
    id: "look",
    label: "Look around",
    labelZh: "环视视角",
    detail: "Move your head or drag to rotate inside the virtual layer.",
    accent: "#7eb3ff",
  },
  {
    id: "move",
    label: "Navigate space",
    labelZh: "空间移动",
    detail: "Walk through Oasis hubs — marketplace, social plazas, and game worlds.",
    accent: "#3DDC84",
  },
  {
    id: "interact",
    label: "Interact",
    labelZh: "交互操作",
    detail: "Select objects, open apps, and trigger experiences without leaving VR.",
    accent: "#BF0A30",
  },
  {
    id: "layer",
    label: "Android layer",
    labelZh: "安卓叠加层",
    detail: "Oasis runs as a virtual overlay — your phone stays Android underneath.",
    accent: "#c4b5fd",
  },
] as const

/** Poster-style controller operation grid (524852 layout) */
export const OASIS_CONTROLLER_OPS = [
  {
    id: "rotate",
    labelEn: "Rotate Perspective",
    labelZh: "视角移动",
    uiEn: "Rotate Perspective",
    uiZh: "视角移动",
    uiIcon: "rotate" as const,
    highlight: "#ff6b4a",
    highlightSize: "14px",
    highlightTop: "38%",
    highlightLeft: "28%",
  },
  {
    id: "walk",
    labelEn: "Walk",
    labelZh: "走动",
    uiEn: "Walk",
    uiZh: "走动",
    uiIcon: "walk" as const,
    highlight: "#5eb3ff",
    highlightSize: "14px",
    highlightTop: "48%",
    highlightLeft: "58%",
  },
  {
    id: "grab",
    labelEn: "Grab",
    labelZh: "抓取",
    uiEn: "Grab",
    uiZh: "抓取",
    uiIcon: "grab" as const,
    highlight: "#ff6b4a",
    highlightSize: "10px",
    highlightTop: "32%",
    highlightLeft: "18%",
  },
  {
    id: "click",
    labelEn: "Click",
    labelZh: "点击",
    uiEn: "Click",
    uiZh: "点击",
    uiIcon: "click" as const,
    highlight: "#5eb3ff",
    highlightSize: "10px",
    highlightTop: "28%",
    highlightLeft: "72%",
  },
] as const
