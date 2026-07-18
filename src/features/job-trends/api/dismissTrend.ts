import { removeMockTrend } from './mockTrendStore'

/**
 * 특정 키워드를 트렌드 목록에서 숨긴다. (POST /trends/dismiss)
 *
 * @param keyword 숨길 키워드
 * @remarks 현재는 목업(인메모리). 실제 API 연동 시 이 함수 내부만 교체. (TODO)
 */
export async function dismissTrend(keyword: string): Promise<void> {
  // TODO: 실제 API 연동 (예: POST /api/trends/dismiss)
  removeMockTrend(keyword)
  return Promise.resolve()
}
