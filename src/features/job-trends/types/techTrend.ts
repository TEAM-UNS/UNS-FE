/**
 * 채용공고에서 집계된 기술/키워드 트렌드 한 건.
 */
export interface TechTrend {
  /** 기술/키워드 이름 (예: 'React') */
  keyword: string
  /** 해당 키워드가 등장한 공고 수 */
  count: number
  /** 지난주 대비 순위 변화 (양수=상승, 음수=하락, 0=유지) */
  rankDelta: number
}
