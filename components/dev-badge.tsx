export function DevBadge({ text = "UNDER DEVELOPMENT" }) {
  return (
    <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900 rounded">
      {text}
    </span>
  )
}
