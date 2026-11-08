// Monrovia, traced by hand off a 727×672 street map of the city centre:
// the Atlantic to the west, the Mesurado River and its channels, Balli
// Island and the main roads. Points are rescaled so the frame is two units
// across, centred on the middle of the map; x runs east and y north.

export type Vec2 = [number, number]

export const MAP_HEIGHT = 672 / 727

const fromMap = ([x, y]: Vec2): Vec2 => [(x - 363.5) / 363.5, (336 - y) / 363.5]

/** The Atlantic, from the river mouth round West Point and Mamba Point and
 *  down the coast past Capitol Hill. */
const OCEAN: Vec2[] = (
  [
    [0, 0],
    [366, 0],
    [368, 76],
    [352, 88],
    [320, 86],
    [300, 82],
    [250, 86],
    [242, 110],
    [240, 150],
    [232, 162],
    [224, 178],
    [216, 192],
    [208, 202],
    [170, 206],
    [128, 208],
    [114, 218],
    [106, 236],
    [104, 300],
    [98, 330],
    [100, 345],
    [112, 360],
    [128, 376],
    [150, 392],
    [170, 402],
    [200, 416],
    [226, 426],
    [264, 448],
    [282, 458],
    [300, 468],
    [320, 480],
    [338, 498],
    [344, 508],
    [340, 530],
    [338, 546],
    [360, 556],
    [370, 572],
    [392, 586],
    [416, 602],
    [434, 618],
    [452, 634],
    [470, 642],
    [490, 650],
    [514, 658],
    [530, 666],
    [544, 672],
    [0, 672],
  ] as Vec2[]
).map(fromMap)

/** The Mesurado from its mouth behind West Point, past the city's north
 *  shore and out into the wide water round Balli Island. */
const ESTUARY: Vec2[] = (
  [
    // The city's bank, from the mouth down to Capitol Hill.
    [318, 86],
    [321, 112],
    [306, 128],
    [290, 144],
    [282, 160],
    [274, 176],
    [266, 192],
    [274, 202],
    [280, 214],
    [288, 226],
    [296, 238],
    [312, 248],
    [324, 256],
    [344, 264],
    [356, 274],
    [368, 282],
    [378, 290],
    [392, 298],
    [400, 314],
    [406, 330],
    [406, 350],
    [402, 362],
    [406, 380],
    [410, 400],
    [422, 414],
    [432, 424],
    [440, 440],
    [456, 450],
    [458, 470],
    [458, 490],
    [466, 502],
    [478, 504],
    // Round Balli Island.
    [482, 490],
    [490, 472],
    [498, 456],
    [512, 444],
    [530, 440],
    [548, 450],
    [564, 462],
    [574, 476],
    [570, 496],
    [562, 510],
    [560, 530],
    [566, 552],
    [568, 562],
    // The far bank of the bay, and out to the east.
    [584, 554],
    [600, 544],
    [620, 534],
    [648, 520],
    [676, 508],
    [684, 488],
    [688, 460],
    [690, 440],
    [696, 424],
    [704, 412],
    [714, 398],
    [727, 390],
    [727, 356],
    [704, 360],
    [686, 370],
    [668, 380],
    [648, 390],
    [628, 398],
    [614, 408],
    [604, 418],
    // The north bank, back up to Bushrod Island.
    [588, 422],
    [568, 418],
    [544, 410],
    [520, 396],
    [500, 384],
    [480, 368],
    [470, 354],
    [462, 342],
    [456, 330],
    [450, 312],
    [446, 296],
    [438, 284],
    [430, 274],
    [424, 264],
    [410, 262],
    [362, 262],
    [340, 258],
    [334, 250],
    [318, 242],
    [306, 232],
    [312, 220],
    [304, 208],
    [298, 200],
    [304, 190],
    [306, 176],
    [320, 160],
    [338, 144],
    [346, 128],
    [352, 112],
    [360, 96],
    [356, 88],
  ] as Vec2[]
).map(fromMap)

/** Narrower water as strokes, [from, to, half-width]: the channel east of
 *  Bushrod's tip winding north-east, its creek, and the creek by Balli. */
const CHANNELS: [Vec2, Vec2, number][] = (
  [
    [[386, 264], [368, 240], 24],
    [[368, 240], [366, 216], 26],
    [[366, 216], [378, 200], 22],
    [[378, 200], [398, 184], 18],
    [[398, 184], [426, 166], 15],
    [[426, 166], [446, 152], 12],
    [[446, 152], [468, 138], 10],
    [[468, 138], [484, 124], 9],
    [[484, 124], [506, 116], 10],
    [[506, 116], [526, 128], 10],
    [[526, 128], [548, 144], 10],
    [[548, 144], [572, 152], 10],
    [[572, 152], [600, 142], 9],
    [[600, 142], [614, 122], 7],
    [[614, 122], [620, 60], 5],
    [[620, 60], [620, 0], 4],
    [[470, 500], [476, 560], 5],
  ] as [Vec2, Vec2, number][]
).map(([a, b, w]) => [fromMap(a), fromMap(b), w / 363.5])

/** Main roads. United Nations Drive comes over the bridge from Bushrod
 *  Island and runs on as Haile Selassie Avenue past Capitol Hill. */
export const ROADS: Vec2[][] = (
  [
    [
      [442, 0],
      [420, 22],
      [398, 42],
      [386, 62],
      [372, 98],
      [354, 138],
      [336, 174],
      [328, 206],
      [330, 240],
      [336, 276],
      [342, 300],
      [378, 318],
      [392, 334],
      [390, 356],
      [396, 384],
      [410, 420],
      [424, 458],
      [430, 510],
      [432, 556],
      [440, 588],
      [462, 610],
      [500, 616],
      [560, 620],
      [622, 632],
      [690, 656],
      [727, 670],
    ],
    // Along the north shore to the bridge.
    [
      [140, 212],
      [220, 214],
      [290, 214],
      [328, 210],
    ],
    // Water Street and Benson Street.
    [
      [176, 250],
      [250, 262],
      [330, 285],
    ],
    [
      [190, 300],
      [300, 326],
      [378, 350],
    ],
    // Randall Street.
    [
      [236, 316],
      [224, 400],
    ],
    // Round Mamba Point.
    [
      [132, 214],
      [126, 260],
      [128, 330],
      [146, 368],
      [200, 392],
      [260, 402],
    ],
    // Down to Capitol Hill.
    [
      [300, 340],
      [340, 400],
      [372, 460],
      [392, 500],
    ],
  ] as Vec2[][]
).map((road) => road.map(fromMap))

/** Downtown, where the name sits on the map. */
export const CITY_CENTRE = fromMap([250, 312])

function inPolygon([x, y]: Vec2, poly: Vec2[]) {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

function segment([x, y]: Vec2, [ax, ay]: Vec2, [bx, by]: Vec2) {
  const pax = x - ax
  const pay = y - ay
  const bax = bx - ax
  const bay = by - ay
  const h = Math.max(0, Math.min(1, (pax * bax + pay * bay) / (bax * bax + bay * bay)))
  return Math.hypot(pax - bax * h, pay - bay * h)
}

/** Whether a point is on dry land. */
export function onLand(p: Vec2) {
  if (inPolygon(p, OCEAN) || inPolygon(p, ESTUARY)) return false
  return CHANNELS.every(([a, b, w]) => segment(p, a, b) > w)
}
