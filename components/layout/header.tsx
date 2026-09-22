import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/examples/counter", label: "카운터 예제" },
  { href: "/examples/contact-form", label: "폼 예제" },
]

// 모든 페이지에서 공통으로 사용하는 헤더 — 로고, 네비게이션, 다크모드 토글
export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-sm font-semibold">
          Next Starter Kit
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-3 text-sm text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
