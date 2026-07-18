import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '@/app/App'
import { initSentry } from '@/app/observability/sentry'
import { reportWebVitals } from '@/app/observability/reportWebVitals'

// 개발 환경에서만 why-did-you-render를 로드해 리렌더 원인을 콘솔에 출력.
// 동적 import이므로 프로덕션 번들에는 포함되지 않으며, React를 패치해야 하므로
// 첫 렌더 이전에 await 한다.
if (import.meta.env.DEV) {
  await import('@/app/observability/wdyr')
}

initSentry()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Core Web Vitals 수집 시작 (LCP/CLS/INP)
reportWebVitals()
