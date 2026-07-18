import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 1분간 fresh — 불필요한 재요청 방지
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
