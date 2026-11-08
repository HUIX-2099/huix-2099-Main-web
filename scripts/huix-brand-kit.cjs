/**
 * Builds the HUIX-2099 studio brand kit into public/logos/.
 *
 *   NODE_PATH=<folder with opentype.js> node scripts/huix-brand-kit.cjs
 *
 * Everything is drawn as outlined vector paths (Mohican glyphs turned into
 * SVG paths with opentype.js), then rasterised with sharp, so no browser or
 * installed font is needed. The barcode is the studio's own bar pattern,
 * measured from public/icons/HUIX 2099 dark logo icon version.jpg.
 */
const fs = require('node:fs');
const path = require('node:path');
const opentype = require('opentype.js');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public', 'logos');
const font = opentype.loadSync(path.join(root, 'public', 'font', 'Mohican.ttf'));

/* ---------------------------------------------------------------- colours */
const C = {
	ink: '#0D0D0D',      // backgrounds, dark type
	paper: '#F8F8F8',    // light backgrounds (site --background)
	white: '#FFFFFF',    // type on dark
	signal: '#B6B6B6',   // tagline on dark
	graphite: '#6B6B6B', // secondary type on light
};
const THEMES = {
	dark: { bg: C.ink, fg: C.white, sub: C.signal },
	light: { bg: C.paper, fg: C.ink, sub: C.graphite },
	white: { bg: null, fg: C.white, sub: C.white },
	black: { bg: null, fg: C.ink, sub: C.ink },
};

/* ------------------------------------------------------------------ type */
// Mohican, units = font units at size 1000. Cap height runs y -10..705.
const STROKE = 109;
const r = n => Math.round(n * 100) / 100;

// Lays out a string glyph by glyph; spaces advance, '·' becomes a dot.
function text(str, size, spacing, x = 0, baseline = 0) {
	const k = size / font.unitsPerEm;
	let d = '', cx = x, x1 = Infinity, x2 = -Infinity;
	for (const ch of str) {
		if (ch === ' ') { cx += 153 * k + spacing; continue; }
		if (ch === '·') {
			const rad = STROKE * k * 0.55, cy = baseline - 347 * k;
			d += `M${r(cx + rad)} ${r(cy)}a${r(rad)} ${r(rad)} 0 1 0 ${r(2 * rad)} 0a${r(rad)} ${r(rad)} 0 1 0 ${r(-2 * rad)} 0Z`;
			x1 = Math.min(x1, cx + rad); x2 = Math.max(x2, cx + 3 * rad);
			cx += 4 * rad + spacing; continue;
		}
		const g = font.charToGlyph(ch);
		const b = g.getBoundingBox();
		d += g.getPath(cx, baseline, size).toPathData(2);
		x1 = Math.min(x1, cx + b.x1 * k); x2 = Math.max(x2, cx + b.x2 * k);
		cx += g.advanceWidth * k + spacing;
	}
	return { d, x1, x2, w: x2 - x1 };
}

// Picks the letter spacing that makes `str` exactly `width` wide, starting at `left`.
function textFit(str, size, width, baseline, left = 0) {
	const a = text(str, size, 0), b = text(str, size, 1);
	const s = (width - a.w) / (b.w - a.w);
	const t = text(str, size, s, 0, baseline);
	return text(str, size, s, left - t.x1, baseline);
}

/* --------------------------------------------------------------- lockups */
// Each lockup: { w, h, draw(theme) -> svg markup in its own 0..w, 0..h box }.
const path_ = (d, fill) => `<path fill="${fill}" d="${d}"/>`;

function makeWordmark() {
	const LS = 100, CAP = 715, base = 705;
	let d = '', x = -15;
	for (const ch of 'HUIX') {
		const g = font.charToGlyph(ch);
		d += g.getPath(x, base, 1000).toPathData(2);
		x += g.advanceWidth + LS;
	}
	// Mohican has no hyphen; draw one in the face's own stroke weight.
	const hx = x - LS - 15 + 130, hw = 250;
	d += `M${hx} ${base - 347 - STROKE / 2}h${hw}v${STROKE}h${-hw}Z`;
	x = hx + hw + 130 - 15;
	let last = 0;
	for (const ch of '2099') {
		const g = font.charToGlyph(ch);
		d += g.getPath(x, base, 1000).toPathData(2);
		last = x + g.getBoundingBox().x2;
		x += g.advanceWidth + LS;
	}
	return { name: 'wordmark', w: r(last), h: CAP, d, draw: t => path_(d, t.fg) };
}

