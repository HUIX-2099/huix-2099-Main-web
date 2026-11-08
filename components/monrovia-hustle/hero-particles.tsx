"use client"

import { useEffect, useRef } from "react"
import { MH_PALETTE } from "./hustle-brand"
import { CITY_CENTRE, MAP_HEIGHT, ROADS, onLand, type Vec2 } from "./monrovia-map"

type Vec3 = [number, number, number]

/** Small seeded PRNG, so the city and the controller come out the same on every visit. */
function seeded(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2)
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}

function shuffle<T>(list: T[], rand: () => number) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }
  return list
}

/** Points every `gap` along a line. */
function along(line: Vec2[], gap: number, closed = false) {
  const out: Vec2[] = []
  const pts = closed ? [...line, line[0]] : line
  let carry = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const len = Math.hypot(bx - ax, by - ay)
    for (let d = carry; d < len; d += gap) out.push([ax + ((bx - ax) * d) / len, ay + ((by - ay) * d) / len])
    carry = (carry - len) % gap
    if (carry < 0) carry += gap
  }
  return out
}

/** Where a shape's edge is: cells of a fine grid where `inside` flips,
 *  thinned out to `gap` apart. */
function edge(inside: (p: Vec2) => boolean, [x0, y0, x1, y1]: [number, number, number, number], gap: number) {
  const fine = 0.008
  const cols = Math.ceil((x1 - x0) / fine) + 1
  const rows = Math.ceil((y1 - y0) / fine) + 1
  const grid: boolean[] = []
  for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) grid.push(inside([x0 + c * fine, y0 + r * fine]))
  const at = (c: number, r: number) => grid[c * rows + r]

  const kept: Vec2[] = []
  for (let c = 0; c < cols - 1; c++) {
    for (let r = 0; r < rows - 1; r++) {
      if (at(c, r) === at(c + 1, r) && at(c, r) === at(c, r + 1)) continue
      const p: Vec2 = [x0 + (c + 0.5) * fine, y0 + (r + 0.5) * fine]
      if (kept.every((q) => Math.abs(p[0] - q[0]) > gap || Math.abs(p[1] - q[1]) > gap || Math.hypot(p[0] - q[0], p[1] - q[1]) > gap)) kept.push(p)
    }
  }
  return kept
}

// ── The colours a particle can take: bone white, then the four paints ────

const INKS = ["#f4f1ea", ...MH_PALETTE.map((paint) => paint.color)]
const INK = Object.fromEntries(MH_PALETTE.map((paint, i) => [paint.symbol, i + 1])) as Record<
  (typeof MH_PALETTE)[number]["symbol"],
  number
>
const LEVELS = 10

// ── The controller, as a signed distance (negative = inside) ─────────────

function roundRect([x, y]: Vec2, [cx, cy]: Vec2, [hx, hy]: Vec2, r: number) {
  const qx = Math.abs(x - cx) - hx + r
  const qy = Math.abs(y - cy) - hy + r
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r
}

function capsule([x, y]: Vec2, [ax, ay]: Vec2, [bx, by]: Vec2, r: number) {
  const pax = x - ax
  const pay = y - ay
  const bax = bx - ax
  const bay = by - ay
  const h = clamp((pax * bax + pay * bay) / (bax * bax + bay * bay), 0, 1)
  return Math.hypot(pax - bax * h, pay - bay * h) - r
}

function smoothMin(a: number, b: number, k: number) {
  const h = clamp(0.5 + (0.5 * (b - a)) / k, 0, 1)
  return b + (a - b) * h - k * h * (1 - h)
}

/** Body across the top, a grip falling away on each side. */
function outline(p: Vec2) {
  const body = roundRect(p, [0, 0.1], [0.8, 0.3], 0.26)
  const left = capsule(p, [-0.5, 0], [-0.76, -0.62], 0.22)
  const right = capsule(p, [0.5, 0], [0.76, -0.62], 0.22)
  return smoothMin(smoothMin(body, left, 0.14), right, 0.14)
}

const STICKS: Vec2[] = [
  [-0.27, -0.15],
  [0.27, -0.15],
]
const DPAD: Vec2 = [-0.56, 0.12]
const BUTTONS: Vec2 = [0.56, 0.12]

