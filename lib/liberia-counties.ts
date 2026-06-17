/** Liberia's 15 counties — county seats for map markers. */
export type LiberiaCounty = {
  id: string
  name: string
  seat: string
  longitude: number
  latitude: number
  /** Monrovia (Montserrado) — game capital, special marker */
  isMonrovia?: boolean
}

export const LIBERIA_MAP_BOUNDS: [[number, number], [number, number]] = [
  [-11.65, 4.15],
  [-7.15, 8.85],
]

export const LIBERIA_MAP_CENTER: [number, number] = [-9.45, 6.45]

export const LIBERIA_COUNTIES: LiberiaCounty[] = [
  { id: "bomi", name: "Bomi", seat: "Tubmanburg", longitude: -10.8214, latitude: 6.8706 },
  { id: "bong", name: "Bong", seat: "Gbarnga", longitude: -9.4712, latitude: 7.0004 },
  { id: "gbarpolu", name: "Gbarpolu", seat: "Bopolu", longitude: -10.4875, latitude: 7.0689 },
  { id: "grand-bassa", name: "Grand Bassa", seat: "Buchanan", longitude: -10.0496, latitude: 5.8769 },
  { id: "grand-cape-mount", name: "Grand Cape Mount", seat: "Robertsport", longitude: -11.3689, latitude: 6.7531 },
  { id: "grand-gedeh", name: "Grand Gedeh", seat: "Zwedru", longitude: -8.1356, latitude: 6.0707 },
  { id: "grand-kru", name: "Grand Kru", seat: "Barclayville", longitude: -8.2267, latitude: 4.6738 },
  { id: "lofa", name: "Lofa", seat: "Voinjama", longitude: -9.7478, latitude: 8.4219 },
  { id: "margibi", name: "Margibi", seat: "Kakata", longitude: -10.3461, latitude: 6.5306 },
  { id: "maryland", name: "Maryland", seat: "Harper", longitude: -7.7128, latitude: 4.3786 },
  {
    id: "montserrado",
    name: "Montserrado",
    seat: "Monrovia",
    longitude: -10.8074,
    latitude: 6.3004,
    isMonrovia: true,
  },
  { id: "nimba", name: "Nimba", seat: "Sanniquellie", longitude: -8.7131, latitude: 7.3619 },
  { id: "rivercess", name: "Rivercess", seat: "River Cess", longitude: -9.583, latitude: 5.46 },
  { id: "river-gee", name: "River Gee", seat: "Fish Town", longitude: -7.8756, latitude: 5.1978 },
  { id: "sinoe", name: "Sinoe", seat: "Greenville", longitude: -9.0388, latitude: 5.0114 },
]
