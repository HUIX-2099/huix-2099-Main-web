"use client"

import { useCallback, useEffect, useState } from "react"

const ENTRIES_KEY = "huixor-feedback-entries-v1"
const AUTHOR_KEY = "huixor-feedback-author-v1"

export type HuixorFeedbackEntry = {
  id: string
  authorId: string
  name: string
  email?: string
  text: string
  createdAt: string
  updatedAt?: string
}

function randomId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function readEntries(): HuixorFeedbackEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(ENTRIES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (x): x is HuixorFeedbackEntry =>
        typeof x === "object" &&
        x !== null &&
        typeof (x as HuixorFeedbackEntry).id === "string" &&
        typeof (x as HuixorFeedbackEntry).authorId === "string" &&
        typeof (x as HuixorFeedbackEntry).name === "string" &&
        typeof (x as HuixorFeedbackEntry).text === "string" &&
        typeof (x as HuixorFeedbackEntry).createdAt === "string"
    )
  } catch {
    return []
  }
}

function writeEntries(entries: HuixorFeedbackEntry[]) {
  localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries))
}

export function getOrCreateAuthorId(): string {
  if (typeof window === "undefined") return ""
  let id = localStorage.getItem(AUTHOR_KEY)
  if (!id) {
    id = randomId()
    localStorage.setItem(AUTHOR_KEY, id)
  }
  return id
}

export function useHuixorFeedback() {
  const [entries, setEntries] = useState<HuixorFeedbackEntry[]>([])
  const [authorId, setAuthorId] = useState("")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setAuthorId(getOrCreateAuthorId())
    setEntries(readEntries())
    setHydrated(true)
  }, [])

  const persist = useCallback((next: HuixorFeedbackEntry[]) => {
    writeEntries(next)
    setEntries(next)
  }, [])

  const mine = entries.filter((e) => e.authorId === authorId)

  const add = useCallback(
    (payload: { name: string; email?: string; text: string }) => {
      const aid = authorId || getOrCreateAuthorId()
      const row: HuixorFeedbackEntry = {
        id: randomId(),
        authorId: aid,
        name: payload.name.trim(),
        email: payload.email?.trim() || undefined,
        text: payload.text.trim(),
        createdAt: new Date().toISOString(),
      }
      persist([row, ...readEntries()])
    },
    [authorId, persist]
  )

  const update = useCallback(
    (id: string, payload: { name: string; email?: string; text: string }) => {
      const list = readEntries()
      const next = list.map((e) =>
        e.id === id && e.authorId === authorId
          ? {
              ...e,
              name: payload.name.trim(),
              email: payload.email?.trim() || undefined,
              text: payload.text.trim(),
              updatedAt: new Date().toISOString(),
            }
          : e
      )
      persist(next)
    },
    [authorId, persist]
  )

  const remove = useCallback(
    (id: string) => {
      const list = readEntries()
      persist(list.filter((e) => !(e.id === id && e.authorId === authorId)))
    },
    [authorId, persist]
  )

  return { entries, mine, hydrated, authorId, add, update, remove }
}
