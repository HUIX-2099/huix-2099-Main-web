const RED = "#b5562a"
const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0 0.15  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

// Equirectangular projection of Liberia (lon -11.6 → -7.4, lat 8.6 → 4.3)
const SCALE = 130
const px = (lon: number) => (lon + 11.6) * SCALE
const py = (lat: number) => (8.6 - lat) * SCALE
type LonLat = [number, number]
const toPath = (pts: LonLat[], close = false) =>
  pts.map(([lon, lat], i) => `${i ? "L" : "M"}${px(lon).toFixed(1)} ${py(lat).toFixed(1)}`).join(" ") + (close ? " Z" : "")

// Coast, Cavalla mouth (SE) → Mano River mouth (NW)
const COAST_PTS: LonLat[] = [
  [-7.53, 4.36], [-7.72, 4.37], [-7.97, 4.4], [-8.3, 4.52], [-8.6, 4.7], [-9.0, 4.9], [-9.04, 5.01],
  [-9.35, 5.2], [-9.65, 5.45], [-9.93, 5.7], [-10.05, 5.87], [-10.35, 6.05], [-10.6, 6.2], [-10.81, 6.32],
  [-11.0, 6.5], [-11.2, 6.65], [-11.37, 6.75], [-11.49, 6.92],
]
// Land border, Mano River mouth → Sierra Leone → Guinea → Côte d'Ivoire → Cavalla mouth
const BORDER_PTS: LonLat[] = [
  [-11.49, 6.92], [-11.3, 7.2], [-11.15, 7.4], [-10.7, 7.94], [-10.23, 8.41], [-10.02, 8.43], [-9.76, 8.54],
  [-9.34, 7.93], [-9.4, 7.53], [-9.21, 7.31], [-8.93, 7.31], [-8.72, 7.71], [-8.44, 7.69], [-8.49, 7.4],
  [-8.39, 6.91], [-8.6, 6.47], [-8.31, 6.19], [-7.99, 6.13], [-7.57, 5.71], [-7.54, 5.31], [-7.64, 5.19],
  [-7.53, 4.36],
]
const COAST = toPath(COAST_PTS)
const BORDER = toPath(BORDER_PTS)
const LAND = toPath([...BORDER_PTS, ...COAST_PTS.slice(1)], true)

const RIVERS: { name: string; pts: LonLat[]; label: LonLat }[] = [
  { name: "St. Paul R.", pts: [[-10.8, 6.38], [-10.55, 6.6], [-10.3, 6.8], [-10.05, 7.2], [-9.8, 7.55], [-9.65, 8.0]], label: [-10.25, 7.05] },
  { name: "St. John R.", pts: [[-10.05, 5.9], [-9.85, 6.25], [-9.55, 6.7], [-9.25, 7.0], [-8.95, 7.25]], label: [-9.75, 6.55] },
  { name: "Cestos R.", pts: [[-9.58, 5.45], [-9.35, 5.8], [-9.1, 6.15], [-8.8, 6.45]], label: [-9.3, 6.05] },
  { name: "Lofa R.", pts: [[-11.05, 6.55], [-10.8, 6.95], [-10.45, 7.45], [-10.15, 7.95]], label: [-10.85, 7.35] },
]

const TOWNS: { name: string; at: LonLat; dx: number; dy: number; capital?: boolean }[] = [
  { name: "Monrovia", at: [-10.8, 6.3], dx: 10, dy: 4, capital: true },
  { name: "Robertsport", at: [-11.37, 6.75], dx: 10, dy: 4 },
  { name: "Buchanan", at: [-10.05, 5.88], dx: 10, dy: 4 },
  { name: "Greenville", at: [-9.04, 5.01], dx: 10, dy: 4 },
  { name: "Harper · Cape Palmas", at: [-7.72, 4.38], dx: -40, dy: 22 },
  { name: "Gbarnga", at: [-9.47, 7.0], dx: 9, dy: 4 },
  { name: "Zwedru", at: [-8.13, 6.07], dx: 9, dy: 4 },
  { name: "Voinjama", at: [-9.75, 8.42], dx: 9, dy: 4 },
]

