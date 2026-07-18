// ─────────────────────────────────────────────────────────────
// ⚠️ job-trends는 아키텍처 시연용 레퍼런스 feature다 (목업 데이터 사용).
// 실제 도메인 구현 시 이 폴더 전체를 대체한다. 폴더/배럴/상태 패턴 참고용.
// ─────────────────────────────────────────────────────────────
/**
 * job-trends feature의 공개 API (barrel).
 * 외부(pages, router 등)는 반드시 이 파일을 통해서만 feature에 접근한다.
 * 내부 구현 경로(../hooks/useTechTrends 등)를 외부에서 직접 import하지 않게 해
 * feature의 캡슐화를 유지한다.
 */
export { TrendBoard } from './components/TrendBoard'
export type { TechTrend } from './types'
