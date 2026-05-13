# HUIXOR — INFO

> **Version:** 1.1.1 (Beta)
> **Status:** Active Development — Community Feedback Needed
> **Developer:** Victor Edet Coleman
> **Company:** HUIX 2099 — Monrovia, Liberia
> **License:** Open Source
> **Platform:** Windows 10/11 (x64, ARM64)

---

## What Is Huixor?

Huixor is a professional desktop application that lets you preview any website across **every device category** — iPhone, Android, Tablet, Watch, Desktop monitors, and VR headsets — all at once, in a single window.

Built with **WPF + .NET 8** and **WebView2 (Chromium)**, it delivers pixel-accurate device emulation using the Chrome DevTools Protocol. No browser extensions. No cloud services. One portable `.exe` file.

### Why Huixor Over Browser DevTools?

| Feature | Browser DevTools | Huixor |
|---------|-----------------|--------|
| Devices at once | 1 | Up to 8 simultaneously |
| VR preview | No | Yes (A-Frame 3D environment) |
| Watch preview | No | Yes (Apple Watch, Galaxy Watch, Pixel Watch) |
| Multi-monitor simulation | No | Single, Dual, Triple layouts |
| Synced scroll across devices | No | Yes |
| Responsiveness analysis | Manual | Automatic per device |
| Portable single exe | N/A | Yes — zero install |
| Dark / Light theme | N/A | Full native theme engine |

> **Note:** Huixor is currently in **beta**. Some features described below are still being refined. Not everything may work perfectly yet — that's why your feedback matters. We're building this in the open with the community.

---

## Application Layout

### Window Structure

```
+------------------------------------------------------------------+
| ROW 0: TITLE BAR                                                 |
|   Logo | Version | Nav Tabs | Social | Theme | RAM | Controls    |
+------------------------------------------------------------------+
| ROW 1: URL BAR                                                   |
|   Back Forward Refresh | Lock | URL Box | Search | View | Scroll |
+------------------------------------------------------------------+
| ROW 2: CONTENT AREA                                              |
|   (Mobile Page / Desktop Page / VR Page / About Page)            |
+------------------------------------------------------------------+
| ROW 3: STATUS BAR                                                |
|   HUIX 2099 — Huixor | Created by Victor Edet Coleman | v1.1.1  |
+------------------------------------------------------------------+
```

### Splash Screen

On launch, a branded splash screen appears with:
- Animated logo fade-in with slide effect
- Tagline: "Professional Multi-Device Web Preview"
- Animated progress bar (green accent)
- **OS detection badge** — automatically identifies Windows 10/11 with build number
- Version label (v1.1.1)
- "PORTABLE EDITION" label
- "by HUIX 2099" branding

The splash displays for approximately 2.8 seconds before the main window opens.

---

## Navigation Tabs

### Mobile Tab

Preview websites on phone, tablet, and watch devices simultaneously.

**Grid View (default):** Four device panels side by side:
- Column 1: iPhone panel
- Column 2: Android panel
- Column 3: Tablet panel (wider)
- Column 4: Watch panel (narrower)

**Single View:** Each device gets a full-width row with detailed specs on the left and responsiveness analysis on the right. Scrollable vertically.

**Responsive Layout:** When the window width drops below 900px in Grid mode, the layout automatically switches to a 2x2 grid arrangement.

### Desktop Tab

Simulate multi-monitor setups for desktop website testing.

**Single Monitor:** One large monitor panel filling the space.

**Multi Monitor (Landscape + Portrait):** Two panels side by side — a wider landscape monitor and a narrower portrait monitor. Useful for testing how a site looks on a developer's dual-screen setup.

**Triple Monitor:** Three panels — portrait on the left, wide landscape in the center, portrait on the right. Simulates a three-monitor workstation.

> **Beta Note:** When switching between monitor layouts, the current URL automatically loads on the new panels.

### VR Tab

