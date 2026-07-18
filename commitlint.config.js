// Conventional Commits 검사 (커밋 설명 언어는 한글 허용).
// config-conventional의 subject-case 규칙은 라틴 문자 기준이라 한글 설명에는 영향 없음.
export default {
  extends: ['@commitlint/config-conventional'],
}
