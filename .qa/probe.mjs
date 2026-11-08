// Dev-only: navigate, scroll to a selector, wait, then evaluate an async expression.
import { spawn } from "node:child_process"

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const PORT = 9341
const OUT = "C:/Users/lenovo/Documents/GitHub/huix-2099-Main-web/.qa"
const [, , url, scrollToSelector, waitArg, expression] = process.argv
const wait = Number(waitArg || 1500)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const chrome = spawn(
  CHROME,
  ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${PORT}`, `--user-data-dir=${OUT.replaceAll("/", "\\")}\\chrome-profile9`, "about:blank"],
  { stdio: "ignore" },
)

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
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) {
      const p = pending.get(m.id)
      pending.delete(m.id)
      m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result)
    }
    if (m.method === "Runtime.exceptionThrown") {
      const d = m.params.exceptionDetails
      console.log("EXCEPTION:", d.exception?.description || d.text, "|", d.url, "line", d.lineNumber)
    }
  }
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const mid = ++id
      pending.set(mid, { resolve, reject })
      ws.send(JSON.stringify({ id: mid, method, params }))
    })
  const ev = async (expression, awaitPromise = false) =>
    (
      await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise })
    ).result?.value

  await send("Page.enable")
  await send("Runtime.enable")
  await send("Page.navigate", { url })
  await sleep(Number(process.env.NEXT_WAIT || 6000))
  if (scrollToSelector) {
    await ev(`document.querySelector('${scrollToSelector}')?.scrollIntoView({block:'start'}); 1`)
    await sleep(wait)
  }
  console.log(JSON.stringify(await ev(`(() => { ${expression} })()`, true), null, 2))
} finally {
  try {
    ws?.close()
  } catch {}
  chrome.kill()
}