/** How far the face rises at a point: low at the rim, higher inside, with
 *  domes for the sticks and the two button clusters. */
function rise(p: Vec2) {
  const inside = clamp(-outline(p) / 0.16, 0, 1)
  let h = 0.05 + 0.09 * inside * inside * (3 - 2 * inside)
  for (const [sx, sy] of STICKS) h += 0.09 * Math.exp(-((p[0] - sx) ** 2 + (p[1] - sy) ** 2) / 0.0045)
  for (const [cx, cy] of [DPAD, BUTTONS]) h += 0.035 * Math.exp(-((p[0] - cx) ** 2 + (p[1] - cy) ** 2) / 0.02)
  return h
}

/** A spot a particle can settle on, in its shape's own coordinates. */
type Spot = { at: Vec3; ink: number; glow: number; size: number }

/** The city, lying in the x–z plane: its shores and river banks, the main
 *  roads picked out bright, and the land between filled in faint. Toward the
 *  edge of the frame it thins away, so the map has no hard border. */
function cityPoints(rand: () => number) {
  const fade = ([x, z]: Vec2) => rand() > smooth(0.7, 1, Math.hypot(x, z / MAP_HEIGHT))
  const ground = (p: Vec2): Vec3 => [p[0], 0, p[1]]

  const roads = ROADS.flatMap((road) => along(road, 0.017))
    .filter((p) => onLand(p) && fade(p))
    .map((p): Spot => ({ at: ground(p), ink: 0, glow: 0.95, size: 1.5 }))

  const shore = shuffle(
    edge(onLand, [-1, -MAP_HEIGHT, 1, MAP_HEIGHT], 0.019)
      .filter(fade)
      .map((p): Spot => ({ at: ground(p), ink: 0, glow: 0.95, size: 1.4 })),
    rand,
  )

  const step = 0.031
  const land: Spot[] = []
  for (let x = -1; x <= 1; x += step) {
    for (let z = -MAP_HEIGHT; z <= MAP_HEIGHT; z += step) {
      const p: Vec2 = [x + (rand() - 0.5) * step * 0.8, z + (rand() - 0.5) * step * 0.8]
      if (onLand(p) && fade(p)) land.push({ at: ground(p), ink: 0, glow: 0.5, size: 1.25 })
    }
  }

  // Downtown, ringed in red where the name sits on the map.
  const downtown = along(
    Array.from({ length: 24 }, (_, j): Vec2 => {
      const a = (j / 24) * Math.PI * 2
      return [CITY_CENTRE[0] + Math.cos(a) * 0.05, CITY_CENTRE[1] + Math.sin(a) * 0.05]
    }),
    0.012,
    true,
  ).map((p): Spot => ({ at: ground(p), ink: INK.circle, glow: 1, size: 1.6 }))

  return { roads, shore, land: shuffle(land, rand), downtown }
}

/** The controller, as `count` points: the rim of its face and of its
 *  underside, the sticks, D-pad and touchpad drawn on, the four face buttons
 *  in the poster's shapes and paints, and the face filled in between. */
