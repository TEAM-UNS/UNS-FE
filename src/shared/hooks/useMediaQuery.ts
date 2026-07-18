import { useCallback, useSyncExternalStore } from 'react'

/**
 * matchMedia를 구독하는 반응형 훅. 외부 스토어(matchMedia) 구독에는
 * useSyncExternalStore가 정석이다.
 *
 * - subscribe를 useCallback으로 고정: query가 바뀔 때만 재구독한다
 *   (매 렌더 새 함수를 넘기면 React가 매번 재구독하므로 방지).
 * - 세 번째 인자(getServerSnapshot)로 SSR/최초 렌더 시 안전한 기본값 제공.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
