// ─────────────────────────────────────────────────────────────
// ⚠️ 레퍼런스 스캐폴드 — 디자인 시스템의 로딩 컴포넌트로 대체 예정.
// 로딩 fallback이라는 "역할"은 유지되고 시각 표현만 교체된다.
// ─────────────────────────────────────────────────────────────
/**
 * 라우트 lazy 청크를 내려받는 동안 Suspense fallback으로 보여줄 로딩 상태.
 * 도메인 지식이 없는 순수 UI라서 shared에 위치한다.
 *
 * @returns 접근성 속성(role="status")을 가진 로딩 표시 엘리먼트
 */
export function RouteFallback() {
  return (
    <div
      className="flex items-center justify-center p-12"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm text-gray-500">페이지를 불러오는 중…</span>
    </div>
  )
}
