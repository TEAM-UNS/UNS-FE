/**
 * 앱 전역에서 쓰는 구조적 상수. 특정 도메인(예: todo, user) 개념은 넣지 않는다.
 * 도메인 상수는 각 feature 폴더 안에서 관리한다.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
} as const

export const MEDIA_QUERIES = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const
