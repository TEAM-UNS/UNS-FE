// ─────────────────────────────────────────────────────────────
// ⚠️ 레퍼런스 스캐폴드 — 디자인 시스템 구축 후 실제 UI로 대체 예정.
// 구조/패턴 참고용이며 프로덕션 컴포넌트가 아니다.
// ─────────────────────────────────────────────────────────────
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/utils/cn'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 색상 변형 (기본값 'primary') */
  variant?: ButtonVariant
}

// 컴포넌트 밖(모듈 스코프)의 상수. 렌더마다 새로 만들지 않으므로
// 불필요한 참조 변경이 없다 (react-perf 관점의 기본기).
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
  ghost: 'bg-transparent text-indigo-600 hover:bg-indigo-50',
}

/**
 * 공용 버튼. 표준 `<button>` 속성을 그대로 받고 변형(variant)에 따라 스타일을 입힌다.
 *
 * @param props.variant 색상 변형 ('primary' | 'ghost', 기본 'primary')
 * @param props.className 추가로 병합할 Tailwind 클래스
 * @returns 스타일이 적용된 `<button>` 엘리먼트
 */
export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-50',
        VARIANT_STYLES[variant],
        className,
      )}
      {...props}
    />
  )
}