A 3D environment built with A-Frame (WebGL) that stages your website in virtual reality space. The scene supports:
- Drag to orbit the camera
- Scroll to zoom in/out
- Virtual screens displaying the target website
- Theme sync (dark/light mode applies to the 3D environment)

> **Beta Note:** VR device profiles (Meta Quest 3S, Meta Quest Pro, Apple Vision Pro, Steam Deck OLED, Google Cardboard, PSVR 2) are defined in code for future use but are not yet wired into the VR tab's device selector.

### About Tab

A document-style editorial page with numbered sections covering:
- 01: About — what Huixor is and its mission
- 02: Creator/Developer — Victor Edet Coleman's profile (3D Software Developer, Rising 3D Software Engineer, CTO of HUIX 2099)
- 03: Parent Company — HUIX 2099 info and social links
- 04: Key Capabilities — four feature highlights
- 05: Under the Hood — tech stack and stats
- 06: License — open source license, contribution info, decorative barcode and QR code

---

## Every Control Labeled

### Title Bar Controls

| Control | Label | What It Does |
|---------|-------|-------------|
| App Icon | H icon | Branding — identifies the app |
| Logo Text | HUIXOR | Full logo image (hides below 750px width) |
| Industrial Number | 03 | Version/edition number (hides below 750px) |
| By Line | by HUIX 2099 | Company attribution (hides below 900px) |
| Mobile Tab | Mobile | Switch to mobile device preview |
| Desktop Tab | Desktop | Switch to desktop monitor preview |
| VR Tab | VR | Switch to VR 3D preview |
| About Tab | About | Switch to about/info page |
| LinkedIn Button | in | Opens HUIX 2099 LinkedIn (hides below 700px) |
| Facebook Button | f | Opens HUIX 2099 Facebook (hides below 700px) |
| YouTube Button | Play | Opens HUIX 2099 YouTube (hides below 700px) |
| Theme Label | Light | Indicates light mode side of toggle (hides below 600px) |
| Theme Toggle | Toggle switch | Dark mode (on) / Light mode (off) |
| RAM Monitor | RAM: XX MB | Live process memory usage (hides below 650px) |
| Minimize | — | Minimize window |
| Maximize/Restore | Box | Toggle maximized / normal window |
| Close | X | Opens "Are you sure?" confirmation |

### URL Bar Controls

| Control | Label | What It Does |
|---------|-------|-------------|
| Back Button | Arrow left | Navigation back (placeholder — not yet functional) |
| Forward Button | Arrow right | Navigation forward (placeholder — not yet functional) |
| Refresh Button | Circular arrow | Refresh page (placeholder — not yet functional) |
| Lock Icon | Padlock | Visual HTTPS indicator |
| URL Text Box | URL input | Type or paste a URL, press Enter or click Search |
| Search Button | Magnifying glass | Navigate to the entered URL |
| View: Grid | Grid | Show all mobile devices in a grid |
| View: Single | Single | Show mobile devices one at a time, stacked |
| Scroll: Ind. label | Ind. | Independent scroll label (hides below 550px) |
| Scroll Toggle | Toggle switch | Synced scroll on/off |
| Scroll: Sync label | Sync | Synced scroll label (hides below 550px) |

> **Beta Note:** Back, Forward, and Refresh buttons are defined in the UI but their handlers are not yet implemented. They will be connected in a future update.

### Device Panel Controls (per panel)

| Control | What It Does |
|---------|-------------|
| Number Label | Panel identifier (01., 02., etc.) |
| Status Dot | Green accent indicator |
| Platform Icon | Apple or Android logo based on device |
| Category Label | Device type name (iPhone, Android, Tablet, etc.) |
| Device Selector | Dropdown to pick specific device preset |
| Giant Number | Large watermark number behind the device frame |
| Device Frame | Physical device border with appropriate styling |
| WebView2 | Live browser rendering of the target website |
| Specs Label | Device resolution and tech specs |
| Responsiveness Label | Automated viewport/media query/overflow analysis |

### Desktop Layout Controls