function padPoints(count: number, rand: () => number) {
  const face = (p: Vec2, lift = 0): Vec3 => [p[0], p[1], -rise(p) - lift]
  const bounds: [number, number, number, number] = [-1.1, -0.95, 1.1, 0.5]

  const ring = ([cx, cy]: Vec2, r: number, n = 32) =>
    Array.from({ length: n }, (_, j): Vec2 => {
      const a = (j / n) * Math.PI * 2
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]
    })

  const line = (pts: Vec2[], ink: number, gap: number, closed = true, glow = 0.9, size = 1.4) =>
    along(pts, gap, closed).map((p): Spot => ({ at: face(p, 0.012), ink, glow, size }))

  const g = 0.04
  const [bx, by] = BUTTONS
  const glyph = 0.11
  const plus = (
    [
      [-1, 3],
      [1, 3],
      [1, 1],
      [3, 1],
      [3, -1],
      [1, -1],
      [1, -3],
      [-1, -3],
      [-1, -1],
      [-3, -1],
      [-3, 1],
      [-1, 1],
    ] as Vec2[]
  ).map(([x, y]): Vec2 => [DPAD[0] + x * 0.022, DPAD[1] + y * 0.022])

  const marks: Spot[] = [
    ...STICKS.flatMap((stick) => [...line(ring(stick, 0.085), 0, 0.016), ...line(ring(stick, 0.05), 0, 0.016)]),
    ...line(plus, 0, 0.014),
    ...line(
      [
        [-0.22, 0.32],
        [0.22, 0.32],
        [0.2, 0.05],
        [-0.2, 0.05],
      ],
      0,
      0.02,
      true,
      0.6,
    ),
    ...line(
      [0, 1, 2].map((j): Vec2 => {
        const a = (j / 3) * Math.PI * 2
        return [bx + Math.sin(a) * g, by + glyph + Math.cos(a) * g]
      }),
      INK.triangle,
      0.008,
      true,
      1,
      1.9,
    ),
    ...line(ring([bx + glyph, by], g * 0.85), INK.circle, 0.008, true, 1, 1.9),
    ...line(
      [
        [bx - glyph - g * 0.75, by + g * 0.75],
        [bx - glyph + g * 0.75, by + g * 0.75],
        [bx - glyph + g * 0.75, by - g * 0.75],
        [bx - glyph - g * 0.75, by - g * 0.75],
      ],
      INK.square,
      0.008,
      true,
      1,
      1.9,
    ),
    ...line(
      [
        [bx - g * 0.75, by - glyph + g * 0.75],
        [bx + g * 0.75, by - glyph - g * 0.75],
      ],
      INK.cross,
      0.008,
      false,
      1,
      1.9,
    ),
    ...line(
      [
        [bx + g * 0.75, by - glyph + g * 0.75],
        [bx - g * 0.75, by - glyph - g * 0.75],
      ],
      INK.cross,
      0.008,
      false,
      1,
      1.9,
    ),
  ]

  const rim = edge((p) => outline(p) < 0, bounds, 0.022)
  const top = rim.map((p): Spot => ({ at: face(p), ink: 0, glow: 0.85, size: 1.35 }))
  const under = rim
    .filter((_, i) => i % 2 === 0)
    .map(([x, y]): Spot => ({ at: [x, y, 0.6 * rise([x, y]) - 0.02], ink: 0, glow: 0.4, size: 1.1 }))

  const fill: Spot[] = []
  while (marks.length + top.length + under.length + fill.length < count) {
    const p: Vec2 = [lerp(bounds[0], bounds[2], rand()), lerp(bounds[1], bounds[3], rand())]
    if (outline(p) < -0.02) fill.push({ at: face(p), ink: 0, glow: 0.45, size: 1.15 })
  }

  return [...marks, ...top, ...under, ...fill].slice(0, count)
}

/** One point of light. Every particle has a place on the map; the movers
 *  also have one on the controller, and travel between the two. */
type Particle = {
  map: Spot
  pad: Spot | null
  /** Where it starts on the first visit, scattered round the scene. */
  from: Vec3
  /** Head starts for the rise, the fall and the first gather (0–1). */
  rise: number
  fall: number
  gather: number
  /** Distance from downtown on the map, for the ripple before the rise. */
  reach: number
  twinkle: number
}

function particles(): Particle[] {
  const rand = seeded(1847)
  const city = cityPoints(rand)

  // The streets, half the shoreline and some of the land rise to make the
  // controller; downtown and the rest stay behind as the city's ghost.
  const shoreSplit = Math.floor(city.shore.length * 0.55)
  const movers = [...city.roads, ...city.shore.slice(0, shoreSplit), ...city.land.slice(0, 700)]
  const stayers = [...city.downtown, ...city.shore.slice(shoreSplit), ...city.land.slice(700)]

  const reach = (s: Spot) => Math.hypot(s.at[0] - CITY_CENTRE[0], s.at[2] - CITY_CENTRE[1])
  const fromCentre = (s: Spot) => Math.hypot(s.at[0], s.at[1] + 0.15)

  // Pair them by rank: what is nearest downtown becomes the heart of the
  // controller, so it grows out from the middle of the city.
  movers.sort((a, b) => reach(a) - reach(b))
  const pad = padPoints(movers.length, rand).sort((a, b) => fromCentre(a) - fromCentre(b))
  const heights = pad.map((s) => s.at[1])
  const low = Math.min(...heights)
  const high = Math.max(...heights)

  const scatter = (): Vec3 => {
    const a = rand() * Math.PI * 2
    const r = 1.4 + rand() * 1.2
    return [Math.cos(a) * r, (rand() - 0.5) * 2.4, clamp(Math.sin(a) * r, -1.2, 2)]
  }

  const all: Particle[] = movers.map((map, i) => ({
    map,
    pad: pad[i],
    from: scatter(),
    rise: clamp(i / movers.length + (rand() - 0.5) * 0.08, 0, 1),
    // Down again from the grips up, the face buttons last.
    fall: clamp((pad[i].at[1] - low) / (high - low) + (rand() - 0.5) * 0.1, 0, 1),
    gather: rand(),
    reach: reach(map),
    twinkle: rand() * Math.PI * 2,
  }))

  for (const map of stayers) {
    all.push({ map, pad: null, from: scatter(), rise: 0, fall: 0, gather: rand(), reach: reach(map), twinkle: rand() * Math.PI * 2 })
  }
  return all
}

