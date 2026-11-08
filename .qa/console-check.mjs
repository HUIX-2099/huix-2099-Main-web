import { spawn } from "node:child_process"
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9338
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"
const url = process.argv[2] || "http://localhost:3001/products/monrovia-hustle"
const chrome = spawn(CHROME, ["--headless=new","--disable-gpu",`--remote-debugging-port=${PORT}`,`--user-data-dir=${OUT.replaceAll("/","\\")}\chrome-profile6`,"about:blank"], { stdio: "ignore" })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const msgs = []
let ws
try {
  let targets
  for (let i = 0; i < 60; i++) { try { targets = await (await fetch(`http://localhost:${PORT}/json/list`)).json(); if (targets.length) break } catch {} await sleep(250) }
  ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl)
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej })
  let id = 0
  const pending = new Map()
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result) }
    if (m.method === "Log.entryAdded" && ["error","warning"].includes(m.params.entry.level)) msgs.push(`${m.params.entry.level}: ${m.params.entry.text}`)
    if (m.method === "Runtime.exceptionThrown") msgs.push(`exception: ${m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text}`)
  }
  const send = (method, params = {}) => new Promise((resolve, reject) => { const mid = ++id; pending.set(mid, { resolve, reject }); ws.send(JSON.stringify({ id: mid, method, params })) })
  await send("Page.enable"); await send("Runtime.enable"); await send("Log.enable")
  await send("Page.navigate", { url })
  await sleep(6000)
  await send("Runtime.evaluate", { expression: "scrollTo(0, document.querySelector('.mh-loop').offsetTop + 1200); 1" })
  await sleep(3000)
} finally {
  try { ws?.close() } catch {}
  chrome.kill()
}
console.log(msgs.length ? msgs.join("\n") : "no console errors")