// Barcode over the wordmark, both the same width.
function makeStacked(word, code) {
	const k = word.w / code.w, ch = code.h * k, gap = word.h * 0.5;
	return {
		name: 'stacked', w: word.w, h: ch + gap + word.h,
		draw: t => `<g transform="scale(${+k.toFixed(5)})">${code.draw(t)}</g>`
			+ `<g transform="translate(0 ${r(ch + gap)})">${word.draw(t)}</g>`,
	};
}

// Barcode left, wordmark right, centred on the bars.
function makeHorizontal(word, code) {
	const ch = word.h * 2.4, k = ch / code.h, cw = code.w * k, gap = word.h * 0.85;
	return {
		name: 'horizontal', w: cw + gap + word.w, h: ch,
		draw: t => `<g transform="scale(${+k.toFixed(5)})">${code.draw(t)}</g>`
			+ `<g transform="translate(${r(cw + gap)} ${r((ch - word.h) / 2)})">${word.draw(t)}</g>`,
	};
}

// The barcode is the symbol. Small sizes use a slice of it around the centre
// guard bars, so each bar still lands on whole pixels.
const BAR_SLICES = { full: [0, 95], centre: [40, 58], core: [42, 53] };

function makeBarcode(slice = 'full', withText = true) {
	// x:width in pixels from the 2100px source; bars at 414, 443, 1030, 1058,
	// 1645 and 1674 are the long guard bars. 95 modules, like EAN-13.
	const RUNS = [[414,15],[443,13],[469,13],[496,52],[562,15],[616,27],[682,29],[723,13],[750,27],[817,14],[870,27],[911,14],[964,14],[989,30],[1030,14],[1058,14],[1084,42],[1152,14],[1178,14],[1206,39],[1272,39],[1338,14],[1366,26],[1419,27],[1460,14],[1486,41],[1554,11],[1608,13],[1645,15],[1674,13]];
	const GUARD = new Set([414, 443, 1030, 1058, 1645, 1674]);
	const MOD = (1687 - 414) / 95, M = 10;
	const BAR_H = 370, GUARD_H = 420, CAP = 30, size = CAP / 0.715 * 1;
	const [from, to] = BAR_SLICES[slice];
	// A slice keeps the bar widths but gets shorter bars, so it sits in a square.
	const hk = slice === 'full' ? 1 : (to - from) * M * 0.8 / GUARD_H;
	let bars = '';
	for (const [x, wpx] of RUNS) {
		const m = Math.round((x - 414) / MOD), w = Math.max(1, Math.round(wpx / MOD));
		if (m < from || m >= to) continue;
		bars += `M${(m - from) * M} 0h${w * M}v${r((GUARD.has(x) ? GUARD_H : BAR_H) * hk)}h${-w * M}Z`;
	}
	const numbers = !withText ? ''
		: textFit('HUIX 2099', size, 208, GUARD_H, 197).d + textFit('H2099', size, 107, GUARD_H, 643).d;
	return {
		name: 'barcode', w: (to - from) * M, h: r(GUARD_H * hk), bars, numbers,
		draw: (t, fill = t.fg) => path_(bars, fill) + (numbers && path_(numbers, fill)),
	};
}

const WORD = makeWordmark();
const CODE = makeBarcode();
const STACK = makeStacked(WORD, CODE);
const HORIZ = makeHorizontal(WORD, CODE);
const ICON_CODE = {
	text: CODE,
	bars: makeBarcode('full', false),
	centre: makeBarcode('centre', false),
	core: makeBarcode('core', false),
};

function makeTagline() {
	const size = 200;
	const t = text('MONROVIA · LIBERIA', size, 70, 0, 0);
	const capTop = -705 * size / 1000;
	return { w: t.w, h: 715 * size / 1000, draw: th => `<g transform="translate(${r(-t.x1)} ${r(-capTop)})">${path_(t.d, th.sub)}</g>` };
}
const TAG = makeTagline();

// Wordmark over the tagline, for banners.
const BANNER_GROUP = (() => {
	const gap = 330, w = WORD.w, h = WORD.h + gap + TAG.h;
	return {
		w, h,
		draw: t => WORD.draw(t) + `<g transform="translate(${r((w - TAG.w) / 2)} ${WORD.h + gap})">${TAG.draw(t)}</g>`,
	};
})();