function rotate([x, y, z]: Vec3, rx: number, ry: number, rz: number): Vec3 {
  let cos = Math.cos(ry)
  let sin = Math.sin(ry)
  ;[x, z] = [x * cos + z * sin, -x * sin + z * cos]
  cos = Math.cos(rx)
  sin = Math.sin(rx)
  ;[y, z] = [y * cos - z * sin, y * sin + z * cos]
  cos = Math.cos(rz)
  sin = Math.sin(rz)
  ;[x, y] = [x * cos - y * sin, x * sin + y * cos]
  return [x, y, z]
}

// ── The film: the city gathers, rises into a controller, falls back ──────

const GATHER = 2.6
const SCENES = [
  ["city", 5],
  ["rise", 3.6],
  ["pad", 5.2],
  ["fall", 3],
] as const
const LOOP = SCENES.reduce((sum, [, length]) => sum + length, 0)

type Scene = "gather" | (typeof SCENES)[number][0]

function sceneAt(time: number): { scene: Scene; p: number } {
  if (time < GATHER) return { scene: "gather", p: time / GATHER }
  let t = (time - GATHER) % LOOP
  for (const [scene, length] of SCENES) {
    if (t < length) return { scene, p: t / length }
    t -= length
  }
  return { scene: "city", p: 0 }
}

/** How far through its own move a particle is, given its head start. */
const travel = (p: number, start: number, spread = 0.45) => clamp((p - start * spread) / (1 - spread), 0, 1)

/** Fades a beat of text in and out over a scene. */
const beat = (p: number, a: number, b: number) => smooth(a, a + 0.12, p) * (1 - smooth(b - 0.12, b, p))

type Frame = { x: number[]; y: number[]; r: number[] }

