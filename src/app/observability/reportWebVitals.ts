import { onCLS, onINP, onLCP, type Metric } from 'web-vitals'

function handleMetric(metric: Metric) {
  if (import.meta.env.DEV) {
    // 개발 중에는 콘솔로 확인
    console.info(
      `[web-vitals] ${metric.name}`,
      Math.round(metric.value),
      metric,
    )
  }
  // 프로덕션: 분석 백엔드로 전송 (예시)
  // navigator.sendBeacon('/analytics', JSON.stringify(metric))
}

/**
 * Core Web Vitals 수집: LCP(로딩), CLS(레이아웃 안정성), INP(상호작용 반응성).
 * (web-vitals v5부터 FID는 INP로 대체됨)
 */
export function reportWebVitals() {
  onLCP(handleMetric)
  onCLS(handleMetric)
  onINP(handleMetric)
}
