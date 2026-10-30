import fs from "node:fs"

const PORT = 9333
const BASE = process.env.BASE || "http://localhost:3001"
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" })
const target = await res.json()
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  ws.onopen = resolve
  ws.onerror = reject
})
let id = 0
const pending = new Map()
const events = []
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data)
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id)
    pending.delete(msg.id)
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
  } else if (msg.method) {
    events.push(msg)
  }
}
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const mid = ++id
    pending.set(mid, { resolve, reject })
    ws.send(JSON.stringify({ id: mid, method, params }))
  })

const evaluate = async (expression) => {
  const out = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })
  if (out.exceptionDetails) throw new Error(out.exceptionDetails.text)
  return out.result.value
}

const press = async (key, code, vk, modifiers = 0) => {
  await send("Input.dispatchKeyEvent", { type: "keyDown", key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, modifiers })
  await send("Input.dispatchKeyEvent", { type: "keyUp", key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, modifiers })
}

await send("Page.enable")
await send("Runtime.enable")
await send("Log.enable")
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
await send("Page.addScriptToEvaluateOnNewDocument", {
  source: `(() => { try { localStorage.setItem('theme','light'); localStorage.setItem('huix-cookie-consent','true'); sessionStorage.setItem('huix-booted','1'); document.documentElement.style.scrollBehavior='auto' } catch(e){} })()`,
})
await send("Page.navigate", { url: BASE + "/" })
await sleep(4000)

const state = () =>
  evaluate(`(() => {
    const header = document.querySelector('header')
    return {
      translate: header ? getComputedStyle(header).translate : null,
      headerTop: header?.getBoundingClientRect().top,
      palette: !!document.querySelector('[aria-label="Search HUIX-2099"]'),
      results: document.querySelectorAll('#command-results [role="option"]').length,
      activeText: document.querySelector('#command-results [data-active="true"] span span')?.innerText || null,
      bodyOverflow: getComputedStyle(document.body).overflow,
      htmlOverflow: getComputedStyle(document.documentElement).overflow,
      scrollY: window.scrollY,
      path: location.pathname,
    }
  })()`)

const checks = []
const check = (label, pass, detail) => checks.push({ label, pass, detail })

await evaluate("window.scrollTo(0, 1200)")
await sleep(700)
const heroBefore = await evaluate(
  `(() => { const r = document.querySelector('h1').getBoundingClientRect(); return { left: r.left, width: r.width } })()`
)
let s = await state()
check("header hides on scroll down", s.translate === "0px -100%" || s.headerTop < 0, s)

await press("k", "KeyK", 75, 2)
await sleep(600)
const heroLocked = await evaluate(
  `(() => { const r = document.querySelector('h1').getBoundingClientRect(); return { left: r.left, width: r.width } })()`
)
check("no layout shift when locking scroll", heroBefore.left === heroLocked.left && heroBefore.width === heroLocked.width, { heroBefore, heroLocked })
s = await state()
check("Ctrl+K reveals header", s.headerTop === 0 && s.translate === "0px", s)
check("Ctrl+K opens palette", s.palette === true, s)
check("palette locks body scroll", s.htmlOverflow === "hidden", s)

await press("Escape", "Escape", 27)
await sleep(500)
s = await state()
check("Escape closes palette", s.palette === false, s)
check("scroll lock released", s.htmlOverflow !== "hidden", s)

await evaluate("window.scrollTo(0, 900)")
await sleep(400)
await press("/", "Slash", 191)
await sleep(600)
s = await state()
check("slash opens palette", s.palette === true, s)

await evaluate(`(() => {
  const input = document.querySelector('[aria-label="Search pages"]')
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
  setter.call(input, "monrovia")
  input.dispatchEvent(new Event("input", { bubbles: true }))
})()`)
await sleep(450)
s = await state()
check("filter narrows results", s.results > 0 && s.results < 18, s)

const shot = await send("Page.captureScreenshot", { format: "png" })
fs.writeFileSync("/tmp/qa/n17-filter-monrovia.png", Buffer.from(shot.data, "base64"))

await press("ArrowDown", "ArrowDown", 40)
await sleep(200)
s = await state()
check("arrow key moves selection", s.activeText !== null, s)

await press("Enter", "Enter", 13)
await sleep(4200)
s = await state()
check("Enter navigates", s.path.startsWith("/products/monrovia-hustle"), s)
check("palette closes after navigation", s.palette === false, s)

const errs = events
  .filter((e) => e.method === "Runtime.exceptionThrown" || (e.method === "Log.entryAdded" && e.params.entry.level === "error"))
  .map((e) => e.params?.entry?.text || e.params?.exceptionDetails?.text)

console.log(JSON.stringify({ checks, errs: errs.slice(0, 6) }, null, 2))
await fetch(`http://127.0.0.1:${PORT}/json/close/${target.id}`)
ws.close()
