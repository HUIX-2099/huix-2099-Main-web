const MUSIC_ARTIST_DIR = "/products/Monrovia_hustle_Demo_Campane/music_artist"

export function musicArtistSrc(filename: string) {
  return `${MUSIC_ARTIST_DIR}/${encodeURIComponent(filename)}`
}

export const MONROVIA_CONCEPT_PAGE_HREF = "/products/monrovia-hustle/concept"
export const MONROVIA_CONCEPT_ARTISTS_HREF = `${MONROVIA_CONCEPT_PAGE_HREF}#artists`

export function monroviaConceptArtistPageHref(slug: string) {
  return `${MONROVIA_CONCEPT_PAGE_HREF}/artists/${slug}`
}

export type MonroviaConceptArtist = {
  slug: string
  name: string
  discipline: string
  imageSrc: string
  imageAlt: string
  /** Short blurb on the concept page card */
  summary: string
  facebookHref: string
  /** Longer sections on the artist detail page */
  about: readonly string[]
}

export const monroviaConceptArtists = [
  {
    slug: "bucky-raw",
    name: "Bucky Raw",
    discipline: "Music partnership · Marketing & promotion",
    imageSrc: musicArtistSrc("bucky raw.jpeg"),
    imageAlt: "Bucky Raw — Monrovia Hustle 3D music and marketing partner",
    summary:
      "Bucky Raw and his team partner with HUIX-2099 on Monrovia Hustle 3D: authentic Liberian sound for the slice, plus real marketing muscle — they help promote the game, shape how it shows up to players and press, and back the build with street-credible reach.",
    facebookHref: "https://www.facebook.com/bucky.raw.3",
    about: [
      "This is a formal music and marketing collaboration, not a one-off volunteer drop: Bucky Raw's team works alongside HUIX-2099 on how Monrovia Hustle 3D sounds in public beats and how the concept is introduced — trailers, socials, reels, and the wider promotional lane the studio runs with partners.",
      "On the music side, the partnership is about Liberian texture and energy that matches the vertical slice; on the marketing side, it is active promotion of the game and build awareness, coordinated with HUIX-2099 so messaging stays honest (concept / prototype labelling, no fake retail promises).",
      "African Baddie is a Bucky Raw record that has been licensed into Monrovia Hustle 3D for a while — it plays in the club scene when the slice moves Jayboy through that beat.",
      "Track lists, cleared stems, and campaign assets tighten as funding and legal paths mature. Facebook is the live surface for his team's drops next to HUIX-2099 dev work — use the link below. Credits here update as the partnership formalizes; nothing implies endorsement by real-world brands referenced in-fiction.",
    ],
  },
  {
    slug: "nikey-20",
    name: "Nikey 20",
    discipline: "Music contributor · menu, gameplay & original tracks",
    imageSrc: musicArtistSrc("Nikey 20.jpg"),
    imageAlt: "Nikey 20 — Monrovia Hustle 3D music contributor (original tracks)",
    summary:
      "Nikey 20 FT SIO King Dennis.mp3 — the hustler song — runs on the main menu and in gameplay in Monrovia Hustle 3D. His own cuts (Muck Buck, Musci African, Baddie Baddie) are in the build too, with more masters clearing as the slice tightens.",
    facebookHref: "https://www.facebook.com/media/set/?set=a.468596765269233&type=3",
    about: [
      "Nikey 20 placed original Nikey 20 records into the vertical slice — not generic library filler. Named contributions include Muck Buck, Musci African, and Baddie Baddie, with additional masters still rotating through QA and mix passes.",
      "The hustler record Nikey 20 FT SIO King Dennis.mp3 is authored for menu and gameplay energy: HUIX-2099 uses it on the main menu and under street / mission gameplay so the slice opens and plays with Nikey's vocal lane in loop-friendly form.",
      "Volunteer placement still means lightweight paperwork until funding catches the soundtrack lane; route press, sync, or feature requests through huixtech2099@gmail.com on the main concept page. Photos and session drops stay on the Facebook media set below.",
    ],
  },
] as const satisfies readonly MonroviaConceptArtist[]

export function getMonroviaConceptArtist(slug: string): MonroviaConceptArtist | undefined {
  return monroviaConceptArtists.find((a) => a.slug === slug)
}
