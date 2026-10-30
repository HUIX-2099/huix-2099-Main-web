// Dev-only visual QA: full-page screenshots through the Chrome DevTools Protocol.
import { spawn } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9333
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"

const [, , url, widthArg, heightArg, name, schemeArg] = process.argv
const width = Number(widthArg || 1440)
const height = Number(heightArg || 900)
const scheme = schemeArg === "dark" ? "dark" : "light"

mkdirSync(OUT, { recursive: true })

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${OUT.replaceAll("/", "\\")}\\chrome-profile`,
  "about:blank",
], { stdio: "ignore" })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

let ws
try {
  // Wait for the CDP endpoint.
  let targets
  for (let i = 0; i < 60; i++) {
    try {
      targets = await (await fetch(`http://localhost:${PORT}/json/list`)).json()
      if (targets.length) break
    } catch {}
    await sleep(250)
  }
  const page = targets.find((t) => t.type === "page")
  ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.onopen = resolve
    ws.onerror = reject
  })

  let id = 0
  const pending = new Map()
  const events = new Map()
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
    } else if (msg.method && events.has(msg.method)) {
      for (const fn of events.get(msg.method)) fn(msg.params)
      events.delete(msg.method)
    }
  }
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const mid = ++id
      pending.set(mid, { resolve, reject })
      ws.send(JSON.stringify({ id: mid, method, params }))
    })
  const once = (method) =>
    new Promise((resolve) => {
      const set = events.get(method) || new Set()
      set.add(resolve)
      events.set(method, set)
    })

  await send("Page.enable")
  await send("Runtime.enable")
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: scheme }],
  })
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  })

  const loaded = once("Page.loadEventFired")
  await send("Page.navigate", { url })
  await loaded
  await sleep(1200)
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true })
  // Walk the page so lazy-loaded images decode before the full-page capture.
  await send("Runtime.evaluate", {
    expression: `(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 400));
    })()`,
    awaitPromise: true,
  })
  await sleep(600)

  const metrics = await send("Page.getLayoutMetrics")
  const content = metrics.cssContentSize || metrics.contentSize
  const fullHeight = Math.min(Math.ceil(content.height), 9000)

  const shot = await send("Page.captureScreenshot", {
    format: "jpeg",
    quality: 82,
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height: fullHeight, scale: 1 },
  })
  const file = `${OUT}/${name || "shot"}.jpg`
  writeFileSync(file, Buffer.from(shot.data, "base64"))
  console.log(`${file} ${width}x${fullHeight}`)
} finally {
  try { ws?.close() } catch {}
  chrome.kill()
}
