// ─────────────────────────────────────────────────────────────
// ⚠️ 레퍼런스 스캐폴드 — 디자인 시스템/실제 화면 구축 후 대체 예정.
// 라우팅·조립 패턴 참고용이며 프로덕션 페이지가 아니다.
// ─────────────────────────────────────────────────────────────
import { TrendBoard } from '@/features/job-trends'

/**
 * 홈 페이지. 채용공고 기술 트렌드 보드를 조립해 보여준다.
 * pages는 feature를 "조립"만 하며 상태 관리·이벤트 핸들링 로직은 두지 않는다.
 * 기본 export → router의 React.lazy가 청크 단위로 불러올 수 있다.
 *
 * @returns 트렌드 보드가 배치된 홈 화면
 */
export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-6 p-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">
          채용공고 기술 트렌드
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          지금 가장 많이 요구되는 기술을 한눈에.
        </p>
      </header>
      <TrendBoard />
    </section>
  )
}
