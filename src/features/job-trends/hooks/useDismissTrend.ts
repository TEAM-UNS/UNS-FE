import { useMutation, useQueryClient } from '@tanstack/react-query'
import { dismissTrend, trendQueries } from '../api'

/**
 * 트렌드 키워드를 숨기고, 성공 시 트렌드 캐시를 무효화해 목록을 자동 갱신한다.
 * (뮤테이션은 "성공 후 무효화" 로직이 있어 팩토리가 아닌 훅으로 둔다)
 *
 * @returns useMutation 결과 (mutate, isPending 등)
 */
export function useDismissTrend() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: dismissTrend,
    onSuccess: () => {
      // trendQueries.all() = ['tech-trends'] → 관련 쿼리(list 등)를 전부 무효화 → 재조회
      queryClient.invalidateQueries({ queryKey: trendQueries.all() })
    },
  })
}