function draw(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  time: number,
  tilt: [number, number],
  dots: Particle[],
  buckets: Frame[],
  font: string,
) {
  ctx.clearRect(0, 0, w, h)
  const narrow = w < 760
  const { scene, p } = sceneAt(time)

  // 0 while the city lies flat, 1 while the controller is up.
  const lift = scene === "rise" ? ease(p) : scene === "pad" ? 1 : scene === "fall" ? 1 - ease(p) : 0

  const size = narrow ? Math.min(h * 0.3, w * 0.5) : Math.min(h * 0.38, w * 0.235)
  const cx = narrow ? w * 0.5 : w * 0.725
  const cy = narrow ? h * 0.7 : h * 0.5
  const focal = 3.2
  const project = ([x, y, z]: Vec3) => {
    const s = focal / (focal + z)
    return [cx + x * s * size, cy - y * s * size, s] as const
  }

  // The camera looks down on the city like the map, then drops low as the
  // controller rises out of it, so the city becomes the ground.
  const yaw = Math.sin(time * 0.11) * 0.22 + tilt[0]
  const pitch = lerp(-1.15, -0.55, lift) + tilt[1]
  const sink = lerp(0, -0.55, lift)
  const zoom = lerp(1, 0.9, lift)
  const onMap = ([x, , z]: Vec3): Vec3 => {
    const v = rotate([x * zoom, 0, z * zoom], pitch, yaw, 0)
    return [v[0], v[1] + sink, v[2]]
  }

  // The controller faces up toward the viewer, rocking a little.
  const padAt: Vec3 = [-0.04, lerp(0.15, 0.42, lift), 0]
  const padTurn: Vec3 = [0.55 + Math.sin(time * 0.3) * 0.08 + tilt[1] * 0.6, Math.sin(time * 0.37) * 0.45 + tilt[0], Math.sin(time * 0.23) * 0.05]
  const onPad = (v: Vec3): Vec3 => {
    const r = rotate([v[0] * 0.62, v[1] * 0.62, v[2] * 0.62], ...padTurn)
    return [r[0] + padAt[0], r[1] + padAt[1], r[2] + padAt[2]]
  }

  // Just before the rise, a ripple runs out from downtown across the city.
  const ripple = scene === "city" ? smooth(0.6, 1, p) * 2.4 : -1

  for (const bucket of buckets) {
    bucket.x.length = 0
    bucket.y.length = 0
    bucket.r.length = 0
  }

  for (const dot of dots) {
    const home = onMap(dot.map.at)
    let pos = home
    let spot = dot.map

    if (scene === "gather") {
      const e = 1 - (1 - travel(p, dot.gather, 0.5)) ** 3
      pos = [lerp(dot.from[0], home[0], e), lerp(dot.from[1], home[1], e), lerp(dot.from[2], home[2], e)]
    } else if (dot.pad && scene !== "city") {
      const there = onPad(dot.pad.at)
      const e =
        scene === "pad" ? 1 : scene === "rise" ? ease(travel(p, dot.rise)) : 1 - travel(p, dot.fall) ** 2 * (3 - 2 * travel(p, dot.fall))
      // Straight up out of the street, then across into place; the same way
      // back down. A slight twist round the column on the way.
      const bend: Vec3 = [home[0], there[1] + 0.12, home[2]]
      const u = 1 - e
      let x = u * u * home[0] + 2 * u * e * bend[0] + e * e * there[0]
      const y = u * u * home[1] + 2 * u * e * bend[1] + e * e * there[1]
      let z = u * u * home[2] + 2 * u * e * bend[2] + e * e * there[2]
      const twist = Math.sin(Math.PI * e) * 0.7
      const dx = x - padAt[0]
      const dz = z - padAt[2]
      x = padAt[0] + dx * Math.cos(twist) - dz * Math.sin(twist)
      z = padAt[2] + dx * Math.sin(twist) + dz * Math.cos(twist)
      pos = [x, y, z]
      if (e > 0.5) spot = dot.pad
    }

    const [sx, sy, s] = project(pos)
    if (sx < -10 || sx > w + 10 || sy < -10 || sy > h + 10) continue

    let glow = spot.glow * (0.82 + 0.18 * Math.sin(time * 1.7 + dot.twinkle))
    let r = spot.size
    if (ripple >= 0 && spot === dot.map) {
      const wave = Math.exp(-(((dot.reach - ripple) / 0.07) ** 2))
      glow += wave * 0.7
      r += wave * 0.9
    }
    // The city left behind dims while the controller is up.
    if (!dot.pad) glow *= 1 - lift * 0.35
    glow *= clamp(s, 0.6, 1.15) * (narrow ? 0.55 : 1)

    const level = clamp(Math.round(glow * LEVELS), 1, LEVELS)
    const bucket = buckets[spot.ink * LEVELS + level - 1]
    bucket.x.push(sx)
    bucket.y.push(sy)
    bucket.r.push(r * clamp(s, 0.7, 1.4) * 0.5)
  }

  ctx.globalCompositeOperation = "lighter"
  buckets.forEach((bucket, i) => {
    if (!bucket.x.length) return
    ctx.globalAlpha = ((i % LEVELS) + 1) / LEVELS
    ctx.fillStyle = INKS[Math.floor(i / LEVELS)]
    for (let j = 0; j < bucket.x.length; j++) {
      const r = bucket.r[j]
      ctx.fillRect(bucket.x[j] - r, bucket.y[j] - r, r * 2, r * 2)
    }
  })
  ctx.globalCompositeOperation = "source-over"

  if (narrow) {
    ctx.globalAlpha = 1
    return
  }

  // ── A few words, no more ──
  ctx.font = `600 10px ${font}`
  ctx.textBaseline = "middle"
  if ("letterSpacing" in ctx) ctx.letterSpacing = "0.22em"

  // The city: a pin on downtown, its name and position flagged above the map.
  const pin = scene === "city" ? beat(p, 0.05, 0.62) : scene === "gather" ? smooth(0.8, 1, p) : 0
  if (pin > 0) {
    const [px, py] = project(onMap([CITY_CENTRE[0], 0, CITY_CENTRE[1]]))
    const [, top] = project(onMap([CITY_CENTRE[0], 0, MAP_HEIGHT * 0.9]))
    const ty = Math.min(py - 40, top - 12)
    ctx.globalAlpha = pin
    ctx.strokeStyle = INKS[0]
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(px, py - 8)
    ctx.lineTo(px, ty)
    ctx.lineTo(px + 14, ty)
    ctx.stroke()
    ctx.textAlign = "left"
    ctx.fillStyle = INKS[0]
    ctx.fillText("MONROVIA", px + 22, ty - 7)
    ctx.globalAlpha = pin * 0.55
    ctx.fillText("6.30° N  10.80° W", px + 22, ty + 8)
  }

  // From the streets — to your hands.
  const streets = scene === "rise" ? smooth(0.05, 0.25, p) : scene === "pad" ? 1 - smooth(0.82, 0.96, p) : 0
  const hands = scene === "pad" ? beat(p, 0.08, 0.96) : 0
  ctx.textAlign = "center"
  ctx.fillStyle = INKS[0]
  if (streets > 0) {
    const [, by] = project(onMap([0, 0, -MAP_HEIGHT * 0.8]))
    ctx.globalAlpha = streets * 0.8
    ctx.fillText("FROM THE STREETS", cx, Math.min(by + 28, h - 28))
  }
  if (hands > 0) {
    const [, ty] = project(onPad([0, 0.62, 0]))
    ctx.globalAlpha = hands
    ctx.fillText("TO YOUR HANDS", cx + padAt[0] * size, ty - 26)
  }
  ctx.globalAlpha = 1
}

