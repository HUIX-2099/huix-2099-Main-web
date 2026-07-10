import type { MetadataRoute } from "next"
import { teamMembers } from "@/app/team/data"
import { monroviaConceptArtists } from "@/lib/monrovia-hustle/concept-artists"
import { SITE_URL } from "@/lib/site"

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]): MetadataRoute.Sitemap[0] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("/", 1, "weekly"),
    entry("/about", 0.9, "monthly"),
    entry("/contact", 0.85, "monthly"),
    entry("/faq", 0.65, "monthly"),
    entry("/partners", 0.55, "monthly"),
    entry("/policy", 0.35, "yearly"),
    entry("/pricing", 0.65, "monthly"),
    entry("/research", 0.65, "monthly"),
    entry("/huix-oasis", 0.8, "monthly"),
    entry("/showcase", 0.65, "monthly"),
    entry("/team", 0.85, "weekly"),
    entry("/products", 0.85, "weekly"),
    entry("/products/huix-theme", 0.8, "monthly"),
    entry("/products/huixor", 0.75, "monthly"),
    entry("/products/huix-character-motion", 0.78, "monthly"),
    entry("/products/typelr", 0.75, "monthly"),
    entry("/products/typelr/install", 0.7, "monthly"),
    entry("/products/monrovia-hustle", 0.9, "weekly"),
    entry("/products/monrovia-hustle/concept", 0.9, "weekly"),
    entry("/products/monrovia-hustle-independence-day", 0.85, "weekly"),
    entry("/products/monrovia-hustle/donate", 0.6, "monthly"),
  ]

  const teamRoutes = teamMembers.map((m) => entry(`/team/${m.id}`, m.voiceProfile ? 0.82 : 0.7, "monthly"))

  const artistRoutes = monroviaConceptArtists.map((a) =>
    entry(`/products/monrovia-hustle/concept/artists/${a.slug}`, 0.75, "monthly"),
  )

  return [...staticRoutes, ...teamRoutes, ...artistRoutes]
}
