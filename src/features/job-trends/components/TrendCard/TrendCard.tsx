// ─────────────────────────────────────────────────────────────
// ⚠️ 레퍼런스 스캐폴드 — 디자인 시스템 구축 후 실제 UI로 대체 예정.
// ─────────────────────────────────────────────────────────────
import { memo, useCallback } from 'react'
import { cn } from '@/shared/utils/cn'
import type { TechTrend } from '../../types'

interface TrendCardProps {
  /** 표시할 트렌드 데이터 */
  trend: TechTrend
  /** 목록에서의 순위 (1부터 시작) */
  rank: number
  /** 이 트렌드를 숨길 때 호출 (키워드를 인자로 전달) */
  onDismiss: (keyword: string) => void
}

/**
 * 트렌드 한 건을 순위 카드로 표시하고 숨김 버튼을 제공한다.
 * props가 동일하면 리렌더되지 않도록 `memo`로 감쌌다 — 이를 위해 `onDismiss`는
 * 안정적 참조여야 한다(TrendBoard가 mutate를 그대로 전달).
 *
 * @param props.trend 표시할 트렌드 데이터
 * @param props.rank 목록에서의 순위 (1부터 시작)
 * @param props.onDismiss 숨김 클릭 시 호출되는 콜백
 * @returns 순위·키워드·공고 수·순위 변화 + 숨김 버튼을 가진 `<li>` 카드
 */
export const TrendCard = memo(function TrendCard({
  trend,
  rank,
  onDismiss,
}: TrendCardProps) {
  // 인라인 함수 대신 useCallback으로 고정 (react-perf + memo 유지)
  const handleDismiss = useCallback(
    () => onDismiss(trend.keyword),
    [onDismiss, trend.keyword],
  )

  const deltaLabel =
    trend.rankDelta === 0
      ? '–'
      : trend.rankDelta > 0
        ? `▲ ${trend.rankDelta}`
        : `▼ ${Math.abs(trend.rankDelta)}`

  const deltaClass =
    trend.rankDelta > 0
      ? 'text-red-600'
      : trend.rankDelta < 0
        ? 'text-blue-600'
        : 'text-gray-400'

  return (
    <li className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3">
      <span className="flex items-center gap-3">
        <span className="w-6 text-right text-sm font-semibold text-gray-400">
          {rank}
        </span>
        <span className="font-medium text-gray-900">{trend.keyword}</span>
      </span>
      <span className="flex items-center gap-3 text-sm">
        <span className="text-gray-500">{trend.count.toLocaleString()}건</span>
        <span className={cn('w-10 text-right tabular-nums', deltaClass)}>
          {deltaLabel}
        </span>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label={`${trend.keyword} 숨기기`}
          className="text-gray-400 transition-colors hover:text-gray-700"
        >
          ✕
        </button>
      </span>
    </li>
  )
})
