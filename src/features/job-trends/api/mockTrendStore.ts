// ─────────────────────────────────────────────────────────────
// ⚠️ 목업 전용 인메모리 스토어 — 실제 API 연동 시 이 파일은 삭제한다.
// fetch/dismiss가 같은 배열을 공유해, 무효화 후 재조회가 실제로 화면에 반영되게 한다.
// ─────────────────────────────────────────────────────────────
import type { TechTrend } from '../types'

let trends: TechTrend[] = [
  { keyword: 'React', count: 1284, rankDelta: 1 },
  { keyword: 'TypeScript', count: 1102, rankDelta: 2 },
  { keyword: 'Next.js', count: 947, rankDelta: 0 },
  { keyword: 'Node.js', count: 831, rankDelta: -1 },
  { keyword: 'AWS', count: 720, rankDelta: 3 },
]

/**
 * 현재 목업 트렌드 목록의 복사본을 반환한다.
 *
 * @returns 트렌드 배열 (원본 참조 노출 방지용 복사본)
 */
export function readMockTrends(): TechTrend[] {
  return [...trends]
}

/**
 * 특정 키워드를 목업 목록에서 제거한다.
 *
 * @param keyword 제거할 키워드
 */
export function removeMockTrend(keyword: string): void {
  trends = trends.filter((trend) => trend.keyword !== keyword)
}
