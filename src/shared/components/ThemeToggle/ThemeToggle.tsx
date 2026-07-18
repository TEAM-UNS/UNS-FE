import { useThemeStore } from '@/shared/stores/useThemeStore'

/**
 * 라이트/다크 테마 토글 버튼. (시각 표현은 디자인 시스템에서 교체 예정)
 * 전역 테마 스토어를 selector로 구독하고, 안정적인 `toggle` action을 그대로 사용한다.
 *
 * @returns 현재 테마에 따라 아이콘이 바뀌는 토글 버튼
 */
export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const toggle = useThemeStore((state) => state.toggle)

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="테마 전환"
      className="rounded-md px-2 py-1 text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
