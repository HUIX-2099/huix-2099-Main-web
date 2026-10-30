import Image from "next/image"
import type { ComponentType, ReactNode } from "react"
import {
  Backpack,
  ChevronRight,
  Clock,
  Coins,
  Compass,
  Disc3,
  Flag,
  Fuel,
  Gauge,
  Gem,
  MapPin,
  Plus,
  Shield,
  Shirt,
  Sparkles,
  Swords,
  Target,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const ASSETS = "/products/Monrovia_hustle_Demo_Campane"
const SCENE_JAYBOY = `${ASSETS}/${encodeURIComponent("Monrovia Hustle 3D playable concept — 1 GAME JAY BOY.jpg")}`
const JAYBOY_PORTRAIT = `${ASSETS}/cast_concept/CHARACTERS/JAYBOY.jpeg`
const MH_ICON_LIGHT = `${ASSETS}/lighticon.png`
const MH_ICON_DARK = `${ASSETS}/darkicon.png`
const EVENT_ART = "/products/Monrovia_hustle_independence_day_edition/Loading_screen.png"
const BAY_ART = "/products/Monrovia_hustle_independence_day_edition/heo.png"

const SCREEN_WIDTH = 1280
const SCREEN_HEIGHT = 720

type ScreenVariant = "main" | "mall" | "entry"

const FIGURES: Record<ScreenVariant, { n: string; label: string; alt: string }> = {
  main: { n: "01", label: "Main interface", alt: "Monrovia Hustle concept main interface — Jayboy on Carey Street with HUD, map actions and player bar" },
  mall: { n: "02", label: "Event mall", alt: "Monrovia Hustle concept event mall — independence day storefront with category rail, deal card and player bar" },
  entry: { n: "03", label: "Function entry", alt: "Monrovia Hustle concept function entry — keke yard with labelled service bays and function list" },
}

function Currency({ kind, value }: { kind: "ld" | "gem"; value: string }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/55 py-1 pl-1 pr-3">
      <span
        className={cn(
          "grid h-6 w-6 place-items-center rounded-full",
          kind === "ld" ? "bg-[#e8b44a] text-[#231704]" : "bg-[#2f6fd6] text-white",
        )}
      >
        {kind === "ld" ? <Coins className="h-3.5 w-3.5" /> : <Gem className="h-3.5 w-3.5" />}
      </span>
      <span className="text-[13px] font-bold tabular-nums tracking-wide text-white">{value}</span>
      <Plus className="h-3 w-3 text-white/45" />
    </span>
  )
}

const PLAYER_TABS: { label: string; icon: ComponentType<{ className?: string }> }[] = [
  { label: "Heroes", icon: Swords },
  { label: "World", icon: MapPin },
  { label: "Formation", icon: Users },
  { label: "Equipment", icon: Shield },
  { label: "Stash", icon: Backpack },
]

function PlayerBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 flex h-[86px] items-stretch border-t border-white/10 bg-[#0a0a0d]/95 text-white">
      <div className="flex w-[286px] items-center gap-3 border-r border-white/10 px-6">
        <span className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-2 border-[#e8b44a]/70 bg-[#1d1d22]">
          <Image src={JAYBOY_PORTRAIT} alt="" fill loading="eager" sizes="50px" className="object-cover object-top" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[17px] font-black uppercase italic leading-none tracking-tight">Jayboy</p>
          <p className="mt-1.5 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.24em] text-white/45">
            LV. 27 <span className="tracking-normal text-[#e8b44a]">✦ ✦ ✦</span>
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center gap-7">
        {PLAYER_TABS.map(({ label, icon: Icon }, index) => (
          <span
            key={label}
            className={cn(
              "flex flex-col items-center gap-1",
              index === 0 ? "text-white" : "text-white/55",
            )}
          >
            <Icon className="h-[18px] w-[18px]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.18em]">{label}</span>
          </span>
        ))}
      </div>

      <div className="flex w-[118px] items-center justify-center border-l border-white/10">
        <Image
          src={MH_ICON_LIGHT}
          alt=""
          width={30}
          height={30}
          className="h-[30px] w-[30px] object-contain opacity-70 dark:hidden"
        />
        <Image
          src={MH_ICON_DARK}
          alt=""
          width={30}
          height={30}
          className="hidden h-[30px] w-[30px] object-contain opacity-70 dark:block"
        />
      </div>
    </div>
  )
}

