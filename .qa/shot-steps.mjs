// Dev-only: capture the viewport at each scroll step of a tall section, plus its computed state.
import { spawn } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9336
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"

const [, , url, widthArg, heightArg, selector, nameArg, stepsArg, schemeArg] = process.argv
const width = Number(widthArg || 1440)
const height = Number(heightArg || 900)
const steps = Number(stepsArg || 4)
const name = nameArg || "steps"

mkdirSync(OUT, { recursive: true })
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${OUT.replaceAll("/", "\\")}\\chrome-profile4`,
    "about:blank",
  ],
  { stdio: "ignore" },
)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
// The site's cookie panel and the Next dev indicator are not part of what we are checking.
const HIDE_BANNER = `(() => {
  const junk = [...document.querySelectorAll("body *")].filter((n) => {
    const s = getComputedStyle(n);
    return s.position === "fixed" && /cookie settings/i.test(n.textContent || "");
  });
  junk.forEach((n) => n.remove());
  document.querySelectorAll('[id*="nextjs-devtools"], [data-nextjs-dev-overlay]').forEach((n) => n.remove());
  return 1;
})()`
let ws
try {
  let targets
  for (let i = 0; i < 60; i++) {
    try {
      targets = await (await fetch(`http://localhost:${PORT}/json/list`)).json()
      if (targets.length) break
    } catch {}
    await sleep(250)
  }
  ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl)
  await new Promise((res, rej) => {
    ws.onopen = res
    ws.onerror = rej
  })
  let id = 0
  const pending = new Map()
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
    }
  }
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const mid = ++id
      pending.set(mid, { resolve, reject })
      ws.send(JSON.stringify({ id: mid, method, params }))
    })
  const ev = async (expression) =>
    (await send("Runtime.evaluate", { expression, returnByValue: true })).result?.value

  await send("Page.enable")
  await send("Runtime.enable")
  if (schemeArg) {
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-color-scheme", value: schemeArg }],
    })
  }
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 })
  await send("Page.navigate", { url })
  await sleep(4500)
  await ev("document.fonts.ready.then(()=>1)")
  // Dev CSS arrives in its own chunk: wait until the section is actually styled.
  for (let i = 0; i < 40; i++) {
    const ready = await ev(`(() => { const n = document.querySelector(${JSON.stringify(selector)});
      if (!n) return false; const w = n.querySelector(".mh-loop__wash"); return !!document.documentElement.style.getPropertyValue("--mh-mood-strength") && !!w && getComputedStyle(w).position === "absolute"
        && getComputedStyle(n.querySelector(".mh-loop__wash")).position === "absolute"; })()`)
    if (ready) break
    await sleep(500)
  }
  ev(HIDE_BANNER)
  await sleep(300)

  const meta = await ev(`(() => { const n = document.querySelector(${JSON.stringify(selector)});
    if (!n) return null; const r = n.getBoundingClientRect();
    return JSON.stringify({ top: r.top + scrollY, h: r.height, vh: innerHeight }); })()`)
  if (!meta) throw new Error("selector not found: " + selector)
  const { top, h, vh } = JSON.parse(meta)
  console.log(`section ${selector}: height ${Math.round(h)}px, viewport ${vh}px`)

  for (let i = 0; i < steps; i++) {
    const y = top + (h / steps) * (i + 0.5) - vh / 2
    await ev(`scrollTo(0, ${y.toFixed(1)}); 1`)
    await sleep(900)
    await ev(HIDE_BANNER + "; 1")
    await sleep(300)
    const state = await ev(`(() => { const s = document.querySelector(${JSON.stringify(selector)});
      const wash = getComputedStyle(s.querySelector(".mh-loop__wash") || s).backgroundColor;
      const on = [...s.querySelectorAll(".mh-loop__step")].findIndex(n => n.dataset.on === "true");
      const p = s.querySelector(".mh-loop__mark")?.style.getPropertyValue("--mh-p");
      return JSON.stringify({ wash, on, p }); })()`)
    console.log(`step ${i + 1}: active card ${state}`)
    const shot = await send("Page.captureScreenshot", { format: "png" })
    const file = `${OUT}/${name}-${i + 1}.png`
    writeFileSync(file, Buffer.from(shot.data, "base64"))
  }
} finally {
  try {
    ws?.close()
  } catch {}
  chrome.kill()
}
