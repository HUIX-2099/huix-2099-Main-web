// Dev-only: run an arbitrary expression in the page and print the result.
import { spawn } from "node:child_process"

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9337
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"

const [, , url, expression] = process.argv
const chrome = spawn(
  CHROME,
  ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${PORT}`, `--user-data-dir=${OUT.replaceAll("/", "\\")}\\chrome-profile5`, "about:blank"],
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
  const ev = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true }))

  await send("Page.enable")
  await send("Runtime.enable")
  await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
  await send("Page.navigate", { url })
  await sleep(4500)
  await ev("document.fonts.ready.then(()=>1)")
  const r = await ev(`(() => { ${expression} })()`)
  console.log(JSON.stringify(r.result?.value ?? r, null, 2))
  const errs = await send("Log.enable")
  void errs
} finally {
  try {
    ws?.close()
  } catch {}
  chrome.kill()
}
