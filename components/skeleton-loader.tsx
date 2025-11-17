export function SkeletonLoader({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-lg ${className}`} />
}

export function SkeletonCard() {
  return (
    <div className="space-y-3 rounded-lg p-4">
      <SkeletonLoader className="h-40 w-full" />
      <SkeletonLoader className="h-4 w-3/4" />
      <SkeletonLoader className="h-4 w-1/2" />
    </div>
  )
}

export function SkeletonText() {
  return (
    <div className="space-y-2">
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-5/6" />
      <SkeletonLoader className="h-4 w-4/5" />
    </div>
  )
}
