import type { TechTrend } from '../types'
import { readMockTrends } from './mockTrendStore'

/**
 * 채용공고 기술 트렌드 목록을 조회한다. (GET /trends)
 *
 * @returns 집계된 기술 트렌드 배열
 * @remarks 현재는 목업. 실제 API 연동 시 이 함수 내부만 교체하면 된다. (TODO)
 */
export async function fetchTechTrends(): Promise<TechTrend[]> {
  // TODO: 실제 API 연동 (예: GET /api/trends?period=weekly)
  return Promise.resolve(readMockTrends())
}
