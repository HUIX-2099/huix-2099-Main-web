import fs from "node:fs"

const PORT = 9333
const BASE = process.env.BASE || "http://localhost:3001"
const OUT = process.env.OUT || "/tmp/qa"
fs.mkdirSync(OUT, { recursive: true })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function newPage(url) {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  })
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
  return { ws, send, events, target }
}

async function evaluate(client, expression, awaitPromise = true) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise,
    returnByValue: true,
  })
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text + " :: " + expression.slice(0, 80))
  }
  return result.result?.value
}

async function capture(client, path, fullPage = false) {
  const params = { format: "png" }
  if (fullPage) {
    const size = await evaluate(
      client,
      `({ width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight })`
    )
    params.captureBeyondViewport = true
    params.clip = { x: 0, y: 0, width: size.width, height: size.height, scale: 1 }
  }
  const shot = await client.send("Page.captureScreenshot", params)
  fs.writeFileSync(path, Buffer.from(shot.data, "base64"))
}

async function waitReady(client) {
  for (let i = 0; i < 80; i++) {
    const state = await evaluate(
      client,
      `(() => {
        const loader = document.querySelector('[aria-label="Loading HUIX-2099"]')
        return {
          ready: document.readyState,
          loader: !!loader && getComputedStyle(loader).display !== "none" && !loader.hasAttribute("hidden"),
          h1: document.querySelector("h1")?.innerText?.slice(0, 40) || "",
          scrollY: window.scrollY,
          width: document.documentElement.scrollWidth,
          viewport: window.innerWidth,
        }
      })()`
    ).catch(() => null)
    if (state && state.ready === "complete" && !state.loader) return state
    await sleep(250)
  }
  return null
}

async function press(client, key, code, vk, modifiers = 0) {
  await client.send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key,
    code,
    windowsVirtualKeyCode: vk,
    nativeVirtualKeyCode: vk,
    modifiers,
  })
  await client.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key,
    code,
    windowsVirtualKeyCode: vk,
    nativeVirtualKeyCode: vk,
    modifiers,
  })
}