| Control | What It Does |
|---------|-------------|
| Single Button | One monitor layout |
| Multi (L+P) Button | Dual landscape + portrait layout |
| Triple Button | Three monitor layout |

---

## Supported Devices (30+ Presets)

### iPhone (8 devices)
- iPhone 17 Pro Max
- iPhone 16 Pro Max
- iPhone 16 Pro
- iPhone 16
- iPhone SE 4
- iPhone 15
- iPhone 14
- iPhone 13 Mini

### Android (7 devices)
- Samsung Galaxy S26 Ultra
- Samsung Galaxy S25
- Google Pixel 9 Pro XL
- Google Pixel 9
- OnePlus 13
- Samsung Galaxy Z Fold 6 (Cover Display)
- Samsung Galaxy Z Fold 6 (Inner Display)

### Tablet (7 devices)
- iPad Pro 12.9"
- iPad Pro 11"
- iPad Air
- iPad Mini
- Samsung Galaxy Tab S9 Ultra
- Samsung Galaxy Tab S9
- Microsoft Surface Pro 11

### Watch (7 devices)
- Apple Watch Ultra 2
- Apple Watch Series 10 (45mm)
- Apple Watch Series 10 (42mm)
- Apple Watch SE (44mm)
- Samsung Galaxy Watch 7 (44mm)
- Samsung Galaxy Watch Ultra
- Google Pixel Watch 3 (45mm)

