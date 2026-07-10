const PLUGIN_DIR = "/products/Huix-character-motion plugin"

export const HCM_LOGO = `${PLUGIN_DIR}/hclogo.png`
export const HCM_HERO_VIDEO = `${PLUGIN_DIR}/${encodeURIComponent("hero section video.mp4")}`

export const HCM_PRODUCT_PATH = "/products/huix-character-motion"

export const HCM_QUICK_FACTS = [
  "51+ procedural animations",
  "Prompt-to-animation AI",
  "8 moods × 3 body styles",
  "Full finger animation",
  "Video mocap (beta)",
  "One-click GLB export",
  "Avaturn · Mixamo rigs",
  "Blender 3.0 → 5.x",
] as const

export const HCM_FEATURES = [
  {
    icon: "🎬",
    title: "51+ Ready Animations, One Click",
    body: "Walk, jog, run, sneak, jump, dance, sit, hug, wave, handshake, street dap with shoulder bump, cheer, victory celebration, defeat, taunt, pray, laugh, phone call, and more — organized into Locomotion, Keke/Tuk-Tuk, Race & Emotion, and Story & Life.",
  },
  {
    icon: "🛺",
    title: "The Keke / Tuk-Tuk Pack",
    body: "The only addon with a full tricycle-taxi animation set: enter as driver or passenger, exit, relaxed driving, aggressive race driving, steering left/right, riding in the back, hailing a keke from the roadside, flagging a race start, pushing a broken keke, and kneeling to repair the engine.",
  },
  {
    icon: "🧠",
    title: 'Prompt-Driven "AI" Generation',
    body: 'The prompt box understands scenes, not just words. "Enter tuktuk to ride" gives you the driver entry. "Wave down the keke" knows you\'re hailing a taxi. "Taunt the rival folding arms" — done.',
  },
  {
    icon: "🎭",
    title: "8 Moods × 3 Body Styles",
    body: "Every animation can be Happy, Playful, Sad, Angry, Tired, Confident, Sneaky, or Neutral — changing posture, energy, speed, and head carriage. Combine with Feminine, Masculine, or Neutral body styles and intensity/speed sliders for thousands of unique takes.",
  },
  {
    icon: "🖐",
    title: "Realism Down to the Fingers",
    body: "Breathing chest, weight-shifting hips, knees that give, feet planted flat, head micro-movement, and individually animated fingers on every clip.",
  },
  {
    icon: "🎥",
    title: "Video to Animation (Beta)",
    body: "Upload any video of a person — motion is captured and baked onto your character as keyframes. Your phone camera becomes your mocap studio.",
  },
  {
    icon: "✏️",
    title: "Manual Tweak Layer",
    body: "Generated animation not exactly your style? One click adds an adjustment layer: pose any bone and keyframe your touches while the base animation keeps playing underneath.",
  },
  {
    icon: "🎮",
    title: "Game-Ready Export",
    body: 'Press "Prepare Game Export" and every animation packs into your character as named clips. Export one GLB and drop it into Unity, Unreal, or three.js.',
  },
] as const

export const HCM_STEPS = [
  "Import your Avaturn avatar (GLB or FBX)",
  'Select it and open the Monrovia Hustle tab in the sidebar (press N)',
  "Type a prompt or click any animation in the library",
  "Press Spacebar — your character is alive",
  "Export to your game engine",
] as const

export const HCM_REQUIREMENTS = [
  "Blender 3.0 or newer (tested through Blender 5.x)",
  "An Avaturn, Mixamo, or Unity/VRM-style humanoid character",
  "Video-to-Animation requires a one-click engine install (internet needed once)",
] as const
