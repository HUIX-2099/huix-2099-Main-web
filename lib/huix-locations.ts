/** Shared HUIX-2099 map pins — Monrovia HQ + regional reach. */
export type HuixLocation = {
  id: string
  name: string
  label: string
  subtitle?: string
  longitude: number
  latitude: number
  /** Marker accent (Liberia blue, Nigeria green, US neutral) */
  color: string
  primary?: boolean
}

export const HUIX_HQ: HuixLocation = {
  id: "monrovia",
  name: "Monrovia, Liberia",
  label: "HUIX-2099 HQ",
  subtitle: "Studio · Monrovia, LBR",
  longitude: -10.8074,
  latitude: 6.3004,
  color: "#002868",
  primary: true,
}

export const HUIX_REACH: HuixLocation[] = [
  HUIX_HQ,
  {
    id: "nigeria",
    name: "Lagos, Nigeria",
    label: "West Africa",
    subtitle: "Partners · Community",
    longitude: 3.3792,
    latitude: 6.5244,
    color: "#16a34a",
  },
  {
    id: "usa",
    name: "United States",
    label: "Americas",
    subtitle: "Distribution · Diaspora",
    longitude: -98.5795,
    latitude: 39.8283,
    color: "#BF0A30",
  },
]

/** Arcs radiating from Monrovia HQ */
export const HUIX_ARCS = HUIX_REACH.filter((l) => !l.primary).map((loc) => ({
  id: loc.id,
  from: [HUIX_HQ.longitude, HUIX_HQ.latitude] as [number, number],
  to: [loc.longitude, loc.latitude] as [number, number],
}))

/** Monrovia Hustle 3D — game footprint (Liberia-first, global interest) */
export const MH_GAME_LOCATIONS: HuixLocation[] = [
  {
    ...HUIX_HQ,
    label: "Monrovia Hustle 3D",
    subtitle: "Game world · Liberia",
    color: "#002868",
  },
  {
    id: "mh-usa",
    name: "United States",
    label: "Target market",
    subtitle: "PC · Console interest",
    longitude: -95.7129,
    latitude: 37.0902,
    color: "#BF0A30",
  },
  {
    id: "mh-nigeria",
    name: "Lagos, Nigeria",
    label: "West Africa hub",
    subtitle: "Culture · Players",
    longitude: 3.3792,
    latitude: 6.5244,
    color: "#16a34a",
  },
]

export const MH_GAME_ARCS = [
  {
    id: "mh-usa",
    from: [HUIX_HQ.longitude, HUIX_HQ.latitude] as [number, number],
    to: [-95.7129, 37.0902] as [number, number],
  },
  {
    id: "mh-nigeria",
    from: [HUIX_HQ.longitude, HUIX_HQ.latitude] as [number, number],
    to: [3.3792, 6.5244] as [number, number],
  },
]