export function LiberiaMapArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-40 -30 630 620" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="2 6">
        {[-11, -10, -9, -8].map((lon) => (
          <line key={lon} x1={px(lon)} y1={-30} x2={px(lon)} y2={590} />
        ))}
        {[8, 7, 6, 5].map((lat) => (
          <line key={lat} x1={-40} y1={py(lat)} x2={590} y2={py(lat)} />
        ))}
      </g>
      {[24, 14].map((d, i) => (
        <path key={d} d={COAST} transform={`translate(${-d * 0.6} ${d})`} stroke="currentColor" strokeOpacity={0.35 + i * 0.25} strokeWidth="1.5" />
      ))}
      <path d={LAND} fill="currentColor" fillOpacity="0.12" />
      <path d={BORDER} stroke="currentColor" strokeWidth="2" strokeDasharray="10 5 2 5" strokeLinejoin="round" />
      <path d={COAST} stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <g stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.8" strokeLinejoin="round">
        {RIVERS.map((r) => (
          <path key={r.name} d={toPath(r.pts)} />
        ))}
      </g>
      <circle cx={px(-10.8)} cy={py(6.3)} r="12" stroke="currentColor" strokeWidth="2.5" />
      <circle cx={px(-10.8)} cy={py(6.3)} r="5" fill="currentColor" />
    </svg>
  )
}

function CompassRose({ x, y, r }: { x: number; y: number; r: number }) {
  const points = Array.from({ length: 16 }, (_, i) => (i * Math.PI) / 8)
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="none" stroke="currentColor" strokeOpacity="0.5" />
      <circle r={r * 0.82} fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="2 4" />
      {points.map((a, i) => {
        const len = i % 4 === 0 ? r * 0.95 : i % 2 === 0 ? r * 0.6 : r * 0.4
        const w = i % 4 === 0 ? r * 0.12 : r * 0.07
        const cos = Math.cos(a - Math.PI / 2)
        const sin = Math.sin(a - Math.PI / 2)
        const tip = `${(cos * len).toFixed(2)},${(sin * len).toFixed(2)}`
        const left = `${(Math.cos(a) * w).toFixed(2)},${(Math.sin(a) * w).toFixed(2)}`
        const right = `${(-Math.cos(a) * w).toFixed(2)},${(-Math.sin(a) * w).toFixed(2)}`
        return (
          <polygon
            key={i}
            points={`${left} ${tip} ${right}`}
            fill={i === 0 ? RED : "currentColor"}
            fillOpacity={i === 0 ? 0.9 : i % 4 === 0 ? 0.55 : 0.3}
          />
        )
      })}
      <text y={-r - 10} textAnchor="middle" fontSize={r * 0.28} fill="currentColor" style={serif}>
        N
      </text>
    </g>
  )
}