/**
 * The hero's short film, in particles: Monrovia gathers out of the dark as
 * it lies on the map, a ripple runs out from downtown, and the streets rise
 * out of the city to become a game controller, which hangs there and then
 * falls back into the city, over and over. Drawn on a plain canvas.
 */
export function HeroParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dots = particles()
    const buckets: Frame[] = Array.from({ length: INKS.length * LEVELS }, () => ({ x: [], y: [], r: [] }))
    const font = getComputedStyle(canvas).getPropertyValue("--font-mono").trim() || "monospace"
    // Held on the controller over the city, for anyone who asks for less motion.
    const stillTime = GATHER + SCENES[0][1] + SCENES[1][1] + SCENES[2][1] * 0.5
    let w = 0
    let h = 0
    let frame = 0
    let visible = true
    const tilt: [number, number] = [0, 0]
    const aim: [number, number] = [0, 0]
    const start = performance.now()

    const resize = () => {
      // The hero fills the screen under the bars above it; their height
      // changes with the width, so it is measured rather than guessed.
      const stage = canvas.parentElement
      if (stage) {
        stage.style.setProperty("--mh-stage-top", `${Math.round(stage.getBoundingClientRect().top + window.scrollY)}px`)
      }
      const box = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = box.width
      h = box.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (still) draw(ctx, w, h, stillTime, tilt, dots, buckets, font)
    }

    const tick = (now: number) => {
      frame = 0
      tilt[0] += (aim[0] - tilt[0]) * 0.05
      tilt[1] += (aim[1] - tilt[1]) * 0.05
      draw(ctx, w, h, (now - start) / 1000, tilt, dots, buckets, font)
      if (visible) frame = requestAnimationFrame(tick)
    }

    const onPointer = (event: PointerEvent) => {
      aim[0] = (event.clientX / window.innerWidth - 0.5) * 0.4
      aim[1] = (event.clientY / window.innerHeight - 0.5) * 0.2
    }

    const watch = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !still && !frame) frame = requestAnimationFrame(tick)
    })

    const sizer = new ResizeObserver(resize)
    sizer.observe(canvas)
    resize()

    if (!still) {
      watch.observe(canvas)
      window.addEventListener("pointermove", onPointer, { passive: true })
    }

    return () => {
      sizer.disconnect()
      watch.disconnect()
      window.removeEventListener("pointermove", onPointer)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden />
}