### Desktop Monitors — Landscape (8 presets)
- Full HD 1080p (24")
- QHD 1440p (27")
- 4K UHD @200% scale (32")
- 4K UHD @150% scale (32")
- Ultrawide 21:9 (34")
- MacBook Pro 16"
- MacBook Air 13"
- Chromebook 14"

### Desktop Monitors — Portrait (3 presets)
- 1080p Portrait (24")
- 1440p Portrait (27")
- 4K Portrait @200% (32")

### VR / Handheld (6 profiles — reserved for future use)
- Meta Quest 3S
- Meta Quest Pro
- Apple Vision Pro
- Steam Deck OLED
- Google Cardboard
- PSVR 2

---

## Feature Details

### Theme Engine

Two complete XAML resource dictionaries power the visual theme:

- **Dark Mode** (default): Deep black backgrounds (#09090B), green accent (#22C55E), light text
- **Light Mode**: Clean gray backgrounds (#F4F4F5), green accent (#16A34A), dark text

Every control style — buttons, nav tabs, text boxes, combo boxes, toggle switches, scrollbars — is fully themed. The toggle switch comes in two sizes:
- **Standard** (`HxToggle`): 48x26 with drop shadow on thumb and track
- **Compact** (`HxToggleCompact`): 36x20 for toolbar areas

Theme changes are applied instantly via `ThemeManager` and also propagated to the VR scene.

### Scroll Sync System

When enabled, scrolling any device panel synchronizes all other panels to the same scroll position (percentage-based). The system uses:
- Injected JavaScript in each WebView2 that posts scroll position via `postMessage`
- A 30ms debounce timer in the main window to batch updates
- A 400ms echo suppression window to prevent feedback loops
- Works across both Mobile and Desktop pages simultaneously

### Responsiveness Analysis

After each page load (with a 1.2-second delay for rendering), Huixor automatically analyzes:
- **Viewport meta tag** — checks if the page has `<meta name="viewport">`
- **Media queries** — counts `@media` rules across stylesheets
- **Horizontal overflow** — detects if `scrollWidth > innerWidth`

Results appear below each device frame with color coding:
- Green: viewport present, no overflow
- Yellow/Warning: overflow detected
- Muted: no viewport tag

> **Beta Note:** Media query counting is best-effort and may not capture all stylesheets due to CORS restrictions. The accuracy will improve in future versions.

### RAM Monitoring

A live RAM counter in the title bar updates every 3 seconds, showing the process working set in MB. This helps developers monitor memory usage when running multiple WebView2 instances.

### OS Detection

On startup, Huixor detects the operating system and displays a badge:
- **Windows 10** or **Windows 11** (distinguished by build number >= 22000)
- Build number included
- Linux and macOS detection paths exist for future cross-platform support

### Close Confirmation

When closing the app (via X button, Alt+F4, or system close), a full-screen overlay appears:
- "Are you sure?" prompt
- Warning that unsaved previews will be lost
- Cancel (return to app) or Close Huixor (confirm exit)
- WebView content is hidden during the overlay to prevent rendering conflicts

### Window Responsiveness

The UI progressively collapses at smaller window sizes:

| Width | What Hides |
|-------|-----------|
| < 900px | "by HUIX 2099" byline |
| < 750px | Logo text + industrial number |
| < 700px | Social media buttons |
| < 650px | RAM monitor |
| < 600px | Theme label |
| < 550px | Scroll sync labels |
| < 480px | Entire toolbar controls panel |

Minimum window size: 400 x 300 pixels.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter (in URL box) | Navigate to URL |
| Double-click title bar | Toggle maximize/restore |

> More keyboard shortcuts are planned for future releases.

---

## Build & Distribution

### Single Portable Executable

Huixor ships as a **single `.exe` file** — no installer, no .NET runtime required, no additional files.

- **Self-contained:** Includes the .NET 8 runtime
- **Single file:** All assemblies compressed into one exe
- **Embedded assets:** VR scene HTML is embedded as a resource
- **No PDB/XML docs:** Clean output

### Build Targets

| Platform | Runtime ID | Status |
|----------|-----------|--------|
| Windows x64 | win-x64 | Available |
| Windows ARM64 | win-arm64 | Available |
| Windows x86 | win-x86 | Available via build script |
| Linux | — | Requires Avalonia UI migration |
| macOS | — | Requires Avalonia UI migration |

Build command:
```
dotnet publish src\Huixor\Huixor.csproj -c Release -r win-x64
```

Or use the included build script:
```
.\build-all.ps1
```

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| UI Framework | WPF (.NET 8) |
| Browser Engine | WebView2 (Chromium) |
| Device Emulation | Chrome DevTools Protocol |
| Theme System | Custom XAML ResourceDictionary |
| VR Scene | A-Frame 1.6 (WebGL) |
| Language | C# 12 |
| Build | dotnet publish (single file, self-contained) |

---

## Community, Support & Feedback

Huixor is in **active beta**. The software works and is usable today, but we are actively improving it based on community input. Your feedback directly shapes development.

### How to Contribute

Since Huixor is open source, contributions are welcome:

- **Report bugs & request features** via our social channels
- **Share feedback** on LinkedIn, Facebook, or YouTube
- **Test on different websites** and let us know what breaks

### Connect With Us

- **LinkedIn:** [HUIX 2099](https://www.linkedin.com/company/109222370/)
- **Facebook:** [HUIX 2099](https://web.facebook.com/huix2099)
- **YouTube:** [HUIX 2099](https://www.youtube.com/@HUIX-2099)
- **Website:** [huix2099.com](https://huix2099.com/)

### Known Limitations (Beta)

- Back, Forward, and Refresh buttons are not yet functional
- VR device profiles are defined but not yet selectable in the VR tab
- Media query analysis may undercount due to CORS restrictions
- WebView2 requires the Edge WebView2 Runtime (auto-installed on most Windows 10/11 systems)
- Cross-platform support (Linux, macOS) requires an Avalonia UI migration — planned for the future
- Theme label shows "Light" statically and does not update when toggled

### What's Coming

- Functional back/forward/refresh navigation
- VR device preset selector
- Screenshot capture per device
- Export comparison reports
- More device presets (foldables, emerging form factors)
- Cross-platform builds via Avalonia UI
- Plugin system for custom devices

---

> **Huixor v1.1.1 Beta** — Built by Victor Edet Coleman for HUIX 2099
> Professional Multi-Device Web Preview. Built different.