function MenuButton({
  tone,
  eyebrow,
  label,
  icon: Icon,
}: {
  tone: "navy" | "red" | "gold"
  eyebrow: string
  label: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border px-4 py-2.5",
        tone === "navy" && "border-[#33518a] bg-[#0d2a5e]/95 text-white shadow-[0_6px_0_#06162f]",
        tone === "red" && "border-[#d4455d] bg-[#a80826]/95 text-white shadow-[0_6px_0_#530310]",
        tone === "gold" && "border-[#f1d089] bg-[#d9a441]/95 text-[#201302] shadow-[0_6px_0_#7c5b17]",
      )}
    >
      <Icon className="h-6 w-6 shrink-0" />
      <span className="min-w-0">
        <span className="block text-[8px] font-bold uppercase tracking-[0.3em] opacity-55">{eyebrow}</span>
        <span className="block truncate text-[19px] font-black uppercase italic leading-none tracking-tight">{label}</span>
      </span>
      <ChevronRight className="ml-auto h-4 w-4 opacity-45" />
    </div>
  )
}

function MainScreen() {
  return (
    <div className="relative h-[720px] w-[1280px] overflow-hidden bg-[#130708] text-white">
      <Image
        src={SCENE_JAYBOY}
        alt=""
        fill
        priority={false}
        loading="eager"
        sizes="1280px"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_58%_18%,transparent_25%,rgba(7,3,5,0.62)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[190px] bg-gradient-to-b from-black/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[270px] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Top HUD */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between px-7 py-6">
        <div className="relative">
          <span className="absolute -top-2 left-7 h-2 w-12 bg-[#BF0A30]" aria-hidden />
          <div className="border border-white/15 bg-[#101014]/90 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
            <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[#e8b44a]">
              <Sparkles className="h-3 w-3" />
              Activity
            </p>
            <p className="mt-1.5 text-[21px] font-black uppercase italic leading-none tracking-tight">Carey Street</p>
            <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Act 01 · 21:40 · light rain
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Currency kind="ld" value="7,600" />
          <Currency kind="gem" value="507" />
        </div>
      </div>

      {/* Narrative card */}
      <div className="absolute bottom-[126px] left-8 max-w-[360px] border-l-2 border-[#BF0A30] bg-black/45 px-4 py-3">
        <p className="font-serif text-[17px] italic leading-snug text-white/95">“Carey Street don’t love nobody. It just collect.”</p>
        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/40">Jayboy · inner voice</p>
      </div>

      {/* Function shortcuts */}
      <div className="absolute right-7 top-[168px] flex w-[210px] flex-col gap-2.5">
        <MenuButton tone="navy" eyebrow="Enter" label="Explore" icon={Compass} />
        <MenuButton tone="red" eyebrow="Crew" label="Recruit" icon={Users} />
        <MenuButton tone="gold" eyebrow="Track" label="Quests" icon={Target} />
      </div>

      {/* Objective strip */}
      <div className="absolute bottom-[104px] right-7 flex items-center gap-2 border border-white/10 bg-black/50 px-3 py-2">
        <Flag className="h-3.5 w-3.5 text-[#e8b44a]" />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">Find Trapper · Waterside</span>
      </div>

      <PlayerBar />
    </div>
  )
}

const MALL_CATEGORIES: {
  label: string
  note: string
  icon: ComponentType<{ className?: string }>
  active?: boolean
}[] = [
  { label: "Vehicles", note: "Keke · bikes", icon: Truck, active: true },
  { label: "Weapons", note: "Street tools", icon: Swords },
  { label: "Fits", note: "Wardrobe", icon: Shirt },
  { label: "Sound", note: "Tapes · radio", icon: Disc3 },
]

function MallScreen() {
  return (
    <div className="relative h-[720px] w-[1280px] overflow-hidden bg-[#080b14] text-white">
      <Image src={EVENT_ART} alt="" fill priority={false} loading="eager" sizes="1280px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      {/* Store rail */}
      <div className="absolute bottom-[104px] left-6 top-6 flex w-[372px] flex-col">
        <div className="border border-white/10 bg-[#0c0c11] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">Monrovia Hustle</p>
            <span className="flex items-center gap-1.5 bg-[#BF0A30] px-2 py-1 text-[8px] font-black uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Live
            </span>
          </div>
          <p className="mt-2 text-[28px] font-black uppercase italic leading-none tracking-tight">Event Mall</p>
          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40">July 26 drop · street storefront</p>
        </div>

        <div className="mt-3 flex-1 border border-white/10 bg-[#0c0c11]">
          {MALL_CATEGORIES.map(({ label, note, icon: Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-3 border-b border-white/8 px-4 py-4 last:border-b-0",
                active && "bg-[#f3e7c8] text-[#171204]",
              )}
            >
              <span
                className={cn(
                  "grid h-9 w-9 place-items-center border",
                  active ? "border-black/20 bg-black/5" : "border-white/15 bg-white/5 text-white/80",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-black uppercase tracking-[0.1em]">{label}</span>
                <span className={cn("block text-[8px] font-semibold uppercase tracking-[0.2em]", active ? "text-black/45" : "text-white/40")}>
                  {note}
                </span>
              </span>
              <ChevronRight className={cn("ml-auto h-4 w-4", active ? "text-black/35" : "text-white/25")} />
            </div>
          ))}
        </div>

        <div className="mt-3 flex-1 border border-white/10 bg-[#0c0c11] p-4">
          <p className="text-[8px] font-bold uppercase tracking-[0.26em] text-white/35">How it works</p>
          <p className="mt-2 text-[10px] leading-relaxed text-white/55">
            Buy with Liberian Dollars. Equip from the stash. Event stock rotates every Friday at the keke bay.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#e8b44a]">
            <span className="h-1 w-1 rounded-full bg-[#e8b44a]" />
            Featured: independence livery
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between border border-white/10 bg-[#0c0c11] px-4 py-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40">Closes in</span>
          <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#e8b44a]">06d · 12h · 44m</span>
        </div>
      </div>

      {/* Deal card */}
      <div className="absolute right-7 top-[64px] w-[372px] border border-[#e8b44a]/35 bg-[#0b0b10] p-5">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-black uppercase tracking-[0.28em] text-[#e8b44a]">Limited event</p>
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40">Jul 26 — Aug 02</span>
        </div>

        <p className="mt-3 text-[38px] font-black uppercase italic leading-[0.88] tracking-tight">
          Keke
          <br />
          Fiesta
        </p>

        <div className="relative mt-3 h-[112px] overflow-hidden border border-white/10 bg-[#0b0b10]">
          <Image
            src={BAY_ART}
            alt=""
            width={1920}
            height={1080}
            sizes="780px"
            className="absolute max-w-none"
            style={{ width: "210%", height: "auto", left: "-42%", top: "-160%" }}
          />
          <div className="absolute inset-y-0 left-0 w-[26%] bg-gradient-to-r from-[#0b0b10] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent" />
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-[22px] font-black leading-none text-[#e8b44a]">7,500</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">LD</span>
          <span className="ml-auto rounded-full bg-[#f3e7c8] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-[#1a1304]">
            10% off
          </span>
        </div>

        <p className="mt-3 text-[10px] leading-relaxed text-white/55">
          Limited body kit, chrome trim, and Independence Day livery for the yard. Event stock only.
        </p>

        <div className="mt-4 border-b-4 border-[#5c0414] bg-[#BF0A30] py-2.5 text-center text-[13px] font-black uppercase tracking-[0.18em]">
          Buy it
        </div>
      </div>

      {/* HUD */}
      <div className="absolute right-7 top-6 flex items-center gap-2.5">
        <Currency kind="ld" value="7,600" />
        <Currency kind="gem" value="507" />
        <span className="grid h-9 w-9 place-items-center border border-white/15 bg-black/55">
          <X className="h-4 w-4 text-white/70" />
        </span>
      </div>

      <PlayerBar />
    </div>
  )
}

function ScenePin({ label, stat, className }: { label: string; stat?: string; className?: string }) {
  return (
    <span
      className={cn(
        "absolute flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/70 px-3 py-1.5",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#e8b44a]" />
      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">{label}</span>
      {stat ? <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/40">{stat}</span> : null}
    </span>
  )
}

function EntryScreen() {
  return (
    <div className="relative h-[720px] w-[1280px] overflow-hidden bg-[#07090d] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={BAY_ART}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          sizes="3300px"
          className="absolute max-w-none"
          style={{ width: "255%", height: "auto", left: "-720px", top: "-420px" }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_40%,rgba(3,4,7,0.15)_30%,rgba(3,4,7,0.82)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[180px] bg-gradient-to-r from-[#07090d] via-[#07090d]/75 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-[#07090d] via-[#07090d]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black/90 to-transparent" />

      {/* Location card */}
      <div className="absolute left-6 top-6 w-[318px] border border-white/10 bg-[#0c0c11] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">Sharkfin refuge</p>
          <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">
            <Clock className="h-3 w-3" /> 06:37
          </p>
        </div>
        <p className="mt-2 text-[27px] font-black uppercase italic leading-none tracking-tight">Keke Yard</p>
        <p className="mt-2 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-white/40">
          District 01 · functional buildings and services
        </p>
      </div>

      {/* Scene labels */}
      <ScenePin className="left-[166px] top-[196px]" label="Repair bay" stat="Open" />
      <ScenePin className="left-[462px] top-[244px]" label="Market" stat="06:00" />
      <ScenePin className="left-[560px] top-[470px]" label="Race desk" stat="Fiesta" />
      <ScenePin className="left-[236px] top-[512px]" label="Stash" stat="12/40" />

      {/* Function hint */}
      <div className="absolute bottom-[108px] left-6 flex items-center gap-3 border border-white/10 bg-[#0c0c11] px-4 py-2.5">
        <Wrench className="h-3.5 w-3.5 text-[#e8b44a]" />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">Function entry · walk up to a bay</span>
      </div>

      {/* HUD */}
      <div className="absolute right-6 top-6 flex items-center gap-2.5">
        <Currency kind="ld" value="7,600" />
        <Currency kind="gem" value="507" />
      </div>

      <PlayerBar />
    </div>
  )
}

function ScreenShell({ variant, children }: { variant: ScreenVariant; children: ReactNode }) {
  const figure = FIGURES[variant]

  return (
    <figure className="min-w-0">
      <div className="border border-black/10 bg-white p-2 shadow-[0_2px_0_rgba(0,0,0,0.05),0_28px_60px_-32px_rgba(0,0,0,0.5)] dark:border-white/10 dark:bg-[#161616]">
        <div className="relative aspect-video w-full overflow-hidden bg-[#08080a]" role="img" aria-label={figure.alt}>
          <svg viewBox="0 0 1280 720" className="block h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <foreignObject x="0" y="0" width="1280" height="720">
              <div className="h-[720px] w-[1280px]">{children}</div>
            </foreignObject>
          </svg>
        </div>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/40">
        <span>
          Fig. {figure.n} — {figure.label}
        </span>
        <span>Concept UI · not final gameplay</span>
      </figcaption>
    </figure>
  )
}

export function InterfaceScreen({ variant }: { variant: ScreenVariant }) {
  return (
    <ScreenShell variant={variant}>
      {variant === "main" ? <MainScreen /> : variant === "mall" ? <MallScreen /> : <EntryScreen />}
    </ScreenShell>
  )
}
