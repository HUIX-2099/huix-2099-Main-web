import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const ORG_NAME = "HUIX-2099"
export const ORG_ID = `${SITE_URL}/#organization`
export const DEFAULT_OG_IMAGE = "/icons/HUIX 2099 dark logo icon version.jpg"

export type BreadcrumbItem = { name: string; path: string }

export type SeoProductDef = {
  id: string
  name: string
  path: string
  title: string
  description: string
  keywords: string[]
  image: string
  schemaType: "VideoGame" | "SoftwareApplication" | "WebApplication"
  operatingSystem?: string
  applicationCategory?: string
  downloadUrl?: string
  externalUrl?: string
  genre?: string
  trailerUrl?: string
  status?: "Live" | "Development" | "Concept"
}

/** Canonical product catalog for metadata + JSON-LD — keep in sync with /products */
export const SEO_PRODUCTS: SeoProductDef[] = [
  {
    id: "monrovia-hustle",
    name: "Monrovia Hustle 3D",
    path: "/products/monrovia-hustle",
    title: "Monrovia Hustle 3D — Liberian narrative RPG | HUIX-2099",
    description:
      "Monrovia Hustle 3D — Liberian slice-of-life narrative urban RPG from HUIX-2099. Franchise hub, Concept 01 playable vertical slice, gameplay trailer, voice cast, mobile field testing, and concept dossier. Built in Monrovia, Liberia.",
    keywords: [
      "Monrovia Hustle 3D",
      "Liberia narrative game",
      "Monrovia RPG",
      "Liberian voice cast",
      "HUIX-2099 game",
      "West Africa indie game",
      "urban RPG Liberia",
      "Monrovia streets game",
    ],
    image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    schemaType: "VideoGame",
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "Game",
    genre: "Narrative urban RPG",
    trailerUrl: "https://www.youtube.com/watch?v=GUPVn-m8Dr8",
    status: "Development",
  },
  {
    id: "monrovia-hustle-concept",
    name: "Monrovia Hustle 3D — Concept 01",
    path: "/products/monrovia-hustle/concept",
    title: "Concept 01 — Monrovia Hustle 3D dossier | trailer · voice cast · HUIX-2099",
    description:
      "Monrovia Hustle 3D Concept 01 dossier: playable vertical slice, official gameplay trailer, mobile demo capture, voice cast (Jayboy, Trapper, DC, Angel, Uncle Flomo, Jayboy Pa), spec sheet, screenshots, and download — HUIX-2099, Monrovia, Liberia.",
    keywords: [
      "Monrovia Hustle 3D concept",
      "Monrovia Hustle voice cast",
      "Monrovia Hustle trailer",
      "Liberia game concept",
      "Jayboy Monrovia Hustle",
      "HUIX-2099",
      "playable vertical slice",
    ],
    image: "/products/Monrovia_hustle_Demo_Campane/herosection.png",
    schemaType: "VideoGame",
    operatingSystem: "Windows 10, Windows 11, Android",
    applicationCategory: "Game",
    genre: "Narrative urban RPG",
    trailerUrl: "https://www.youtube.com/watch?v=GUPVn-m8Dr8",
    downloadUrl: "https://drive.google.com/drive/folders/1QW6XVnWFGTFpdQ1V5J2KMVxqtQzLlC_n",
    status: "Concept",
  },
  {
    id: "huix-theme",
    name: "HUIX-THEME",
    path: "/products/huix-theme",
    title: "HUIX-THEME — VS Code extension | HUIX-2099 Liberia",
    description:
      "HUIX-THEME: premium dark VS Code extension from HUIX-2099 — satellite hardware aesthetic, neon syntax highlighting, maximum code visibility. Install from the Visual Studio Marketplace.",
    keywords: [
      "HUIX-THEME",
      "HUIX THEME VS Code",
      "VS Code dark theme",
      "HUIX-2099",
      "Liberia developer tools",
      "Monrovia VS Code theme",
    ],
    image: "/products/huix-theme/Media/logo.png",
    schemaType: "SoftwareApplication",
    operatingSystem: "Windows, macOS, Linux",
    applicationCategory: "DeveloperApplication",
    externalUrl: "https://marketplace.visualstudio.com/items?itemName=huix-2099.huix-2099-theme",
    status: "Live",
  },
  {
    id: "huixor",
    name: "Huixor",
    path: "/products/huixor",
    title: "Huixor — multi-device web preview for Windows | HUIX-2099",
    description:
      "Huixor: professional Windows desktop app for multi-device web preview — phones, tablets, watches, multi-monitor layouts, and VR stage. WPF, .NET 8, WebView2, CDP emulation. From HUIX-2099, Monrovia, Liberia.",
    keywords: [
      "Huixor",
      "HUIX-2099",
      "web preview Windows",
      "multi-device preview",
      "WebView2",
      "WPF developer tool",
      "Liberia software",
    ],
    image: "/products/huixor/lightmode.jpg",
    schemaType: "SoftwareApplication",
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "DeveloperApplication",
    status: "Development",
  },
  {
    id: "monrovia-hustle-independence-day",
    name: "Monrovia Hustle — Independence Day Edition",
    path: "/products/monrovia-hustle-independence-day",
    title:
      "Monrovia Hustle Independence Day Edition 2026 — Liberian keke racing game by Victor Edet Coleman | HUIX-2099",
    description:
      "Monrovia Hustle Independence Day Edition (2026) is a Liberian keke racing art game by Victor Edet Coleman of HUIX-2099. BUILD. HUSTLE. RECLAIM. Race tricycle taxis through Monrovia for Liberia Independence Day July 26 2026 — Windows, macOS, iOS, Android.",
    keywords: [
      "Monrovia Hustle Independence Day",
      "Monrovia Hustle Independence Day 2026",
      "Monrovia Hustle Independence Day Edition",
      "Liberia Independence Day game 2026",
      "July 26 2026 Liberia game",
      "Liberia keke racing game",
      "Monrovia racing game",
      "tricycle taxi game Liberia",
      "Victor Edet Coleman",
      "Victor Coleman HUIX-2099",
      "HUIX-2099",
      "Liberian Independence Day game",
      "West Africa racing game",
      "Monrovia Hustle",
      "Liberia video game 2026",
      "keke Monrovia game",
    ],
    image: "/products/Monrovia_hustle_independence_day_edition/Loading_screen.png",
    schemaType: "VideoGame",
    operatingSystem: "Windows, macOS, iOS, Android",
    applicationCategory: "Game",
    genre: "Racing",
    status: "Development",
  },
  {
    id: "huix-character-motion",
    name: "HUIX Character Motion Plugin",
    path: "/products/huix-character-motion",
    title: "HUIX Character Motion — Monrovia Hustle Edition Blender addon | HUIX-2099",
    description:
      "HUIX Character Motion Plugin (Monrovia Hustle Edition): Blender addon for Avaturn and Mixamo-style characters — 51+ animations, prompt-driven motion, keke/tuk-tuk pack, video mocap beta, game-ready GLB export. No mocap suit needed.",
    keywords: [
      "HUIX Character Motion",
      "Blender addon",
      "Monrovia Hustle Edition",
      "Avaturn Blender",
      "Mixamo animation",
      "prompt animation Blender",
      "keke tuk tuk animation",
      "HUIX-2099",
      "Liberia game dev tools",
    ],
    image: "/products/Huix-character-motion%20plugin/hclogo.png",
    schemaType: "SoftwareApplication",
    operatingSystem: "Windows, macOS, Linux",
    applicationCategory: "DeveloperApplication",
    status: "Development",
  },
  {
    id: "typelr",
    name: "Typelr",
    path: "/products/typelr",
    title: "Typelr — Liberian typing trainer | HUIX-2099",
    description:
      "Typelr: Windows typing trainer with Liberian counties, names, phrases, and history — levels, XP, badges, and daily challenges. Educational software from HUIX-2099, Monrovia, Liberia.",
    keywords: [
      "Typelr",
      "typing trainer Liberia",
      "Liberian counties typing",
      "HUIX-2099",
      "Monrovia software",
      "Liberia education app",
    ],
    image: "/products/typelr/SPLASH%20SCREEN%20LOGO.jpg",
    schemaType: "SoftwareApplication",
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "EducationalApplication",
    downloadUrl: `${SITE_URL}/products/typelr/install`,
    status: "Live",
  },
  {
    id: "huix-market-liberia",
    name: "HUIX Market Liberia",
    path: "/products/huix-market-liberia",
    title: "HUIX Market Liberia — Premium e-commerce platform | HUIX-2099",
    description:
      "HUIX Market Liberia: premium e-commerce platform connecting verified sellers and buyers across Liberia and beyond. Integrated logistics, verified merchants, and trusted transactions.",
    keywords: [
      "HUIX Market Liberia",
      "e-commerce Liberia",
      "Liberia marketplace",
      "Liberian online shopping",
      "HUIX-2099 marketplace",
      "verified sellers Liberia",
      "Monrovia marketplace",
      "West Africa e-commerce",
    ],
    image: "/huix-market/huix-market-logo.png",
    schemaType: "WebApplication",
    applicationCategory: "ECommerce",
    externalUrl: "https://huix-market.vercel.app/",
    status: "Live",
  },
]

