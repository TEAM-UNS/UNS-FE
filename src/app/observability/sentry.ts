import * as Sentry from '@sentry/react'

/**
 * Sentry 초기화 (에러 + Performance Monitoring).
 * DSN은 환경변수(VITE_SENTRY_DSN)로 주입하며, 없으면 초기화를 건너뛴다.
 */
export function initSentry() {
  const dsn = import.meta.env.VITE_SENTRY_DSN
  if (!dsn) return

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    integrations: [
      // Performance Monitoring: 페이지 로드/네비게이션 트랜잭션 자동 수집
      Sentry.browserTracingIntegration(),
    ],
    // 트랜잭션 샘플링 비율. 프로덕션에서는 0.1~0.2 정도로 낮추는 것을 권장.
    tracesSampleRate: 1.0,
  })
}
