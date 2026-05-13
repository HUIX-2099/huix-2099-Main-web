import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Typelr — Download & install | HUIX-2099",
  },
  description:
    "Download Typelr portable for Windows — Liberian typing trainer by HUIX-2099 (Victor Edet Coleman), Monrovia, Liberia.",
  alternates: { canonical: `${SITE_URL}/products/typelr/install` },
  openGraph: {
    title: "Typelr — Install | HUIX-2099",
    url: `${SITE_URL}/products/typelr/install`,
    type: "website",
  },
}

export default function TypelrInstallLayout({ children }: { children: ReactNode }) {
  return children
}
