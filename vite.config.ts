import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 절대 경로 별칭. 아키텍처 경계(@/features, @/shared 등)를 import 문에서
      // 시각적으로 드러내고, 상대경로 '../../..' 지옥을 방지한다.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Vitest 설정을 Vite config에 병합해 플러그인/alias/resolve를 그대로 재사용한다.
  // (별도 vitest.config.ts를 두면 alias·플러그인을 중복 관리해야 함)
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    // 유닛 테스트는 src 내부만 대상으로 한다. Playwright E2E(e2e/)와 명확히 분리.
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', 'e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/*.config.*', '**/*.d.ts', 'src/test/**', 'e2e/**'],
    },
  },
})