export const SITE_FAQS = [
  {
    question: "What services does HUIX-2099 offer?",
    answer:
      "HUIX-2099 specializes in Virtual Reality, Augmented Reality, Extended Reality, 3D visualization, AI/Machine Learning integration, app development, animation, and web engineering. We create comprehensive digital solutions for enterprise and consumer applications.",
  },
  {
    question: "Where is HUIX-2099 located?",
    answer:
      "We are based in Monrovia, Liberia, and serve clients globally. Our strategic location in West Africa allows us to bridge African innovation with global markets.",
  },
  {
    question: "What products does HUIX-2099 make?",
    answer:
      "HUIX-2099 builds Monrovia Hustle 3D (Liberian narrative game concept), HUIX-THEME (VS Code extension), Huixor (multi-device web preview for Windows), and Typelr (Liberian typing trainer). See the Products page for full details, trailers, and downloads.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Contact us through our contact form or email huixtech2099@gmail.com with your project requirements. Our team will schedule a consultation to understand your vision and create a tailored solution.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide a detailed timeline after the initial consultation.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes, we provide ongoing maintenance, support, and updates for all deployed projects. We offer flexible support packages tailored to your needs.",
  },
] as const

export function siteUrl(path = ""): string {
  if (!path) return SITE_URL
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function ogImage(path: string, alt: string) {
  return [{ url: siteUrl(path), width: 1200, height: 630, alt }]
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  imageAlt?: string
  type?: "website" | "article" | "profile"
  noIndex?: boolean
}

/** Rich metadata block for any route — OG, Twitter, canonical, robots */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    image = DEFAULT_OG_IMAGE,
    imageAlt = ORG_NAME,
    type = "website",
    noIndex = false,
  } = input
  const url = siteUrl(path)
  const images = ogImage(image, imageAlt)

  return {
    title: { absolute: title },
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: ORG_NAME,
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url),
      site: "@Huix2099",
    },
  }
}

