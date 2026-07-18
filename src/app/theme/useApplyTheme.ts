import { useEffect } from 'react'
import { useThemeStore } from '@/shared/stores/useThemeStore'

/**
 * 현재 테마를 `<html>`의 class에 동기화한다.
 * (Tailwind의 `dark:` 변형이 이 class를 보고 다크 스타일을 적용한다)
 * 앱 루트(App)에서 한 번 호출한다.
 */
export function useApplyTheme() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
}
