import type { ComponentType, ReactNode } from "react";

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

export interface IndexMonitorStat {
  value: string;
  label: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
}

function HexWireframe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <polygon points="60,10 100,32 100,76 60,98 20,76 20,32" />
      <polygon points="140,10 180,32 180,76 140,98 100,76 100,32" />
      <polygon points="100,76 140,98 140,142 100,164 60,142 60,98" />
      <polygon points="180,76 220,98 220,142 180,164 140,142 140,98" />
      <circle cx="60" cy="54" r="22" />
      <circle cx="140" cy="54" r="22" />
      <circle cx="180" cy="120" r="22" />
      <line x1="60" y1="54" x2="140" y2="54" />
      <line x1="100" y1="32" x2="180" y2="120" />
    </svg>
  );
}

/** D350-style "data monitor" panel. Theme-aware: light casing in light mode, dark casing in dark mode. */
export function IndexMonitor({
  heading,
  stats,
  bigValue,
  bigCaption,
  description,
  action,
  interactive = false,
}: {
  heading: ReactNode;
  stats: IndexMonitorStat[];
  bigValue: string;
  bigCaption: ReactNode;
  description: ReactNode;
  action?: ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[28px] border-[6px] border-neutral-300 bg-neutral-200 p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${
        interactive ? "transition-transform duration-500 group-hover:-translate-y-1" : ""
      }`}
    >
      {["left-[18%]", "left-1/2", "right-[18%]"].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute -top-[6px] ${pos} h-1.5 w-10 -translate-x-1/2 rounded-sm bg-neutral-400 dark:bg-neutral-700`}
        />
      ))}

      <div className="relative overflow-hidden rounded-[20px] border border-neutral-300 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.045)_0_1px,transparent_1px_9px),linear-gradient(180deg,#f4f4f4,#e6e6e6)] px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6 dark:border-neutral-800 dark:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0_1px,transparent_1px_9px),linear-gradient(180deg,#161616,#0c0c0c)]">
        <HexWireframe className="pointer-events-none absolute right-6 top-2 hidden h-48 w-72 text-neutral-400/60 md:block dark:text-neutral-500/40" />

        <div className="relative flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="4.5" r="2" />
            <circle cx="12" cy="19.5" r="2" />
            <circle cx="5.5" cy="8.2" r="2" />
            <circle cx="18.5" cy="8.2" r="2" />
            <circle cx="5.5" cy="15.8" r="2" />
            <circle cx="18.5" cy="15.8" r="2" />
          </svg>
          <span className="h-6 w-px bg-neutral-400 dark:bg-neutral-600" />
          <span className="text-xl font-bold tracking-[0.12em]" style={{ fontFamily: "Mohican, sans-serif" }}>
            HUIX-2099
          </span>
          <span
            className="ml-1 text-[9px] uppercase leading-tight tracking-[0.14em] text-neutral-500"
            style={{ fontFamily: monoFont }}
          >
            Product
            <br />
            Index Monitor
          </span>
        </div>

        <div className="relative -mx-5 mt-6 bg-[#ff3b1f] px-5 py-4 text-neutral-950 sm:-mx-8 sm:px-8">
          <div
            className={`grid grid-cols-2 items-center gap-y-4 ${
              action ? "md:grid-cols-[1.3fr_repeat(3,1fr)_auto]" : "md:grid-cols-[1.4fr_repeat(3,1fr)]"
            }`}
          >
            <div className="col-span-2 md:col-span-1">{heading}</div>
            {stats.map((s) => (
              <div key={s.label} className="flex items-start justify-between gap-2 border-l border-neutral-950/40 px-4">
                <div>
                  <div className="text-2xl font-bold leading-none tabular-nums sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em]" style={{ fontFamily: monoFont }}>
                    {s.label}
                  </div>
                </div>
                {s.icon && <s.icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />}
              </div>
            ))}
            {action && <div className="col-span-2 flex justify-end md:col-span-1">{action}</div>}
          </div>
        </div>

        <div className="relative mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-4">
            <span
              className="text-7xl font-bold leading-[0.8] text-[#3f6b52] sm:text-8xl dark:text-[#c5dccd]"
              style={{ fontFamily: "Mohican, sans-serif" }}
            >
              {bigValue}
            </span>
            <div className="pt-1 text-sm font-semibold leading-tight text-[#3f6b52] dark:text-[#c5dccd]">{bigCaption}</div>
          </div>
          <div className="max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pt-2" aria-hidden>
        <span className="h-2.5 w-8 rounded-sm bg-neutral-400 dark:bg-neutral-700" />
        <span className="h-2.5 w-8 rounded-sm bg-neutral-400 dark:bg-neutral-700" />
        <span
          className={`h-2.5 w-1/3 rounded-sm ${interactive ? "transition-all duration-500 group-hover:w-2/5" : ""}`}
          style={{ backgroundImage: "repeating-linear-gradient(135deg, #ff3b1f 0 8px, #171717 8px 16px)" }}
        />
        <span className="h-2.5 w-8 rounded-sm bg-neutral-400 dark:bg-neutral-700" />
        <span className="h-2.5 w-8 rounded-sm bg-neutral-400 dark:bg-neutral-700" />
      </div>
    </div>
  );
}
