import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
// jest-dom 매처(toBeInTheDocument 등)를 Vitest의 expect에 등록
import '@testing-library/jest-dom/vitest'

// 각 테스트 후 렌더된 DOM을 정리해 테스트 간 격리를 보장
afterEach(() => {
  cleanup()
})
