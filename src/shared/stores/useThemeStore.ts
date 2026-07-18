import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark'

interface ThemeState {
  /** 현재 테마 */
  theme: Theme
  /** 테마를 지정 값으로 설정 */
  setTheme: (theme: Theme) => void
  /** light ↔ dark 토글 */
  toggle: () => void
}

/**
 * 서비스 전역 테마(라이트/다크) 상태.
 * 비도메인 전역 상태라 `shared/stores`에 둔다(여러 feature가 읽어야 하므로).
 * `persist`로 localStorage('uns-theme')에 저장돼 새로고침에도 유지된다.
 * DOM 적용(`<html>` class)은 `app/theme/useApplyTheme`가 담당한다(상태와 배선 분리).
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggle: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
    }),
    { name: 'uns-theme' },
  ),
)