export function productByPath(path: string): SeoProductDef | undefined {
  return SEO_PRODUCTS.find((p) => p.path === path)
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  }
}

export function productItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${ORG_NAME} Products`,
    description: "Software, games, and tools from HUIX-2099 — Liberia.",
    url: siteUrl("/products"),
    numberOfItems: SEO_PRODUCTS.length,
    itemListElement: SEO_PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: siteUrl(product.path),
    })),
  }
}

export function softwareProductJsonLd(product: SeoProductDef) {
  const personCreator =
    product.id === "monrovia-hustle-independence-day"
      ? {
          "@type": "Person" as const,
          name: "Victor Edet Coleman",
          alternateName: ["Victor Coleman", "Victor E. Coleman"],
          jobTitle: "Founder & CTO",
          url: siteUrl("/team/victor"),
          image: siteUrl("/products/Monrovia_hustle_Demo_Campane/developer/Victor%20Edet%20Coleman.png"),
          worksFor: { "@id": ORG_ID },
          sameAs: [
            "https://www.linkedin.com/in/victor-coleman-4731701a5/",
            "https://www.facebook.com/victor.coleman.745874",
          ],
        }
      : null

  const base = {
    "@context": "https://schema.org",
    "@type": product.schemaType,
    name: product.name,
    alternateName:
      product.id === "monrovia-hustle-independence-day"
        ? [
            "Monrovia Hustle Independence Day Edition 2026",
            "Monrovia Hustle Independence Day",
            "MH Independence Day Edition",
          ]
        : undefined,
    description: product.description,
    url: siteUrl(product.path),
    image: siteUrl(product.image),
    author: personCreator ?? { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    creator: personCreator ?? { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
    inLanguage: "en",
    ...(product.id === "monrovia-hustle-independence-day"
      ? {
          keywords:
            "Monrovia Hustle Independence Day 2026, Liberia Independence Day July 26, keke racing, Victor Edet Coleman, HUIX-2099",
          gamePlatform: ["PC", "Windows", "macOS", "iOS", "Android"],
          playMode: "SinglePlayer",
          datePublished: "2026-07-26",
          copyrightHolder: personCreator,
        }
      : {}),
    ...(product.operatingSystem ? { operatingSystem: product.operatingSystem } : {}),
    ...(product.applicationCategory ? { applicationCategory: product.applicationCategory } : {}),
    ...(product.genre ? { genre: product.genre } : {}),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability:
        product.id === "monrovia-hustle-independence-day"
          ? "https://schema.org/PreOrder"
          : "https://schema.org/OnlineOnly",
      url: product.externalUrl || product.downloadUrl || siteUrl(product.path),
      ...(product.id === "monrovia-hustle-independence-day" ? { validFrom: "2026-07-26" } : {}),
    },
  }

  if (product.schemaType === "VideoGame" && product.trailerUrl) {
    return {
      ...base,
      trailer: {
        "@type": "VideoObject",
        name: `${product.name} — gameplay trailer`,
        description: product.description,
        thumbnailUrl: siteUrl(product.image),
        uploadDate: "2026-01-01",
        contentUrl: product.trailerUrl,
        embedUrl: product.trailerUrl.replace("watch?v=", "embed/"),
      },
    }
  }

  return base
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function personJsonLd(input: {
  name: string
  jobTitle: string
  url: string
  email?: string
  image?: string
  sameAs?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    url: input.url,
    ...(input.email ? { email: input.email } : {}),
    ...(input.image ? { image: siteUrl(input.image) } : {}),
    worksFor: { "@id": ORG_ID },
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  }
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact HUIX-2099",
    url: siteUrl("/contact"),
    description: "Contact HUIX-2099 — Monrovia, Liberia. Email, phone, and project inquiries.",
    mainEntity: {
      "@type": "Organization",
      "@id": ORG_ID,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "huixtech2099@gmail.com",
        telephone: "+231-776-800-064",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    },
  }
}

export function webPageJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: siteUrl(input.path),
    isPartOf: { "@type": "WebSite", url: SITE_URL, publisher: { "@id": ORG_ID } },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  }
}