async function run(name, width, height, theme, {
  menu = false,
  more = false,
  bottom = false,
  url = "/virtual-past-liberia",
  fullPage = false,
  search = false,
  hotkey = null,
  type = null,
  arrowDown = 0,
  scroll = null,
  reveal = false,
} = {}) {
  const client = await newPage("about:blank")
  const { send, events } = client
  await send("Page.enable")
  await send("Runtime.enable")
  await send("Log.enable")
  await send("Network.enable")
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  })
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: theme }],
  })
  await send("Page.addScriptToEvaluateOnNewDocument", {
    source: `(() => {
      try {
        localStorage.setItem('theme', '${theme}')
        localStorage.setItem('huix-cookie-consent', 'true')
        sessionStorage.setItem('huix-booted', '1')
        document.documentElement.style.scrollBehavior = 'auto'
      } catch (e) {}
    })()`,
  })
  await send("Page.navigate", { url: BASE + url })
  const state = await waitReady(client)
  await sleep(500)
  await evaluate(client, `window.scrollTo(0, 0)`)
  await sleep(200)

  if (scroll !== null) {
    await evaluate(client, `window.scrollTo(0, ${scroll})`)
    await sleep(700)
  }

  if (reveal) {
    await evaluate(client, `window.scrollTo(0, 1400)`)
    await sleep(450)
    await evaluate(client, `window.scrollTo(0, 900)`)
    await sleep(600)
  }

  if (menu) {
    const clicked = await evaluate(
      client,
      `(() => { const b = document.querySelector('button[aria-controls="site-menu"]'); if (!b) return false; b.click(); return true })()`
    )
    await sleep(500)
    if (!clicked) throw new Error("menu button not found")
  }

  if (more) {
    const clicked = await evaluate(
      client,
      `(() => { const b = [...document.querySelectorAll('nav[aria-label="Primary"] button')].find(el => el.textContent.trim().startsWith('More')); if (!b) return false; b.click(); return true })()`
    )
    await sleep(450)
    if (!clicked) throw new Error("more button not found")
  }

  if (bottom) {
    await evaluate(client, `window.scrollTo(0, document.documentElement.scrollHeight)`)
    await sleep(800)
  }

  if (search) {
    const clicked = await evaluate(
      client,
      `(() => { const b = document.querySelector('button[aria-label="Search the site"]'); if (!b) return false; b.click(); return true })()`
    )
    await sleep(550)
    if (!clicked) throw new Error("search trigger not found")
  }

  if (hotkey === "mod+k") {
    await press(client, "k", "KeyK", 75, 2)
    await sleep(550)
  }

  if (type !== null) {
    await evaluate(
      client,
      `(() => {
        const input = document.querySelector('[aria-label="Search pages"]')
        if (!input) return false
        input.focus()
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
        setter.call(input, ${JSON.stringify(type)})
        input.dispatchEvent(new Event("input", { bubbles: true }))
        return true
      })()`
    )
    await sleep(450)
  }

  for (let i = 0; i < arrowDown; i++) {
    await press(client, "ArrowDown", "ArrowDown", 40)
    await sleep(120)
  }
  if (arrowDown) await sleep(300)

  const info = await evaluate(
    client,
    `(() => {
      const header = document.querySelector("header")
      const box = header?.getBoundingClientRect()
      const sheet = document.querySelector("#site-menu")
      const navLinks = [...document.querySelectorAll('nav[aria-label="Primary"] a')].map(a => a.innerText)
      const bodyOverflow = getComputedStyle(document.body).overflow
      const results = [...document.querySelectorAll('#command-results [role="option"]')]
      const bar = header?.querySelector('span[style*="scaleX"]')
      return {
        headerHeight: box?.height,
        headerTop: box?.top,
        headerTranslate: header ? getComputedStyle(header).translate : null,
        progress: bar ? bar.style.transform : null,
        position: header ? getComputedStyle(header).position : null,
        navLinks,
        sheet: sheet ? { top: sheet.getBoundingClientRect().top, height: sheet.getBoundingClientRect().height } : null,
        bodyOverflow,
        palette: results.length
          ? {
              count: results.length,
              active: results.findIndex(r => r.getAttribute("data-active") === "true"),
              labels: results.map(r => r.querySelector("span span")?.innerText || r.innerText),
            }
          : null,
        overflowX: document.documentElement.scrollWidth - window.innerWidth,
        docHeight: document.documentElement.scrollHeight,
        h1: document.querySelector("h1")?.innerText?.slice(0, 50) || "",
      }
    })()`
  )

  const file = `${OUT}/${name}.png`
  await capture(client, file)
  if (fullPage) {
    await evaluate(client, `window.scrollTo(0, document.body.scrollHeight)`)
    await sleep(700)
    await evaluate(client, `window.scrollTo(0, 0)`)
    await sleep(300)
    await capture(client, `${OUT}/${name}-full.png`, true)
  }
  const errs = events
    .filter((e) => e.method === "Runtime.exceptionThrown" || (e.method === "Log.entryAdded" && e.params.entry.level === "error"))
    .map((e) => e.params?.entry?.text || e.params?.exceptionDetails?.text)
    .slice(0, 5)
  await fetch(`http://127.0.0.1:${PORT}/json/close/${client.target.id}`)
  client.ws.close()
  return { name, width, theme, file, state, info, errs }
}

const jobs = process.env.JOBS
  ? JSON.parse(process.env.JOBS)
  : [
      ["home-1440-light", 1440, 960, "light", { url: "/", fullPage: true }],
      ["home-1440-dark", 1440, 960, "dark", { url: "/", fullPage: true }],
      ["home-390-light", 390, 844, "light", { url: "/", fullPage: true }],
      ["home-390-menu", 390, 844, "light", { url: "/", menu: true }],
      ["vpl-1440-light", 1440, 960, "light", { url: "/virtual-past-liberia", fullPage: true }],
    ]

const results = []
for (const [name, w, h, theme, opts] of jobs) {
  try {
    results.push(await run(name, w, h, theme, opts))
  } catch (error) {
    results.push({ name, error: String(error) })
  }
}
console.log(JSON.stringify(results, null, 2))