/* ----------------------------------------------------------- svg helpers */
function place(lockup, cx, cy, maxW, maxH, theme, fill) {
	const k = Math.min(maxW / lockup.w, maxH / lockup.h);
	const x = cx - lockup.w * k / 2, y = cy - lockup.h * k / 2;
	return `<g transform="translate(${r(x)} ${r(y)}) scale(${+k.toFixed(5)})">${lockup.draw(theme, fill)}</g>`;
}

function svg(w, h, body, bg, rx = 0) {
	const back = bg ? `<rect width="${w}" height="${h}"${rx ? ` rx="${r(rx)}"` : ''} fill="${bg}"/>` : '';
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><title>HUIX-2099</title>${back}${body}</svg>\n`;
}

async function png(svgText, file, width, height) {
	fs.mkdirSync(path.dirname(file), { recursive: true });
	await sharp(Buffer.from(svgText), { density: 72 * Math.max(1, width / Number(svgText.match(/width="([\d.]+)"/)[1])) })
		.resize(width, height, { fit: 'fill' })
		.png({ compressionLevel: 9 })
		.toFile(file);
}

const files = []; // for the brand sheet
function note(group, file, meta) { files.push({ group, file: path.relative(out, file).replace(/\\/g, '/'), ...meta }); }

/* -------------------------------------------------------------- outputs */
async function logos() {
	const PAD = { wordmark: 0.45, barcode: 0.16, stacked: 0.12, horizontal: 0.3 };
	for (const L of [WORD, CODE, STACK, HORIZ]) {
		const p = PAD[L.name] * L.h;
		const w = Math.ceil(L.w + 2 * p), h = Math.ceil(L.h + 2 * p);
		for (const [tn, t] of Object.entries(THEMES)) {
			const s = svg(w, h, `<g transform="translate(${r(p)} ${r(p)})">${L.draw(t)}</g>`, t.bg);
			const base = `huix-2099-${L.name}-${tn}`;
			const svgFile = path.join(out, 'svg', base + '.svg');
			fs.mkdirSync(path.dirname(svgFile), { recursive: true });
			fs.writeFileSync(svgFile, s);
			note('logo', svgFile, { lockup: L.name, theme: tn, kind: 'svg', w, h });
			for (const [suffix, long] of [['1024', 1024], ['4k', 3840]]) {
				const k = long / Math.max(w, h);
				const f = path.join(out, 'png', `${base}-${suffix}.png`);
				await png(s, f, Math.round(w * k), Math.round(h * k));
				note('logo', f, { lockup: L.name, theme: tn, kind: 'png', w: Math.round(w * k), h: Math.round(h * k) });
			}
		}
	}
}

function iconSvg(n, theme, rounded) {
	const t = theme === 'dark' ? { bg: C.ink, fg: C.white } : { bg: C.paper, fg: C.ink };
	// Fewer, fatter bars as the icon shrinks, so it never turns to grey mush.
	const code = n <= 48 ? ICON_CODE.core : n <= 128 ? ICON_CODE.centre : n < 256 ? ICON_CODE.bars : ICON_CODE.text;
	const box = rounded ? (n <= 48 ? 0.7 : 0.66) : 0.52;
	let body = place(code, n / 2, n / 2, n * box, n * box * 0.8, t);
	if (code === ICON_CODE.core) {
		// Favicons: whole pixels per bar module, on a whole-pixel origin.
		const ppm = Math.floor(n * 0.72 / 11), k = ppm / 10;
		const x = Math.floor((n - 11 * ppm) / 2), y = Math.floor((n - Math.round(code.h * k)) / 2);
		body = `<g transform="translate(${x} ${y}) scale(${k})" shape-rendering="crispEdges">${code.draw(t)}</g>`;
	}
	return svg(n, n, body, t.bg, rounded ? n * 0.225 : 0);
}

async function icons() {
	const dir = path.join(out, 'icon');
	fs.mkdirSync(dir, { recursive: true });
	for (const theme of ['dark', 'light']) {
		const sv = path.join(dir, `huix-2099-app-icon-${theme}.svg`);
		fs.writeFileSync(sv, iconSvg(512, theme, true));
		note('icon', sv, { theme, kind: 'svg', w: 512, h: 512, label: 'rounded app icon' });
		for (const n of [16, 32, 48, 64, 128, 180, 192, 256, 512, 1024]) {
			const f = path.join(dir, `huix-2099-app-icon-${theme}-${n}.png`);
			await png(iconSvg(n, theme, true), f, n, n);
			note('icon', f, { theme, kind: 'png', w: n, h: n, label: 'rounded' });
		}
		// Full-bleed squares for iOS / Android maskable icons (the OS rounds them).
		for (const n of [180, 192, 512, 1024]) {
			const f = path.join(dir, `huix-2099-app-icon-${theme}-square-${n}.png`);
			await png(iconSvg(n, theme, false), f, n, n);
			note('icon', f, { theme, kind: 'png', w: n, h: n, label: 'full-bleed square' });
		}
		// favicon.ico with 16, 32 and 48 inside.
		const sizes = [16, 32, 48];
		const pngs = await Promise.all(sizes.map(n => sharp(Buffer.from(iconSvg(n, theme, true))).png().toBuffer()));
		const head = Buffer.alloc(6 + 16 * sizes.length);
		head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
		let off = head.length;
		sizes.forEach((n, i) => {
			const e = 6 + 16 * i;
			head.writeUInt8(n, e); head.writeUInt8(n, e + 1); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
			head.writeUInt32LE(pngs[i].length, e + 8); head.writeUInt32LE(off, e + 12); off += pngs[i].length;
		});
		const ico = path.join(dir, `favicon-${theme}.ico`);
		fs.writeFileSync(ico, Buffer.concat([head, ...pngs]));
		note('icon', ico, { theme, kind: 'ico', w: 48, h: 48, label: 'favicon 16/32/48' });
	}
}

async function social() {
	const dir = path.join(out, 'social');
	// Profile pictures get cropped to a circle, so size each lockup to the biggest box that still fits inside it.
	const inCircle = (L, d = 0.9) => { const a = L.w / L.h, fw = d / Math.sqrt(1 + 1 / (a * a)); return [fw, fw / a]; };
	const PROFILE = [['profile-barcode', CODE, ...inCircle(CODE)], ['profile-stacked', STACK, ...inCircle(STACK)]];
	const TIKTOK_PROFILE = [['tiktok-profile-barcode', CODE, ...inCircle(CODE, 0.94)], ['tiktok-profile-stacked', STACK, ...inCircle(STACK, 0.94)]];
	const BANNERS = [
		// name, w, h, safe width, safe height
		['x-header', 1500, 500, 1200, 360],
		['facebook-cover', 1640, 624, 1230, 480],
		['linkedin-banner', 1584, 396, 1150, 300],
		['youtube-banner', 2560, 1440, 1546, 423],
		['og-image', 1200, 630, 1000, 480],
	];
	for (const tn of ['dark', 'light']) {
		const t = THEMES[tn];
		for (const n of [1080, 2048]) for (const [name, L, fw, fh] of PROFILE) {
			const f = path.join(dir, `huix-2099-${name}-${tn}-${n}.png`);
			await png(svg(n, n, place(L, n / 2, n / 2, n * fw, n * fh, t), t.bg), f, n, n);
			note('social', f, { theme: tn, kind: 'png', w: n, h: n, label: name });
		}
		// TikTok shows the profile picture as a small circle, so it gets the tightest crop.
		for (const n of [200, 1080]) for (const [name, L, fw, fh] of TIKTOK_PROFILE) {
			const f = path.join(dir, `huix-2099-${name}-${tn}-${n}.png`);
			await png(svg(n, n, place(L, n / 2, n / 2, n * fw, n * fh, t), t.bg), f, n, n);
			note('social', f, { theme: tn, kind: 'png', w: n, h: n, label: name });
		}
		// 9:16 video cover; the logo stays clear of the caption and side buttons.
		for (const [style, L, fw] of [['barcode', CODE, 0.74], ['stacked', STACK, 0.7]]) {
			const f = path.join(dir, `huix-2099-tiktok-cover-${style}-${tn}.png`);
			await png(svg(1080, 1920, place(L, 480, 860, 1080 * fw, 900, t), t.bg), f, 1080, 1920);
			note('social', f, { theme: tn, kind: 'png', w: 1080, h: 1920, label: `tiktok-cover · ${style}` });
		}
		for (const [name, w, h, sw, sh] of BANNERS) {
			for (const [style, L, fw, fh] of [['wordmark', BANNER_GROUP, 0.62, 0.62], ['barcode', CODE, 0.56, 0.8], ['horizontal', HORIZ, 0.8, 0.6]]) {
				const f = path.join(dir, `huix-2099-${name}-${style}-${tn}.png`);
				await png(svg(w, h, place(L, w / 2, h / 2, sw * fw, sh * fh, t), t.bg), f, w, h);
				note('social', f, { theme: tn, kind: 'png', w, h, label: `${name} · ${style}` });
			}
		}
	}
}

async function wallpapers() {
	const dir = path.join(out, 'wallpaper');
	const W = 3840, H = 2160;
	for (const tn of ['dark', 'light']) {
		const t = THEMES[tn];
		for (const [style, L, fw, fh] of [['wordmark', BANNER_GROUP, 0.46, 0.3], ['barcode', CODE, 0.38, 0.45], ['stacked', STACK, 0.42, 0.5]]) {
			const f = path.join(dir, `huix-2099-wallpaper-4k-${style}-${tn}.png`);
			await png(svg(W, H, place(L, W / 2, H / 2, W * fw, H * fh, t), t.bg), f, W, H);
			note('wallpaper', f, { theme: tn, kind: 'png', w: W, h: H, label: `4K · ${style}` });
		}
	}
}

// Quiet backgrounds: plain Ink or Paper with a small barcode tucked in a corner,
// for slides, video, desktops and phones where other content sits on top.
async function backgrounds() {
	const dir = path.join(out, 'background');
	fs.mkdirSync(dir, { recursive: true });
	const SIZES = [['hd', 1920, 1080], ['qhd', 2560, 1440], ['4k', 3840, 2160], ['phone', 1290, 2796]];
	for (const tn of ['dark', 'light']) {
		const t = THEMES[tn];
		for (const [name, W, H] of SIZES) {
			const tall = H > W, bw = W * (tall ? 0.34 : 0.11), m = Math.min(W, H) * 0.05;
			const bh = bw * CODE.h / CODE.w;
			const cx = tall ? W / 2 : W - m - bw / 2, cy = H - m - bh / 2;
			const s = svg(W, H, place(CODE, cx, cy, bw, bh, t), t.bg);
			const base = `huix-2099-background-${name}-${tn}`;
			fs.writeFileSync(path.join(dir, base + '.svg'), s);
			const f = path.join(dir, base + '.png');
			await png(s, f, W, H);
			note('background', f, { theme: tn, kind: 'png', w: W, h: H, label: `background · ${name}` });
		}
	}
}

// The website's own copies: favicon SVG (follows the OS light/dark setting),
// legacy root icons, and the path data the React logo components draw.
async function siteAssets() {
	const code = ICON_CODE.core, ppm = 2, k = ppm / 10;
	const x = Math.floor((32 - 11 * ppm) / 2), y = Math.floor((32 - Math.round(code.h * k)) / 2);
	const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>HUIX-2099</title>`
		+ `<style>.bg{fill:${C.ink}}.fg path{fill:${C.white}}@media (prefers-color-scheme: light){.bg{fill:${C.paper}}.fg path{fill:${C.ink}}}</style>`
		+ `<rect class="bg" width="32" height="32" rx="7"/>`
		+ `<g class="fg" transform="translate(${x} ${y}) scale(${k})" shape-rendering="crispEdges">${code.draw(THEMES.dark)}</g></svg>\n`;
	fs.writeFileSync(path.join(out, 'icon', 'huix-2099-favicon.svg'), favicon);
	fs.writeFileSync(path.join(root, 'app', 'icon.svg'), favicon);
	fs.writeFileSync(path.join(root, 'public', 'icon.svg'), favicon);
	for (const [src, dst] of [['icon/huix-2099-app-icon-dark-square-180.png', 'apple-icon.png'], ['icon/huix-2099-app-icon-dark-32.png', 'icon-dark-32x32.png'], ['icon/huix-2099-app-icon-light-32.png', 'icon-light-32x32.png']])
		fs.copyFileSync(path.join(out, src), path.join(root, 'public', dst));

	const C_ = ICON_CODE.centre;
	const ts = `// Generated by scripts/huix-brand-kit.cjs from the Mohican font and the
// HUIX-2099 bar pattern. Re-run the script instead of editing by hand.

/** Full barcode: 95 modules, 10 units each. Guard bars run to the bottom. */
export const HUIX_BARCODE = {
  w: ${CODE.w},
  h: ${CODE.h},
  /** Bars stop here; the numbers sit below, level with the guard bars' ends. */
  barH: 370,
  bars: "${CODE.bars}",
  numbers: "${CODE.numbers}",
} as const

/** The bars around the centre guards, squared up for small sizes. */
export const HUIX_BARCODE_CENTRE = { w: ${C_.w}, h: ${C_.h}, bars: "${C_.bars}" } as const

/** HUIX-2099 in Mohican, with the drawn hyphen. */
export const HUIX_WORDMARK = { w: ${WORD.w}, h: ${WORD.h}, d: "${WORD.d}" } as const
`;
	fs.mkdirSync(path.join(root, 'components', 'brand'), { recursive: true });
	fs.writeFileSync(path.join(root, 'components', 'brand', 'huix-logo-paths.ts'), ts);
}

