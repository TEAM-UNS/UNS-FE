import type { TechTrend } from '../types'

/**
 * 트렌드를 공고 수(count) 내림차순으로 정렬한다. (원본 배열은 변경하지 않음)
 *
 * @param trends 정렬할 트렌드 배열
 * @returns count 기준 내림차순으로 정렬된 새 배열
 */
export function sortTrendsByCount(trends: TechTrend[]): TechTrend[] {
  return [...trends].sort((a, b) => b.count - a.count)
}
