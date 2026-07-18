import type { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'

/**
 * 전역 Provider를 한 곳에서 조합한다. (Query, 추후 Theme/Auth 등 추가 지점)
 *
 * @param props.children Provider 하위에 렌더할 자식 노드
 * @returns Provider로 감싼 children
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
