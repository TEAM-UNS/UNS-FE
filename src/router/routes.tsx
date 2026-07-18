/* 이 파일은 컴포넌트 모듈이 아니라 "라우트 설정" 모듈이라 fast-refresh 대상이 아니다.
   lazy 컴포넌트 정의와 routes 배열(비컴포넌트)을 함께 export 하므로 해당 규칙을 끈다. */
/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { RootLayout } from './RootLayout'

/**
 * ── 라우트 단위 코드 스플리팅 ──
 * 각 페이지를 React.lazy로 감싸면 Vite가 페이지별 청크(HomePage.[hash].js 등)를
 * 분리 생성한다. 최초 진입 시에는 진입한 라우트의 청크만 내려받고, 다른 페이지는
 * 실제로 이동할 때 네트워크로 가져온다 → 초기 번들 크기와 LCP를 줄인다.
 *
 * lazy를 "라우트 경계"에 적용하는 이유:
 * - 사용자는 보통 한 번에 하나의 페이지만 본다. 페이지는 자연스러운 분할 단위다.
 * - RootLayout(공통 네비게이션)은 lazy로 감싸지 않는다. 항상 즉시 필요하고,
 *   여기에 Suspense 경계를 두어 자식 청크 로딩을 한 곳에서 처리하기 때문이다.
 */
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