/* ----------------------------------------------------------- brand sheet */
function sheet() {
	const by = g => files.filter(f => f.group === g);
	const card = (src, cap, theme, href = src) => `<figure class="card ${theme === 'white' || theme === 'black' ? 'clear-' + theme : ''}">
      <a href="${href}" target="_blank"><img src="${src}" alt="${cap.replace(/<[^>]+>/g, '')}" loading="lazy"></a>
      <figcaption>${cap}</figcaption></figure>`;
	const logoCards = ['wordmark', 'barcode', 'stacked', 'horizontal'].map(l => `<h3>${l}</h3><div class="grid">${
		Object.keys(THEMES).map(tn => {
			const sv = `svg/huix-2099-${l}-${tn}.svg`;
			return card(sv, `${tn} · <a href="${sv}" download>SVG</a> · <a href="png/huix-2099-${l}-${tn}-1024.png" download>PNG 1024</a> · <a href="png/huix-2099-${l}-${tn}-4k.png" download>PNG 4K</a>`, tn, sv);
		}).join('')}</div>`).join('');
	const pngList = g => `<div class="grid wide">${by(g).filter(f => f.kind === 'png').map(f => card(f.file, `${f.label} · ${f.theme} · ${f.w}×${f.h}`, f.theme)).join('')}</div>`;
	const icons = by('icon').filter(f => f.kind === 'png' && [16, 32, 48, 180, 512].includes(f.w) && f.label === 'rounded')
		.map(f => `<figure class="ic"><img src="${f.file}" width="${Math.min(f.w, 128)}" height="${Math.min(f.w, 128)}" alt=""><figcaption>${f.theme} ${f.w}</figcaption></figure>`).join('');
	const iconFiles = by('icon').map(f => `<a href="${f.file}" download>${path.basename(f.file)}</a>`).join(' ');
	const swatch = (name, hex, use) => `<div class="sw"><span style="background:${hex}"></span><b>${name}</b><code>${hex}</code><small>${use}</small></div>`;
	return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>HUIX-2099 Brand Kit</title>
<link rel="icon" href="icon/huix-2099-app-icon-dark-32.png">
<style>
@font-face{font-family:Mohican;src:url(../font/Mohican.ttf) format('truetype')}
:root{--bg:${C.ink};--fg:#eee;--muted:#8a8a8a;--line:#262626;--card:#161616}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 Inter,system-ui,sans-serif}
main{max-width:1240px;margin:0 auto;padding:48px 16px 96px}
h1{font:400 clamp(40px,8vw,88px)/1 Mohican,sans-serif;letter-spacing:.12em;margin:0 0 12px}
h2{font:400 22px Mohican,sans-serif;letter-spacing:.2em;margin:64px 0 16px;padding-top:24px;border-top:1px solid var(--line)}
h3{font-size:13px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);margin:28px 0 10px}
p{color:var(--muted);max-width:70ch}a{color:inherit}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.grid.wide{grid-template-columns:repeat(auto-fill,minmax(340px,1fr))}
.card{margin:0;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.card img{display:block;width:100%;height:190px;object-fit:contain;background:#000}
.grid.wide .card img{height:auto;max-height:340px}
.card.clear-white img{background:repeating-conic-gradient(#333 0 25%,#222 0 50%) 0 0/20px 20px}
.card.clear-black img{background:repeating-conic-gradient(#ddd 0 25%,#fff 0 50%) 0 0/20px 20px}
figcaption{padding:8px 12px;font-size:12px;color:var(--muted)}
.sws{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}
.sw{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px;display:grid;gap:2px}
.sw span{height:72px;border-radius:6px;border:1px solid #333;margin-bottom:8px}.sw code{color:#ccc}.sw small{color:var(--muted)}
.type{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:24px}
.type .big{font:400 clamp(36px,7vw,72px)/1.1 Mohican;letter-spacing:.12em}
.ic img{outline:1px solid #333;border-radius:22.5%}.icons{display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end}.ic{margin:0;text-align:center}
.files{font-size:12px;color:var(--muted);word-break:break-all}.files a{margin-right:10px}
</style></head><body><main>
<h1>HUIX-2099</h1>
<p>Studio brand kit · Monrovia, Liberia. Every logo is drawn from outlined vector paths, so the SVGs open anywhere without the font installed. Click any image to open it full size.</p>

<h2>Colours</h2>
<div class="sws">
${swatch('Ink', C.ink, 'Backgrounds, type on light')}
${swatch('White', C.white, 'Type and bars on dark')}
${swatch('Paper', C.paper, 'Light backgrounds')}
${swatch('Signal grey', C.signal, 'Tagline on dark')}
${swatch('Graphite', C.graphite, 'Tagline on light')}
</div>

<h2>Type</h2>
<div class="type"><div class="big">HUIX-2099</div>
<p><b>Mohican</b> — rounded, all-caps display face used for the wordmark, barcode numbers and taglines (<a href="../font/Mohican.ttf" download>Mohican.ttf</a>). Mohican has no hyphen glyph: the wordmark's dash is drawn at the font's stroke weight. Body copy on the site uses <b>Inter</b>.</p></div>

<h2>Logos</h2>
<p>Four lockups × four colourways: <b>dark</b> (white on Ink), <b>light</b> (Ink on Paper), <b>white</b> and <b>black</b> on transparent. Each comes as SVG, PNG 1024 and PNG 4K (3840 px long edge).</p>
${logoCards}

<h2>App icon &amp; favicon</h2>
<div class="icons">${icons}</div>
<p class="files">${iconFiles}</p>

<h2>Social</h2>
<p>Profile squares (1080, 2048), X header, Facebook cover, LinkedIn banner, YouTube banner (art stays inside the 1546×423 safe area) and Open Graph image.</p>
${pngList('social')}

<h2>4K wallpapers</h2>
${pngList('wallpaper')}

<h2>Backgrounds</h2>
<p>Plain Ink or Paper with a small barcode in the corner, for slides, video and screens where other content sits on top. HD, QHD, 4K and phone, as PNG and SVG.</p>
${pngList('background')}
</main></body></html>
`;
}

(async () => {
	fs.mkdirSync(out, { recursive: true });
	for (const e of fs.readdirSync(out)) fs.rmSync(path.join(out, e), { recursive: true, force: true });
	await logos();
	await icons();
	await social();
	await wallpapers();
	await backgrounds();
	await siteAssets();
	fs.writeFileSync(path.join(out, 'index.html'), sheet());
	fs.writeFileSync(path.join(out, 'README.txt'), `HUIX-2099 brand kit
Open index.html for the brand sheet (on the site: /logos/index.html).

svg/         logos as vector files: wordmark, barcode, stacked, horizontal
             in dark, light, white (transparent) and black (transparent)
png/         the same logos as PNG, 1024 px and 4K (3840 px)
icon/        app icons 16-1024 px, full-bleed squares, favicon .ico files
social/      profile pictures (circle-safe), TikTok profile + 9:16 cover, X / Facebook / LinkedIn / YouTube banners, OG image
wallpaper/   4K wallpapers (3840x2160)
background/  plain backgrounds with a small corner barcode, HD / QHD / 4K / phone

Colours: Ink ${C.ink}  White ${C.white}  Paper ${C.paper}  Signal grey ${C.signal}  Graphite ${C.graphite}
Font: Mohican (public/font/Mohican.ttf)
`);
	console.log(`${files.length} files -> ${out}`);
})();
