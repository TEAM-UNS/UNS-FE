/**
 * 조건부 className을 합치는 초경량 헬퍼.
 * 외부 의존성(clsx 등) 없이 truthy 값만 공백으로 join 한다.
 * shared는 "순수" 계층이므로 특정 도메인 지식이 전혀 들어가지 않는다.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ')
}