export function VplArchiveBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Warm parchment wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(181,86,42,0.10),transparent_60%),radial-gradient(ellipse_at_10%_90%,rgba(120,84,40,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_70%_30%,rgba(181,86,42,0.12),transparent_60%),radial-gradient(ellipse_at_10%_90%,rgba(120,84,40,0.08),transparent_55%)]" />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-[#5a3a22] opacity-[0.2] dark:text-[#e8d5b5] dark:opacity-[0.13]"
      >
        <defs>
          <pattern id="vpl-land-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.35" />
          </pattern>
        </defs>

        {/* Map of Liberia */}
        <g transform="translate(700 60) scale(1.5)">
          {/* Graticule */}
          <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="1 4">
            {[-12, -11, -10, -9, -8, -7].map((lon) => (
              <line key={lon} x1={px(lon)} y1={-60} x2={px(lon)} y2={py(3.6)} />
            ))}
            {[9, 8, 7, 6, 5, 4].map((lat) => (
              <line key={lat} x1={px(-12.4)} y1={py(lat)} x2={px(-6.8)} y2={py(lat)} />
            ))}
          </g>
          <g fontSize="8" fill="currentColor" style={serif} fontStyle="italic">
            {[-11, -10, -9, -8].map((lon) => (
              <text key={lon} x={px(lon) + 3} y={py(3.6) - 4}>
                {Math.abs(lon)}° W
              </text>
            ))}
            {[8, 7, 6, 5].map((lat) => (
              <text key={lat} x={px(-12.4) + 2} y={py(lat) - 3}>
                {lat}° N
              </text>
            ))}
          </g>

          {/* Coastal water lines */}
          {[18, 11, 5].map((d, i) => (
            <path
              key={d}
              d={COAST}
              transform={`translate(${-d * 0.6} ${d})`}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.15 + i * 0.12}
              strokeWidth="0.7"
            />
          ))}

          <path d={LAND} fill="currentColor" fillOpacity="0.07" />
          <path d={LAND} fill="url(#vpl-land-hatch)" />
          <path d={BORDER} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3 1.5 3" strokeLinejoin="round" />
          <path d={COAST} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />

          {/* Rivers */}
          <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.85" strokeLinejoin="round">
            {RIVERS.map((r) => (
              <path key={r.name} d={toPath(r.pts)} />
            ))}
          </g>
          <g fontSize="7" fill="currentColor" style={serif} fontStyle="italic">
            {RIVERS.map((r) => (
              <text key={r.name} x={px(r.label[0])} y={py(r.label[1])}>
                {r.name}
              </text>
            ))}
          </g>

          {/* Towns */}
          {TOWNS.map((t) => (
            <g key={t.name}>
              {t.capital ? (
                <>
                  <circle cx={px(t.at[0])} cy={py(t.at[1])} r="5" fill="none" stroke={RED} strokeWidth="1.2" />
                  <circle cx={px(t.at[0])} cy={py(t.at[1])} r="2.2" fill={RED} />
                </>
              ) : (
                <circle cx={px(t.at[0])} cy={py(t.at[1])} r="2.4" fill={RED} />
              )}
              <text
                x={px(t.at[0]) + t.dx}
                y={py(t.at[1]) + t.dy}
                fontSize={t.capital ? 11 : 8.5}
                fill="currentColor"
                style={serif}
                fontStyle="italic"
              >
                {t.name}
              </text>
            </g>
          ))}

          <g fill="currentColor" style={serif} textAnchor="middle">
            <text x={px(-9.2)} y={py(6.6)} fontSize="26" letterSpacing="12">
              LIBERIA
            </text>
            <text x={px(-9.6)} y={py(7.7)} fontSize="8" fontStyle="italic" letterSpacing="2">
              Kpelle · Lorma · Gio · Mano
            </text>
            <text x={px(-8.4)} y={py(5.35)} fontSize="8" fontStyle="italic" letterSpacing="2">
              Kru · Grebo · Krahn
            </text>
            <text x={px(-10.9)} y={py(7.85)} fontSize="7" fontStyle="italic" letterSpacing="2">
              Vai · Gola
            </text>
          </g>
          <g fontSize="8" fill="currentColor" style={serif} fontStyle="italic" opacity="0.8">
            <text x={px(-11.25)} y={py(7.75)} textAnchor="end">SIERRA LEONE</text>
            <text x={px(-9.1)} y={py(8.45)}>GUINEA</text>
            <text transform={`translate(${px(-7.5)} ${py(6.6)}) rotate(90)`}>CÔTE D&apos;IVOIRE</text>
          </g>

          <path id="vpl-grain-coast" d={toPath(COAST_PTS.map(([lon, lat]) => [lon - 0.12, lat - 0.28] as LonLat).reverse())} fill="none" />
          <text fontSize="12" fill="currentColor" style={serif} letterSpacing="7" fontStyle="italic">
            <textPath href="#vpl-grain-coast" startOffset="22%">
              THE GRAIN COAST
            </textPath>
          </text>
          <text x={px(-10.4)} y={py(4.55)} fontSize="15" fill="currentColor" style={serif} letterSpacing="12" textAnchor="middle">
            ATLANTIC OCEAN
          </text>

          {/* Sailing route to Cape Mesurado */}
          <path
            d={`M${px(-14.5)} ${py(4.2)} C ${px(-13)} ${py(4.8)}, ${px(-11.8)} ${py(5.7)}, ${px(-10.86)} ${py(6.3)}`}
            fill="none"
            stroke={RED}
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <text x={px(-12.9)} y={py(5.3)} fontSize="8" fill={RED} style={serif} fontStyle="italic">
            Route of the Elizabeth · 1820–1822
          </text>
          <text x={px(-11.7)} y={py(6.18)} fontSize="7" fill={RED} style={serif} fontStyle="italic" textAnchor="end">
            Providence I. · C. Mesurado
          </text>
        </g>

        <CompassRose x={240} y={800} r={90} />

        {/* Cartouche */}
        <g transform="translate(1360 130)" style={serif} fill="currentColor">
          <rect x="-150" y="-60" width="300" height="120" fill="none" stroke="currentColor" />
          <rect x="-144" y="-54" width="288" height="108" fill="none" stroke="currentColor" strokeOpacity="0.5" />
          <text textAnchor="middle" y="-20" fontSize="12" letterSpacing="4">
            A NEW MAP OF
          </text>
          <text textAnchor="middle" y="8" fontSize="22" letterSpacing="6">
            LIBERIA
          </text>
          <text textAnchor="middle" y="32" fontSize="10" fontStyle="italic">
            Reconstructed by HUIX · 2099
          </text>
        </g>
      </svg>

      {/* Paper grain + vignette */}
      <div className="absolute inset-0 opacity-[0.22] mix-blend-multiply dark:opacity-[0.12] dark:mix-blend-screen" style={{ backgroundImage: GRAIN }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(60,35,15,0.12)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  )
}
