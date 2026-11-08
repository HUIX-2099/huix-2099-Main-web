// Dev-only: screenshot one element (by CSS selector) with the cookie banner hidden.
import { spawn } from "node:child_process"
import { mkdirSync, writeFileSync, readFileSync } from "node:fs"

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9334
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"

const [, , url, widthArg, heightArg, selector, name, blockArg] = process.argv
const width = Number(widthArg || 390)
const height = Number(heightArg || 844)
const block = blockArg || "center"

mkdirSync(OUT, { recursive: true })
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${OUT.replaceAll("/", "\\")}\\chrome-profile2`,
    "about:blank",
  ],
  { stdio: "ignore" },
)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
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

  await send("Page.enable")
  await send("Runtime.enable")
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 })
  await send("Page.navigate", { url })
  await sleep(4000)
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true })
  await send("Runtime.evaluate", {
    expression: `document.querySelectorAll('[role="dialog"],[aria-label*="cookie" i]').forEach(n=>n.remove())`,
  })
  await sleep(400)
  const box = await send("Runtime.evaluate", {
    expression: `(() => { const n = document.querySelector(${JSON.stringify(selector)});
      if (!n) return null; n.scrollIntoView({block:${JSON.stringify(block)}}); const r = n.getBoundingClientRect();
      return JSON.stringify({x:r.x,y:r.y,w:r.width,h:r.height}); })()`,
    returnByValue: true,
  })
  await sleep(1500)
  if (!box.result.value) throw new Error("selector not found: " + selector)
  const { x, y, w, h } = JSON.parse(box.result.value)
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    clip: { x: Math.max(0, x - 8), y: Math.max(0, y - 8), width: w + 16, height: h + 16, scale: 1 },
    captureBeyondViewport: true,
  })
  const file = `${OUT}/${name || "element"}.png`
  writeFileSync(file, Buffer.from(shot.data, "base64"))
  console.log(`${file} ${Math.round(w)}x${Math.round(h)}`)
} finally {
  try {
    ws?.close()
  } catch {}
  chrome.kill()
}
