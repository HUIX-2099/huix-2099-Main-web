"use client"

import { useState } from "react"
import { useHuixorFeedback } from "@/hooks/use-huixor-feedback"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Trash2, Send } from "lucide-react"

const mono = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

export function HuixorFeedbackPanel({ accent }: { accent: string }) {
  const { mine, hydrated, add, update, remove } = useHuixorFeedback()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [alsoEmail, setAlsoEmail] = useState(false)
  const [sending, setSending] = useState(false)
  const [formMsg, setFormMsg] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editText, setEditText] = useState("")

  async function submitNew(e: React.FormEvent) {
    e.preventDefault()
    setFormMsg(null)
    if (!name.trim() || !text.trim()) {
      setFormMsg("Name and feedback are required.")
      return
    }
    if (alsoEmail && !email.trim()) {
      setFormMsg("Add an email to send a copy to HUIX, or turn off “Email HUIX”.")
      return
    }

    add({ name, email: email.trim() || undefined, text })

    if (alsoEmail && email.trim()) {
      setSending(true)
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            subject: "Huixor beta feedback (from product page)",
            message: text.trim(),
          }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          setFormMsg(typeof data.error === "string" ? data.error : "Could not email HUIX; your note is still saved here.")
        } else {
          setFormMsg("Saved on this device and emailed to HUIX.")
        }
      } catch {
        setFormMsg("Saved on this device; email failed — try again later.")
      } finally {
        setSending(false)
      }
    } else {
      setFormMsg("Saved on this browser. Only you can edit or delete it here.")
    }

    setText("")
  }

  function startEdit(row: (typeof mine)[0]) {
    setEditingId(row.id)
    setEditName(row.name)
    setEditEmail(row.email ?? "")
    setEditText(row.text)
  }

  function saveEdit() {
    if (!editingId || !editName.trim() || !editText.trim()) return
    update(editingId, { name: editName, email: editEmail, text: editText })
    setEditingId(null)
  }

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Notes are stored as <strong className="text-foreground">JSON in your browser</strong> (localStorage). Clearing site
        data or another device won&apos;t see them — but you can fix typos or delete only your own entries. Optionally send a
        copy to HUIX (requires email — uses the same secure form as Contact).
      </p>

      {!hydrated ? (
        <p className="text-sm text-muted-foreground" style={{ fontFamily: mono }}>
          Loading…
        </p>
      ) : (
        <>
          <form onSubmit={submitNew} className="space-y-4 rounded-lg border border-border bg-card/30 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: mono }}>
                  Name *
                </label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-background" />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: mono }}>
                  Email (optional)
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-background"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] uppercase tracking-[0.12em] text-muted-foreground" style={{ fontFamily: mono }}>
                Feedback *
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Bugs, ideas, device presets you want…"
                rows={4}
                className="resize-y bg-background"
              />
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" checked={alsoEmail} onChange={(e) => setAlsoEmail(e.target.checked)} className="rounded border-border" />
              Email a copy to HUIX (needs email above)
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" disabled={sending} className="gap-2" style={{ fontFamily: mono }}>
                <Send className="h-4 w-4" />
                {sending ? "Sending…" : "Save feedback"}
              </Button>
              {formMsg && (
                <span className="text-sm text-muted-foreground" style={{ borderLeft: `2px solid ${accent}`, paddingLeft: "0.75rem" }}>
                  {formMsg}
                </span>
              )}
            </div>
          </form>

          {mine.length > 0 && (
            <div>
              <h3 className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: mono }}>
                Your entries ({mine.length})
              </h3>
              <ul className="space-y-4">
                {mine.map((row) => (
                  <li key={row.id} className="rounded-lg border border-border bg-card/20 p-4">
                    {editingId === row.id ? (
                      <div className="space-y-3">
                        <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="bg-background" />
                        <Input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" className="bg-background" />
                        <Textarea value={editText} onChange={(e) => setEditText(e.target.value)} rows={3} className="bg-background" />
                        <div className="flex gap-2">
                          <Button type="button" size="sm" onClick={saveEdit} style={{ fontFamily: mono }}>
                            Save
                          </Button>
                          <Button type="button" size="sm" variant="outline" onClick={() => setEditingId(null)} style={{ fontFamily: mono }}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <span className="font-medium text-foreground">{row.name}</span>
                            {row.email && (
                              <span className="ml-2 text-xs text-muted-foreground" style={{ fontFamily: mono }}>
                                {row.email}
                              </span>
                            )}
                            <p className="mt-1 text-sm text-muted-foreground whitespace-pre-wrap">{row.text}</p>
                            <p className="mt-2 text-[9px] uppercase tracking-[0.1em] text-muted-foreground/60" style={{ fontFamily: mono }}>
                              {new Date(row.createdAt).toLocaleString()}
                              {row.updatedAt && ` · edited ${new Date(row.updatedAt).toLocaleString()}`}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                              aria-label="Edit"
                              onClick={() => startEdit(row)}
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              aria-label="Delete"
                              onClick={() => remove(row.id)}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}
