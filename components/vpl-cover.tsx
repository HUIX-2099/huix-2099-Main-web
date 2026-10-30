/**
 * Cover art for Virtual Past Liberia cards. The programme's field photography is
 * reserved for its own page, so listings use this typographic cover instead.
 */
export function VplWordmarkCover({ size = "lg" }: { size?: "sm" | "lg" }) {
  const small = size === "sm"
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white transition-transform duration-700 ease-out group-hover:scale-[1.03]">
      <span
        className={`text-center font-normal uppercase leading-[0.9] tracking-[0.02em] ${
          small ? "text-[clamp(1.5rem,6vw,2.4rem)]" : "text-[clamp(2rem,7vw,3.5rem)]"
        }`}
        style={{ fontFamily: '"Gogono", "Arial Black", sans-serif' }}
      >
        Virtual
        <br />
        Past Liberia
      </span>
      <span
        className={`mt-3 font-medium uppercase tracking-[0.2em] text-white/40 ${
          small ? "text-[8px]" : "text-[9px]"
        }`}
      >
        Heritage · Monrovia
      </span>
    </div>
  )
}

export function VplCover({ size = "lg" }: { size?: "sm" | "lg" }) {
  const small = size === "sm"

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b0b0b] text-white transition-transform duration-700 ease-out group-hover:scale-[1.03]">
      <span
        aria-hidden
        className={`pointer-events-none absolute select-none font-semibold leading-none tracking-[-0.07em] text-white/[0.06] ${
          small ? "-right-1 top-1 text-[4.5rem]" : "-right-3 top-4 text-[9rem] sm:text-[10.5rem]"
        }`}
      >
        VPL
      </span>

      {!small && (
        <span className="absolute left-5 top-5 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 sm:left-6 sm:top-6">
          Archive · L-231
        </span>
      )}

      <div className={`absolute inset-x-0 bottom-0 ${small ? "p-4" : "p-5 sm:p-6"}`}>
        <span className="block h-px w-8 bg-red-500" aria-hidden />
        <p
          className={`mt-3 font-semibold leading-[1.02] tracking-[-0.035em] ${
            small ? "text-[17px]" : "text-[clamp(1.35rem,2.2vw,1.8rem)]"
          }`}
        >
          The past,
          <br />
          rebuilt in 3D.
        </p>
        <p
          className={`mt-2.5 font-medium uppercase tracking-[0.18em] text-white/40 ${
            small ? "text-[8px]" : "text-[9px]"
          }`}
        >
          Heritage · Monrovia
        </p>
      </div>
    </div>
  )
}
