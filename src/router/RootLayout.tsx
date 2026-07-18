import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RouteFallback } from '@/shared/components/RouteFallback'
import { ThemeToggle } from '@/shared/components/ThemeToggle'
import { ROUTES } from '@/shared/constants'

// fallback 엘리먼트를 모듈 스코프에 한 번만 만들어 재사용한다.
// (렌더마다 <RouteFallback /> 를 새로 만들지 않도록 — react-perf)
const routeFallback = <RouteFallback />

/**
 * 모든 라우트를 감싸는 레이아웃. 여기에 단 하나의 `<Suspense>` 경계를 두어
 * 자식 라우트(lazy 페이지)의 청크가 로딩되는 동안 fallback을 보여준다.
 * 네비게이션은 항상 유지되고, `<Outlet />` 영역만 교체되며 로딩된다.
 *
 * @returns 상단 네비게이션 + Suspense로 감싼 `<Outlet />` 레이아웃
 */
export function RootLayout() {
  return (
    <div className="min-h-full bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* 레이아웃/Suspense 구조는 실제 인프라. 아래 nav의 시각 표현은
          placeholder — 디자인 시스템/실제 IA로 대체 예정 */}
      <nav className="flex items-center gap-4 border-b border-gray-200 p-4 text-sm font-medium dark:border-gray-800">
        <Link to={ROUTES.home}>홈</Link>
        <Link to={ROUTES.about}>소개</Link>
        <span className="ml-auto">
          <ThemeToggle />
        </span>
      </nav>
      <main>
        <Suspense fallback={routeFallback}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
