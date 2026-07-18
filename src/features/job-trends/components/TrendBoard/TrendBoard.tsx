// ─────────────────────────────────────────────────────────────
// ⚠️ 레퍼런스 스캐폴드 — 디자인 시스템 구축 후 실제 UI로 대체 예정.
// ─────────────────────────────────────────────────────────────
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { trendQueries } from '../../api'
import { useDismissTrend } from '../../hooks/useDismissTrend'
import { sortTrendsByCount } from '../../utils/sortTrends'
import { TrendCard } from '../TrendCard'

/**
 * 채용공고 기술 트렌드를 순위대로 보여주는 보드.
 * 조회는 `trendQueries` 팩토리(껍데기 훅 X), 숨김은 뮤테이션 훅으로 처리한다.
 *
 * @returns 트렌드 순위 목록 UI (로딩·에러 시에는 각 상태 메시지)
 */
export function TrendBoard() {
  const { data, isPending, isError, error } = useQuery(trendQueries.list())
  // mutate는 참조가 안정적이라 자식(memo)에 그대로 넘겨도 안전하다.
  const { mutate: dismiss } = useDismissTrend()

  // 파생 상태(정렬 결과)는 useMemo로 계산해 data가 바뀔 때만 재정렬한다.
  const ranked = useMemo(() => sortTrendsByCount(data ?? []), [data])

  if (isPending) return <p className="text-sm text-gray-500">불러오는 중…</p>
  if (isError) return <p className="text-sm text-red-600">{error.message}</p>

  return (
    <ol className="flex flex-col gap-2">
      {ranked.map((trend, index) => (
        <TrendCard
          key={trend.keyword}
          trend={trend}
          rank={index + 1}
          onDismiss={dismiss}
        />
      ))}
    </ol>
  )
}
